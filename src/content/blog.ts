import type { Post } from './types';

export const posts: Post[] = [
  {
    slug: 'refrigerator-not-cooling',
    title: 'What to Do When Your Refrigerator Is Not Cooling',
    metaDescription:
      'Refrigerator not cooling? Safe checks you can do in ten minutes, what the common causes are, and when to call a technician in Temple, TX.',
    excerpt:
      'Ten minutes of safe checks can tell you whether it is a quick fix or a service call. Here is what to look at first, and how to protect your food meanwhile.',
    published: '2026-10-14',
    updated: '2026-10-14',
    service: 'refrigerator',
    sections: [
      {
        id: 'protect-food',
        heading: 'First, protect the food',
        paragraphs: [
          'Keep the doors closed as much as you can. A closed refrigerator stays at a safe temperature for about four hours. A full freezer holds for about 48 hours.',
          'Put an appliance thermometer on a middle shelf. The fresh food side should be at or below 40°F and the freezer at 0°F. If the fridge has been above 40°F for more than two hours, perishables like milk, meat and leftovers should be thrown out.',
        ],
      },
      {
        id: 'safe-checks',
        heading: 'Safe checks you can do yourself',
        list: [
          'Check the thermostat or control panel. Kids, cleaning and bumped dials all change settings.',
          'Make sure the doors close fully. A tall item on a shelf or a drawer out of place can hold the door open just enough.',
          'Run a dollar bill along the door seal. If it slides out with no resistance, the gasket may not be sealing.',
          'Look at the vents inside the fridge and freezer. Packed food blocking them stops cold air from moving.',
          'Unplug the fridge and vacuum the condenser coils, usually behind the bottom grille or on the back. Dusty coils make the compressor work harder.',
          'Listen. Is the compressor humming? Is the fan inside the freezer running when the door switch is pressed?',
        ],
      },
      {
        id: 'common-causes',
        heading: 'The usual causes',
        paragraphs: [
          'If the freezer is cold and the fridge is warm, the evaporator coil has probably frosted over or the evaporator fan stopped. Both point to the defrost system or the fan motor.',
          'If both sides are warm and you hear clicking every few minutes, the compressor is trying to start and failing. That is often the start relay, which is an inexpensive part.',
          'If both sides are warm and the back of the fridge is quiet, the condenser fan, control board or compressor may be the problem.',
        ],
      },
      {
        id: 'when-to-call',
        heading: 'When to call a technician',
        paragraphs: [
          'Call if the checks above do not help, if you see heavy frost on the back wall of the freezer, or if the fridge is clicking but not running. These repairs need parts testing with a meter.',
        ],
        after: [
          'Tell us the brand, model number and what you have already tried. It saves time on the visit.',
        ],
      },
    ],
    safety:
      'Unplug the refrigerator before cleaning coils or removing any panel. Do not cut or puncture tubing. Refrigerant work requires EPA certification.',
    faqs: [
      {
        q: 'Should I turn my refrigerator off and back on?',
        a: 'Unplugging it for a few minutes can reset an electronic control, but if the cause is frost or a failed part, it will warm up again.',
      },
      {
        q: 'Can I manually defrost my refrigerator?',
        a: 'You can, by emptying it, unplugging it and leaving the doors open for a day with towels down. It helps short term, but if the defrost system failed, the frost will come back.',
      },
    ],
  },
  {
    slug: 'washer-not-draining',
    title: 'Why a Washer Will Not Drain: Safe Checks Before Booking Repair',
    metaDescription:
      'Washer full of water and won’t drain? Safe checks for top-load and front-load washers, the common causes, and when to call for repair.',
    excerpt:
      'A drum full of water is usually a clog, a kinked hose or a pump. Here is how to check each one without making a mess or a bigger problem.',
    published: '2026-10-14',
    updated: '2026-10-14',
    service: 'washer',
    sections: [
      {
        id: 'before-you-start',
        heading: 'Before you start',
        paragraphs: [
          'Turn the washer off and unplug it. Have towels, a shallow pan and a bucket nearby. On a front-loader, the water will come out of the filter access at the bottom front, and there can be a lot of it.',
        ],
      },
      {
        id: 'checks',
        heading: 'Checks in order',
        list: [
          'Drain hose: pull the washer out a few inches and look for kinks or a hose pushed too far into the standpipe.',
          'Pump filter (most front-loaders and some top-loaders): open the small door at the bottom front, drain the water through the small hose if there is one, then unscrew the filter slowly. Socks, coins and hair ties are common finds.',
          'Standpipe or laundry sink: if water backs up there, the clog is in the house drain, not the washer.',
          'Lid switch or door lock: some washers will not drain or spin if they cannot confirm the lid is locked. Listen for a click when the cycle starts.',
        ],
      },
      {
        id: 'common-causes',
        heading: 'If it still won’t drain',
        paragraphs: [
          'A humming sound with no water moving usually means the pump is jammed or its motor failed. Silence usually points to the pump not getting power, which can be a lock, a control or wiring problem.',
          'Drain pump replacement is one of the most common washer repairs and is usually done in one visit.',
        ],
      },
    ],
    safety:
      'Always unplug the washer before opening the filter access or moving it. Shut off the water valves if you disconnect hoses.',
    faqs: [
      {
        q: 'Can I run another cycle to get the water out?',
        a: 'Try a drain and spin cycle once. If it hums and does nothing, stop. Running a jammed pump can burn out the motor.',
      },
      {
        q: 'Is a washer that won’t drain worth repairing?',
        a: 'Usually yes. Pumps and lid switches are inexpensive compared to a new washer.',
      },
    ],
  },
  {
    slug: 'dryer-not-heating',
    title: 'Dryer Not Heating: When to Call an Appliance Technician',
    metaDescription:
      'Dryer runs but no heat? What you can safely check, why vents matter, the parts that usually fail, and when to call a technician in Temple, TX.',
    excerpt:
      'Most no-heat dryers come down to airflow or one failed heating part. Here is how to tell which, and what is safe to check yourself.',
    published: '2026-10-14',
    updated: '2026-10-14',
    service: 'dryer',
    sections: [
      {
        id: 'quick-checks',
        heading: 'Quick checks',
        list: [
          'Electric dryers use a double breaker. One half can trip while the drum still turns and the light works, leaving you with no heat. Flip it fully off and back on.',
          'Make sure the cycle is not set to air fluff or a no-heat setting.',
          'Clean the lint screen and look into the screen housing with a flashlight. Lint packed below the screen restricts airflow.',
          'Go outside and run the dryer. You should feel strong, warm air at the vent hood. Weak airflow means a clogged vent.',
        ],
      },
      {
        id: 'why-vents-matter',
        heading: 'Why vents matter',
        paragraphs: [
          'A dryer has safety devices that cut the heat when it runs too hot. A clogged vent makes it run too hot. So a vent problem often shows up as a no-heat problem, and replacing the heating part without clearing the vent means it will fail again.',
          'Long vent runs, crushed foil transition hoses and bird nests in the outside hood are the usual culprits.',
        ],
      },
      {
        id: 'parts',
        heading: 'The parts that usually fail',
        paragraphs: [
          'On electric dryers: the heating element, thermal fuse, high-limit thermostat or cycling thermostat. On gas dryers: the igniter, flame sensor or gas valve coils.',
          'Each one can be tested with a meter. A technician tests them in order and replaces only what failed.',
        ],
      },
      {
        id: 'when-to-call',
        heading: 'When to call',
        paragraphs: [
          'Call when the breaker and airflow are fine and there is still no heat, or right away if the dryer smells like burning or the cabinet feels very hot.',
        ],
      },
    ],
    safety:
      'Unplug electric dryers before removing any panel. For gas dryers, if you smell gas, leave the house and call your gas utility from outside.',
    faqs: [
      {
        q: 'How long should a normal load take to dry?',
        a: 'Around 40 to 60 minutes for a typical mixed load. If it is taking two cycles, check the vent first.',
      },
      {
        q: 'Can a dryer vent catch fire?',
        a: 'Yes. Lint is very flammable, which is why the U.S. Fire Administration recommends cleaning the lint filter every load and having the vent cleaned regularly.',
      },
    ],
  },
  {
    slug: 'repair-or-replace-appliance',
    title: 'How to Decide Whether to Repair or Replace an Appliance',
    metaDescription:
      'Repair or replace? A simple way to decide using appliance age, repair cost and condition, with typical lifespans for common appliances.',
    excerpt:
      'A plain rule of thumb, typical lifespans for each appliance, and the questions to ask the technician before you decide.',
    published: '2026-10-14',
    updated: '2026-10-14',
    service: 'general',
    sections: [
      {
        id: 'rule',
        heading: 'The 50 percent rule',
        paragraphs: [
          'If a repair costs more than half the price of a comparable new appliance, and the appliance is past the middle of its expected life, replacement is usually the better use of money. If either of those is not true, repair usually wins.',
          'It is a rule of thumb, not a law. A built-in refrigerator or a pro-style range costs so much to replace that repair almost always makes sense.',
        ],
      },
      {
        id: 'lifespans',
        heading: 'Typical lifespans',
        list: [
          'Refrigerator: 10 to 15 years',
          'Freezer: 10 to 20 years',
          'Washer: 10 to 13 years',
          'Dryer: 10 to 13 years',
          'Dishwasher: 9 to 12 years',
          'Range or oven: 13 to 15 years',
          'Over-the-range microwave: 7 to 10 years',
        ],
        after: ['These vary with brand, use and maintenance. A well-kept appliance can go well past them.'],
      },
      {
        id: 'questions',
        heading: 'Questions to ask the technician',
        list: [
          'What exactly failed, and why?',
          'What does the repair cost, all in?',
          'Is anything else close to failing?',
          'Are parts still available for this model?',
          'Would you repair this one if it were yours?',
        ],
      },
      {
        id: 'other',
        heading: 'Other things to weigh',
        paragraphs: [
          'Energy use matters for refrigerators and freezers, which run around the clock. A very old refrigerator may cost noticeably more to run than a new one.',
          'Installation costs matter too. Replacing a built-in dishwasher or an over-the-range microwave adds installation and haul-away on top of the price tag.',
        ],
      },
    ],
    safety: 'Leave sealed refrigeration, gas and high-voltage microwave work to a qualified technician.',
    faqs: [
      {
        q: 'Is it worth repairing a 10-year-old washer?',
        a: 'If it is a pump, switch, belt or suspension part, usually yes. A failed transmission or tub bearing at that age is a closer call.',
      },
      {
        q: 'Do new appliances last as long as old ones?',
        a: 'Newer appliances have more electronics, and control boards can be costly. On the other hand, they use less energy and water.',
      },
    ],
  },
  {
    slug: 'how-often-clean-dryer-vent',
    title: 'How Often Should You Clean a Dryer Vent?',
    metaDescription:
      'How often to clean a dryer vent, signs it is clogged, and what you can safely do yourself. Advice for homes in Temple and Bell County.',
    excerpt:
      'Once a year for most homes, more often for big households and long vent runs. Here are the warning signs and what you can safely do yourself.',
    published: '2026-10-14',
    updated: '2026-10-14',
    service: 'dryer',
    sections: [
      {
        id: 'how-often',
        heading: 'How often',
        paragraphs: [
          'For most homes, once a year. Large families, homes with pets and vents longer than about 25 feet or with several bends may need it every six months.',
          'Clean the lint screen after every load. It takes five seconds and is the single most useful habit for dryer life and safety.',
        ],
      },
      {
        id: 'signs',
        heading: 'Signs the vent is clogged',
        list: [
          'Clothes take more than one cycle to dry',
          'The dryer or the laundry room gets very hot',
          'Clothes come out hot but damp',
          'The outside vent flap barely opens when the dryer runs',
          'You smell something hot or burning',
          'The dryer has blown a thermal fuse',
        ],
      },
      {
        id: 'diy',
        heading: 'What you can do yourself',
        list: [
          'Unplug the dryer (and shut the gas valve on a gas dryer) before moving it.',
          'Replace a white vinyl or thin foil transition hose with a semi-rigid or rigid metal one.',
          'Disconnect the hose and clean it and the first few feet of the wall duct with a vent brush kit.',
          'Clean out the outside vent hood and make sure the flap swings freely.',
        ],
        after: [
          'Long runs through attics or up to the roof are better left to a vent cleaning service with the right tools.',
        ],
      },
    ],
    safety:
      'Never use a dryer without the lint screen in place. If you see lint inside the dryer cabinet near the burner or element, stop using it until it is cleaned.',
    faqs: [
      {
        q: 'Does a clogged vent damage the dryer?',
        a: 'Yes. It makes the dryer run hotter and longer, which wears out heating parts, thermal fuses and belts.',
      },
      {
        q: 'Can I vent a dryer indoors?',
        a: 'Not a gas dryer, ever. Electric dryers should also vent outside unless they are a ventless condenser or heat pump model.',
      },
    ],
  },
  {
    slug: 'dishwasher-drainage-problems',
    title: 'Common Dishwasher Drainage Problems',
    metaDescription:
      'Standing water in your dishwasher? The common causes, what you can check safely, and when a drain pump replacement is needed.',
    excerpt:
      'Standing water usually comes down to a filter, a hose, the disposal or the pump. Here is how to check them in order.',
    published: '2026-10-14',
    updated: '2026-10-14',
    service: 'dishwasher',
    sections: [
      {
        id: 'normal',
        heading: 'Some water is normal',
        paragraphs: [
          'Many dishwashers keep a small amount of water in the sump under the filter to keep seals wet. If you only see water down in that area, it may be fine. A pool covering the tub floor is not.',
        ],
      },
      {
        id: 'checks',
        heading: 'Checks in order',
        list: [
          'Filter: twist out the filter under the lower spray arm and rinse it. This fixes a lot of drainage complaints.',
          'Garbage disposal: if the dishwasher drains into a disposal, run the disposal. A newly installed disposal may still have its knockout plug in place.',
          'Drain hose: look under the sink for a kink or a sag. The hose should loop up high under the counter before connecting.',
          'Air gap: if there is a small cap on the sink deck, pull it off and clear any debris.',
        ],
      },
      {
        id: 'pump',
        heading: 'When it is the pump',
        paragraphs: [
          'If the filter, hose and disposal are clear and the dishwasher hums at the end of the cycle without draining, the drain pump has likely failed or is jammed with glass or a seed. A technician can clear or replace it.',
        ],
      },
      {
        id: 'hard-water',
        heading: 'Hard water and drainage',
        paragraphs: [
          'Mineral scale builds up in the sump and drain path over time. Using rinse aid and running a dishwasher cleaner every month or two keeps it under control.',
        ],
      },
    ],
    safety:
      'Turn off power at the breaker before reaching into the sump area or working under the sink. Watch for broken glass in the filter.',
    faqs: [
      {
        q: 'Can I use drain cleaner in my dishwasher?',
        a: 'No. Chemical drain cleaners can damage pump seals and plastic parts.',
      },
      {
        q: 'Why does my dishwasher drain into the sink?',
        a: 'A clog in the sink drain or disposal lets water back up. Clear the sink drain first.',
      },
    ],
  },
];

export const postHref = (p: Post) => `/blog/${p.slug}/`;
