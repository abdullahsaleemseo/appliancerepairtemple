import assert from 'node:assert/strict';
import { test } from 'node:test';
import { toolConfig } from '../src/config/tools';
import { site } from '../src/config/site';
import { areas } from '../src/content/areas';
import { appliances, brandByKey, brandsByAppliance } from '../src/content/tools/appliances';
import { errorCategories, errorCodes } from '../src/content/tools/errorCodes';
import { issues, issuesByAppliance } from '../src/content/tools/issues';
import { maintenanceTasks } from '../src/content/tools/maintenance';
import { estimateCost, zipStatus, type CostInput } from '../src/lib/tools/cost';
import { diagnose, rankCauses } from '../src/lib/tools/diagnose';
import { decoderSeverity, lookupCode, matchKey, normalizeCode } from '../src/lib/tools/errorCodes';
import { generatePlan, scheduleTask } from '../src/lib/tools/maintenance';
import { cleanText, detectSafetySigns } from '../src/lib/tools/shared';

const issue = (id: string) => {
  const i = issues.find((x) => x.id === id);
  assert.ok(i, `issue ${id} exists`);
  return i;
};

// Data integrity

test('every appliance has brands, issues and maintenance tasks', () => {
  for (const a of appliances) {
    assert.ok(brandsByAppliance[a.key].length > 0, `${a.key} brands`);
    for (const b of brandsByAppliance[a.key]) assert.ok(brandByKey[b], `${a.key} brand ${b}`);
    assert.ok(issuesByAppliance[a.key].length >= 4, `${a.key} has 4+ issues`);
    const tasks = maintenanceTasks.filter((t) => t.appliance === a.key);
    assert.ok(tasks.length >= 3, `${a.key} has 3+ tasks`);
    assert.ok(tasks.some((t) => t.proOnly), `${a.key} has a professional task`);
  }
});

test('ids are unique and boost references resolve', () => {
  const ids = issues.map((i) => i.id);
  assert.equal(new Set(ids).size, ids.length);
  const taskIds = maintenanceTasks.map((t) => t.id);
  assert.equal(new Set(taskIds).size, taskIds.length);
  for (const i of issues) {
    for (const c of i.causes) for (const ref of c.boostIf?.issues ?? []) assert.ok(ids.includes(ref), `${i.id} -> ${ref}`);
  }
});

test('error code database has 60+ records with valid categories and no duplicates', () => {
  assert.ok(errorCodes.length >= 60);
  const seen = new Set<string>();
  for (const r of errorCodes) {
    assert.ok(errorCategories[r.category], `${r.code} category`);
    for (const b of r.brands) {
      for (const k of [r.code, ...(r.aliases ?? [])].map(matchKey)) {
        const key = `${r.appliance}|${b}|${k}`;
        assert.ok(!seen.has(key), `duplicate ${key}`);
        seen.add(key);
      }
    }
  }
});

test('service ZIPs in the tool config match the area pages', () => {
  const expected = new Set([...site.templeZips, ...areas.filter((a) => a.zipsVerified).flatMap((a) => a.zips)]);
  assert.deepEqual(new Set(toolConfig.postalCode.serviceZips), expected);
});

test('copy in tool data never shows currency', () => {
  const text = JSON.stringify({ issues, maintenanceTasks, errorCategories, errorCodes });
  assert.ok(!/\$\s?\d/.test(text));
});

// Error codes

test('codes are normalized for display and matching', () => {
  assert.equal(normalizeCode('  f8   e1 '), 'F8 E1');
  assert.equal(normalizeCode('c-d0'), 'C-D0');
  assert.equal(normalizeCode('<b>oe</b>'), 'BOEB');
  assert.equal(matchKey('Er IF'), 'IF');
  assert.equal(matchKey('err if'), 'IF');
  assert.equal(matchKey('F8-E1'), 'F8E1');
});

test('known codes decode for the right brand only', () => {
  assert.equal(lookupCode('washer', 'lg', 'oe')?.record.category, 'drain');
  assert.equal(lookupCode('washer', 'lg', '0E')?.record.category, 'drain', 'zero read as letter O');
  assert.equal(lookupCode('washer', 'samsung', '4e')?.record.code, '4C', 'alias');
  assert.equal(lookupCode('refrigerator', 'lg', 'Er IF')?.record.category, 'fan');
  assert.equal(lookupCode('washer', 'other', 'OE'), null, 'no guessing across brands');
  assert.equal(lookupCode('washer', 'lg', 'ZZ9'), null);
  assert.equal(lookupCode('washer', 'lg', ''), null);
});

