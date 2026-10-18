import type { ErrorCategory, ErrorCategoryInfo, ErrorCodeRecord } from './types';

/**
 * Error code decoder data.
 *
 * How a record resolves: each ErrorCodeRecord names one ErrorCategory. The category supplies the
 * shared meaning, likely cause, first checks, stop-use advice, next step, severity, parts level and
 * the diy flag. A record can override `cause` and `severity` when the code is more specific than its
 * family (for example a runaway oven temperature code is more serious than a general overheat).
 *
 * To add a code: pick the appliance key and brand keys from ./appliances.ts, choose the closest
 * category below (or add a category to ErrorCategory in ./types.ts and an entry in errorCategories),
 * write a short plain-English title, and set `source`. Keep `code` exactly as the display shows it,
 * spaces included ("F8 E1", "Er IF"). Share one record across sibling brands only when the code
 * really is the same on both.
 *
 * `aliases` covers display variants of the same fault, such as Samsung 4C and 4E, or LG SUD and Sud.
 * Lookups uppercase the code and drop spaces and hyphens, so case and spacing variants need no alias.
 *
 * Every seed entry below is a commonly published meaning that has not been verified against each
 * model's service manual. Meanings can change between models and production years. When a code is
 * checked against the manufacturer's documentation, update its `source` field to say so.
 */

const SEED = 'Commonly published meaning. Not yet verified against the manufacturer service manual for this model.';

