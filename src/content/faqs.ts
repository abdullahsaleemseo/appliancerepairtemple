import type { Faq } from './types';

/** FAQ page, grouped by topic. Each group renders as its own block; the page emits one FAQPage schema for all of them. */
export const faqGroups: { id: string; title: string; accent: string; faqs: Faq[] }[] = [
  {
    id: 'booking',
    title: 'Making',
    accent: 'the call',
    faqs: [
      {
        q: 'How do I reach an appliance repair technician through this site?',
        a: 'Dial the number shown on every page and have three things ready: the appliance, what it is doing and your ZIP code. The call is passed to a repair business that works in your area, and the visit, the bill and any follow-up are between you and that business.',
      },
      {
        q: 'Is there an online form?',
        a: 'No, it is phone only. Talking it through takes a couple of minutes and covers what a form would ask, plus the follow-up questions a form cannot.',
      },
      {
        q: 'Is a visit today realistic?',
        a: 'It can be, but this site cannot promise it. The repair business you reach decides based on its own workload. If the problem is urgent, say so before anything else.',
      },
      {
        q: 'How will I know when the technician is coming?',
        a: 'Arrival timing is set by the repair business, not by this site. Ask how they confirm the visit, whether by text or a phone call, and keep your phone close that day.',
      },
      {
        q: 'What does the call cost me?',
        a: 'Nothing. You pay only the repair business, and only for work you agree to. Before the technician starts, ask about a trip charge, a diagnostic fee and whether that fee is credited toward the repair.',
      },
      {
        q: 'Do I need to be home for the visit?',
        a: 'In most cases an adult has to open the door and okay the repair. For a tenant whose landlord approves the work, sort out who will be there and who signs off before the day of the visit.',
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
        a: 'Expect questions about what you have seen and heard, then testing of the parts that usually cause that symptom on your model. A careful technician explains the fault and the fix before replacing anything. Ask them to wait for your go-ahead.',
      },
      {
        q: 'How can I prepare for the visit?',
        a: 'Locate the model and serial number tag: inside the fridge door, under the washer lid, on the dryer door frame or along the edge of the dishwasher tub. Note any error code, move laundry baskets or stored items out of the way, and empty a washer or dishwasher if it is safe to.',
      },
      {
        q: 'Can someone diagnose the problem over the phone?',
        a: 'Only partly. A technician can say what a symptom usually points to, such as a clicking refrigerator often meaning a start relay, but the real cause shows up under test. Two models with the same symptom can need different parts.',
      },
      {
        q: 'Do technicians carry parts?',
        a: 'Many keep common wear parts in the van, such as belts, igniters, door switches and drain pumps. Control boards and model-specific parts often have to be ordered. Ask whether your repair is likely to need a second trip.',
      },
      {
        q: 'How do I verify a repair business’s license and insurance?',
        a: 'Ask the business which license covers the work, then check the Texas and local requirements for that type of repair yourself, especially for gas. Ask for a current certificate of liability insurance. This check is the homeowner’s job, so do it before any work begins.',
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
        a: 'If it is in the first half of its normal lifespan and the failure is a common part such as a pump, fan, relay, belt or heating element, repair usually comes out ahead. A rough rule many homeowners use: when the repair runs more than half the price of a comparable new unit and the old one is aging, compare replacement seriously.',
      },
      {
        q: 'How long do appliances usually last?',
        a: 'Rough lifespans: refrigerators 10 to 15 years, washers and dryers 10 to 13, dishwashers 9 to 12 and ranges 13 to 15. Hard water, heavy use and skipped maintenance shorten them, and regular care stretches them.',
      },
      {
        q: 'Will a technician tell me if a repair is not worth it?',
        a: 'Ask plainly: would you fix this one, given its age? A straight answer with the reasons behind it is what to expect from a good technician. The decision stays with you.',
      },
    ],
  },
  {
    id: 'coverage',
    title: 'Appliances, brands',
    accent: 'and areas',
    faqs: [
      {
        q: 'What kinds of appliances are included?',
        a: 'Major household appliances: refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and built-in or over-the-range microwaves. Commercial kitchen equipment and small countertop appliances are worth asking about separately.',
      },
      {
        q: 'Which brands can be repaired?',
        a: 'The common household names: Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Kenmore, Electrolux, Amana and Speed Queen. Some high-end or imported brands need special-order parts, so name the brand and model and ask the technician whether they work on it.',
      },
      {
        q: 'Is this site an authorized service center for any brand?',
        a: 'No. Appliance Repair Temple has no ties to any manufacturer and is not a factory-authorized service center. If brand authorization matters to you, ask the repair business whether it holds any.',
      },
      {
        q: 'What about gas appliances?',
        a: 'Gas ranges, cooktops, ovens and dryers are included. Mention the gas line when you call and ask the technician about gas licensing. If you smell gas, do not flip any switches; go outside and call the gas company or 911 from there.',
      },
      {
        q: 'Where is appliance repair available?',
        a: 'Temple (76501, 76502, 76503, 76504 and 76508), Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody. Share your full address on the call so it goes to a business that works there.',
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
        a: 'A posted price would be a guess. The bill depends on the appliance, the model, the failed part and the business doing the work. Ask how they price it, and have the brand and model number ready so the answer means something.',
      },
      {
        q: 'How is payment handled?',
        a: 'Directly with the repair business. Before the job starts, ask which methods it accepts and when payment is due, and ask for an itemized invoice at the end.',
      },
      {
        q: 'What if my appliance is still under a factory or extended warranty?',
        a: 'Call the manufacturer or the plan provider first. Many factory warranties require their own authorized service, so outside repair may not be reimbursed. When coverage is over or unclear, call with the model number and ask the repair business.',
      },
      {
        q: 'I rent my home. Who pays for the repair?',
        a: 'Your lease decides. Landlords commonly cover the appliances they supplied, so contact the landlord or property manager before arranging any repair yourself.',
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
        a: 'At the first sign of sparks, a burning plastic or hot wire smell, scorch marks on a cord or outlet, or water pooling near an outlet. Unplug it or turn off its breaker, and do not run it again until it has been looked at.',
      },
      {
        q: 'My dryer smells hot. Is that dangerous?',
        a: 'It can be. Lint is a leading cause of dryer fires. Turn the dryer off, clean the lint screen and go outside to see whether the vent flap opens while it runs. If the smell keeps coming back, leave it off until a technician has checked it.',
      },
    ],
  },
];

