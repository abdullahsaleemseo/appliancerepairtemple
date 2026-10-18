import type { Faq } from './types';

/** FAQ page, grouped by topic. Each group renders as its own block; the page emits one FAQPage schema for all of them. */
export const faqGroups: { id: string; title: string; accent: string; faqs: Faq[] }[] = [
  {
    id: 'booking',
    title: 'Getting',
    accent: 'connected',
    faqs: [
      {
        q: 'How do I get connected with an appliance repair pro?',
        a: 'Call the number on this site with your appliance, what it is doing and your ZIP code. Your call is connected with an independent local appliance repair provider, and you work out the details with them directly.',
      },
      {
        q: 'Can I request a repair online?',
        a: 'This site works by phone only. A short call lets you describe the appliance and the problem and be connected with a local provider in the same conversation, without filling out a form.',
      },
      {
        q: 'Can I get a technician out today?',
        a: 'That depends on the provider you are connected with and how busy the day is. Ask about availability when you are connected, and say it is urgent if it is.',
      },
      {
        q: 'How soon will a technician arrive?',
        a: 'Timing is set by the independent provider, not by this site. Ask the pro when they can come out and how they will let you know they are on the way, and plan around their answer.',
      },
      {
        q: 'Is the call free?',
        a: 'Yes. Calling the number on this site is a free service for homeowners. Ask the provider you are connected with about any trip charge, diagnostic charge or repair cost before work starts.',
      },
      {
        q: 'Do I need to be home for the visit?',
        a: 'Usually an adult needs to be there to let the technician in and approve the repair. If a landlord or property manager will approve a repair for a tenant, arrange that with the provider ahead of time.',
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
        a: 'A good technician asks what you have noticed, tests the parts most likely to have failed and explains what is wrong and what the repair involves. Ask that nothing be replaced until you say yes.',
      },
      {
        q: 'What should I do before the technician arrives?',
        a: 'Find the model number, usually on a label inside the door, under the lid or on the frame. Write down any error code, clear a path to the appliance and, if you can, empty the washer or dishwasher.',
      },
      {
        q: 'Can a pro tell me what is wrong over the phone?',
        a: 'A pro can talk through the symptoms and what they often point to, but the cause is confirmed on site. The same symptom can come from different parts on different models.',
      },
      {
        q: 'Do technicians carry parts?',
        a: 'Many technicians carry common parts that can be replaced on the first visit. Model-specific parts sometimes have to be ordered. Ask the technician whether that applies and what happens next.',
      },
      {
        q: 'How do I check that an appliance repair pro is licensed and insured?',
        a: 'It is your responsibility as the homeowner to verify this. Ask the provider what license they hold for the work, check what the State of Texas and your city require for that type of repair, and ask for a certificate of liability insurance before any work starts.',
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
        q: 'How do I find out if it is not worth fixing?',
        a: 'Ask the technician directly whether the repair makes sense for the age and condition of your appliance. A good technician gives a straight answer, and the decision is always yours.',
      },
    ],
  },
  {
    id: 'coverage',
    title: 'Appliances, brands',
    accent: 'and areas',
    faqs: [
      {
        q: 'Which appliances can I get repaired?',
        a: 'Local pros handle refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range or built-in microwaves. If you have something else, call and ask.',
      },
      {
        q: 'Which brands do local pros work on?',
        a: 'The major household brands, including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Kenmore, Electrolux, Amana and Speed Queen. Have the brand and model ready when you call, and ask the pro whether they work on it.',
      },
      {
        q: 'Is this site an authorized service center for any brand?',
        a: 'No. Appliance Repair Temple is an independent referral service, not affiliated with or authorized by any manufacturer. Ask the provider you are connected with about any brand authorization they hold.',
      },
      {
        q: 'Can I get gas appliances repaired?',
        a: 'Local pros work on gas ranges, ovens, cooktops and dryers. Say it is a gas appliance when you call, and ask the pro about their gas licensing. If you smell gas, leave the house and call your gas provider or 911 from outside first.',
      },
      {
        q: 'Which areas can I get appliance repair in?',
        a: 'Temple (76501, 76502, 76503, 76504 and 76508) plus Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody. Give your address when you call so you are connected with a provider who serves it.',
      },
    ],
  },
  {
    id: 'payment',
    title: 'Costs and',
    accent: 'warranties',
    faqs: [
      {
        q: 'Why are there no prices on the website?',
        a: 'The cost depends on the appliance, the model, the part that failed and the provider, so a number on a web page would only be a guess. Ask the pro you are connected with how pricing works, with the brand and model number ready.',
      },
      {
        q: 'How do I pay for a repair?',
        a: 'Payment is between you and the independent provider. Ask which payment methods they accept and when payment is due before work starts, and get an itemized invoice when the job is done.',
      },
      {
        q: 'My appliance is still under warranty. Who should I call?',
        a: 'Check with the manufacturer or your extended plan first, since independent repair may not be covered by a factory warranty. If coverage has run out or you are not sure, call with the model number and ask the provider about it.',
      },
      {
        q: 'I rent my home. Who pays for the repair?',
        a: 'That depends on your lease. Many leases make the landlord responsible for the appliances they supply, so check with your landlord or property manager before you call for a repair.',
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
        a: 'If you see sparks, smell burning plastic or hot wiring, find scorch marks on a cord or outlet, or see water pooling near an outlet. Unplug it or switch off the breaker, then call to get connected with a local pro.',
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
    q: 'What appliances can I get repaired in Temple?',
    a: 'Local pros handle refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves. If yours is not on that list, call and ask before you rule it out.',
  },
  {
    q: 'How does Appliance Repair Temple work?',
    a: 'It is a free referral service. You call the number on this site, describe the appliance and the problem, and your call is connected with an independent local appliance repair provider. You agree on the visit, the price and the terms with that provider directly.',
  },
  {
    q: 'Can I get a technician out today?',
    a: 'That depends on the independent provider and how busy the day is. Ask about availability when you are connected. If the problem is urgent, say so at the start of the call.',
  },
  {
    q: 'Is the call free?',
    a: 'Yes. Calling the number on this site costs you nothing. Ask the provider about any trip or diagnostic charge and what the repair will cost before you approve any work.',
  },
  {
    q: 'Can I get emergency appliance repair in Temple?',
    a: 'Emergency help may be available from local providers. Urgent problems include a washer leaking onto the floor, a refrigerator or freezer warming up with food inside, or a burning smell. Stop the damage first, then say it is urgent when you call.',
  },
  {
    q: 'What counts as an appliance emergency?',
    a: 'Anything that puts your home, your food or your safety at risk: water leaking or pooling, a refrigerator or freezer that is warming up, sparks, smoke or a burning smell, or an oven or range you cannot turn off. If you smell gas, leave the house and call your gas provider or 911 from outside before anything else.',
  },
  {
    q: 'How much will my repair cost?',
    a: 'This site does not list prices because every repair depends on the appliance, the brand, the failed part and the provider. Ask the pro you are connected with how pricing works. Having the model number and a short description of the problem ready makes that conversation more useful.',
  },
  {
    q: 'How do I pay for the repair?',
    a: 'Payment is arranged between you and the independent provider. Ask which payment methods they accept, when payment is due and whether you will get an itemized invoice.',
  },
  {
    q: 'How do I check that an appliance repair pro is licensed and insured?',
    a: 'Verifying this is the homeowner’s responsibility. Ask the provider what license they hold for the work, check what the State of Texas and the City of Temple require for that type of repair, and ask for a certificate of liability insurance before the technician starts.',
  },
  {
    q: 'How long does an appliance repair take?',
    a: 'Many common repairs can be finished on the first visit. How long it takes depends on the appliance, the failed part and how easy it is to reach. If the part is model-specific and not on hand, it has to be ordered and the repair is completed on a follow-up visit. Ask the technician which applies before any work starts.',
  },
  {
    q: 'Can I get gas appliances repaired?',
    a: 'Local pros work on gas ranges, ovens, cooktops and dryers, including propane models. Say it is a gas appliance when you call, and ask the pro about their gas licensing.',
  },
  {
    q: 'Is appliance repair available in towns outside Temple?',
    a: 'Yes. Along with Temple, local pros serve Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody. Give your address when you call.',
  },
  {
    q: 'Can I keep using an appliance that shows an error code?',
    a: 'It depends on the code. A drain or door lock code usually just stops the cycle. If the code comes with leaking water, a burning smell or tripped breakers, stop using the appliance and call. Write the code down either way.',
  },
  {
    q: 'Should I repair my appliance or replace it?',
    a: 'Look at age and condition. A newer appliance with one failed part, such as a fan, pump, igniter or valve, is usually worth repairing. An older unit with a major failure, such as a compressor or transmission, deserves a closer look. Ask the technician to explain the options so you can decide.',
  },
];

/** Main city page FAQs: local questions about coverage, timing, rentals, warranty and repair decisions in Temple. */
export const cityFaqs: Faq[] = [
  {
    q: 'Is appliance repair available across all of Temple, Texas?',
    a: 'Yes. Local pros serve every Temple ZIP code: 76501, 76502, 76503, 76504 and 76508. That includes central Temple, the Historic District, West Temple along West Adams Avenue and Highway 317, and the south side of town.',
  },
  {
    q: 'Can a technician come out today?',
    a: 'That depends on the independent provider you are connected with and how busy the day is. Ask about availability on the call, and say so if the problem is urgent.',
  },
  {
    q: 'Can I get emergency appliance repair in Temple?',
    a: 'Emergency help may be available from local providers. For a leak, a refrigerator or freezer warming up with food inside, or a burning smell, take steps to stop the damage first, then say it is urgent when you call.',
  },
  {
    q: 'My appliance stopped after a storm. What should I check?',
    a: 'Check the breaker and any GFCI outlet first, then unplug the appliance for a minute and plug it back in. If it still will not run, or it trips the breaker again, stop using it and call. A power surge can damage a control board.',
  },
  {
    q: 'Can I get gas ranges and dryers repaired in Temple?',
    a: 'Local pros work on gas and electric ranges, ovens, cooktops and dryers, including propane models. Say it is a gas appliance when you call, and ask the pro about their gas licensing.',
  },
  {
    q: 'Is there an appliance repair shop I can bring my appliance to?',
    a: 'Most major appliance repairs are done in your home. Local technicians come to homes in Temple and the nearby towns. Ask the provider you are connected with how they handle smaller appliances.',
  },
  {
    q: 'What should I do while I wait for the technician?',
    a: 'For a warm refrigerator or freezer, keep the doors closed. For a washer or dishwasher full of water, turn it off and unplug it. For a dryer that smells hot, stop using it. If you smell gas, leave the house and call your gas utility from outside before anything else.',
  },
  {
    q: 'Can I get appliances repaired in rental homes and apartments?',
    a: 'Yes. Tenants should check the lease and tell the landlord first, since the landlord is often responsible for appliances they provide. Landlords and property managers can call directly. Tell the provider who approves the repair and who will let the technician in.',
  },
  {
    q: 'My appliance is still under warranty. Who should I call?',
    a: 'Check with the manufacturer first. Independent repair may not be covered by a factory warranty. If the warranty has run out, or you are not sure, call with the model number and talk it through with the provider you are connected with.',
  },
  {
    q: 'Can I get refrigerators and freezers in the garage repaired?',
    a: 'Yes. Garage units work hard in a Temple summer, and they are a common repair. Give the unit some space for airflow and keep the condenser coils clean between service calls.',
  },
  {
    q: 'How do I know if a repair is worth it?',
    a: 'Look at the age of the appliance, the condition of the rest of it and whether the part is still available. Ask the technician to explain what failed and whether the repair makes sense, and you make the call.',
  },
];
