import { site } from '@/config/site';
import { toolRoutes, type ToolKey } from '@/config/tools';
import type { Faq, IconName } from '../types';

/**
 * Page copy for the four tool pages. Local references come from src/config/site.ts so the
 * pages follow the business configuration. Each page keeps its own wording; do not share paragraphs.
 */

export type ToolPage = {
  key: ToolKey;
  path: string;
  /** Short name used in breadcrumbs and links between tools. */
  name: string;
  linkText: string;
  /** Homepage card. */
  card: { title: string; text: string; cta: string; icon: IconName };
  metaTitle: string;
  metaDescription: string;
  title: string;
  accent: string;
  intro: string;
  steps: { title: string; text: string }[];
  coversHeading: string;
  covers: string[];
  coversNote: string;
  safety: string;
  noscript: string;
  faqs: Faq[];
};

const { city, stateAbbr, county } = site;

export const toolPages: Record<ToolKey, ToolPage> = {
  maintenance: {
    key: 'maintenance',
    card: {
      title: 'Maintenance checklist',
      text: 'A printable plan for every appliance in the house, with shorter intervals for hard water, humidity and pets.',
      cta: 'Build my checklist',
      icon: 'calendar',
    },
    path: toolRoutes.maintenance,
    name: 'Maintenance Checklist Generator',
    linkText: 'Build a maintenance checklist for your appliances',
    metaTitle: `Appliance Maintenance Checklist Generator | ${city}, ${stateAbbr}`,
    metaDescription: `Pick your appliances, their age and your home conditions, then print a maintenance checklist with intervals set for hard water, humidity and pets. No sign-up.`,
    title: 'Appliance Maintenance Checklist',
    accent: 'built for your home.',
    intro: `Choose the appliances in your house, say how old they are and how hard they work, and get a checklist sorted into monthly, seasonal, yearly and professional tasks. ${county} homes on hard water or with pets get shorter intervals where it counts.`,
    steps: [
      { title: 'Pick your appliances', text: 'Select one or many, from the refrigerator to the pool heater.' },
      { title: 'Add the details', text: 'Brand, age, usage and placement for each, plus home factors such as hard water.' },
      { title: 'Print or save the plan', text: 'Tick tasks off as you go, copy the list, or print it and stick it inside a cabinet door.' },
    ],
    coversHeading: 'What the checklist covers',
    covers: [
      'Refrigerators and freezers: condenser coils, door gaskets, temperatures and water filters.',
      'Washers and dryers: drum cleaning, hoses, gaskets, lint screens and the full vent run.',
      'Dishwashers: filters, spray arms, seals and descaling for hard water.',
      'Ranges, ovens, cooktops and microwaves: burners, seals, filters and anti-tip brackets.',
      'Outdoor and specialty units: grills, pool heaters, wine coolers, ice makers and more.',
    ],
    coversNote: `Central Texas water is often hard, so dishwasher, washer and ice maker tasks shorten automatically when you tick hard or well water.`,
    safety: 'Unplug the appliance or switch off its breaker before any cleaning or inspection. Tasks marked professional only involve gas, sealed refrigeration or wiring and belong to a technician.',
    noscript: 'The checklist generator needs JavaScript. You can still use the task lists in the guides on this site, or call to talk a maintenance plan through.',
    faqs: [
      {
        q: 'How often should refrigerator coils be cleaned?',
        a: 'Once or twice a year in most kitchens. With shedding pets, a dusty garage or humid air, every three months keeps the compressor from running hot. The checklist sets the interval from your answers.',
      },
      {
        q: 'Why does hard water change the schedule?',
        a: 'Minerals coat spray arms, inlet screens, heating elements and ice maker valves. Cleaning and descaling more often keeps flow and heating where they should be.',
      },
      {
        q: 'Is dryer vent cleaning really a professional job?',
        a: 'Emptying the lint screen and clearing the outside hood are homeowner tasks. Cleaning the full duct run through walls or the attic takes rotary brushes and an airflow check, so the checklist lists it as professional service.',
      },
      {
        q: 'Can I save the checklist as a PDF?',
        a: 'Yes. Use Print / Save as PDF on the results and choose "Save as PDF" as the printer. Only the checklist prints, without the rest of the page.',
      },
      {
        q: 'Are my answers stored anywhere?',
        a: 'Only in this browser tab, so a reload keeps your progress. Closing the tab or pressing Clear answers removes them. Nothing is sent to a server.',
      },
    ],
  },
  errorCodes: {
    key: 'errorCodes',
    card: {
      title: 'Error code decoder',
      text: 'Type the code on the display and see what it usually means, what to check first and when to stop using it.',
      cta: 'Decode an error',
      icon: 'tool',
    },
    path: toolRoutes.errorCodes,
    name: 'Error Code Decoder',
    linkText: 'Look up what an appliance error code means',
    metaTitle: `Appliance Error Code Decoder: Samsung, LG, Whirlpool, GE & More`,
    metaDescription: `Type the code on your washer, dryer, dishwasher, fridge or oven display and see what it usually means, what to check first and when to stop using it.`,
    title: 'Appliance Error Code Decoder:',
    accent: 'what the display is telling you.',
    intro: `Choose the appliance and brand, type the code exactly as it shows, and get the usual meaning in plain English with safe first checks. It covers more than 100 common codes from Samsung, LG, Whirlpool, GE, Bosch, Frigidaire and other brands found in ${city} kitchens and laundry rooms.`,
    steps: [
      { title: 'Choose appliance and brand', text: 'Codes are brand specific, so the same letters can mean different faults.' },
      { title: 'Type the code', text: 'Spaces and capitals do not matter. "f8e1" and "F8 E1" read the same.' },
      { title: 'Read the result', text: 'Meaning, likely cause, safe checks, when to stop and the next step.' },
    ],
    coversHeading: 'Codes in the decoder',
    covers: [
      'Washers: fill, drain, door lock, unbalanced load, suds and motor codes.',
      'Dishwashers: leak protection, drain, fill, heating and circulation codes.',
      'Refrigerators: fan, sensor, defrost, ice maker and communication codes.',
      'Dryers: airflow restriction, thermistor, heating and power codes.',
      'Ovens and ranges: sensor, overheating, door lock and stuck key codes.',
    ],
    coversNote: 'When a code is not in the database, the decoder says so instead of guessing, and points you to the model number and the owner manual.',
    safety: 'A code never outranks what you can see or smell. Gas, smoke, sparks, a shock or water near wiring override the code: switch the appliance off and follow the safety steps first.',
    noscript: 'The decoder needs JavaScript. You can also find the code in the owner manual, or call with the code and model number ready.',
    faqs: [
      {
        q: 'Why does the decoder ask for the brand?',
        a: 'Brands reuse the same letters for different faults. OE is a drain fault on LG and Samsung washers, while F codes on a GE oven and a Frigidaire oven mean different things. Matching brand and appliance avoids a wrong answer.',
      },
      {
        q: 'What if my code is not found?',
        a: 'The decoder shows an honest "not in the database" result. Note the exact model number, check the owner manual, and if the code returns after a power reset, arrange a diagnosis.',
      },
      {
        q: 'Can I clear an error code myself?',
        a: 'Many codes clear after the cause is fixed and the power is cycled for a minute. Clearing a code without fixing the cause usually brings it back, sometimes after more damage.',
      },
      {
        q: 'How accurate are the meanings?',
        a: 'They are commonly published meanings for each brand. Model lines and years can differ, so each result notes that it has not been checked against every service manual.',
      },
      {
        q: 'Why does a code show up only sometimes?',
        a: 'Intermittent codes often point to a loose connector, a sensor near the edge of its range, or a restriction that only builds up on long cycles. Tick "It keeps coming back" for advice that reflects that.',
      },
    ],
  },
  cost: {
    key: 'cost',
    card: {
      title: 'Repair cost estimator',
      text: 'See how big a repair usually is, from parts to labour, and whether repairing still beats replacing.',
      cta: 'Check repair or replace',
      icon: 'tag',
    },
    path: toolRoutes.cost,
    name: 'Repair Cost Estimator',
    linkText: 'See what a repair usually involves and whether to replace',
    metaTitle: `Appliance Repair Cost Estimator: Repair or Replace? | ${city}, ${stateAbbr}`,
    metaDescription: `Pick the appliance, problem, brand and age to see the parts and labour a repair usually takes, the overall repair level and an honest repair-or-replace guide.`,
    title: 'Appliance Repair Cost Estimator:',
    accent: 'repair or replace?',
    intro: `Before you call, get a sense of how big the job is. Choose the appliance and the problem, then the brand, age and model type, and see the parts and labour a repair like this usually involves, plus a repair-or-replace comparison based on the appliance's expected life.`,
    steps: [
      { title: 'Describe the problem', text: 'Appliance, symptom and brand, from a fridge that will not cool to a dryer with no heat.' },
      { title: 'Add age, ZIP and model type', text: `Older, premium and built-in units change the picture. ${city} area ZIPs are recognized.` },
      { title: 'See the breakdown', text: 'Visit, parts and labour shown as levels, with the reasons behind every adjustment.' },
    ],
    coversHeading: 'How the estimate is worked out',
    covers: [
      'Each problem has a repair rule: the parts it usually needs, the labour hours and how involved the job is.',
      'The total combines the service visit, parts and labour, then applies adjustments for premium brands, built-in units, age and urgency.',
      'The same answers always give the same result. Nothing is random.',
      'Repair or replace compares the upper estimate with a comparable new unit and checks age against a typical lifespan.',
    ],
    coversNote: 'The site publishes no prices. Results show levels (Lower, Moderate, Higher, Major) and a share of replacement cost, so ask the technician for the actual price before any work starts.',
    safety: 'Cost never comes before safety. If there is a gas smell, smoke, sparking or a burning smell, the estimator shows safety steps instead of a cost guide.',
    noscript: 'The estimator needs JavaScript. You can also call, describe the problem and ask how the visit and diagnosis are priced.',
    faqs: [
      {
        q: 'Why are there no dollar amounts?',
        a: 'Prices depend on the provider, the model and the part that failed, so this site does not publish them. The estimator shows how large the repair usually is so you know what to ask about on the call.',
      },
      {
        q: 'When is an appliance worth repairing?',
        a: 'A common rule: if the repair costs less than about half of a comparable new unit and the appliance is not near the end of its typical life, repair usually makes sense. The estimator applies that rule and shows its reasons.',
      },
      {
        q: 'Do premium brands cost more to fix?',
        a: 'Usually, yes. Parts for brands such as Sub-Zero, Miele, Viking and Thermador cost more, and built-in units take longer to remove and refit. They also cost more to replace, which often keeps repair the better choice.',
      },
      {
        q: 'Why does the ZIP code matter?',
        a: `ZIPs outside the listed ${county} towns may add travel, so the estimator flags them and treats the result as general guidance.`,
      },
      {
        q: 'Is the estimate a quote?',
        a: 'No. It is general guidance. A technician gives the actual price after diagnosing the appliance, and you agree to it before work begins.',
      },
    ],
  },
  symptoms: {
    key: 'symptoms',
    card: {
      title: 'Symptom checker',
      text: 'No code on the screen? Describe what the appliance is doing and see the likely causes, ranked.',
      cta: 'Find the likely cause',
      icon: 'wrench',
    },
    path: toolRoutes.symptoms,
    name: 'Symptom Diagnostic Tool',
    linkText: 'Find the likely cause when there is no error code',
    metaTitle: `Appliance Symptom Checker: Find the Likely Cause | ${city}, ${stateAbbr}`,
    metaDescription: `No error code? Describe what your fridge, washer, dryer, dishwasher or oven is doing and see the likely causes, how urgent it is and what is safe to check.`,
    title: 'Appliance Symptom Checker:',
    accent: 'no error code needed.',
    intro: `A fridge that runs warm or a dryer that takes two cycles rarely shows a code. Describe the main symptom, anything else you noticed, the age and how it is running, and see up to three likely causes ranked from your answers, with the reasons for each.`,
    steps: [
      { title: 'Appliance, brand, symptom', text: 'Symptom lists change with the appliance, from compressor clicking to a disposal that hums.' },
      { title: 'Extra signs and age', text: 'A second symptom or an older unit can move a different cause to the top.' },
      { title: 'Ranked causes', text: 'Likely causes, urgency, safe checks and what to leave to a technician.' },
    ],
    coversHeading: 'How the checker ranks causes',
    covers: [
      'Every symptom starts with its common causes, most frequent first.',
      'Extra symptoms, the operating state and the age add weight to the causes they support.',
      'The result explains which answer moved each cause, so you can see the reasoning.',
      'Urgency runs from monitor to stop use now, and any unsafe sign replaces the result with safety steps.',
    ],
    coversNote: `It covers 18 appliance types found in ${city} homes, including ice makers, wine coolers, trash compactors and pool heaters.`,
    safety: 'The checker suggests only checks you can do with the power off. It never asks you to open sealed systems, gas lines or electrical panels.',
    noscript: 'The symptom checker needs JavaScript. You can also call and describe what the appliance is doing.',
    faqs: [
      {
        q: 'Is this an exact diagnosis?',
        a: 'No. It ranks the likely causes from what you report. Confirming the fault takes testing parts on site, which a technician does.',
      },
      {
        q: 'Why does the order change when I add symptoms?',
        a: 'Some causes explain two symptoms at once. A frosted freezer wall plus a warm fresh-food section points more strongly to a defrost fault than a warm section alone.',
      },
      {
        q: 'What does "Get help today" mean?',
        a: 'Food safety, water damage or daily use is at stake. A fridge that stopped cooling or a washer leaking onto the floor should not wait for the weekend.',
      },
      {
        q: 'Why does age matter?',
        a: 'Parts such as door gaskets, belts, bearings and start relays wear with age, so they rise up the list on older units. Age also feeds the repair-or-replace note.',
      },
      {
        q: 'What if I see smoke or smell gas?',
        a: 'Choose "Unsafe signs present". The checker stops and shows safety steps: switch off at the breaker, and for gas, leave the house and call 911 or the gas company from outside.',
      },
    ],
  },
};

export const toolPageList = Object.values(toolPages);
