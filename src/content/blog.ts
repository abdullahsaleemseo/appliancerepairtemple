import { phoneDisplay } from '@/config/site';
import type { Post } from './types';

export const posts: Post[] = [
  {
    slug: 'refrigerator-not-cooling',
    image: '/images/blog/refrigerator-not-cooling.webp',
    title: 'Refrigerator Not Cooling? What to Check First and When to Call',
    metaTitle: 'Refrigerator Not Cooling? 7 Checks to Try First | Temple TX',
    metaDescription: `Fridge warm but freezer cold, or both sections warm? Protect the food, try 7 safe checks and see which parts usually fail. Stuck? Call ${phoneDisplay}.`,
    excerpt:
      'A warm refrigerator is usually a fan, a defrost problem or dusty coils, not a dead compressor. Here is how to protect your food, what to check first and what the symptoms tell you.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'refrigerator',
    sections: [
      {
        id: 'short-version',
        heading: 'Warm fridge: the quick answer',
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
          'Many warm refrigerators turn out to have a simple cause. These checks take about fifteen minutes and need no tools beyond a vacuum.',
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
          'In Temple, summer is the hardest season on refrigerators. Higher kitchen temperatures and dusty coils add up, and a refrigerator that was barely keeping up in spring can fall behind in July.',
          'Garage refrigerators and freezers have it harder. Many standard refrigerators are not designed to run in a space that gets very hot or close to freezing, and some will warm up or stop cycling properly in those conditions. If yours only misbehaves on the hottest or coldest days, that is useful information for the technician. Some manufacturers sell garage-ready models built for wider temperature ranges.',
        ],
      },
      {
        id: 'when-to-call',
        heading: 'When a warm refrigerator needs a technician',
        paragraphs: [
          'Call if the refrigerator is still warm after the checks above, if there is heavy frost on the back wall of the freezer, if it clicks but does not run, or if you see water collecting inside. These repairs need parts testing with a meter, and some need panels removed that are best left to a technician.',
          'Most of the parts behind these problems, such as fans, relays, defrost heaters, sensors and thermostats, are common and reasonable to replace. A failed compressor or a refrigerant leak is a bigger repair. On a refrigerator past about 10 to 15 years old, a good technician should help you weigh repair against replacement. Ask for that before you approve the work.',
        ],
        after: [
          'Before you pick up the phone, note the brand, the model number from the label inside the fresh-food section, and which pattern you see: freezer cold and fridge warm, clicking, or heavy frost. Telling the technician that up front points the diagnosis at the right part from the start.',
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
    image: '/images/blog/washer-not-draining.webp',
    title: 'Washer Not Draining? Safe Checks Before You Call for Repair',
    metaTitle: 'Washer Not Draining? 6 Safe Checks Before You Call | Temple',
    metaDescription: `Washer full of water? Check the hose, pump filter, suds and lid lock in order, learn what F21, OE and 5E codes mean, and call ${phoneDisplay} if it hums.`,
    excerpt:
      'A drum full of water is usually a clog, a kinked hose, too many suds or a worn pump. Here is how to check each one safely, in the right order, without making a bigger mess.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'washer',
    sections: [
      {
        id: 'short-version',
        heading: 'Washer full of water: the quick answer',
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
        heading: 'Before you open anything',
        paragraphs: [
          'Turn the washer off and unplug it. If you will be moving it or touching hoses, close the hot and cold water valves behind it too.',
          'Expect water. On a front-loader, a drum full of water drains out through the small access door at the bottom front, often a gallon or more, so put down towels and a shallow pan. On a top-loader, you can bail water out of the tub with a cup and a bucket before you start looking at the drain.',
          'Take the clothes out, wring them into the tub or a sink, and set them aside. A heavy wet load makes every other step harder.',
        ],
      },
      {
        id: 'checks',
        heading: 'Washer drain checks, in order',
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
        heading: 'When a washer that won’t drain needs a technician',
        paragraphs: [
          'Call if the hose, the house drain and the filter are all clear and the washer still will not drain, if it hums or stays silent at the drain step, or if the lid or door will not lock. Those point to the pump, the lock, the control or the wiring, and they need testing with a meter.',
          'A washer that will not drain is usually worth repairing. Drain pumps, lid locks and lid switches are common parts, and replacing one is a much smaller job than replacing the washer. On an older machine, a failed transmission or worn tub bearings are the main cases where replacement starts to make more sense.',
        ],
        after: [
          'Calling about the washer? Mention the brand, the model number from the label around the door or under the lid, top-load or front-load, any code on the display, and whether it hums or stays silent at the drain step.',
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
    image: '/images/blog/dryer-not-heating.webp',
    title: 'Dryer Not Heating? Safe Checks and When to Call a Technician',
    metaTitle: 'Dryer Not Heating? Gas and Electric Dryer Checks | Temple TX',
    metaDescription: `Dryer spins but blows cold air? Check the double breaker, gas valve and vent first, then see which part failed: element, fuse or igniter. Call ${phoneDisplay}.`,
    excerpt:
      'Most no-heat dryers come down to power, airflow or one failed heating part. Here is how to tell which, what is safe to check yourself, and when to stop and call.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'dryer',
    sections: [
      {
        id: 'short-version',
        heading: 'No heat: the quick answer',
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
          'Each part can be tested with a meter. A careful technician tests them in order and replaces only what failed, then checks airflow so the new part is not the next to go. Ask the technician how they will confirm which part failed before any part is replaced.',
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
        heading: 'When a cold dryer needs a technician',
        paragraphs: [
          'Call when the breakers, gas supply and airflow are fine and there is still no heat, or when it heats for a while and then goes cold.',
          'Stop using the dryer and call right away if it smells like burning, the top or sides feel very hot, or you see scorch marks on clothes. If you smell gas, do not switch anything on or off. Leave the house and call your gas provider or 911 from outside.',
        ],
        after: [
          'On the call, give the brand, the model number from the door frame or back panel, gas or electric, and what you have ruled out: breaker, gas valve, lint screen and outside vent. If it heats and then goes cold, say so, because that pattern narrows the parts to test.',
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
    image: '/images/blog/repair-or-replace-appliance.webp',
    title: 'Repair or Replace an Appliance? A Practical Way to Decide',
    metaTitle: 'Repair or Replace an Appliance? Use the 50% Rule | Temple TX',
    metaDescription: `Is a broken fridge, washer or dryer worth fixing? Weigh age and what failed with the 50 percent rule and typical lifespans. Want a diagnosis? Call ${phoneDisplay}.`,
    excerpt:
      'Two questions settle most repair-or-replace decisions: how old is the appliance, and what exactly failed? Here is how to weigh them, appliance by appliance.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'general',
    sections: [
      {
        id: 'short-version',
        heading: 'Repair or replace: the quick answer',
        list: [
          'Find out exactly what failed before deciding anything. A diagnosis turns a guess into a real choice.',
          'Compare the appliance’s age with its typical lifespan.',
          'Use the 50 percent rule as a starting point: if the repair costs more than half of a comparable new appliance and the unit is past the middle of its life, replacement deserves a serious look.',
          'Common wear parts such as pumps, belts, fans, relays and heating elements are usually worth replacing at almost any age.',
          'Sealed system failures, transmissions and cracked tubs on older appliances are the usual tipping points toward replacement.',
        ],
      },
      {
        id: 'rule',
        heading: 'The 50 percent rule, and its limits',
        paragraphs: [
          'The rule is simple. If a repair costs more than half the price of a comparable new appliance, and the appliance is past the middle of its expected life, replacement is usually the better use of money. If either of those is not true, repair usually wins.',
          'It is a rule of thumb, not a law. A high-end refrigerator, a pro-style range or a matched laundry pair can cost so much to replace that repair makes sense well past the halfway mark. On the other hand, a basic appliance near the end of its life with a second major problem coming may not be worth even a moderate repair.',
          'The most important input is the diagnosis. Until you know which part failed, any decision is a guess.',
        ],
      },
      {
        id: 'lifespans',
        heading: 'Typical lifespans',
        list: [
          'Refrigerator: about 10 to 15 years',
          'Freezer: about 10 to 20 years',
          'Washer: about 10 to 13 years',
          'Dryer: about 10 to 13 years',
          'Dishwasher: about 9 to 12 years',
          'Range or oven: about 13 to 15 years',
          'Over-the-range microwave: about 7 to 10 years',
        ],
        after: [
          'These ranges line up with estimates published by the National Association of Home Builders, which put refrigerators and dryers around 13 years, ranges around 15, washers around 10 and dishwashers around 9. Use, maintenance, installation and climate all move the numbers. A well-kept appliance can go well past them.',
        ],
      },
      {
        id: 'by-appliance',
        heading: 'Usually worth fixing, and closer calls',
        paragraphs: [
          'Refrigerators and freezers. Usually worth fixing: fans, start relays, defrost heaters and thermostats, sensors, water valves and ice makers. Closer call: a failed compressor or a refrigerant leak on a unit past about 10 years old.',
          'Washers. Usually worth fixing: drain pumps, lid locks and switches, belts, couplers and suspension parts. Closer call: a failed transmission or worn tub bearings on an older machine.',
          'Dryers. Usually worth fixing: heating elements, thermal fuses, thermostats, igniters, belts, rollers and idler pulleys. Dryers are simple machines, and most repairs make sense. Closer call: a worn drum and a failed motor and control at the same time.',
          'Dishwashers. Usually worth fixing: drain pumps, inlet valves, door latches, seals and heating elements. Closer call: a rusted tub, broken racks and a failed control board together.',
          'Ranges and ovens. Usually worth fixing: bake and broil elements, igniters, temperature sensors, surface elements and switches. Closer call: a cracked glass cooktop or a discontinued control board on an older range.',
        ],
      },
      {
        id: 'other',
        heading: 'Other things to weigh',
        list: [
          'Parts availability. For older or less common models, ask whether the part is still made. A discontinued part can decide the question for you.',
          'Warranty. Check the manufacturer’s warranty and any extended plan first. Some brands cover certain parts, like compressors or washer motors, for much longer than the standard warranty.',
          'Recalls. Look up the model and serial number at cpsc.gov. A recall remedy is handled by the manufacturer.',
          'Energy use. Refrigerators and freezers run around the clock, so a very old unit can cost noticeably more to run than a newer one.',
          'Installation. Replacing a built-in dishwasher, an over-the-range microwave or a gas appliance adds installation and haul-away on top of the purchase.',
          'Timing. A repair is often faster than ordering, delivering and installing a new appliance, which matters when the refrigerator is full of food.',
        ],
      },
      {
        id: 'questions',
        heading: 'Questions to ask the technician',
        list: [
          'What exactly failed, and why did it fail?',
          'What does the repair involve, start to finish?',
          'Is anything else close to failing?',
          'Are parts still available for this model?',
          'Would you repair this one if it were yours?',
        ],
        after: [
          'A good technician should answer all five plainly, including telling you when a repair does not make sense. Also ask about pricing and any warranty on the work before the repair starts.',
        ],
      },
    ],
    safety: 'Leave sealed refrigeration, gas and high-voltage microwave work to a qualified technician. Unplug any appliance before looking inside it.',
    faqs: [
      {
        q: 'Is it worth repairing a 10-year-old washer?',
        a: 'If it is a pump, lid lock, belt or suspension part, usually yes. A failed transmission or tub bearings at that age is a closer call.',
      },
      {
        q: 'Is it worth repairing a refrigerator compressor?',
        a: 'On a newer refrigerator, often yes, and check the warranty first since some brands cover compressors for many years. On a refrigerator past about 10 years old, replacement usually makes more sense.',
      },
      {
        q: 'Do new appliances last as long as old ones?',
        a: 'Published estimates suggest some appliances last a little less than they used to. Newer models have more electronics, but they also use less energy and water.',
      },
      {
        q: 'Should I repair or replace a dryer?',
        a: 'Usually repair. Most dryer failures are heating parts, fuses, belts or rollers, which are reasonable repairs on most dryers.',
      },
      {
        q: 'What if I am not sure the repair is worth it?',
        a: 'Ask for the diagnosis and the answers to the questions above, then decide. You do not have to approve a repair on the spot.',
      },
    ],
    sources: [
      { name: 'ConsumerAffairs: appliances really don’t last as long as they used to (NAHB estimates)', url: 'https://www.consumeraffairs.com/news/appliances-really-dont-last-as-long-as-they-used-to-021715.html' },
      { name: '2-10 Home Buyers Warranty: why appliances don’t last', url: 'https://www.2-10.com/helpcenter/why-appliances-dont-last/' },
      { name: 'U.S. Consumer Product Safety Commission: recalls', url: 'https://www.cpsc.gov/Recalls' },
    ],
  },
  {
    slug: 'how-often-clean-dryer-vent',
    image: '/images/blog/how-often-clean-dryer-vent.webp',
    title: 'How Often Should You Clean a Dryer Vent? Signs, Steps and Safety',
    metaTitle: 'How Often to Clean a Dryer Vent: 7 Clog Signs | Temple TX',
    metaDescription: `Clothes taking two cycles to dry? How often to clean a dryer vent, 7 signs it is clogged, safe DIY steps and when to get help in Temple. Call ${phoneDisplay}.`,
    excerpt:
      'At least once a year for most homes, sooner if drying is slowing down. Here are the warning signs, the safe steps you can take yourself and when to get help.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'dryer',
    sections: [
      {
        id: 'short-version',
        heading: 'Dryer vents: the quick answer',
        list: [
          'Clean the lint screen before or after every load.',
          'Clean the vent at least once a year, or sooner if clothes are taking longer to dry.',
          'Use rigid or flexible metal venting, not plastic or thin foil.',
          'Check that the outside flap opens fully when the dryer runs.',
          'Long runs through attics or to the roof are best left to a vent cleaning service.',
        ],
      },
      {
        id: 'why-it-matters',
        heading: 'Why the vent matters',
        paragraphs: [
          'A dryer pushes hot, damp air and fine lint out through the vent. When lint builds up, the air cannot escape. The dryer runs longer, gets hotter and works harder, and lint is very flammable.',
          'Fire safety agencies are blunt about it. The National Fire Protection Association and the U.S. Fire Administration both list failure to clean as the leading cause of home dryer fires.',
          'A clogged vent is also hard on the dryer itself. It is one of the most common reasons a heating element, thermal fuse or thermostat fails, which is why a no-heat repair often starts with the vent.',
        ],
      },
      {
        id: 'how-often',
        heading: 'How often to clean it',
        paragraphs: [
          'NFPA guidance is to clean lint out of the vent pipe at least once a year, or sooner if drying takes longer than usual. That is a good baseline for most Temple homes.',
          'Some homes need it more often. Large households that run the dryer every day, homes with pets, and long vent runs with several bends collect lint faster. For those, checking every six months is reasonable.',
          'The lint screen is a separate job. Clean it before or after every load. It takes seconds and is the most useful habit for both safety and dryer life.',
        ],
      },
      {
        id: 'signs',
        heading: 'Signs the vent is clogged',
        list: [
          'Clothes take more than one cycle to dry.',
          'The dryer, the clothes or the laundry room gets very hot.',
          'Clothes come out hot but still damp.',
          'The outside vent flap barely opens, or you feel weak airflow outside.',
          'There is lint around the outside vent hood or behind the dryer.',
          'You notice a hot or burning smell.',
          'The dryer has blown a thermal fuse or stopped heating.',
        ],
        after: [
          'If you smell burning, stop the dryer, unplug it and do not use it again until the vent and dryer have been checked.',
        ],
      },
      {
        id: 'diy',
        heading: 'What you can safely do yourself',
        list: [
          'Unplug the dryer before moving it. On a gas dryer, also close the gas valve and be careful not to strain the gas line.',
          'Pull the dryer out and disconnect the transition hose between the dryer and the wall.',
          'Replace white plastic or thin foil accordion hoses with semi-rigid or rigid metal. Plastic and foil can sag, crush and trap lint.',
          'Clean the hose and the first few feet of the wall duct with a dryer vent brush kit.',
          'Go outside and clear lint, nests or debris from the vent hood. Make sure the flap swings freely.',
          'Reconnect with metal clamps or foil tape made for ducts. Avoid sheet-metal screws through the duct, which catch lint.',
          'Push the dryer back without crushing the hose, then run it and feel for strong airflow outside.',
        ],
      },
      {
        id: 'call-a-pro',
        heading: 'When to call a professional',
        paragraphs: [
          'Long vent runs through an attic, up to the roof or under a floor are hard to clean well with a household brush kit, and roof work has its own risks. A dryer vent cleaning service has longer rods, blowers and cameras for those runs.',
          'Call an appliance technician if the vent is clear and the dryer still runs hot, takes too long or will not heat, or if you see lint inside the dryer cabinet near the heating element or burner. Those point to parts inside the dryer that need testing.',
        ],
      },
    ],
    safety:
      'Never run a dryer without the lint screen in place, and do not leave it running when you leave home or go to bed. If you see lint inside the cabinet near the burner or element, stop using the dryer until it is cleaned.',
    faqs: [
      {
        q: 'How often should a dryer vent be cleaned?',
        a: 'At least once a year for most homes, and sooner if drying takes longer than usual. Homes with heavy use, pets or long vent runs may need it every six months.',
      },
      {
        q: 'Does a clogged vent damage the dryer?',
        a: 'Yes. It makes the dryer run hotter and longer, which wears out heating parts, thermal fuses, thermostats and belts.',
      },
      {
        q: 'What kind of dryer vent hose should I use?',
        a: 'Rigid or flexible metal. Avoid plastic and thin foil accordion hoses, which can sag, crush and trap lint.',
      },
      {
        q: 'Can I vent a dryer indoors?',
        a: 'Not a gas dryer, ever. Electric dryers should also vent outside unless they are a ventless condenser or heat pump model designed for it.',
      },
      {
        q: 'Do dryer sheets clog the vent?',
        a: 'They can leave a film on the lint screen that reduces airflow. Wash the screen with warm soapy water every so often and let it dry fully before putting it back.',
      },
    ],
    sources: [
      { name: 'NFPA clothes dryer safety tips (via Massachusetts)', url: 'https://www.mass.gov/doc/nfpa-clothes-dryer-safety-brochure/download' },
      { name: 'U.S. Fire Administration: clothes dryer fire safety', url: 'https://www.usfa.fema.gov/downloads/pdf/publications/clothes_dryer_fire_safety_flyer.pdf' },
      { name: 'Consumer Reports: how to prevent dryer fires', url: 'https://www.consumerreports.org/clothes-dryer/how-to-prevent-dryer-fires/' },
    ],
  },
  {
    slug: 'dishwasher-drainage-problems',
    image: '/images/blog/dishwasher-drainage-problems.webp',
    title: 'Dishwasher Not Draining? Common Causes and Safe Checks',
    metaTitle: 'Dishwasher Not Draining? Filter, Hose and Pump Checks | Temple',
    metaDescription: `Standing water in the dishwasher? Clean the filter, check the disposal plug, high loop and air gap, decode E24 and E25, and call ${phoneDisplay} if it hums.`,
    excerpt:
      'Standing water usually comes down to the filter, the drain hose, the garbage disposal or the pump. Here is how to check them in order, and what to leave to a technician.',
    published: '2026-10-14',
    updated: '2026-10-15',
    service: 'dishwasher',
    sections: [
      {
        id: 'short-version',
        heading: 'Standing water: the quick answer',
        list: [
          'A little water under the filter is normal. A pool covering the tub floor is not.',
          'Clean the filter first. It fixes a lot of drainage complaints.',
          'Run the garbage disposal, and on a new disposal make sure the knockout plug was removed.',
          'Check the drain hose under the sink for kinks and a proper high loop, and clear the air gap if you have one.',
          'If it hums at the end of the cycle and still will not drain, the drain pump likely needs a technician.',
        ],
      },
      {
        id: 'normal',
        heading: 'How much water is normal?',
        paragraphs: [
          'Many dishwashers keep a small amount of water in the sump, the low area under the filter, to keep seals from drying out. If you only see a little water down in that area, it may be normal.',
          'Standing water across the floor of the tub, dirty water left after a cycle, or a sour smell are signs the dishwasher is not draining properly. If a cycle was interrupted by a power blip or someone opening the door, run a short cycle or a drain cycle once before troubleshooting.',
        ],
      },
      {
        id: 'before-you-start',
        heading: 'Before you reach into the tub',
        paragraphs: [
          'Turn off the dishwasher’s power at the breaker or unplug it under the sink. Lay towels on the floor in front of it.',
          'Bail out standing water with a cup and a small bowl, then soak up the rest with a sponge or towel. Watch for broken glass in the bottom of the tub and in the filter.',
        ],
      },
      {
        id: 'checks',
        heading: 'Dishwasher drain checks, easiest first',
        list: [
          'Filter. Twist out the filter assembly under the lower spray arm and rinse it under the tap. Scrub mesh screens gently with a soft brush. Food, labels, seeds and glass collect here. Cleaning it about once a month is a good habit.',
          'Garbage disposal. If the dishwasher drains into a disposal, run the disposal for a few seconds to clear it. On a newly installed disposal, the knockout plug inside the dishwasher inlet may still be in place. Whirlpool suggests pushing a pencil into the inlet: if it goes in about three inches, the plug is gone.',
          'Sink drain. If the kitchen sink is slow or backs up, the clog is in the house plumbing, and the dishwasher cannot drain into it. Clear the sink drain first.',
          'The drain hose. Look under the sink for a hose that is kinked, crushed by stored items or sagging below the drain connection. Most installations call for a high loop, with the hose secured up under the counter so sink water cannot flow back into the dishwasher.',
          'Air gap. Some kitchens have a small cylinder on the sink deck next to the faucet. Pull or twist off the cap and clear any debris inside. Air gaps are required in some areas and optional in others.',
        ],
      },
      {
        id: 'codes-and-sounds',
        heading: 'Drain codes and sounds',
        paragraphs: [
          'Many dishwashers show a code when water does not leave in the expected time. Bosch, for example, uses codes such as E24 and E25 for drain problems, and other brands use their own codes or flashing light patterns. Check your manual or the manufacturer’s support site for your model.',
          'Humming at the drain step with no water moving usually means the drain pump is jammed, often by glass or a seed, or its motor has failed. Silence at the drain step can point to the pump not getting power, a control or a wiring issue. A grinding or rattling sound can mean something is caught in the pump impeller.',
        ],
      },
      {
        id: 'pump',
        heading: 'When it is the pump',
        paragraphs: [
          'If the filter, disposal, sink drain, hose and air gap are all clear and the dishwasher still will not drain, the drain pump is the most likely cause. Some pumps can be cleared of debris; others need to be replaced. Either way, it involves removing panels and working near wiring and water, which is best left to a technician.',
          'A failed drain pump is usually a reasonable repair. Replacement starts to make more sense mainly when an older dishwasher also has a rusted tub, broken racks or a failed control board.',
        ],
      },
      {
        id: 'prevent',
        heading: 'Preventing drainage problems',
        list: [
          'Scrape plates into the trash before loading. You do not need to rinse them, but large food scraps clog the filter.',
          'Clean the filter about once a month, more often if you rarely scrape plates.',
          'Run the garbage disposal before starting the dishwasher.',
          'In homes with hard water, use rinse aid and run a dishwasher cleaner every month or two to keep mineral scale out of the sump and drain path.',
          'Keep stored items under the sink from crushing the drain hose.',
        ],
      },
    ],
    safety:
      'Turn off power at the breaker or unplug the dishwasher before reaching into the sump or working under the sink. Watch for broken glass in the filter and sump. Never pour chemical drain cleaner into a dishwasher.',
    faqs: [
      {
        q: 'Can I use drain cleaner in my dishwasher?',
        a: 'No. Chemical drain cleaners can damage pump seals and plastic parts, and they are dangerous if they splash back. Clear the filter and check the hose instead.',
      },
      {
        q: 'Why does my dishwasher drain into the sink?',
        a: 'A clog in the sink drain or disposal lets water back up. A missing high loop in the drain hose can also let water flow the wrong way. Clear the sink drain first, then check the hose.',
      },
      {
        q: 'Why will my new dishwasher not drain?',
        a: 'On a new installation, a common cause is a garbage disposal knockout plug that was never removed, or a kinked drain hose behind the dishwasher. Check both before calling.',
      },
      {
        q: 'How often should I clean the dishwasher filter?',
        a: 'About once a month for most households, and more often if you do not scrape plates before loading.',
      },
      {
        q: 'Is a dishwasher that won’t drain worth repairing?',
        a: 'Most of the time. A drain pump is a common part. Replacement makes more sense mainly when an older dishwasher has several problems at once.',
      },
    ],
    sources: [
      { name: 'Whirlpool Product Help: not draining, newly installed dishwasher', url: 'https://producthelp.whirlpool.com/Dishwashers/Dishwasher/Cycle_Concerns/Not_Draining%2F%2FWater_Remains/Not_Draining_-_Newly_Installed_-_Dishwasher' },
      { name: 'Bosch: dishwasher error codes', url: 'https://www.bosch-home.com/us/owner-support/dishwashers/error-codes' },
      { name: 'iFixit: dishwasher not draining', url: 'https://www.ifixit.com/Wiki/Dishwasher_Not_Draining' },
    ],
  },
];

export const postHref = (p: Post) => `/blog/${p.slug}/`;