test('danger signs override the code severity', () => {
  const found = lookupCode('washer', 'lg', 'UE');
  assert.equal(decoderSeverity(found, []), found?.severity);
  assert.equal(decoderSeverity(found, ['smoke']), 'critical');
  assert.equal(decoderSeverity(null, []), 'unknown');
  assert.deepEqual(detectSafetySigns('there is a burning smell and some smoke'), ['smoke', 'burning']);
  assert.deepEqual(detectSafetySigns('it beeps and stops'), []);
  assert.equal(cleanText('  a\u0000b \n c  '), 'a b c');
});

// Cost guide

const base: CostInput = {
  appliance: 'refrigerator',
  issue: issue('refrigerator-freezer-not-freezing'),
  brand: 'whirlpool',
  age: '2to5',
  zip: '76502',
  build: 'standard',
  urgent: false,
};

test('cost guide is deterministic', () => {
  assert.deepEqual(estimateCost(base), estimateCost({ ...base }));
});

test('modifiers raise the total and are listed', () => {
  const plain = estimateCost(base);
  const premium = estimateCost({ ...base, brand: 'subzero', build: 'builtin', urgent: true });
  assert.ok(premium.total.points[1] > plain.total.points[1]);
  assert.ok(premium.modifiers.length >= 3);
  assert.ok(premium.replace.replacementPoints > plain.replace.replacementPoints);
});

test('ZIP rules', () => {
  assert.deepEqual(zipStatus('76502'), { valid: true, inArea: true });
  assert.deepEqual(zipStatus('76513-1234'), { valid: true, inArea: true });
  assert.deepEqual(zipStatus('90210'), { valid: true, inArea: false });
  assert.deepEqual(zipStatus('7650'), { valid: false, inArea: false });
  const outside = estimateCost({ ...base, zip: '90210' });
  assert.ok(outside.modifiers.some((m) => m.label.startsWith('Outside')));
});

test('repair or replace weighs cost share and age', () => {
  const young = estimateCost({ ...base, age: 'under2' });
  assert.equal(young.replace.verdict, 'repair');
  const old = estimateCost({ ...base, issue: issue('refrigerator-not-cooling'), age: '10plus' });
  assert.equal(old.replace.verdict, 'replace');
});

// Symptom checker

test('unsafe status gives a critical stop result', () => {
  const d = diagnose({ issue: issue('refrigerator-not-cooling'), also: [], brand: 'lg', age: '5to10', status: 'unsafe', signs: ['sparking'] });
  assert.equal(d.critical, true);
  assert.equal(d.urgency, 'stop');
  assert.deepEqual(d.safeChecks, []);
});

test('leaking status raises urgency to today', () => {
  const d = diagnose({ issue: issue('washer-not-spinning'), also: [], brand: 'lg', age: '2to5', status: 'leaking', signs: [] });
  assert.equal(d.urgency, 'today');
});

test('extra symptoms reorder causes and explain why', () => {
  const i = issue('refrigerator-not-cooling');
  const plain = rankCauses(i, [], 'unknown', 'poor');
  assert.equal(plain[0].id, 'dirty-condenser');
  const boosted = rankCauses(i, [issue('refrigerator-compressor-clicking')], '10plus', 'stopped');
  assert.equal(boosted[0].id, 'start-relay');
  assert.ok(boosted[0].reasons.length >= 2);
  assert.ok(boosted.length <= 3);
});

// Maintenance

test('humidity and pets shorten coil cleaning', () => {
  const task = maintenanceTasks.find((t) => t.id === 'refrigerator-condenser-coils');
  assert.ok(task);
  const item = { appliance: 'refrigerator' as const, brand: 'lg' as const, age: '2to5' as const, usage: 'normal' as const };
  const normal = scheduleTask(task, item, []);
  const humidPets = scheduleTask(task, item, ['humid', 'pets']);
  assert.ok(humidPets.months < normal.months);
  assert.ok(humidPets.adjustments.length > 0);
});

test('variants filter tasks and concerns move tasks to the top', () => {
  const front = generatePlan({ items: [{ appliance: 'washer', brand: 'lg', age: '2to5', usage: 'normal', variant: 'front' }], env: ['humid'], concerns: ['odor'] });
  const top = generatePlan({ items: [{ appliance: 'washer', brand: 'lg', age: '2to5', usage: 'normal', variant: 'top' }], env: [], concerns: [] });
  const all = (p: typeof front) => Object.values(p).flat().map((t) => t.title);
  assert.ok(all(front).length > all(top).length, 'front-load gets gasket tasks');
  assert.ok(front.now.length > 0, 'odor concern creates check-now tasks');
  assert.ok(Object.values(front).flat().every((t) => t.applianceLabel === 'LG washer'));
});
