import type { Faq } from './types';

/** FAQ page groups (source: content/faq-v2.md, Nov 2026). Answers may hold one inline [anchor](/path/) link; FAQPage schema strips it to plain text. */
export const faqGroups: { id: string; title: string; accent: string; faqs: Faq[] }[] = [
  {
    id: 'before',
    title: 'Before',
    accent: 'you call',
    faqs: [
      {
        q: "What should I check before calling about a dead appliance?",
        a: "Check the breaker first, then any GFCI outlet nearby, since kitchen, laundry and garage outlets trip more than people think. Make sure the water valve is open for a washer, dishwasher or ice maker, and that the door or lid closes fully. If it still won't run, that's the moment to call.",
      },
      {
        q: "I can't find the model number. Can I still book?",
        a: "Yes. Share the brand, the kind of appliance and the symptom; the tag can usually be found once the technician is there. Snap whatever label you do find. The [list of what to have ready, appliance by appliance](/get-connected/), shows where each type usually hides its tag.",
      },
      {
        q: "Water is spreading across the floor. What do I do first?",
        a: "Shut off the water to that appliance at its valve, usually behind the washer or fridge and under the sink for a dishwasher. If you can't find it, close the main. Unplug the appliance if you can reach the plug without standing in water, put towels down, then call.",
      },
      {
        q: "Is booking done by phone only?",
        a: "Yes. A short call is the quickest way to describe the problem, ask about cost and timing, and get on the schedule. With the brand, the tag's model number when it's reachable, and your street and ZIP in hand, and the call usually takes a few minutes.",
      },
    ],
  },
  {
    id: 'cost',
    title: 'Cost and',
    accent: 'paying',
    faqs: [
      {
        q: "How is the repair price worked out?",
        a: "It comes down to the part that failed and the time the repair takes. A thermal fuse or door switch is a small job; a compressor or control board is a big one. That's why the price comes after the diagnosis. Ask for the full figure, parts and labor, before any part is replaced.",
      },
      {
        q: "Is there a charge just for the visit?",
        a: "Ask when you call. Coming out and finding the problem takes time and a trip, so ask whether there's a visit or diagnostic charge, how much it is, and whether it's applied to the repair if you go ahead. Getting those answers up front means nothing comes as a surprise.",
      },
      {
        q: "What if the repair costs more than the appliance is worth?",
        a: "Then it's worth hearing that before anything is fixed. Set the repair against the appliance's age and what a similar new model would run; a big repair on an old unit often isn't worth it. The [guide to repairing or replacing an appliance](/blog/repair-or-replace-appliance/) walks through the math.",
      },
      {
        q: "How do I pay for the repair?",
        a: "Ask which payment methods are accepted when you book, and you'll have the answer before the technician arrives. Payment comes after the work you agreed to is done, and you should get a written record of what was replaced and what it cost.",
      },
    ],
  },
  {
    id: 'visit',
    title: 'During',
    accent: 'the visit',
    faqs: [
      {
        q: "Does someone need to be home?",
        a: "Usually, yes. An adult needs to let the technician in, show where the appliance is and approve the price once the problem is found. If that's hard to arrange, say so when you book, and ask whether a neighbor, family member or property manager can meet the technician instead.",
      },
      {
        q: "Should I pull the appliance out or empty it before the technician comes?",
        a: "Don't move it yourself; heavy appliances scratch floors and pull on water and gas lines. Clear a path and a little space in front of it. For a fridge, clear the back of the shelves and have a cooler ready. For a washer full of water, leave it; the technician can drain it.",
      },
      {
        q: "What if the part isn't on hand?",
        a: "Then the visit finds the failure and the exact part number, and the repair is finished when the part comes in. Ask how long that part usually takes and how the return trip is handled. Sending a sharp photo of the model tag ahead of time improves the odds of a one-trip fix.",
      },
    ],
  },
  {
    id: 'after',
    title: 'After',
    accent: 'the repair',
    faqs: [
      {
        q: "Is the repair covered if the same problem comes back?",
        a: "Ask before the work starts. Whether the part and the labor are covered afterward, and for how long, is a fair question for any technician, and the answer belongs on the paperwork. Keep that record, along with the date, so you can point to it if the same fault returns.",
      },
      {
        q: "What should I keep from the visit?",
        a: "Keep the invoice or written record: the date, the failed part, the part that went in and the cost. It helps if the appliance acts up again, and it tells the next technician what has already been done. A photo of the model tag kept with it saves time on any future call.",
      },
      {
        q: "How do I keep it from breaking again?",
        a: "Most repeat failures come from the same few habits: dusty condenser coils, lint in the dryer vent, a clogged dishwasher filter, washer hoses that never get checked. A short routine catches most of it, and the [maintenance checklist builder](/appliance-maintenance-checklist-generator/) puts one together for the appliances you own.",
      },
    ],
  },
  {
    id: 'brands-areas',
    title: 'Brands and',
    accent: 'areas',
    faqs: [
      {
        q: "My appliance is a brand I've never heard of. Can it still be repaired?",
        a: "Often, yes. Many lesser-known names are built by the big manufacturers and share their parts. Copy every character from the rating plate, phone with it, and you'll get a straight answer on whether parts can be found. The [brands grouped by who builds them](/brands/) shows those family ties.",
      },
      {
        q: "Which towns do you cover?",
        a: "Temple plus the Bell County towns around it, from Salado and Belton on I-35 to Killeen and Harker Heights on US-190, the lake at Morgan's Point Resort, and small towns like Troy, Rogers and Holland, with Moody just over the county line. Each one, with its ZIP codes and routes, is on [the Temple and Bell County coverage list](/service-areas/).",
      },
      {
        q: "I rent, or my house is brand new. Anything to do before calling?",
        a: "Yes, with one step first in each case. Renters should check the lease or ask the landlord, who usually arranges and pays for appliance repairs. For a home that's barely a year old, check the builder's and the manufacturer's warranty, since an installation fault may be theirs to fix.",
      },
    ],
  },
];

export const generalFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);
