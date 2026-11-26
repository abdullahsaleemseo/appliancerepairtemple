import type { ApplianceKey, Faq } from './types';

/**
 * Homepage copy (source: content/homepage-v2.md, Nov 2026). Fee and warranty are never stated on the site.
 */

export const homeServices: { key: ApplianceKey; heading: string; text: string; lead: string; anchor: string; after: string }[] = [
  {
    key: 'refrigerator',
    heading: 'Refrigerator repair',
    text: 'A refrigerator that runs warm puts a full week of groceries at risk, so it is treated as a priority. The usual causes are dusty condenser coils, a failed evaporator or condenser fan, a defrost problem or a worn start relay. Repairs also cover leaks, noisy compressors, ice makers and water dispensers on top-freezer, bottom-freezer, side-by-side and French door models.',
    lead: "A fridge that's warm on the fresh-food side but cold in the freezer usually has an airflow problem, and",
    anchor: 'what causes a refrigerator to stop cooling',
    after: ' is laid out symptom by symptom.',
  },
  {
    key: 'freezer',
    heading: 'Freezer repair',
    text: 'Chest freezers and upright freezers in garages work harder here than almost anywhere, because a Central Texas garage can stay hot well into the evening. When a freezer stops freezing, frosts over or runs without stopping, the technician checks the thermostat, the defrost system, the door seal and the condenser. Catching it early often saves the food inside.',
    lead: 'Chest and upright freezers fail in different ways, and it pays to know',
    anchor: 'how garage heat wears on a freezer',
    after: ' before summer arrives.',
  },
  {
    key: 'washer',
    heading: 'Washer repair',
    text: 'A washer full of standing water, a drum that will not spin or a puddle spreading across the laundry room floor all need attention quickly. Repairs cover top-load, front-load and stacked washers, including drain pumps, lid and door locks, inlet valves, belts, couplers and control boards.',
    lead: 'Where the cycle stopped is the most useful clue, so it helps to know',
    anchor: 'why a washer quits partway through a cycle',
    after: '.',
  },
  {
    key: 'dryer',
    heading: 'Dryer repair',
    text: 'When a dryer runs but stays cold, takes two cycles to dry a load or starts squealing, the cause is usually a heating element, a thermal fuse, an igniter, a belt or a clogged vent. Both gas and electric dryers are covered, and the vent run gets checked as part of the visit, because airflow problems cause most slow drying.',
    lead: "If drying times have crept up, it's worth knowing",
    anchor: 'why dryers stop heating or drying well',
    after: ' before you call.',
  },
  {
    key: 'dishwasher',
    heading: 'Dishwasher repair',
    text: 'Standing water in the bottom, gritty dishes or a leak under the door usually come from a clogged filter, a failing drain pump, a worn spray arm or a bad door gasket. Hard water makes some of these problems show up sooner. Built-in dishwashers from all the major brands are covered, including Bosch models that show error codes on the display.',
    lead: 'Spots, grit and film each point somewhere different, so',
    anchor: "what's left on the dishes after a cycle",
    after: ' is a useful first clue.',
  },
  {
    key: 'oven',
    heading: 'Oven, stove and range repair',
    text: 'An oven that will not heat, a burner that clicks but never lights or a door stuck locked after a self-clean are common calls. Technicians repair gas and electric ranges, wall ovens and cooktops, including bake and broil elements, igniters, temperature sensors and control boards. If you smell gas, leave the house first and call the gas company or 911 from outside.',
    lead: 'Gas and electric ranges fail in different places, and',
    anchor: 'oven and stove problems sorted by part',
    after: ' make it easier to find yours.',
  },
  {
    key: 'microwave',
    heading: 'Microwave repair',
    text: 'Over-the-range and built-in microwaves are worth repairing far more often than small countertop units, because they also serve as the vent fan and light for the stove. Technicians fix microwaves that run but do not heat, spark, stop mid-cycle or ignore the keypad.',
    lead: "Before paying for a repair, it's worth knowing",
    anchor: 'when a microwave is worth fixing',
    after: ' and when replacing it makes more sense.',
  },
];

