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
    metaTitle: 'Emergency Refrigerator Repair Temple TX | Warm or Leaking?',
    metaDescription:
      'Fridge warm, leaking or icing up? Help with Samsung, LG, Whirlpool and GE refrigerators across Temple, TX and Bell County. Call (254) 615-2088 now.',
    h1: 'Refrigerator Repair in Temple, TX',
    intro: [
      'Refrigerator not cooling, leaking or making a racket? Appliance Repair Temple is Temple’s line for refrigerator repair. One call puts you in touch with a technician who works on top-freezer, bottom-freezer, side-by-side and French door refrigerators in homes across Temple, TX. Say what the fridge is doing, how warm it feels and whether the freezer side is still cold.',
      'Most refrigerator failures come down to a short list of parts: a fan motor, a defrost component, a start relay, a water valve, a sensor or a control board. A local technician will usually test those parts in your kitchen to find the one that failed. A good technician shows you the failed part and explains the repair before any work starts. Ask for that, along with a straight answer about whether the fix makes sense for your fridge.',
      'Long Temple summers keep a refrigerator running hard, so a small problem in May can turn into a warm fridge full of groceries by July.',
      'A refrigerator that stops cooling is one of the few appliance problems that cannot wait, because the food inside is on a clock. A warm fridge full of groceries or a leak spreading across the kitchen floor is worth calling about right away; say it is urgent and mention how long the fridge has been warm.',
    ],
    symptomsHeading: 'Refrigerator symptoms and what they usually mean',
    symptoms: [
      {
        title: 'Not cooling at all',
        cause:
          'Light on but nothing running? Look at the start relay, overload, control board or compressor. Compressor running but both sides warm? The condenser coils may be packed with dust or the condenser fan may have stopped.',
        fixable: 'Relays, fans and coil cleaning are routine. Compressor work is a bigger decision to talk through with the technician.',
      },
      {
        title: 'Fridge warm, freezer still cold',
        cause:
          'Cold air is made in the freezer and pushed into the fridge. A frosted evaporator coil, a stopped evaporator fan or a stuck air damper keeps the freezer cold while the fridge warms up.',
        fixable: 'One of the most common refrigerator repairs, and usually fixable without replacing the fridge.',
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
          'A code narrows the search to a system, such as a sensor or fan circuit, but rarely names the exact part. A good technician confirms it with a meter before ordering anything.',
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
        'Fans, defrost parts, relays, valves and gaskets are almost always worth repairing. Compressor or refrigerant work on an older fridge deserves a harder look. Ask the technician for a plain read on the repair; the decision stays yours.',
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
        q: 'Can a refrigerator be repaired on the first visit?',
        a: 'Often, yes. Many common refrigerator parts can be replaced on the first visit. Some model-specific parts have to be ordered, so ask the technician whether the part is on hand. Giving the brand and model number when you call helps the provider plan for the right parts.',
      },
      {
        q: 'Can refrigerator compressors and refrigerant leaks be repaired?',
        a: 'Sealed system repairs are possible on many models, but they are bigger jobs and refrigerant must be handled by an EPA-certified technician. Ask the technician to confirm the diagnosis and talk through whether the repair makes sense for your refrigerator before anything is done.',
      },
      {
        q: 'Is it OK to keep a refrigerator in a Temple garage?',
        a: 'Check your owner’s manual for the room temperature range your model is designed for. Many standard refrigerators are built for indoor temperatures, and a Texas garage in July can run hotter than that. Garage-ready models, shade and space around the coils all help.',
      },
      {
        q: 'How much does refrigerator repair cost?',
        a: 'A start relay and a sealed system repair are very different jobs, so this site does not list prices. Ask the technician about pricing and any warranty before the panels come off, and have the brand, the model number and a short description of the problem ready when you call.',
      },
      {
        q: 'Can I get emergency refrigerator repair in Temple?',
        a: 'Call and say it is urgent. A refrigerator or freezer warming up with food inside, or a fridge leaking across the floor, should not sit until next week. In the meantime, keep the doors closed, move the most perishable food to a cooler with ice and close the water supply valve if there is a leak.',
      },
      {
        q: 'Why is my freezer cold but my refrigerator warm?',
        a: 'Cold air for the fresh-food side usually comes from the freezer. A stopped evaporator fan, a damper stuck closed or frost blocking the evaporator coil cuts off that air. These are common, repairable problems.',
      },
      {
        q: 'Why is my refrigerator leaking water on the floor?',
        a: 'The usual causes are a clogged defrost drain, a cracked or loose water line to the ice maker, a failing water inlet valve or a drain pan that has shifted. Turn off the water supply to the fridge if you can, dry the area and note where the water collects before you call.',
      },
      {
        q: 'Why is my refrigerator making a loud noise?',
        a: 'A squeal or chirp that changes when you open the freezer door often points to the evaporator fan. A rattle or buzz near the bottom back is often the condenser fan or a loose drain pan. Clicking every few minutes with no cooling often means the start relay or compressor.',
      },
      {
        q: 'Is fridge repair available outside Temple?',
        a: 'Yes. The same line takes refrigerator calls from Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody, where plenty of second fridges sit in hot garages and shops.',
      },
      {
        q: 'Where do I find my refrigerator’s model number?',
        a: 'Look for a label inside the fresh-food section, usually on a side wall or the ceiling near the top. Some models put it behind the crisper drawers or on the back. A phone photo of the label is just as good as reading it out.',
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
          'Call with the brand, the model number and what you noticed. Those details help the technician plan for the right parts.',
        ],
        note: 'Throw out perishables such as milk, meat and leftovers that sat above 40°F for more than two hours. When in doubt, throw it out.',
      },
      {
        type: 'emergency',
        heading: 'Emergency refrigerator repair in Temple',
        intro: 'When the fridge stops cooling, the food inside is on a clock. Use the signs below to judge how urgent it is, and the steps beside them to protect your food and your floor until a technician can look at it.',
        signs: [
          { title: 'Warming up with food inside', text: 'The fresh-food side is above 40°F, or the freezer is soft, and the fridge is full.' },
          { title: 'Water spreading on the floor', text: 'A leak from the ice maker line, the water valve or a blocked defrost drain that keeps coming back.' },
          { title: 'Clicking but not running', text: 'The compressor tries to start every few minutes and fails. Unplug it to protect the compressor.' },
          { title: 'Burning smell or tripped breaker', text: 'Heat or a smell from the bottom or back of the unit. Unplug it and do not use it until it is checked.' },
        ],
        steps: [
          'Keep both doors closed to hold the cold in.',
          'Move the most perishable food to a cooler with ice.',
          'For a leak, close the water supply valve to the fridge and dry the floor.',
          'Note the brand, model number and any code on the display, then call.',
        ],
      },
      {
        type: 'prose',
        heading: 'Refrigerator leaking water? Where it comes from and what to do',
        paragraphs: [
          'A refrigerator leak is one of the most urgent appliance problems in a Temple kitchen, because water can soak into the flooring, the subfloor and the base of the cabinets before anyone notices. Most leaks come from one of four places. A clogged defrost drain sends meltwater into the fresh-food section, where it pools under the crisper drawers or freezes on the freezer floor and then spills out the front. A cracked or loose plastic supply line behind the fridge leaks every time the ice maker fills. A failing water inlet valve can drip at the back of the unit even when nothing is running. A drain pan that has shifted or cracked lets defrost water run onto the floor under the fridge.',
          'Check first where the water is. Water inside the fridge points to the defrost drain. Water at the back points to the supply line or the inlet valve. Pull off the bottom kick plate and use a flashlight to look for a full or tilted drain pan. If you recently changed the water filter, make sure it is seated and locked, because a loose filter housing often drips inside the door or from the ceiling of the fresh-food section.',
          'To stop the damage, close the shutoff valve that feeds the refrigerator. It is often under the kitchen sink or behind the fridge, and in some homes it is a small saddle valve on a copper line. Turn the ice maker off, dry the floor and set towels along the base. If water has reached the outlet or the cord, switch off the breaker before you unplug the refrigerator. Keep the doors closed so the food stays cold while the water is off.',
          'Call if the leak comes back after you dry it, if water is showing up inside the cabinet or the wall, or if the supply valve will not close. A leak that keeps returning usually means a frozen drain line, a cracked valve or a split tube that needs a part. Say it is urgent if water is still spreading, and mention the brand, the model number and where the water collects: inside the fresh-food section, at the back or under the front grille.',
        ],
      },
      { type: 'symptoms' },
      { type: 'callCard' },
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
        heading: 'What you can check, and what to leave to a technician',
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
      {
        type: 'prose',
        heading: 'Refrigerator types and features technicians repair',
        paragraphs: [
          'French door refrigerators are the most common style in newer Temple kitchens. They add more to go wrong: a second evaporator fan on some models, a flipper mullion on the left door that seals the gap, an ice maker in the door or the freezer drawer, and an electronic control that reports error codes. A local technician can usually work on all of it.',
          'Side-by-side refrigerators put the freezer on the left and usually feed the ice maker and water dispenser through the freezer door. Top-freezer and bottom-freezer refrigerators are simpler and very common in rentals and starter homes, which makes them practical to repair for years.',
          'Counter-depth and smart refrigerators use the same core parts as standard models, with tighter spaces around the coils and more electronics. Garage refrigerators and second fridges are a regular call in the summer, because heat pushes them past what they were built for.',
          'Whatever the style, a good diagnosis follows the same pattern: check temperatures and airflow, test the likely parts and explain the refrigerator repair before any work starts.',
        ],
      },
      {
        type: 'resultsGrid',
        eyebrow: 'Ice makers and dispensers',
        heading: 'Ice maker and water dispenser problems',
        intro: 'Ice makers are one of the most common reasons for a refrigerator service call. Here is what the common symptoms usually mean.',
        rows: [
          { see: 'No ice at all', means: 'The ice maker is switched off, the freezer is too warm, the fill tube is frozen or the water inlet valve has failed.', fix: 'Check the switch and freezer temperature first; the valve and fill tube are common repairs.' },
          { see: 'Small, hollow or cloudy cubes', means: 'Low water pressure, a clogged water filter or a valve that is not opening fully.', fix: 'Replace an old filter first; if it does not help, the valve gets tested.' },
          { see: 'Water dispenser slow or dead', means: 'An old filter, a frozen line in the door, or a failed valve or dispenser switch.', fix: 'Filter, then thaw and test; switches and valves are routine parts.' },
          { see: 'Ice clumped or jammed in the bin', means: 'The freezer is cycling warm and refreezing, or the auger motor is not turning.', fix: 'Empty the bin; if it returns, the defrost system or auger motor is checked.' },
        ],
      },
      { type: 'brands', heading: 'Refrigerator brands and styles in Temple kitchens', intro: 'From French door Samsungs to older top-freezer Whirlpools in rentals, these are the refrigerator brands most often behind a Temple repair call. Read the brand and model number off the label inside the fresh-food section before you call, so parts can be checked ahead of time.', styles: ['Top-freezer', 'Bottom-freezer', 'Side-by-side', 'French door', 'Counter-depth'] },
      {
        type: 'process',
        heading: 'What to expect on a refrigerator repair visit',
        steps: [
          { title: 'Temperatures and a listen', text: 'A technician will usually check the temperature in both sections and listen to the compressor and fans.' },
          { title: 'Look behind the panels', text: 'When needed, the freezer back panel comes off so the coil, fan and defrost parts can be checked for frost and wear.' },
          { title: 'Test, do not guess', text: 'Ask that suspect parts be tested with a meter before anything is replaced, and that the technician explains what failed and what the repair involves.' },
          { title: 'Repair and confirm', text: 'Once you approve, the part is replaced and cooling is checked. A fridge can take several hours to get fully back to temperature.' },
        ],
      },
      { type: 'repairOrReplace' },
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
    metaTitle: 'Emergency Freezer Repair Temple TX | Food Starting to Thaw?',
    metaDescription:
      'Chest or upright freezer not freezing, frosted over or running nonstop? Help for garage and deep freezers across Temple, TX and Bell County. Call (254) 615-2088.',
    h1: 'Chest & Upright Freezer Repair in Temple, TX',
    intro: [
      'Freezer warming up, frosting over or running and never shutting off? Appliance Repair Temple is the Temple number for chest and upright freezer repair, whether the unit sits in a kitchen, a garage, a shop or a barn. One call puts you in touch with a technician who works on deep freezers and frost-free uprights. Say which kind you have and what the thermometer reads.',
      'A full freezer can hold a lot of meat, game and meals, so it pays to act early. Most freezer failures come down to a start relay, a thermostat, a fan, a defrost part on frost-free uprights or a worn lid or door seal. A good technician tests those first, explains what failed and what the repair involves, and starts only after you say yes. If a small or older chest freezer is not worth fixing, a good technician will tell you so. Ask.',
      'Whether you call it a deep freezer, a garage freezer or a standalone freezer, a good freezer repair starts the same way: check the temperature inside, listen to the compressor and fans, look at the coils and the seal, then test the parts that could be at fault.',
      'A freezer full of food that is warming up is an emergency for your grocery budget, and for anyone storing a season of deer meat or a side of beef. Say it is urgent when you call, and keep the lid or door closed so the food has a better chance of staying frozen.',
    ],
    symptomsHeading: 'Freezer problems and their usual causes',
    symptoms: [
      {
        title: 'Not freezing',
        cause:
          'Dirty condenser coils, a failed condenser fan, a bad start relay or thermostat, or a compressor problem. Frost-free uprights can also fail in the defrost system.',
        fixable: 'Relays, thermostats and fans are routine repairs.',
      },
      {
        title: 'Heavy frost or ice buildup',
        cause:
          'On chest and manual-defrost freezers, frost builds slowly by design but piles up fast with a bad lid seal. On frost-free uprights, heavy frost means the defrost heater, thermostat or control has failed.',
        fixable: 'Gaskets and defrost parts are replaceable.',
      },
      {
        title: 'Runs and never shuts off',
        cause:
          'A hot garage, blocked airflow around the coils, a leaking seal or a low refrigerant charge. A freezer packed tight against the walls can run longer too.',
        fixable: 'Many causes are fixed by cleaning, better airflow or a new seal.',
      },
      {
        title: 'Clicks but the compressor will not run',
        cause:
          'The compressor is trying to start and failing. Often it is the start relay or overload, and sometimes the compressor itself.',
        fixable: 'Relay replacement is quick.',
      },
      {
        title: 'Water under or around the freezer',
        cause:
          'Condensation from a poor lid or door seal, a clogged defrost drain on an upright, or melt water a chest freezer drain plug did not hold.',
        fixable: 'Seal replacement or drain clearing.',
      },
      {
        title: 'Temperature alarm going off',
        cause:
          'Many freezers alarm when the inside temperature climbs or the door is left ajar. The cause is either a cooling problem or a seal problem.',
        fixable: 'A technician can trace why the temperature climbed.',
      },
      {
        title: 'Loud buzzing or rattling',
        cause:
          'A fan blade hitting ice, a failing fan motor, or a compressor that is struggling. Rattles can also come from a freezer that is not level.',
        fixable: 'Fan motors and leveling are simple fixes.',
      },
    ],
    diagnostic: { heading: 'What the visit covers', paragraphs: [], covers: [] },
    repairOrReplace: {
      heading: 'Is your freezer worth repairing?',
      paragraphs: [
        'Freezers often last 10 to 20 years, longer than most appliances. Relays, thermostats, fans, defrost parts and seals are worth fixing at almost any age.',
        'A sealed system failure (compressor or refrigerant leak) is different. On a small or older chest freezer, replacement usually makes more sense. On a large upright or a built-in freezer column, repair often still wins. Ask the technician for a plain read on which side of that line your freezer is on.',
      ],
      points: [
        'Relay, fan, thermostat, defrost part or seal: repair',
        'Compressor failure on a small or older chest freezer: replacement usually makes more sense',
        'Large uprights and built-in columns: repair usually pays off',
      ],
    },
    safety:
      'Unplug before cleaning coils. Do not chip ice with sharp tools, because puncturing a cooling line ends the life of the freezer.',
    brands: ['Frigidaire', 'GE', 'Whirlpool', 'Kenmore', 'Maytag', 'Amana', 'Samsung', 'LG', 'Electrolux'],
    faqs: [
      {
        q: 'How long will food stay frozen if my freezer stops?',
        a: 'About 48 hours for a full freezer and about 24 hours for a half-full one, as long as the door or lid stays closed.',
      },
      {
        q: 'Can I refreeze food that started to thaw?',
        a: 'If the food still has ice crystals or has stayed at 40°F or below, it can generally be refrozen, though quality may drop. Throw out partly thawed ice cream, and anything that sat above 40°F for more than two hours.',
      },
      {
        q: 'Can chest freezers be repaired?',
        a: 'Yes, along with upright freezers. Say which type and brand you have when you call.',
      },
      {
        q: 'Why is my freezer covered in frost?',
        a: 'On a frost-free upright, heavy frost means a defrost part failed. On a chest or manual-defrost freezer, it usually points to a worn seal letting humid air in, or the lid being opened often.',
      },
      {
        q: 'Can a technician come out to a freezer in a garage or shop?',
        a: 'Yes. Garage and shop freezers are common in Temple, and technicians work on them where they stand. Make sure there is room around the unit for the technician to reach the back and the coils.',
      },
      {
        q: 'Should I defrost my chest freezer before the technician comes?',
        a: 'No. Leave it as it is unless the technician asks you to. The frost pattern and the temperature help the technician see what is going on. Just clear a path to the freezer and make room around it.',
      },
      {
        q: 'Where is the model number on my freezer?',
        a: 'On chest freezers, look on the back or the side near the bottom, or under the lid. On uprights, check the inside wall near the top or the door frame. Snap a photo of the label if the print is small or faded.',
      },
      {
        q: 'Can I get emergency freezer repair in Temple?',
        a: 'Say it is urgent when you call. A freezer warming up with food inside, one that clicks and will not run, or one that trips the breaker should not wait for a convenient week. In the meantime, keep the lid or door shut and move the most valuable food to a cooler with ice.',
      },
      {
        q: 'Why is my freezer running but not freezing?',
        a: 'If you can hear it running, the usual causes are dirty condenser coils, a condenser fan that has stopped, an evaporator fan that has failed or frozen in ice, or a defrost failure on a frost-free upright. A compressor that runs but does not cool can also point to a sealed system problem, which a good technician will explain plainly.',
      },
      {
        q: 'My freezer stopped working after a storm or power outage. What should I check?',
        a: 'Check the breaker, and in a garage check the GFCI outlet, since those often trip during storms. If the freezer has power but still does not run, or it clicks and stops, call with the brand and model number. Keep the lid or door closed in the meantime.',
      },
      {
        q: 'Is it worth repairing a deep freezer?',
        a: 'Usually yes, if the problem is a relay, thermostat, fan, defrost part or seal. If the compressor or the sealed system has failed on a small or older chest freezer, replacement often makes more sense. A straight answer from the technician on that point is worth asking for.',
      },
      {
        q: 'Is freezer repair available outside Temple?',
        a: 'Yes. Chest and upright freezer calls also come from Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody, including plenty of garage and barn freezers on rural lots.',
      },
      {
        q: 'How much does freezer repair cost?',
        a: 'A start relay on a chest freezer and a defrost repair on a frost-free upright are very different jobs, so this site does not list prices. Ask the technician about pricing and any warranty before a part is ordered, and have the brand, model number and freezer type ready when you call.',
      },
    ],
    related: ['refrigerator', 'washer', 'dryer'],
    offeredVerified: true,
    blocks: [
      {
        type: 'quickAnswer',
        heading: 'Freezer warming up? Protect the food first',
        steps: [
          'Keep the door or lid shut. A full freezer holds a safe temperature for about 48 hours, a half-full one about 24.',
          'Put an appliance thermometer inside. A working freezer should read 0°F.',
          'If it is climbing fast, move the most valuable items to a cooler with ice or to another freezer.',
          'Check that the plug is in, the breaker is on and nothing is blocking the coils or vents.',
          'Call with the brand, the model number and whether it is a chest or an upright. Those details shape which parts the technician checks first.',
        ],
        note: 'Do not try to speed up a defrost with a knife, ice pick or heat gun. Puncturing a cooling line ruins the freezer.',
      },
      {
        type: 'emergency',
        heading: 'Emergency freezer repair in Temple',
        intro: 'A full freezer holds a safe temperature for about 48 hours with the lid closed, and less once it starts warming. Check the signs below, keep the lid shut and take a thermometer reading so you can tell the technician how fast it is climbing.',
        signs: [
          { title: 'Food softening inside', text: 'The thermometer reads well above 0°F, food is getting soft, or the temperature alarm keeps going off.' },
          { title: 'Clicks, then silence', text: 'You hear a click every few minutes but the compressor never kicks on. Pull the plug so the compressor is not damaged.' },
          { title: 'Breaker trips or hot outlet', text: 'The freezer trips the breaker or GFCI, or the plug or outlet feels hot. Stop using that outlet.' },
          { title: 'Burning smell', text: 'A burning or electrical smell from the compressor area. Unplug the freezer and leave it off until a technician has checked it.' },
        ],
        steps: [
          'Keep the lid or door closed to hold the cold in.',
          'Put a thermometer inside so you know how fast it is warming.',
          'Move the most valuable food to a cooler with ice or another freezer if it is climbing fast.',
          'Write down the brand, model number and whether it is a chest or upright, then call.',
        ],
      },
      {
        type: 'prose',
        heading: 'Freezer leaking water? Where it comes from and how to stop it',
        paragraphs: [
          'A freezer that leaks is usually telling you it is not holding cold, and a puddle under a garage or utility room freezer can hide for days. On an upright frost-free freezer, the most common source is a clogged defrost drain. Meltwater from the defrost cycle backs up, freezes in the drain tube and then overflows inside the cabinet or onto the floor. A cracked or missing drain pan under the unit lets that same water run out. On a chest freezer, water usually comes from a worn lid gasket that lets humid air in, which builds frost that melts each time the compressor cycles off, or from a drain plug at the bottom front that was left loose after the last defrost.',
          'Check first whether the freezer is still cold. Put a thermometer inside. If it reads near 0°F, the leak is probably a drain, pan or seal problem. If it is climbing, the leak may be frost melting because the freezer is failing, which makes the food the bigger worry. Look inside an upright for ice on the floor of the cabinet or a sheet of frost on the back wall. On a chest freezer, run a flashlight around the lid seal and look for gaps or cracks, especially at the corners.',
          'To stop the damage, dry the floor, put towels around the base and slide a shallow pan under a chest freezer drain. Check that the drain plug is pushed in or capped. If water has reached the outlet, the cord or a GFCI outlet in the garage, switch off the breaker before you unplug the freezer. Keep the lid or door shut so the food stays frozen, and move the most valuable items to a cooler if the temperature is rising.',
          'Call if water keeps coming back after you dry it, if the freezer is warming up, or if you see heavy frost on the back wall of an upright, which points to a failed defrost part. Have the brand, the model number, the thermometer reading and the freezer type ready, and say it is urgent if the food is softening.',
        ],
      },
      {
        type: 'partsTable',
        heading: 'Can I refreeze it?',
        intro: 'Food safety guidance from the USDA and university extension services, for food from a freezer that warmed up.',
        columns: ['Food', 'Safe to refreeze when', 'Throw it out when'],
        rows: [
          { part: 'Meat and poultry', job: 'It still has ice crystals or has stayed at 40°F or below', signs: 'It sat above 40°F for more than two hours' },
          { part: 'Vegetables and fruit', job: 'Ice crystals are still present', signs: 'It warmed above 40°F, or shows mold or a sour smell' },
          { part: 'Shellfish and cooked dishes', job: 'Ice crystals are still present', signs: 'It warmed above 40°F' },
          { part: 'Ice cream and frozen desserts', job: 'Still frozen solid', signs: 'It partly thawed, even if it is cold' },
        ],
        note: 'Refreezing can lower the quality of some foods, but it stays safe under these conditions. Appearance and smell are not reliable tests. If you are unsure about an item, discard it.',
      },
      {
        type: 'compare',
        heading: 'Chest and upright freezers fail differently',
        intro: 'The type of freezer you have changes what usually goes wrong.',
        columns: [
          {
            title: 'Chest freezers',
            items: [
              'Usually manual defrost, so frost builds up over time',
              'Lid gaskets that crack or no longer seal at the corners',
              'Start relays and overloads on the compressor',
              'Condenser coils inside the walls, so airflow around the cabinet matters',
              'Drain plugs that leak melt water during defrosting',
            ],
          },
          {
            title: 'Upright freezers',
            items: [
              'Often frost-free, with a defrost heater, thermostat and control',
              'Evaporator fan motors that stop or freeze up',
              'Door gaskets and door alignment',
              'Defrost drains that clog and leak',
              'Thermostats and temperature sensors that drift',
            ],
          },
        ],
      },
      { type: 'symptoms' },
      { type: 'callCard' },
      {
        type: 'prose',
        heading: 'Garage freezers in a Texas summer',
        paragraphs: [
          'Plenty of Temple households keep a second freezer in the garage. Every freezer is designed for a certain room temperature range, listed in the owner’s manual. Garage-ready models are built for wider swings. Some manufacturers rate them for rooms from 0°F to 110°F, while many standard freezers are made for indoor temperatures. A closed Central Texas garage in July can reach the top of that range.',
          'If yours lives in the garage, give it a few inches of space on every side, keep it out of direct afternoon sun, and vacuum the coils or vents a couple of times a year. A freezer that runs nonstop every summer is wearing out its compressor faster.',
          'Before a repair visit, move anything stacked on top of or against the freezer, and make sure the technician can reach the outlet and the back of the unit. In a shop or barn, clear a dry spot to work.',
        ],
      },
      {
        type: 'stopUsing',
        heading: 'Unplug it and call if',
        items: [
          'You smell burning or see scorch marks near the compressor area.',
          'The freezer trips the breaker or the outlet feels hot.',
          'Water is pooling near the plug or the outlet.',
          'The compressor clicks every few minutes and never runs.',
          'You see oily residue on the tubing, which can point to a refrigerant leak.',
        ],
        note: 'Only an EPA 608 certified technician should open the sealed system. Never cut or puncture freezer tubing.',
      },
      {
        type: 'process',
        heading: 'What to expect on a freezer repair visit',
        steps: [
          { title: 'Temperature and sound', text: 'A technician will usually check the inside temperature and listen to the compressor and fans.' },
          { title: 'Relay, fan and seal', text: 'The start relay, fans, thermostat and gasket are usually checked first, since they fail most.' },
          { title: 'Explain and approve', text: 'Ask what failed and whether the repair makes sense for your freezer. Work should start only after you say yes.' },
          { title: 'Repair and confirm', text: 'After the repair, ask the technician to confirm it is cooling. A freezer can take several hours to get back down to 0°F.' },
        ],
      },
      {
        type: 'resultsGrid',
        eyebrow: 'Freezer not freezing',
        heading: 'Freezer not freezing? What the symptom points to',
        intro: 'What you see and hear narrows the problem down. Note which of these matches your freezer before you call.',
        rows: [
          { see: 'Running, but warm inside', means: 'Dirty condenser coils, a stopped condenser fan or a failed evaporator fan.', fix: 'Clean around the coils and vents; fans are a routine freezer repair.' },
          { see: 'Clicks every few minutes, never runs', means: 'The start relay or overload has failed, or less often the compressor.', fix: 'The relay is tested first; it is a quick part to replace.' },
          { see: 'Upright: back wall caked in frost, food soft', means: 'The defrost system has failed, so ice is blocking the airflow.', fix: 'Defrost heaters, thermostats and controls are replaceable.' },
          { see: 'Frost only around the lid or door edge', means: 'The gasket is worn or the lid is not closing square, letting humid air in.', fix: 'Gasket replacement fixes it and cuts the run time.' },
        ],
      },
      {
        type: 'prose',
        heading: 'Power outages, storms and your freezer',
        paragraphs: [
          'Central Texas storms knock out power often enough that most freezer owners have been through it. Keep the lid or door closed while the power is out. A full freezer holds its temperature far longer than a half-empty one, so keeping it full, even with jugs of water, helps.',
          'When the power comes back, check that the freezer actually restarted. Garage outlets are usually GFCI outlets, and they often trip during storms without anyone noticing. A freezer on a tripped outlet can sit warm for days before the smell gives it away.',
          'If the freezer has power but clicks and stops, hums without cooling, or does not get back to 0°F within a day, it needs a look. A power surge can damage a start relay or a control board, both of which are common freezer repairs.',
        ],
      },
      {
        type: 'prose',
        heading: 'Chest, upright and garage freezer types',
        paragraphs: [
          'Chest freezers, often called deep freezers, are the most common second freezer in Temple homes. They are simple, efficient and usually manual defrost, which makes them practical to repair for many years.',
          'Upright freezers take less floor space and are easier to organize. Many are frost-free, with a defrost heater, a defrost thermostat and a fan, which gives them a few more parts to fail. Manual defrost uprights work more like a chest freezer standing on end.',
          'Garage-ready freezers are built to handle wider temperature swings. If you are not sure whether yours is rated for a garage, ask the technician to check the model during the visit.',
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Freezer brands in Temple homes and garages', intro: 'Frigidaire and GE chest freezers fill a lot of Temple garages, with Whirlpool, Kenmore and others close behind. These are the brands technicians see most on freezer calls. Give the brand, model number and type when you call.', styles: ['Chest freezers', 'Upright freezers', 'Frost-free', 'Manual defrost'] },
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
    metaTitle: 'Emergency Washer Repair Temple TX | Leaking or Won’t Drain?',
    metaDescription:
      'Washer stuck full of water, leaking or not spinning? Top-load, front-load and stacked washers in Temple, TX, including Whirlpool, LG and Samsung. Call (254) 615-2088.',
    h1: 'Top-Load & Front-Load Washer Repair in Temple, TX',
    intro: [
      'Washer stuck full of water, refusing to spin or leaking across the laundry room floor? Appliance Repair Temple is Temple’s line for washer repair. One call puts you in touch with a technician who works on top-load and front-load washing machines, stacked laundry centers and high-efficiency models. Say where in the cycle it stops and whether water is still on the floor.',
      'Most washer breakdowns trace back to a handful of parts: the lid or door lock, the drain pump, a water inlet valve, the drive belt or coupler, or the suspension. Where the cycle stops tells you a lot about which one failed, so that is where a technician will usually start. A good technician explains what failed and what the repair involves before any work begins. Ask for that.',
      'Washing machine repair covers more than the machine itself. A slow house drain, a worn fill hose or an outlet on a tripped circuit can look like a washer problem, so a good technician checks the hookups too and tells you if the fault is outside the washer.',
      'Some washer problems cannot wait until the weekend. A washer leaking across the floor, a drum stuck full of water or a machine that trips the breaker is a reason to look for emergency washer repair, and to say it is urgent the moment the call connects.',
    ],
    symptomsHeading: 'Common washer problems in Temple homes',
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
        fixable: 'A good technician tests each part in order and replaces only what failed.',
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
        fixable: 'Usually a cleaning issue. Ask the technician to show you what to clean and how often.',
      },
    ],
    diagnostic: { heading: 'What the visit covers', paragraphs: [], covers: [] },
    repairOrReplace: {
      heading: 'Repair or replace your washer?',
      paragraphs: [
        'Most washers last 10 to 13 years. Locks, pumps, valves, belts and suspension parts are almost always worth fixing, even on an older machine. A failed transmission or worn tub bearings on a 10-year-old top-loader is a closer call, because those jobs take far more labor.',
        'High-efficiency front-loaders are usually worth repairing unless the bearings or the drum have failed. Ask the technician to tell you plainly which side of that line your washer is on.',
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
        a: 'Codes point to a system, such as draining, the door lock or water level, and the exact meaning varies by brand and model. Write the code down and mention it when you call. It helps the technician bring the likely parts.',
      },
      {
        q: 'Can stacked washer and dryer units be repaired?',
        a: 'Yes. Stacked laundry centers take more access work, so say it is a stacked unit up front and the technician can plan for the extra time.',
      },
      {
        q: 'How much does washer repair cost?',
        a: 'Clearing a drain pump and replacing tub bearings are worlds apart in labor, so this site does not list prices. Get the price and any warranty terms before the machine is pulled out, and have the brand, model number and a short description of what the washer is doing ready.',
      },
      {
        q: 'Can I get emergency washer repair in Temple?',
        a: 'Treat it as urgent, and say so when you call, if the washer is leaking across the floor, stuck full of water or tripping the breaker. In the meantime, close both water valves, unplug the washer or switch off its breaker, and keep a front-load door shut while the drum is full.',
      },
      {
        q: 'Why is my washer leaking water on the floor?',
        a: 'On a front-loader, a torn door boot seal is the most common cause. Other sources are a loose or cracked fill hose, a leaking drain pump, a drain hose that has slipped out of the standpipe, or a worn tub seal. Shut off both water valves, dry the floor and note where the puddle forms before you call.',
      },
      {
        q: 'The door is locked with wet clothes inside. How do I get them out?',
        a: 'Most front-loaders keep the door locked while there is water in the drum. Unplug the washer for a few minutes, then drain it through the pump filter panel at the bottom front. Many models release the lock once the drum is empty. If it still will not open, do not force it, because a broken latch or strike adds to the repair.',
      },
      {
        q: 'Why does my washer stop with water in the drum?',
        a: 'The washer cannot drain. A clogged pump filter, a kinked drain hose, a failed drain pump or a clogged house drain are the usual reasons. On some models a faulty lid lock or water level sensor stops the cycle at the same point.',
      },
      {
        q: 'Is washer repair available outside Temple?',
        a: 'Yes. Washer calls come in from Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody as well, from apartments with stacked units to rural homes on well water.',
      },
      {
        q: 'Where is the model number on my washer?',
        a: 'On top-loaders, look under the lid or on the back of the control panel. On front-loaders, check the door frame or the inside of the door. A clear photo of the label is enough.',
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
      { type: 'callCard' },
      {
        type: 'compare',
        heading: 'Top-load and front-load washers fail differently',
        intro: 'Both wash clothes. They wear out in different places, which is why the brand and style matter when you call.',
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
          'Plug it back in and run a drain and spin. If it hums and nothing moves, stop and call. Running a jammed pump can burn out its motor.',
        ],
        note: 'Never open a front-load door while the drum is full. The water will pour straight onto the floor.',
      },
      {
        type: 'emergency',
        heading: 'Emergency washer repair in Temple',
        intro: 'A washer that is leaking or stuck full of water can damage floors, baseboards and cabinets within hours. Take the steps here to limit the water damage before you pick up the phone.',
        signs: [
          { title: 'Water spreading across the floor', text: 'A burst or cracked fill hose, a torn door boot or a pump leak that keeps coming back every cycle.' },
          { title: 'Drum stuck full of water', text: 'The washer stops mid-cycle and will not drain, often with a full load of wet clothes locked inside.' },
          { title: 'Breaker trips or burning smell', text: 'The washer trips the breaker on start or spin, or there is heat or a smell from the bottom. Stop using it.' },
          { title: 'Violent banging during spin', text: 'The machine moves or slams even with a balanced load. Worn suspension parts can damage the tub.' },
        ],
        steps: [
          'Turn the washer off and unplug it, or switch off the breaker if water is near the outlet.',
          'Close both water valves behind the washer.',
          'Lay towels down and keep the front-load door shut while the drum is full.',
          'Write down the brand, the model number and the error code if one is showing, then call.',
        ],
      },
      {
        type: 'prose',
        heading: 'Washer leaking on the floor? Find the source and stop the damage',
        paragraphs: [
          'A leaking washing machine can put gallons of water on the floor in a single cycle, and in many Temple homes the laundry room sits next to carpet, a hallway or a garage wall that soaks it up. Most washer leaks come from a few places. Fill hoses crack or bulge with age and can split under pressure. On front-loaders, a torn or folded door boot seal lets water run out the front during the wash. The drain pump and its filter cap can drip under the machine, and a drain hose that has slipped out of the standpipe sends water behind the washer every time it drains. Less often, a worn tub seal leaks from underneath.',
          'Check first when the leak happens. Water during the fill points to the hoses or the inlet valve. Water during the drain or spin points to the pump, the drain hose or the standpipe. Water at the front of a front-loader points to the door boot or to too many suds from non-HE detergent. Use a flashlight to look at both hose connections behind the machine, and make sure the drain hose is secured in the standpipe.',
          'To stop the damage, turn the washer off and close both water valves behind it. If water is near the outlet or the cord, switch off the breaker before you touch anything. Leave a front-load door closed while the drum is full, mop up standing water and pull wet items away from walls and baseboards. A wet-dry vacuum makes quick work of a large puddle.',
          'Call if the leak returns on the next cycle, if a hose or valve is damaged, or if the water is coming from under the tub. Do not keep running loads on a leaking washer, because water that reaches the motor or the controls can turn a hose or seal repair into a bigger one. Say it is urgent if water is still spreading, and have the brand and model number ready.',
        ],
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
        heading: 'What to expect on a washer repair visit',
        steps: [
          { title: 'Run a test cycle', text: 'A technician will usually run the washer to see exactly where it stops: fill, wash, drain or spin.' },
          { title: 'Read the codes', text: 'On electronic models, stored error codes are usually pulled to narrow the search.' },
          { title: 'Test the parts', text: 'Ask that the lock, pump, valve or drive parts be tested before anything is replaced, and that the technician explains what failed and what the fix involves.' },
          { title: 'Repair and spin', text: 'Once you approve, the repair is made. Ask for a full drain and spin to confirm it works.' },
        ],
      },
      { type: 'repairOrReplace' },
      {
        type: 'prose',
        heading: 'Washing machine types and what wears out on each',
        paragraphs: [
          'Top-load washers with an agitator are still common in Temple homes and rentals. They are simple to work on, and most of their failures come from the lid lock, the coupler, the belt or the shift actuator. High-efficiency top-loaders swap the agitator for a low-profile impeller and add electronic controls, sensors and error codes.',
          'Front-load washers use less water and spin faster, which puts more load on the door lock, the door boot seal, the shock absorbers and the tub bearings. They also hold water in the pump filter and the seal, which is behind most odor complaints.',
          'Stacked laundry centers and stacked front-load pairs need more access work, because the dryer sits on top or the washer has to come out of a closet. Say so when you call, because pulling a stacked pair out of a laundry closet takes planning.',
          'Whatever the type, a good washer repair starts the same way: run a cycle, read any stored codes, test the likely parts and explain the fix before any work starts.',
        ],
      },
      {
        type: 'resultsGrid',
        eyebrow: 'Washer error codes',
        heading: 'What your washer’s error code is pointing to',
        intro: 'The exact codes differ by brand and model, but most washer error codes fall into a few groups. Write the code down before you reset anything.',
        rows: [
          { see: 'A door or lid lock code', means: 'The washer cannot confirm the door or lid is locked. A worn lock, a broken strike or a wiring fault.', fix: 'Check that nothing is caught in the door; locks and strikes are routine parts.' },
          { see: 'A drain code', means: 'Water did not leave the drum in time. A clogged pump filter, a kinked hose or a failed drain pump.', fix: 'Clean the pump filter first; if it still will not drain, the pump gets tested.' },
          { see: 'A fill or water supply code', means: 'Water did not come in fast enough. Closed valves, clogged inlet screens or a failed inlet valve.', fix: 'Open both valves fully; screens and inlet valves are common repairs.' },
          { see: 'An unbalance or vibration code', means: 'The load is uneven, the washer is not level, or the suspension is worn.', fix: 'Rebalance and level; if it repeats, shocks or suspension rods are checked.' },
        ],
      },
      {
        type: 'prose',
        heading: 'When it is not the washer',
        paragraphs: [
          'A washer that overflows the standpipe or gurgles while it drains may be pushing water into a slow house drain. If the laundry sink or a nearby floor drain backs up at the same time, the clog is in the plumbing, and a plumber is the right call.',
          'Water that is barely warm usually means the hot water valve is not fully open, the hot and cold hoses are swapped, or the water heater is the problem. Modern washers also mix in cold water to save energy, so lukewarm is normal on many cycles.',
          'A washer that is dead with no lights may be on a tripped breaker or a tripped outlet in the laundry room or garage. Check those first. If the power is good and the washer still does nothing, that is a washer repair.',
        ],
      },
      { type: 'brands', heading: 'Washer brands in Temple laundry rooms', intro: 'Whirlpool and Maytag top-loaders, LG and Samsung front-loaders and the occasional Speed Queen make up most washer calls in Temple. Give the brand and model number when you call so lock, pump and valve parts can be lined up.', styles: ['Top-load', 'Front-load', 'High-efficiency (HE)', 'Stacked laundry centers'] },
      { type: 'faq' },
    ],
  },
  {
    key: 'dryer',
    slug: `dryer-repair-${loc}`,
    name: 'Dryer',
    navLabel: 'Dryer Repair',
    icon: 'dryer',
    card: 'No heat, long dry times, squealing or won’t turn.',
    metaTitle: 'Dryer Repair Temple TX | No Heat, Squealing or Slow Drying',
    metaDescription:
      'Dryer running cold, squealing or taking three cycles to dry? Gas and electric dryer repair in Temple, TX. Find out if it is the vent or a heat part. Call (254) 615-2088.',
    h1: 'Electric & Gas Dryer Repair in Temple, TX',
    intro: [
      'Dryer running but the clothes come out damp? Taking two or three cycles to dry a load? Appliance Repair Temple is Temple’s line for dryer repair, electric or gas. One call puts you in touch with a technician who works on standalone dryers and stacked laundry centers. Say whether yours runs on gas or a 240-volt outlet.',
      'Most dryer calls come down to heat or airflow. On the heat side it is a heating element, a thermal fuse, a thermostat or a gas igniter. On the airflow side it is lint: in the screen housing, the transition hose or the vent run to the outside. A clogged vent also makes the dryer overheat and burn out heating parts, so a good technician checks both and explains the repair before starting.',
      'Whether your dryer is not heating, will not tumble, shuts off early or squeals through every load, a good dryer repair starts with a test run, a look at the airflow and a meter on the heat circuit. Ask for that, so you pay for the part that failed, not a guess.',
      'A dryer that smells like burning, runs far too hot or trips the breaker should not be used again until it is checked. Heat and lint together are a fire risk, so treat it as an emergency dryer repair and say so when you call.',
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
        a: 'A thermal fuse blows when the dryer runs too hot, and the most common reason is a restricted vent. Replacing the fuse without fixing the airflow means it will blow again, so ask the technician to check the vent on any no-heat call.',
      },
      {
        q: 'Can gas dryers be repaired in Temple?',
        a: 'Yes. Gas dryer repair is a regular call in Temple, and a technician will usually check the igniter, flame sensor and gas valve coils. If you ever smell gas, leave the house and call your gas utility from outside before anything else.',
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
        q: 'Can a dryer be fixed on the first visit?',
        a: 'Often, yes. Belts, fuses, rollers and thermostats are common enough to replace on the first visit, while some model-specific parts have to be ordered. Giving the brand and model number when you call helps.',
      },
      {
        q: 'Can I get emergency dryer repair in Temple?',
        a: 'Say it is urgent at the start of the call. A dryer that smells like burning, runs far too hot, trips the breaker or has a gas smell nearby should not run another load. Stop using the dryer and unplug it or switch off its breaker. If you smell gas, leave the house and call your gas utility from outside first.',
      },
      {
        q: 'Why is my dryer not heating?',
        a: 'On an electric dryer, the usual causes are a burned-out heating element, a blown thermal fuse, a failed thermostat or one half of the double breaker tripped. On a gas dryer, look at the igniter, the flame sensor, the gas valve coils and the gas supply valve. A restricted vent is often what caused the part to fail in the first place.',
      },
      {
        q: 'My dryer smells like burning. What should I do?',
        a: 'Stop the dryer, unplug it or switch off its breaker, and let it cool. Do not run another load. A burning smell usually means lint has built up near the heating element or burner, or a part is overheating. Have a technician check it before the next load.',
      },
      {
        q: 'Why does my dryer take so long to dry clothes?',
        a: 'Most of the time the air cannot get out: a packed lint screen housing, a crushed hose behind the dryer or a vent full of lint. Overloading the drum and wet loads from a washer that is not spinning fully also add time. If the airflow is strong outside and the clothes still come out damp, a heating part is the likely cause.',
      },
      {
        q: 'Is dryer repair available outside Temple?',
        a: 'Yes. Dryer owners in Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody can call the same number, gas or electric.',
      },
      {
        q: 'How much does dryer repair cost?',
        a: 'A blown thermal fuse and a new heating element plus a cleared vent are very different jobs, so this site does not list prices. Ask what the repair will cost, and about any warranty, before work starts, and have the brand, the model number and the fuel type ready.',
      },
    ],
    related: ['washer', 'oven', 'dishwasher'],
    offeredVerified: true,
    blocks: [
      {
        type: 'compare',
        heading: 'No heat? Electric and gas dryers fail differently',
        intro: 'Say which one you have when you call. The heating parts are completely different.',
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
          'Call and describe what you found at the vent hood, along with the brand, the model number and whether it is gas or electric.',
        ],
        note: 'Do not run a dryer that smells hot or burning while you test. Check the airflow with a load of wet towels only if it has been running normally.',
      },
      {
        type: 'emergency',
        heading: 'Emergency dryer repair in Temple',
        intro: 'Heat and lint together are a fire risk, so a dryer that smells like burning or runs far too hot should not wait. Stop using the dryer, run through the signs below and leave it off until a technician has looked at it.',
        signs: [
          { title: 'Burning smell or smoke', text: 'A hot, singed smell during a cycle, or smoke from the drum, the vent or the cabinet. If you see flames, leave and call 911.' },
          { title: 'Too hot to touch', text: 'The top or sides of the dryer get very hot, or clothes come out scorched.' },
          { title: 'Breaker trips', text: 'The breaker trips when the dryer starts or when the heat comes on.' },
          { title: 'Gas smell near a gas dryer', text: 'Leave the house first and call your gas utility from outside. Call for dryer repair once it is safe.' },
        ],
        steps: [
          'Stop the dryer and unplug it, or switch off its breaker.',
          'Take the clothes out once they have cooled and leave the door open.',
          'Clean the lint screen, but do not run another load to test it.',
          'Write down the brand, model number and whether it is gas or electric, then call.',
        ],
      },
      { type: 'symptoms' },
      { type: 'callCard' },
      {
        type: 'partsTable',
        heading: 'The dryer parts technicians test most',
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
        heading: 'What to expect on a dryer repair visit',
        steps: [
          { title: 'Airflow first', text: 'A good technician checks airflow at the vent hood and the hose behind the dryer before blaming a part.' },
          { title: 'Test the heat circuit', text: 'Element, fuse and thermostats on electric models, or igniter, sensor and valve coils on gas models, are usually tested with a meter.' },
          { title: 'Explain and approve', text: 'Ask what failed, whether the vent played a part, and what the repair involves. Nothing should be replaced until you agree.' },
          { title: 'Repair and run', text: 'After a part is replaced, ask for a test run to confirm the dryer heats and the drum turns quietly.' },
        ],
      },
      {
        type: 'resultsGrid',
        eyebrow: 'Dryer not heating',
        heading: 'Dryer not heating? What the symptom points to',
        intro: 'How the heat fails tells the technician where to look first. Note which of these matches your dryer before you call.',
        rows: [
          { see: 'Drum turns, air stays cold', means: 'Electric: an open heating element, a blown thermal fuse or half of the breaker tripped. Gas: no ignition at all.', fix: 'Reset the breaker fully; elements, fuses and igniters are standard parts.' },
          { see: 'Heats for a few minutes, then goes cold', means: 'Gas: the valve coils are failing. Electric: a cycling thermostat or a vent so restricted the safety limit keeps opening.', fix: 'Check the airflow at the vent hood; coils and thermostats are routine repairs.' },
          { see: 'Igniter glows but the burner never lights', means: 'Failed gas valve coils, or the gas supply valve is partly closed after the dryer was moved.', fix: 'Check the gas valve handle is in line with the pipe; coils are a common repair.' },
          { see: 'Warm but takes two or three cycles', means: 'Weak airflow from lint, a crushed hose or a long vent run. Sometimes a partly failed element.', fix: 'Clear the airflow first; if drying is still slow, the heat circuit is tested.' },
        ],
      },
      {
        type: 'prose',
        heading: 'Electric, gas and stacked dryer types',
        paragraphs: [
          'Electric dryers run on a 240-volt circuit and heat with an element. Gas dryers use a burner, an igniter and a gas valve, with a standard outlet for the motor and controls. The motor, belt, rollers and drum are much the same in both, so a drum that will not turn is the same dryer repair either way.',
          'Newer dryers add sensor dry, steam and wrinkle care cycles, and electronic controls that store error codes. Sensor dry problems are often fixed by cleaning the moisture bars inside the drum, and steam features need a working water supply and fill valve.',
          'On a stacked laundry center or a stacked front-load pair, the dryer is the top half, so reaching the belt, rollers and heat parts often means lifting it off the washer or pulling both out of a closet. Say it is stacked when you call.',
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Dryer brands, gas and electric', intro: 'Most Temple laundry rooms pair the dryer with a washer of the same brand, so the list looks a lot like the washer list: Whirlpool, Maytag, Samsung, LG, GE and more. Give the brand, model number and fuel type when you call.', styles: ['Electric', 'Gas', 'Stacked laundry centers'] },
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
    metaTitle: 'Dishwasher Repair Temple TX | Not Draining or Cleaning?',
    metaDescription:
      'Dishwasher not draining, leaving gritty dishes or leaking under the door? Bosch, Whirlpool, GE and KitchenAid dishwasher repair in Temple, TX. Call (254) 615-2088.',
    h1: 'Built-In Dishwasher Repair in Temple, TX',
    intro: [
      'Standing water in the bottom, gritty dishes or a puddle under the door? Appliance Repair Temple is Temple’s line for dishwasher repair. One call puts you in touch with a technician who works on built-in dishwashers, from basic models to third-rack machines with front or hidden top controls. Mention what the last load looked like.',
      'Most dishwasher calls come back to a clogged filter, a drain pump, a water inlet valve, a door seal or the heating element. Hard water is common in Central Texas, and mineral scale makes several of these worse over time, so ask the technician to check for it. A good technician explains what failed and what the repair involves before anything is replaced.',
      'A dishwasher not draining, a dishwasher not cleaning, a door that will not latch or a control panel that flashes an error code should all start the same way: a short test cycle, a look at the filter, spray arms and drain hose, then a meter on the parts that could be at fault.',
      'Because a dishwasher sits inside your cabinets, a leak can soak the subfloor and the cabinet base before you see much water. A dishwasher leaking onto the floor, or one that trips the breaker or smells like burning, is a reason to look for emergency dishwasher repair and to say it is urgent when you call.',
    ],
    symptomsHeading: 'Common dishwasher problems in Temple homes',
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
        fixable: 'A good technician tests each part before replacing anything.',
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
        q: 'My dishwasher only leaks sometimes. Can the cause be found?',
        a: 'Yes. Intermittent leaks are often a door gasket, suds from the wrong detergent, or a pump seal that leaks only during part of the cycle. A technician will usually run it and watch where the water appears.',
      },
      {
        q: 'Do I need to empty the dishwasher before the technician arrives?',
        a: 'Yes, and clear out the cabinet under the sink too. It lets the technician reach the filter, spray arms and drain connections right away.',
      },
      {
        q: 'Can I use drain cleaner in my dishwasher?',
        a: 'No. Chemical drain cleaners can damage the pump seals and plastic parts. If the dishwasher will not drain, clean the filter and check the hose and disposal, then call.',
      },
      {
        q: 'Can I get emergency dishwasher repair in Temple?',
        a: 'Call and say it is urgent if the dishwasher is leaking onto the floor, tripping the breaker or smelling like burning. In the meantime, switch off the dishwasher breaker, close the hot water valve under the sink and dry the floor.',
      },
      {
        q: 'Why is my dishwasher leaking onto the floor?',
        a: 'The usual causes are a worn door gasket, regular dish soap making too many suds, a loose inlet connection, or a leaking pump seal under the tub. Turn off the breaker and the hot water valve under the sink, dry the floor and call. A leak that keeps going can damage the subfloor and cabinets.',
      },
      {
        q: 'Why is my dishwasher not draining?',
        a: 'Most often the filter under the lower spray arm is clogged. After that, look at the drain hose under the sink, a garbage disposal that is clogged or still has its knockout plug, a blocked air gap and the drain pump. A hum at the end of the cycle with no water moving usually means the pump is jammed or has failed.',
      },
      {
        q: 'Why won’t my dishwasher start?',
        a: 'Check the breaker and make sure the door is fully latched. Many models also have a control lock or delay start that looks like a dead machine. If those are fine, a door latch switch, a thermal fuse, a float switch or the control board is the likely cause.',
      },
      {
        q: 'Is dishwasher repair available outside Temple?',
        a: 'Yes. Homeowners in Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody can call the same line about a dishwasher, and hard water scale is just as common a culprit there.',
      },
      {
        q: 'How much does dishwasher repair cost?',
        a: 'A clogged filter and a failed control board sit at opposite ends of the bill, so this site does not list prices. Agree on the price and any warranty before the dishwasher comes out of the cabinet, and have the brand and model number ready when you call.',
      },
      {
        q: 'Where is the model number on my dishwasher?',
        a: 'Open the door and look along the top or side edge of the door, or on the tub frame just inside. A photo of that sticker saves reading it out over the phone.',
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
      { type: 'callCard' },
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
        type: 'emergency',
        heading: 'Emergency dishwasher repair in Temple',
        intro: 'A dishwasher leak runs under the cabinets, where it can soak the subfloor long before the puddle looks serious. Shut off the power and water first, then work through the signs below.',
        signs: [
          { title: 'Water on the floor', text: 'Water coming from under the door, the toe kick or the sink cabinet during or after a cycle.' },
          { title: 'Water near the wiring', text: 'Water has reached the wiring box behind the toe kick or the outlet under the sink.' },
          { title: 'Hot smell or a tripped breaker', text: 'A hot or electrical smell from the bottom of the door, or the breaker trips when the dishwasher heats.' },
          { title: 'Will not stop filling', text: 'Water keeps coming in after the dishwasher is switched off, which points to a stuck inlet valve.' },
        ],
        steps: [
          'Switch off the dishwasher breaker.',
          'Close the hot water valve under the sink.',
          'Dry the floor and keep the door shut if the tub is still full.',
          'Find the model label on the door edge, note any code, then call.',
        ],
      },
      {
        type: 'prose',
        heading: 'The drain hose, the high loop and the air gap',
        paragraphs: [
          'A dishwasher drain hose has to rise above the sink drain before it connects, so dirty sink water cannot flow back into the dishwasher. That is done with a high loop, where the hose is fastened up under the countertop, or with an air gap fitting on the sink deck.',
          'Which one your home needs depends on the plumbing code your city has adopted and the dishwasher maker’s instructions. Installation manuals usually set a minimum height for the loop, often around 18 to 20 inches above the floor depending on the brand. When a dishwasher keeps backing up or smells, a hose that has slipped down from that loop is one of the first things to check.',
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
        heading: 'What to expect on a dishwasher repair visit',
        steps: [
          { title: 'Run and watch', text: 'A technician will usually run a short cycle and check fill level, spray and drain.' },
          { title: 'Filter, arms and hose', text: 'The filter, spray arms, drain hose loop and disposal connection are usually checked first.' },
          { title: 'Test the parts', text: 'Ask that the inlet valve, pump, heating element and latch be tested, and that the technician explains what failed and what the repair involves.' },
          { title: 'Repair and run', text: 'With your approval, the part goes in. Ask for a cycle to confirm it fills, washes and drains.' },
        ],
      },
      {
        type: 'resultsGrid',
        eyebrow: 'Dishwasher error codes',
        heading: 'What your dishwasher’s error code is pointing to',
        intro: 'The exact codes differ by brand and model, but most dishwasher error codes fall into a few groups. Note the code, or take a photo of the display, before you reset anything.',
        rows: [
          { see: 'A drain code', means: 'Water did not leave the tub in time. A clogged filter, a kinked hose, a clogged disposal or a failed drain pump.', fix: 'Clean the filter and check the hose and disposal; the pump gets tested next.' },
          { see: 'A fill code or no-water code', means: 'Not enough water came in. A partly closed valve, a kinked supply line or a failed inlet valve.', fix: 'Open the hot water valve fully; inlet valves are a routine repair.' },
          { see: 'A leak or float code', means: 'Water has collected in the base pan and tripped the float switch, so the dishwasher stops filling.', fix: 'Turn it off and call for repair; the source of the water has to be found, not just the code cleared.' },
          { see: 'A heating or temperature code', means: 'The water is not heating, or the temperature sensor is reading wrong.', fix: 'The heating element and sensor are tested; both are replaceable parts.' },
        ],
      },
      {
        type: 'prose',
        heading: 'Dishwasher types and features in Temple kitchens',
        paragraphs: [
          'Most Temple kitchens have a standard built-in dishwasher, with the controls on the front of the door or hidden along the top edge. Hidden controls look cleaner, but they also mean the door latch and the control panel work together, so a latch fault can look like a dead dishwasher.',
          'Third-rack and tall-tub models add longer spray arms and more racks to wear. Quiet stainless tub models often dry by condensation and lean on rinse aid. Many newer dishwashers also use a manual filter that needs regular cleaning, which is why so many dishwasher repair calls start with the filter.',
          'Whatever the model, a good dishwasher repair follows the same steps: run it, check the filter, spray arms and drain path, test the likely parts and explain the fix before any work starts.',
        ],
      },
      {
        type: 'prose',
        heading: 'When it is not the dishwasher',
        paragraphs: [
          'Dishwashers share a drain with the kitchen sink, and often with a garbage disposal. If the sink is slow or the disposal is clogged, the dishwasher cannot drain either. Clearing the sink drain or the disposal can fix what looks like a dishwasher problem.',
          'Dishes that come out cool and poorly washed may be getting cold water at the start of the cycle. Run the hot tap at the kitchen sink until it is warm, then start the dishwasher. If the water heater is set low or far from the kitchen, this makes a real difference.',
          'If the dishwasher is dead with no lights, check its breaker and, on plug-in models, the outlet under the sink. If the power is good and it still does nothing, that is a dishwasher repair.',
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Dishwasher brands in Temple kitchens', intro: 'Quiet Bosch tubs, Whirlpool and KitchenAid third-rack models and GE builder units cover most dishwasher calls in Temple. Read the brand and model number off the door edge before you call so the pump, valve or latch can be checked ahead of time.', styles: ['Built-in', 'Front control', 'Top control', 'Third rack'] },
      { type: 'faq' },
    ],
  },
  {
    key: 'oven',
    slug: `oven-stove-repair-${loc}`,
    name: 'Oven & Stove',
    navLabel: 'Oven & Stove Repair',
    icon: 'oven',
    card: 'Oven won’t heat, burner out, igniter clicking.',
    metaTitle: 'Oven & Stove Repair Temple TX | Won’t Heat or Burner Out?',
    metaDescription:
      'Oven not heating, burner clicking but not lighting, or door locked after self-clean? Gas and electric ranges and wall ovens in Temple, TX. Call (254) 615-2088.',
    h1: 'Oven, Stove & Range Repair in Temple, TX',
    intro: [
      'Oven will not heat, bakes unevenly or a burner will not light? Appliance Repair Temple is Temple’s line for oven, stove and range repair, electric and gas. One call puts you in touch with a technician who works on freestanding and slide-in ranges, wall ovens and cooktops. Say whether the trouble is in the oven, on the cooktop or both.',
      'The usual causes are a short list: a burned-out bake or broil element, a weak gas igniter, a temperature sensor that has drifted, a failed surface element or infinite switch, or a door lock stuck after a self-clean. A good technician tests the part before replacing it, explains what failed and what the repair involves, and starts only after you say yes.',
      'Oven repair, stove repair and range repair are the same visit in practice. A range is an oven and a cooktop in one cabinet, and a gas stove repair often comes down to the same few igniters, switches and valves whether the problem is in the oven or on a burner. Electric ovens and glass-top stoves have their own short list of elements, switches and sensors.',
      'Some range problems cannot wait. An oven that will not turn off, a burner stuck on high, a burning electrical smell or sparks call for emergency oven and stove repair; say it is urgent when you call. If you smell gas, get out of the house and call the gas utility from outside before anything else.',
    ],
    symptomsHeading: 'Common oven and stove problems in Temple homes',
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
          'A temperature sensor that has drifted, a failing element, or a convection fan that stopped. Many ovens also allow calibration, which a technician can check.',
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
        fixable: 'Ask the technician to test the board before replacing it.',
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
        q: 'Can glass-top stoves be repaired?',
        a: 'Yes, including radiant elements and infinite switches. A cracked glass top can be replaced on many models, though on an older range a new range may make more sense.',
      },
      {
        q: 'Is it safe to use the stovetop while the oven is broken?',
        a: 'Usually, if the problem is limited to the oven. If anything smells like gas or burning wiring, stop using the whole range and have it checked first.',
      },
      {
        q: 'Can wall ovens and cooktops be repaired?',
        a: 'Yes. Built-in wall ovens and drop-in cooktops are regular repair calls in Temple. Give the model number when you call so the technician can plan for the access.',
      },
      {
        q: 'Can I get emergency oven and stove repair in Temple?',
        a: 'Call and say it is urgent if the oven will not turn off, a burner is stuck on high, or you see sparks or smell burning wiring. Switch off the breaker for the range first. If you smell gas, leave the house and call your gas utility from outside before anything else.',
      },
      {
        q: 'My oven will not turn off. What should I do?',
        a: 'Switch off the breaker for the range. On a gas range, also turn off the gas supply valve behind it if you can reach it safely. Keep the door closed and let the oven cool. An oven that keeps heating after it is switched off usually has a stuck relay on the control board or a failed switch, and it should not be used until it is checked.',
      },
      {
        q: 'Why is my oven not heating but the broiler works?',
        a: 'On an electric oven, the bake element has most likely burned out. On a gas oven with a separate broil burner, the bake igniter is the usual cause. Both are common oven repairs.',
      },
      {
        q: 'Why does my gas stove keep clicking?',
        a: 'Clicking that does not stop usually means moisture or a spill around a burner, a burner cap out of place, or a switch behind a knob that has failed. Let a wet cooktop dry fully and reseat the caps. If the clicking continues, the spark switch or spark module needs to be replaced.',
      },
      {
        q: 'Is oven and stove repair available outside Temple?',
        a: 'Yes. Oven, stove and range calls also come from Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody, gas and electric alike.',
      },
      {
        q: 'How much does oven or stove repair cost?',
        a: 'A new igniter and a replacement glass cooktop are very different jobs, so this site does not list prices. Ask about cost and any warranty on the part before the range is moved, and have the brand, the model number and whether it is gas or electric ready.',
      },
      {
        q: 'Where is the model number on my range?',
        a: 'Pull out the storage drawer or open the oven door and look along the frame. On wall ovens and cooktops, check the frame edge or the underside. A photo of the rating plate is fine.',
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
        intro: 'Say which part of the range is acting up when you call. It changes what the technician brings.',
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
      { type: 'callCard' },
      {
        type: 'quickAnswer',
        heading: 'Is your oven running hot or cold? A simple test',
        intro: 'Oven dials are often off by a little. Here is how to see by how much.',
        steps: [
          'Put an oven thermometer in the center of the middle rack.',
          'Set the oven to 350°F and let it run for about 20 minutes after it says it is preheated.',
          'Read the thermometer without opening the door if you can. Ovens swing a few degrees above and below the setting as they cycle, which is normal.',
          'Take two or three readings a few minutes apart and average them.',
          'If the average is more than about 25 degrees off, call for repair. It may be a calibration setting, a sensor or a heating part.',
        ],
      },
      {
        type: 'emergency',
        heading: 'Emergency oven and stove repair in Temple',
        intro: 'A range that will not shut off or smells like burning wiring is a fire risk, not an inconvenience. Shut off the power or gas first, then check the signs below.',
        signs: [
          { title: 'Oven will not turn off', text: 'The oven keeps heating after it is switched off, or runs far hotter than the setting.' },
          { title: 'Burner stuck on high', text: 'A coil or glass-top burner stays on full heat no matter where the knob is set.' },
          { title: 'Sparks or burning wiring smell', text: 'Arcing at an element, a flash from a burner, or an electrical smell from the back of the range.' },
          { title: 'Gas smell', text: 'Do not switch anything on or off. Leave the house and call your gas utility from outside, then call for repair.' },
        ],
        steps: [
          'Switch off the breaker for the range, unless you smell gas.',
          'On a gas range, close the gas supply valve behind it if you can reach it safely.',
          'Keep the oven door closed and let everything cool.',
          'Write down the brand, model number, gas or electric and any error code, then call.',
        ],
      },
      {
        type: 'prose',
        heading: 'Why a glowing igniter can still be the problem',
        paragraphs: [
          'Most gas ovens use a hot surface igniter wired in line with the gas safety valve. The valve only opens when enough current flows through the igniter. As an igniter ages, it can still glow orange while drawing too little current to open the valve, so the oven never lights or lights late.',
          'That is why a good technician tests the igniter with a meter before blaming the valve or the control board. It is usually the less involved repair, so ask about it.',
        ],
      },
      {
        type: 'prose',
        heading: 'Self-clean cycles: what to know before you press the button',
        paragraphs: [
          'A self-clean cycle heats the oven far above normal baking temperatures for a few hours to burn off spills. That heat is hard on parts that are already worn. Door locks, temperature sensors, thermal fuses and control boards often fail during or right after a self-clean, which is why so many oven calls start with "it was fine until I cleaned it."',
          'If your oven is older or already acting up, wipe out loose spills by hand and skip the self-clean for now. Remove the racks unless your manual says they can stay, keep the kitchen ventilated, and do not try to force the door open while it is locked. If the lock does not release after the oven has cooled for a few hours, call and say it stuck after a self-clean.',
        ],
      },
      {
        type: 'prose',
        heading: 'Check your anti-tip bracket',
        paragraphs: [
          'Freestanding ranges are built to be secured with an anti-tip bracket at the back foot. Without it, the weight of a child standing on an open oven door can tip the range forward, along with whatever is cooking on top. If your range has been moved for cleaning or flooring, the bracket may no longer be engaged. Ask the technician to check it during a repair visit.',
        ],
      },
      {
        type: 'process',
        heading: 'What to expect on an oven or stove repair visit',
        steps: [
          { title: 'Check power or gas', text: 'A technician will usually confirm the range has power or gas supply before testing parts.' },
          { title: 'Test the heat source', text: 'Elements, igniters, switches and the temperature sensor are usually tested with a meter.' },
          { title: 'Explain and approve', text: 'Ask what failed and what the repair involves. Give the go-ahead only once that is clear.' },
          { title: 'Repair and verify', text: 'After the repair, ask for the oven or burner to be run to confirm it heats correctly.' },
        ],
      },
      {
        type: 'resultsGrid',
        eyebrow: 'Oven not heating',
        heading: 'Oven not heating? What the symptom points to',
        intro: 'How the oven fails narrows down the part. Note which of these matches yours before you call.',
        rows: [
          { see: 'Gas oven: igniter glows, no flame', means: 'The igniter is too weak to open the gas valve, or less often the valve itself has failed.', fix: 'The igniter is tested with a meter first; it is the most common gas oven repair.' },
          { see: 'Electric oven: broil works, bake does not', means: 'The bake element has burned out. You can often see a break or a blister on it.', fix: 'Bake element replacement is a routine oven repair.' },
          { see: 'Heats, but bakes too hot or too cold', means: 'The temperature sensor has drifted or the oven needs calibration.', fix: 'Run the thermometer test above; calibration or a new sensor fixes most cases.' },
          { see: 'Nothing heats and the display is dead', means: 'A tripped breaker, a blown thermal fuse or a control board fault.', fix: 'Check both breakers first; the fuse and board are tested before anything is replaced.' },
        ],
      },
      {
        type: 'prose',
        heading: 'Ranges, wall ovens and cooktops in Temple kitchens',
        paragraphs: [
          'Freestanding ranges are the most common setup in Temple kitchens, with the oven below and four or five burners on top. Slide-in ranges sit flush with the counter and put the controls on the front, which changes how the technician reaches the wiring and switches.',
          'Wall ovens, single or double, are built into the cabinets and pair with a separate cooktop. They need more care to pull out, so give the model number when you call. Gas cooktops use spark igniters and burner valves, and electric cooktops use coil elements or radiant elements under a glass top, each with its own switch.',
          'Whatever the setup, a good oven and stove repair starts the same way: confirm power or gas, test the heat source and the controls, and explain the fix before any work starts.',
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Oven, range and cooktop brands', intro: 'GE and Frigidaire ranges are a common sight in Temple builder homes, with Whirlpool, Samsung, LG and KitchenAid in newer kitchens. Give the brand, model number and whether it is gas or electric when you call.', styles: ['Freestanding ranges', 'Slide-in ranges', 'Wall ovens', 'Cooktops', 'Electric and gas'] },
      { type: 'faq' },
    ],
  },
  {
    key: 'microwave',
    slug: `microwave-repair-${loc}`,
    name: 'Microwave',
    navLabel: 'Microwave Repair',
    icon: 'microwave',
    card: 'Over-the-range and built-in microwaves not heating.',
    metaTitle: 'Microwave Repair Temple TX | Over-the-Range Not Heating?',
    metaDescription:
      'Microwave running but not heating, sparking or dead? Over-the-range and built-in microwave repair in Temple, TX, vent fan and light too. Call (254) 615-2088.',
    h1: 'Over-the-Range & Built-In Microwave Repair in Temple, TX',
    intro: [
      'Microwave running but not heating, sparking inside or completely dead? Appliance Repair Temple is Temple’s line for over-the-range and built-in microwave repair. One call puts you in touch with a technician who works on the heating circuit and on the vent fan and cooktop light of over-the-range models. Say how the microwave is mounted.',
      'Microwaves look simple, but inside they run on high voltage. A failed door switch, a blown fuse, a diode, a capacitor or the magnetron is behind most no-heat calls, and those parts can hold a dangerous charge even after the unit is unplugged. A qualified technician discharges the circuit safely, tests the parts, explains what failed and what the repair involves, and starts only after you say yes.',
      'Over-the-range microwave repair also covers the parts that make it a range hood: the vent fan, the cooktop light and their switches. Built-in microwave repair and wall oven combination units follow the same high-voltage rules, with more care taken to remove the unit from the cabinet.',
      'A microwave that sparks, smokes, smells like burning or keeps running with the door open should not be used again until it is checked. That is a case for emergency microwave repair, so say it is urgent when you call.',
    ],
    symptomsHeading: 'Common microwave problems in Temple homes',
    symptoms: [
      {
        title: 'Runs but does not heat',
        cause:
          'The turntable spins and the light is on, but food stays cold. The usual causes are a failed magnetron, high-voltage diode or capacitor, or a door switch that is not engaging correctly.',
        fixable: 'Fixable on most over-the-range and built-in units. Leave this one to a technician.',
      },
      {
        title: 'Completely dead, no display',
        cause: 'A blown internal fuse is common, and a failing door switch is often what blew it. A control board fault can also leave the display dark.',
        fixable: 'Fuse and door switch replacement are routine.',
      },
      {
        title: 'Sparking or arcing inside',
        cause: 'Metal in the cavity, a burned or greasy waveguide cover, or chipped interior paint that exposes bare metal. Stop using it until it is checked.',
        fixable: 'Waveguide covers are simple to replace. Large areas of damaged paint may mean replacement.',
      },
      {
        title: 'Keypad not responding',
        cause: 'A worn membrane keypad, moisture behind it from steam, or a control board problem.',
        fixable: 'Keypads and boards are replaceable on many models.',
      },
      {
        title: 'Turntable not turning',
        cause: 'A failed turntable motor, a cracked coupler under the glass tray, or a tray that is not seated on its roller ring.',
        fixable: 'Motor or coupler replacement.',
      },
      {
        title: 'Vent fan or light not working',
        cause: 'On over-the-range units: a failed fan motor, a burned-out bulb or socket, or the switch for the fan or light.',
        fixable: 'Standard parts on most brands.',
      },
      {
        title: 'Loud hum or buzzing while heating',
        cause: 'Some hum is normal. A loud or changing buzz can come from a failing magnetron, a high-voltage diode or a cooling fan rubbing.',
        fixable: 'A good technician finds the source before replacing anything.',
      },
    ],
    diagnostic: { heading: 'What the visit covers', paragraphs: [], covers: [] },
    repairOrReplace: {
      heading: 'Repair or replace your microwave?',
      paragraphs: [
        'For countertop microwaves, replacing usually makes more sense than a service visit. For over-the-range and built-in units, the math changes: a replacement means removing the old unit, mounting the new one and sometimes matching the cabinet opening, so repairing a door switch, fuse, turntable or fan is usually worth it.',
        'A magnetron failure on an older over-the-range unit is the closer call. It depends on the age of the microwave and whether the part is still available. It is fair to ask the technician which way they would go.',
      ],
      points: [
        'Countertop microwave: replacement usually makes more sense',
        'Over-the-range or built-in, simple failure: repair',
        'Magnetron failure on an older over-the-range unit: compare against replacement',
      ],
    },
    safety:
      'Do not open a microwave cabinet. The high-voltage capacitor can hold a dangerous charge long after the unit is unplugged.',
    brands: ['GE', 'Whirlpool', 'Samsung', 'LG', 'KitchenAid', 'Frigidaire', 'Maytag', 'Bosch', 'Kenmore', 'Electrolux'],
    faqs: [
      {
        q: 'Is it worth repairing a microwave?',
        a: 'For over-the-range and built-in models, often yes, because replacing them means removal and installation work too. For countertop units, replacement is usually the simpler choice.',
      },
      {
        q: 'Why does my microwave run but not heat?',
        a: 'The usual causes are a door switch, high-voltage diode, capacitor or magnetron. These are high-voltage parts and should only be tested by a technician.',
      },
      {
        q: 'Is it safe to use a microwave with a damaged door?',
        a: 'No. If the door, hinges, latch or seal are damaged, or the door does not close properly, stop using it until it has been checked.',
      },
      {
        q: 'Can the light or vent fan in an over-the-range microwave be replaced?',
        a: 'Yes. Fan motors, bulbs, sockets and switches are standard parts on most over-the-range models.',
      },
      {
        q: 'Can I get an over-the-range microwave installed?',
        a: 'Calls to this line are about repair. Some technicians also install over-the-range microwaves, so ask about installation on the call and mention the cabinet width.',
      },
      {
        q: 'Why is my over-the-range microwave fan so loud?',
        a: 'Grease-clogged filters make the fan work harder. Clean the filters first. If it still rattles, squeals or grinds, the fan motor or a blade may be failing, and both can be replaced.',
      },
      {
        q: 'Can I get emergency microwave repair in Temple?',
        a: 'Say it is urgent when you call if the microwave sparks with nothing metal inside, smokes, smells like burning, keeps running with the door open or trips the breaker. In the meantime, turn it off, keep the door closed and unplug it or switch off its breaker if you can do it safely.',
      },
      {
        q: 'What should I do if there is a fire inside my microwave?',
        a: 'Keep the door closed and turn the microwave off. Unplug it or switch off its breaker if you can do it safely. Keeping the door shut starves the fire of air. If the fire does not go out, leave and call 911. Do not use the microwave again until it has been checked.',
      },
      {
        q: 'Why is my microwave sparking?',
        a: 'Metal in the cavity, such as foil, a twist tie or a dish with metallic trim, is the first thing to rule out. With nothing metal inside, sparking usually comes from a burned or greasy waveguide cover or chipped interior paint. Stop using it until it is checked.',
      },
      {
        q: 'Why does my microwave shut off in the middle of a cycle?',
        a: 'Many microwaves have a thermal cutout that shuts them down when they run too hot. A blocked vent, a cooling fan that has failed or grease-clogged filters on an over-the-range model can trip it. A loose door switch or a control fault can also stop a cycle.',
      },
      {
        q: 'Is microwave repair available outside Temple?',
        a: 'Yes. Over-the-range and built-in microwave calls also come from Belton, Killeen, Harker Heights, Nolanville, Morgan’s Point Resort, Salado, Troy, Little River-Academy, Rogers, Holland and Moody.',
      },
      {
        q: 'How much does microwave repair cost?',
        a: 'A door switch and a magnetron are very different repairs, so this site does not list prices. Ask about the price and any warranty before the unit comes off the wall, and have the brand and model number ready.',
      },
      {
        q: 'Where is the model number on my microwave?',
        a: 'Open the door and look on the frame around the opening or on the inside of the door. On over-the-range units it can also be behind the vent grille at the top front.',
      },
    ],
    related: ['oven', 'dishwasher', 'refrigerator'],
    offeredVerified: true,
    blocks: [
      {
        type: 'compare',
        heading: 'First question: what kind of microwave is it?',
        intro: 'It decides whether repair makes sense at all.',
        columns: [
          {
            title: 'Countertop microwaves',
            items: [
              'Easy to unplug and swap out',
              'Usually less expensive to replace than to repair',
              'Worth a call only if it is a high-end or built-in-style model',
              'Do not open the case to look inside',
            ],
          },
          {
            title: 'Over-the-range and built-in',
            items: [
              'Mounted to the wall and cabinet, or set into cabinetry',
              'Replacement means removal, mounting and fit work',
              'Door switches, fuses, fans, lights and turntables are common repairs',
              'Usually worth repairing unless the unit is old and the magnetron failed',
            ],
          },
        ],
      },
      {
        type: 'stopUsing',
        heading: 'Stop using the microwave if',
        items: [
          'It sparks, arcs or flashes inside with nothing metal in it.',
          'The door, hinges, latch or seal are damaged, or the door does not close properly.',
          'It keeps running after the door is opened.',
          'You smell burning or see smoke from the vents or the cabinet.',
          'The breaker trips when it starts heating.',
        ],
        note: 'Do not try to repair it yourself. A microwave’s high-voltage capacitor can hold a dangerous charge after the unit is unplugged.',
      },
      {
        type: 'prose',
        heading: 'Why microwave repair is not a do-it-yourself job',
        paragraphs: [
          'To make heat, a microwave steps household current up to thousands of volts and stores some of it in a high-voltage capacitor. Manufacturer service manuals tell technicians to unplug the unit, wait, and then discharge that capacitor with an insulated tool before touching anything inside. Repair guides warn the charge can linger well beyond that.',
          'That is why the outer cabinet should stay closed unless you are trained to work on it. The checks below are safe. Anything past them is a job for a technician.',
        ],
      },
      { type: 'symptoms' },
      { type: 'callCard' },
      {
        type: 'quickAnswer',
        heading: 'Safe checks before you call',
        steps: [
          'Check the outlet and the breaker. Over-the-range units are often on their own circuit.',
          'Open and close the door firmly. If it does not latch cleanly, stop and call.',
          'Heat a cup of water for one minute. If it is barely warm, the heating circuit has a problem.',
          'On over-the-range models, check whether the vent fan and light still work. It helps narrow the fault.',
          'Make sure the glass tray is seated on its roller ring and coupler.',
        ],
      },
      {
        type: 'emergency',
        heading: 'Emergency microwave repair in Temple',
        intro: 'A microwave that sparks, smokes or will not stop running is a fire and shock risk, and an over-the-range unit sits right above your cooktop. Stop using it and work through the signs below.',
        signs: [
          { title: 'Sparking with nothing metal inside', text: 'Flashes or arcing in the cavity, often from a burned waveguide cover or chipped interior paint.' },
          { title: 'Smoke or burning smell', text: 'Smoke from the vents or cabinet, or an electrical smell that is not food. Keep the door closed and turn it off.' },
          { title: 'Runs with the door open', text: 'The turntable keeps turning or the microwave keeps humming after the door is opened. A door switch has failed.' },
          { title: 'Breaker trips when it heats', text: 'The breaker trips every time the microwave starts heating. Stop using it.' },
        ],
        steps: [
          'Turn the microwave off and keep the door closed.',
          'Unplug it or switch off its breaker if you can do it safely.',
          'Do not open the cabinet; the capacitor can hold a dangerous charge.',
          'Write down the brand, model number and any error code, then call.',
        ],
      },
      {
        type: 'partsTable',
        heading: 'The microwave parts a technician tests',
        rows: [
          { part: 'Door switches', job: 'Stop the microwave from heating when the door opens', signs: 'Dead unit, blown fuse, or a microwave that will not start' },
          { part: 'Main fuse', job: 'Protects the circuit from a short', signs: 'Completely dead, often after a door switch fails' },
          { part: 'Magnetron', job: 'Produces the microwaves that heat food', signs: 'Runs but does not heat, or a loud buzz while heating' },
          { part: 'High-voltage diode and capacitor', job: 'Supply the magnetron', signs: 'No heat, or heat that comes and goes' },
          { part: 'Turntable motor and coupler', job: 'Turn the glass tray', signs: 'Tray stops turning or wobbles' },
          { part: 'Vent fan and light', job: 'Pull smoke and steam off the cooktop below', signs: 'Fan dead, noisy or stuck on, or the light out' },
          { part: 'Keypad and control board', job: 'Run the controls and timer', signs: 'Buttons not responding or a blank display' },
        ],
      },
      {
        type: 'prose',
        heading: 'Over-the-range extras: the vent fan, light and filters',
        paragraphs: [
          'An over-the-range microwave doubles as the range hood. Its grease filters sit under the unit and should be cleaned regularly, more often if you fry or sear a lot. Models that recirculate air instead of venting outside also use a charcoal filter that needs replacing from time to time. A clogged filter makes the fan work harder and can make it noisy.',
          'Before a repair visit, clear the cooktop below the microwave and the cabinet shelf above it. Many over-the-range repairs mean taking the unit off its mounting plate, and the technician needs room to support it safely.',
        ],
      },
      {
        type: 'process',
        heading: 'What to expect on a microwave repair visit',
        steps: [
          { title: 'Safe discharge', text: 'A qualified technician unplugs the unit and safely discharges the high-voltage circuit before opening it.' },
          { title: 'Test the parts', text: 'Door switches, fuse, magnetron circuit, controls, fan and light are usually tested.' },
          { title: 'Explain and approve', text: 'Ask what failed and whether the repair makes sense for your microwave. The repair should wait for your yes.' },
          { title: 'Repair and test', text: 'After the repair, ask for the microwave to be run to confirm it heats, and for the door to be checked.' },
        ],
      },
      {
        type: 'resultsGrid',
        eyebrow: 'Microwave not heating',
        heading: 'Microwave not heating? What the symptom points to',
        intro: 'How the microwave fails tells the technician where to start. Match your microwave to one of these before you call.',
        rows: [
          { see: 'Runs, turns and lights up, but no heat', means: 'The magnetron, high-voltage diode or capacitor has failed, or a door switch is not engaging.', fix: 'High-voltage parts are tested by a technician only; most are replaceable.' },
          { see: 'Heats weakly or unevenly', means: 'A magnetron losing output, a diode on its way out, or a turntable that has stopped turning.', fix: 'Check the tray first; the heating circuit is tested next.' },
          { see: 'Stops in the middle of a cycle', means: 'The thermal cutout tripped from a blocked vent, a failed cooling fan or clogged filters.', fix: 'Clean the filters and clear the vents; fans and cutouts are standard parts.' },
          { see: 'Dead after a pop or a door slam', means: 'A door switch failed and blew the main fuse.', fix: 'Both the fuse and the door switches are tested, so a new fuse does not blow again.' },
        ],
      },
      {
        type: 'prose',
        heading: 'Over-the-range, built-in and countertop microwaves',
        paragraphs: [
          'Over-the-range microwaves are the most common setup in Temple kitchens. They mount to a wall plate and the cabinet above, and they double as the range hood, with a vent fan, a cooktop light and grease filters. That extra hardware is why over-the-range microwave repair usually makes more sense than replacement.',
          'Built-in microwaves sit in a cabinet opening, often with a trim kit, and wall oven combinations pair a microwave above a wall oven in one unit. Both take more care to pull out, so give the model number when you call.',
          'Countertop microwaves are usually cheaper to replace than to repair. If yours is a countertop model, ask about it on the phone before anyone comes out.',
        ],
      },
      { type: 'repairOrReplace' },
      { type: 'brands', heading: 'Microwave brands in Temple kitchens', intro: 'Over-the-range microwaves usually match the range below them, so GE, Whirlpool, Samsung and LG lead the list in Temple kitchens. Give the brand and model number from the door frame when you call.', styles: ['Over-the-range', 'Built-in', 'Wall oven combination'] },
      { type: 'faq' },
    ],
  },
];

export const serviceByKey = Object.fromEntries(services.map((s) => [s.key, s])) as Record<ApplianceKey, Service>;

export const serviceHref = (key: ApplianceKey) => `/${serviceByKey[key].slug}/`;

/** Six cards in the homepage selector. Refrigerator and freezer come first: they are the most urgent calls. */
export const primaryServiceKeys: ApplianceKey[] = ['refrigerator', 'freezer', 'washer', 'dryer', 'dishwasher', 'oven'];

export const applianceOptions = services.map((s) => ({ key: s.key, label: s.name, icon: s.icon }));