export const errorCategories: Record<ErrorCategory, ErrorCategoryInfo> = {
  'water-supply': {
    meaning: 'The appliance is not getting enough water in the time it expects, so it stopped the fill.',
    cause: 'A faucet that is partly closed, a kinked inlet hose or a clogged inlet screen. A failed water inlet valve is next.',
    firstChecks: [
      'Make sure both supply faucets or the shutoff valve are fully open.',
      'Check the inlet hose behind the appliance for kinks or crushing.',
      'Confirm other faucets in the home have normal water pressure.',
      'With the power and water off, check the inlet screens at the hose connection for grit and rinse them.',
    ],
    stopUse: 'Stop if water drips near the valve, the hose connection or any wiring.',
    nextStep: 'If the water supply is good and the code returns, have a technician test the inlet valve and flow sensor.',
    severity: 'medium',
    parts: ['none', 'moderate'],
    diy: true,
  },
  drain: {
    meaning: 'Water did not drain out in the time the control allows.',
    cause: 'A clogged filter or pump trap, a kinked drain hose or a blocked drain line. A worn drain pump is next.',
    firstChecks: [
      'Turn the power off, then clean the drain filter or pump trap if the appliance has one. Keep towels ready for trapped water.',
      'Check the drain hose for kinks and make sure it is not pushed too far into the standpipe.',
      'If it drains into a garbage disposal, run the disposal to clear the connection.',
    ],
    stopUse: 'Stop if standing water leaks out of the door or reaches the floor near outlets.',
    nextStep: 'If the filter and hose are clear and the code comes back, the drain pump or drain line needs testing.',
    severity: 'medium',
    parts: ['none', 'moderate'],
    diy: true,
  },
  'door-lock': {
    meaning: 'The control cannot confirm the door or lid is closed and locked, so it will not start or continue.',
    cause: 'A worn door latch, a broken strike, or a door lock or switch that has failed.',
    firstChecks: [
      'Open the door and close it firmly. Check that clothing, a rack or a utensil is not in the way.',
      'Look at the latch and strike for cracks or a bent hook.',
      'Turn the power off for one minute, then restart the cycle.',
    ],
    stopUse: 'Stop if the door opens while the appliance is running. Never tape, wedge or bypass a door switch or lock.',
    nextStep: 'If the door closes normally and the code returns, have the lock, switch and wiring tested.',
    severity: 'medium',
    parts: ['low', 'moderate'],
    diy: false,
  },
  unbalanced: {
    meaning: 'The load is off-center in the drum, so the washer slowed or stopped the spin to protect itself.',
    cause: 'One heavy item, a small load or a bunched-up load. Worn suspension parts or an unlevel washer are next.',
    firstChecks: [
      'Pause the cycle and spread the load evenly around the drum.',
      'Wash bulky items such as rugs or comforters with a few towels to even out the weight.',
      'Check that the washer sits level and does not rock on the floor.',
    ],
    stopUse: 'Stop if the washer walks across the floor or bangs hard against the cabinet even with a balanced load.',
    nextStep: 'If balanced loads still trip the code, have the suspension, shocks and drum support checked.',
    severity: 'low',
    parts: ['none', 'moderate'],
    diy: true,
  },
  leak: {
    meaning: 'Water has been detected where it should not be, often in the base pan, so the appliance shut down.',
    cause: 'A loose or cracked hose, a worn seal or gasket, or a leaking pump inside the cabinet.',
    firstChecks: [
      'Turn the appliance off and shut off its water supply.',
      'Wipe up water around the base and look for a dripping hose or connection.',
      'Use the correct detergent and amount. Too much suds can overflow and trip a leak sensor.',
    ],
    stopUse: 'Stop using it now. Water in the base can reach wiring and the floor underneath.',
    nextStep: 'The leak source needs to be found and fixed before the appliance will run normally. A technician can trace it.',
    severity: 'high',
    parts: ['low', 'moderate'],
    diy: false,
  },
  overfill: {
    meaning: 'The control sensed more water than it should have, so it stopped the fill and may start draining.',
    cause: 'A water inlet valve that does not close fully, or a faulty water level or pressure sensor.',
    firstChecks: [
      'Turn the appliance off and watch whether water keeps entering with the power off.',
      'If water keeps flowing with the power off, close the water supply valve.',
      'Check the drain hose height. A hose set too low can siphon water and confuse the level reading.',
    ],
    stopUse: 'Stop if water keeps entering with the power off or the tub overflows.',
    nextStep: 'Have the inlet valve and water level sensor tested.',
    severity: 'high',
    parts: ['low', 'moderate'],
    diy: false,
  },
  suds: {
    meaning: 'Too much foam was detected, so the cycle paused to let it break down.',
    cause: 'Too much detergent or a detergent that is not marked HE. Residue from earlier loads adds to it.',
    firstChecks: [
      'Use an HE detergent and measure less of it, especially with soft water.',
      'Let the cycle finish on its own. It usually adds rinses to clear the foam.',
      'Run an empty rinse or cleaning cycle with no detergent.',
    ],
    stopUse: 'Stop if foam spills out of the door or the code shows up with normal detergent amounts.',
    nextStep: 'If the code appears with correct detergent, have the drain and pressure sensor checked.',
    severity: 'low',
    parts: ['none', 'low'],
    diy: true,
  },
  'pressure-sensor': {
    meaning: 'The water level or pressure sensor is giving a reading the control cannot use.',
    cause: 'A clogged or kinked pressure hose, a failed pressure sensor, or a loose connection to it.',
    firstChecks: [
      'Turn the power off for one minute, then restart.',
      'Make sure the drain hose is not kinked and the appliance drains normally.',
    ],
    stopUse: 'Stop if the appliance overfills or runs dry.',
    nextStep: 'Have a technician test the pressure sensor, its hose and the wiring to the control.',
    severity: 'medium',
    parts: ['low', 'moderate'],
    diy: false,
  },
  'temp-sensor': {
    meaning: 'A temperature sensor is reading out of range, open or shorted, so the control cannot judge temperature.',
    cause: 'A failed sensor or thermistor, or a loose or damaged wire to it.',
    firstChecks: [
      'Turn the power off at the breaker or unplug for one minute, then restart.',
      'Note when the code appears and what the appliance was doing.',
    ],
    stopUse: 'Stop if the appliance gets much hotter or colder than normal, or smells hot.',
    nextStep: 'Have the sensor tested for resistance and its wiring checked. A sensor is often a quick part.',
    severity: 'medium',
    parts: ['low', 'moderate'],
    diy: false,
  },
  heating: {
    meaning: 'The appliance is not heating as expected, or the heater circuit reported a fault.',
    cause: 'A failed heating element, a heater relay on the control, or a thermal fuse or limit that has opened.',
    firstChecks: [
      'Check the breaker. Many heating appliances need both halves of a double breaker on.',
      'Turn the power off for one minute, then restart the cycle.',
      'For washers and dishwashers, make sure hot water reaches the appliance.',
    ],
    stopUse: 'Stop if there is a burning smell, smoke or a scorched area.',
    nextStep: 'Have the heater, fuses and heater relay tested.',
    severity: 'medium',
    parts: ['low', 'high'],
    diy: false,
  },
  overheat: {
    meaning: 'The control sensed a temperature far above the setting and shut the heat off.',
    cause: 'A failed temperature sensor, a stuck relay on the control board, or a heating part that will not switch off.',
    firstChecks: [
      'Turn the appliance off at the control. If it keeps heating, switch off the breaker.',
      'Let it cool fully before touching anything.',
    ],
    stopUse: 'Stop using it now and do not restart it until it has been checked.',
    nextStep: 'Have a technician test the sensor and control relays before the appliance is used again.',
    severity: 'high',
    parts: ['low', 'high'],
    diy: false,
  },
  motor: {
    meaning: 'The drive or wash motor is not turning at the speed the control expects, or it drew too much current.',
    cause: 'A jammed drum or pump, a failed motor or motor sensor, or loose motor wiring.',
    firstChecks: [
      'Turn the power off and check that nothing is jammed in the drum, door seal or spray arms.',
      'Reduce an oversized load and restart.',
      'Turn the power off for one minute, then restart.',
    ],
    stopUse: 'Stop if the motor hums without turning, smells hot or makes grinding noises.',
    nextStep: 'Have the motor, motor sensor and control tested.',
    severity: 'medium',
    parts: ['moderate', 'high'],
    diy: false,
  },
  fan: {
    meaning: 'A fan is not running or is turning slower than the control expects.',
    cause: 'Ice or debris blocking the blade, a worn fan motor or a loose connection.',
    firstChecks: [
      'Listen for the fan behind the freezer wall or near the compressor at the bottom rear.',
      'Clear dust and lint from the lower rear grille and condenser area with the unit unplugged.',
      'Make sure food is not blocking the vents inside.',
    ],
    stopUse: 'Move perishable food if the inside starts to warm.',
    nextStep: 'Have the fan motor and any ice buildup checked. Ice on a fan often points to a defrost problem too.',
    severity: 'medium',
    parts: ['low', 'moderate'],
    diy: false,
  },
  defrost: {
    meaning: 'The defrost system did not finish its cycle, so frost may be building up on the evaporator.',
    cause: 'A failed defrost heater, defrost sensor or defrost thermostat.',
    firstChecks: [
      'Check whether the back wall of the freezer has heavy frost.',
      'Make sure the doors close and seal fully.',
      'Keep vents inside clear so air can move.',
    ],
    stopUse: 'Move perishable food if temperatures rise.',
    nextStep: 'Have the defrost heater, sensor and control tested.',
    severity: 'medium',
    parts: ['low', 'moderate'],
    diy: false,
  },
  'ice-maker': {
    meaning: 'The ice maker or a part around it reported a fault, so ice production may stop.',
    cause: 'Ice jammed in the mold or chute, a frozen fill tube, or a failed ice maker module or heater.',
    firstChecks: [
      'Check that the ice maker switch or setting is on.',
      'Empty the bucket and clear any ice jammed in the chute.',
      'Confirm the water filter is not overdue and water flows from the dispenser.',
    ],
    stopUse: 'Turn the ice maker off if water leaks into the freezer or onto the floor.',
    nextStep: 'Have the ice maker, its heater and the water fill checked.',
    severity: 'low',
    parts: ['low', 'moderate'],
    diy: false,
  },
  airflow: {
    meaning: 'Air is not moving through the dryer as freely as it should.',
    cause: 'A full lint screen, a crushed or long vent hose, or a clogged outside vent hood.',
    firstChecks: [
      'Clean the lint screen and the slot it sits in.',
      'With the dryer off, check the vent hose behind it for kinks or crushing.',
      'Go outside and make sure the vent flap opens and air blows out with the dryer running.',
      'Have the full vent run cleaned if it has been a while.',
    ],
    stopUse: 'Stop if the dryer or vent gets very hot or you smell burning lint.',
    nextStep: 'If the vent is clean and the code returns, have the blower and vent run checked.',
    severity: 'low',
    parts: ['none', 'low'],
    diy: true,
  },
  communication: {
    meaning: 'Two control boards, or a board and the display, are not talking to each other.',
    cause: 'A loose wire harness, a failed board or a power surge.',
    firstChecks: [
      'Unplug the appliance or switch off the breaker for five minutes, then restore power.',
      'Check that the outlet works and the cord is fully plugged in.',
    ],
    stopUse: 'Move perishable food if a refrigerator stops cooling.',
    nextStep: 'If the code returns after a reset, have the harness and boards tested.',
    severity: 'medium',
    parts: ['low', 'high'],
    diy: false,
  },
  'control-board': {
    meaning: 'The main control found a fault in itself or in a circuit it runs.',
    cause: 'A failed control board or relay, often after a power surge, or a fault in a part the board controls.',
    firstChecks: [
      'Turn the power off at the breaker for five minutes, then restore it.',
      'Write down the code and the full model number before a technician visit.',
    ],
    stopUse: 'Stop if the appliance turns parts on by itself, heats with no setting, or shows burn marks.',
    nextStep: 'Have the control and the parts it runs tested before replacing the board.',
    severity: 'medium',
    parts: ['moderate', 'high'],
    diy: false,
  },
  'stuck-key': {
    meaning: 'A button on the touchpad reads as pressed for too long, or the keypad has a short.',
    cause: 'A stuck or worn key, moisture or grease under the panel, or a failed touchpad.',
    firstChecks: [
      'Wipe the control panel dry and make sure nothing is pressing on it.',
      'Turn the power off for one minute, then restore it.',
      'Avoid spraying cleaner directly on the panel.',
    ],
    stopUse: 'Stop if the appliance turns itself on or changes settings on its own.',
    nextStep: 'If the code returns, the touchpad or control panel needs testing.',
    severity: 'low',
    parts: ['low', 'moderate'],
    diy: false,
  },
  power: {
    meaning: 'The appliance lost power or saw a supply voltage outside the range it needs.',
    cause: 'A power outage or flicker, a tripped breaker, a loose cord or outlet, or a supply problem.',
    firstChecks: [
      'Press Start or Power to clear a power failure code after an outage.',
      'Check the breaker. Electric dryers and ranges need both halves of a double breaker on.',
      'Make sure the cord is fully plugged into a working outlet with no extension cord.',
    ],
    stopUse: 'Stop if the cord, plug or outlet is warm, discolored or smells burnt.',
    nextStep: 'If the code keeps returning, have the supply, cord and terminal block checked.',
    severity: 'low',
    parts: ['none', 'moderate'],
    diy: true,
  },
  'demo-mode': {
    meaning: 'The appliance is in showroom or demo mode. Lights and display work but it does not cool or heat.',
    cause: 'Demo mode was left on from the store or turned on by a button combination.',
    firstChecks: [
      'Look up the button combination in the owner manual for the model and hold it to turn demo mode off.',
      'Wait a few hours after turning demo mode off to confirm it starts cooling.',
    ],
    stopUse: 'No safety concern, but move perishable food until it is cooling again.',
    nextStep: 'If demo mode will not turn off or it still does not cool, have the controls checked.',
    severity: 'low',
    parts: ['none', 'none'],
    diy: true,
  },
  filter: {
    meaning: 'A filter is clogged and is slowing water flow through the appliance.',
    cause: 'Food debris, labels or grit packed in the filter or filter housing.',
    firstChecks: [
      'Turn the power off, remove the filter and rinse it under warm water with a soft brush.',
      'Clear any debris from the filter housing and refit the filter so it locks.',
      'Scrape plates before loading to keep the filter clear.',
    ],
    stopUse: 'Stop if water stays in the tub after the filter is cleaned.',
    nextStep: 'If a clean filter does not clear the code, have the pumps and drain checked.',
    severity: 'low',
    parts: ['none', 'low'],
    diy: true,
  },
  circulation: {
    meaning: 'The wash or circulation pump is not moving water through the spray system as expected.',
    cause: 'A blocked or failed circulation pump, low water level or a jammed impeller.',
    firstChecks: [
      'Turn the power off and clean the filter and sump area.',
      'Check that the spray arms turn freely and their holes are clear.',
    ],
    stopUse: 'Stop if the pump hums loudly, smells hot or leaks.',
    nextStep: 'Have the circulation pump and its wiring tested.',
    severity: 'medium',
    parts: ['moderate', 'high'],
    diy: false,
  },
};