export const generalFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);

/** Homepage FAQs: the questions people ask before they call. Shown with FAQPage markup on the homepage. */
export const homeFaqs: Faq[] = [
  {
    q: 'Which appliances does the Temple line cover?',
    a: 'Refrigerators, freezers, top-load and front-load washers, gas and electric dryers, dishwashers, ranges, wall ovens, cooktops and over-the-range or built-in microwaves. A wine fridge, an ice machine or a second freezer in the garage is worth asking about too; describe it on the call.',
  },
  {
    q: 'How does Appliance Repair Temple work?',
    a: 'You call, say what the appliance is doing and where you live, and the call is routed to an appliance repair business that works in that area. The visit, the price and the terms are agreed between you and that business.',
  },
  {
    q: 'Could a technician look at it today?',
    a: 'Sometimes. It depends on the repair business that takes the call and how full its day already is. Mention early on that you are hoping for today so the answer comes up front.',
  },
  {
    q: 'Does the phone call cost anything?',
    a: 'No, dialing the line is free. Charges start with the repair business, so ask whether there is a trip or diagnostic fee and how the repair itself is priced before you say yes to any work.',
  },
  {
    q: 'When is it an emergency appliance repair?',
    a: 'Treat it as urgent when water is spreading, food is warming or something smells hot. Shut off the water valve or the breaker first, then open the call by saying it is urgent and what has happened so far, so the technician knows what to expect.',
  },
  {
    q: 'What counts as an appliance emergency?',
    a: 'Four situations: water on the floor that will not stop, a full refrigerator or freezer losing its cold, smoke, sparks or a hot electrical smell, and a burner or oven that will not shut off. A gas smell is different. Leave the house and call the gas company or 911 from outside.',
  },
  {
    q: 'How much does appliance repair cost in Temple?',
    a: 'It varies too much to post one number. A door switch on a dryer and a sealed-system leak on a refrigerator are very different jobs, and parts for a Samsung or Bosch can cost more than a basic Whirlpool part. Ask the technician how they price the visit and the repair, with the model number in hand.',
  },
  {
    q: 'Who do I pay for the repair?',
    a: 'The business that does the work, not this site. Ask which methods it accepts, when payment is due and whether you will get an invoice that lists parts and labor separately.',
  },
  {
    q: 'Should I check a technician’s license and insurance?',
    a: 'Yes, every time. Ask which license covers the job, which matters most for gas lines and hard-wired appliances, look up what Texas and the City of Temple require, and ask for a liability insurance certificate before any panel comes off.',
  },
  {
    q: 'How long does a typical repair take?',
    a: 'Swapping a common part such as a drain pump, igniter or door switch often fits in one visit. A model-specific control board or a sealed-system part may have to be ordered, which means a second trip. Ask which case yours is before work begins.',
  },
  {
    q: 'Can a technician work on a gas dryer or gas range?',
    a: 'Yes. Gas ranges, cooktops, wall ovens and dryers, including propane units on rural lots, are part of the call. Say the fuel type up front and ask about gas licensing before work starts.',
  },
  {
    q: 'Does the line cover Belton, Killeen and Salado?',
    a: 'Yes, along with Harker Heights, Nolanville, Morgan’s Point Resort, Troy, Little River-Academy, Rogers, Holland and Moody. Give your street address so the call reaches someone who works in that town.',
  },
  {
    q: 'Is it safe to keep running an appliance with an error code?',
    a: 'Some codes only stop the cycle, like a washer drain code or a dishwasher door latch code. Others come with warning signs: water under the unit, a burning smell or a breaker that keeps tripping. With those, unplug it and call. Either way, write down the code and the model number.',
  },
  {
    q: 'Is it worth fixing an older appliance?',
    a: 'Often, when one wear part has failed, such as a fan motor, pump, igniter or water valve. A dead compressor in a 14-year-old refrigerator or a failed transmission in an aging top-loader is where replacement starts to make more sense. Ask the technician to lay out both options.',
  },
];

