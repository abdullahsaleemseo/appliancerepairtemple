import type { ApplianceKey, Service } from './types';
import { site } from '@/config/site';

const loc = `${site.citySlug}-${site.stateSlug}`;

export const services: Service[] = [
  {
    key: 'refrigerator',
    slug: `refrigerator-repair-${loc}`,
    name: 'Refrigerator',
    navLabel: 'Refrigerator Repair',
    icon: 'refrigerator',
    card: 'Not cooling, leaking, noisy, or the ice maker quit.',
    metaTitle: 'Refrigerator Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'Refrigerator not cooling, leaking or icing up in Temple, TX? Request a diagnostic visit for top-freezer, side-by-side and French door models. Call today.',
    h1: 'Refrigerator Repair in Temple, TX',
    intro: [
      'A warm refrigerator is a problem with a clock on it. Food safety guidance says perishables should not sit above 40°F for more than about two hours, so the sooner a technician looks at it, the more groceries you keep.',
      'We repair top-freezer, bottom-freezer, side-by-side and French door refrigerators in Temple and the surrounding Bell County towns. Most calls come down to a short list of parts: a fan motor, a defrost component, a start relay, a water valve or a control board. A technician tests each one, tells you which part failed and what the repair involves, and only then starts work.',
      'Temple summers make this worse. A fridge that is already struggling will often give out in July and August, especially one in a hot garage.',
    ],
    symptomsHeading: 'Refrigerator problems we diagnose',
    symptoms: [
      {
        title: 'Not cooling, or only partly cooling',
        cause:
          'If the freezer is cold but the fridge side is warm, the usual suspects are a frosted-over evaporator coil (a defrost failure) or an evaporator fan that stopped. If both sides are warm, look at the condenser fan, dirty condenser coils, the start relay or the compressor itself.',
        fixable: 'Fan motors, defrost parts and relays are common repairs.',
      },
      {
        title: 'Freezer warm or soft ice cream',
        cause:
          'Frost buildup on the back panel points to the defrost heater, defrost thermostat or defrost timer/control. A clicking sound every few minutes with no cooling usually means the compressor is trying to start and the relay or compressor is failing.',
        fixable: 'Defrost system repairs are routine. Compressor work is a bigger decision, and we will talk it through with you before anything is done.',
      },
      {
        title: 'Leaking water on the floor',
        cause:
          'A clogged defrost drain sends melt water onto the floor or into the crisper drawers. Other causes are a cracked water line to the ice maker, a loose filter housing or a bad water inlet valve.',
        fixable: 'Drain clearing and valve or line replacement are usually done in one visit.',
      },
      {
        title: 'Ice maker not making ice',
        cause:
          'Check that the shutoff arm is down and the water supply valve is open. Past that, the cause is usually a frozen fill tube, a failed water inlet valve, a clogged filter or the ice maker module itself.',
        fixable: 'Ice maker modules and inlet valves are standard replacement parts for most brands.',
      },
      {
        title: 'Loud buzzing, clicking or rattling',
        cause:
          'Squealing or chirping usually comes from a fan motor bearing. Rattling can be the drain pan or a loose panel. Repeated clicking near the bottom rear is often the compressor start relay.',
        fixable: 'Fan motors and relays are quick swaps once the noise is traced.',
      },
      {
        title: 'Error codes or a blinking display',
        cause:
          'Newer Samsung, LG, GE and Whirlpool models log faults as codes. A code narrows the search but does not always name the bad part, so the technician confirms it with a meter before ordering anything.',
        fixable: 'Sensor and control faults are common and fixable on most models.',
      },
    ],
    diagnostic: {
      heading: 'What the diagnostic visit covers',
      paragraphs: [
        'The technician checks temperatures on both sides, listens to the compressor and fans, looks for frost patterns on the evaporator, and tests the suspect parts with a meter. You get a clear explanation of what failed before any repair starts.',
      ],
      covers: [
        'Temperature readings in the fresh food and freezer sections',
        'Compressor, condenser fan and evaporator fan checks',
        'Defrost heater, sensor and control testing',
        'Door gasket and leveling check',
        'Water valve, filter housing and ice maker inspection',
        'A clear explanation of the repair before work begins',
      ],
    },
    repairOrReplace: {
      heading: 'Repair or replace your refrigerator?',
      paragraphs: [
        'Most refrigerators last 10 to 15 years. A common rule of thumb: if the repair costs more than half of what a comparable new fridge would cost, and the unit is near the end of that range, replacement starts to make sense.',
        'Fan, defrost, valve and relay repairs almost always make sense to do. Sealed system work (compressor or refrigerant leaks) costs more and is worth a harder look on an older unit. The technician will give you the number and an honest read; the choice is yours.',
      ],
      points: [
        'Under 8 years old: repair is usually the right call',
        'Sealed system failure on a 12+ year old unit: compare against a new unit too',
        'Built-in and high-end models: repair usually makes more sense than replacement',
      ],
    },
    safety:
      'Unplug the refrigerator before cleaning the condenser coils, and do not open sealed system lines. Refrigerant work requires EPA Section 608 certification.',
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 'Maytag', 'KitchenAid', 'Kenmore', 'Amana'],
    faqs: [
      {
        q: 'How long can food stay in a refrigerator that stopped cooling?',
        a: 'Keep the doors shut. A closed refrigerator holds a safe temperature for about four hours, and a full freezer for roughly 48 hours. After that, check temperatures with a thermometer before eating anything perishable.',
      },
      {
        q: 'Why is my freezer cold but my fridge warm?',
        a: 'Cold air is made in the freezer and pushed into the fridge by a fan. When the evaporator coil frosts over or that fan stops, the fridge side warms up while the freezer still feels cold. It is one of the most common refrigerator calls.',
      },
      {
        q: 'Can you fix a refrigerator that is leaking water inside?',
        a: 'Yes. Water under the crisper drawers almost always means a plugged defrost drain. The technician clears it and checks why it froze, which is often a defrost part starting to fail.',
      },
      {
        q: 'Do you repair refrigerator compressors?',
        a: 'Compressor and sealed system repairs are possible on many models, but they cost more. The technician will confirm the diagnosis, explain what the repair involves, and tell you plainly whether it is worth it for your unit.',
      },
      {
        q: 'Should I keep a refrigerator in my garage in Temple?',
        a: 'Many standard refrigerators are rated for rooms between about 55°F and 110°F. Texas garages can exceed that in summer, which makes the compressor run nonstop. If you keep one out there, a garage-rated model and good airflow around the coils help.',
      },
    ],
    related: ['freezer', 'dishwasher', 'oven'],
    offeredVerified: false,
  },
  {
    key: 'washer',
    slug: `washer-repair-${loc}`,
    name: 'Washer',
    navLabel: 'Washer Repair',
    icon: 'washer',
    card: 'Won’t drain, won’t spin, leaking or shaking hard.',
    metaTitle: 'Washer Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'Washing machine not draining, not spinning or leaking in Temple, TX? Request service for top-load and front-load washers. Call or book online.',
    h1: 'Washer Repair in Temple, TX',
    intro: [
      'A washer that stops mid-cycle leaves you with a drum full of water and a pile of wet clothes. Most of the time the fix is a drain pump, a lid switch, a door lock or a worn belt, and it can be done in one visit.',
      'We repair top-load and front-load washers in Temple and nearby Bell County communities, including direct-drive and belt-drive models and newer machines with electronic controls. The technician runs the machine, reads any error codes, finds the failed part and explains the repair before any work begins.',
    ],
    symptomsHeading: 'Washer problems we diagnose',
    symptoms: [
      {
        title: 'Won’t drain',
        cause:
          'The most common cause is a clogged drain pump filter or a sock caught in the pump. After that, check for a kinked drain hose or a pump motor that has failed. On front-loaders, a hum with no draining usually means the pump is jammed.',
        fixable: 'Pump clearing and pump replacement are among the most common washer repairs.',
      },
      {
        title: 'Won’t spin',
        cause:
          'A washer will refuse to spin if it cannot confirm the lid or door is locked, so a bad lid switch or door lock is a frequent cause. Worn drive belts, a failed motor coupling or a bad shift actuator are next on the list.',
        fixable: 'Switches, locks, belts and couplers are common parts.',
      },
      {
        title: 'Leaking water',
        cause:
          'Front-loaders often leak from a torn door boot seal. Other sources: fill hoses, the pump, a cracked tub or worn tub seal. Where the puddle forms usually tells the technician where to look.',
        fixable: 'Door boots, hoses and pumps are replaceable. Tub seal leaks take more labor.',
      },
      {
        title: 'Shaking, walking or banging during spin',
        cause:
          'Start with an unbalanced load and an unlevel machine. If it still bangs, top-loaders often have worn suspension rods and front-loaders have worn shock absorbers or springs.',
        fixable: 'Suspension rods and shocks are routine replacements.',
      },
      {
        title: 'Won’t start or stops mid-cycle',
        cause:
          'Check the outlet and breaker first. Beyond that, a failed door lock, lid switch, water level sensor or control board can stop a cycle.',
        fixable: 'The technician checks each part in order and replaces only what failed.',
      },
      {
        title: 'Bad smell or mildew',
        cause:
          'Front-load washers trap moisture in the door seal and drain filter. Detergent overuse and a slow-draining pump make it worse.',
        fixable: 'Usually a cleaning and maintenance issue. We will show you what to clean and how often.',
      },
    ],
    diagnostic: {
      heading: 'What the diagnostic visit covers',
      paragraphs: [
        'The technician runs a test cycle, checks fill, agitation, drain and spin, pulls error codes where the model stores them, and tests the suspect parts. You get the diagnosis and an explanation of the repair before any work starts.',
      ],
      covers: [
        'Fill, wash, drain and spin test',
        'Error code readout on electronic models',
        'Drain pump and filter inspection',
        'Lid switch or door lock test',
        'Belt, coupler and suspension check',
        'Hose and door seal inspection for leaks',
      ],
    },
    repairOrReplace: {
      heading: 'Repair or replace your washer?',
      paragraphs: [
        'Most washers last 10 to 13 years. Pumps, switches, belts, locks and suspension parts are almost always worth fixing. A failed transmission or tub bearing on an older top-loader is a closer call, because the labor is heavy.',
      ],
      points: [
        'Drain, lock and belt repairs: almost always worth it',
        'Bearing or transmission failure on a 10+ year old washer: compare against replacement',
        'High-efficiency front-loaders: repair is usually the better choice',
      ],
    },
    safety:
      'Unplug the washer and shut off both water valves before checking hoses. Water left in a front-loader will spill when the drain filter is opened, so have towels and a shallow pan ready.',
    brands: ['Whirlpool', 'Maytag', 'Samsung', 'LG', 'GE', 'Kenmore', 'Speed Queen', 'Electrolux', 'Frigidaire'],
    faqs: [
      {
        q: 'My washer is full of water and won’t drain. What should I do?',
        a: 'Turn it off and unplug it. On a front-loader you can drain it through the small access door at the bottom front, which holds the pump filter. Have towels ready. If the filter is clear and it still won’t drain, the pump likely needs replacement.',
      },
      {
        q: 'Why does my washer shake so much?',
        a: 'Most of the time it is an uneven load or the washer is not level. If it still shakes with a balanced load, the suspension rods or shock absorbers are probably worn.',
      },
      {
        q: 'Is it worth fixing a front-load washer?',
        a: 'Usually yes. Door boots, pumps and locks are common fixes. Tub bearing failure is the big one, and the technician will explain what it involves before you decide.',
      },
      {
        q: 'Do you repair stackable washer and dryer units?',
        a: 'Stacked and all-in-one laundry centers are serviceable. Tell us the model when you book so the technician can plan for the extra access work.',
      },
      {
        q: 'What does an error code on my washer mean?',
        a: 'Codes point to a system, like draining or the door lock, not always a single part. Write the code down and tell us when you call. It helps the technician bring the likely parts.',
      },
    ],
    related: ['dryer', 'dishwasher', 'refrigerator'],
    offeredVerified: false,
  },
  {
    key: 'dryer',
    slug: `dryer-repair-${loc}`,
    name: 'Dryer',
    navLabel: 'Dryer Repair',
    icon: 'dryer',
    card: 'No heat, long dry times, squealing or won’t turn.',
    metaTitle: 'Dryer Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'Dryer not heating, taking too long or making noise in Temple, TX? Request service for electric and gas dryers. Call today or request service online.',
    h1: 'Dryer Repair in Temple, TX',
    intro: [
      'When a dryer runs but the clothes come out damp, the cause is usually a heating element, a thermal fuse, a gas valve coil or a vent so clogged the dryer protects itself by shutting off the heat.',
      'We repair electric and gas dryers in Temple and the surrounding area. The technician checks airflow first, because a restricted vent causes or contributes to a large share of dryer failures. Then the heating parts get tested one at a time, and you hear what failed before any repair.',
    ],
    symptomsHeading: 'Dryer problems we diagnose',
    symptoms: [
      {
        title: 'Runs but no heat',
        cause:
          'On electric dryers: a burned-out heating element, a blown thermal fuse or a bad high-limit thermostat. On gas dryers: a failed igniter, flame sensor or gas valve coils. A blown thermal fuse is often a sign of a blocked vent, so the vent needs checking too.',
        fixable: 'Elements, fuses, igniters and coils are standard parts.',
      },
      {
        title: 'Takes two or three cycles to dry',
        cause:
          'Nine times out of ten this is airflow: a packed lint screen housing, a crushed transition hose or a long vent run full of lint. A weak heating element can do it too.',
        fixable: 'Fixing the airflow problem often fixes the dryer.',
      },
      {
        title: 'Won’t start',
        cause:
          'Check the breaker first. Electric dryers use two breakers, and one can trip while the light still works. Past that, a bad door switch, start switch, thermal fuse or drive motor can stop it.',
        fixable: 'Switches and fuses are quick repairs.',
      },
      {
        title: 'Drum won’t turn',
        cause:
          'If the motor hums but the drum stays still, the drive belt has usually snapped. A seized idler pulley or motor can also do it.',
        fixable: 'Belt replacement is one of the most common dryer repairs.',
      },
      {
        title: 'Squealing, thumping or grinding',
        cause:
          'Squeals come from worn drum rollers, idler pulleys or drum glides. A thumping sound often means a flat spot on a roller. Grinding can be a worn drum bearing or a coin stuck in the blower.',
        fixable: 'Roller and pulley kits restore a quiet dryer for many more years.',
      },
      {
        title: 'Gets very hot or smells like burning',
        cause:
          'Stop using it. Overheating usually comes from lint buildup inside the cabinet or vent, or a cycling thermostat that has failed closed.',
        fixable: 'Fixable, but it should be looked at before the next load.',
      },
    ],
    diagnostic: {
      heading: 'What the diagnostic visit covers',
      paragraphs: [
        'The technician measures airflow at the vent, checks the heating circuit with a meter, inspects the belt, rollers and idler, and on gas models watches the ignition sequence. You hear the cause before anything is replaced.',
      ],
      covers: [
        'Exhaust airflow and vent restriction check',
        'Heating element or igniter and gas valve test',
        'Thermal fuse and thermostat continuity tests',
        'Belt, rollers, idler pulley and glides inspection',
        'Door switch and start circuit check',
        'Lint buildup inside the cabinet',
      ],
    },
    repairOrReplace: {
      heading: 'Repair or replace your dryer?',
      paragraphs: [
        'Dryers are simple machines and most parts are easy to replace. Heating, belt and roller repairs usually make sense even on an older dryer. Replacement only tends to win when the drum, motor and control board are all worn out at once.',
      ],
      points: [
        'No heat or broken belt: almost always worth repairing',
        'Control board failure on a basic 12+ year old dryer: compare against a new dryer',
        'Clean the vent at least once a year to protect the parts you paid for',
      ],
    },
    safety:
      'Lint buildup is a fire risk. Clean the lint screen every load. If you smell gas near a gas dryer, leave the house and call your gas utility from outside before calling for repair.',
    brands: ['Whirlpool', 'Maytag', 'Samsung', 'LG', 'GE', 'Kenmore', 'Speed Queen', 'Electrolux', 'Frigidaire'],
    faqs: [
      {
        q: 'Why does my dryer keep blowing thermal fuses?',
        a: 'A thermal fuse blows when the dryer gets too hot, and the most common reason is a restricted vent. Replacing the fuse without fixing the airflow means it will blow again.',
      },
      {
        q: 'Do you repair gas dryers?',
        a: 'Tell us it is a gas model when you book. The technician checks the igniter, flame sensor and gas valve coils. If you ever smell gas, call your gas utility first.',
      },
      {
        q: 'How often should a dryer vent be cleaned?',
        a: 'At least once a year for most homes, and more often for large families or long vent runs. If drying times are creeping up, the vent is the first thing to check.',
      },
      {
        q: 'My dryer is squeaking. Is it about to break?',
        a: 'Usually it means worn rollers or an idler pulley. It will not fail right away, but the noise gets worse and a worn idler can eventually break the belt.',
      },
      {
        q: 'Can a dryer be fixed the same day?',
        a: 'Many dryer parts are common, so a single-visit repair is often possible. It depends on the model and the part. The technician will tell you on site.',
      },
    ],
    related: ['washer', 'oven', 'dishwasher'],
    offeredVerified: false,
  },
  {
    key: 'dishwasher',
    slug: `dishwasher-repair-${loc}`,
    name: 'Dishwasher',
    navLabel: 'Dishwasher Repair',
    icon: 'dishwasher',
    card: 'Not draining, not cleaning, leaking or won’t start.',
    metaTitle: 'Dishwasher Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'Dishwasher not draining, leaking or leaving dishes dirty in Temple, TX? Request service for built-in dishwashers. Call or request service online.',
    h1: 'Dishwasher Repair in Temple, TX',
    intro: [
      'Standing water in the bottom of the tub, dishes that come out gritty, or a puddle under the door. Those three account for most dishwasher calls, and most of them come back to a clogged filter, a drain pump, an inlet valve or a worn door seal.',
      'We repair built-in dishwashers in Temple and nearby towns. Central Texas water tends to leave mineral scale, which clogs spray arms and inlet screens over time, so the technician checks for that on every call. You get the diagnosis and an explanation of the repair before anything is replaced.',
    ],
    symptomsHeading: 'Dishwasher problems we diagnose',
    symptoms: [
      {
        title: 'Water left in the bottom',
        cause:
          'Start with the filter under the lower spray arm. If it is clean, the cause is usually a kinked drain hose, a clogged garbage disposal connection or a failed drain pump.',
        fixable: 'Filter cleaning, hose fixes and drain pump replacement are routine.',
      },
      {
        title: 'Dishes not getting clean',
        cause:
          'Clogged spray arms, a dirty filter, low water fill from a bad inlet valve, or a wash motor losing power. Hard water scale on the spray arm holes is common in this area.',
        fixable: 'Most cleaning problems are solved with small parts or a thorough cleaning.',
      },
      {
        title: 'Leaking under the door',
        cause:
          'A worn door gasket, a bent door, the wrong detergent (regular dish soap makes too many suds), or a leaking pump seal or water inlet connection underneath.',
        fixable: 'Gaskets and inlet connections are simple repairs.',
      },
      {
        title: 'Won’t start or won’t fill',
        cause:
          'A door latch that does not register, a blown thermal fuse, a bad water inlet valve or a failed control board. Some models also have a float switch that stops filling if it senses a leak.',
        fixable: 'The technician tests each part before replacing anything.',
      },
      {
        title: 'Dishes not drying',
        cause:
          'A burned-out heating element or a failed vent fan, depending on the model. Empty rinse aid makes it worse, especially on newer models that use condensation drying.',
        fixable: 'Heating element replacement is a straightforward repair.',
      },
      {
        title: 'Grinding or humming noise',
        cause:
          'Broken glass or a seed in the chopper or drain pump, or a wash motor bearing that is wearing out.',
        fixable: 'Clearing debris often fixes it; worn motors can be replaced.',
      },
    ],
    diagnostic: {
      heading: 'What the diagnostic visit covers',
      paragraphs: [
        'The technician runs a short cycle, checks fill level and drain, inspects the filter and spray arms, tests the inlet valve, pump and heating element, and looks underneath for leaks. You hear the cause first.',
      ],
      covers: [
        'Fill and drain test',
        'Filter, spray arm and chopper inspection',
        'Water inlet valve and float switch test',
        'Drain and wash pump check',
        'Heating element and thermal fuse test',
        'Door latch and gasket inspection',
      ],
    },
    repairOrReplace: {
      heading: 'Repair or replace your dishwasher?',
      paragraphs: [
        'Dishwashers usually last about 9 to 12 years. A drain pump, inlet valve or latch repair is almost always worth it. A failed control board plus a tired wash motor on an older, basic unit is where replacement starts to compete.',
      ],
      points: [
        'Clogs, valves, latches and seals: repair',
        'Rusted tub or rack and multiple failures: consider replacement',
        'Mid-range and premium models (Bosch, KitchenAid): repair usually pays',
      ],
    },
    safety:
      'Turn off the dishwasher circuit breaker before working near the wiring under the kitchen sink or behind the toe kick, and shut the hot water supply valve before disconnecting any line.',
    brands: ['Bosch', 'Whirlpool', 'KitchenAid', 'GE', 'Samsung', 'LG', 'Frigidaire', 'Maytag', 'Kenmore'],
    faqs: [
      {
        q: 'Why is there water in the bottom of my dishwasher?',
        a: 'A small amount of water near the filter is normal on some models. If it is more than that, the filter is clogged, the drain hose is kinked or the drain pump has failed.',
      },
      {
        q: 'Does hard water damage dishwashers?',
        a: 'Mineral scale builds up on spray arms, the inlet valve screen and the heating element over time. Using rinse aid and running a dishwasher cleaner every month or two helps.',
      },
      {
        q: 'Can you fix a dishwasher that leaks only sometimes?',
        a: 'Yes. Intermittent leaks are often a door gasket, suds from the wrong detergent or a pump seal. The technician runs it and watches where the water appears.',
      },
      {
        q: 'Do I need to empty my dishwasher before you arrive?',
        a: 'Please do. An empty tub lets the technician reach the filter and spray arms right away and saves time on the visit.',
      },
      {
        q: 'Do you install new dishwashers?',
        a: 'Call and ask. Repair is the main service, and installation depends on the provider’s current schedule.',
      },
    ],
    related: ['washer', 'refrigerator', 'oven'],
    offeredVerified: false,
  },
  {
    key: 'oven',
    slug: `oven-stove-repair-${loc}`,
    name: 'Oven & Stove',
    navLabel: 'Oven & Stove Repair',
    icon: 'oven',
    card: 'Oven won’t heat, burner out, igniter clicking.',
    metaTitle: 'Oven & Stove Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'Oven not heating or stove burner not working in Temple, TX? Request service for electric and gas ranges, wall ovens and cooktops. Call today.',
    h1: 'Oven & Stove Repair in Temple, TX',
    intro: [
      'An oven that will not heat, or heats 50 degrees off, usually has a failed bake or broil element, a weak igniter on a gas model, or a temperature sensor that has drifted. Stovetop problems tend to be a burner element, an infinite switch or a dirty igniter.',
      'We repair electric and gas ranges, wall ovens and cooktops in Temple and nearby. The technician tests the parts, checks the actual oven temperature against the setting, and explains the repair before starting.',
    ],
    symptomsHeading: 'Oven and stove problems we diagnose',
    symptoms: [
      {
        title: 'Oven won’t heat',
        cause:
          'Electric ovens: a burned bake element (you can often see a break or blister on it), a failed relay or a control board fault. Gas ovens: a weak igniter is the most common cause. It glows but does not get hot enough to open the gas valve.',
        fixable: 'Bake elements and igniters are some of the most common oven parts.',
      },
      {
        title: 'Wrong temperature or uneven baking',
        cause:
          'A temperature sensor that has drifted, a failing element, or a convection fan that stopped. Many ovens also allow calibration, which the technician checks.',
        fixable: 'Sensor replacement or recalibration usually solves it.',
      },
      {
        title: 'Gas burner clicks but won’t light',
        cause:
          'A spill on the igniter, a burner cap out of place, a wet spark module or a cracked igniter. Continuous clicking after the burner lights usually means moisture or a bad switch.',
        fixable: 'Cleaning, igniter or switch replacement.',
      },
      {
        title: 'Electric burner not heating, or stuck on high',
        cause:
          'A bad coil element or a loose receptacle on coil tops. On glass tops, a failed radiant element or an infinite switch that is stuck.',
        fixable: 'Elements and switches are standard parts.',
      },
      {
        title: 'Self-clean won’t unlock',
        cause:
          'The door lock motor or switch has failed, or the control board did not see the oven cool down. This often shows up right after a self-clean cycle.',
        fixable: 'Door lock assemblies are replaceable.',
      },
      {
        title: 'Error code or dead display',
        cause:
          'Codes often point to a sensor or lock fault. A completely dead display can be a blown fuse, a power supply issue or a board failure.',
        fixable: 'The technician tests before replacing a control board.',
      },
    ],
    diagnostic: {
      heading: 'What the diagnostic visit covers',
      paragraphs: [
        'The technician checks power or gas supply, tests elements or the igniter, compares actual oven temperature to the setting, checks the sensor, door lock and controls, and explains what the repair involves.',
      ],
      covers: [
        'Bake and broil element or igniter test',
        'Oven temperature check against the set point',
        'Temperature sensor resistance test',
        'Surface burner, element and switch check',
        'Door lock and hinge inspection',
        'Control board and error code review',
      ],
    },
    repairOrReplace: {
      heading: 'Repair or replace your range?',
      paragraphs: [
        'Ranges last a long time, often 13 to 15 years. Elements, igniters, sensors and switches are straightforward to replace. A cracked glass cooktop or a discontinued control board is the main reason to weigh replacement.',
      ],
      points: [
        'Element, igniter or sensor failure: repair',
        'Cracked glass top on an older range: compare against replacement',
        'Wall ovens and pro-style ranges: repair nearly always pays',
      ],
    },
    safety:
      'If you smell gas, do not turn on lights or the stove. Leave the house and call your gas company from outside. Do not try to adjust gas valves or regulators yourself.',
    brands: ['GE', 'Whirlpool', 'Frigidaire', 'Samsung', 'LG', 'KitchenAid', 'Maytag', 'Bosch', 'Kenmore'],
    faqs: [
      {
        q: 'Why does my gas oven take forever to heat?',
        a: 'A weak igniter is the usual cause. It still glows, but it does not get hot enough to open the gas valve quickly, so the oven heats slowly or not at all.',
      },
      {
        q: 'My oven is 25 degrees off. Can that be fixed?',
        a: 'Often it can be calibrated. If the sensor has drifted too far, replacing it brings the oven back to the right temperature.',
      },
      {
        q: 'Do you repair glass-top stoves?',
        a: 'Yes, including radiant elements and switches. A cracked glass top can be replaced on many models, though on older ranges a new range may make more sense.',
      },
      {
        q: 'Is it safe to use my stove while the oven is broken?',
        a: 'Usually, if the problem is limited to the oven. If anything smells like gas or burning wiring, stop using it and call.',
      },
      {
        q: 'Do you work on gas ranges?',
        a: 'Gas range repair depends on the technician scheduled. Mention it is gas when you book so we can confirm.',
      },
    ],
    related: ['microwave', 'dishwasher', 'refrigerator'],
    offeredVerified: false,
  },
  {
    key: 'freezer',
    slug: `freezer-repair-${loc}`,
    name: 'Freezer',
    navLabel: 'Freezer Repair',
    icon: 'freezer',
    card: 'Upright or chest freezer not freezing or frosting up.',
    metaTitle: 'Freezer Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'Upright or chest freezer not freezing in Temple, TX? Request a diagnostic visit for frost buildup, warm temperatures and noisy freezers. Call today.',
    h1: 'Freezer Repair in Temple, TX',
    intro: [
      'A full freezer can hold hundreds of dollars of meat and food, so a freezer that starts to warm up deserves a fast look. Keep the lid or door shut. A full freezer holds a safe temperature for about 48 hours if it stays closed.',
      'We repair standalone upright and chest freezers in Temple and the surrounding area. Garage freezers are a big part of the work here, because Texas summer heat pushes them hard. The technician tests the compressor, fans, defrost system and thermostat, and explains the repair before any work.',
    ],
    symptomsHeading: 'Freezer problems we diagnose',
    symptoms: [
      {
        title: 'Not freezing',
        cause:
          'Dirty condenser coils, a failed condenser fan, a bad start relay or thermostat, or a compressor problem. Upright frost-free models can also fail in the defrost system.',
        fixable: 'Relays, thermostats and fans are routine repairs.',
      },
      {
        title: 'Heavy frost buildup',
        cause:
          'On chest and manual-defrost freezers, frost is normal over time but builds fast with a bad lid seal. On frost-free uprights, heavy frost means the defrost heater, thermostat or timer has failed.',
        fixable: 'Gaskets and defrost parts are replaceable.',
      },
      {
        title: 'Running all the time',
        cause:
          'A hot garage, blocked airflow around the coils, a leaking door seal or a low refrigerant charge.',
        fixable: 'Many causes are fixed by cleaning, airflow or a new seal.',
      },
      {
        title: 'Clicking and not running',
        cause:
          'The compressor is trying to start and failing. Often the start relay or overload, sometimes the compressor.',
        fixable: 'Relay replacement is quick.',
      },
      {
        title: 'Water under a chest freezer',
        cause:
          'Condensation from a poor lid seal, or melt water from a defrost cycle that the drain did not handle.',
        fixable: 'Seal replacement or drain clearing.',
      },
      {
        title: 'Alarm going off',
        cause:
          'Many freezers alarm when the inside temperature rises or the door is open. The cause is a cooling problem or a seal problem.',
        fixable: 'The technician traces why the temperature climbed.',
      },
    ],
    diagnostic: {
      heading: 'What the diagnostic visit covers',
      paragraphs: [
        'The technician measures temperature, checks the compressor, relay and fans, inspects the door or lid seal, and tests defrost parts on frost-free models. You hear what failed before any work starts.',
      ],
      covers: [
        'Temperature readings',
        'Compressor, relay and overload checks',
        'Condenser fan and coil condition',
        'Door or lid gasket inspection',
        'Defrost system tests on frost-free uprights',
        'Placement and airflow review',
      ],
    },
    repairOrReplace: {
      heading: 'Repair or replace your freezer?',
      paragraphs: [
        'Freezers usually last 10 to 20 years. Relays, thermostats, fans and seals are worth fixing. A sealed system failure on an older, basic chest freezer usually is not, and the technician will say so.',
      ],
      points: [
        'Relay, fan, thermostat or seal: repair',
        'Compressor failure on a small or older chest freezer: replacement usually makes more sense',
        'Large uprights and built-in columns: repair usually pays',
      ],
    },
    safety:
      'Unplug before cleaning coils. Do not chip ice with sharp tools, because puncturing a cooling line ends the life of the freezer.',
    brands: ['Frigidaire', 'GE', 'Whirlpool', 'Kenmore', 'Maytag', 'Amana', 'Samsung', 'LG'],
    faqs: [
      {
        q: 'How long will food stay frozen if my freezer stops?',
        a: 'About 48 hours for a full freezer and 24 hours for a half-full one, as long as the door stays closed.',
      },
      {
        q: 'Is my garage too hot for a freezer?',
        a: 'Many freezers are rated for a room range that tops out around 110°F. Garage temperatures in a Central Texas summer can get close to that. Give the freezer space for airflow and keep the coils clean.',
      },
      {
        q: 'Do you repair chest freezers?',
        a: 'Yes, along with upright freezers. Tell us the type and brand when you call.',
      },
      {
        q: 'Why is my freezer covered in frost?',
        a: 'On a frost-free model, heavy frost means a defrost part failed. On a manual-defrost model, it often points to a worn seal letting in humid air.',
      },
    ],
    related: ['refrigerator', 'washer', 'dryer'],
    offeredVerified: false,
  },
  {
    key: 'microwave',
    slug: `microwave-repair-${loc}`,
    name: 'Microwave',
    navLabel: 'Microwave Repair',
    icon: 'microwave',
    card: 'Over-the-range and built-in microwaves not heating.',
    metaTitle: 'Microwave Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'Over-the-range or built-in microwave not heating in Temple, TX? Request a diagnostic visit for door switches, turntables, fans and controls.',
    h1: 'Microwave Repair in Temple, TX',
    intro: [
      'Repair makes the most sense on over-the-range and built-in microwaves, where replacement means extra installation work. Countertop microwaves are usually better replaced than repaired.',
      'In Temple and nearby towns, the common microwave calls are no heat, a dead keypad, a turntable that stopped, or a vent fan or light that failed. The technician tests parts with the unit safely discharged, then explains what the repair involves.',
    ],
    symptomsHeading: 'Microwave problems we diagnose',
    symptoms: [
      {
        title: 'Runs but doesn’t heat',
        cause:
          'A failed magnetron, high-voltage diode, capacitor or a door switch. These parts carry dangerous voltage, even unplugged.',
        fixable: 'Fixable on most built-in units. Leave this one to a technician.',
      },
      {
        title: 'Dead, no display',
        cause: 'A blown internal fuse, often caused by a failing door switch, or a control board fault.',
        fixable: 'Fuse and door switch replacement are common.',
      },
      {
        title: 'Keypad not responding',
        cause: 'A worn membrane keypad or a control board issue.',
        fixable: 'Keypads are replaceable on many models.',
      },
      {
        title: 'Turntable not turning',
        cause: 'A failed turntable motor or a worn coupler under the glass tray.',
        fixable: 'Motor or coupler replacement.',
      },
      {
        title: 'Vent fan or light not working',
        cause: 'On over-the-range units: a failed fan motor, bulb, socket or switch.',
        fixable: 'Standard parts on most brands.',
      },
      {
        title: 'Sparking inside',
        cause: 'Metal in the cavity, a burned waveguide cover or damaged interior paint. Stop using it.',
        fixable: 'Waveguide covers are simple to replace. Paint damage may mean replacement.',
      },
    ],
    diagnostic: {
      heading: 'What the diagnostic visit covers',
      paragraphs: [
        'The technician safely discharges the high-voltage capacitor, tests the door switches, fuse, magnetron circuit and controls, and checks the vent fan and light on over-the-range models.',
      ],
      covers: [
        'Safe discharge of the high-voltage circuit',
        'Door switch and fuse tests',
        'Magnetron, diode and capacitor checks',
        'Keypad and control board check',
        'Turntable motor and coupler',
        'Vent fan and light on over-the-range units',
      ],
    },
    repairOrReplace: {
      heading: 'Repair or replace your microwave?',
      paragraphs: [
        'For countertop units, replacing usually makes more sense. For over-the-range and built-in units, a door switch, fuse or turntable repair is worth doing. Magnetron replacement depends on the age of the unit and whether the part is still available.',
      ],
      points: [
        'Countertop microwave: replace',
        'Over-the-range or built-in, simple failure: repair',
        'Magnetron failure on an older OTR unit: compare against replacement',
      ],
    },
    safety:
      'Do not open a microwave cabinet. The high-voltage capacitor can hold a dangerous charge long after the unit is unplugged.',
    brands: ['GE', 'Whirlpool', 'Samsung', 'LG', 'KitchenAid', 'Frigidaire', 'Maytag', 'Bosch'],
    faqs: [
      {
        q: 'Is it worth repairing a microwave?',
        a: 'For over-the-range and built-in models, often yes. For countertop units, usually no. Replacement is normally the simpler choice.',
      },
      {
        q: 'Why does my microwave run but not heat?',
        a: 'The usual causes are a door switch, high-voltage diode, capacitor or magnetron. These are high-voltage parts and should only be tested by a technician.',
      },
      {
        q: 'Can you replace the light or fan in my over-the-range microwave?',
        a: 'Yes. Fan motors, bulbs and switches are standard parts on most models.',
      },
    ],
    related: ['oven', 'dishwasher', 'refrigerator'],
    offeredVerified: false,
  },
];

export const serviceByKey = Object.fromEntries(services.map((s) => [s.key, s])) as Record<ApplianceKey, Service>;

export const serviceHref = (key: ApplianceKey) => `/${serviceByKey[key].slug}/`;

/** Six cards in the homepage selector, per the build spec. */
export const primaryServiceKeys: ApplianceKey[] = ['refrigerator', 'washer', 'dryer', 'dishwasher', 'oven', 'freezer'];

export const applianceOptions = services.map((s) => ({ key: s.key, label: s.name, icon: s.icon }));
