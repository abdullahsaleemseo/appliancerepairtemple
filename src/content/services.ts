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
    metaTitle: 'Refrigerator Repair Temple TX | Same-Day Service',
    metaDescription:
      'Refrigerator not cooling, leaking or icing up? Same-day refrigerator repair in Temple, TX, subject to availability. All major brands. Call (254) 555-0147.',
    h1: 'Same-Day Refrigerator Repair in Temple, TX',
    intro: [
      'Refrigerator not cooling, leaking or making a racket? Appliance Repair Temple repairs top-freezer, bottom-freezer, side-by-side and French door refrigerators in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Most refrigerator failures come down to a short list of parts: a fan motor, a defrost component, a start relay, a water valve, a sensor or a control board. The technician tests those parts in your kitchen, shows you which one failed and explains the repair before any work starts. You get a straight answer about whether the fix makes sense for your fridge.',
      'Long Temple summers keep a refrigerator running hard, so a small problem in May can turn into a warm fridge full of groceries by July.',
    ],
    symptomsHeading: 'Refrigerator symptoms and what they usually mean',
    symptoms: [
      {
        title: 'Not cooling at all',
        cause:
          'Light on but nothing running? Look at the start relay, overload, control board or compressor. Compressor running but both sides warm? The condenser coils may be packed with dust or the condenser fan may have stopped.',
        fixable: 'Relays, fans and coil cleaning are routine. Compressor work is a bigger decision we talk through with you.',
      },
      {
        title: 'Fridge warm, freezer still cold',
        cause:
          'Cold air is made in the freezer and pushed into the fridge. A frosted evaporator coil, a stopped evaporator fan or a stuck air damper keeps the freezer cold while the fridge warms up.',
        fixable: 'One of the most common refrigerator repairs we do.',
      },
      {
        title: 'Freezer warm or frosting up',
        cause:
          'Thick frost on the freezer back panel points to the defrost heater, thermostat or control. Soft ice cream with no frost points to the fan, relay or compressor.',
        fixable: 'Defrost system repairs are routine on most models.',
      },
      {
        title: 'Water leaking inside or on the floor',
        cause:
          'Water under the crisper drawers usually means a clogged defrost drain. Water on the floor can come from the same drain, a cracked ice maker line, a loose filter housing or a leaking inlet valve.',
        fixable: 'Drain clearing and valve or line replacement are usually one-visit jobs.',
      },
      {
        title: 'Ice maker or water dispenser not working',
        cause:
          'Check that the ice maker arm is down and the supply valve is open. Past that, it is usually a frozen fill tube, a failed inlet valve, an old filter or the ice maker module.',
        fixable: 'Inlet valves and ice maker modules are standard parts for most brands.',
      },
      {
        title: 'Loud buzzing, clicking or squealing',
        cause:
          'Squealing that gets louder with the freezer door open is usually the evaporator fan. Rattling underneath is often the condenser fan or drain pan. Clicking every few minutes means the compressor is trying to start and failing.',
        fixable: 'Fan motors and relays are quick replacements once the noise is traced.',
      },
      {
        title: 'Running all the time',
        cause:
          'A fridge that never shuts off is fighting to keep up: dirty coils, a torn door gasket, a failing fan or low refrigerant. In a hot garage, the room may be warmer than the unit was built for.',
        fixable: 'Gaskets, fans and a coil cleaning fix most of these.',
      },
      {
        title: 'Error code or blinking display',
        cause:
          'A code narrows the search to a system, such as a sensor or fan circuit, but rarely names the exact part. The technician confirms it with a meter before ordering anything.',
        fixable: 'Sensor and control faults are common and fixable on most models.',
      },
    ],
    diagnostic: {
      heading: 'What the visit covers',
      paragraphs: [],
      covers: [],
    },
    repairOrReplace: {
      heading: 'Is your refrigerator worth repairing?',
      paragraphs: [
        'Most refrigerators last 10 to 15 years. A useful rule of thumb: if the repair would cost more than half of what a comparable new refrigerator costs, and your unit is near the end of that range, replacement starts to make sense.',
        'Fans, defrost parts, relays, valves and gaskets are almost always worth repairing. Compressor or refrigerant work on an older fridge deserves a harder look. The technician gives you an honest read; the decision stays yours.',
      ],
      points: [
        'Under about 8 years old: repair is usually the right call',
        'Sealed system failure on a 12+ year old unit: compare against a new refrigerator too',
        'Built-in and counter-depth models: repair usually makes more sense, since replacing them can mean cabinet work',
      ],
    },
    safety:
      'Unplug the refrigerator before cleaning the condenser coils, and do not open sealed system lines. Refrigerant work requires EPA Section 608 certification.',
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE', 'Frigidaire', 'Maytag', 'KitchenAid', 'Kenmore', 'Amana', 'Bosch', 'Electrolux'],
    faqs: [
      {
        q: 'How long will food last in a refrigerator that stopped cooling?',
        a: 'Keep the doors closed. A closed refrigerator keeps food safe for about 4 hours. A full freezer holds for about 48 hours and a half-full one for about 24. Throw out perishables such as milk, meat and leftovers that sat above 40°F for more than two hours.',
      },
      {
        q: 'Can my refrigerator be repaired the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Many common refrigerator parts can be replaced on the first visit. Some model-specific parts have to be ordered, and the technician will tell you if that is the case.',
      },
      {
        q: 'Do you repair refrigerator compressors and refrigerant leaks?',
        a: 'Sealed system repairs are possible on many models, but they are bigger jobs and refrigerant must be handled by an EPA-certified technician. The technician confirms the diagnosis and talks through whether the repair makes sense for your refrigerator before anything is done.',
      },
      {
        q: 'Is it OK to keep a refrigerator in a Temple garage?',
        a: 'Check your owner’s manual for the room temperature range your model is designed for. Many standard refrigerators are built for indoor temperatures, and a Texas garage in July can run hotter than that. Garage-ready models, shade and space around the coils all help.',
      },
      {
        q: 'How much does refrigerator repair cost?',
        a: 'It depends on the model and the part that failed, so we do not list prices online. Call to discuss your repair needs. Have the brand, the model number and a short description of the problem ready.',
      },
      {
        q: 'Where do I find my refrigerator’s model number?',
        a: 'Look for a label inside the fresh-food section, usually on a side wall or the ceiling near the top. Some models put it behind the crisper drawers or on the back. A photo of the label works.',
      },
    ],
    related: ['freezer', 'dishwasher', 'oven'],
    offeredVerified: true,
    blocks: [
      {
        type: 'quickAnswer',
        heading: 'Fridge warm right now? Do this first.',
        steps: [
          'Keep the doors closed. A closed refrigerator keeps food cold for about 4 hours. A full freezer holds for about 48 hours, a half-full one about 24.',
          'Check the basics: the plug, the breaker and the temperature setting. Dials get bumped during cleaning more often than you would think.',
          'Put an appliance thermometer on a middle shelf. The fresh-food side should read 40°F or below and the freezer 0°F.',
          'Listen. Is the compressor humming? Does a fan run inside the freezer when you hold the door switch in?',
          'Call us with the brand, the model number and what you noticed.',
        ],
        note: 'Throw out perishables such as milk, meat and leftovers that sat above 40°F for more than two hours. When in doubt, throw it out.',
      },
      { type: 'symptoms' },
      { type: 'inlineForm' },
      {
        type: 'partsTable',
        heading: 'The parts behind most refrigerator repairs',
        intro: 'Knowing what each part does makes the diagnosis easier to follow.',
        rows: [
          { part: 'Evaporator fan', job: 'Moves cold air from the freezer coil into both sections', signs: 'Fridge warm while the freezer stays cold, or a squeal that gets louder with the freezer door open' },
          { part: 'Condenser fan and coils', job: 'Release heat from under or behind the unit', signs: 'Both sides warm, the fridge runs nonstop, no warm air moving under the unit' },
          { part: 'Defrost heater, thermostat and control', job: 'Melt frost off the evaporator coil several times a day', signs: 'Thick frost on the freezer back panel and a fridge that warms up slowly' },
          { part: 'Start relay and overload', job: 'Get the compressor started', signs: 'Clicking every few minutes while the compressor never kicks on' },
          { part: 'Compressor', job: 'Pumps refrigerant through the sealed system', signs: 'Runs but does not cool, or will not run once the relay is ruled out' },
          { part: 'Door gasket', job: 'Seals the cold air in', signs: 'Sweating or frost at the door edge, and a fridge that runs constantly' },
          { part: 'Water inlet valve', job: 'Lets water into the ice maker and dispenser', signs: 'No ice, a slow dispenser, or water on the floor behind the fridge' },
        ],
      },
      {
        type: 'stopUsing',
        heading: 'When to unplug it and call a technician',
        intro: 'Most refrigerator problems can wait a few hours. These cannot.',
        items: [
          'You smell burning or see scorch marks near the back or bottom of the unit.',
          'The refrigerator trips the breaker, or the plug or outlet feels hot.',
          'Water is pooling near the plug, the outlet or the compressor area.',
          'The compressor clicks on and off every few minutes and never runs. Unplugging it protects the compressor until it is checked.',
          'You see oily residue on the tubing or smell a chemical odor, which can point to a refrigerant leak.',
        ],
        note: 'Refrigerant work requires EPA Section 608 certification. Never cut, bend or puncture refrigerator tubing, and do not chip ice off the coils with a sharp tool.',
      },
      {
        type: 'diyVsPro',
        heading: 'What you can check, and what to leave to us',
        diy: [
          'Clean the condenser coils with a coil brush or vacuum, with the fridge unplugged.',
          'Check that the doors close fully and the gaskets are clean.',
          'Replace an old water filter if the dispenser has slowed down.',
          'Level the refrigerator so the doors swing shut on their own.',
        ],
        pro: [
          'Testing relays, fans, sensors and boards with a meter.',
          'Anything behind the freezer back panel, including defrost parts.',
          'Water valve and supply line replacement behind the unit.',
          'Compressor, refrigerant and sealed system work.',
        ],
      },
      { type: 'brands', heading: 'Refrigerator brands and styles we repair', intro: 'We work on the major refrigerator brands found in Temple kitchens, in every common style. Tell us the brand and model number when you book so the technician can check parts ahead of time.', styles: ['Top-freezer', 'Bottom-freezer', 'Side-by-side', 'French door', 'Counter-depth'] },
      {
        type: 'process',
        heading: 'How a refrigerator repair visit works',
        steps: [
          { title: 'Temperatures and a listen', text: 'The technician checks the temperature in both sections and listens to the compressor and fans.' },
          { title: 'Look behind the panels', text: 'When needed, the freezer back panel comes off so the coil, fan and defrost parts can be checked for frost and wear.' },
          { title: 'Test, do not guess', text: 'Suspect parts are tested with a meter before anything is replaced. You hear what failed and what the repair involves.' },
          { title: 'Repair and confirm', text: 'After your OK, the part is replaced and cooling is confirmed. A fridge can take several hours to get fully back to temperature.' },
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'payment' },
      { type: 'faq' },
    ],
  },
  {
    key: 'washer',
    slug: `washer-repair-${loc}`,
    name: 'Washer',
    navLabel: 'Washer Repair',
    icon: 'washer',
    card: 'Won’t drain, won’t spin, leaking or shaking hard.',
    metaTitle: 'Washer Repair Temple TX | Top-Load & Front-Load',
    metaDescription:
      'Washer won’t drain, spin or stop leaking? Washer repair in Temple, TX for top-load and front-load machines. Same-day service available. Call (254) 555-0147.',
    h1: 'Top-Load & Front-Load Washer Repair in Temple, TX',
    intro: [
      'Washer stuck full of water, refusing to spin or leaking across the laundry room floor? Appliance Repair Temple repairs top-load and front-load washing machines in homes across Temple, TX, including stacked laundry centers and high-efficiency models. Same-day service is available, subject to technician availability, location, and current demand.',
      'Most washer breakdowns trace back to a handful of parts: the lid or door lock, the drain pump, a water inlet valve, the drive belt or coupler, or the suspension. Where the cycle stops tells you a lot about which one failed, so that is where the technician starts. You hear what failed and what the repair involves before any work begins.',
    ],
    symptomsHeading: 'Washer problems we fix most',
    symptoms: [
      {
        title: 'Won’t drain',
        cause:
          'The most common cause is a sock, coin or hair tie caught in the drain pump or its filter. After that, look for a kinked drain hose, a clogged house drain or a pump motor that has failed. A hum with no water moving usually means the pump is jammed.',
        fixable: 'Pump clearing and pump replacement are among the most common washer repairs.',
      },
      {
        title: 'Won’t spin, clothes come out soaked',
        cause:
          'A washer will not spin until it confirms the lid or door is locked and the drum has drained. A bad lid lock, a broken lid strike, a drain problem, a worn belt or a failed shift actuator on top-loaders are the usual reasons.',
        fixable: 'Locks, strikes, belts and actuators are standard replacement parts.',
      },
      {
        title: 'Leaking water',
        cause:
          'Front-loaders often leak from a torn door boot seal. Other sources are the fill hoses, the drain pump, a loose drain hose or, less often, a worn tub seal. Where the puddle forms usually points to the source.',
        fixable: 'Door boots, hoses and pumps are replaceable. Tub seal leaks take more labor.',
      },
      {
        title: 'Shaking, banging or walking across the floor',
        cause:
          'Start with an uneven load and an unlevel machine. If it still bangs with a balanced load, top-loaders usually have worn suspension rods and front-loaders have worn shock absorbers or springs.',
        fixable: 'Suspension rods and shocks are routine replacements.',
      },
      {
        title: 'Won’t start or stops mid-cycle',
        cause:
          'Check the outlet and the breaker first. Past that, a door lock that will not engage, a lid switch, the water level sensor or the control board can stop a cycle cold.',
        fixable: 'The technician tests each part in order and replaces only what failed.',
      },
      {
        title: 'Won’t fill or fills slowly',
        cause:
          'Both water valves behind the machine should be fully open. A slow or uneven fill usually means clogged inlet screens or a failing water inlet valve. Hard water makes screen clogs more likely.',
        fixable: 'Screen cleaning or inlet valve replacement fixes most fill problems.',
      },
      {
        title: 'Bad smell or residue on clothes',
        cause:
          'Front-load washers trap moisture in the door seal and the pump filter. Too much detergent, non-HE detergent and a slow drain make it worse.',
        fixable: 'Usually a cleaning issue. We will show you what to clean and how often.',
      },
    ],
    diagnostic: { heading: 'What the visit covers', paragraphs: [], covers: [] },
    repairOrReplace: {
      heading: 'Repair or replace your washer?',
      paragraphs: [
        'Most washers last 10 to 13 years. Locks, pumps, valves, belts and suspension parts are almost always worth fixing, even on an older machine. A failed transmission or worn tub bearings on a 10-year-old top-loader is a closer call, because those jobs take far more labor.',
        'High-efficiency front-loaders are usually worth repairing unless the bearings or the drum have failed. The technician will tell you plainly which side of that line your washer is on.',
      ],
      points: [
        'Lock, pump, valve, belt or suspension: repair',
        'Bearings or transmission on a 10+ year old washer: compare against a new one',
        'Stacked laundry centers: repair usually beats replacing both machines',
      ],
    },
    safety:
      'Unplug the washer and shut off both water valves before checking hoses. Water left in a front-loader will spill when the filter is opened, so have towels and a shallow pan ready.',
    brands: ['Whirlpool', 'Maytag', 'Samsung', 'LG', 'GE', 'Kenmore', 'Speed Queen', 'Electrolux', 'Frigidaire', 'Amana'],
    faqs: [
      {
        q: 'My washer is full of water and won’t drain. What should I do?',
        a: 'Turn it off, unplug it and shut the water valves. On a front-loader, drain it through the small access panel at the bottom front, with towels and a pan ready. If the pump filter is clear and it still will not drain, the pump has likely failed and it is time to call.',
      },
      {
        q: 'Why does my washer shake so hard during the spin cycle?',
        a: 'Usually an uneven load or a machine that is not level. If it still shakes with a balanced load, the suspension rods on a top-loader or the shock absorbers on a front-loader are probably worn.',
      },
      {
        q: 'Why does my front-load washer smell?',
        a: 'Moisture and detergent residue collect in the door seal and pump filter. Wipe the seal after the last load, leave the door open to dry, clean the filter every few months and use HE detergent in the right amount.',
      },
      {
        q: 'What does the error code on my washer mean?',
        a: 'Codes point to a system, such as draining, the door lock or water level, and the exact meaning varies by brand and model. Write the code down and tell us when you call. It helps the technician bring the likely parts.',
      },
      {
        q: 'Do you repair stacked washer and dryer units?',
        a: 'Yes. Stacked laundry centers take more access work, so mention it when you book and the technician can plan for it.',
      },
      {
        q: 'How much does washer repair cost?',
        a: 'It depends on the machine and the failed part, so we do not list prices online. Call to discuss your repair needs. Have the brand, model number and a short description of what the washer is doing ready.',
      },
      {
        q: 'Where is the model number on my washer?',
        a: 'On top-loaders, look under the lid or on the back of the control panel. On front-loaders, check the door frame or the inside of the door. A photo of the label works.',
      },
    ],
    related: ['dryer', 'dishwasher', 'refrigerator'],
    offeredVerified: true,
    blocks: [
      {
        type: 'cycleStages',
        heading: 'Where in the cycle does your washer stop?',
        intro: 'Notice the point where things go wrong. It narrows the problem down fast.',
        rows: [
          { stage: 'Start', what: 'Nothing happens, or it beeps and stops', parts: 'Door or lid lock, lid switch, control board, power' },
          { stage: 'Fill', what: 'No water, a slow fill or the wrong temperature', parts: 'Water inlet valve, clogged inlet screens, kinked hoses' },
          { stage: 'Wash', what: 'Hums but does not agitate or tumble', parts: 'Drive belt, motor coupler, shift actuator, motor' },
          { stage: 'Drain', what: 'Water stays in the drum', parts: 'Drain pump, pump filter, drain hose' },
          { stage: 'Spin', what: 'Clothes come out soaking wet', parts: 'Lid lock, drain problem, belt, actuator, suspension' },
          { stage: 'Any time', what: 'Water under the machine', parts: 'Door boot seal, fill hoses, pump, tub seal' },
        ],
      },
      { type: 'symptoms' },
      { type: 'inlineForm' },
      {
        type: 'compare',
        heading: 'Top-load and front-load washers fail differently',
        intro: 'Both wash clothes. They wear out in different places, which is why the brand and style matter when you book.',
        columns: [
          {
            title: 'Top-load washers',
            items: [
              'Lid lock or lid switch failures that stop the spin',
              'Shift actuator: agitates but will not switch to spin',
              'Worn motor coupler or drive belt',
              'Suspension rods that let the tub bang during spin',
              'Inlet valves clogged by hard water grit',
            ],
          },
          {
            title: 'Front-load washers',
            items: [
              'Door lock faults and door lock error codes',
              'Torn or moldy door boot seal, often the source of leaks',
              'Pump filter clogged by socks, coins and hair ties',
              'Worn shock absorbers and springs',
              'Tub bearings that roar during spin, the biggest repair',
            ],
          },
        ],
      },
      {
        type: 'quickAnswer',
        heading: 'Washer full of water? How to drain it safely',
        steps: [
          'Turn the washer off, unplug it and close both water valves behind it.',
          'Front-load: open the small panel at the bottom front, lay down towels and a shallow pan, drain through the little hose if there is one, then unscrew the filter slowly.',
          'Top-load: bail the water out with a container, or lower the drain hose into a bucket below the level of the tub.',
          'Check the pump filter and drain hose for socks, coins, hair ties and kinks.',
          'Plug it back in and run a drain and spin. If it hums and nothing moves, stop and call us. Running a jammed pump can burn out its motor.',
        ],
        note: 'Never open a front-load door while the drum is full. The water will pour straight onto the floor.',
      },
      {
        type: 'stopUsing',
        heading: 'Stop the cycle and call if you notice this',
        items: [
          'Water has reached the outlet, the power cord or the floor near wiring.',
          'You smell burning or see smoke coming from the bottom of the machine.',
          'The washer bangs hard enough to move across the floor, even with a balanced load.',
          'A loud grinding or roaring sound during spin, which can mean failing tub bearings.',
          'The breaker trips when the washer starts or switches to spin.',
        ],
        note: 'If water reached the outlet or wiring, switch off the breaker before you touch the washer or the cord.',
      },
      {
        type: 'prose',
        heading: 'Keep your washer out of trouble',
        paragraphs: [
          'Replace the fill hoses every three to five years, which many manufacturers recommend. Look for bulges, cracks or rust at the fittings. Braided stainless hoses resist bursting better than plain rubber, but they still wear out.',
          'Hard water is common in Central Texas. Mineral grit collects in the small screens where the hoses connect and slows the fill. Front-loaders also trap moisture in the door seal, so wipe it, leave the door open after the last load and clean the pump filter every few months.',
          'Use HE detergent in HE machines and do not overload the drum. Too many suds and too much weight are behind a lot of drain and spin calls.',
        ],
      },
      {
        type: 'process',
        heading: 'What happens on a washer repair visit',
        steps: [
          { title: 'Run a test cycle', text: 'The technician runs the washer to see exactly where it stops: fill, wash, drain or spin.' },
          { title: 'Read the codes', text: 'On electronic models, stored error codes are pulled to narrow the search.' },
          { title: 'Test the parts', text: 'The lock, pump, valve or drive parts are tested before anything is replaced. You hear what failed and what the fix involves.' },
          { title: 'Repair and spin', text: 'After your OK, the repair is made and a full drain and spin confirms it works.' },
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Washer brands and types we repair', intro: 'We repair the major washer brands found in Temple laundry rooms. Tell us the brand and model number when you book so the technician can check parts ahead of time.', styles: ['Top-load', 'Front-load', 'High-efficiency (HE)', 'Stacked laundry centers'] },
      { type: 'faq' },
      { type: 'payment' },
    ],
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