/** Main city page FAQs: local questions about coverage, timing, rentals, warranty and repair decisions in Temple. */
export const cityFaqs: Faq[] = [
  {
    q: 'Which Temple ZIP codes and neighborhoods are covered?',
    a: 'All five Temple ZIP codes: 76501, 76502, 76503, 76504 and 76508. That takes in downtown, the Historic District, West Temple along West Adams Avenue and Highway 317, and the south side.',
  },
  {
    q: 'I need my appliance looked at today in Temple. Is that possible?',
    a: 'On some days. Whether a technician has room depends on the Temple business that takes your call and the jobs already on its list. Ask directly, and explain what is at stake, like a full freezer.',
  },
  {
    q: 'Can I get emergency appliance repair in Temple?',
    a: 'Say it is urgent in your first sentence, then describe the damage: how much water, how warm the freezer feels, what the smell is like. How quickly someone can come depends on the Temple business on the other end, so ask.',
  },
  {
    q: 'My appliance quit after a Central Texas thunderstorm. What should I check?',
    a: 'Reset the breaker and any tripped GFCI outlet in the kitchen, laundry room or garage, then leave the appliance unplugged for a full minute before plugging it back in. If it stays dead or trips the breaker again, a surge may have damaged the control board, so stop and call.',
  },
  {
    q: 'Are gas and propane appliances included in Temple?',
    a: 'Gas and electric ranges, cooktops, ovens and dryers are included, and so are propane units in homes on the edge of town that are not on a gas main. Tell the technician which fuel it runs on and ask about gas licensing.',
  },
  {
    q: 'Is there a Temple repair shop where I can drop off an appliance?',
    a: 'Full-size appliances are repaired where they sit, in the kitchen, laundry room or garage. For a countertop microwave or another small appliance, ask on the call whether the business takes those.',
  },
  {
    q: 'What should I do while I wait for the technician?',
    a: 'Keep a warm refrigerator or freezer shut and move the most perishable food to a cooler with ice. Unplug a washer or dishwasher that is holding water and lay towels at the door. If there is a gas smell, get everyone outside and call the gas utility from there.',
  },
  {
    q: 'I rent in Temple. Can I arrange an appliance repair?',
    a: 'Read the lease first and let the landlord know, because the owner usually answers for appliances that came with the unit. Landlords and property managers with Temple rentals can call themselves. Tell the technician who signs off on the repair and who can open the door.',
  },
  {
    q: 'My Temple appliance is still under warranty. Who should I call?',
    a: 'Start with the manufacturer or the company behind your extended plan, because work done outside that plan may not be paid for under it. Once coverage has ended, or if you cannot tell, call with the model and serial number and ask the technician.',
  },
  {
    q: 'Can garage refrigerators and freezers in Temple be repaired?',
    a: 'They can. Garage units have a hard time in a Temple summer, when the garage can run hotter than the outdoor high and the compressor barely rests. Leave a few inches of space around the unit and brush the condenser coils clean a couple of times a year.',
  },
  {
    q: 'How do I know whether to fix or replace?',
    a: 'Weigh three things: the appliance’s age, how the rest of it is holding up and whether the part can still be bought. Ask the technician what failed and what they would do in your place, then decide.',
  },
];
