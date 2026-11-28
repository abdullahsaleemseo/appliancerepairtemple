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
    metaTitle: 'Appliance Error Code Decoder | Samsung, LG, Whirlpool, GE',
    metaDescription: 'Type the code on your washer, dryer, dishwasher, fridge or oven and see what it usually means, what to check first and when to call (254) 615-2088.',
    title: 'Appliance Error Code Decoder:',
    accent: 'What the Display Means',
    intro: "A code on the display is the appliance telling you where it thinks the problem is. Pick the appliance and the brand, type the code the way it shows, and the decoder gives you the usual meaning in plain words, the most likely cause, the checks that are safe to do yourself, and when to stop using it. It holds 116 common codes from Samsung, LG, Whirlpool, GE, Bosch, Frigidaire and the other names common around Temple.",
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
        q: "Why does the same code mean different things on different brands?",
        a: "Because each manufacturer writes its own list. OE is a drain fault on an LG washer, while an F code on a GE oven and one on a Frigidaire oven point to different problems. That's why the decoder asks for the brand first. A Kenmore often uses its maker's codes, so the prefix on its model tag is worth checking.",
      },
      {
        q: "My code isn't in the decoder. What now?",
        a: "Write down the full model number and look the code up in the owner's manual, which usually lists the brand's codes near the back. Try one power reset at the breaker. If the code returns, call with the code and the model number, and say whether it shows at the start of a cycle or partway through.",
      },
      {
        q: "Should I reset the appliance to clear a code?",
        a: "Once, after you've done the safe checks. Cutting the power at the breaker for about a minute clears many codes once the cause is gone. If the code comes straight back, stop resetting it; clearing a code without fixing the cause can let a small fault turn into a bigger one.",
      },
      {
        q: "The code comes and goes. Does that matter?",
        a: "Yes, it's a clue. A code that shows up only now and then often points to a loose connector, a sensor near the edge of its range, or a restriction that only builds up on long cycles. Choose \"It keeps coming back\" in the decoder, and mention the pattern when you call.",
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
    metaTitle: 'Appliance Repair Cost Estimator for Temple, TX Homes',
    metaDescription: 'See how big an appliance repair usually is, from parts and labor to an honest repair-or-replace read, before you call (254) 615-2088 in Temple, TX.',
    title: 'Appliance Repair Cost Estimator:',
    accent: 'Repair or Replace?',
    intro: "Before you call, get a feel for how big the job is. Pick the appliance and what it's doing, add the brand and its age, and the estimator shows the parts and labor a repair like that usually takes, plus a straight read on whether repairing still beats replacing. There are no dollar figures here: prices depend on the part, so the result comes back as a level you can ask about on the phone.",
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
        q: "Why doesn't the estimator show dollar amounts?",
        a: "Because the price turns on the exact part and how long the job takes, and a figure on a web page would only be a guess. The level tells you how big the repair usually is, so you know what to ask about. A technician gives the real price after finding the problem, before any work begins.",
      },
      {
        q: "Why does a built-in or premium appliance push the level up?",
        a: "Two reasons: parts for premium brands cost more, and built-in units take extra time to slide out and refit. The flip side is that they also cost more to replace, so a repair that looks large can still be the better choice for a high-end appliance.",
      },
      {
        q: "Why does the estimator ask for my ZIP code?",
        a: "To check that you're inside the area covered, Temple plus the nearby Bell County communities. A ZIP outside it is flagged and the result is treated as general guidance, since distance can change the visit. Ask about it when you call if you're near the edge.",
      },
      {
        q: "Is the result a quote?",
        a: "No. It's a guide to the size of the job, built from the parts and labor a repair like yours usually takes. The actual price comes after a technician has looked at the appliance, and no part goes in until you say yes.",
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
    metaTitle: 'Appliance Symptom Checker | No Error Code? Temple, TX',
    metaDescription: 'No code on the display? Describe what your fridge, washer, dryer, dishwasher or oven is doing and see the likely causes, ranked. (254) 615-2088.',
    title: 'Appliance Symptom Checker:',
    accent: 'No Error Code Needed',
    intro: "Most appliance trouble never shows a code. A fridge that runs warm, a dryer that takes two cycles, a dishwasher that leaves grit behind: the machine knows something's off, but it isn't saying what. Pick the appliance, the main symptom, anything else you've noticed, its age and how it's running right now, and the checker ranks up to three likely causes from your answers, with the reason behind each one.",
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
        q: "What if my symptom isn't in the list?",
        a: "Pick the closest one and add the rest in the other-symptoms step. If nothing comes close, skip the checker and call with a one-line description: what it's doing, when it started, and anything that changed recently, like a move or a power outage. That description is usually enough to point a technician in the right direction.",
      },
      {
        q: "Two things are wrong at once. Which do I pick first?",
        a: "Pick the one that bothers you most as the main symptom and add the other as an extra sign. The checker gives more weight to causes that explain both, which is often how the real fault shows itself. A warm fridge plus water under the crisper drawers, for example, points straight at the defrost system.",
      },
      {
        q: "Why does the checker ask how it's running right now?",
        a: "Because \"runs but poorly\" and \"won't start at all\" point to different parts. A fridge that hums and stays warm is a different job from one that's silent. It's also where you flag anything unsafe, which switches the result to safety steps instead of causes.",
      },
      {
        q: "Can the checker tell me whether it's worth fixing?",
        a: "It adds a short repair-or-replace note based on the appliance's age, but it doesn't know the price of the part. For a fuller picture, run the same appliance and problem through the cost estimator, then ask a technician for the real figure once the fault is confirmed.",
      },
    ],
  },
};

export const toolPageList = Object.values(toolPages);
