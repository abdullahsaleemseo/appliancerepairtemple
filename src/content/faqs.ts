import type { Faq } from './types';

export const generalFaqs: Faq[] = [
  {
    q: 'Which appliances do you repair?',
    a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range or built-in microwaves. If you have something else, call and ask.',
  },
  {
    q: 'Which brands do you service?',
    a: 'Most major household brands, including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch and Kenmore. Tell us the brand and model when you book so the technician can check parts ahead of time.',
  },
  {
    q: 'Do you offer same-day appointments?',
    a: 'Sometimes. Same-day service depends on how busy the day is and how early you call. When you reach us, we will tell you the earliest open time.',
  },
  {
    q: 'What happens during a diagnostic visit?',
    a: 'The technician checks the appliance, tests the parts most likely to have failed, explains what is wrong and gives you a price for the repair. Nothing is replaced until you approve the price.',
  },
  {
    q: 'How much does a diagnostic visit cost?',
    a: 'The diagnostic fee is quoted on the phone before the appointment is booked, so there are no surprises when the technician arrives.',
  },
  {
    q: 'Is it worth repairing my appliance or should I replace it?',
    a: 'A common rule: if the repair costs more than half the price of a comparable new appliance and the unit is near the end of its normal life, replacement starts to make sense. The technician will give you the number and an honest opinion.',
  },
  {
    q: 'Do you repair gas appliances?',
    a: 'Mention it is a gas range, oven or dryer when you book so we can confirm the right technician. If you smell gas, leave the house and call your gas utility from outside first.',
  },
  {
    q: 'Do technicians carry common parts?',
    a: 'Common parts are often on the truck. Model-specific parts may need to be ordered, and the technician will tell you how long that takes.',
  },
  {
    q: 'Which ZIP codes do you serve?',
    a: 'In Temple: 76501, 76502, 76503, 76504 and 76508. We also cover Belton, Killeen, Harker Heights, Salado and other nearby Central Texas towns. Give us your ZIP and we will confirm.',
  },
  {
    q: 'How do I schedule service?',
    a: 'Call during business hours, or fill out the request form with your appliance, the problem and your ZIP code. We call back to confirm a time.',
  },
  {
    q: 'Does submitting the form book an appointment?',
    a: 'No. The form requests a callback. We confirm the appointment time with you on the phone.',
  },
  {
    q: 'Do I need to be home for the repair?',
    a: 'An adult needs to be there to let the technician in and approve the repair price. Landlords can authorize a repair for a tenant if that is arranged when booking.',
  },
  {
    q: 'What should I do before the technician arrives?',
    a: 'Clear a path to the appliance, empty the dishwasher or washer if possible, and have the model number and any error codes ready.',
  },
  {
    q: 'Is the appliance still under the manufacturer’s warranty?',
    a: 'If it is less than a year old, or you bought an extended plan, check that first. Independent repair may not be covered by the manufacturer’s warranty.',
  },
];

/** Homepage preview: four questions, linked to the full FAQ page. */
export const homeFaqs: Faq[] = [generalFaqs[2], generalFaqs[3], generalFaqs[5], generalFaqs[9]];

/** Main city page FAQs, focused on response times, fees, brands, areas and repair vs replace. */
export const cityFaqs: Faq[] = [
  {
    q: 'How fast can a technician get to my home in Temple?',
    a: 'It depends on the day. Temple is the center of our service area, so it usually has the most open slots. Call and we will give you the earliest time available.',
  },
  {
    q: 'Is there a fee just to come out?',
    a: 'There is a diagnostic fee for the visit. We tell you the amount on the phone before booking, along with whether it is credited toward the repair.',
  },
  {
    q: 'Do you repair the brand I have?',
    a: 'Most likely. We see Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch and Kenmore every week. Tell us the model and we will confirm.',
  },
  {
    q: 'Which parts of Temple do you cover?',
    a: 'All of Temple, ZIP codes 76501, 76502, 76503, 76504 and 76508, plus Belton, Killeen, Harker Heights, Salado and other nearby towns.',
  },
  {
    q: 'Should I repair or replace an older appliance?',
    a: 'If the repair is under half the cost of a new unit and the appliance has a few good years left, repair usually wins. The technician will give you the price and an honest opinion.',
  },
  {
    q: 'Can you work with my landlord or property manager?',
    a: 'Yes. Let us know who approves the repair price and who will provide access, and we will coordinate with them.',
  },
];
