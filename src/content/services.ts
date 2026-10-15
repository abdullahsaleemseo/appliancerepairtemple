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
    metaTitle: 'Dryer Repair Temple TX | Electric & Gas Dryers',
    metaDescription:
      'Dryer not heating, taking forever or squealing? Electric and gas dryer repair in Temple, TX. Same-day service, subject to availability. Call (254) 555-0147.',
    h1: 'Electric & Gas Dryer Repair in Temple, TX',
    intro: [
      'Dryer running but the clothes come out damp? Taking two or three cycles to dry a load? Appliance Repair Temple repairs electric and gas dryers in homes across Temple, TX, including stacked laundry centers. Same-day service is available, subject to technician availability, location, and current demand.',
      'Most dryer calls come down to heat or airflow. On the heat side it is a heating element, a thermal fuse, a thermostat or a gas igniter. On the airflow side it is lint: in the screen housing, the transition hose or the vent run to the outside. A clogged vent also makes the dryer overheat and burn out heating parts, so the technician checks both and explains the repair before starting.',
    ],
    symptomsHeading: 'Dryer problems and what usually causes them',
    symptoms: [
      {
        title: 'Runs but no heat',
        cause:
          'Electric dryers: a burned-out heating element, a blown thermal fuse or a failed high-limit thermostat. Gas dryers: a weak igniter, a bad flame sensor or failed gas valve coils. On electric models, one half of the double breaker can trip and leave the drum turning with no heat.',
        fixable: 'Elements, fuses, igniters and coils are standard parts.',
      },
      {
        title: 'Takes two or three cycles to dry',
        cause:
          'Most of the time this is airflow: a packed lint screen housing, a crushed transition hose or a long vent full of lint. A heating element that has partly failed can do it too.',
        fixable: 'Fixing the airflow often fixes the dryer.',
      },
      {
        title: 'Won’t start',
        cause:
          'Check the breaker first. After that, a bad door switch, start switch, thermal fuse or drive motor can stop a dryer from starting.',
        fixable: 'Switches and fuses are quick repairs.',
      },
      {
        title: 'Drum won’t turn',
        cause:
          'If the motor hums but the drum stays still, the drive belt has usually snapped. A seized idler pulley or drum roller can do it too.',
        fixable: 'Belt replacement is one of the most common dryer repairs.',
      },
      {
        title: 'Squealing, thumping or grinding',
        cause:
          'Squeals usually come from worn drum rollers or the idler pulley. A rhythmic thump often means a flat spot on a roller. Grinding can be worn drum glides or something caught in the blower.',
        fixable: 'Roller and pulley kits bring back a quiet dryer.',
      },
      {
        title: 'Gets very hot or smells like burning',
        cause:
          'Stop using it. Overheating usually comes from lint built up inside the cabinet or the vent, or a cycling thermostat that has failed.',
        fixable: 'Fixable, but it needs a look before the next load.',
      },
      {
        title: 'Shuts off early or clothes still wet on auto dry',
        cause:
          'Auto-dry cycles use moisture sensor bars inside the drum. Dryer sheet residue coats them and fools the dryer into stopping early. A failing thermostat or control board can do the same.',
        fixable: 'Cleaning the sensor bars fixes many of these. Sensors and thermostats are replaceable.',
      },
    ],
    diagnostic: { heading: 'What the visit covers', paragraphs: [], covers: [] },
    repairOrReplace: {
      heading: 'Is your dryer worth repairing?',
      paragraphs: [
        'Dryers are simple machines, and most of their parts are easy to replace. Heating, belt, roller and switch repairs usually make sense even on a dryer that is ten years old. Replacement starts to win when the drum, motor and control board are all worn out at once.',
        'Before you replace a dryer for slow drying, have the vent checked. A new dryer on a clogged vent will dry just as slowly.',
      ],
      points: [
        'No heat or a broken belt: almost always worth repairing',
        'Control board failure on a basic 12+ year old dryer: compare against a new one',
        'Slow drying: check the vent before you decide anything',
      ],
    },
    safety:
      'Lint buildup is a fire risk. Clean the lint screen every load. If you smell gas near a gas dryer, leave the house and call your gas utility from outside before calling for repair.',
    brands: ['Whirlpool', 'Maytag', 'Samsung', 'LG', 'GE', 'Kenmore', 'Speed Queen', 'Electrolux', 'Frigidaire', 'Amana'],
    faqs: [
      {
        q: 'Why does my dryer keep blowing thermal fuses?',
        a: 'A thermal fuse blows when the dryer runs too hot, and the most common reason is a restricted vent. Replacing the fuse without fixing the airflow means it will blow again, so we check the vent on every no-heat call.',
      },
      {
        q: 'Do you repair gas dryers?',
        a: 'Yes. The technician checks the igniter, flame sensor and gas valve coils. If you ever smell gas, leave the house and call your gas utility from outside before anything else.',
      },
      {
        q: 'How often should a dryer vent be cleaned?',
        a: 'At least once a year for most homes, and more often for large households or long vent runs. If drying times are creeping up, the vent is the first thing to check.',
      },
      {
        q: 'My dryer is squeaking. Is it about to break?',
        a: 'Usually it means worn drum rollers or an idler pulley. It will not fail right away, but the noise gets worse, and a worn idler can eventually break the belt.',
      },
      {
        q: 'Can my dryer be fixed the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Many dryer parts are common enough to replace on the first visit. Some model-specific parts have to be ordered.',
      },
      {
        q: 'How much does dryer repair cost?',
        a: 'It depends on the dryer and the part that failed, so we do not list prices online. Call to discuss your repair needs. Have the brand, the model number and whether it is gas or electric ready.',
      },
    ],
    related: ['washer', 'oven', 'dishwasher'],
    offeredVerified: true,
    blocks: [
      {
        type: 'compare',
        heading: 'No heat? Electric and gas dryers fail differently',
        intro: 'Tell us which one you have when you call. The heating parts are completely different.',
        columns: [
          {
            title: 'Electric dryers',
            items: [
              'Heating element burned open, often from overheating',
              'Thermal fuse blown by a restricted vent',
              'High-limit or cycling thermostat failed',
              'One half of the double 240-volt breaker tripped',
              'Loose or burned terminal at the power cord block',
            ],
          },
          {
            title: 'Gas dryers',
            items: [
              'Igniter glows weakly or not at all',
              'Flame sensor not switching after the burner lights',
              'Gas valve coils failed, so the burner lights then goes out',
              'Thermal fuse blown by a restricted vent',
              'Gas supply valve partly closed after moving the dryer',
            ],
          },
        ],
      },
      {
        type: 'factCallout',
        stat: '2,900',
        text: 'home clothes dryer fires are reported to U.S. fire departments each year. Failure to clean is the leading factor, behind about a third of them. Clean the lint screen every load and have the vent checked once a year.',
        source: { name: 'U.S. Fire Administration report on clothes dryer fires, via Fire Engineering', url: 'https://www.fireengineering.com/fire-prevention-protection/usfa-releases-new-report-on-clothes-dryer-fires/' },
      },
      {
        type: 'quickAnswer',
        heading: 'The two-minute airflow check',
        intro: 'Do this before you call. It tells you whether the problem is the dryer or the vent.',
        steps: [
          'Pull out the lint screen and clean it. Shine a flashlight into the slot below it. Packed lint there restricts airflow.',
          'Look behind the dryer. The hose should be smooth and short, not crushed, kinked or full of sags.',
          'Run the dryer on high heat and go outside to the vent hood. You should feel strong, warm air and the flap should open fully.',
          'Weak or no airflow outside means a clogged vent. Strong airflow but no heat means a heating part.',
          'Call us with what you found, the brand, the model number and whether it is gas or electric.',
        ],
        note: 'Do not run a dryer that smells hot or burning while you test. Check the airflow with a load of wet towels only if it has been running normally.',
      },
      { type: 'symptoms' },
      { type: 'inlineForm' },
      {
        type: 'partsTable',
        heading: 'The dryer parts we test most',
        rows: [
          { part: 'Heating element (electric)', job: 'Heats the air pulled into the drum', signs: 'Runs with no heat; often burned open by overheating' },
          { part: 'Igniter and flame sensor (gas)', job: 'Light the burner and confirm the flame', signs: 'No heat, or an igniter that glows and never lights the burner' },
          { part: 'Gas valve coils (gas)', job: 'Open the gas valve to the burner', signs: 'Burner lights briefly, then goes out and does not relight' },
          { part: 'Thermal fuse', job: 'Cuts power or heat if the dryer overheats', signs: 'No heat or no start; usually a sign of a clogged vent' },
          { part: 'Thermostats', job: 'Cycle the heat to hold temperature', signs: 'Overheating, scorched clothes or no heat' },
          { part: 'Drive belt and idler pulley', job: 'Turn the drum', signs: 'Motor hums but the drum does not move, or a loud squeal' },
          { part: 'Drum rollers and glides', job: 'Support the drum as it turns', signs: 'Thumping, squealing or grinding during a cycle' },
        ],
      },
      {
        type: 'stopUsing',
        heading: 'Stop using the dryer and call if',
        items: [
          'You smell burning, or the top of the dryer is too hot to touch.',
          'Clothes come out scorched or smell singed.',
          'You see lint around the burner or heating element when the front panel is off.',
          'The breaker trips when the dryer starts or the heat comes on.',
          'You smell gas near a gas dryer. Leave the house first and call your gas utility from outside.',
        ],
        note: 'Never run a dryer without the lint screen in place, and never vent a gas dryer indoors.',
      },
      {
        type: 'prose',
        heading: 'Dryer vents: the hidden cause behind many dryer calls',
        paragraphs: [
          'A dryer can only dry as fast as it can push hot, wet air outside. When the vent is restricted, drying times stretch, the cabinet runs hot, and safety parts such as the thermal fuse start to fail. Replacing those parts without clearing the vent only buys time.',
          'The International Residential Code generally limits a dryer exhaust duct to 35 feet, reduced for every elbow, unless the dryer manufacturer allows more. Many laundry rooms in Temple homes vent through an interior wall, into the attic or up to the roof, and those longer runs clog faster.',
          'The short hose behind the dryer matters too. Thin foil or vinyl hoses crush easily and trap lint in their ridges. A semi-rigid or rigid metal transition duct, kept as short and straight as the space allows, moves air better.',
        ],
      },
      {
        type: 'process',
        heading: 'How a dryer repair visit works',
        steps: [
          { title: 'Airflow first', text: 'The technician checks airflow at the vent hood and the hose behind the dryer before blaming a part.' },
          { title: 'Test the heat circuit', text: 'Element, fuse and thermostats on electric models, or igniter, sensor and valve coils on gas models, are tested with a meter.' },
          { title: 'Explain and approve', text: 'You hear what failed, whether the vent played a part, and what the repair involves. Work starts after your OK.' },
          { title: 'Repair and run', text: 'The part is replaced and the dryer is run to confirm it heats and the drum turns quietly.' },
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Dryer brands and types we repair', intro: 'We repair the major dryer brands found in Temple laundry rooms. Tell us the brand, model number and whether it is gas or electric when you book.', styles: ['Electric', 'Gas', 'Stacked laundry centers'] },
      { type: 'payment' },
      { type: 'faq' },
    ],
  },
  {
    key: 'dishwasher',
    slug: `dishwasher-repair-${loc}`,
    name: 'Dishwasher',
    navLabel: 'Dishwasher Repair',
    icon: 'dishwasher',
    card: 'Not draining, not cleaning, leaking or won’t start.',
    metaTitle: 'Dishwasher Repair Temple TX | Built-In Dishwashers',
    metaDescription:
      'Dishwasher not draining, leaking or leaving dishes dirty? Built-in dishwasher repair in Temple, TX. Same-day service available. Call (254) 555-0147.',
    h1: 'Built-In Dishwasher Repair in Temple, TX',
    intro: [
      'Standing water in the bottom, gritty dishes or a puddle under the door? Appliance Repair Temple repairs built-in dishwashers in homes across Temple, TX, from basic models to third-rack machines with front or hidden top controls. Same-day service is available, subject to technician availability, location, and current demand.',
      'Most dishwasher calls come back to a clogged filter, a drain pump, a water inlet valve, a door seal or the heating element. Hard water is common in Central Texas, and mineral scale makes several of these worse over time, so the technician checks for it on every visit. You hear what failed and what the repair involves before anything is replaced.',
    ],
    symptomsHeading: 'Dishwasher problems we repair',
    symptoms: [
      {
        title: 'Water left in the bottom',
        cause:
          'Start with the filter under the lower spray arm. If it is clean, look at the drain hose under the sink, the garbage disposal connection, the air gap if you have one, and the drain pump.',
        fixable: 'Filter cleaning, hose fixes and drain pump replacement are routine.',
      },
      {
        title: 'Dishes not getting clean',
        cause:
          'Clogged spray arms, a dirty filter, a low fill from a weak inlet valve, or a wash motor losing strength. Scale on the spray arm holes is a common culprit in hard water homes.',
        fixable: 'Most cleaning problems are solved with a thorough cleaning or a small part.',
      },
      {
        title: 'Leaking under the door or onto the floor',
        cause:
          'A worn door gasket, a door that no longer closes square, regular dish soap making too many suds, or a leaking pump seal or inlet connection underneath the tub.',
        fixable: 'Gaskets and inlet connections are straightforward repairs.',
      },
      {
        title: 'Won’t start or won’t fill',
        cause:
          'A door latch that does not register, a blown thermal fuse, a bad water inlet valve or a control board fault. Many models also have a float switch that stops the fill if it senses water in the base.',
        fixable: 'The technician tests each part before replacing anything.',
      },
      {
        title: 'Dishes come out wet',
        cause:
          'A burned-out heating element or a failed vent fan, depending on the model. Newer dishwashers often dry by condensation and rely on rinse aid, so an empty dispenser makes a big difference.',
        fixable: 'Heating element replacement is a straightforward repair.',
      },
      {
        title: 'Grinding, humming or loud noise',
        cause:
          'Broken glass, a seed or a fruit pit in the chopper or drain pump, or a wash motor bearing wearing out.',
        fixable: 'Clearing debris often fixes it. Worn motors can be replaced.',
      },
    ],
    diagnostic: { heading: 'What the visit covers', paragraphs: [], covers: [] },
    repairOrReplace: {
      heading: 'Repair or replace your dishwasher?',
      paragraphs: [
        'Dishwashers usually last about 9 to 12 years. A drain pump, inlet valve, latch, seal or heating element repair is almost always worth doing. A failed control board plus a tired wash motor on an older, basic unit is where replacement starts to compete.',
        'Remember that replacing a built-in dishwasher also means removal, installation and plumbing and electrical hookups, which is part of why repair often wins.',
      ],
      points: [
        'Clogs, valves, latches, seals and elements: repair',
        'Rusted tub or racks plus a failed board: consider replacement',
        'Mid-range and premium models: repair usually makes more sense',
      ],
    },
    safety:
      'Turn off the dishwasher circuit breaker before working near the wiring under the sink or behind the toe kick, and shut the hot water supply valve before disconnecting any line.',
    brands: ['Bosch', 'Whirlpool', 'KitchenAid', 'GE', 'Samsung', 'LG', 'Frigidaire', 'Maytag', 'Kenmore', 'Electrolux'],
    faqs: [
      {
        q: 'Is some water in the bottom of my dishwasher normal?',
        a: 'A small amount of water down in the sump, under the filter, is normal on many models. It keeps the seals from drying out. Water covering the tub floor after a cycle is not normal.',
      },
      {
        q: 'Does hard water damage dishwashers?',
        a: 'Over time, yes. Mineral scale builds up on spray arms, the inlet valve screen and the heating element. Rinse aid and a dishwasher cleaner every month or two help keep it under control.',
      },
      {
        q: 'My dishwasher only leaks sometimes. Can you find the cause?',
        a: 'Yes. Intermittent leaks are often a door gasket, suds from the wrong detergent, or a pump seal that leaks only during part of the cycle. The technician runs it and watches where the water appears.',
      },
      {
        q: 'Do I need to empty the dishwasher before the technician arrives?',
        a: 'Please do, and clear out the cabinet under the sink. It lets the technician reach the filter, spray arms and drain connections right away.',
      },
      {
        q: 'Can I use drain cleaner in my dishwasher?',
        a: 'No. Chemical drain cleaners can damage the pump seals and plastic parts. If the dishwasher will not drain, clean the filter and check the hose and disposal, then call.',
      },
      {
        q: 'How much does dishwasher repair cost?',
        a: 'It depends on the model and the part, so we do not list prices online. Call to discuss your repair needs, with the brand and model number ready.',
      },
      {
        q: 'Where is the model number on my dishwasher?',
        a: 'Open the door and look along the top or side edge of the door, or on the tub frame just inside. A photo of the label works.',
      },
    ],
    related: ['washer', 'refrigerator', 'oven'],
    offeredVerified: true,
    blocks: [
      {
        type: 'resultsGrid',
        heading: 'What your dishes are telling you',
        intro: 'Take a look at the last load before you call. What you see points to where the problem is.',
        rows: [
          { see: 'Gritty residue or food bits', means: 'Water is recirculating dirty. The filter is clogged, or spray arm holes are blocked.', fix: 'Clean the filter and rinse the spray arms. If it keeps happening, the wash pump may be weak.' },
          { see: 'Top rack dirty, bottom rack clean', means: 'Water is not reaching the upper spray arm, often from a low fill or a cracked or clogged arm.', fix: 'Check that nothing blocks the arms. A low fill points to the inlet valve.' },
          { see: 'White, chalky spots or film', means: 'Hard water minerals drying on the dishes.', fix: 'Use rinse aid and a dishwasher cleaner. A weak heating element can make it worse.' },
          { see: 'Cloudy glasses that will not wipe off', means: 'Etching from too much detergent in soft water, or scale buildup in hard water.', fix: 'Try less detergent first. If the film wipes off with vinegar, it is scale.' },
          { see: 'Dishes soaking wet at the end', means: 'No heat during drying, or empty rinse aid on a condensation-dry model.', fix: 'Fill the rinse aid. If they are still wet, the heating element or vent fan may have failed.' },
          { see: 'Detergent cup still closed', means: 'The dispenser latch is stuck or the cycle is not reaching the wash step.', fix: 'Clean around the latch. If it still sticks, the dispenser or control needs a look.' },
        ],
      },
      { type: 'symptoms' },
      { type: 'inlineForm' },
      {
        type: 'quickAnswer',
        heading: 'Water in the bottom? Check these first',
        steps: [
          'Turn off the dishwasher and let the water cool. Lay a towel in front of the door.',
          'Twist out the filter under the lower spray arm and rinse it under the tap. This fixes a lot of drainage complaints.',
          'If the dishwasher drains into a garbage disposal, run the disposal. A newly installed disposal may still have its knockout plug in place.',
          'Look under the sink. The drain hose should loop up high under the counter with no kinks or sags. If there is a small air gap cap on the sink deck, pull it off and clear it.',
          'Run a short rinse cycle. If it hums at the end and still will not drain, the drain pump is the likely cause.',
        ],
        note: 'Watch for broken glass in the filter and the sump, and turn off the breaker before reaching near the pump.',
      },
      {
        type: 'prose',
        heading: 'The drain hose, the high loop and the air gap',
        paragraphs: [
          'A dishwasher drain hose has to rise above the sink drain before it connects, so dirty sink water cannot flow back into the dishwasher. That is done with a high loop, where the hose is fastened up under the countertop, or with an air gap fitting on the sink deck.',
          'Which one your home needs depends on the plumbing code your city has adopted and the dishwasher maker’s instructions. Installation manuals usually set a minimum height for the loop, often around 18 to 20 inches above the floor depending on the brand. When a dishwasher keeps backing up or smells, a hose that has slipped down from that loop is one of the first things we check.',
        ],
      },
      {
        type: 'prose',
        heading: 'How often to clean the filter',
        paragraphs: [
          'Manufacturers set the schedule by how you load. Whirlpool, for example, suggests cleaning about twice a year for light use with scraped dishes, every three months for 8 to 14 loads a week, and much more often if dishes go in unscraped. Bosch suggests 3 to 6 times a year for light to average use. Check your manual, and clean it sooner after loads heavy with starch, seeds or broken glass.',
        ],
      },
      {
        type: 'stopUsing',
        heading: 'Turn it off and call if',
        items: [
          'Water is coming out from under the cabinet or soaking the floor.',
          'You smell burning or see smoke from the bottom of the door.',
          'The breaker trips when the dishwasher starts or heats.',
          'Water has reached the wiring box behind the toe kick.',
          'The door will not latch but the dishwasher still tries to run.',
        ],
        note: 'Shut off the dishwasher breaker and the hot water valve under the sink before touching anything wet.',
      },
      {
        type: 'process',
        heading: 'How a dishwasher repair visit works',
        steps: [
          { title: 'Run and watch', text: 'The technician runs a short cycle and checks fill level, spray and drain.' },
          { title: 'Filter, arms and hose', text: 'The filter, spray arms, drain hose loop and disposal connection are checked first.' },
          { title: 'Test the parts', text: 'Inlet valve, pump, heating element and latch are tested. You hear what failed and what the repair involves.' },
          { title: 'Repair and run', text: 'After your OK, the repair is made and a cycle confirms it fills, washes and drains.' },
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Dishwasher brands we repair', intro: 'We repair the major dishwasher brands found in Temple kitchens. Tell us the brand and model number when you book so the technician can check parts ahead of time.', styles: ['Built-in', 'Front control', 'Top control', 'Third rack'] },
      { type: 'faq' },
      { type: 'payment' },
    ],
  },
  {
    key: 'oven',
    slug: `oven-stove-repair-${loc}`,
    name: 'Oven & Stove',
    navLabel: 'Oven & Stove Repair',
    icon: 'oven',
    card: 'Oven won’t heat, burner out, igniter clicking.',
    metaTitle: 'Oven & Stove Repair Temple TX | Ranges & Cooktops',
    metaDescription:
      'Oven not heating or a burner won’t light? Electric and gas oven, stove and range repair in Temple, TX. Same-day service available. Call (254) 555-0147.',
    h1: 'Oven, Stove & Range Repair in Temple, TX',
    intro: [
      'Oven will not heat, bakes unevenly or a burner will not light? Appliance Repair Temple repairs ovens, stoves, ranges, wall ovens and cooktops in homes across Temple, TX, electric and gas. Same-day service is available, subject to technician availability, location, and current demand.',
      'The usual causes are a short list: a burned-out bake or broil element, a weak gas igniter, a temperature sensor that has drifted, a failed surface element or infinite switch, or a door lock stuck after a self-clean. The technician tests the part before replacing it, explains what failed and what the repair involves, and starts only after your OK.',
    ],
    symptomsHeading: 'Oven and stove problems we fix',
    symptoms: [
      {
        title: 'Oven won’t heat',
        cause:
          'Electric ovens: a burned bake element (you can often see a break or blister on it), a failed relay or a control board fault. Gas ovens: a weak igniter is the most common cause. It glows, but not hot enough to open the gas valve.',
        fixable: 'Bake elements and igniters are some of the most common oven parts.',
      },
      {
        title: 'Takes forever to preheat',
        cause:
          'On gas ovens, a weakening igniter opens the valve late, so the burner lights slowly or cycles badly. On electric ovens, a failing bake element or a broil element that has quit can stretch preheat times.',
        fixable: 'An igniter or element replacement usually brings preheat back to normal.',
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
          'A spill on the igniter, a burner cap out of place, a wet spark module or a cracked igniter. Clicking that continues after the burner lights usually means moisture or a bad switch.',
        fixable: 'Cleaning, igniter or switch replacement.',
      },
      {
        title: 'Electric burner not heating or stuck on high',
        cause:
          'A bad coil element or a burned receptacle on coil tops. On glass tops, a failed radiant element or an infinite switch that is stuck.',
        fixable: 'Elements, receptacles and switches are standard parts.',
      },
      {
        title: 'Door locked after self-clean',
        cause:
          'The door lock motor or switch has failed, or the control did not detect that the oven cooled down. It often shows up right after a self-clean cycle.',
        fixable: 'Door lock assemblies are replaceable.',
      },
      {
        title: 'Error code or dead display',
        cause:
          'Codes often point to a sensor or door lock fault. A completely dead display can be a tripped breaker, a blown fuse, a power supply problem or a control board failure.',
        fixable: 'The technician tests before replacing a control board.',
      },
    ],
    diagnostic: { heading: 'What the visit covers', paragraphs: [], covers: [] },
    repairOrReplace: {
      heading: 'Repair or replace your range?',
      paragraphs: [
        'Ranges and ovens last a long time, often 13 to 15 years. Elements, igniters, sensors, switches and door locks are straightforward to replace. A cracked glass cooktop or a control board that is no longer made are the main reasons to weigh replacement.',
        'Wall ovens and slide-in ranges deserve extra thought, because replacing them can mean cabinet changes. In most cases, repair is the simpler path for those.',
      ],
      points: [
        'Element, igniter, sensor or switch failure: repair',
        'Cracked glass top on an older range: compare against a new range',
        'Wall ovens and slide-in ranges: repair usually makes more sense',
      ],
    },
    safety:
      'If you smell gas, do not turn on lights or the stove. Leave the house and call your gas company from outside. Do not try to adjust gas valves or regulators yourself.',
    brands: ['GE', 'Whirlpool', 'Frigidaire', 'Samsung', 'LG', 'KitchenAid', 'Maytag', 'Bosch', 'Kenmore', 'Electrolux', 'Amana'],
    faqs: [
      {
        q: 'Why does my gas oven take so long to heat?',
        a: 'A weak igniter is the usual cause. It still glows, but it does not draw enough current to open the gas safety valve quickly, so the oven heats slowly or not at all.',
      },
      {
        q: 'My oven runs 25 degrees off. Can that be fixed?',
        a: 'Often it can be calibrated from the control panel. If the temperature sensor has drifted too far, replacing it brings the oven back in line.',
      },
      {
        q: 'Do you repair glass-top stoves?',
        a: 'Yes, including radiant elements and infinite switches. A cracked glass top can be replaced on many models, though on an older range a new range may make more sense.',
      },
      {
        q: 'Is it safe to use the stovetop while the oven is broken?',
        a: 'Usually, if the problem is limited to the oven. If anything smells like gas or burning wiring, stop using the whole range and call.',
      },
      {
        q: 'Do you repair wall ovens and cooktops?',
        a: 'Yes. Built-in wall ovens and drop-in cooktops are part of the work. Give us the model number when you book so the technician can plan for the access.',
      },
      {
        q: 'How much does oven or stove repair cost?',
        a: 'It depends on the model and the part, so we do not list prices online. Call to discuss your repair needs. Have the brand, the model number and whether it is gas or electric ready.',
      },
      {
        q: 'Where is the model number on my range?',
        a: 'Pull out the storage drawer or open the oven door and look along the frame. On wall ovens and cooktops, check the frame edge or the underside. A photo of the label works.',
      },
    ],
    related: ['microwave', 'dishwasher', 'refrigerator'],
    offeredVerified: true,
    blocks: [
      {
        type: 'stopUsing',
        heading: 'Smell gas or see sparks? Stop here first',
        intro: 'Most oven and stove problems are an inconvenience. These are not.',
        items: [
          'You smell gas: do not turn anything on or off. Leave the house and call your gas utility from outside.',
          'Sparks, arcing or a flash from a burner, element or the back of the range.',
          'A burning plastic or electrical smell that is not food.',
          'A glass cooktop that is cracked through. Stop using that surface.',
          'The breaker trips when the oven or a burner turns on.',
        ],
        note: 'Gas valves, regulators and gas line connections are not do-it-yourself jobs.',
      },
      {
        type: 'compare',
        heading: 'Oven problems and cooktop problems come from different parts',
        intro: 'Tell us which part of the range is acting up. It changes what the technician brings.',
        columns: [
          {
            title: 'Inside the oven',
            items: [
              'Bake and broil elements on electric ovens',
              'Hot surface igniter and gas safety valve on gas ovens',
              'Temperature sensor and control board',
              'Convection fan and its motor',
              'Door lock assembly on self-clean ovens',
            ],
          },
          {
            title: 'On the cooktop',
            items: [
              'Coil elements and their receptacles',
              'Radiant elements under a glass top',
              'Infinite switches behind the knobs',
              'Spark igniters and the spark module on gas burners',
              'Burner caps and heads that sit out of place',
            ],
          },
        ],
      },
      { type: 'symptoms' },
      { type: 'inlineForm' },
      {
        type: 'quickAnswer',
        heading: 'Is your oven running hot or cold? A simple test',
        intro: 'Oven dials are often off by a little. Here is how to see by how much.',
        steps: [
          'Put an oven thermometer in the center of the middle rack.',
          'Set the oven to 350°F and let it run for about 20 minutes after it says it is preheated.',
          'Read the thermometer without opening the door if you can. Ovens swing a few degrees above and below the setting as they cycle, which is normal.',
          'Take two or three readings a few minutes apart and average them.',
          'If the average is more than about 25 degrees off, call us. It may be a calibration setting, a sensor or a heating part.',
        ],
      },
      {
        type: 'prose',
        heading: 'Why a glowing igniter can still be the problem',
        paragraphs: [
          'Most gas ovens use a hot surface igniter wired in line with the gas safety valve. The valve only opens when enough current flows through the igniter. As an igniter ages, it can still glow orange while drawing too little current to open the valve, so the oven never lights or lights late.',
          'That is why we test the igniter with a meter before blaming the valve or the control board. It is usually the less involved repair.',
        ],
      },
      {
        type: 'prose',
        heading: 'Self-clean cycles: what to know before you press the button',
        paragraphs: [
          'A self-clean cycle heats the oven far above normal baking temperatures for a few hours to burn off spills. That heat is hard on parts that are already worn. Door locks, temperature sensors, thermal fuses and control boards often fail during or right after a self-clean, which is why so many oven calls start with "it was fine until I cleaned it."',
          'If your oven is older or already acting up, wipe out loose spills by hand and skip the self-clean for now. Remove the racks unless your manual says they can stay, keep the kitchen ventilated, and do not try to force the door open while it is locked. If the lock does not release after the oven has cooled for a few hours, call us.',
        ],
      },
      {
        type: 'prose',
        heading: 'Check your anti-tip bracket',
        paragraphs: [
          'Freestanding ranges are built to be secured with an anti-tip bracket at the back foot. Without it, the weight of a child standing on an open oven door can tip the range forward, along with whatever is cooking on top. If your range has been moved for cleaning or flooring, the bracket may no longer be engaged. We can check it during a visit.',
        ],
      },
      {
        type: 'process',
        heading: 'How an oven or stove repair visit works',
        steps: [
          { title: 'Check power or gas', text: 'The technician confirms the range has power or gas supply before testing parts.' },
          { title: 'Test the heat source', text: 'Elements, igniters, switches and the temperature sensor are tested with a meter.' },
          { title: 'Explain and approve', text: 'You hear what failed and what the repair involves. Work starts after your OK.' },
          { title: 'Repair and verify', text: 'After the repair, the oven or burner is run to confirm it heats correctly.' },
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Oven and range brands we repair', intro: 'We repair the major range, oven and cooktop brands found in Temple kitchens. Tell us the brand, model number and whether it is gas or electric when you book.', styles: ['Freestanding ranges', 'Slide-in ranges', 'Wall ovens', 'Cooktops', 'Electric and gas'] },
      { type: 'payment' },
      { type: 'faq' },
    ],
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