export const homeProblems: { title: string; text: string }[] = [
  {
    title: 'Refrigerators and garage freezers in the summer heat.',
    text: 'Long, hot summers make condenser coils and fans work overtime. Dust on the coils, a weak condenser fan or a tired compressor relay can turn a fridge that was barely keeping up in May into a warm one by July.',
  },
  {
    title: 'Hard water scale.',
    text: 'Water in much of the area is hard, and the minerals build up in washer inlet valves, dishwasher spray arms and refrigerator ice maker valves. The first sign is often a slow fill, weak spray or small, hollow ice cubes.',
  },
  {
    title: 'Lint in long dryer vents.',
    text: 'Many homes have dryer vents that run through an attic or along an outside wall for a long distance. Lint builds up in those runs, the dryer overheats or takes forever, and the thermal fuse eventually gives out.',
  },
  {
    title: 'Older wiring and gas connections.',
    text: 'In older homes near downtown, a new range or dryer sometimes meets an outlet, cord or gas connection that was never meant for it. If the connection looks unsafe, the technician can point it out so you can have an electrician or plumber take care of it.',
  },
  {
    title: 'Washers stuck before the spin.',
    text: 'An unbalanced load, a clogged drain pump filter or too many suds from regular detergent in a high-efficiency washer stop more spin cycles than broken motors do.',
  },
];

export const homeSteps: { title: string; text: string }[] = [
  {
    title: 'Call us.',
    text: 'Phone (254) 615-2088 and describe the appliance, the brand and what it is doing. It helps to have the model number ready (inside the fresh-food section on most refrigerators, under the lid or on the door frame on most washers and dryers) and any error code on the display. With that, the technician can often bring the right part on the first trip.',
  },
  { title: 'Pick a time.', text: 'Ask for a visit window that fits your day.' },
  {
    title: 'Diagnosis and the price.',
    text: 'The technician finds the cause and explains it in plain terms. Ask for the repair price before any work starts.',
  },
  { title: 'The repair.', text: 'Once you approve, the technician makes the repair, tests the appliance and walks you through what was done.' },
];

/** FAQs. Inline links use [text](/path/); the FAQPage schema gets the plain text. */
export const homeFaqs: Faq[] = [
  {
    q: 'Do you repair all major brands?',
    a: 'Yes. Repairs cover Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Kenmore, Electrolux, Amana and Speed Queen appliances. If your brand is not on that list, call with the brand and model, and ask on the call whether a technician can work on it.',
  },
  {
    q: 'Do you repair appliances in rental homes and apartments?',
    a: 'Yes. Tenants, landlords and property managers across Temple can all book repairs, including for the many rentals near Temple College and the medical center. If you rent, check with your landlord first about who pays for the repair, then call with the unit address and the appliance details.',
  },
  {
    q: 'What should I do if my refrigerator stops cooling?',
    a: 'First check that it is plugged in, the thermostat has not been bumped and the vents inside are not blocked by food. Move perishables to a cooler with ice. If it is still warm after a couple of hours, the [common reasons a fridge stops cooling](/refrigerator-repair-temple-tx/) can help you describe it, then call (254) 615-2088.',
  },
  {
    q: 'Do you serve Belton, Killeen and Harker Heights?',
    a: "Yes. Along with Temple, service covers Belton, Killeen, Harker Heights, Salado, Nolanville, Morgan's Point Resort, Troy, Little River-Academy, Rogers, Holland and Moody. Mention your town and ZIP code when you call so the right technician gets scheduled.",
  },
  {
    q: 'How soon can you get to my home?',
    a: 'It depends on where you are and how full the schedule is that day. When you call, ask for a realistic arrival window and whether someone will let you know if it changes.',
  },
];