export const errorCodes: ErrorCodeRecord[] = [
  // Samsung washers
  { appliance: 'washer', brands: ['samsung'], code: '4C', aliases: ['4E'], title: 'Water supply: the washer is not filling', category: 'water-supply', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: '5C', aliases: ['5E', 'nd'], title: 'Drain fault: water is not draining in time', category: 'drain', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: 'UB', aliases: ['UE'], title: 'Unbalanced load: the spin was slowed or stopped', category: 'unbalanced', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: 'dC', aliases: ['dE', 'dE1'], title: 'Door or lid is not closed or locked', category: 'door-lock', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: 'LC', aliases: ['LE'], title: 'Leak detected or water draining too soon', category: 'leak', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: 'OC', aliases: ['OE', 'OF'], title: 'Overfill: too much water in the tub', category: 'overfill', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: 'HC', aliases: ['HE'], title: 'Water heater fault', category: 'heating', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: 'tC', aliases: ['tE'], title: 'Water temperature sensor fault', category: 'temp-sensor', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: '3C', aliases: ['3E'], title: 'Motor fault: the drum is not turning as expected', category: 'motor', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: 'Sd', aliases: ['SUd'], title: 'Too many suds in the drum', category: 'suds', source: SEED },
  { appliance: 'washer', brands: ['samsung'], code: '9C', aliases: ['9E', '9C1'], title: 'Supply voltage outside the normal range', category: 'power', source: SEED },

  // LG washers (also shown by LG-built Kenmore models)
  { appliance: 'washer', brands: ['lg', 'kenmore'], code: 'IE', title: 'Inlet error: water is not filling', category: 'water-supply', source: SEED },
  { appliance: 'washer', brands: ['lg', 'kenmore'], code: 'OE', title: 'Drain error: water is not draining', category: 'drain', source: SEED },
  { appliance: 'washer', brands: ['lg', 'kenmore'], code: 'UE', title: 'Unbalanced load: spin was cut short', category: 'unbalanced', source: SEED },
  { appliance: 'washer', brands: ['lg', 'kenmore'], code: 'dE', title: 'Door error: the door is not closed or locked', category: 'door-lock', source: SEED },
  { appliance: 'washer', brands: ['lg'], code: 'LE', title: 'Locked motor: the drum could not turn', category: 'motor', cause: 'An overloaded or jammed drum, or a fault in the motor, its rotor position sensor or wiring.', source: SEED },
  { appliance: 'washer', brands: ['lg'], code: 'FE', title: 'Overfill: water kept filling past the set level', category: 'overfill', source: SEED },
  { appliance: 'washer', brands: ['lg'], code: 'PE', title: 'Water level sensor fault', category: 'pressure-sensor', source: SEED },
  { appliance: 'washer', brands: ['lg'], code: 'tE', title: 'Heater or water temperature sensor fault', category: 'temp-sensor', cause: 'A failed water temperature thermistor or heater circuit, or loose wiring between them and the control.', source: SEED },
  { appliance: 'washer', brands: ['lg'], code: 'SUD', title: 'Too many suds detected', category: 'suds', source: SEED },
  { appliance: 'washer', brands: ['lg'], code: 'CE', title: 'Motor overcurrent: the motor drew too much power', category: 'motor', cause: 'An overloaded drum, something jammed in the drum or a failing motor or motor control.', source: SEED },

  // Whirlpool and Maytag front-load washers
  { appliance: 'washer', brands: ['whirlpool', 'maytag'], code: 'F8 E1', title: 'Long fill: water is not reaching the washer fast enough', category: 'water-supply', source: SEED },
  { appliance: 'washer', brands: ['whirlpool', 'maytag'], code: 'F9 E1', title: 'Long drain: water is taking too long to pump out', category: 'drain', source: SEED },
  { appliance: 'washer', brands: ['whirlpool', 'maytag'], code: 'F5 E2', title: 'Door lock fault: the door will not lock', category: 'door-lock', source: SEED },
  { appliance: 'washer', brands: ['whirlpool', 'maytag'], code: 'F7 E1', title: 'Motor speed fault: the drum is not reaching speed', category: 'motor', source: SEED },
  { appliance: 'washer', brands: ['whirlpool', 'maytag'], code: 'F3 E1', title: 'Pressure sensor fault: water level reading is off', category: 'pressure-sensor', source: SEED },

  // Whirlpool, Maytag, Amana and Kenmore top-load washers
  { appliance: 'washer', brands: ['whirlpool', 'maytag', 'amana', 'kenmore'], code: 'LF', title: 'Long fill: the tub is filling too slowly', category: 'water-supply', source: SEED },
  { appliance: 'washer', brands: ['whirlpool', 'maytag', 'amana', 'kenmore'], code: 'Ld', title: 'Long drain: the washer could not drain in time', category: 'drain', source: SEED },
  { appliance: 'washer', brands: ['whirlpool', 'maytag', 'amana', 'kenmore'], code: 'Sd', title: 'Suds detected: extra rinses are being added', category: 'suds', source: SEED },
  { appliance: 'washer', brands: ['whirlpool', 'maytag', 'amana', 'kenmore'], code: 'uL', title: 'Unbalanced load: spin was stopped', category: 'unbalanced', source: SEED },

  // Older Whirlpool Duet and Kenmore Elite front-load washers
  { appliance: 'washer', brands: ['whirlpool', 'kenmore'], code: 'F20', title: 'Not filling: no water detected in the tub', category: 'water-supply', source: SEED },
  { appliance: 'washer', brands: ['whirlpool', 'kenmore'], code: 'F21', title: 'Long drain: water did not pump out in time', category: 'drain', source: SEED },

  // Frigidaire and Electrolux front-load washers
  { appliance: 'washer', brands: ['frigidaire', 'electrolux'], code: 'E11', title: 'Fill fault: water is not filling in time', category: 'water-supply', source: SEED },
  { appliance: 'washer', brands: ['frigidaire', 'electrolux'], code: 'E21', title: 'Drain fault: water is draining too slowly', category: 'drain', source: SEED },
  { appliance: 'washer', brands: ['frigidaire', 'electrolux'], code: 'E35', title: 'Overfill: water level went too high', category: 'overfill', source: SEED },
  { appliance: 'washer', brands: ['frigidaire', 'electrolux'], code: 'E41', title: 'Door fault: the door is open or will not lock', category: 'door-lock', source: SEED },

  // LG refrigerators (also shown by LG-built Kenmore models)
  { appliance: 'refrigerator', brands: ['lg', 'kenmore'], code: 'Er IF', title: 'Ice maker fan fault', category: 'fan', cause: 'Ice buildup around the ice compartment fan or a failed fan motor.', source: SEED },
  { appliance: 'refrigerator', brands: ['lg', 'kenmore'], code: 'Er FF', title: 'Freezer fan fault', category: 'fan', cause: 'Frost or ice blocking the freezer evaporator fan, or a worn fan motor.', source: SEED },
  { appliance: 'refrigerator', brands: ['lg', 'kenmore'], code: 'Er CF', title: 'Condenser fan fault', category: 'fan', cause: 'Dust or debris around the condenser fan at the bottom rear, or a failed fan motor.', source: SEED },
  { appliance: 'refrigerator', brands: ['lg', 'kenmore'], code: 'Er rS', title: 'Refrigerator temperature sensor fault', category: 'temp-sensor', source: SEED },
  { appliance: 'refrigerator', brands: ['lg', 'kenmore'], code: 'Er FS', title: 'Freezer temperature sensor fault', category: 'temp-sensor', source: SEED },
  { appliance: 'refrigerator', brands: ['lg', 'kenmore'], code: 'Er dH', title: 'Defrost heater fault: the freezer is not defrosting', category: 'defrost', source: SEED },
  { appliance: 'refrigerator', brands: ['lg'], code: 'Er CO', title: 'Communication fault between the control boards', category: 'communication', source: SEED },
  { appliance: 'refrigerator', brands: ['lg'], code: 'Er 22', title: 'Compressor relay or start circuit fault', category: 'control-board', cause: 'A failed compressor relay or start circuit on the main board, or a compressor that will not start.', severity: 'high', source: SEED },
  { appliance: 'refrigerator', brands: ['lg'], code: 'Er gF', title: 'Water flow sensor fault', category: 'water-supply', cause: 'Low water pressure, a clogged water filter or a failed flow sensor in the water line.', source: SEED },

  // Samsung refrigerators
  { appliance: 'refrigerator', brands: ['samsung'], code: '21E', aliases: ['21C'], title: 'Freezer fan fault', category: 'fan', cause: 'Ice buildup on the freezer evaporator fan, often from a defrost problem, or a failed fan motor.', source: SEED },
  { appliance: 'refrigerator', brands: ['samsung'], code: '22E', aliases: ['22C'], title: 'Fresh-food fan fault', category: 'fan', cause: 'Ice on the fresh-food evaporator fan or a failed fan motor.', source: SEED },
  { appliance: 'refrigerator', brands: ['samsung'], code: '40E', aliases: ['40C'], title: 'Ice room fan fault', category: 'fan', cause: 'Ice around the ice compartment fan in the door or a failed fan motor.', source: SEED },
  { appliance: 'refrigerator', brands: ['samsung'], code: '5E', title: 'Fresh-food defrost sensor fault', category: 'defrost', source: SEED },
  { appliance: 'refrigerator', brands: ['samsung'], code: '33E', title: 'Ice maker fill tube heater fault', category: 'ice-maker', cause: 'A failed heater on the ice maker fill tube, which can let the tube freeze shut.', source: SEED },
  { appliance: 'refrigerator', brands: ['samsung'], code: '39E', aliases: ['39C'], title: 'Ice maker function fault', category: 'ice-maker', source: SEED },
  { appliance: 'refrigerator', brands: ['samsung'], code: 'PC ER', title: 'Communication fault between the display and main board', category: 'communication', source: SEED },
  { appliance: 'refrigerator', brands: ['samsung'], code: 'OF OF', title: 'Demo mode is on: the fridge is not cooling', category: 'demo-mode', source: SEED },

  // Bosch dishwashers (some codes also on Thermador, which shares the platform)
  { appliance: 'dishwasher', brands: ['bosch', 'thermador'], code: 'E15', title: 'Water in the base: leak protection has turned on', category: 'leak', source: SEED },
  { appliance: 'dishwasher', brands: ['bosch', 'thermador'], code: 'E24', title: 'Drain fault: the filter or drain hose may be blocked', category: 'drain', source: SEED },
  { appliance: 'dishwasher', brands: ['bosch', 'thermador'], code: 'E25', title: 'Drain pump blocked: debris may be under the pump cover', category: 'drain', cause: 'Glass, seeds or bones caught under the drain pump cover, or a failed drain pump.', source: SEED },
  { appliance: 'dishwasher', brands: ['bosch'], code: 'E22', title: 'Filter clogged: water is not flowing freely', category: 'filter', source: SEED },
  { appliance: 'dishwasher', brands: ['bosch'], code: 'E09', title: 'Heating circuit fault', category: 'heating', cause: 'A fault in the heater built into the circulation pump, or its wiring.', source: SEED },
  { appliance: 'dishwasher', brands: ['bosch'], code: 'E14', title: 'Flow meter or fill fault', category: 'water-supply', source: SEED },
  { appliance: 'dishwasher', brands: ['bosch'], code: 'E21', title: 'Wash pump fault: the circulation pump is not running', category: 'circulation', source: SEED },

  // Samsung dishwashers
  { appliance: 'dishwasher', brands: ['samsung'], code: '4C', aliases: ['4E'], title: 'Water supply: the dishwasher is not filling', category: 'water-supply', source: SEED },
  { appliance: 'dishwasher', brands: ['samsung'], code: 'OC', aliases: ['OE'], title: 'Overfill: too much water in the tub', category: 'overfill', source: SEED },
  { appliance: 'dishwasher', brands: ['samsung'], code: 'LC', aliases: ['LE'], title: 'Leak detected in the base', category: 'leak', source: SEED },
  { appliance: 'dishwasher', brands: ['samsung'], code: 'HE', aliases: ['HC'], title: 'Heating fault: water is not heating', category: 'heating', source: SEED },
  { appliance: 'dishwasher', brands: ['samsung'], code: '5C', aliases: ['5E'], title: 'Drain fault: water is left in the tub', category: 'drain', source: SEED },
  { appliance: 'dishwasher', brands: ['samsung'], code: '3C', aliases: ['3E'], title: 'Wash motor fault', category: 'motor', source: SEED },

  // LG dishwashers
  { appliance: 'dishwasher', brands: ['lg'], code: 'AE', title: 'Leak detected: water in the base pan', category: 'leak', source: SEED },
  { appliance: 'dishwasher', brands: ['lg'], code: 'OE', title: 'Drain fault: water is not draining', category: 'drain', source: SEED },
  { appliance: 'dishwasher', brands: ['lg'], code: 'IE', title: 'Inlet fault: water is not filling', category: 'water-supply', source: SEED },
  { appliance: 'dishwasher', brands: ['lg'], code: 'HE', title: 'Heating fault', category: 'heating', source: SEED },
  { appliance: 'dishwasher', brands: ['lg'], code: 'tE', title: 'Water temperature sensor fault', category: 'temp-sensor', source: SEED },
  { appliance: 'dishwasher', brands: ['lg'], code: 'bE', title: 'Too many suds: wrong or too much detergent', category: 'suds', source: SEED },
  { appliance: 'dishwasher', brands: ['lg'], code: 'LE', title: 'Wash motor fault', category: 'motor', source: SEED },
  { appliance: 'dishwasher', brands: ['lg'], code: 'FE', title: 'Overfill: too much water entered the tub', category: 'overfill', source: SEED },

  // Frigidaire and Electrolux dishwashers
  { appliance: 'dishwasher', brands: ['frigidaire', 'electrolux'], code: 'i10', title: 'Fill fault: water did not reach the tub in time', category: 'water-supply', source: SEED },
  { appliance: 'dishwasher', brands: ['frigidaire', 'electrolux'], code: 'i20', title: 'Drain fault: water is not pumping out', category: 'drain', source: SEED },
  { appliance: 'dishwasher', brands: ['frigidaire', 'electrolux'], code: 'i30', title: 'Leak detected in the base', category: 'leak', source: SEED },
  { appliance: 'dishwasher', brands: ['frigidaire', 'electrolux'], code: 'i50', title: 'Circulation motor fault', category: 'circulation', source: SEED },
  { appliance: 'dishwasher', brands: ['frigidaire', 'electrolux'], code: 'i60', title: 'Heater fault: water or drying heat is low', category: 'heating', source: SEED },

  // Miele dishwashers
  { appliance: 'dishwasher', brands: ['miele'], code: 'F10', title: 'Water inlet fault: not enough water came in', category: 'water-supply', source: SEED },
  { appliance: 'dishwasher', brands: ['miele'], code: 'F11', title: 'Drain fault: water did not pump out', category: 'drain', source: SEED },
  { appliance: 'dishwasher', brands: ['miele'], code: 'F70', title: 'Waterproof system activated: water in the base', category: 'leak', source: SEED },

  // Whirlpool, KitchenAid and Maytag dishwashers
  { appliance: 'dishwasher', brands: ['whirlpool', 'kitchenaid', 'maytag'], code: 'F2 E1', title: 'Stuck key: a button on the panel reads as pressed', category: 'stuck-key', source: SEED },
  { appliance: 'dishwasher', brands: ['whirlpool', 'kitchenaid', 'maytag'], code: 'F1 E1', title: 'Control fault: the main control reported an error', category: 'control-board', source: SEED },

  // LG dryers
  { appliance: 'dryer', brands: ['lg'], code: 'd80', title: 'Vent about 80 percent restricted: airflow is reduced', category: 'airflow', source: SEED },
  { appliance: 'dryer', brands: ['lg'], code: 'd90', title: 'Vent about 90 percent restricted: airflow is low', category: 'airflow', source: SEED },
  { appliance: 'dryer', brands: ['lg'], code: 'd95', title: 'Vent about 95 percent restricted: airflow is very low', category: 'airflow', severity: 'medium', source: SEED },
  { appliance: 'dryer', brands: ['lg'], code: 'tE1', title: 'Temperature sensor fault', category: 'temp-sensor', source: SEED },
  { appliance: 'dryer', brands: ['lg'], code: 'tE2', title: 'Second temperature sensor fault', category: 'temp-sensor', source: SEED },
  { appliance: 'dryer', brands: ['lg'], code: 'HS', title: 'Moisture sensor fault: dryness is not being read', category: 'temp-sensor', cause: 'Dirty moisture sensor bars inside the drum, or a fault in the sensor wiring.', severity: 'low', source: SEED },
  { appliance: 'dryer', brands: ['lg'], code: 'PF', title: 'Power failure: the cycle was interrupted', category: 'power', source: SEED },
  { appliance: 'dryer', brands: ['lg'], code: 'nP', title: 'No power to the heater: the dryer runs but will not heat', category: 'power', cause: 'One half of a double breaker tripped, a loose terminal block connection, or for gas models a closed gas supply.', source: SEED },
  { appliance: 'dryer', brands: ['lg'], code: 'dE', title: 'Door is open or the door switch is not closing', category: 'door-lock', cause: 'A door that is not fully closed or a failed door switch.', source: SEED },

  // Samsung dryers
  { appliance: 'dryer', brands: ['samsung'], code: 'HE', aliases: ['HC'], title: 'Heating fault: the dryer is not heating', category: 'heating', source: SEED },
  { appliance: 'dryer', brands: ['samsung'], code: 'tE', aliases: ['tS'], title: 'Temperature sensor fault', category: 'temp-sensor', source: SEED },
  { appliance: 'dryer', brands: ['samsung'], code: 'dE', aliases: ['dO'], title: 'Door is open or the door switch has failed', category: 'door-lock', source: SEED },

  // Whirlpool, Maytag and Kenmore dryers
  { appliance: 'dryer', brands: ['whirlpool', 'maytag', 'kenmore'], code: 'F01', title: 'Main control fault', category: 'control-board', source: SEED },
  { appliance: 'dryer', brands: ['whirlpool', 'maytag', 'kenmore'], code: 'F22', title: 'Exhaust thermistor open', category: 'temp-sensor', source: SEED },
  { appliance: 'dryer', brands: ['whirlpool', 'maytag', 'kenmore'], code: 'F23', title: 'Exhaust thermistor shorted', category: 'temp-sensor', source: SEED },
  { appliance: 'dryer', brands: ['whirlpool', 'maytag', 'kenmore'], code: 'PF', title: 'Power failure: the cycle was interrupted', category: 'power', source: SEED },
  { appliance: 'dryer', brands: ['whirlpool', 'maytag', 'kenmore'], code: 'L2', title: 'Low or no line voltage to the dryer', category: 'power', source: SEED },

  // GE ovens and ranges
  { appliance: 'oven', brands: ['ge'], code: 'F1', title: 'Control board fault', category: 'control-board', source: SEED },
  { appliance: 'oven', brands: ['ge'], code: 'F2', title: 'Oven overheating: temperature went too high', category: 'overheat', source: SEED },
  { appliance: 'oven', brands: ['ge'], code: 'F3', title: 'Oven temperature sensor open', category: 'temp-sensor', source: SEED },
  { appliance: 'oven', brands: ['ge'], code: 'F4', title: 'Oven temperature sensor shorted', category: 'temp-sensor', source: SEED },
  { appliance: 'oven', brands: ['ge'], code: 'F7', title: 'Stuck or failed key on the touchpad', category: 'stuck-key', source: SEED },
  { appliance: 'oven', brands: ['ge'], code: 'F9', title: 'Door lock fault', category: 'door-lock', source: SEED },

  // Frigidaire and Electrolux ovens and ranges
  { appliance: 'oven', brands: ['frigidaire', 'electrolux'], code: 'F10', title: 'Runaway temperature: the oven ran far hotter than set', category: 'overheat', severity: 'critical', source: SEED },
  { appliance: 'oven', brands: ['frigidaire', 'electrolux'], code: 'F11', title: 'Shorted key on the touchpad', category: 'stuck-key', source: SEED },
  { appliance: 'oven', brands: ['frigidaire', 'electrolux'], code: 'F30', title: 'Oven temperature sensor open', category: 'temp-sensor', source: SEED },
  { appliance: 'oven', brands: ['frigidaire', 'electrolux'], code: 'F31', title: 'Oven temperature sensor shorted', category: 'temp-sensor', source: SEED },

  // Whirlpool and KitchenAid ovens and ranges
  { appliance: 'oven', brands: ['whirlpool', 'kitchenaid'], code: 'F3 E0', title: 'Oven temperature sensor open', category: 'temp-sensor', source: SEED },
  { appliance: 'oven', brands: ['whirlpool', 'kitchenaid'], code: 'F3 E1', title: 'Oven temperature sensor shorted', category: 'temp-sensor', source: SEED },

  // Samsung ranges and ovens
  { appliance: 'oven', brands: ['samsung'], code: 'SE', title: 'Shorted key on the control panel', category: 'stuck-key', source: SEED },
  { appliance: 'oven', brands: ['samsung'], code: 'C-d0', title: 'Door lock fault', category: 'door-lock', source: SEED },

  // Samsung microwaves
  { appliance: 'microwave', brands: ['samsung'], code: 'SE', title: 'Shorted key on the control panel', category: 'stuck-key', source: SEED },
];
