import type { Post } from './types';

export const posts: Post[] = [
  {
    slug: 'refrigerator-not-cooling',
    title: 'Refrigerator Not Cooling? What to Check First and When to Call',
    metaTitle: 'Refrigerator Not Cooling? What to Check First | Temple, TX',
    metaDescription:
      'Refrigerator not cooling? How to protect your food, safe checks to try first, what the symptoms point to, and when to call a technician in Temple, TX.',
    excerpt:
      'A warm refrigerator is usually a fan, a defrost problem or dusty coils, not a dead compressor. Here is how to protect your food, what to check first and what the symptoms tell you.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'refrigerator',
    sections: [
      {
        id: 'short-version',
        heading: 'The short version',
        list: [
          'Keep the doors closed. A closed refrigerator keeps food safe for about 4 hours without cooling.',
          'Check the temperature setting, the power and whether the doors are sealing.',
          'Clean the condenser coils and make sure nothing blocks the vents inside.',
          'Notice the pattern: freezer cold and fridge warm, both warm, or clicking. Each points to different parts.',
          'If it is still warm after these checks, call a technician. Most causes are common, repairable parts.',
        ],
      },
      {
        id: 'protect-food',
        heading: 'First, protect the food',
        paragraphs: [
          'Keep the doors shut as much as you can. According to USDA food safety guidance, a refrigerator that stays closed keeps food safe for about 4 hours. A full freezer holds its temperature for about 48 hours, or about 24 hours if it is half full.',
          'Put an appliance thermometer on a middle shelf. The fresh-food section should be at or below 40°F and the freezer at or near 0°F. Perishable foods like meat, poultry, seafood, milk, eggs and leftovers that have been above 40°F for more than 2 hours should be thrown out. When in doubt, throw it out, and never taste food to decide whether it is safe.',
          'If you have a cooler, move the most perishable items into it with ice. Frozen food that still has ice crystals or is at 40°F or below can be refrozen or cooked.',
        ],
      },
      {
        id: 'safe-checks',
        heading: 'Safe checks to try first',
        paragraphs: [
          'Many warm-refrigerator calls turn out to have a simple cause. These checks take about fifteen minutes and need no tools beyond a vacuum.',
        ],
        list: [
          'Check the setting. Dials and touch controls get bumped during cleaning or by kids. Some models also have a showroom or demo mode that turns cooling off while the lights stay on.',
          'Confirm power. If the light is off too, check the outlet and the breaker. A GFCI outlet in a garage or kitchen may have tripped.',
          'Close the doors properly. A tall bottle, a drawer out of its track or a full door bin can hold a door open just enough to let warm air in.',
          'Test the door seal. Close the door on a dollar bill. If it slides out with no resistance at several points, the gasket may not be sealing.',
          'Clear the vents. Inside the fridge and freezer there are small vents that move cold air between the sections. Packed food in front of them stops the airflow.',
          'Clean the condenser coils. Unplug the refrigerator, then vacuum the coils behind the bottom grille or on the back. Dusty coils make the system work harder and cool less.',
          'Give it room. A refrigerator pushed tight into a cabinet or against a wall needs space to release heat. Check the clearance in your owner’s manual.',
        ],
        after: [
          'If you changed a setting or cleaned the coils, give the refrigerator up to 24 hours to settle before deciding it still has a problem.',
        ],
      },
      {
        id: 'what-it-means',
        heading: 'What the symptoms point to',
        paragraphs: [
          'Freezer cold, fridge warm. This is the most common pattern. Cold air for the fresh-food section usually comes from the freezer, so if it stops flowing, the fridge warms first. Common causes are a failed evaporator fan, a damper that is stuck closed, or a defrost problem that has let frost build up on the evaporator coil. Heavy frost on the back wall of the freezer is a strong clue that the defrost system has failed.',
          'Both sections warm, with a click every few minutes. The compressor is trying to start and shutting off. That is often the start relay or overload, a small and common part, though it can also be the compressor itself.',
          'Both sections warm and quiet at the back. Check whether the condenser fan near the compressor is turning. A failed condenser fan, a control board or a temperature sensor can stop cooling without much noise.',
          'Runs all the time but never gets cold enough. Dirty coils, a weak fan, a bad door seal or an overloaded fridge are common causes. Less often, a sealed system problem such as a refrigerant leak.',
          'Water under the crisper drawers or ice in the bottom of the freezer. A clogged defrost drain usually causes this, and it often comes with cooling problems because the same defrost system is involved.',
        ],
      },
      {
        id: 'temple-heat',
        heading: 'Central Texas heat and garage refrigerators',
        paragraphs: [
          'In Temple, summer is when refrigerator calls peak. Higher kitchen temperatures and dusty coils add up, and a refrigerator that was barely keeping up in spring can fall behind in July.',
          'Garage refrigerators and freezers have it harder. Many standard refrigerators are not designed to run in a space that gets very hot or close to freezing, and some will warm up or stop cycling properly in those conditions. If yours only misbehaves on the hottest or coldest days, that is useful information for the technician. Some manufacturers sell garage-ready models built for wider temperature ranges.',
        ],
      },
      {
        id: 'when-to-call',
        heading: 'When to call a technician',
        paragraphs: [
          'Call if the refrigerator is still warm after the checks above, if there is heavy frost on the back wall of the freezer, if it clicks but does not run, or if you see water collecting inside. These repairs need parts testing with a meter, and some need panels removed that are best left to a technician.',
          'Most of the parts behind these problems, such as fans, relays, defrost heaters, sensors and thermostats, are common and reasonable to replace. A failed compressor or a refrigerant leak is a bigger repair. On a refrigerator past about 10 to 15 years old, the technician will help you weigh repair against replacement.',
        ],
        after: [
          'When you call, have the brand, the model number from the label inside the fresh-food section, and a short description of what you have already tried. It saves time on the visit.',
        ],
      },
    ],
    safety:
      'Unplug the refrigerator before cleaning the coils or removing any panel. Do not chip at ice with sharp tools, and do not cut or puncture any tubing. Refrigerant work requires EPA certification.',
    faqs: [
      {
        q: 'Should I unplug my refrigerator and plug it back in?',
        a: 'Unplugging it for a few minutes can reset an electronic control. If the cause is frost or a failed part, it will warm up again, so watch the temperature over the next day.',
      },
      {
        q: 'Can I defrost my refrigerator myself?',
        a: 'You can, by moving the food, unplugging it and leaving the doors open with towels down for most of a day. It may restore cooling for a while, but if the defrost system failed, the frost will come back.',
      },
      {
        q: 'Why is my freezer cold but my fridge warm?',
        a: 'Cold air for the fresh-food side usually comes from the freezer. A stopped evaporator fan, a stuck damper or frost blocking the coil cuts off that air. These are common repairs.',
      },
      {
        q: 'How long does a refrigerator take to cool down after it is fixed?',
        a: 'Often a few hours to start feeling cold, and up to 24 hours to reach a steady temperature, especially if it is full of warm food.',
      },
      {
        q: 'Is it worth repairing an old refrigerator?',
        a: 'Usually, if it is a fan, relay, defrost part or sensor. If the compressor or sealed system has failed on a refrigerator past about 10 to 15 years old, replacement often makes more sense.',
      },
    ],
    sources: [
      { name: 'USDA FSIS: Keep your food safe during emergencies', url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/emergencies/keep-your-food-safe-during-emergencies' },
      { name: 'FoodSafety.gov: Food safety during a power outage', url: 'https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage' },
      { name: 'USDA FSIS: Refrigeration and food safety', url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration' },
    ],
  },
  {
    slug: 'washer-not-draining',
    title: 'Washer Not Draining? Safe Checks Before You Book a Repair',
    metaTitle: 'Washer Not Draining? Safe Checks First | Temple, TX',
    metaDescription:
      'Washer full of water and won’t drain? Safe checks for top-load and front-load washers, what the sounds and codes mean, and when to call a technician.',
    excerpt:
      'A drum full of water is usually a clog, a kinked hose, too many suds or a worn pump. Here is how to check each one safely, in the right order, without making a bigger mess.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'washer',
    sections: [
      {
        id: 'short-version',
        heading: 'The short version',
        list: [
          'Unplug the washer and get towels, a shallow pan and a bucket ready before you open anything.',
          'Check the drain hose for kinks and the drain or laundry sink for a backup.',
          'On front-loaders and some top-loaders, clean the pump filter at the bottom front.',
          'Rule out too many suds, a common cause on high-efficiency washers.',
          'If it hums but does not drain, or is silent, the pump, lid lock or control may need a technician.',
        ],
      },
      {
        id: 'before-you-start',
        heading: 'Before you start',
        paragraphs: [
          'Turn the washer off and unplug it. If you will be moving it or touching hoses, close the hot and cold water valves behind it too.',
          'Expect water. On a front-loader, a drum full of water drains out through the small access door at the bottom front, often a gallon or more, so put down towels and a shallow pan. On a top-loader, you can bail water out of the tub with a cup and a bucket before you start looking at the drain.',
          'Take the clothes out, wring them into the tub or a sink, and set them aside. A heavy wet load makes every other step harder.',
        ],
      },
      {
        id: 'checks',
        heading: 'Checks, in order',
        list: [
          'Drain hose. Pull the washer out a few inches and look behind it. A hose that is kinked, crushed against the wall or clogged will stop drainage. Straighten it and check that water can flow through it.',
          'How the hose sits in the drain. The hose should hook into the standpipe or laundry sink without being pushed too far in or taped tight. Whirlpool’s guidance, for example, calls for an air gap around the hose and limits on how deep it goes into the standpipe. Your installation manual gives the numbers for your model.',
          'The house drain. If water backs up out of the standpipe or the laundry sink is slow, the clog is in the house plumbing, not the washer. That is a job for a plumber.',
          'Pump filter. Most front-loaders and some top-loaders have a filter behind a small door at the bottom front. Drain the water through the small hose if there is one, then unscrew the filter slowly. Socks, coins, hair ties and lint are common finds. Clean it, put it back hand tight and check that it does not drip.',
          'Suds. Too much detergent, or regular detergent in a high-efficiency washer, makes suds the washer cannot pump out. Many machines pause, add rinses or show a code such as SUD or Sd. Run a rinse and spin with no detergent, and use only measured HE detergent from then on.',
          'Lid or door lock. Many washers will not drain or spin unless they can confirm the lid or door is locked. Listen for a click when the cycle starts. If there is no click, the lock or its switch may have failed.',
        ],
      },
      {
        id: 'sounds-and-codes',
        heading: 'What the sounds and codes tell you',
        paragraphs: [
          'Humming with no water moving usually means the drain pump is jammed or its motor has failed. Something caught in the pump, like a sock or a coin, is common. Stop the cycle; running a jammed pump can burn out the motor.',
          'Silence when it should be draining often means the pump is not getting power. That points to the lid lock, the control board or the wiring between them.',
          'A drain error code, such as F21, OE, 5E or a code with “drain” in its description, is the washer telling you it timed out waiting for the water to leave. The exact code depends on the brand and model, so check your manual or the manufacturer’s support site. A code narrows the search, and testing confirms which part failed.',
          'Water drains but clothes are still soaking wet. The washer may not be reaching full spin. An unbalanced load, an unlevel washer, a worn belt or drive part, or a lid lock that will not stay engaged can all cause it.',
        ],
      },
      {
        id: 'when-to-call',
        heading: 'When to call a technician',
        paragraphs: [
          'Call if the hose, the house drain and the filter are all clear and the washer still will not drain, if it hums or stays silent at the drain step, or if the lid or door will not lock. Those point to the pump, the lock, the control or the wiring, and they need testing with a meter.',
          'A washer that will not drain is usually worth repairing. Drain pumps, lid locks and lid switches are common parts, and replacing one is a much smaller job than replacing the washer. On an older machine, a failed transmission or worn tub bearings are the main cases where replacement starts to make more sense.',
        ],
        after: [
          'When you call, have the brand, the model number, whether it is a top-load or front-load washer, and any code on the display.',
        ],
      },
    ],
    safety:
      'Always unplug the washer before opening the filter access, moving it or reaching into the tub. Close the water valves before disconnecting any hose. Do not reach into the drain pump opening with the power on.',
    faqs: [
      {
        q: 'Can I run another cycle to get the water out?',
        a: 'Try a drain and spin cycle once. If it hums and does nothing, stop. Running a jammed pump can burn out the motor.',
      },
      {
        q: 'Why does my front-load washer have a little door at the bottom?',
        a: 'That is the pump filter access. It catches coins, socks and lint before they reach the drain pump. Cleaning it every few months helps prevent drain problems.',
      },
      {
        q: 'Can too much detergent stop a washer from draining?',
        a: 'Yes. Excess suds can stop a high-efficiency washer from pumping out water. Run a rinse and spin with no detergent and measure HE detergent carefully going forward.',
      },
      {
        q: 'Why will my top-load washer not drain until I lift the lid?',
        a: 'Many top-loaders lock the lid before draining and spinning. If the lock or lid switch is failing, the washer may stop at the drain step. It is a common part to replace.',
      },
      {
        q: 'Is a washer that won’t drain worth repairing?',
        a: 'Usually, yes. Drain pumps and lid locks are common parts. Replacement makes more sense mainly when an older washer also has a failed transmission or worn tub bearings.',
      },
    ],
    sources: [
      { name: 'Whirlpool Product Help: washer not draining or spinning troubleshooting guide', url: 'https://producthelp.whirlpool.com/Laundry/Washers/Product_Info/Washer_Product_Assistance/Washer_Not_Draining_or_Spinning%3F_Troubleshooting_Guide' },
      { name: 'Whirlpool Product Help: not draining, front load washer', url: 'https://producthelp.whirlpool.com/Laundry/Washers/Front_Load_Washers/Cycle_Concerns/Not_Draining/Not_Draining_-_Front_Load_Washer' },
      { name: 'Whirlpool Product Help: excessive suds in a front load washer', url: 'https://producthelp.whirlpool.com/Laundry/Washers/Washer_Tips_and_Tricks/Excessive_Suds_in_a_Front_Load_Washer' },
    ],
  },
  {
    slug: 'dryer-not-heating',
    title: 'Dryer Not Heating? Safe Checks and When to Call a Technician',
    metaTitle: 'Dryer Not Heating? Safe Checks and Causes | Temple, TX',
    metaDescription:
      'Dryer runs but no heat? Safe checks for electric and gas dryers, why the vent matters, the parts that usually fail, and when to call a technician.',
    excerpt:
      'Most no-heat dryers come down to power, airflow or one failed heating part. Here is how to tell which, what is safe to check yourself, and when to stop and call.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'dryer',
    sections: [
      {
        id: 'short-version',
        heading: 'The short version',
        list: [
          'Electric dryer: check both halves of the double breaker. One can trip and leave the drum turning with no heat.',
          'Gas dryer: make sure the gas shutoff valve behind the dryer is open.',
          'Check the cycle setting, clean the lint screen and feel for strong warm air at the outside vent.',
          'A clogged vent often causes the no-heat problem, so clear it before replacing parts.',
          'If power, gas and airflow are fine and there is still no heat, a heating part has failed and a technician should test it.',
        ],
      },
      {
        id: 'quick-checks',
        heading: 'Quick checks you can do safely',
        list: [
          'Breakers (electric dryers). An electric dryer runs on a 240-volt circuit with a double breaker. One half runs the motor and the other the heat, so one half can trip while the drum still turns and the light works. Switch the breaker fully off, then back on. If you have fuses, check both.',
          'Gas supply (gas dryers). A gas dryer will tumble but not heat if the gas valve is closed. The valve is open when its handle is parallel to the gas pipe. If other gas appliances are not working either, call your gas provider.',
          'Cycle and settings. Make sure the dryer is not on air fluff, a no-heat setting or a delicate cycle that runs very low heat.',
          'Lint screen and housing. Clean the screen, then shine a flashlight into the slot it sits in. Lint packed below the screen restricts airflow.',
          'Outside vent. Run the dryer and go outside. You should feel strong, warm air at the vent hood, and the flap should open fully. Weak airflow means the vent is restricted.',
        ],
      },
      {
        id: 'why-vents-matter',
        heading: 'Why the vent matters so much',
        paragraphs: [
          'A dryer has safety devices that cut the heat when it gets too hot inside. A clogged vent traps hot air, so the dryer overheats and those devices shut the heat off. On many electric dryers, repeated overheating eventually blows a one-time thermal fuse, and the dryer stops heating altogether.',
          'That is why a vent problem so often shows up as a no-heat problem. Replacing the fuse or heating part without clearing the vent usually means it fails again.',
          'Long vent runs, crushed foil or plastic transition hoses behind the dryer, and bird nests or lint in the outside hood are the usual culprits. The U.S. Fire Administration recommends rigid or flexible metal venting and warns against plastic or foil vents, which can sag and trap lint.',
        ],
      },
      {
        id: 'parts',
        heading: 'The parts that usually fail',
        paragraphs: [
          'Electric dryers: the heating element, the thermal fuse, the high-limit thermostat or the cycling thermostat. A broken element coil is common. A blown thermal fuse often means the dryer overheated, which points back to the vent.',
          'Gas dryers: the igniter, the flame sensor or the gas valve coils. A common pattern is a dryer that heats for a while, then goes cold mid-cycle as the valve coils weaken. If the igniter glows but the burner never lights, the coils or the flame sensor are likely suspects.',
          'Each part can be tested with a meter. A technician tests them in order and replaces only what failed, then checks airflow so the new part is not the next to go.',
        ],
      },
      {
        id: 'takes-too-long',
        heading: 'If it heats but takes too long',
        paragraphs: [
          'A dryer that is warm but needs two cycles almost always has an airflow problem. Clean the lint screen, check the hose behind the dryer for kinks and have the vent run cleaned.',
          'Other causes are overloading the drum, clothes coming out of the washer too wet because it is not spinning fully, or a moisture sensor coated with residue from dryer sheets that ends cycles early. You can clean the sensor bars inside the drum with a little rubbing alcohol on a cloth.',
        ],
      },
      {
        id: 'when-to-call',
        heading: 'When to call',
        paragraphs: [
          'Call when the breakers, gas supply and airflow are fine and there is still no heat, or when it heats for a while and then goes cold.',
          'Stop using the dryer and call right away if it smells like burning, the top or sides feel very hot, or you see scorch marks on clothes. If you smell gas, do not switch anything on or off. Leave the house and call your gas provider or 911 from outside.',
        ],
        after: [
          'When you call, have the brand, the model number, whether it is gas or electric, and what you have already checked.',
        ],
      },
    ],
    safety:
      'Unplug an electric dryer before removing any panel. For a gas dryer, close the gas valve before moving it. If you smell gas, leave the house and call your gas provider from outside.',
    faqs: [
      {
        q: 'Why does my dryer spin but not heat?',
        a: 'On electric dryers, a tripped half of the double breaker is common, followed by a failed heating element or thermal fuse. On gas dryers, a closed gas valve, the igniter or the gas valve coils. A clogged vent often causes the failure in the first place.',
      },
      {
        q: 'How long should a normal load take to dry?',
        a: 'Around 40 to 60 minutes for a typical mixed load. If it regularly takes two cycles, check the vent first.',
      },
      {
        q: 'Can a clogged vent stop a dryer from heating?',
        a: 'Yes. A clogged vent makes the dryer overheat, and its safety devices shut off the heat. Repeated overheating can blow the thermal fuse.',
      },
      {
        q: 'My gas dryer heats, then goes cold. What is wrong?',
        a: 'That pattern often points to the gas valve coils or the flame sensor. A technician can test them and confirm which part failed.',
      },
      {
        q: 'Can a dryer vent catch fire?',
        a: 'Yes. Lint is very flammable, and failure to clean is a leading cause of home dryer fires according to the U.S. Fire Administration. Clean the lint filter every load and keep the vent clear.',
      },
    ],
    sources: [
      { name: 'Whirlpool Product Help: dryer is not heating', url: 'https://producthelp.whirlpool.com/Laundry/Dryers/Product_Info/Dryer_Product_Assistance/Dryer_is_Not_Heating' },
      { name: 'Whirlpool Product Help: not heating, gas dryer', url: 'https://producthelp.whirlpool.com/Laundry/Dryers/Dryer/Operation/Not_Heating/Not_Heating_-_Gas_Dryer' },
      { name: 'U.S. Fire Administration: clothes dryer fire safety', url: 'https://www.usfa.fema.gov/downloads/pdf/publications/clothes_dryer_fire_safety_flyer.pdf' },
      { name: 'U.S. Fire Administration: clothes dryer fires in residential buildings', url: 'https://www.usfa.fema.gov/downloads/pdf/statistics/v13i7.pdf' },
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
          'What does the repair involve, start to finish?',
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
