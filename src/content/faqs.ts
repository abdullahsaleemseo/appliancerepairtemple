import type { Faq } from './types';

/** FAQ page, grouped by topic. Each group renders as its own block; the page emits one FAQPage schema for all of them. */
export const faqGroups: { id: string; title: string; accent: string; faqs: Faq[] }[] = [
  {
    id: 'booking',
    title: 'Booking and',
    accent: 'scheduling',
    faqs: [
      {
        q: 'How do I schedule a repair?',
        a: 'Call during business hours, or send the request form with your appliance, what it is doing and your ZIP code. We call back to confirm the details and set a visit window.',
      },
      {
        q: 'Does sending the form book an appointment?',
        a: 'No. The form requests a callback. The appointment is set once we confirm a time with you by phone.',
      },
      {
        q: 'Do you offer same-day service?',
        a: 'Yes, same-day service is available, subject to technician availability, location, and current demand. Calling earlier in the day gives you a better shot at a same-day visit.',
      },
      {
        q: 'How quickly do you respond?',
        a: 'Our typical response is about 60 minutes during business hours. That is a typical figure, not a guaranteed arrival time, and it depends on availability, your location and demand that day.',
      },
      {
        q: 'What are your hours?',
        a: 'Monday to Saturday, 8:00 AM to 8:00 PM.',
      },
      {
        q: 'Do I need to be home for the visit?',
        a: 'An adult needs to be there to let the technician in and approve the repair. A landlord or property manager can approve a repair for a tenant if that is arranged when booking.',
      },
    ],
  },
  {
    id: 'visit',
    title: 'The visit and',
    accent: 'the diagnosis',
    faqs: [
      {
        q: 'What happens when the technician arrives?',
        a: 'The technician asks what you have noticed, tests the parts most likely to have failed and explains what is wrong and what the repair involves. Nothing is replaced until you say yes.',
      },
      {
        q: 'What should I do before the technician arrives?',
        a: 'Find the model number, usually on a label inside the door, under the lid or on the frame. Write down any error code, clear a path to the appliance and, if you can, empty the washer or dishwasher.',
      },
      {
        q: 'Can you tell me what is wrong over the phone?',
        a: 'We can talk through the symptoms and what they often point to, but the cause is confirmed on site. The same symptom can come from different parts on different models.',
      },
      {
        q: 'Do technicians carry parts?',
        a: 'Many common parts can be replaced on the first visit. Model-specific parts sometimes have to be ordered, and the technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'Are you licensed and insured?',
        a: 'Yes. We are licensed and insured.',
      },
    ],
  },
  {
    id: 'decide',
    title: 'Repair or',
    accent: 'replace',
    faqs: [
      {
        q: 'Is my appliance worth repairing?',
        a: 'Usually, if it is not near the end of its normal life and the failed part is a common one like a pump, fan, relay, belt or heating element. A common rule of thumb: if the repair would cost more than half of a comparable new appliance and the unit is getting old, replacement deserves a serious look.',
      },
      {
        q: 'How long do appliances usually last?',
        a: 'As a rough guide, refrigerators about 10 to 15 years, washers and dryers about 10 to 13, dishwashers about 9 to 12 and ranges about 13 to 15. Use and care move those numbers a lot.',
      },
      {
        q: 'Will you tell me if it is not worth fixing?',
        a: 'Yes. If a repair does not make sense for your appliance, the technician will say so, and the decision is yours.',
      },
    ],
  },
  {
    id: 'coverage',
    title: 'Appliances, brands',
    accent: 'and areas',
    faqs: [
      {
        q: 'Which appliances do you repair?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range or built-in microwaves. If you have something else, call and ask.',
      },
      {
        q: 'Which brands do you work on?',
        a: 'The major household brands, including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Kenmore, Electrolux, Amana and Speed Queen. Tell us the brand and model when you book.',
      },
      {
        q: 'Are you an authorized service center for any brand?',
        a: 'No. We are an independent repair service, not affiliated with or authorized by any manufacturer.',
      },
      {
        q: 'Do you repair gas appliances?',
        a: 'Yes. We repair gas ranges, ovens, cooktops and dryers. Tell us it is a gas appliance when you book so the technician comes prepared. If you smell gas, leave the house and call your gas provider or 911 from outside first.',
      },
      {
        q: 'Which areas do you serve?',
        a: 'Temple (76501, 76502, 76503, 76504 and 76508) plus Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody. Give us your address and we will confirm.',
      },
    ],
  },
  {
    id: 'payment',
    title: 'Payment and',
    accent: 'warranty',
    faqs: [
      {
        q: 'Why are there no prices on the website?',
        a: 'The cost depends on the appliance, the model and the part that failed, so a number on a web page would only be a guess. Call to discuss your repair needs with the brand and model number ready.',
      },
      {
        q: 'What payment options do you offer?',
        a: 'Flexible payment options are available. Ask about them when you call.',
      },
      {
        q: 'My appliance is still under warranty. Should I call you?',
        a: 'Check with the manufacturer or your extended plan first, since independent repair may not be covered by a factory warranty. If coverage has run out or you are not sure, call us with the model number.',
      },
      {
        q: 'I rent my home. Who pays for the repair?',
        a: 'That depends on your lease. Many leases make the landlord responsible for the appliances they supply, so check with your landlord or property manager before booking.',
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety',
    accent: 'first',
    faqs: [
      {
        q: 'When should I stop using an appliance right away?',
        a: 'If you see sparks, smell burning plastic or hot wiring, find scorch marks on a cord or outlet, or see water pooling near an outlet. Unplug it or switch off the breaker and call us.',
      },
      {
        q: 'My dryer smells hot. Is that dangerous?',
        a: 'It can be. Lint buildup is a leading cause of dryer fires. Stop the dryer, clean the lint screen and check that the outside vent flap opens when it runs. If the smell continues, do not use it until it has been checked.',
      },
    ],
  },
];

export const generalFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);

/** Homepage FAQs: the questions people ask before they call. Shown with FAQPage markup on the homepage. */
export const homeFaqs: Faq[] = [
  {
    q: 'What appliances do you repair in Temple?',
    a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves. If yours is not on that list, call and ask before you rule it out.',
  },
  {
    q: 'Do you offer same-day appliance repair?',
    a: 'Yes. Same-day service is available, subject to technician availability, location, and current demand. Calling earlier in the day gives you a better shot at a same-day visit.',
  },
  {
    q: 'How fast do you respond?',
    a: 'Our typical response is about 60 minutes during business hours. It depends on technician availability, your location and how busy the day is, so treat it as a typical figure, not a guaranteed arrival time.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday through Saturday, 8:00 AM to 8:00 PM. Requests sent outside those hours are answered when we reopen.',
  },
  {
    q: 'How much will my repair cost?',
    a: 'We do not list prices online because every repair depends on the appliance, the brand, the failed part and the problem. Call to discuss your repair needs. Having the model number and a short description of the problem ready makes that call more useful.',
  },
  {
    q: 'Do you offer payment options?',
    a: 'Yes. Flexible payment options are available. Call for service details and we will walk you through them.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Appliance Repair Temple is licensed and insured.',
  },
  {
    q: 'Should I repair my appliance or replace it?',
    a: 'Look at age and condition. A newer appliance with one failed part, such as a fan, pump, igniter or valve, is usually worth repairing. An older unit with a major failure, such as a compressor or transmission, deserves a closer look. The technician will explain the options so you can decide.',
  },
];

/** Main city page FAQs: local questions about coverage, timing, rentals, warranty and repair decisions in Temple. */
export const cityFaqs: Faq[] = [
  {
    q: 'Do you cover all of Temple, Texas?',
    a: 'Yes. We serve every Temple ZIP code: 76501, 76502, 76503, 76504 and 76508. That includes central Temple, the Historic District, West Temple along West Adams Avenue and Highway 317, and the south side of town.',
  },
  {
    q: 'Can a technician come out today?',
    a: 'Often, yes. Same-day appointments are available, subject to technician availability, location, and current demand. Our typical response is about 60 minutes during business hours, which is a typical figure, not a guaranteed arrival time.',
  },
  {
    q: 'What should I do while I wait for the technician?',
    a: 'For a warm refrigerator or freezer, keep the doors closed. For a washer or dishwasher full of water, turn it off and unplug it. For a dryer that smells hot, stop using it. If you smell gas, leave the house and call your gas utility from outside before anything else.',
  },
  {
    q: 'Do you repair appliances in rental homes and apartments?',
    a: 'Yes. Tenants should check the lease and tell the landlord first, since the landlord is often responsible for appliances they provide. Landlords and property managers can book directly. Just let us know who approves the repair and who will let the technician in.',
  },
  {
    q: 'My appliance is still under warranty. Should I call you?',
    a: 'Check with the manufacturer first. Independent repair may not be covered by a factory warranty. If the warranty has run out, or you are not sure, call us with the model number and we can talk it through.',
  },
  {
    q: 'Do you work on refrigerators and freezers in the garage?',
    a: 'Yes. Garage units work hard in a Temple summer, and they are a common call. Give the unit some space for airflow and keep the condenser coils clean between visits.',
  },
  {
    q: 'How do I know if a repair is worth it?',
    a: 'Look at the age of the appliance, the condition of the rest of it and whether the part is still available. The technician will explain what failed and whether the repair makes sense, and you make the call.',
  },
];
