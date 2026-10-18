import { errorCategories, errorCodes } from '../../content/tools/errorCodes';
import type { BrandKey, ErrorCategoryInfo, ErrorCodeRecord, PartsLevel, SafetySign, Severity, ToolApplianceKey } from '../../content/tools/types';

/** Display form: upper case, single spaces, hyphens kept. "  f8  e1 " becomes "F8 E1". */
export function normalizeCode(raw: string): string {
  return raw
    .toUpperCase()
    .replace(/[^A-Z0-9\- ]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 16);
}

/**
 * Matching key: no spaces or hyphens, and a leading "ER", "ERR" or "ERROR" prefix dropped,
 * so "Er IF", "ERIF" and "if" all match. Returns '' for empty input.
 */
export function matchKey(raw: string): string {
  const k = normalizeCode(raw).replace(/[\s-]/g, '');
  const stripped = k.replace(/^(ERROR|ERR|ER)(?=[A-Z0-9])/, '');
  return stripped || k;
}

/** Letter O and digit 0 look alike on many displays, so both readings are tried. */
function variants(key: string): string[] {
  return Array.from(new Set([key, key.replace(/O/g, '0'), key.replace(/0/g, 'O')]));
}

export type DecodedCode = ErrorCategoryInfo & {
  record: ErrorCodeRecord;
  severity: Severity;
  parts: [PartsLevel, PartsLevel];
};

function recordKeys(r: ErrorCodeRecord): string[] {
  return [r.code, ...(r.aliases ?? [])].map(matchKey);
}

/**
 * Finds a code for the appliance and brand. Only a match for the chosen brand counts: the same code
 * means different things across brands, so nothing is guessed and an unknown code returns null.
 */
export function lookupCode(appliance: ToolApplianceKey, brand: BrandKey, raw: string): DecodedCode | null {
  const key = matchKey(raw);
  if (!key) return null;
  const tries = variants(key);
  const candidates = errorCodes.filter((r) => r.appliance === appliance && recordKeys(r).some((k) => tries.includes(k)));
  const hit = candidates.find((r) => r.brands.includes(brand));
  if (!hit) return null;
  const cat = errorCategories[hit.category];
  return {
    ...cat,
    cause: hit.cause ?? cat.cause,
    record: hit,
    severity: hit.severity ?? cat.severity,
    parts: cat.parts,
  };
}

/** Brands that use this code on this appliance, for the "this code belongs to another brand" hint. */
export function otherBrandsWithCode(appliance: ToolApplianceKey, brand: BrandKey, raw: string): BrandKey[] {
  const tries = variants(matchKey(raw));
  const out = errorCodes
    .filter((r) => r.appliance === appliance && !r.brands.includes(brand) && recordKeys(r).some((k) => tries.includes(k)))
    .flatMap((r) => r.brands);
  return Array.from(new Set(out));
}

/** Example codes for the chosen appliance and brand, taken from the database, for the input hint. */
export function codeExamples(appliance: ToolApplianceKey, brand: BrandKey, limit = 3): string[] {
  const own = errorCodes.filter((r) => r.appliance === appliance && r.brands.includes(brand)).map((r) => r.code);
  if (own.length) return own.slice(0, limit);
  return errorCodes.filter((r) => r.appliance === appliance).map((r) => r.code).slice(0, limit);
}

/** Severity the decoder should show, raised to critical when danger signs are reported. */
export function decoderSeverity(found: DecodedCode | null, signs: SafetySign[]): Severity | 'unknown' {
  if (signs.length) return 'critical';
  return found ? found.severity : 'unknown';
}
