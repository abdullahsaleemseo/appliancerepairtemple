import type { Issue, ToolApplianceKey } from './types';

/**
 * Problems a visitor can pick, per appliance. Shared by the symptom checker and the repair cost guide.
 *
 * To add an issue: append an entry to `issues` with a unique kebab-case id that starts with the
 * appliance key (for example 'washer-not-draining'), a short sentence-case label, 2 or 3 causes
 * ordered most likely first, an urgency, safe homeowner checks, technician-only work and a cost rule.
 * issuesByAppliance picks it up automatically.
 *
 * Cause `weight` is a base likelihood from 1 (less common) to 5 (most common). `boostIf` raises a
 * cause when the visitor also reports another issue id of the same appliance, an operating status
 * or an age band. The engine in src/lib/tools does the reordering.
 *
 * Cost levels are relative ('none' to 'major') and labour is hands-on hours. The site publishes no
 * prices, so never add currency amounts here.
 *
 * safeChecks must be things a homeowner can do with the power off or the unit unplugged. Never
 * suggest opening a sealed system, handling gas lines, testing live wiring, bypassing a safety
 * switch or removing a panel that exposes wiring.
 */
export const issues: Issue[] = [
  // Refrigerator (8)
  {
    id: 'refrigerator-not-cooling',
    appliance: 'refrigerator',
    label: 'Not cooling properly',
    causes: [
      { id: 'dirty-condenser', title: 'Dirty condenser coils', why: 'Dust on the coils traps heat, so the system runs longer and cools less. It is the most common cause on units that have never had the coils cleaned.', weight: 5, boostIf: { status: ['poor'], ageAtLeast: '5to10' } },
      { id: 'evaporator-fan', title: 'Failed evaporator fan motor', why: 'The fan moves cold air from the freezer into the fresh food side. If the freezer is cold but the fridge is warm, this fan is a likely suspect.', weight: 4, boostIf: { issues: ['refrigerator-noise'], status: ['noise'] } },
      { id: 'start-relay', title: 'Start relay or compressor problem', why: 'If the compressor clicks and will not stay running, the start relay or the compressor itself may be failing.', weight: 3, boostIf: { issues: ['refrigerator-compressor-clicking'], status: ['stopped'], ageAtLeast: '10plus' } },
    ],
    urgency: 'today',
    safeChecks: [
      'Check that the thermostat dial or display has not been bumped to a warmer setting.',
      'Unplug the refrigerator and vacuum the condenser coils at the bottom or back.',
      'Make sure food is not blocking the vents inside the fresh food and freezer sections.',
      'Move perishable food to a cooler or another refrigerator while the unit is checked.',
    ],
    proOnly: ['Testing the compressor, start relay and fan motors', 'Checking refrigerant charge and the sealed system'],
    cost: { description: 'Fan motor, relay or thermostat repair, or sealed system work if the compressor has failed.', parts: ['low', 'major'], labourHours: [1, 4], complexity: 'moderate' },
  },
  {
    id: 'refrigerator-freezer-not-freezing',
    appliance: 'refrigerator',
    label: 'Freezer section not freezing',
    causes: [
      { id: 'defrost-system', title: 'Defrost system fault', why: 'A failed defrost heater, timer or thermostat lets frost build on the evaporator coil until air cannot pass through it.', weight: 5, boostIf: { issues: ['refrigerator-not-cooling'], ageAtLeast: '5to10' } },
      { id: 'evaporator-fan', title: 'Evaporator fan not running', why: 'Without the fan, cold air stays around the coil and the freezer compartment slowly warms up.', weight: 4, boostIf: { issues: ['refrigerator-noise'], status: ['noise'] } },
      { id: 'door-seal', title: 'Worn freezer door gasket', why: 'A gap in the gasket lets warm, humid air in, which shows up as frost near the door and soft food.', weight: 2, boostIf: { issues: ['refrigerator-door-seal'] } },
    ],
    urgency: 'today',
    safeChecks: [
      'Look for heavy frost on the back panel of the freezer, which points to a defrost problem.',
      'Close the door on a strip of paper and check that the gasket grips it all the way around.',
      'Keep the freezer door closed and move frozen food to a cooler if it starts to soften.',
    ],
    proOnly: ['Testing the defrost heater, thermostat and control', 'Replacing the evaporator fan motor'],
    cost: { description: 'Defrost heater, thermostat or timer replacement, or an evaporator fan motor.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'refrigerator-leaking',
    appliance: 'refrigerator',
    label: 'Water leaking',
    causes: [
      { id: 'clogged-defrost-drain', title: 'Clogged defrost drain', why: 'When the drain line freezes or clogs, defrost water spills into the fridge or onto the floor.', weight: 5, boostIf: { issues: ['refrigerator-freezer-not-freezing'], status: ['leaking'] } },
      { id: 'water-line', title: 'Loose or cracked water supply line', why: 'Units with an ice maker or dispenser have a small supply line at the back that can crack or work loose.', weight: 4, boostIf: { issues: ['refrigerator-ice-maker'], status: ['leaking'] } },
      { id: 'drain-pan', title: 'Cracked or misplaced drain pan', why: 'The pan under the unit collects defrost water. If it is cracked or shifted, water ends up on the floor.', weight: 2 },
    ],
    urgency: 'today',
    safeChecks: [
      'Unplug the unit and dry the floor to stop slips and floor damage.',
      'Check that the refrigerator tilts slightly back so the doors close and water drains to the rear.',
      'Look at the water filter housing and make sure the filter is seated and not cracked.',
      'Close the shutoff valve for the ice maker supply line if the leak comes from the back.',
    ],
    proOnly: ['Clearing a frozen defrost drain inside the freezer', 'Replacing the water inlet valve or supply line'],
    cost: { description: 'Clearing the defrost drain or replacing a water line or inlet valve.', parts: ['none', 'low'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'refrigerator-ice-maker',
    appliance: 'refrigerator',
    label: 'Ice maker not producing ice',
    causes: [
      { id: 'water-inlet-valve', title: 'Water inlet valve or low water pressure', why: 'The valve opens to fill the ice mold. A weak or failed valve, or low house pressure, means little or no water reaches it.', weight: 5, boostIf: { status: ['stopped'] } },
      { id: 'frozen-fill-tube', title: 'Frozen fill tube', why: 'The small tube that feeds the mold can freeze solid, especially if the freezer runs very cold.', weight: 3, boostIf: { issues: ['refrigerator-freezer-not-freezing'] } },
      { id: 'ice-maker-module', title: 'Failed ice maker module', why: 'If water arrives but the cubes never eject, the ice maker assembly itself has likely worn out.', weight: 3, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Check that the ice maker arm or switch is in the on position.',
      'Replace the water filter if it is past its change date, since a clogged filter cuts the flow.',
      'Confirm the freezer is at about 0 F, since ice makers slow down when it runs warm.',
    ],
    proOnly: ['Testing and replacing the water inlet valve', 'Replacing the ice maker assembly'],
    cost: { description: 'Water inlet valve or ice maker assembly replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'refrigerator-compressor-clicking',
    appliance: 'refrigerator',
    label: 'Compressor clicking',
    causes: [
      { id: 'start-relay', title: 'Failing start relay', why: 'A click every few minutes with no steady hum usually means the relay is trying and failing to start the compressor.', weight: 5, boostIf: { issues: ['refrigerator-not-cooling'], status: ['intermittent'] } },
      { id: 'overload', title: 'Overload protector tripping', why: 'The overload cuts power when the compressor runs hot, often because of dirty coils or a weak start circuit.', weight: 3, boostIf: { ageAtLeast: '5to10' } },
      { id: 'compressor', title: 'Compressor failing', why: 'On older units, repeated clicking with warm temperatures can mean the compressor itself is no longer starting.', weight: 2, boostIf: { issues: ['refrigerator-not-cooling'], ageAtLeast: '10plus' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Make sure the unit is plugged directly into a wall outlet, not an extension cord.',
      'Unplug the unit and clean the condenser coils so the compressor runs cooler.',
      'Leave space behind the refrigerator for air to move.',
    ],
    proOnly: ['Testing the start relay, overload and compressor windings', 'Compressor replacement and sealed system work'],
    cost: { description: 'Start relay and overload replacement, or a compressor replacement in the worst case.', parts: ['low', 'major'], labourHours: [0.5, 4], complexity: 'moderate' },
  },
  {
    id: 'refrigerator-noise',
    appliance: 'refrigerator',
    label: 'Excessive noise',
    causes: [
      { id: 'condenser-fan', title: 'Condenser fan blade or motor', why: 'A rattle or grinding near the bottom back often comes from a fan blade hitting debris or a worn motor bearing.', weight: 4, boostIf: { status: ['noise'] } },
      { id: 'evaporator-fan', title: 'Evaporator fan icing or wear', why: 'A squeal or chirp from inside the freezer that gets louder with the door open points to this fan.', weight: 4, boostIf: { issues: ['refrigerator-freezer-not-freezing'], status: ['noise'] } },
      { id: 'not-level', title: 'Unit not level', why: 'An uneven unit can vibrate against the floor or cabinets and make the normal hum sound much louder.', weight: 2 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Adjust the leveling feet so the unit sits firmly and tilts slightly back.',
      'Unplug the unit and vacuum the condenser area to clear lint and debris near the fan.',
      'Check that nothing on top of or beside the refrigerator rattles when it runs.',
    ],
    proOnly: ['Replacing the condenser or evaporator fan motor'],
    cost: { description: 'Condenser or evaporator fan motor replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'refrigerator-door-seal',
    appliance: 'refrigerator',
    label: 'Door not sealing',
    causes: [
      { id: 'worn-gasket', title: 'Worn or torn door gasket', why: 'Gaskets harden and split over time, so the door no longer seals and warm air leaks in.', weight: 5, boostIf: { ageAtLeast: '5to10' } },
      { id: 'door-alignment', title: 'Door out of alignment', why: 'Heavy door shelves or a loose hinge can let the door sag so one corner no longer touches the cabinet.', weight: 3 },
      { id: 'not-level', title: 'Unit tilted forward', why: 'Doors close on their own only when the unit tilts slightly back. A forward tilt lets them drift open.', weight: 2 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Wash the gasket with warm soapy water, since sticky residue can stop it from sealing.',
      'Close the door on a strip of paper at several points and see where it slides out easily.',
      'Lighten heavy door shelves and adjust the leveling feet so the unit tilts back.',
    ],
    proOnly: ['Replacing the door gasket', 'Adjusting or replacing door hinges'],
    cost: { description: 'Door gasket replacement or hinge adjustment.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'refrigerator-error-code',
    appliance: 'refrigerator',
    label: 'Error code displayed',
    causes: [
      { id: 'sensor-fault', title: 'Temperature sensor fault', why: 'Many refrigerator codes point to a sensor that reads out of range, which can affect cooling or defrost.', weight: 4, boostIf: { issues: ['refrigerator-not-cooling', 'refrigerator-freezer-not-freezing'] } },
      { id: 'fan-or-defrost', title: 'Fan or defrost circuit fault', why: 'Codes for a fan or defrost failure usually appear after the control notices the motor or heater is not responding.', weight: 3, boostIf: { issues: ['refrigerator-noise'] } },
      { id: 'control-board', title: 'Control or communication fault', why: 'Some codes mean the main board and the display board have stopped talking to each other.', weight: 2, boostIf: { status: ['intermittent'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Write down the exact code and look it up in the error code decoder tool on this site.',
      'Unplug the unit for five minutes and plug it back in to see if the code clears.',
      'Check that the doors are fully closed, since some codes are door alarms.',
    ],
    proOnly: ['Testing sensors, fans and the defrost circuit', 'Replacing a control board'],
    cost: { description: 'Sensor replacement in most cases, or a control board for communication faults.', parts: ['low', 'high'], labourHours: [0.5, 2], complexity: 'moderate' },
  },

  // Washer (7)
  {
    id: 'washer-not-draining',
    appliance: 'washer',
    label: 'Not draining',
    causes: [
      { id: 'clogged-pump-filter', title: 'Clogged drain pump filter', why: 'Coins, hair ties and lint collect in the pump filter and block the water from leaving the drum.', weight: 5, boostIf: { status: ['stopped'] } },
      { id: 'kinked-hose', title: 'Kinked or clogged drain hose', why: 'A hose pushed against the wall can kink, and lint can build up where it enters the standpipe.', weight: 4 },
      { id: 'drain-pump', title: 'Failed drain pump', why: 'If the filter and hose are clear and you hear a hum with no water moving, the pump motor has likely failed.', weight: 3, boostIf: { issues: ['washer-not-spinning'], status: ['noise'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Unplug the washer and pull it out enough to check the drain hose for kinks.',
      'On front loaders, open the small pump filter door with towels down and clean the filter.',
      'Check that the drain hose is not pushed too far into the standpipe.',
    ],
    proOnly: ['Testing and replacing the drain pump', 'Clearing a blockage inside the pump housing or sump'],
    cost: { description: 'Drain pump replacement or clearing a blockage in the sump.', parts: ['none', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'washer-not-spinning',
    appliance: 'washer',
    label: 'Not spinning',
    causes: [
      { id: 'unbalanced-load', title: 'Unbalanced load', why: 'The washer stops or slows the spin when heavy items bunch up on one side.', weight: 4, boostIf: { issues: ['washer-vibration-noise'] } },
      { id: 'lid-switch', title: 'Lid switch or door lock fault', why: 'The washer will not spin unless it senses the lid or door is closed and locked.', weight: 4, boostIf: { issues: ['washer-door-lock'] } },
      { id: 'drive-belt', title: 'Worn drive belt or motor coupling', why: 'If the motor hums but the drum does not turn, the belt or coupling between them may be broken.', weight: 3, boostIf: { status: ['noise'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Redistribute the load and run a drain and spin cycle on its own.',
      'Make sure the washer is not trying to spin a full drum of water because it cannot drain.',
      'Check that the lid or door closes firmly and nothing is caught in the latch.',
    ],
    proOnly: ['Replacing the lid switch or door lock', 'Replacing the drive belt, motor coupling or motor'],
    cost: { description: 'Lid switch, door lock or drive belt replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 2], complexity: 'moderate' },
  },
  {
    id: 'washer-leaking',
    appliance: 'washer',
    label: 'Leaking',
    causes: [
      { id: 'fill-hose', title: 'Loose or worn fill hose', why: 'Rubber fill hoses loosen and crack with age, and they leak at the back of the machine.', weight: 4, boostIf: { status: ['leaking'], ageAtLeast: '5to10' } },
      { id: 'door-boot', title: 'Torn door boot seal', why: 'On front loaders, a tear or debris in the rubber door boot lets water out at the front during a cycle.', weight: 4, boostIf: { issues: ['washer-clothes-dirty'] } },
      { id: 'pump-or-tub-seal', title: 'Drain pump or tub seal leak', why: 'A leak under the machine during drain points to the pump. A leak during spin can mean a worn tub seal.', weight: 3, boostIf: { issues: ['washer-not-draining', 'washer-vibration-noise'] } },
    ],
    urgency: 'today',
    safeChecks: [
      'Turn off the water supply valves behind the washer and unplug it.',
      'Hand tighten the fill hose connections and look for cracks or bulges in the hoses.',
      'On front loaders, wipe the door boot and check its folds for tears or trapped items.',
      'Use the right amount of high efficiency detergent, since too much suds can spill out.',
    ],
    proOnly: ['Replacing the door boot seal', 'Replacing the drain pump or tub seal'],
    cost: { description: 'Fill hose or door boot replacement, or a pump repair for leaks underneath.', parts: ['low', 'moderate'], labourHours: [0.5, 2], complexity: 'moderate' },
  },
  {
    id: 'washer-vibration-noise',
    appliance: 'washer',
    label: 'Vibration or noise',
    causes: [
      { id: 'not-level', title: 'Machine not level', why: 'A washer that rocks on its feet shakes hard and can walk across the floor during spin.', weight: 4 },
      { id: 'shock-absorbers', title: 'Worn shock absorbers or suspension springs', why: 'These parts steady the tub. When they wear out, the tub bangs against the cabinet on every spin.', weight: 4, boostIf: { status: ['noise'], ageAtLeast: '5to10' } },
      { id: 'tub-bearing', title: 'Failing tub bearing', why: 'A loud roar or grinding that gets worse with spin speed points to the tub bearing.', weight: 3, boostIf: { issues: ['washer-leaking'], ageAtLeast: '10plus' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Adjust the feet so the washer sits level and does not rock.',
      'Check that the shipping bolts were removed on a newer front loader.',
      'Wash heavy items with a few lighter ones so the load spreads out.',
    ],
    proOnly: ['Replacing shock absorbers or suspension springs', 'Replacing the tub bearing'],
    cost: { description: 'Shock absorber or spring replacement, or a bearing job on older machines.', parts: ['low', 'high'], labourHours: [1, 4], complexity: 'moderate' },
  },
  {
    id: 'washer-door-lock',
    appliance: 'washer',
    label: 'Door will not lock',
    causes: [
      { id: 'door-lock-assembly', title: 'Failed door lock assembly', why: 'The lock has a small motor and switch that wear out, and the washer will not start until it confirms the lock.', weight: 5, boostIf: { issues: ['washer-not-spinning'], status: ['stopped'] } },
      { id: 'door-strike', title: 'Bent or broken door strike', why: 'If the hook on the door is bent or cracked, it cannot catch the lock.', weight: 3 },
      { id: 'control-board', title: 'Control board not sending the lock signal', why: 'When a new lock does not fix it, the board that powers the lock may be the problem.', weight: 2, boostIf: { status: ['intermittent'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check that no clothing is caught between the door and the boot seal.',
      'Unplug the washer for a few minutes to reset the control.',
      'Look at the door strike for cracks or bends.',
    ],
    proOnly: ['Testing and replacing the door lock assembly', 'Diagnosing the control board'],
    cost: { description: 'Door lock assembly replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1], complexity: 'simple' },
  },
  {
    id: 'washer-clothes-dirty',
    appliance: 'washer',
    label: 'Clothes still dirty',
    causes: [
      { id: 'overloading', title: 'Overloaded drum or wrong detergent', why: 'Packed loads cannot move through the water, and too little or the wrong type of detergent leaves soil behind.', weight: 4 },
      { id: 'low-water', title: 'Low water fill', why: 'Clogged inlet screens or a weak inlet valve leave too little water for a proper wash.', weight: 3, boostIf: { issues: ['washer-not-filling'], status: ['poor'] } },
      { id: 'agitator', title: 'Worn agitator dogs or impeller', why: 'On top loaders, worn plastic parts let the agitator spin freely without moving the clothes.', weight: 3, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Run smaller loads and follow the detergent dose on the label.',
      'Run a cleaning cycle with washer cleaner to clear residue.',
      'Turn off the water valves and check the inlet hose screens for debris.',
    ],
    proOnly: ['Replacing the water inlet valve', 'Replacing agitator parts or the impeller'],
    cost: { description: 'Inlet valve or agitator part replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'washer-not-filling',
    appliance: 'washer',
    label: 'Will not fill',
    causes: [
      { id: 'supply-valves', title: 'Supply valves closed or hoses kinked', why: 'A valve turned partway off or a hose crushed behind the machine stops water before it reaches the washer.', weight: 4 },
      { id: 'inlet-screens', title: 'Clogged inlet screens', why: 'Small screens at the hose connection trap sediment, especially in homes with hard water.', weight: 4, boostIf: { status: ['poor'] } },
      { id: 'inlet-valve', title: 'Failed water inlet valve', why: 'If water pressure is good and the screens are clean, the inlet valve may not be opening.', weight: 3, boostIf: { issues: ['washer-clothes-dirty'], status: ['stopped'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Make sure both supply valves behind the washer are fully open.',
      'Straighten any kinks in the fill hoses.',
      'Turn off the valves, remove the hoses and rinse the inlet screens.',
    ],
    proOnly: ['Testing and replacing the water inlet valve', 'Checking the water level sensor'],
    cost: { description: 'Water inlet valve or level sensor replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },

  // Dryer (7)
  {
    id: 'dryer-no-heat',
    appliance: 'dryer',
    label: 'No heat',
    causes: [
      { id: 'thermal-fuse', title: 'Blown thermal fuse', why: 'The fuse cuts the heat when the dryer overheats, usually because the vent is restricted.', weight: 5, boostIf: { issues: ['dryer-overheating', 'dryer-slow-drying'] } },
      { id: 'heating-element', title: 'Burned out heating element or gas igniter', why: 'Electric dryers lose heat when the element breaks. Gas dryers lose it when the igniter or gas valve coils fail.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
      { id: 'breaker', title: 'Tripped breaker on one leg', why: 'Electric dryers use a double breaker. If one side trips, the drum can turn while the heat stays off.', weight: 2 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check the breaker panel for a tripped dryer breaker and reset it once.',
      'Clean the lint screen and make sure the vent hood outside opens when the dryer runs.',
      'Straighten any crushed sections of the vent hose behind the dryer.',
    ],
    proOnly: ['Testing the thermal fuse, element and thermostats', 'Servicing the gas igniter or gas valve coils'],
    cost: { description: 'Thermal fuse, heating element or igniter replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'dryer-slow-drying',
    appliance: 'dryer',
    label: 'Takes too long to dry',
    causes: [
      { id: 'clogged-vent', title: 'Clogged dryer vent', why: 'Lint in the vent line keeps moist air inside the drum, so loads take two or three cycles to dry.', weight: 5, boostIf: { issues: ['dryer-overheating'], status: ['poor'] } },
      { id: 'heating-weak', title: 'Weak heating element or gas valve coil', why: 'A partly failed element or coil gives some heat but not enough to dry a full load in one cycle.', weight: 3, boostIf: { issues: ['dryer-no-heat'], ageAtLeast: '5to10' } },
      { id: 'moisture-sensor', title: 'Dirty moisture sensor', why: 'Fabric softener film on the sensor bars can end auto dry cycles early.', weight: 2 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Clean the lint screen before every load and wash it with soap if water beads on it.',
      'Unplug the dryer and disconnect and clear the vent hose behind it.',
      'Wipe the metal moisture sensor bars inside the drum with rubbing alcohol.',
    ],
    proOnly: ['Cleaning the full vent run to the roof or wall', 'Testing the heating circuit'],
    cost: { description: 'Vent cleaning, or a heating element or coil replacement.', parts: ['none', 'moderate'], labourHours: [0.5, 2], complexity: 'simple' },
  },
  {
    id: 'dryer-overheating',
    appliance: 'dryer',
    label: 'Overheating',
    causes: [
      { id: 'restricted-vent', title: 'Restricted airflow', why: 'Lint in the vent or a crushed hose traps hot air in the cabinet, which is a common cause of dryer fires.', weight: 5, boostIf: { issues: ['dryer-slow-drying'], status: ['unsafe'] } },
      { id: 'cycling-thermostat', title: 'Failed cycling thermostat', why: 'This thermostat turns the heat on and off. If it sticks, the heat stays on too long.', weight: 3, boostIf: { ageAtLeast: '5to10' } },
      { id: 'element-grounded', title: 'Shorted heating element', why: 'An element touching the housing can keep heating even after the dryer shuts off.', weight: 2, boostIf: { issues: ['dryer-burning-smell'], status: ['unsafe'] } },
    ],
    urgency: 'stop',
    safeChecks: [
      'Stop using the dryer and unplug it until it has been checked.',
      'Clean the lint screen and the lint trap housing.',
      'Check the outside vent hood for lint, nests or a stuck flap.',
    ],
    proOnly: ['Testing thermostats and the heating element', 'Full vent line cleaning'],
    cost: { description: 'Cycling thermostat or high limit replacement, plus vent cleaning.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'dryer-drum-not-turning',
    appliance: 'dryer',
    label: 'Drum not turning',
    causes: [
      { id: 'drive-belt', title: 'Broken drive belt', why: 'If the motor runs but the drum is still and turns freely by hand, the belt has likely snapped.', weight: 5 },
      { id: 'idler-pulley', title: 'Seized idler pulley', why: 'The idler keeps the belt tight. When it seizes, the belt slips or burns through.', weight: 3, boostIf: { issues: ['dryer-noise'], status: ['noise'] } },
      { id: 'drive-motor', title: 'Failed drive motor', why: 'A hum with no movement, or no sound at all, can mean the motor has failed.', weight: 2, boostIf: { issues: ['dryer-will-not-start'], ageAtLeast: '10plus' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Unplug the dryer and turn the empty drum by hand. If it spins very easily, the belt is likely broken.',
      'Check the drum for a stuck item like a shoe wedged at the back.',
    ],
    proOnly: ['Replacing the drive belt and idler pulley', 'Replacing the drive motor'],
    cost: { description: 'Drive belt and idler pulley replacement.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'dryer-burning-smell',
    appliance: 'dryer',
    label: 'Burning smell',
    causes: [
      { id: 'lint-buildup', title: 'Lint buildup near the heat source', why: 'Lint inside the cabinet or vent can scorch on the element or burner, and it can catch fire.', weight: 5, boostIf: { issues: ['dryer-overheating', 'dryer-slow-drying'] } },
      { id: 'belt-slipping', title: 'Belt or pulley rubbing', why: 'A worn belt or seized pulley creates friction and a hot rubber smell.', weight: 3, boostIf: { issues: ['dryer-noise', 'dryer-drum-not-turning'] } },
      { id: 'motor-overheating', title: 'Motor or wiring overheating', why: 'A burning plastic or electrical smell can come from a failing motor or a damaged wire connection.', weight: 2, boostIf: { status: ['unsafe'], ageAtLeast: '10plus' } },
    ],
    urgency: 'stop',
    safeChecks: [
      'Stop the dryer, unplug it and do not run it again until it has been checked.',
      'If you see smoke or flame, leave the home and call 911.',
      'Once it is cool, clean the lint screen and check the vent hose for lint.',
    ],
    proOnly: ['Cleaning lint from inside the cabinet', 'Inspecting wiring, the motor and the heat source'],
    cost: { description: 'Internal lint cleaning and belt, pulley or wiring repair.', parts: ['none', 'moderate'], labourHours: [1, 2.5], complexity: 'moderate' },
  },
  {
    id: 'dryer-noise',
    appliance: 'dryer',
    label: 'Unusual noise',
    causes: [
      { id: 'drum-rollers', title: 'Worn drum rollers or glides', why: 'A thumping or rumbling that follows the drum rotation usually comes from worn rollers or drum glides.', weight: 4, boostIf: { status: ['noise'], ageAtLeast: '5to10' } },
      { id: 'idler-pulley', title: 'Squealing idler pulley', why: 'A high squeal that starts with the drum points to a dry or worn idler pulley.', weight: 4, boostIf: { status: ['noise'] } },
      { id: 'loose-item', title: 'Object in the drum or blower', why: 'Coins, buttons and pins can slip past the drum edge and rattle in the blower housing.', weight: 3 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Empty pockets before drying and check the drum for loose items.',
      'Level the dryer so it does not rock.',
      'Unplug the dryer and look in the lint screen slot for anything that has fallen in.',
    ],
    proOnly: ['Replacing drum rollers, glides and the idler pulley', 'Clearing the blower wheel'],
    cost: { description: 'Drum roller, glide or idler pulley replacement.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'dryer-will-not-start',
    appliance: 'dryer',
    label: 'Will not start',
    causes: [
      { id: 'door-switch', title: 'Faulty door switch', why: 'The dryer will not run unless the door switch tells it the door is closed.', weight: 4 },
      { id: 'thermal-fuse', title: 'Blown thermal fuse', why: 'On many models the thermal fuse cuts power to the motor too, not only the heat.', weight: 4, boostIf: { issues: ['dryer-overheating', 'dryer-no-heat'] } },
      { id: 'start-switch', title: 'Start switch or control fault', why: 'A worn start button or a failed control board can stop the start signal from reaching the motor.', weight: 2, boostIf: { status: ['stopped'], ageAtLeast: '10plus' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check the breaker and make sure the plug is fully in the outlet.',
      'Check that the control lock or child lock is not turned on.',
      'Press the door closed firmly and listen for the switch click.',
    ],
    proOnly: ['Testing the door switch, thermal fuse and start switch', 'Diagnosing the control board'],
    cost: { description: 'Door switch, thermal fuse or start switch replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },

  // Dishwasher (7)
  {
    id: 'dishwasher-not-draining',
    appliance: 'dishwasher',
    label: 'Not draining',
    causes: [
      { id: 'clogged-filter', title: 'Clogged filter', why: 'Food and labels collect in the filter at the bottom of the tub and stop water from reaching the pump.', weight: 5, boostIf: { issues: ['dishwasher-odor', 'dishwasher-not-cleaning'] } },
      { id: 'drain-hose', title: 'Kinked hose or blocked disposal inlet', why: 'A kinked drain hose under the sink, or a new disposal with its knockout plug still in, keeps water in the tub.', weight: 4 },
      { id: 'drain-pump', title: 'Failed drain pump', why: 'If the filter and hose are clear and you hear a hum, the pump may be jammed or burned out.', weight: 3, boostIf: { issues: ['dishwasher-noise'], status: ['noise'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Turn off the dishwasher, remove the bottom rack and clean the filter.',
      'Run the garbage disposal, since the dishwasher often drains through it.',
      'Look under the sink for a kinked or sagging drain hose.',
    ],
    proOnly: ['Replacing the drain pump', 'Clearing the drain hose and check valve'],
    cost: { description: 'Drain pump replacement or clearing a blockage.', parts: ['none', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'dishwasher-leaking',
    appliance: 'dishwasher',
    label: 'Leaking',
    causes: [
      { id: 'door-gasket', title: 'Worn door gasket', why: 'A cracked or loose gasket lets water out at the bottom corners of the door.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
      { id: 'wrong-detergent', title: 'Wrong detergent or excess suds', why: 'Hand dish soap or too much detergent makes suds that push past the door seal.', weight: 3 },
      { id: 'pump-or-inlet', title: 'Pump seal or inlet valve leak', why: 'Water under the unit with a dry door edge often comes from the pump seal, a hose clamp or the inlet valve.', weight: 3, boostIf: { issues: ['dishwasher-not-draining', 'dishwasher-noise'], status: ['leaking'] } },
    ],
    urgency: 'today',
    safeChecks: [
      'Turn off the dishwasher at the breaker or switch and close the water valve under the sink.',
      'Check that the dishwasher is level so water does not pool at the door.',
      'Use only automatic dishwasher detergent and wipe the door gasket clean.',
    ],
    proOnly: ['Replacing the door gasket, pump seal or inlet valve', 'Checking hose connections under the unit'],
    cost: { description: 'Door gasket, pump seal or inlet valve replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 2], complexity: 'moderate' },
  },
  {
    id: 'dishwasher-not-cleaning',
    appliance: 'dishwasher',
    label: 'Dishes not cleaning',
    causes: [
      { id: 'clogged-filter-arms', title: 'Clogged filter or spray arms', why: 'Debris in the filter and spray arm holes weakens the spray that does the cleaning.', weight: 5, boostIf: { issues: ['dishwasher-not-draining', 'dishwasher-odor'] } },
      { id: 'cold-water', title: 'Water not hot enough', why: 'Detergent works poorly in cool water, and the heater may not be making up the difference.', weight: 3, boostIf: { issues: ['dishwasher-not-drying'] } },
      { id: 'circulation-pump', title: 'Weak circulation pump', why: 'If the spray arms barely turn even when clean, the wash pump may be failing.', weight: 2, boostIf: { status: ['poor'], ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Clean the filter and rinse the spray arms, clearing holes with a toothpick.',
      'Run the kitchen tap until the water is hot before starting a cycle.',
      'Load dishes so nothing blocks the spray arms or the detergent door.',
    ],
    proOnly: ['Testing the circulation pump and heater', 'Replacing the wash motor'],
    cost: { description: 'Spray arm or heater replacement, or a circulation pump in harder cases.', parts: ['low', 'high'], labourHours: [0.5, 2], complexity: 'moderate' },
  },
  {
    id: 'dishwasher-not-drying',
    appliance: 'dishwasher',
    label: 'Not drying',
    causes: [
      { id: 'rinse-aid', title: 'Empty rinse aid dispenser', why: 'Many newer dishwashers rely on rinse aid to shed water, especially on plastics.', weight: 5 },
      { id: 'heating-element', title: 'Failed heating element', why: 'Models with a heated dry setting leave dishes wet when the element burns out.', weight: 3, boostIf: { issues: ['dishwasher-not-cleaning'], ageAtLeast: '5to10' } },
      { id: 'vent-fan', title: 'Vent or fan fault', why: 'Some models open a vent or run a fan to remove steam. If it sticks, moisture stays inside.', weight: 2 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Fill the rinse aid dispenser.',
      'Turn on the heated dry option if your model has one.',
      'Crack the door open at the end of the cycle to let steam escape.',
    ],
    proOnly: ['Testing the heating element and high limit thermostat', 'Replacing the vent or fan assembly'],
    cost: { description: 'Heating element or vent assembly replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'dishwasher-noise',
    appliance: 'dishwasher',
    label: 'Strange noise',
    causes: [
      { id: 'debris-in-pump', title: 'Glass or debris in the pump', why: 'Broken glass, bones or seeds in the chopper or pump cause grinding or rattling during wash and drain.', weight: 4, boostIf: { issues: ['dishwasher-not-draining'], status: ['noise'] } },
      { id: 'spray-arm', title: 'Spray arm hitting dishes', why: 'A regular knocking or tapping usually means a spray arm is hitting a tall item.', weight: 4 },
      { id: 'pump-bearing', title: 'Worn pump motor bearing', why: 'A loud hum or screech that stays the same with an empty tub points to the motor.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Turn off the dishwasher, remove the bottom rack and filter, and look for glass or debris.',
      'Spin each spray arm by hand to make sure it clears the dishes.',
    ],
    proOnly: ['Clearing debris from the pump housing', 'Replacing the circulation or drain pump'],
    cost: { description: 'Clearing the pump or replacing a pump motor.', parts: ['none', 'high'], labourHours: [0.5, 2], complexity: 'moderate' },
  },
  {
    id: 'dishwasher-odor',
    appliance: 'dishwasher',
    label: 'Bad odor',
    causes: [
      { id: 'dirty-filter', title: 'Dirty filter and sump', why: 'Trapped food in the filter starts to rot between cycles.', weight: 5, boostIf: { issues: ['dishwasher-not-cleaning'] } },
      { id: 'standing-water', title: 'Standing water in the tub', why: 'Water that does not drain sits in the bottom and smells within a day or two.', weight: 3, boostIf: { issues: ['dishwasher-not-draining'] } },
      { id: 'drain-loop', title: 'Missing high drain loop', why: 'Without a high loop under the sink, sink or disposal water can flow back into the dishwasher.', weight: 2 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Clean the filter and wipe the door gasket and the bottom of the door.',
      'Run an empty hot cycle with a dishwasher cleaner.',
      'Check under the sink that the drain hose loops up high before it connects.',
    ],
    proOnly: ['Clearing the drain path and check valve', 'Correcting the drain hose installation'],
    cost: { description: 'Drain cleaning or a check valve replacement.', parts: ['none', 'low'], labourHours: [0.5, 1], complexity: 'simple' },
  },
  {
    id: 'dishwasher-will-not-start',
    appliance: 'dishwasher',
    label: 'Will not start',
    causes: [
      { id: 'door-latch', title: 'Door latch or switch fault', why: 'The dishwasher will not start until the door latch switch confirms the door is closed.', weight: 4 },
      { id: 'control-lock', title: 'Control lock or delay start on', why: 'Child lock or a delay setting makes the dishwasher look dead when it is waiting.', weight: 3 },
      { id: 'control-board', title: 'Control board or thermal fuse', why: 'A failed board or a blown thermal fuse can leave the panel blank.', weight: 3, boostIf: { status: ['stopped'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check the breaker, wall switch or outlet that powers the dishwasher.',
      'Turn off control lock and cancel any delay start.',
      'Close the door firmly and make sure nothing blocks the latch.',
    ],
    proOnly: ['Testing the door switch and thermal fuse', 'Replacing the control board'],
    cost: { description: 'Door latch replacement, or a control board in harder cases.', parts: ['low', 'high'], labourHours: [0.5, 1.5], complexity: 'moderate' },
  },

  // Freezer (6)
  {
    id: 'freezer-not-freezing',
    appliance: 'freezer',
    label: 'Not freezing',
    causes: [
      { id: 'dirty-condenser', title: 'Dirty condenser coils', why: 'Dust on the coils keeps heat in, so the freezer cannot pull its temperature down.', weight: 4, boostIf: { issues: ['freezer-running-constantly'], ageAtLeast: '5to10' } },
      { id: 'defrost-fault', title: 'Defrost system fault', why: 'On frost-free freezers, a failed defrost part lets ice block the coil and the airflow.', weight: 4, boostIf: { issues: ['freezer-frost-buildup'] } },
      { id: 'sealed-system', title: 'Compressor or refrigerant problem', why: 'If the compressor runs but nothing gets cold, there may be a leak or a failing compressor.', weight: 2, boostIf: { status: ['stopped'], ageAtLeast: '10plus' } },
    ],
    urgency: 'today',
    safeChecks: [
      'Check that the temperature setting has not been moved.',
      'Unplug the freezer and vacuum the condenser coils.',
      'Keep the lid or door closed and move food to a cooler if it begins to thaw.',
    ],
    proOnly: ['Testing the defrost system and fans', 'Sealed system leak repair and recharge'],
    cost: { description: 'Defrost or fan repair, or sealed system work if the compressor or refrigerant is the cause.', parts: ['low', 'major'], labourHours: [1, 4], complexity: 'complex' },
  },
  {
    id: 'freezer-frost-buildup',
    appliance: 'freezer',
    label: 'Heavy frost buildup',
    causes: [
      { id: 'door-gasket', title: 'Leaking door or lid gasket', why: 'Humid air slipping past the seal freezes on the walls and food, starting near the door.', weight: 5, boostIf: { issues: ['freezer-door-seal'] } },
      { id: 'defrost-heater', title: 'Failed defrost heater or thermostat', why: 'On frost-free models, a failed defrost part lets frost cover the back panel.', weight: 3, boostIf: { issues: ['freezer-not-freezing'] } },
      { id: 'door-opening', title: 'Frequent door opening', why: 'Opening the door often, especially in a humid garage, brings in moisture that turns to frost.', weight: 2 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check that the door or lid closes fully and the gasket is clean.',
      'Defrost a manual-defrost freezer once frost passes about a quarter inch.',
      'Keep the freezer away from heat sources and direct sun.',
    ],
    proOnly: ['Replacing the door gasket', 'Testing and replacing defrost parts'],
    cost: { description: 'Gasket replacement or a defrost heater or thermostat replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 2], complexity: 'moderate' },
  },
  {
    id: 'freezer-running-constantly',
    appliance: 'freezer',
    label: 'Running all the time',
    causes: [
      { id: 'dirty-condenser', title: 'Dirty condenser coils', why: 'With dirty coils the freezer has to run much longer to remove the same heat.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
      { id: 'door-gasket', title: 'Worn door gasket', why: 'Warm air leaking in makes the compressor run almost nonstop.', weight: 3, boostIf: { issues: ['freezer-door-seal', 'freezer-frost-buildup'] } },
      { id: 'low-refrigerant', title: 'Low refrigerant or weak compressor', why: 'A unit that runs constantly and still struggles to stay cold may be low on refrigerant.', weight: 2, boostIf: { issues: ['freezer-not-freezing'], ageAtLeast: '10plus' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Unplug the freezer and clean the condenser coils.',
      'Leave a few inches of space around the freezer for airflow.',
      'Check the gasket with a strip of paper all the way around the door.',
    ],
    proOnly: ['Checking refrigerant charge and compressor performance', 'Replacing the defrost thermostat or control'],
    cost: { description: 'Gasket or thermostat replacement, or sealed system work for low refrigerant.', parts: ['low', 'major'], labourHours: [0.5, 4], complexity: 'moderate' },
  },
  {
    id: 'freezer-noise',
    appliance: 'freezer',
    label: 'Loud or unusual noise',
    causes: [
      { id: 'fan-motor', title: 'Worn fan motor', why: 'Squealing or grinding from inside or behind the freezer usually comes from a fan motor or blade.', weight: 4, boostIf: { status: ['noise'], ageAtLeast: '5to10' } },
      { id: 'not-level', title: 'Unit not level', why: 'A freezer that rocks or touches a wall can buzz or rattle every time it runs.', weight: 3 },
      { id: 'compressor', title: 'Compressor noise', why: 'A loud knock at startup or a harsh buzz can be a sign of compressor wear.', weight: 2, boostIf: { issues: ['freezer-running-constantly'], ageAtLeast: '10plus' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Level the freezer and move it a few inches from the wall.',
      'Unplug it and clear debris from around the condenser fan.',
    ],
    proOnly: ['Replacing fan motors', 'Diagnosing compressor noise'],
    cost: { description: 'Fan motor replacement in most cases.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'freezer-leaking-water',
    appliance: 'freezer',
    label: 'Water on the floor',
    causes: [
      { id: 'drain-clog', title: 'Clogged defrost drain', why: 'Defrost water cannot reach the drain pan and overflows inside or under the freezer.', weight: 4, boostIf: { issues: ['freezer-frost-buildup'], status: ['leaking'] } },
      { id: 'drain-plug', title: 'Open or missing drain plug', why: 'Chest freezers have a drain plug near the bottom that can be left open after defrosting.', weight: 3 },
      { id: 'thawing', title: 'Unit warming and thawing', why: 'If the freezer is losing temperature, melting frost and food can leak out.', weight: 3, boostIf: { issues: ['freezer-not-freezing'] } },
    ],
    urgency: 'today',
    safeChecks: [
      'Unplug the freezer and dry the area to prevent slips.',
      'On a chest freezer, check that the drain plug is closed.',
      'Check whether food is still frozen solid and move it if not.',
    ],
    proOnly: ['Clearing the defrost drain', 'Diagnosing loss of cooling'],
    cost: { description: 'Clearing the defrost drain or replacing the drain pan.', parts: ['none', 'low'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'freezer-door-seal',
    appliance: 'freezer',
    label: 'Door or lid not sealing',
    causes: [
      { id: 'worn-gasket', title: 'Worn or torn gasket', why: 'Old gaskets shrink, crack and pull away from the corners.', weight: 5, boostIf: { ageAtLeast: '5to10' } },
      { id: 'hinge', title: 'Loose or bent hinge', why: 'A worn hinge lets the door or lid sit crooked so one side does not seal.', weight: 3 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Clean the gasket with warm soapy water and check for tears.',
      'Close the door on a strip of paper and find the spots where it slides out.',
      'Make sure food or ice is not stopping the door from closing.',
    ],
    proOnly: ['Replacing the gasket', 'Replacing or adjusting hinges'],
    cost: { description: 'Gasket or hinge replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },

  // Oven (6)
  {
    id: 'oven-not-heating',
    appliance: 'oven',
    label: 'Not heating',
    causes: [
      { id: 'bake-element', title: 'Burned out bake element or weak igniter', why: 'Electric ovens lose heat when the bake element breaks. Gas ovens fail to light when the igniter gets too weak to open the valve.', weight: 5, boostIf: { status: ['stopped'], ageAtLeast: '5to10' } },
      { id: 'temp-sensor', title: 'Failed temperature sensor', why: 'If the sensor reads wrong, the control may not turn the heat on or may shut it off early.', weight: 3, boostIf: { issues: ['oven-temperature-off', 'oven-error-code'] } },
      { id: 'control-board', title: 'Control board relay fault', why: 'A failed relay on the board can stop power from reaching the element or igniter.', weight: 2, boostIf: { issues: ['oven-error-code'], status: ['intermittent'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check the breaker for the oven and reset it once if it tripped.',
      'Make sure the oven is not in Sabbath mode, demo mode or a timed bake delay.',
      'Look at the bake element for breaks or blisters with the oven off and cool.',
    ],
    proOnly: ['Replacing the bake element or gas igniter', 'Testing the sensor and control board'],
    cost: { description: 'Bake element or igniter replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'oven-uneven-baking',
    appliance: 'oven',
    label: 'Uneven baking',
    causes: [
      { id: 'element-or-burner', title: 'Weak element or burner', why: 'A bake or broil element that heats in only some spots, or a gas burner with a weak flame, browns food unevenly.', weight: 4, boostIf: { issues: ['oven-not-heating'] } },
      { id: 'convection-fan', title: 'Convection fan not running', why: 'On convection ovens, a stopped fan leaves hot and cool spots.', weight: 3, boostIf: { status: ['noise'] } },
      { id: 'rack-and-pans', title: 'Rack position or dark pans', why: 'Dark pans, crowded racks and low rack positions all change how heat reaches the food.', weight: 3 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Bake on the middle rack and leave space between pans and the oven walls.',
      'Use an oven thermometer to see how far the temperature is off.',
      'Avoid lining the oven floor with foil, which blocks airflow.',
    ],
    proOnly: ['Replacing elements or burner parts', 'Replacing the convection fan motor'],
    cost: { description: 'Element, burner part or convection fan replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'oven-temperature-off',
    appliance: 'oven',
    label: 'Temperature not accurate',
    causes: [
      { id: 'temp-sensor', title: 'Faulty temperature sensor', why: 'A sensor that drifts makes the oven run hot or cold compared with the setting.', weight: 5, boostIf: { issues: ['oven-uneven-baking'] } },
      { id: 'calibration', title: 'Calibration offset', why: 'Most ovens allow a small offset, and it may have been changed or never set.', weight: 3 },
      { id: 'door-seal', title: 'Worn door gasket', why: 'Heat escaping around the door makes the oven slow to reach temperature.', weight: 2, boostIf: { ageAtLeast: '10plus' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Check the temperature with an oven thermometer after 20 minutes of preheat.',
      'Use the calibration setting in the owner manual to adjust a small offset.',
      'Look at the door gasket for gaps or flattened spots.',
    ],
    proOnly: ['Testing and replacing the temperature sensor', 'Replacing the door gasket'],
    cost: { description: 'Temperature sensor replacement.', parts: ['low', 'low'], labourHours: [0.5, 1], complexity: 'simple' },
  },
  {
    id: 'oven-door-locked',
    appliance: 'oven',
    label: 'Door locked after self-clean',
    causes: [
      { id: 'still-hot', title: 'Oven still cooling down', why: 'The door stays locked until the oven drops below a safe temperature after a cleaning cycle.', weight: 4 },
      { id: 'lock-motor', title: 'Failed door lock motor or switch', why: 'If the oven is cool and the lock stays on, the lock motor or its switch may have failed.', weight: 4, boostIf: { issues: ['oven-error-code'], status: ['stopped'] } },
      { id: 'control-board', title: 'Control board fault', why: 'High heat during self-clean can damage the board that controls the lock.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Wait at least an hour for the oven to cool fully.',
      'Turn off the oven breaker for a few minutes to reset the control.',
      'Do not force the door handle, since that can bend the latch.',
    ],
    proOnly: ['Replacing the door lock assembly', 'Diagnosing the control board'],
    cost: { description: 'Door lock assembly replacement, or a control board in harder cases.', parts: ['moderate', 'high'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'oven-error-code',
    appliance: 'oven',
    label: 'Error code displayed',
    causes: [
      { id: 'sensor-fault', title: 'Temperature sensor circuit fault', why: 'The most common oven codes point to a sensor that reads open or shorted.', weight: 4, boostIf: { issues: ['oven-temperature-off', 'oven-not-heating'] } },
      { id: 'door-lock', title: 'Door lock fault', why: 'Lock codes appear when the latch does not reach the position the control expects.', weight: 3, boostIf: { issues: ['oven-door-locked'] } },
      { id: 'control-board', title: 'Control board or keypad fault', why: 'Stuck keys and board failures also show as codes, often after heat or moisture exposure.', weight: 2, boostIf: { status: ['intermittent'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Write down the code and look it up in the error code decoder tool on this site.',
      'Turn off the oven breaker for five minutes to see if the code clears.',
    ],
    proOnly: ['Testing the sensor, lock and control', 'Replacing the control board or keypad'],
    cost: { description: 'Sensor or lock replacement, or a control board or keypad.', parts: ['low', 'high'], labourHours: [0.5, 2], complexity: 'moderate' },
  },
  {
    id: 'oven-sparking',
    appliance: 'oven',
    label: 'Sparking or burning smell',
    causes: [
      { id: 'element-short', title: 'Shorting bake or broil element', why: 'An element that sparks or glows bright in one spot is breaking down and can burn through.', weight: 5, boostIf: { status: ['unsafe'], ageAtLeast: '5to10' } },
      { id: 'wiring', title: 'Damaged wiring or terminal', why: 'A loose or burned connection behind the element or panel can arc and smell like burning plastic.', weight: 3, boostIf: { issues: ['oven-not-heating'], status: ['unsafe'] } },
      { id: 'food-residue', title: 'Food or grease burning off', why: 'Spills on the element or oven floor smoke and smell but stop once burned off.', weight: 2 },
    ],
    urgency: 'stop',
    safeChecks: [
      'Turn the oven off and switch off its breaker.',
      'If you see flames, keep the door closed and call 911 if the fire does not go out.',
      'Once cool, wipe up spills on the oven floor.',
    ],
    proOnly: ['Replacing the damaged element', 'Inspecting and repairing wiring and terminals'],
    cost: { description: 'Element replacement, with wiring repair if a terminal has burned.', parts: ['low', 'moderate'], labourHours: [0.5, 2], complexity: 'moderate' },
  },

  // Stove (5)
  {
    id: 'stove-burner-not-heating',
    appliance: 'stove',
    label: 'Electric burner not heating',
    causes: [
      { id: 'burner-receptacle', title: 'Loose burner or burned receptacle', why: 'Coil burners plug into a receptacle that can loosen or burn, so the coil gets no power.', weight: 4, boostIf: { status: ['intermittent'] } },
      { id: 'burner-element', title: 'Failed burner element', why: 'A coil or radiant element that stays dark when others work has likely burned out.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
      { id: 'infinite-switch', title: 'Failed burner switch', why: 'The switch behind the knob controls power. If it fails, the burner stays off or stays on high.', weight: 3, boostIf: { issues: ['stove-burner-stuck-high'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'With the stove off and cool, unplug the coil and plug it back in firmly.',
      'Swap the coil with a working burner of the same size to see if the coil or the socket is the problem.',
      'Check the breaker for the range.',
    ],
    proOnly: ['Replacing the burner receptacle', 'Replacing the burner switch'],
    cost: { description: 'Burner, receptacle or switch replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1], complexity: 'simple' },
  },
  {
    id: 'stove-gas-burner-not-lighting',
    appliance: 'stove',
    label: 'Gas burner will not light',
    causes: [
      { id: 'dirty-burner', title: 'Dirty or wet burner ports', why: 'Food and water in the burner ports or around the igniter block the gas or the spark.', weight: 5 },
      { id: 'cap-misaligned', title: 'Burner cap out of place', why: 'A cap that sits crooked after cleaning stops the flame from spreading.', weight: 3 },
      { id: 'igniter', title: 'Cracked igniter or failed spark module', why: 'If there is no click or a weak spark, the igniter or spark module may have failed.', weight: 3, boostIf: { status: ['stopped'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Turn the knobs off, let the burner cool and clean the ports with a soft brush.',
      'Dry the burner fully after cleaning and seat the cap so it sits flat.',
      'Do not keep trying to light a burner that is giving off gas without a flame.',
    ],
    proOnly: ['Replacing the igniter or spark module', 'Checking the gas valve and supply'],
    cost: { description: 'Igniter or spark module replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'stove-gas-smell',
    appliance: 'stove',
    label: 'Gas smell',
    causes: [
      { id: 'burner-left-on', title: 'Knob left on or flame went out', why: 'A knob turned slightly on or a burner that blew out lets unburned gas into the room.', weight: 4 },
      { id: 'leak-at-connection', title: 'Leak at a connector or valve', why: 'A worn flexible connector or a failing valve can leak gas behind or under the stove.', weight: 3, boostIf: { status: ['unsafe'], ageAtLeast: '10plus' } },
    ],
    urgency: 'stop',
    safeChecks: [
      'Make sure every knob is fully off.',
      'Do not light flames or flip switches, and open windows if the smell is faint.',
      'If the smell is strong or does not fade, leave the home and call the gas utility or 911 from outside.',
    ],
    proOnly: ['Finding and repairing gas leaks', 'Replacing the gas connector or valves'],
    cost: { description: 'Gas connector or valve repair after a leak check.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'stove-oven-not-heating',
    appliance: 'stove',
    label: 'Oven part not heating',
    causes: [
      { id: 'igniter-or-element', title: 'Weak igniter or broken bake element', why: 'Ranges share the same oven parts as wall ovens, and the igniter or element is the usual failure.', weight: 5, boostIf: { ageAtLeast: '5to10' } },
      { id: 'temp-sensor', title: 'Temperature sensor fault', why: 'A bad sensor can stop the control from calling for heat.', weight: 3, boostIf: { status: ['intermittent'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check the oven clock is set and no delay or lock mode is active.',
      'With the oven off and cool, look for breaks or blisters on the bake element.',
    ],
    proOnly: ['Replacing the gas igniter or bake element', 'Testing the sensor and control'],
    cost: { description: 'Igniter or bake element replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'stove-burner-stuck-high',
    appliance: 'stove',
    label: 'Burner stuck on high',
    causes: [
      { id: 'infinite-switch', title: 'Failed burner switch', why: 'When the switch contacts weld together, the burner runs at full power no matter where the knob is.', weight: 5, boostIf: { issues: ['stove-burner-not-heating'] } },
      { id: 'control-board', title: 'Control board relay stuck', why: 'On ranges with touch controls, a stuck relay can keep a burner on.', weight: 2, boostIf: { status: ['unsafe'] } },
    ],
    urgency: 'today',
    safeChecks: [
      'Turn the burner off and do not use it until it is repaired.',
      'If it will not shut off, switch off the range breaker.',
    ],
    proOnly: ['Replacing the burner switch', 'Diagnosing the control board'],
    cost: { description: 'Burner switch replacement.', parts: ['low', 'low'], labourHours: [0.5, 1], complexity: 'simple' },
  },

  // Cooktop (5)
  {
    id: 'cooktop-element-not-heating',
    appliance: 'cooktop',
    label: 'Element or zone not heating',
    causes: [
      { id: 'element', title: 'Burned out element', why: 'A radiant element under the glass can fail on its own, often after years of heavy use.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
      { id: 'switch-or-board', title: 'Switch or control board fault', why: 'If several zones act up at once, the control or switch is more likely than the elements.', weight: 3, boostIf: { issues: ['cooktop-controls-not-responding'] } },
      { id: 'induction-pan', title: 'Pan not compatible with induction', why: 'Induction zones only heat magnetic pans. A magnet should stick to the bottom.', weight: 3 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check the breaker for the cooktop.',
      'On induction, test with a pan a magnet sticks to firmly.',
      'Turn off any control lock.',
    ],
    proOnly: ['Replacing the radiant element or induction coil', 'Replacing the switch or control board'],
    cost: { description: 'Element or switch replacement, or a control board on touch models.', parts: ['moderate', 'high'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'cooktop-gas-burner-not-lighting',
    appliance: 'cooktop',
    label: 'Gas burner will not light',
    causes: [
      { id: 'clogged-ports', title: 'Clogged burner ports', why: 'Boil-overs clog the small ports and keep gas from reaching the spark.', weight: 5 },
      { id: 'igniter', title: 'Cracked igniter', why: 'A cracked igniter clicks weakly or sparks to the wrong spot.', weight: 3, boostIf: { issues: ['cooktop-igniter-clicking'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'With the knobs off and the burner cool, clean the ports and dry them.',
      'Seat the burner cap so it sits flat and centered.',
    ],
    proOnly: ['Replacing the igniter or spark module'],
    cost: { description: 'Igniter replacement.', parts: ['low', 'low'], labourHours: [0.5, 1], complexity: 'simple' },
  },
  {
    id: 'cooktop-cracked-glass',
    appliance: 'cooktop',
    label: 'Cracked glass top',
    causes: [
      { id: 'impact', title: 'Impact or heavy pan drop', why: 'A dropped pot or jar can crack the glass even if the crack starts small.', weight: 4 },
      { id: 'thermal-stress', title: 'Heat stress', why: 'Sugar spills, empty pans on high or cold water on hot glass can stress it until it cracks.', weight: 3 },
    ],
    urgency: 'stop',
    safeChecks: [
      'Stop using the cooktop and turn off its breaker, since cracks can expose live parts.',
      'Do not clean or press on the cracked area.',
    ],
    proOnly: ['Replacing the glass top'],
    cost: { description: 'Glass top replacement.', parts: ['high', 'major'], labourHours: [1, 2.5], complexity: 'moderate' },
  },
  {
    id: 'cooktop-controls-not-responding',
    appliance: 'cooktop',
    label: 'Touch controls not responding',
    causes: [
      { id: 'lock-or-moisture', title: 'Control lock on or moisture on the panel', why: 'Lock mode, water or a pan on the control area stops the touch panel from reading presses.', weight: 4 },
      { id: 'touch-board', title: 'Failed touch control board', why: 'Heat and spills can damage the board under the glass so some or all keys stop working.', weight: 3, boostIf: { status: ['intermittent'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Dry the control area and remove anything resting on it.',
      'Turn off control lock, usually by holding the lock key for a few seconds.',
      'Switch off the breaker for a minute to reset the control.',
    ],
    proOnly: ['Replacing the touch control board'],
    cost: { description: 'Touch control board replacement.', parts: ['moderate', 'high'], labourHours: [0.5, 1.5], complexity: 'moderate' },
  },
  {
    id: 'cooktop-igniter-clicking',
    appliance: 'cooktop',
    label: 'Igniter keeps clicking',
    causes: [
      { id: 'moisture', title: 'Moisture in the igniter or switch', why: 'Water from cleaning or a spill can make the spark switch keep firing.', weight: 4 },
      { id: 'spark-switch', title: 'Faulty spark switch', why: 'A worn switch on the valve stem keeps sending the signal after the burner is lit.', weight: 3, boostIf: { ageAtLeast: '5to10' } },
      { id: 'spark-module', title: 'Failed spark module', why: 'If every burner clicks at once, the shared spark module may be stuck on.', weight: 2, boostIf: { issues: ['cooktop-gas-burner-not-lighting'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Turn off the knobs and let the cooktop dry for a day if it was recently cleaned.',
      'Make sure the burner caps are seated correctly.',
    ],
    proOnly: ['Replacing the spark switch or spark module'],
    cost: { description: 'Spark switch or module replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },

  // Microwave (5)
  {
    id: 'microwave-not-heating',
    appliance: 'microwave',
    label: 'Runs but does not heat',
    causes: [
      { id: 'magnetron', title: 'Failed magnetron', why: 'The magnetron makes the heat. If the light and turntable work but food stays cold, it may have failed.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
      { id: 'diode', title: 'Failed high voltage diode or capacitor', why: 'These parts feed the magnetron, and a loud hum with no heat often points to them.', weight: 3, boostIf: { status: ['noise'] } },
      { id: 'door-switch', title: 'Worn door switch', why: 'A door switch that makes partial contact can let it run without heating.', weight: 2, boostIf: { issues: ['microwave-will-not-start'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Heat a cup of water for one minute to confirm it really is not heating.',
      'Check that the door closes firmly and the latch is not broken.',
    ],
    proOnly: ['Testing the magnetron, diode and capacitor, which store a dangerous charge', 'Replacing door switches'],
    cost: { description: 'Magnetron, diode or capacitor replacement.', parts: ['low', 'high'], labourHours: [0.5, 1.5], complexity: 'moderate' },
  },
  {
    id: 'microwave-sparking',
    appliance: 'microwave',
    label: 'Sparking inside',
    causes: [
      { id: 'waveguide-cover', title: 'Damaged waveguide cover', why: 'Grease on the small cover inside the cavity can burn and spark.', weight: 4 },
      { id: 'metal-or-paint', title: 'Metal item or chipped interior paint', why: 'Foil, twist ties, metal trim on dishes or bare metal where paint has chipped all cause arcing.', weight: 4 },
      { id: 'magnetron', title: 'Failing magnetron', why: 'Sparking with a burning smell from the vents can mean the magnetron is breaking down.', weight: 2, boostIf: { issues: ['microwave-not-heating'], status: ['unsafe'] } },
    ],
    urgency: 'stop',
    safeChecks: [
      'Stop the microwave and unplug it.',
      'Remove any metal and check dishes for metal trim.',
      'Once unplugged, clean grease from the inside walls and the waveguide cover.',
    ],
    proOnly: ['Replacing the waveguide cover or touching up cavity paint', 'Testing the magnetron'],
    cost: { description: 'Waveguide cover replacement or cavity repair.', parts: ['low', 'moderate'], labourHours: [0.5, 1], complexity: 'simple' },
  },
  {
    id: 'microwave-turntable',
    appliance: 'microwave',
    label: 'Turntable not turning',
    causes: [
      { id: 'tray-seating', title: 'Tray or roller ring off track', why: 'The tray only turns when it sits on the coupler and the roller ring sits in its track.', weight: 4 },
      { id: 'turntable-motor', title: 'Failed turntable motor', why: 'If the tray is seated and still will not move, the small motor under the floor has likely failed.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Remove the tray and roller ring, clean them and the track, and set them back in place.',
      'Check the coupler in the center for cracks.',
    ],
    proOnly: ['Replacing the turntable motor'],
    cost: { description: 'Turntable motor or coupler replacement.', parts: ['low', 'low'], labourHours: [0.5, 1], complexity: 'simple' },
  },
  {
    id: 'microwave-buttons',
    appliance: 'microwave',
    label: 'Buttons not responding',
    causes: [
      { id: 'child-lock', title: 'Child lock on', why: 'The control lock makes the keypad ignore presses until it is turned off.', weight: 4 },
      { id: 'keypad', title: 'Worn or damaged keypad', why: 'Steam and grease can wear out the membrane keypad so some keys stop working.', weight: 3, boostIf: { status: ['intermittent'], ageAtLeast: '5to10' } },
      { id: 'control-board', title: 'Control board fault', why: 'If no keys work and the display acts oddly, the control board may have failed.', weight: 2, boostIf: { issues: ['microwave-will-not-start'] } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Hold the stop or lock key for about three seconds to turn off child lock.',
      'Unplug the microwave for a minute to reset it.',
    ],
    proOnly: ['Replacing the keypad or control board'],
    cost: { description: 'Keypad or control board replacement.', parts: ['moderate', 'high'], labourHours: [0.5, 1], complexity: 'simple' },
  },
  {
    id: 'microwave-will-not-start',
    appliance: 'microwave',
    label: 'Will not turn on',
    causes: [
      { id: 'fuse', title: 'Blown internal fuse', why: 'A main fuse inside the microwave blows when a door switch fails, leaving it completely dead.', weight: 4, boostIf: { status: ['stopped'] } },
      { id: 'door-switch', title: 'Failed door switch', why: 'If one door switch fails, the microwave will not start or will blow its fuse.', weight: 4, boostIf: { issues: ['microwave-not-heating'] } },
      { id: 'outlet', title: 'Outlet or breaker off', why: 'Over-the-range models often share a circuit that can trip without notice.', weight: 3 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check the breaker and test the outlet with a small appliance.',
      'Open and close the door firmly to see if the light comes on.',
    ],
    proOnly: ['Replacing the internal fuse and door switches', 'Diagnosing the control board'],
    cost: { description: 'Fuse and door switch replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1], complexity: 'simple' },
  },

  // Ice maker (5)
  {
    id: 'icemaker-not-making-ice',
    appliance: 'icemaker',
    label: 'Not making ice',
    causes: [
      { id: 'water-supply', title: 'Water supply or inlet valve', why: 'A closed valve, kinked line or failed inlet valve stops water from reaching the mold or evaporator.', weight: 5, boostIf: { status: ['stopped'] } },
      { id: 'dirty-condenser', title: 'Dirty condenser', why: 'Standalone ice makers need a clean condenser. When it clogs, the unit cannot freeze water fast enough.', weight: 3, boostIf: { issues: ['icemaker-small-cubes'], ageAtLeast: '2to5' } },
      { id: 'control-or-sensor', title: 'Control or bin sensor fault', why: 'If the bin sensor reads full by mistake, the machine stops making ice.', weight: 2, boostIf: { status: ['intermittent'] } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Make sure the water supply valve is fully open and the line is not kinked.',
      'Replace the water filter if it is past its change date.',
      'Unplug the unit and clean the condenser grille.',
    ],
    proOnly: ['Replacing the water inlet valve', 'Testing the bin sensor and control'],
    cost: { description: 'Water inlet valve or sensor replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'icemaker-small-cubes',
    appliance: 'icemaker',
    label: 'Small or hollow cubes',
    causes: [
      { id: 'low-water-flow', title: 'Low water flow', why: 'A clogged filter or low water pressure underfills the mold, giving small or hollow cubes.', weight: 5 },
      { id: 'scale-buildup', title: 'Scale on the evaporator', why: 'Hard water scale slows freezing and release, so cubes come out thin or cloudy.', weight: 3, boostIf: { issues: ['icemaker-bad-taste'], ageAtLeast: '2to5' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Change the water filter.',
      'Run the cleaning cycle with an ice machine cleaner made for your model.',
    ],
    proOnly: ['Descaling the evaporator and water system', 'Replacing the inlet valve'],
    cost: { description: 'Cleaning and descaling, or an inlet valve replacement.', parts: ['none', 'low'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'icemaker-leaking',
    appliance: 'icemaker',
    label: 'Leaking water',
    causes: [
      { id: 'drain-clog', title: 'Clogged drain or drain pump', why: 'Melt water from the bin needs to drain. A clog or failed pump makes it overflow.', weight: 4, boostIf: { status: ['leaking'] } },
      { id: 'supply-line', title: 'Loose supply line fitting', why: 'The small water line can loosen at the valve or the back of the unit.', weight: 3 },
      { id: 'not-level', title: 'Unit not level', why: 'An uneven unit sends water away from the drain and out the front.', weight: 2 },
    ],
    urgency: 'today',
    safeChecks: [
      'Unplug the unit, close the water valve and dry the floor.',
      'Level the unit so it drains to the back.',
      'Check the drain hose for kinks.',
    ],
    proOnly: ['Replacing the drain pump', 'Repairing supply line fittings inside the unit'],
    cost: { description: 'Drain pump or fitting repair.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'icemaker-bad-taste',
    appliance: 'icemaker',
    label: 'Ice tastes or smells bad',
    causes: [
      { id: 'old-filter', title: 'Old water filter', why: 'A filter past its life stops removing tastes and can add its own.', weight: 5 },
      { id: 'dirty-system', title: 'Mold or scale inside the machine', why: 'Ice machines need regular cleaning, and slime can grow in the water trough and bin.', weight: 4, boostIf: { ageAtLeast: '2to5' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Throw out old ice and replace the water filter.',
      'Run the cleaning and sanitizing cycle from the owner manual.',
      'Wipe the bin with a mild cleaner made for ice machines.',
    ],
    proOnly: ['Deep cleaning and sanitizing the water system'],
    cost: { description: 'Professional cleaning and sanitizing.', parts: ['none', 'low'], labourHours: [1, 2], complexity: 'simple' },
  },
  {
    id: 'icemaker-noise',
    appliance: 'icemaker',
    label: 'Loud noise or jammed ice',
    causes: [
      { id: 'fan-or-pump', title: 'Worn fan or water pump', why: 'Grinding or buzzing from a standalone unit usually comes from the condenser fan or water pump.', weight: 4, boostIf: { status: ['noise'], ageAtLeast: '5to10' } },
      { id: 'ice-jam', title: 'Ice jammed in the bin or chute', why: 'Clumped ice can block the auger or harvest path and make the motor strain.', weight: 3, boostIf: { issues: ['icemaker-not-making-ice'] } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Unplug the unit and break up clumped ice in the bin by hand.',
      'Make sure the unit is level and not touching cabinets.',
    ],
    proOnly: ['Replacing the fan motor or water pump'],
    cost: { description: 'Fan motor or water pump replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },

  // Garbage disposal (4)
  {
    id: 'disposal-humming',
    appliance: 'disposal',
    label: 'Hums but will not grind',
    causes: [
      { id: 'jammed-flywheel', title: 'Jammed flywheel', why: 'A bone, pit or utensil wedged between the plate and the ring stops the motor from turning.', weight: 5 },
      { id: 'seized-motor', title: 'Seized motor bearing', why: 'If the flywheel is free and it still hums, the motor bearings may be locked up.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Turn the disposal off at the switch and unplug it or switch off its breaker.',
      'Use the hex key in the socket on the bottom to work the flywheel back and forth.',
      'Remove debris with tongs, never your hand, then press the red reset button.',
    ],
    proOnly: ['Replacing the disposal unit'],
    cost: { description: 'Clearing the jam, or replacing the disposal.', parts: ['none', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'disposal-will-not-turn-on',
    appliance: 'disposal',
    label: 'Will not turn on',
    causes: [
      { id: 'reset-button', title: 'Tripped reset button', why: 'The built-in overload pops the reset button after a jam or long run.', weight: 5, boostIf: { issues: ['disposal-humming'] } },
      { id: 'switch-or-outlet', title: 'Wall switch or outlet problem', why: 'A worn switch, loose plug or tripped breaker cuts power to the unit.', weight: 3 },
      { id: 'motor', title: 'Burned out motor', why: 'Older units with repeated jams can burn out the motor windings.', weight: 2, boostIf: { ageAtLeast: '10plus' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Press the red reset button on the bottom of the unit.',
      'Check the breaker and that the plug is firmly in the outlet under the sink.',
    ],
    proOnly: ['Testing the wall switch and wiring', 'Replacing the disposal'],
    cost: { description: 'Switch repair or disposal replacement.', parts: ['none', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'disposal-leaking',
    appliance: 'disposal',
    label: 'Leaking under the sink',
    causes: [
      { id: 'sink-flange', title: 'Loose sink flange', why: 'Water dripping from the top of the unit usually comes from the plumber putty seal at the sink drain.', weight: 4, boostIf: { status: ['leaking'] } },
      { id: 'drain-connections', title: 'Loose drain or dishwasher connection', why: 'Leaks at the side usually come from the discharge pipe gasket or the dishwasher hose clamp.', weight: 4 },
      { id: 'cracked-body', title: 'Cracked housing', why: 'A leak from the bottom often means internal seals have failed and the unit needs to be replaced.', weight: 3, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'today',
    safeChecks: [
      'Turn off the disposal and put a pan under it.',
      'Dry the unit and run water to see where the drip starts.',
      'Hand tighten the dishwasher hose clamp and drain pipe nut if they are loose.',
    ],
    proOnly: ['Resealing the sink flange', 'Replacing the disposal'],
    cost: { description: 'Resealing connections or replacing the disposal.', parts: ['none', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'disposal-slow-drain',
    appliance: 'disposal',
    label: 'Slow drain or clog',
    causes: [
      { id: 'drain-trap-clog', title: 'Clog in the trap or drain line', why: 'Grease, rice and fibrous scraps build up past the disposal in the trap.', weight: 5 },
      { id: 'dull-grind', title: 'Worn grinding parts', why: 'Worn impellers leave larger pieces that settle in the drain.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Run plenty of cold water while the disposal is on and for a short time after.',
      'Avoid chemical drain cleaners, which can damage the unit.',
      'Keep grease, fibrous peels and coffee grounds out of the disposal.',
    ],
    proOnly: ['Clearing the trap and drain line'],
    cost: { description: 'Drain clearing.', parts: ['none', 'low'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },

  // Range hood (4)
  {
    id: 'rangehood-fan-not-working',
    appliance: 'rangehood',
    label: 'Fan not working',
    causes: [
      { id: 'fan-switch', title: 'Failed fan switch', why: 'Push button and slide switches wear out from grease and heavy use.', weight: 4, boostIf: { status: ['intermittent'] } },
      { id: 'fan-motor', title: 'Failed blower motor', why: 'If the light works but the fan is silent or hums, the motor may be seized.', weight: 4, boostIf: { issues: ['rangehood-noisy'], ageAtLeast: '5to10' } },
      { id: 'power', title: 'Breaker or control board', why: 'A tripped breaker or failed board can stop both the fan and the light.', weight: 2, boostIf: { issues: ['rangehood-lights-out'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Check the breaker and try every fan speed.',
      'Clean the grease filters, since heavy grease can stall the fan.',
    ],
    proOnly: ['Replacing the switch, motor or control board'],
    cost: { description: 'Fan switch or blower motor replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'rangehood-weak-suction',
    appliance: 'rangehood',
    label: 'Weak suction',
    causes: [
      { id: 'greasy-filters', title: 'Clogged grease filters', why: 'Grease-packed filters block most of the airflow.', weight: 5 },
      { id: 'duct-damper', title: 'Stuck damper or blocked duct', why: 'A damper stuck shut or a nest in the outside vent cap stops air from leaving.', weight: 3, boostIf: { status: ['poor'] } },
      { id: 'motor-weak', title: 'Weak blower motor', why: 'Older motors slow down as bearings wear.', weight: 2, boostIf: { issues: ['rangehood-noisy'], ageAtLeast: '10plus' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Soak and wash the metal grease filters, or replace charcoal filters.',
      'Check outside that the vent cap flap opens when the fan runs.',
    ],
    proOnly: ['Clearing ductwork', 'Replacing the blower motor'],
    cost: { description: 'Duct clearing or motor replacement.', parts: ['none', 'moderate'], labourHours: [0.5, 2], complexity: 'simple' },
  },
  {
    id: 'rangehood-noisy',
    appliance: 'rangehood',
    label: 'Noisy or rattling fan',
    causes: [
      { id: 'loose-filter', title: 'Loose filter or panel', why: 'Filters that are not clipped in can rattle against the hood.', weight: 4 },
      { id: 'fan-blade', title: 'Grease on the fan blade or worn bearing', why: 'Grease throws the blower off balance, and worn bearings hum or squeal.', weight: 3, boostIf: { status: ['noise'], ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Reseat the filters and make sure the clips catch.',
      'Clean the filters and the inside of the hood with the power off.',
    ],
    proOnly: ['Cleaning or replacing the blower wheel and motor'],
    cost: { description: 'Blower wheel or motor replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'rangehood-lights-out',
    appliance: 'rangehood',
    label: 'Lights not working',
    causes: [
      { id: 'bulb', title: 'Burned out bulb or LED', why: 'Hood bulbs run hot and fail more often than room lights.', weight: 5 },
      { id: 'light-switch', title: 'Failed light switch or LED driver', why: 'If a new bulb does not work, the switch or LED driver may have failed.', weight: 3, boostIf: { issues: ['rangehood-fan-not-working'] } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Turn off the hood and let the bulbs cool before replacing them with the type in the manual.',
      'Check that the bulb or LED module is seated firmly in its socket.',
    ],
    proOnly: ['Replacing the light switch, socket or LED driver'],
    cost: { description: 'Light switch or LED driver replacement.', parts: ['low', 'low'], labourHours: [0.5, 1], complexity: 'simple' },
  },

  // Wine cooler (4)
  {
    id: 'winecooler-not-cooling',
    appliance: 'winecooler',
    label: 'Not cooling',
    causes: [
      { id: 'airflow', title: 'Blocked vents or dirty condenser', why: 'Built-in coolers vent through the front grille. Blocking it or letting dust build up traps heat.', weight: 4, boostIf: { status: ['poor'] } },
      { id: 'fan-or-thermistor', title: 'Fan or temperature sensor fault', why: 'A stopped fan or a sensor reading wrong keeps the cooling system from running properly.', weight: 3, boostIf: { issues: ['winecooler-temperature-swings'] } },
      { id: 'sealed-or-thermoelectric', title: 'Compressor or thermoelectric module failure', why: 'Compressor models can lose refrigerant. Thermoelectric models lose cooling when the module fails.', weight: 2, boostIf: { status: ['stopped'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Clear anything in front of the bottom grille and vacuum it with the unit unplugged.',
      'Check that a freestanding unit has a few inches of space on all sides.',
      'Move bottles you value to a cool, dark spot until it is repaired.',
    ],
    proOnly: ['Replacing the fan or sensor', 'Sealed system or thermoelectric module repair'],
    cost: { description: 'Fan or sensor repair, or sealed system work on compressor models.', parts: ['low', 'major'], labourHours: [1, 3], complexity: 'moderate' },
  },
  {
    id: 'winecooler-temperature-swings',
    appliance: 'winecooler',
    label: 'Temperature keeps changing',
    causes: [
      { id: 'door-seal', title: 'Door gasket not sealing', why: 'Warm air leaking in makes the temperature drift up between cycles.', weight: 4, boostIf: { issues: ['winecooler-condensation'] } },
      { id: 'room-temp', title: 'Room too hot or cold', why: 'Many coolers are rated for a set room range. Garages and sunny spots push them outside it.', weight: 3 },
      { id: 'sensor', title: 'Faulty temperature sensor', why: 'A drifting sensor makes the control switch the cooling on and off at the wrong times.', weight: 3, boostIf: { status: ['intermittent'] } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Check the door gasket with a strip of paper.',
      'Keep the cooler out of direct sun and away from ovens.',
      'Use a separate thermometer in the middle shelf to confirm the reading.',
    ],
    proOnly: ['Replacing the sensor or control', 'Replacing the gasket'],
    cost: { description: 'Sensor or gasket replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'winecooler-noise',
    appliance: 'winecooler',
    label: 'Noisy or vibrating',
    causes: [
      { id: 'fan', title: 'Worn fan motor', why: 'Fans in wine coolers run often, and a worn bearing makes a steady whine or rattle.', weight: 4, boostIf: { status: ['noise'], ageAtLeast: '5to10' } },
      { id: 'not-level', title: 'Unit not level or touching cabinets', why: 'Vibration matters for wine. An uneven unit hums against nearby surfaces.', weight: 3 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Level the unit with its adjustable feet.',
      'Make sure racks are seated and bottles are not touching the back wall.',
    ],
    proOnly: ['Replacing the fan motor'],
    cost: { description: 'Fan motor replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'winecooler-condensation',
    appliance: 'winecooler',
    label: 'Water or condensation inside',
    causes: [
      { id: 'door-seal', title: 'Worn door gasket', why: 'Humid room air slipping in condenses on the cold glass and walls.', weight: 4, boostIf: { issues: ['winecooler-temperature-swings'] } },
      { id: 'drain-clog', title: 'Clogged drain hole', why: 'Water from the cooling plate should drain to a pan. A clog leaves it pooling inside.', weight: 3, boostIf: { status: ['leaking'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Unplug the unit and clean the small drain hole on the back wall with a pipe cleaner.',
      'Wipe and check the door gasket for gaps.',
    ],
    proOnly: ['Replacing the gasket or drain parts'],
    cost: { description: 'Gasket replacement or drain clearing.', parts: ['none', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },

  // Warming drawer (4)
  {
    id: 'warmingdrawer-not-heating',
    appliance: 'warmingdrawer',
    label: 'Not heating',
    causes: [
      { id: 'element', title: 'Failed heating element', why: 'The element is the part that fails most often when the drawer stays cold.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
      { id: 'thermostat', title: 'Failed thermostat or high limit', why: 'A thermostat or safety limit that stays open stops power from reaching the element.', weight: 3, boostIf: { issues: ['warmingdrawer-overheating'] } },
      { id: 'power', title: 'Breaker or control fault', why: 'If the display is dark too, the problem is power or the control.', weight: 2, boostIf: { issues: ['warmingdrawer-controls'] } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Check the breaker and confirm the drawer is set to a heat level, not off.',
      'Close the drawer fully, since many models only heat when closed.',
    ],
    proOnly: ['Replacing the element, thermostat or high limit'],
    cost: { description: 'Element or thermostat replacement.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'warmingdrawer-overheating',
    appliance: 'warmingdrawer',
    label: 'Too hot or will not turn off',
    causes: [
      { id: 'thermostat-stuck', title: 'Thermostat stuck closed', why: 'If the thermostat contacts stick, the element stays on past the set level.', weight: 4, boostIf: { status: ['unsafe'] } },
      { id: 'control-relay', title: 'Control relay stuck', why: 'On electronic models a stuck relay keeps the element powered.', weight: 3 },
    ],
    urgency: 'today',
    safeChecks: [
      'Turn the drawer off and switch off its breaker if it keeps heating.',
      'Do not leave plastic or paper inside until it is repaired.',
    ],
    proOnly: ['Replacing the thermostat or control board'],
    cost: { description: 'Thermostat or control replacement.', parts: ['low', 'high'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'warmingdrawer-sticking',
    appliance: 'warmingdrawer',
    label: 'Drawer sticks or will not close',
    causes: [
      { id: 'slides', title: 'Worn or dirty slides', why: 'Crumbs and grease in the drawer slides make it stick or close unevenly.', weight: 4 },
      { id: 'misaligned', title: 'Drawer off its rails', why: 'Pulling hard or overloading can knock the drawer off one rail.', weight: 3 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'With the drawer off and cool, wipe crumbs and grease from the slides.',
      'Remove heavy items and check that both sides sit on their rails.',
    ],
    proOnly: ['Replacing drawer slides'],
    cost: { description: 'Drawer slide replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'warmingdrawer-controls',
    appliance: 'warmingdrawer',
    label: 'Controls not responding',
    causes: [
      { id: 'control-lock', title: 'Control lock or Sabbath mode', why: 'Lock or Sabbath settings can make the controls look unresponsive.', weight: 3 },
      { id: 'control-board', title: 'Failed control board or keypad', why: 'Heat and steam can damage the keypad or board over time.', weight: 3, boostIf: { status: ['intermittent'], ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Check the owner manual for how to turn off control lock or Sabbath mode.',
      'Switch off the breaker for a minute to reset the control.',
    ],
    proOnly: ['Replacing the keypad or control board'],
    cost: { description: 'Keypad or control board replacement.', parts: ['moderate', 'high'], labourHours: [0.5, 1.5], complexity: 'moderate' },
  },

  // Trash compactor (4)
  {
    id: 'compactor-will-not-start',
    appliance: 'compactor',
    label: 'Will not start',
    causes: [
      { id: 'key-switch', title: 'Key switch off or drawer not closed', why: 'Compactors have a key or lock switch and a drawer switch, and both must be on.', weight: 4 },
      { id: 'safety-switch', title: 'Failed safety or start switch', why: 'A worn switch stops the motor even with the drawer closed.', weight: 3, boostIf: { status: ['stopped'], ageAtLeast: '5to10' } },
      { id: 'motor', title: 'Motor or centrifugal switch fault', why: 'A hum with no movement can mean the motor or its start switch has failed.', weight: 2, boostIf: { issues: ['compactor-ram-stuck'] } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Check the breaker and turn the key switch to on.',
      'Close the drawer fully and make sure no trash is blocking it.',
    ],
    proOnly: ['Testing and replacing switches', 'Replacing the motor'],
    cost: { description: 'Switch or motor replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'compactor-ram-stuck',
    appliance: 'compactor',
    label: 'Ram stuck down',
    causes: [
      { id: 'power-screws', title: 'Worn power screws or drive chain', why: 'The ram rides on screws driven by a chain or belt. Wear or a broken link stops it partway.', weight: 4, boostIf: { ageAtLeast: '5to10' } },
      { id: 'overload', title: 'Overloaded drawer', why: 'Bottles or hard items can jam the ram at the bottom of its stroke.', weight: 3 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Turn the key switch off and switch off the breaker.',
      'Do not reach under the ram.',
    ],
    proOnly: ['Freeing the ram and replacing power screws, nuts or chain'],
    cost: { description: 'Power screw, drive nut or chain replacement.', parts: ['moderate', 'high'], labourHours: [1, 2.5], complexity: 'moderate' },
  },
  {
    id: 'compactor-drawer',
    appliance: 'compactor',
    label: 'Drawer will not open',
    causes: [
      { id: 'ram-down', title: 'Ram not fully raised', why: 'The drawer stays locked when the ram has not returned to the top.', weight: 4, boostIf: { issues: ['compactor-ram-stuck'] } },
      { id: 'drawer-rollers', title: 'Broken drawer rollers or slides', why: 'Heavy loads wear out the drawer rollers so it binds.', weight: 3 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Run a cycle with the key on to let the ram return to the top.',
      'Turn the unit off and check under the drawer for trash caught in the slides.',
    ],
    proOnly: ['Replacing rollers or slides', 'Repairing the ram drive'],
    cost: { description: 'Drawer roller or slide replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'compactor-odor',
    appliance: 'compactor',
    label: 'Bad odor',
    causes: [
      { id: 'dirty-drawer', title: 'Residue in the drawer and ram', why: 'Liquids from compressed trash collect under the bag and on the ram face.', weight: 5 },
      { id: 'filter', title: 'Old charcoal filter', why: 'Units with an odor filter need it replaced on a schedule.', weight: 3 },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Turn the unit off, remove the bag and clean the drawer and ram face.',
      'Replace the charcoal filter if your model has one.',
    ],
    proOnly: ['Removing the drawer for a deep clean of the cabinet'],
    cost: { description: 'Cleaning and filter replacement.', parts: ['none', 'low'], labourHours: [0.5, 1], complexity: 'simple' },
  },

  // Built-in coffee system (4)
  {
    id: 'coffee-not-brewing',
    appliance: 'coffee',
    label: 'Not brewing',
    causes: [
      { id: 'scale', title: 'Scale buildup', why: 'Mineral scale blocks the water path, and many machines stop brewing until they are descaled.', weight: 5, boostIf: { issues: ['coffee-weak-coffee'], ageAtLeast: '2to5' } },
      { id: 'water-tank', title: 'Tank or water line problem', why: 'A tank that is not seated or a closed plumbed-in valve leaves the pump with no water.', weight: 3 },
      { id: 'brew-unit', title: 'Brew unit or pump failure', why: 'If water flows but nothing brews, the brew unit or pump may be worn.', weight: 2, boostIf: { status: ['stopped'], ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Fill and reseat the water tank, or check the supply valve on plumbed models.',
      'Run the descaling program from the owner manual.',
      'Remove and rinse the brew unit if your model allows it.',
    ],
    proOnly: ['Replacing the pump or brew unit', 'Servicing the internal water system'],
    cost: { description: 'Descaling service, or a pump or brew unit replacement.', parts: ['none', 'high'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'coffee-leaking',
    appliance: 'coffee',
    label: 'Leaking',
    causes: [
      { id: 'drip-tray', title: 'Full drip tray or grounds container', why: 'An overfilled tray or a container not seated properly sends water into the cabinet.', weight: 4 },
      { id: 'brew-unit-seal', title: 'Worn brew unit seals', why: 'O-rings on the brew unit dry out and leak during brewing.', weight: 3, boostIf: { status: ['leaking'], ageAtLeast: '2to5' } },
      { id: 'internal-hose', title: 'Internal hose or fitting', why: 'A cracked hose inside the machine leaks even when it is idle.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'today',
    safeChecks: [
      'Turn the machine off and empty and reseat the drip tray and grounds container.',
      'Close the water supply valve on plumbed models.',
      'Dry the cabinet below to protect it from water damage.',
    ],
    proOnly: ['Replacing brew unit seals', 'Repairing internal hoses and fittings'],
    cost: { description: 'Seal kit or internal hose repair.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'coffee-weak-coffee',
    appliance: 'coffee',
    label: 'Weak or lukewarm coffee',
    causes: [
      { id: 'grind-setting', title: 'Grind or strength setting', why: 'A coarse grind or low strength setting gives thin coffee.', weight: 4 },
      { id: 'scale', title: 'Scale in the heater', why: 'Scale on the heating block lowers the brewing temperature.', weight: 4, boostIf: { issues: ['coffee-not-brewing'], ageAtLeast: '2to5' } },
      { id: 'heater', title: 'Failing heater or thermostat', why: 'If descaling does not help, the heater or its sensor may be failing.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Set a finer grind and a higher strength setting.',
      'Run the descaling program.',
      'Preheat cups with hot water.',
    ],
    proOnly: ['Replacing the heater or thermostat'],
    cost: { description: 'Heater or thermostat replacement.', parts: ['moderate', 'high'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'coffee-grinder',
    appliance: 'coffee',
    label: 'Grinder not working',
    causes: [
      { id: 'jammed-beans', title: 'Oily beans or debris jamming the grinder', why: 'Dark, oily beans and small stones can clog or jam the burrs.', weight: 4 },
      { id: 'grinder-motor', title: 'Worn burrs or grinder motor', why: 'A grinder that spins but makes little coffee has worn burrs. One that is silent may have a failed motor.', weight: 3, boostIf: { status: ['noise'], ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Turn the machine off and clean the bean hopper.',
      'Switch to a less oily bean.',
    ],
    proOnly: ['Replacing burrs or the grinder motor'],
    cost: { description: 'Burr set or grinder motor replacement.', parts: ['moderate', 'high'], labourHours: [1, 2], complexity: 'moderate' },
  },

  // Grill (4)
  {
    id: 'grill-burners-not-lighting',
    appliance: 'grill',
    label: 'Burners will not light',
    causes: [
      { id: 'gas-supply', title: 'Empty tank or tripped regulator', why: 'A low tank or a regulator in bypass mode lets through too little gas to light.', weight: 5, boostIf: { issues: ['grill-low-flame'] } },
      { id: 'clogged-burner', title: 'Clogged burner tubes', why: 'Spiders and insects build nests in the burner tubes and block the gas.', weight: 3, boostIf: { ageAtLeast: '2to5' } },
      { id: 'igniter', title: 'Igniter not sparking', why: 'A dead battery, loose wire or cracked electrode stops the spark.', weight: 3, boostIf: { issues: ['grill-igniter-clicking'] } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Turn all knobs off, close the tank valve, then open it slowly to reset the regulator.',
      'Check the tank level by weight or the gauge.',
      'Replace the igniter battery if your grill uses one.',
    ],
    proOnly: ['Cleaning burner tubes and orifices', 'Replacing the regulator, valves or igniter'],
    cost: { description: 'Regulator, burner or igniter replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'grill-low-flame',
    appliance: 'grill',
    label: 'Uneven or low flame',
    causes: [
      { id: 'regulator-bypass', title: 'Regulator in bypass mode', why: 'Opening the tank valve with knobs on trips a safety that limits gas flow.', weight: 5 },
      { id: 'clogged-ports', title: 'Clogged burner ports', why: 'Grease and rust block some ports, leaving cold spots and yellow flames.', weight: 4, boostIf: { issues: ['grill-burners-not-lighting'], ageAtLeast: '2to5' } },
      { id: 'worn-burner', title: 'Rusted out burner', why: 'Burners rust through over time and give large, uneven flames.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'Turn all knobs off and close the tank valve. Wait a minute, open it slowly, then light one burner.',
      'With the grill off and cool, brush the burner ports clean.',
    ],
    proOnly: ['Replacing burners or the regulator', 'Adjusting air shutters'],
    cost: { description: 'Burner or regulator replacement.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'simple' },
  },
  {
    id: 'grill-gas-smell',
    appliance: 'grill',
    label: 'Gas smell at the grill',
    causes: [
      { id: 'loose-connection', title: 'Loose tank connection', why: 'A connection that is not fully tight at the tank leaks gas.', weight: 4 },
      { id: 'damaged-hose', title: 'Cracked hose or failing valve', why: 'Hoses dry out and crack in the sun, and rodents can chew them.', weight: 3, boostIf: { status: ['unsafe'], ageAtLeast: '5to10' } },
    ],
    urgency: 'stop',
    safeChecks: [
      'Turn off all burners and close the tank valve if it is safe to reach.',
      'Open the lid, keep flames and cigarettes away and move people back.',
      'If the smell continues or a natural gas grill is involved, leave the area and call the gas utility or 911.',
    ],
    proOnly: ['Leak testing and replacing hoses, regulators and valves', 'Servicing natural gas connections'],
    cost: { description: 'Hose, regulator or valve replacement after a leak check.', parts: ['low', 'moderate'], labourHours: [0.5, 1.5], complexity: 'moderate' },
  },
  {
    id: 'grill-igniter-clicking',
    appliance: 'grill',
    label: 'Igniter clicks but will not light',
    causes: [
      { id: 'electrode-gap', title: 'Electrode dirty or out of position', why: 'Grease on the tip or a bent electrode sends the spark away from the gas.', weight: 4 },
      { id: 'low-gas', title: 'Low gas flow', why: 'The spark works but there is not enough gas at the burner to catch.', weight: 3, boostIf: { issues: ['grill-low-flame', 'grill-burners-not-lighting'] } },
      { id: 'cracked-electrode', title: 'Cracked electrode or worn wire', why: 'A cracked ceramic or worn wire lets the spark jump to the frame.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'monitor',
    safeChecks: [
      'With the gas off, wipe the electrode tip clean.',
      'Do not keep clicking with gas on for long. Turn the knob off and wait five minutes before trying again.',
    ],
    proOnly: ['Replacing the igniter or electrode'],
    cost: { description: 'Igniter or electrode replacement.', parts: ['low', 'low'], labourHours: [0.5, 1], complexity: 'simple' },
  },

  // Pool heater (4)
  {
    id: 'poolheater-not-heating',
    appliance: 'poolheater',
    label: 'Will not ignite or heat',
    causes: [
      { id: 'low-flow', title: 'Low water flow', why: 'The pressure switch keeps the heater off when a dirty filter or closed valve cuts the flow.', weight: 5, boostIf: { issues: ['poolheater-short-cycling'], status: ['stopped'] } },
      { id: 'ignition', title: 'Igniter or flame sensor fault', why: 'Gas heaters that try to light and shut off often have a worn igniter or dirty flame sensor.', weight: 3, boostIf: { issues: ['poolheater-error-light'], ageAtLeast: '5to10' } },
      { id: 'gas-supply', title: 'Gas supply problem', why: 'A closed valve or empty propane tank leaves the heater with nothing to burn.', weight: 2 },
    ],
    urgency: 'soon',
    safeChecks: [
      'Clean or backwash the pool filter and empty the pump basket.',
      'Make sure the pump is running and the heater is set to call for heat.',
      'Check the propane level if your heater uses a tank.',
    ],
    proOnly: ['Servicing the igniter, flame sensor and gas valve', 'Testing pressure and safety switches'],
    cost: { description: 'Igniter, flame sensor or pressure switch replacement.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'poolheater-error-light',
    appliance: 'poolheater',
    label: 'Error or fault light on',
    causes: [
      { id: 'pressure-switch', title: 'Pressure or flow fault', why: 'The most common fault is low water pressure, which points back to the filter or pump.', weight: 4, boostIf: { issues: ['poolheater-not-heating'] } },
      { id: 'high-limit', title: 'High limit or sensor fault', why: 'Overheat and sensor codes come from a high limit switch or a temperature sensor out of range.', weight: 3, boostIf: { issues: ['poolheater-short-cycling'] } },
      { id: 'control-board', title: 'Control board fault', why: 'Moisture and pests can damage the board and cause random faults.', weight: 2, boostIf: { status: ['intermittent'], ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Write down the code and look it up in the error code decoder tool on this site.',
      'Clean the filter and check that all valves to the heater are open.',
      'Turn the heater off at its switch for a few minutes to reset it.',
    ],
    proOnly: ['Testing switches, sensors and the control board'],
    cost: { description: 'Switch, sensor or control board replacement.', parts: ['low', 'high'], labourHours: [1, 2], complexity: 'moderate' },
  },
  {
    id: 'poolheater-leaking',
    appliance: 'poolheater',
    label: 'Leaking water',
    causes: [
      { id: 'header-gasket', title: 'Header or gasket leak', why: 'Gaskets at the water header wear out and drip during operation.', weight: 4, boostIf: { status: ['leaking'], ageAtLeast: '5to10' } },
      { id: 'condensation', title: 'Condensation', why: 'Heaters running with very cold water can drip condensation that looks like a leak.', weight: 3 },
      { id: 'heat-exchanger', title: 'Cracked heat exchanger', why: 'Freeze damage or poor water chemistry can crack or eat through the heat exchanger.', weight: 2, boostIf: { ageAtLeast: '10plus' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Note whether the drip stops when the heater is off, which points to condensation.',
      'Check and balance the pool water chemistry.',
    ],
    proOnly: ['Replacing header gaskets', 'Heat exchanger repair or replacement'],
    cost: { description: 'Gasket replacement, or a heat exchanger in the worst case.', parts: ['low', 'major'], labourHours: [1, 4], complexity: 'complex' },
  },
  {
    id: 'poolheater-short-cycling',
    appliance: 'poolheater',
    label: 'Short cycling',
    causes: [
      { id: 'dirty-filter', title: 'Dirty filter or low flow', why: 'Low flow makes the water overheat inside the heater, so it trips off and restarts.', weight: 5, boostIf: { issues: ['poolheater-not-heating'], status: ['intermittent'] } },
      { id: 'thermostat', title: 'Thermostat or sensor fault', why: 'A bad sensor can shut the heater off before the pool reaches the set temperature.', weight: 3, boostIf: { issues: ['poolheater-error-light'] } },
      { id: 'bypass-valve', title: 'Internal bypass valve stuck', why: 'A stuck bypass sends too much or too little water through the heat exchanger.', weight: 2, boostIf: { ageAtLeast: '5to10' } },
    ],
    urgency: 'soon',
    safeChecks: [
      'Clean the filter and the pump basket.',
      'Make sure valves between the pump and heater are fully open.',
    ],
    proOnly: ['Replacing the sensor or thermostat', 'Servicing the internal bypass'],
    cost: { description: 'Sensor or bypass valve replacement.', parts: ['low', 'moderate'], labourHours: [1, 2], complexity: 'moderate' },
  },
];

const applianceKeys: ToolApplianceKey[] = [
  'refrigerator', 'freezer', 'washer', 'dryer', 'dishwasher', 'oven', 'stove', 'cooktop', 'microwave',
  'disposal', 'icemaker', 'rangehood', 'winecooler', 'warmingdrawer', 'compactor', 'coffee', 'grill', 'poolheater',
];

export const issuesByAppliance = Object.fromEntries(
  applianceKeys.map((key) => [key, issues.filter((i) => i.appliance === key)]),
) as Record<ToolApplianceKey, Issue[]>;
