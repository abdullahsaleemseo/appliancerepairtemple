import type { Brand } from './types';
import { site } from '@/config/site';

const loc = `${site.citySlug}-${site.stateSlug}`;

export const brands: Brand[] = [
  {
    key: 'whirlpool',
    slug: `whirlpool-appliance-repair-${loc}`,
    name: 'Whirlpool',
    h1: 'Whirlpool Appliance Repair in Temple, TX: Washers, Dryers, Fridges',
    metaTitle: 'Whirlpool Appliance Repair Temple TX | Washer Won’t Spin?',
    metaDescription:
      'Whirlpool washer stuck on F9 E1, dryer blowing cold or ice maker quit? Whirlpool appliance repair in Temple, TX for 76501, 76502, 76504. Call (254) 615-2088.',
    intro: [
      'Whirlpool washer stuck mid-cycle, dryer blowing cold or refrigerator warming up? Appliance Repair Temple’s line puts you in touch with a technician who works on Whirlpool washers, dryers, refrigerators, dishwashers, ranges and over-the-range microwaves in homes across Temple, TX.',
      'Whirlpool is one of the most common names in Temple kitchens and laundry rooms, from builder-grade sets in rentals near downtown to Cabrio top-loaders and French door refrigerators in newer West Temple homes. Older Duet front-loaders still turn up in a lot of laundry rooms too. Whirlpool Corporation also owns Maytag, KitchenAid, JennAir and Amana, so many parts are shared across those brands and are usually easy to find.',
      'Whirlpool model numbers read like a short description of the appliance. Most start with W, and the next letters name the product: WTW is a top-load washer, WFW a front-load washer, WED and WGD an electric or gas dryer, WRF a French door refrigerator, WRS a side-by-side, WRT a top-freezer, WDT or WDF a dishwasher, WFE or WFG a freestanding electric or gas range, and WMH an over-the-range microwave. The letters and digits at the end mark the model year and color, and they decide which parts fit.',
      'Before any part is swapped, ask the technician to explain what the test showed and what the repair involves, and give your OK first.',
    ],
    appliances: [
      { key: 'washer', note: 'Cabrio and other top-loaders, Duet and newer front-loaders, agitator and high-efficiency models' },
      { key: 'dryer', note: 'Electric (WED) and gas (WGD) dryers, including stacked and Duet pairs' },
      { key: 'refrigerator', note: 'Top-freezer, bottom-freezer, side-by-side and French door' },
      { key: 'dishwasher', note: 'Built-in dishwashers with removable filters under the lower spray arm' },
      { key: 'oven', note: 'Electric and gas freestanding and slide-in ranges, and wall ovens' },
      { key: 'microwave', note: 'Over-the-range microwaves (WMH models)' },
    ],
    issues: [
      {
        title: 'Top-load washer won’t spin or shows F9 E1',
        text: 'Many Cabrio-style top-loaders lock the lid before spinning. A worn lid lock, a broken lid strike or water left in the drum stops the cycle. On models with a two-part display, F9 E1 usually means a long drain, so a clogged pump or a kinked hose comes first, and F8 E1 points to a slow fill.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'Whirlpool dryers protect themselves with a thermal fuse that opens when the cabinet overheats, usually behind a restricted vent. Many recent models also have a Check Vent light. The fuse, element or gas igniter gets replaced, and the vent should be cleared at the same visit so the new part lasts.',
      },
      {
        title: 'Refrigerator ice maker stopped',
        text: 'The usual suspects are the water inlet valve, a frozen fill tube, a filter past its date or the ice maker module itself. Hard water in Temple slows the inlet screen over time. Each of those can be tested in a few minutes, which keeps the guesswork out of the parts order.',
      },
      {
        title: 'Dishwasher leaving water behind',
        text: 'Most Whirlpool-family dishwashers built in the last decade have a filter that you twist out from under the lower spray arm. It does not clean itself, and a packed filter is the first check, then the drain hose loop and the pump.',
      },
      {
        title: 'Duet front-loader smells or leaves the drum wet',
        text: 'The door boot traps water and lint, and the drain pump filter behind the lower front panel collects coins and hair. A boot that has torn or a pump that hums without moving water are common Duet repairs.',
      },
    ],
    haveReady: [
      'The full model and serial number. A clear photo of the tag is perfect.',
      'Whether a dryer or range is gas or electric (the model prefix often tells you).',
      'What it is doing, and any two-part code such as F9 E1 or a flashing light pattern.',
      'Roughly how old it is, and whether it is still under the manufacturer’s warranty.',
      'Your ZIP code, so the call reaches a provider who works in your part of Temple.',
    ],
    modelLocations: [
      { appliance: 'Top-load washer', where: 'Under the lid, on the tub rim, or on the back of the control panel' },
      { appliance: 'Front-load washer', where: 'Inside the door, on the rim of the opening' },
      { appliance: 'Dryer', where: 'Inside the door, on the rim of the opening, or on the upper back of the cabinet' },
      { appliance: 'Refrigerator', where: 'Inside the fresh-food section, on a side wall near the top' },
      { appliance: 'Dishwasher', where: 'On the edge of the tub or the door frame, near the top' },
      { appliance: 'Range or oven', where: 'Inside the storage drawer or on the oven frame when the door is open' },
    ],
    modelSource: { name: 'Whirlpool product help: where is my model and serial number located?', url: 'https://producthelp.whirlpool.com/FAQ/Where_is_my_Model_and_Serial_Number_Located%3F' },
    faqs: [
      {
        q: 'Can the same technician look at my Maytag, KitchenAid or Amana?',
        a: 'Usually, yes. Maytag, KitchenAid, JennAir and Amana are Whirlpool Corporation brands, and a lot of their pumps, valves, igniters and control parts overlap. Give the brand and the full model number on the call so the right parts can be checked.',
      },
      {
        q: 'Is this Whirlpool factory service?',
        a: 'No. Appliance Repair Temple is not affiliated with or authorized by Whirlpool. The technicians reached through this line handle Whirlpool appliances that are out of warranty, or for owners who would rather use someone local.',
      },
      {
        q: 'My Whirlpool is still under warranty. Who should I call?',
        a: 'Contact Whirlpool first, since outside repair may not be covered by the manufacturer’s warranty. Once coverage has ended, call (254) 615-2088 and describe the problem.',
      },
      {
        q: 'What does F9 E1 or F8 E1 mean on my Whirlpool washer?',
        a: 'On many Whirlpool washers the F number names the system and the E number the fault. F9 E1 usually flags a long drain and F8 E1 a long or slow fill, but meanings vary by model. Check the drain hose and the water valves, then note the code for the technician.',
      },
      {
        q: 'Are Whirlpool parts easy to get in Temple?',
        a: 'Common Whirlpool parts such as lid locks, thermal fuses, inlet valves and igniters are widely stocked and can often be swapped on the first visit. Control boards and some model-year parts may need to be ordered, so ask about timing when you call.',
      },
      {
        q: 'How much does Whirlpool appliance repair cost?',
        a: 'It depends on the appliance and the part, so this site does not list prices. Ask the provider about pricing and any warranty on the work before the repair starts.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'ge',
    slug: `ge-appliance-repair-${loc}`,
    name: 'GE',
    h1: 'GE & GE Profile Appliance Repair in Temple, TX',
    metaTitle: 'GE Appliance Repair Temple TX | Oven F Codes, Fridge Warm',
    metaDescription:
      'GE oven showing F3 or F7, fridge warming up or dishwasher not draining? GE, GE Profile and Café appliance repair in Temple, TX homes. Call (254) 615-2088.',
    intro: [
      'GE oven slow to heat, refrigerator warming up or dishwasher leaving water behind? One call to Appliance Repair Temple puts you in touch with a technician who works on GE and GE Profile ranges, wall ovens, cooktops, refrigerators, dishwashers, washers, dryers and over-the-range microwaves in Temple, TX.',
      'GE appliances are everywhere in Temple, especially the ranges, refrigerators and dishwashers that came with the house in neighborhoods built in the 1990s and 2000s. GE Appliances has been owned by Haier since 2016 and sells several lines: GE, GE Profile, Café and Monogram, plus Hotpoint, which shares many GE parts. Mention which line you have, because parts and features vary between them.',
      'The first letters of a GE model number usually tell you the line and the product. A leading P means GE Profile, C means Café and Z means Monogram. JB is an electric freestanding range and JGB a gas one, JS and JGS are slide-ins, GTS and GTE are top-freezer refrigerators, GSS a side-by-side, GNE and GFE French door, GDT or GDF a dishwasher, GTW and GTD a top-load washer and dryer, and JVM an over-the-range microwave.',
      'A careful technician tests the suspect part, shows you the reading and starts work only after your OK.',
    ],
    appliances: [
      { key: 'oven', note: 'JB and JGB freestanding ranges, slide-ins, wall ovens and cooktops' },
      { key: 'refrigerator', note: 'Top-freezer, side-by-side and French door, including Profile and Café' },
      { key: 'dishwasher', note: 'Built-in dishwashers, front and hidden top control' },
      { key: 'washer', note: 'Top-load and front-load washers' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'microwave', note: 'Over-the-range (JVM) and built-in microwaves' },
    ],
    issues: [
      {
        title: 'Gas oven slow to heat or not lighting',
        text: 'On JGB and other gas ranges, a weak hot surface igniter is the most common cause. It can glow orange and still draw too little current to open the gas valve. A meter test on the igniter comes before anyone looks at the valve or the board.',
      },
      {
        title: 'Oven showing an F code',
        text: 'GE ovens flag faults with F codes. On many models F3 or F4 points to the oven temperature sensor, which should read about 1,100 ohms at room temperature, and F7 to a stuck or failed key on the touchpad. The sensor is a quick part; a touchpad or control is a bigger job.',
      },
      {
        title: 'Refrigerator warm, freezer still cold',
        text: 'Usually a frosted evaporator coil from a defrost problem, or an evaporator fan that stopped. On many GE side-by-sides and French doors the damper between compartments can also stick. Either way, cold air is not reaching the fresh-food side.',
      },
      {
        title: 'Dishwasher not draining',
        text: 'Check the filter, the drain hose loop under the sink and the disposal connection first. If those are clear, the drain pump is the likely cause. Hidden-control GE dishwashers often show a blinking light rather than a code.',
      },
      {
        title: 'Electric burner or element not heating',
        text: 'A burned element, a loose or scorched terminal block, or a failed infinite switch. All are standard parts on JB-series and most other GE ranges.',
      },
    ],
    haveReady: [
      'The full model and serial number. GE model numbers start with a letter. A photo of the tag works.',
      'Which GE line it is: GE, GE Profile, Café, Monogram or Hotpoint.',
      'Gas or electric, for ranges, cooktops and dryers.',
      'What the appliance is doing, and any F code on the display.',
      'Whether it is still under the manufacturer’s warranty.',
    ],
    modelLocations: [
      { appliance: 'Range', where: 'Behind the oven door on the front frame, inside the storage drawer on the front frame, or under the cooktop' },
      { appliance: 'Cooktop', where: 'Under a burner, under a control knob, or on the underside of the cooktop' },
      { appliance: 'Refrigerator', where: 'Inside the fresh-food section, on a side wall or ceiling' },
      { appliance: 'Dishwasher', where: 'Along the top or side edge of the door or the tub frame' },
      { appliance: 'Washer and dryer', where: 'Under the lid, inside the door rim or on the back panel' },
    ],
    modelSource: { name: 'GE Appliances: find your range model and serial numbers', url: 'https://www.geappliances.com/ge/find-model-serial-number/ranges.htm' },
    faqs: [
      {
        q: 'Do Profile, Café and Monogram need different parts?',
        a: 'Often they do. The model prefix (P, C or Z) separates the lines, and trim, controls and some burners are line-specific. Ask the technician to check parts against the full model number before the visit.',
      },
      {
        q: 'Is Appliance Repair Temple connected to GE Appliances?',
        a: 'No. It is not affiliated with, authorized by or paid by GE Appliances or Haier. If your appliance is still under the GE warranty, contact GE Appliances first.',
      },
      {
        q: 'My GE oven shows F3. Is it safe to keep using?',
        a: 'F3 on many GE ovens points to the temperature sensor circuit, and the oven usually shuts off the bake cycle on its own. Turn it off at the control, note the code and the model number, and have the sensor and its wiring tested.',
      },
      {
        q: 'Where is the model number on my GE range?',
        a: 'Open the oven door and check the front frame, or pull out the storage drawer and look on the frame. On some models it is under the cooktop. GE model numbers start with a letter, such as JB or JGB.',
      },
      {
        q: 'Can a Hotpoint appliance be repaired the same way?',
        a: 'Yes. Hotpoint is part of GE Appliances, and many Hotpoint ranges, refrigerators and washers share GE parts. Have the model number ready so the technician can match them.',
      },
      {
        q: 'What does GE appliance repair cost in Temple?',
        a: 'This site does not list prices, since it depends on the appliance and the part. Before the repair starts, ask the provider for the price and whether the work carries any warranty.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'samsung',
    slug: `samsung-appliance-repair-${loc}`,
    name: 'Samsung',
    h1: 'Samsung Appliance Repair in Temple, TX: Fridges, Laundry & Ranges',
    metaTitle: 'Samsung Appliance Repair Temple TX | Fridge & Washer Codes',
    metaDescription:
      'Samsung ice maker frozen, washer flashing 5C or dC, or dryer not heating? Samsung appliance repair in Temple, TX for fridges, laundry and ranges. Call now.',
    intro: [
      'Samsung ice maker frozen solid, washer stopping with a code or dryer blowing cold? Call Appliance Repair Temple’s line to reach a technician who works on Samsung refrigerators, washers, dryers, ranges, dishwashers and over-the-range microwaves in homes across Temple, TX.',
      'Samsung refrigerators and laundry pairs are common in newer Temple homes, especially in the subdivisions on the west side of town along West Adams Avenue and Highway 317. They are feature-heavy machines, and most report faults as short codes on the display. A code narrows the search, but it rarely names the exact part, so the cause still has to be confirmed with testing.',
      'Samsung model numbers start with two letters for the product: RF is a French door refrigerator, RS a side-by-side, RB a bottom-freezer, WF a front-load washer, WA a top-load washer, DV a dryer (DVE electric, DVG gas), NE an electric range, NX a gas range, DW a dishwasher and ME an over-the-range microwave. The part after the slash, such as /AA or /A5, is the version code. Parts can change between versions, so include it.',
    ],
    appliances: [
      { key: 'refrigerator', note: 'RF French door, RS side-by-side and RB bottom-freezer, including models with door ice makers' },
      { key: 'washer', note: 'WA top-load and WF front-load washers' },
      { key: 'dryer', note: 'DVE electric and DVG gas dryers' },
      { key: 'oven', note: 'NE electric and NX gas ranges, including slide-ins' },
      { key: 'dishwasher', note: 'Built-in DW dishwashers' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Ice maker frozen up or not making ice',
        text: 'Ice building up around the in-door ice maker is a frequent complaint from owners of some Samsung French door models. Depending on the model, the cause can be the ice maker, its fan, a heater or the seal on the ice compartment. Chipping the ice out brings it back for a while; finding the cause keeps it working.',
      },
      {
        title: 'Washer stops and shows 4C, 5C, dC or UB',
        text: 'On most Samsung washers 4C (4E on older models) is a water supply fault, 5C (5E) a drain fault, dC (dE) a door or lid fault and UB (UE) an unbalanced load. Check the faucets and the pump filter first. If the code returns, the valve, pump, lock or suspension needs testing.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A heating element or thermal fuse on DVE electric models, an igniter or gas valve coil on DVG gas models. Some models show HE for a heating fault. Airflow matters too, since a crushed or clogged vent is a common root cause.',
      },
      {
        title: 'Fridge warm, freezer cold',
        text: 'Often a frosted evaporator or a fan that stopped. Defrost parts and fans are replaceable on most models. If the display reads OF OF, the refrigerator may simply be in demo mode, which lights the display without cooling.',
      },
      {
        title: 'Dishwasher shows LC',
        text: 'On Samsung dishwashers LC usually means the leak sensor in the base has found water. Turn the dishwasher off and look for a loose hose, a worn door gasket or suds from the wrong detergent before it is run again.',
      },
    ],
    haveReady: [
      'The model number including the version code after the slash, plus the long serial number. A photo of the label is easiest.',
      'The exact error code on the display, and when it appears.',
      'For refrigerators: whether the ice maker is in the door or the freezer, and whether there is ice buildup.',
      'Gas or electric, for dryers and ranges.',
      'Whether the appliance is still under Samsung’s warranty.',
    ],
    modelLocations: [
      { appliance: 'Refrigerator', where: 'Inside the fresh-food section on a side wall above the top shelf, with a second label on the lower outside of the cabinet on many models' },
      { appliance: 'Front-load washer or dryer', where: 'On the door frame or around the door opening, or on the back of the unit' },
      { appliance: 'Top-load washer', where: 'On the back of the unit' },
      { appliance: 'Range', where: 'On the frame at the side of the oven opening, under the cooktop, or behind the warming drawer' },
      { appliance: 'Dishwasher', where: 'On the side or top edge of the door, or the inside edge of the tub' },
    ],
    modelSource: { name: 'Samsung support: finding the model and serial numbers', url: 'https://www.samsung.com/ca/support/home-appliances/finding-the-model-and-serial-numbers-of-your-samsung-washer-or-dryer/' },
    faqs: [
      {
        q: 'Can a Samsung ice maker that keeps freezing up be fixed?',
        a: 'Usually, yes. The repair depends on the model and may involve the ice maker, a fan, a heater or the seal around the ice compartment. Defrosting it by hand only resets the clock, so ask for the cause to be found.',
      },
      {
        q: 'Will a Samsung authorized center pick up this call?',
        a: 'No. Appliance Repair Temple is not affiliated with or authorized by Samsung, and the call goes to a technician who is not part of Samsung’s network. For a repair still under Samsung’s warranty, contact Samsung first.',
      },
      {
        q: 'Should I read the code to the technician over the phone?',
        a: 'Yes. Read it exactly as shown, including whether it is 5C or 5E, and say when it appears in the cycle. That points to the right system and helps the likely parts come on the first visit.',
      },
      {
        q: 'Where is the model number on my Samsung refrigerator?',
        a: 'Check the side wall inside the fresh-food section, just above the top shelf. Many models also have a label on the lower outside of the cabinet near the front. Copy the version code after the slash too.',
      },
      {
        q: 'Why does my Samsung display say OF OF?',
        a: 'On many Samsung refrigerators that means demo or showroom mode is on, so the lights work but the cooling does not. The owner’s manual for your model shows the button combination that turns it off. If it still will not cool, call for a diagnosis.',
      },
      {
        q: 'How is a Samsung repair priced?',
        a: 'Prices depend on the appliance, the part and the model version, so none are listed here. Ask the provider about the price and any warranty on the work before the repair begins.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'lg',
    slug: `lg-appliance-repair-${loc}`,
    name: 'LG',
    h1: 'LG Appliance Repair in Temple, TX: Refrigerators, Washers, Dryers',
    metaTitle: 'LG Appliance Repair Temple TX | OE, IE, D90 & Fridge Codes',
    metaDescription:
      'LG fridge not cooling, washer flashing OE or IE, or dryer showing D90? LG appliance repair in Temple, TX for refrigerators, laundry and ranges. Call now.',
    intro: [
      'LG refrigerator warming up, washer stopping with a code or dryer running cold? Call (254) 615-2088 to reach a technician who works on LG refrigerators, washers, dryers, ranges, dishwashers and over-the-range microwaves in Temple, TX homes.',
      'LG appliances are common in newer Temple homes, especially French door refrigerators, front-load laundry pairs and smart ranges. Most LG models report faults as two-letter codes on the display, and many can send a Smart Diagnosis report through the LG ThinQ app or by holding a phone to the appliance. A code points to the right system; testing confirms which part failed.',
      'LG model numbers start with the product: LF, LRF and LRMV are French door and InstaView-style refrigerators, LS a side-by-side, WM a front-load washer, WT a top-load washer, DLE and DLG an electric or gas dryer, LRE and LRG an electric or gas range, LDF, LDT and LDP dishwashers, and LMV an over-the-range microwave. Kenmore models with a 795 or 796 prefix were built by LG and use many of the same parts.',
      'If your LG refrigerator has stopped cooling, check the purchase date first. LG offers longer coverage on the linear or inverter compressor of many refrigerator models than its standard warranty, so a compressor fault may be a warranty matter.',
    ],
    appliances: [
      { key: 'refrigerator', note: 'French door, side-by-side, bottom-freezer and InstaView-style models' },
      { key: 'washer', note: 'WM front-load and WT top-load washers, including WashTower-style units' },
      { key: 'dryer', note: 'DLE electric and DLG gas dryers' },
      { key: 'oven', note: 'Electric and gas ranges and wall ovens' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Refrigerator not cooling',
        text: 'Many LG refrigerators use linear or inverter compressors. Fans, the defrost system, sensors and the control board fail more often and are simpler to fix, so they get checked first. Display codes such as Er FF (freezer fan), Er CF (condenser fan) or Er dH (defrost heater) narrow it down. If it is the compressor, ask for that to be written down for the warranty claim.',
      },
      {
        title: 'Ice maker slow or frozen',
        text: 'Often a frozen fill tube, a water inlet valve, an old filter or the ice maker module. On some models an Er IF code points to the ice fan. Temple’s hard water also slows the valve screen.',
      },
      {
        title: 'Front-load washer shows OE, IE or UE',
        text: 'OE is a drain error, usually a clogged pump filter behind the lower front door. IE means water is not coming in fast enough, so check the faucets and inlet screens. UE is an unbalanced load, and dE a door that is not locking. LE points to the motor and needs testing.',
      },
      {
        title: 'Dryer shows D80, D90 or D95',
        text: 'Those are LG Flow Sense warnings: the vent is about 80, 90 or 95 percent blocked. Clear the vent run and the outside hood before blaming the dryer. If it still runs cold, the element, thermal fuse, igniter or gas valve is next.',
      },
      {
        title: 'Dishwasher shows AE or OE',
        text: 'AE on LG dishwashers usually means the leak sensor tripped, OE a drain problem. Clean the filter, check the drain hose and look for suds from the wrong detergent.',
      },
    ],
    haveReady: [
      'The model and serial number from the label. A photo is the easiest way to share it.',
      'The exact error code, and whether it shows on the display or in the ThinQ app.',
      'For refrigerators: the purchase date, so you can check LG’s compressor coverage.',
      'Gas or electric, for dryers and ranges.',
      'Whether the appliance is still under any LG warranty.',
    ],
    modelLocations: [
      { appliance: 'Refrigerator', where: 'Inside the fresh-food section on the side liner, on the right on most models and on the left on newer ones' },
      { appliance: 'Front-load washer and dryer', where: 'On a silver label on the panel just inside the door opening, usually near the top' },
      { appliance: 'Top-load washer', where: 'On the back or the right side of the washer' },
      { appliance: 'Range', where: 'On the left side of the oven door or drawer frame when open, or on the back of the control panel' },
      { appliance: 'Wall oven', where: 'On the underside of the control panel' },
    ],
    modelSource: { name: 'LG support: how to find my LG model and serial number', url: 'https://www.lg.com/us/support/help-library/how-to-find-my-lg-model-and-serial-number--20152254906058' },
    faqs: [
      {
        q: 'Does Appliance Repair Temple work for LG?',
        a: 'No. It has no affiliation with LG and is not an LG authorized service provider. If your appliance is under LG’s warranty, start with LG.',
      },
      {
        q: 'My LG refrigerator stopped cooling. Is it the compressor?',
        a: 'Not always. Fans, the defrost heater, sensors and the control board can all stop an LG from cooling, and they are tested first. If the compressor has failed, check whether LG’s compressor coverage applies to your model before paying for that repair.',
      },
      {
        q: 'Can a Kenmore built by LG be repaired the same way?',
        a: 'Yes. Kenmore models starting with 795 (refrigerators) or 796 (laundry) were built by LG. Read the full Kenmore model number on the call so the technician can cross-reference the LG parts.',
      },
      {
        q: 'What do OE, IE and UE mean on my LG washer?',
        a: 'OE is a drain fault, IE a water inlet fault and UE an unbalanced load on most LG washers. Clean the pump filter for OE, check the faucets for IE and redistribute the load for UE. If the code keeps coming back, call (254) 615-2088.',
      },
      {
        q: 'Should I run Smart Diagnosis before I call?',
        a: 'It helps if your model supports it. The ThinQ app or the phone method produces a short report that can point to the failed system. Have the result, or the code on the display, ready for the technician.',
      },
      {
        q: 'What should I ask about price for an LG repair?',
        a: 'Ask the provider what the repair will cost and whether there is any warranty on the work, before anything is replaced. This site does not list prices.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'frigidaire',
    slug: `frigidaire-appliance-repair-${loc}`,
    name: 'Frigidaire',
    h1: 'Frigidaire Appliance Repair in Temple, TX: Fridges, Freezers, Ranges',
    metaTitle: 'Frigidaire Repair Temple TX | Freezer Warm, Range F10 Code',
    metaDescription:
      'Frigidaire garage freezer warming up, range showing F10 or ice maker quit? Frigidaire and Gallery appliance repair in Temple, TX. Call (254) 615-2088.',
    intro: [
      'Frigidaire freezer warming up, range not heating or dishwasher leaving water behind? A call to (254) 615-2088 reaches a technician who works on Frigidaire refrigerators, freezers, ranges, dishwashers, washers, dryers and microwaves across Temple, TX.',
      'Frigidaire, part of the Electrolux group, is one of the most common brands in Temple homes. It shows up in rentals, in starter homes on the east side and in garages, where a Frigidaire chest or upright freezer often holds the deer season meat or the extra groceries. Garage units work hard in a Temple August, and that is when their relays, fans and thermostats tend to quit.',
      'The second letter of most current Frigidaire model numbers shows the line: FF for standard Frigidaire, FG for Gallery and FP for Professional. The next letters name the product, so FFEF is a standard electric freestanding range, FGGF a Gallery gas range, FFFC a chest freezer, FFFU an upright freezer and FFTR a top-freezer refrigerator. Kenmore models starting with 253 or 790 were built by Frigidaire and share many parts.',
    ],
    appliances: [
      { key: 'refrigerator', note: 'Top-freezer, side-by-side and French door, including Gallery and Professional models' },
      { key: 'freezer', note: 'FFFC chest and FFFU upright freezers, including garage-ready models' },
      { key: 'oven', note: 'Electric and gas ranges, smoothtop and coil, and wall ovens' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'washer', note: 'Top-load and front-load washers' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Freezer or fridge running warm',
        text: 'Frost buildup from a defrost problem, a failed evaporator or condenser fan, or a start relay are common causes. On garage freezers, heat and dusty coils make it worse. Airflow and the defrost system should be ruled out before anyone talks about the sealed system.',
      },
      {
        title: 'Ice maker not making ice',
        text: 'Often a water inlet valve, a frozen fill tube, a freezer that is not cold enough or the ice maker assembly. Some Frigidaire ice makers have been part of safety recalls, so check your model first (see the FAQ below).',
      },
      {
        title: 'Range shows F10 or will not heat',
        text: 'On many Frigidaire electric ranges F10 means the oven ran hotter than it should, and F11 a shorted key on the touchpad. A burned bake or broil element, a weak gas igniter or a drifting temperature sensor are the usual reasons an oven will not heat. Smoothtop burners that stay cold are often a switch or the element.',
      },
      {
        title: 'Dryer squeaking or thumping',
        text: 'Frigidaire dryers ride on front drum glides and rear rollers. When the glides wear through, the drum scrapes and squeals. A glide and roller kit is a routine repair and usually saves the dryer.',
      },
      {
        title: 'Dishwasher not draining or cleaning',
        text: 'A clogged filter, a blocked drain hose, a worn drain pump or a weak wash motor. The filter causes many of these problems and gets checked first.',
      },
    ],
    haveReady: [
      'The model and serial number from the label. A photo is the easiest way to share it.',
      'Whether it is a Gallery (FG), Professional (FP) or standard (FF) model.',
      'Gas or electric, for ranges and dryers.',
      'Any F code on the display.',
      'Whether you have already checked the model against recall notices at cpsc.gov.',
    ],
    modelLocations: [
      { appliance: 'Top-freezer refrigerator', where: 'On the upper left wall inside the fresh-food section' },
      { appliance: 'Side-by-side and French door refrigerator', where: 'On the upper right wall inside the fresh-food section' },
      { appliance: 'Range', where: 'On the side trim inside the oven door opening, on the left side panel when the door is open, or on the storage drawer frame' },
      { appliance: 'Dishwasher', where: 'On the inside edge of the door or the right side of the tub, visible with the door open' },
      { appliance: 'Front-load washer', where: 'On the trim around the door opening' },
      { appliance: 'Top-load washer', where: 'At the back of the tub opening, under the lid' },
    ],
    modelSource: { name: 'Frigidaire support: where can I find my model and serial number?', url: 'https://owner.frigidaire.com/support-articles/article/1858491-where-can-i-find-my-model-and-serial-number-' },
    faqs: [
      {
        q: 'Is this the Frigidaire service line?',
        a: 'No. Appliance Repair Temple is not affiliated with or authorized by Frigidaire or Electrolux. For a repair still covered by the manufacturer’s warranty, contact Frigidaire first.',
      },
      {
        q: 'Has my Frigidaire been recalled?',
        a: 'Some Frigidaire refrigerators, ice makers and ranges have been part of safety recalls. Look up your model and serial number at cpsc.gov or with Frigidaire before paying for a repair, since a recall remedy is handled by the manufacturer.',
      },
      {
        q: 'Can a Frigidaire chest freezer in my garage be repaired?',
        a: 'Yes. Chest and upright freezers in garages and shops are common repairs in Temple, usually for a relay, thermostat or fan. Clear space so the technician can reach the back of the unit and the outlet.',
      },
      {
        q: 'Do Gallery and Professional models use special parts?',
        a: 'Some do. Controls, trim and a few burners differ by line, while many fans, valves and elements are shared. The FG or FP in the model number tells the technician which parts to check.',
      },
      {
        q: 'My Kenmore says 253 or 790. Is that a Frigidaire?',
        a: 'Yes. Kenmore refrigerators starting with 253 and ranges starting with 790 were built by Frigidaire. Read out the full Kenmore model number so the parts can be matched.',
      },
      {
        q: 'Why are there no Frigidaire repair prices on this page?',
        a: 'Costs depend on the appliance and the part, so none are listed. Ask the provider for the price and any warranty on the work before the repair starts.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'maytag',
    slug: `maytag-appliance-repair-${loc}`,
    name: 'Maytag',
    h1: 'Maytag Washer, Dryer & Appliance Repair in Temple, TX',
    metaTitle: 'Maytag Appliance Repair Temple TX | Washer Ld, LF Codes',
    metaDescription:
      'Maytag Bravos washer showing Ld or LF, dryer not heating or fridge running warm? Maytag appliance repair in Temple, TX homes and rentals. Call (254) 615-2088.',
    intro: [
      'Maytag washer stuck mid-cycle, dryer running cold or refrigerator warming up? Call and describe the problem: the line connects you with a technician who works on Maytag washers, dryers, refrigerators, dishwashers, ranges and microwaves across Temple, TX.',
      'Laundry is where Maytag shows up most in Temple homes, from Centennial and Bravos top-loaders that have run for years to newer high-efficiency pairs and the Commercial Technology line. Some older houses still have a Neptune front-loader. Maytag is part of Whirlpool Corporation, and most current Maytag models share platforms and parts with Whirlpool, which keeps common parts easy to find.',
      'Maytag model numbers follow the Whirlpool pattern. MVW is a top-load washer, MHW a front-load washer, MED and MGD an electric or gas dryer, MFI a French door refrigerator with an in-door ice maker, MRT a top-freezer, MDB a dishwasher, MER and MGR an electric or gas range, and MMV an over-the-range microwave.',
      'Check the warranty before any repair. Maytag offers a 10-year limited parts warranty on certain parts of many newer appliances, such as the washer drive motor and wash basket and some refrigerator compressors. Labor is often not included in the later years, so a covered part can still mean a paid visit.',
    ],
    appliances: [
      { key: 'washer', note: 'MVW top-load and MHW front-load washers, including Bravos, Centennial and agitator models' },
      { key: 'dryer', note: 'MED electric and MGD gas dryers' },
      { key: 'refrigerator', note: 'Top-freezer, side-by-side, bottom-freezer and French door' },
      { key: 'dishwasher', note: 'MDB built-in dishwashers' },
      { key: 'oven', note: 'MER electric and MGR gas ranges and wall ovens' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Washer will not spin or drain',
        text: 'A clogged drain pump, a worn lid lock or door latch, a broken drive belt or a failed shift actuator on top-loaders are common causes. Bravos and similar models often show Ld for a long drain, LF for a long fill and uL for an unbalanced load. The drain path and lock get checked before the motor or transmission.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A failed heating element, thermal fuse or high-limit thermostat on MED electric models, or an igniter or gas valve coils on MGD gas models. A restricted vent is often the root cause, so airflow belongs on every dryer call.',
      },
      {
        title: 'Refrigerator not cooling',
        text: 'Dusty condenser coils, a failed condenser or evaporator fan, a defrost problem or a start relay come before the compressor. If the compressor has failed, check Maytag’s parts coverage for your model first.',
      },
      {
        title: 'Dishwasher leaves dishes dirty',
        text: 'A clogged filter, scale in the spray arms, a weak wash pump or an inlet valve that is not letting in enough water. Newer MDB models have a manual filter that needs regular rinsing, and that is the first stop.',
      },
      {
        title: 'Older Neptune or front-loader not latching',
        text: 'Neptune-era front-loaders are known for door lock and control faults. Parts for some of them are getting harder to find, so it is worth asking about part availability before the visit.',
      },
    ],
    haveReady: [
      'The model and serial number from the label. A photo is the easiest way to share it.',
      'The purchase date, so you can check which parts the Maytag warranty still covers.',
      'Top-load or front-load, and gas or electric for dryers and ranges.',
      'Any code on the display, such as Ld or LF, and what the washer or dryer was doing when it stopped.',
      'Whether the problem started after a move or a power outage.',
    ],
    modelLocations: [
      { appliance: 'Refrigerator', where: 'Inside the fresh-food section, usually on the upper left wall, the top front of the compartment or on the liner above the crisper drawers' },
      { appliance: 'Top-load washer', where: 'Under the lid on the tub rim or the lower right corner of the lid opening, or on the back of the washer' },
      { appliance: 'Front-load washer', where: 'On the rim around the door opening' },
      { appliance: 'Dryer', where: 'Inside the door opening on the frame, on the inside of the door, or on the upper back of the cabinet' },
      { appliance: 'Dishwasher', where: 'On the upper left edge of the tub frame or the underside of the control panel' },
      { appliance: 'Range', where: 'Inside the storage drawer area or on the frame behind the oven door' },
    ],
    modelSource: { name: 'Maytag Product Help: where is my model and serial number located?', url: 'https://producthelp.maytag.com/FAQ/Where_is_my_Model_and_Serial_Number_Located%3F' },
    faqs: [
      {
        q: 'Is Appliance Repair Temple part of Maytag service?',
        a: 'No. It is not affiliated with or authorized by Maytag or Whirlpool Corporation. If your appliance is under Maytag’s warranty, contact Maytag first.',
      },
      {
        q: 'Does the Maytag 10-year warranty cover my repair?',
        a: 'It depends on the model and the part. The 10-year limited coverage applies to specific parts, such as the washer drive motor and wash basket and some refrigerator compressors, and labor is often not included in the later years. Check your warranty paperwork or ask Maytag.',
      },
      {
        q: 'Is my older Maytag washer worth repairing?',
        a: 'Often, yes. Pumps, lid locks, belts and suspension parts are reasonable repairs on an older Centennial or Bravos. A failed transmission or worn tub bearings usually tip the balance toward replacing it.',
      },
      {
        q: 'Do Maytag and Whirlpool use the same parts?',
        a: 'Many current models share designs and parts, since both brands belong to Whirlpool Corporation. An MVW washer and a WTW washer of the same year often share a pump and lid lock. The full model number shows exactly which parts fit.',
      },
      {
        q: 'What does Ld mean on my Maytag washer?',
        a: 'On Bravos and similar models Ld usually means the washer could not drain in time. Check the drain hose for kinks and the standpipe for a clog. If the code returns, the pump may be blocked or worn.',
      },
      {
        q: 'How much should a Maytag repair cost?',
        a: 'There is no price list here, since it depends on the appliance and the part. Ask the provider for the price and any warranty on the work, and check what Maytag’s parts warranty already covers.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'kitchenaid',
    slug: `kitchenaid-appliance-repair-${loc}`,
    name: 'KitchenAid',
    h1: 'KitchenAid Kitchen Appliance Repair in Temple, TX',
    metaTitle: 'KitchenAid Appliance Repair Temple TX | Dishwasher & Fridge',
    metaDescription:
      'KitchenAid dishwasher leaving film, French door fridge running warm or slide-in range slow to heat? KitchenAid appliance repair in Temple, TX. Call today.',
    intro: [
      'KitchenAid dishwasher leaving a film, refrigerator warming up or range slow to heat? One call puts you in touch with a technician who works on KitchenAid dishwashers, refrigerators, ranges and over-the-range microwaves in homes across Temple, TX.',
      'KitchenAid major appliances are a Whirlpool Corporation brand, built for the kitchen. In Temple they show up most as quiet third-rack dishwashers, counter-depth French door refrigerators and slide-in ranges in remodeled kitchens and in newer homes out toward Lake Belton. Many share core parts with Whirlpool and Maytag models, while trim, panels and some controls are KitchenAid-only.',
      'KitchenAid model numbers start with K plus letters for the product. KDTE, KDTM and KDPM dishwashers have hidden top controls, KDFE models have front controls, KRFF and KRFC are French door refrigerators (C for counter-depth), KRMF is a five-door model, KSEG and KSGG are electric and gas slide-in ranges, KFEG and KFGG freestanding ranges, and KMHS an over-the-range microwave. This page covers major appliances; for a stand mixer, contact KitchenAid.',
    ],
    appliances: [
      { key: 'dishwasher', note: 'Built-in dishwashers, including third-rack, panel-ready and hidden-control models' },
      { key: 'refrigerator', note: 'KRFF and KRFC French door, counter-depth, side-by-side and bottom-freezer' },
      { key: 'oven', note: 'Electric and gas ranges, including KSEG and KSGG slide-in models' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Dishwasher not cleaning or drying',
        text: 'A clogged filter, mineral scale in the spray arms or third-rack jets, a weak wash pump or a failed heating element. Newer KitchenAid dishwashers use a two-part filter under the lower spray arm that needs rinsing every month or so. Temple’s hard water makes scale worse.',
      },
      {
        title: 'Dishwasher not draining',
        text: 'Usually a blocked filter, a kinked or clogged drain hose, a garbage disposal knockout plug that was never removed after a new install, or a failed drain pump. Each of those is checked before a part is ordered.',
      },
      {
        title: 'Hidden-control dishwasher flashing lights',
        text: 'On top-control models the Clean or Start light may blink in a pattern instead of showing a code. Count the flashes and note them. The pattern points to the system, such as heating, drain or a sensor, and varies by model.',
      },
      {
        title: 'Refrigerator warm, freezer cold',
        text: 'Often an evaporator fan, a damper or a defrost problem blocking airflow to the fresh-food side. Counter-depth KRFC models sit in tight cabinet spaces, so clean coils and a clear front grille matter.',
      },
      {
        title: 'Range slow to heat or uneven',
        text: 'A bake element or igniter on its way out, a temperature sensor that has drifted, or the Even-Heat convection fan not running. Each can be measured against the model’s specifications.',
      },
    ],
    haveReady: [
      'The model and serial number from the silver label. A photo is the easiest way to share it.',
      'Any error code or the number of flashes on the control panel.',
      'Gas or electric, for ranges.',
      'For dishwashers: when the filter was last cleaned and whether you have hard water.',
      'Whether the appliance is still under KitchenAid’s warranty.',
    ],
    modelLocations: [
      { appliance: 'Dishwasher', where: 'On the left edge of the door or tub, visible when the door is open' },
      { appliance: 'French door and bottom-freezer refrigerator', where: 'Inside the fresh-food section on the left wall' },
      { appliance: 'Side-by-side refrigerator', where: 'Inside the fresh-food section on the right wall' },
      { appliance: 'Range', where: 'On the oven frame behind the door, or on the storage drawer frame' },
      { appliance: 'Over-the-range microwave', where: 'On the frame behind the door, visible when the door is open' },
    ],
    modelSource: { name: 'KitchenAid: how to find your model number', url: 'https://www.kitchenaid.com/resources/locate-model-number.html' },
    faqs: [
      {
        q: 'Are these KitchenAid-authorized technicians?',
        a: 'No. Appliance Repair Temple is not affiliated with or authorized by KitchenAid or Whirlpool Corporation. If your appliance is under KitchenAid’s warranty, contact KitchenAid first.',
      },
      {
        q: 'Why does my KitchenAid dishwasher leave a white film?',
        a: 'Usually hard water scale or too much detergent. Clean the filter, run a cleaning cycle and check the rinse aid. If the film stays, or dishes come out dirty too, the spray arms or wash pump may need attention.',
      },
      {
        q: 'Do KitchenAid and Whirlpool use the same parts?',
        a: 'Many core parts are shared, such as dishwasher pumps and refrigerator fans. Panels, trim and some controls are KitchenAid-specific. The full model number shows exactly which parts fit.',
      },
      {
        q: 'Can my KitchenAid stand mixer be repaired through this line?',
        a: 'No. The technicians reached here work on major home appliances. For a stand mixer or other countertop appliance, contact KitchenAid.',
      },
      {
        q: 'Can a panel-ready KitchenAid dishwasher be pulled out for repair?',
        a: 'Yes, though it takes more care. The custom panel and the mounting brackets come off first. Mention that it is panel-ready when you call so the technician plans for it.',
      },
      {
        q: 'What does KitchenAid appliance repair cost?',
        a: 'It varies with the appliance and the part, so this site lists no prices. Ask the provider for the price and any warranty on the work before the repair.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'bosch',
    slug: `bosch-appliance-repair-${loc}`,
    name: 'Bosch',
    h1: 'Bosch Dishwasher & Appliance Repair in Temple, TX',
    metaTitle: 'Bosch Dishwasher Repair Temple TX | E15, E24 & E25 Codes',
    metaDescription:
      'Bosch dishwasher showing E15 or E24, not draining or not drying? Bosch appliance repair in Temple, TX for dishwashers, fridges and ranges. Call (254) 615-2088.',
    intro: [
      'Bosch dishwasher showing an error code, leaving water in the tub or not drying? Call Appliance Repair Temple’s line to reach a technician who works on Bosch dishwashers, refrigerators and ranges in Temple, TX homes.',
      'Dishwashers are by far the most common Bosch appliance in Temple. They run quietly, often with only a red InfoLight on the floor to show they are on, and they protect themselves: when something goes wrong they stop and show a code instead of carrying on. A Bosch that has quit is usually telling you which system needs attention. Bosch belongs to BSH, the same group behind Thermador and Gaggenau.',
      'Bosch identifies its appliances with an E-Nr and an FD number. The E-Nr is the model number, and on dishwashers it starts with SH, for example SHE, SHX, SHP or SHV for panel-ready models, followed by a code for the series. The FD is a four-digit production code that dates the unit, and parts can change between FD runs. Ranges start with HGI (gas), HEI (electric) or HII (induction), and refrigerators with B36 or B30.',
    ],
    appliances: [
      { key: 'dishwasher', note: '100, 300, 500, 800 and Benchmark series, including panel-ready SHV models' },
      { key: 'refrigerator', note: 'French door and bottom-freezer refrigerators, including counter-depth' },
      { key: 'oven', note: 'Gas, electric and induction slide-in ranges' },
    ],
    issues: [
      {
        title: 'E15: water in the base',
        text: 'Bosch says E15 means the safety switch has found water in the base and the leak protection has turned on. Turn off the water supply and switch the dishwasher off. The leak usually comes from a hose, a seal, the pump or the door gasket, and it has to be found and fixed before the unit will run normally.',
      },
      {
        title: 'E24 or E25: not draining',
        text: 'E24 usually points to a blocked filter, a kinked drain hose or a clogged disposal connection, and E25 to the drain pump or the pump cover under the filter, where glass, seeds and bones get caught. Clean the filter first. If the code comes back, the pump and hose need checking.',
      },
      {
        title: 'Dishes come out wet',
        text: 'Most Bosch dishwashers dry by condensation rather than a heated element, so rinse aid matters. 800 Series and Benchmark models with CrystalDry use a mineral that absorbs moisture. If dishes stay wet with rinse aid filled, the settings, the dispenser and the water heating get checked.',
      },
      {
        title: 'E09 or E22 on the display',
        text: 'On many Bosch dishwashers E09 points to the heating circuit and E22 to a clogged filter. A filter can be cleaned at the sink; a heater or circulation pump fault needs testing.',
      },
      {
        title: 'Refrigerator or range problems',
        text: 'Bosch refrigerators that run warm usually have a fan, defrost or sensor problem. Ranges that will not heat often have a failed element, igniter or control. On induction models, test the pan with a magnet first, since a pan that is not magnetic will not heat.',
      },
    ],
    haveReady: [
      'The E-Nr (model number) and FD number from the rating label. A photo is the easiest way to share them.',
      'The exact error code, such as E15, E24 or E25.',
      'Whether water is leaking onto the floor or only standing in the tub.',
      'For ranges: gas, electric or induction.',
      'Whether the appliance is still under Bosch’s warranty.',
    ],
    modelLocations: [
      { appliance: 'Dishwasher', where: 'On a label or engraved on the top or side edge of the door, visible when the door is open' },
      { appliance: 'Range', where: 'On the frame behind the bottom drawer, or above the knobs on some models' },
      { appliance: 'Refrigerator', where: 'On the rating label inside the fresh-food section. Bosch’s model number finder shows the exact spot by model' },
    ],
    modelSource: { name: 'Bosch: how to find your model number', url: 'https://www.bosch-home.com/us/owner-support/how-to-find-your-model-number' },
    faqs: [
      {
        q: 'Will Bosch service my dishwasher if I call this number?',
        a: 'No. This number is not Bosch, and Appliance Repair Temple is not affiliated with or authorized by Bosch or BSH. If your appliance is under Bosch’s warranty, contact Bosch first.',
      },
      {
        q: 'What does E15 mean on my Bosch dishwasher?',
        a: 'According to Bosch, E15 means water has been detected in the base and the leak protection system has turned on. Turn off the water supply, switch the dishwasher off and call (254) 615-2088. The source of the leak has to be found and fixed.',
      },
      {
        q: 'My Bosch dishwasher shows E24. What can I check?',
        a: 'Switch it off, then clean the filter at the bottom of the tub and check that the drain hose is not kinked. If the dishwasher drains to a garbage disposal, run the disposal. If the code comes back, the drain pump or hose needs a closer look.',
      },
      {
        q: 'What are the E-Nr and FD numbers?',
        a: 'The E-Nr is Bosch’s model number and the FD is the four-digit production number. Both are on the rating label. Bosch parts often depend on both, so read both out when you call.',
      },
      {
        q: 'Does a Bosch AquaStop hose need replacing after a leak?',
        a: 'Sometimes. The AquaStop hose has its own safety valve, and once it trips on some versions it stays closed. A technician can test whether the hose or the base switch caused the shutdown.',
      },
      {
        q: 'Is a Bosch dishwasher worth repairing?',
        a: 'Often. Pumps, hoses, door springs and the heater are standard repairs, and the tub is stainless. Ask the provider for the price and any warranty on the work before deciding; this site does not list prices.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'kenmore',
    slug: `kenmore-appliance-repair-${loc}`,
    name: 'Kenmore',
    h1: 'Kenmore Appliance Repair in Temple, TX, for New and Older Models',
    metaTitle: 'Kenmore Appliance Repair Temple TX | Old & New Models',
    metaDescription:
      'Kenmore washer, dryer or fridge acting up? The 110, 106, 253 or 795 prefix shows who built it. Kenmore appliance repair in Temple, TX. Call (254) 615-2088.',
    intro: [
      'Kenmore washer that will not spin, dryer running cold or refrigerator warming up? The Appliance Repair Temple line connects you with a technician who works on Kenmore washers, dryers, refrigerators, freezers, dishwashers, ranges and microwaves in homes across Temple, TX.',
      'Kenmore is a little different from other brands. For decades Kenmore appliances were sold through Sears but built by other manufacturers, including Whirlpool, LG, Frigidaire and others. Two Kenmore refrigerators can have completely different parts inside, depending on who made them. Temple has a lot of them, often an older 70 or 80 Series laundry pair that still runs, or a Kenmore Elite fridge that came with the house.',
      'The model number tells a technician who built it. The three digits before the dot point to the manufacturer: 110 (laundry), 106 (refrigerators) and 665 (dishwashers) are Whirlpool, 253 (refrigerators), 790 (ranges) and 417 (front-load laundry) are Frigidaire, and 795 (refrigerators) and 796 (laundry) are LG. The digits after the dot identify the exact model, which decides which parts fit.',
    ],
    appliances: [
      { key: 'washer', note: 'Top-load and front-load washers, including 70 and 80 Series and Elite models' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'refrigerator', note: 'Top-freezer, side-by-side, bottom-freezer and French door' },
      { key: 'freezer', note: 'Chest and upright freezers' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'oven', note: 'Electric and gas ranges' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Washer will not spin or drain',
        text: 'On Whirlpool-built 110 top-loaders, a worn lid switch, a broken belt, a failed motor coupler on direct-drive models or a clogged pump are common. On LG-built 796 front-loaders, the drain filter and door lock come first. The prefix shows which design you have.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A heating element, thermal fuse or thermostat on electric dryers, an igniter or gas valve coils on gas dryers. Older 80 Series dryers often sit on long vent runs packed with lint, so airflow gets checked every time.',
      },
      {
        title: 'Refrigerator or freezer running warm',
        text: 'Dusty condenser coils, a failed fan, a defrost problem or a start relay are the usual causes, especially on older units in garages. These are reasonable repairs on most models, whichever company built them.',
      },
      {
        title: 'Parts for older models',
        text: 'Some older Kenmore parts have been discontinued. Because Kenmore shared designs with its manufacturers, a compatible part can often be found under the original builder’s part number. Ask for a straight answer if a part is no longer available.',
      },
      {
        title: 'Kenmore Elite front-loader codes',
        text: 'LG-built Elite washers show LG-style codes such as OE or dE, while Whirlpool-built ones use F-codes. Read the code exactly as it appears; it means different things on different builders.',
      },
    ],
    haveReady: [
      'The full model number, including the digits before the dot. A photo of the tag is the easiest way to share it.',
      'The serial number, which helps date the appliance.',
      'Gas or electric, for dryers and ranges.',
      'Roughly how old the appliance is, if you know.',
      'Any error code or unusual noise.',
    ],
    modelLocations: [
      { appliance: 'Refrigerator', where: 'Inside the fresh-food section, not the freezer: on a side wall near the top, on the ceiling or near the crisper drawers' },
      { appliance: 'Top-load washer', where: 'Under the lid, near the tub opening or on the rim' },
      { appliance: 'Front-load washer', where: 'On the cabinet, usually around the door opening' },
      { appliance: 'Dryer', where: 'Inside the door opening on the frame, or on the back of the cabinet on some models' },
      { appliance: 'Dishwasher', where: 'On the edge of the door or the side of the tub frame, visible when the door is open' },
      { appliance: 'Range', where: 'On the frame behind the storage drawer or behind the oven door' },
    ],
    modelSource: { name: 'Sears PartsDirect: Kenmore model and serial plate locations', url: 'https://www.searspartsdirect.com/model/1k3ridit8b-000582/kenmore-25379252703-top-mount-refrigerator-parts' },
    faqs: [
      {
        q: 'Is this Sears or Kenmore service?',
        a: 'No. Appliance Repair Temple is not affiliated with or authorized by Kenmore, Sears or any manufacturer that built Kenmore appliances.',
      },
      {
        q: 'Who made my Kenmore appliance?',
        a: 'The digits before the dot in the model number identify the builder. For example, 110 and 106 point to Whirlpool, 253 to Frigidaire and 795 to LG. Read the full model number on the call so it can be looked up.',
      },
      {
        q: 'Is my old Kenmore worth repairing?',
        a: 'Often, yes. Many older Kenmore washers, dryers and refrigerators use simple, durable parts. If a key part has been discontinued or the repair is major on a very old unit, that should be said up front.',
      },
      {
        q: 'Are parts still available for older Kenmore models?',
        a: 'Many are, sometimes under the original manufacturer’s part number rather than a Kenmore one. Some have been discontinued. Ask the technician to confirm availability before ordering.',
      },
      {
        q: 'My Kenmore 80 Series dryer squeaks. Is that a big repair?',
        a: 'Usually not. On these Whirlpool-built dryers a squeal or thump tends to come from the drum rollers, idler pulley or belt, which are often replaced together as a kit.',
      },
      {
        q: 'How much does Kenmore appliance repair cost?',
        a: 'That depends on the appliance, the builder and the part, so no prices are listed. Ask the provider about the price and any warranty on the work before the repair starts.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'electrolux',
    slug: `electrolux-appliance-repair-${loc}`,
    name: 'Electrolux',
    h1: 'Electrolux Laundry & Kitchen Appliance Repair in Temple, TX',
    metaTitle: 'Electrolux Appliance Repair Temple TX | Front-Load & Fridge',
    metaDescription:
      'Electrolux front-load washer not draining, dryer taking too long or fridge warming up? Electrolux appliance repair in Temple, TX homes. Call (254) 615-2088.',
    intro: [
      'Electrolux washer stopping with a code, dryer taking too long or refrigerator warming up? Call the line to reach a technician who works on Electrolux front-load washers, dryers, refrigerators, freezers, ranges and dishwashers in homes across Temple, TX.',
      'Electrolux is the parent company of Frigidaire and sells its own Electrolux-branded line, usually higher up the range: front-load laundry with steam cycles, counter-depth refrigerators and ranges with convection and air fry. In Temple it turns up most in remodeled kitchens and in laundry rooms with stacked front-load pairs. Underneath, many Electrolux appliances share platforms and parts with Frigidaire models.',
      'Electrolux model numbers start with E. Current front-load washers start with ELFW and dryers with ELFE (electric) or ELFG (gas); older laundry starts with EFLS or EIFLS. Kitchen appliances from the earlier Electrolux ICON and Wave-Touch lines start with EI or EW. Labels often carry three numbers: the model, a product number code (PNC) used for parts on some models, and the serial. A photo of the full label avoids ordering the wrong part.',
    ],
    appliances: [
      { key: 'washer', note: 'ELFW and EFLS front-load washers, including steam and stacked laundry models' },
      { key: 'dryer', note: 'ELFE electric and ELFG gas dryers' },
      { key: 'refrigerator', note: 'French door, side-by-side and counter-depth' },
      { key: 'freezer', note: 'Upright and chest freezers' },
      { key: 'oven', note: 'Electric, gas and induction ranges, and wall ovens' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
    ],
    issues: [
      {
        title: 'Front-load washer will not drain or unlock',
        text: 'A clogged pump filter behind the small front access door is the most common cause, followed by a failed drain pump or door lock. Electrolux codes come in families: the E10s usually point to water fill, the E20s to draining and the E40s to the door lock. Clean the filter first.',
      },
      {
        title: 'Washer smells or leaves residue',
        text: 'Front-loaders hold moisture in the door gasket and dispenser. Too much detergent, or the wrong kind, makes it worse. Wipe the gasket, leave the door open after loads and run a cleaning cycle. If water is leaking, the gasket or a hose may need replacing.',
      },
      {
        title: 'Dryer takes too long or runs cold',
        text: 'A restricted vent is the first suspect, then the heating element, thermal fuse or thermostats on ELFE models, or the igniter and gas valve coils on ELFG models. Moisture sensor bars coated with dryer-sheet residue can end cycles early or late, and a quick wipe with a little rubbing alcohol often helps.',
      },
      {
        title: 'Dryer drum squeaks or scrapes',
        text: 'Like Frigidaire, many Electrolux dryers ride on front drum glides and rear rollers. Worn glides let the drum scrape the front panel. A glide kit is a routine repair.',
      },
      {
        title: 'Refrigerator or freezer running warm',
        text: 'Fans, the defrost system and dusty condenser coils come before the compressor. Electrolux was part of a 2022 ice maker recall alongside Frigidaire, so check your model at cpsc.gov if the ice maker is involved.',
      },
    ],
    haveReady: [
      'A photo of the full label: model number, PNC and serial number.',
      'Any error code on the display.',
      'For washers: whether you have cleaned the pump filter, and which detergent you use.',
      'Gas or electric, for dryers and ranges.',
      'Whether the appliance is still under Electrolux’s warranty.',
    ],
    modelLocations: [
      { appliance: 'Refrigerator', where: 'Inside the fresh-food section on the wall, visible when the door is open' },
      { appliance: 'Chest freezer', where: 'On the left outside wall, above the access panel' },
      { appliance: 'Range', where: 'On the side trim inside the oven door opening, the left side panel, or the storage drawer frame' },
      { appliance: 'Dishwasher', where: 'On the inside edge of the door or the side of the tub' },
      { appliance: 'Front-load washer', where: 'On the trim around the door opening, or behind the pump filter door on some models' },
    ],
    modelSource: { name: 'Electrolux support: where can I find my model and serial number?', url: 'https://owner.electrolux.com/support-articles/article/1858491-where-can-i-find-my-model-and-serial-number-' },
    faqs: [
      {
        q: 'Is Appliance Repair Temple linked to Electrolux?',
        a: 'No. It is not affiliated with or authorized by Electrolux or Frigidaire. Appliances still under Electrolux’s warranty should go to Electrolux first.',
      },
      {
        q: 'Are Electrolux and Frigidaire parts the same?',
        a: 'Many are, since Electrolux owns Frigidaire and the two share platforms. Some trim, controls and features are Electrolux-specific. The full model number shows exactly which parts fit.',
      },
      {
        q: 'My Electrolux front-load washer will not drain. What can I check?',
        a: 'Switch it off, put a towel down and open the small access door at the bottom front. Drain the water through the hose if there is one, then clean the pump filter. If it still will not drain, the pump or a hose needs a closer look.',
      },
      {
        q: 'What is the PNC on my Electrolux label?',
        a: 'The product number code is an identifier Electrolux uses for some models and their parts. If your label has one, read it out along with the model and serial number.',
      },
      {
        q: 'Can a stacked Electrolux washer and dryer be repaired in a closet?',
        a: 'Usually, yes, though the dryer may need to come off the washer for some repairs. Clear the doorway and mention the stack on the call so the technician comes prepared.',
      },
      {
        q: 'What will an Electrolux repair cost?',
        a: 'No prices are listed here, since the cost depends on the appliance and the part. Ask the provider about the price and any warranty on the work before agreeing to it.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'amana',
    slug: `amana-appliance-repair-${loc}`,
    name: 'Amana',
    h1: 'Amana Appliance Repair in Temple, TX, for Homes and Rentals',
    metaTitle: 'Amana Appliance Repair Temple TX | Washers, Dryers, Fridges',
    metaDescription:
      'Amana washer not agitating, dryer running cold or top-freezer fridge warm? Amana appliance repair in Temple, TX homes and rentals. Call (254) 615-2088 today.',
    intro: [
      'Amana washer not agitating, dryer running cold or refrigerator warming up? Call Appliance Repair Temple’s line to reach a technician who works on Amana washers, dryers, refrigerators, ranges, dishwashers and microwaves in Temple, TX.',
      'Amana started in the Amana Colonies of Iowa and is now a Whirlpool Corporation brand built around straightforward, value-priced appliances: top-load agitator washers, top-freezer refrigerators, coil and smoothtop ranges. That makes it a common sight in rental homes, duplexes and apartments around Temple, near the college and the medical center, often bought as a set by a landlord or builder.',
      'Amana model numbers are short and readable. NTW is a top-load washer, NED and NGD an electric or gas dryer, ART a top-freezer refrigerator, ABB a bottom-freezer, ASI a side-by-side, ADB a dishwasher, AER and AGR an electric or gas range, and AMV an over-the-range microwave. Many share parts with Whirlpool and Maytag models, so common parts are easy to find and repairs tend to be practical.',
      'If you rent, check with your landlord before arranging a repair, since they may be responsible for the appliances they supply.',
    ],
    appliances: [
      { key: 'washer', note: 'NTW top-load agitator and high-efficiency washers' },
      { key: 'dryer', note: 'NED electric and NGD gas dryers' },
      { key: 'refrigerator', note: 'ART top-freezer, bottom-freezer, side-by-side and French door' },
      { key: 'oven', note: 'AER electric and AGR gas ranges, coil and smoothtop' },
      { key: 'dishwasher', note: 'ADB built-in dishwashers' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Washer will not agitate or spin',
        text: 'On NTW agitator washers, a worn lid switch or lid lock, a failed drive coupler or shift actuator, worn agitator dogs or a broken belt are common, and most are reasonable repairs. A washer that hums but does not move often has a jammed pump or a failed motor coupling.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A failed heating element, thermal fuse or thermostat on NED electric models, or an igniter or gas valve coils on NGD gas models. Clogged vents are a common root cause, especially in apartments with long vent runs to the roof.',
      },
      {
        title: 'Top-freezer refrigerator warm',
        text: 'If the freezer is cold but the fresh-food section is warm, the evaporator fan or the defrost system is the usual suspect. If both are warm, the condenser fan, the coils and the start relay are next.',
      },
      {
        title: 'Range burner or oven not heating',
        text: 'A burned coil element or a loose receptacle on coil tops, a failed surface element or switch on smoothtops, and a bake element or igniter in the oven. These are common parts on most Amana ranges.',
      },
      {
        title: 'Dishwasher not filling',
        text: 'On basic ADB models a slow or empty fill usually means a clogged inlet valve screen or a failed float switch. Hard water speeds up both.',
      },
    ],
    haveReady: [
      'The model and serial number from the tag. A photo is the easiest way to share it.',
      'Whether you own the home or rent it, and who approves repairs.',
      'Gas or electric, for dryers and ranges.',
      'What the appliance is doing, or not doing, and when it started.',
      'Whether the appliance is still under Amana’s warranty.',
    ],
    modelLocations: [
      { appliance: 'Refrigerator', where: 'Inside the fresh-food section, usually on an upper side wall' },
      { appliance: 'Top-load washer', where: 'Under the lid near the tub opening, or on the back of the console' },
      { appliance: 'Dryer', where: 'Inside the door opening on the frame, or on the back of the cabinet' },
      { appliance: 'Range', where: 'On the frame behind the storage drawer or behind the oven door' },
      { appliance: 'Dishwasher', where: 'On the edge of the tub or door, visible when the door is open' },
    ],
    modelSource: { name: 'Amana Product Help: where is my model and serial number located?', url: 'https://producthelp.amana.com/FAQ/Where_is_my_Model_and_Serial_Number_Located%3F' },
    faqs: [
      {
        q: 'Is this an Amana service center?',
        a: 'No. Appliance Repair Temple is not affiliated with or authorized by Amana or Whirlpool Corporation. If your appliance is under Amana’s warranty, contact Amana first.',
      },
      {
        q: 'Does this cover Amana air conditioners or furnaces?',
        a: 'No. Amana heating and air conditioning equipment comes from a separate company, and this line covers home appliance repair only, not HVAC. Amana washers, dryers, refrigerators, ranges, dishwashers and microwaves are covered.',
      },
      {
        q: 'Is my Amana washer worth repairing?',
        a: 'Usually, yes. Lid switches, couplers, belts and pumps are common, reasonable repairs on an NTW washer. A failed transmission on an older washer is the main case where replacing it makes more sense.',
      },
      {
        q: 'I rent. Can I arrange the repair myself?',
        a: 'Check your lease first. Many leases make the landlord responsible for the appliances they supply. If your landlord asks you to arrange the visit, tell the provider who is approving the work.',
      },
      {
        q: 'Are Amana parts the same as Whirlpool parts?',
        a: 'Many are. Current Amana appliances are built on Whirlpool platforms, so pumps, elements, igniters and fans often cross over. The model number confirms the match.',
      },
      {
        q: 'How much does Amana appliance repair cost?',
        a: 'It depends on the appliance and the part, so this site does not list prices. Landlords and tenants alike should ask the provider for the price and any warranty on the work first.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'speed-queen',
    slug: `speed-queen-repair-${loc}`,
    name: 'Speed Queen',
    h1: 'Speed Queen Washer & Dryer Repair in Temple, TX',
    metaTitle: 'Speed Queen Washer & Dryer Repair Temple TX | TC5, TR, DR',
    metaDescription:
      'Speed Queen TC5 or TR washer not draining, loud on spin, or dryer not heating? Speed Queen washer and dryer repair in Temple, TX. Call (254) 615-2088.',
    intro: [
      'Speed Queen washer not draining, stuck on spin or dryer running cold? One call reaches a technician who works on Speed Queen top-load and front-load washers and electric and gas dryers in homes across Temple, TX.',
      'Speed Queen makes laundry and nothing else. It is built by Alliance Laundry Systems in Ripon, Wisconsin, the same company behind a lot of commercial laundromat equipment, and the home machines borrow from that heavy-duty design. Many Temple owners bought one to keep for a long time, and with that build, repair is usually the sensible choice when something wears out.',
      'Speed Queen model numbers name the series. TC5 is the classic top-load washer with mechanical dials and a transmission-driven agitator. TR3, TR5 and TR7 are electronic top-loaders, FF7 a front-load washer, and DR3, DR5, DR7 and DC5 dryers, with E or G near the end for electric or gas. Older machines carry longer codes starting with AWN for washers or ADE and ADG for dryers.',
      'Check the warranty before anything else. Many recent Speed Queen washers and dryers come with long coverage, often five years or more, and the exact terms depend on the model and serial number.',
    ],
    appliances: [
      { key: 'washer', note: 'TC5 and TR series top-loaders, FF7 front-loaders and older AWN models' },
      { key: 'dryer', note: 'DR and DC5 electric and gas dryers, including matching and stacked pairs' },
    ],
    issues: [
      {
        title: 'Top-load washer will not drain or spin',
        text: 'A clogged drain pump or hose, a worn lid lock or lid switch, or a worn belt are the common causes. Something small like a sock in the pump can stop a cycle. The drain path and lock are checked before the motor or transmission.',
      },
      {
        title: 'Front-load washer stops or will not unlock',
        text: 'A clogged drain pump, a door lock that is not engaging, or an unbalanced load the machine will not spin. Front-loaders also need the door gasket wiped and the door left open between loads to prevent odors.',
      },
      {
        title: 'Loud washer on spin',
        text: 'A loud thump usually means an unbalanced load or worn suspension parts. A roar or grinding that gets louder with speed often points to the tub bearings. Stop using it if it starts walking across the floor.',
      },
      {
        title: 'TC5 timer or dial problems',
        text: 'The TC5 uses a mechanical timer and switches rather than a control board, so it shows no codes. A cycle that stalls in one spot or skips the rinse often means a timer or water level switch. Describe exactly where it stops.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A heating element, thermal fuse or high-limit thermostat on electric models, or an igniter or gas valve coils on gas models. A clogged vent is often the root cause, so it should be cleared on every dryer call.',
      },
    ],
    haveReady: [
      'The model and serial number from the serial plate. A photo is the easiest way to share it.',
      'The purchase date and your warranty paperwork, since coverage depends on the serial number.',
      'Top-load or front-load, and gas or electric for the dryer.',
      'What the machine was doing when it stopped, and any code or flashing light.',
      'Whether the machine is in a home or used commercially, such as in a rental property’s shared laundry.',
    ],
    modelLocations: [
      { appliance: 'Washer and dryer', where: 'On the serial plate, usually found by opening the door or lid and checking the door opening and frame' },
      { appliance: 'Top-load washer', where: 'If it is not around the lid opening, check the back of the cabinet or console' },
      { appliance: 'Any model', where: 'If you cannot find the plate, the owner’s manual shows its location. Speed Queen’s manual library is searched by model number' },
    ],
    modelSource: { name: 'Speed Queen: manuals and downloads', url: 'https://speedqueen.com/support/manuals-downloads/' },
    faqs: [
      {
        q: 'Is Appliance Repair Temple a Speed Queen dealer or service center?',
        a: 'Neither. It is not affiliated with or authorized by Speed Queen or Alliance Laundry Systems. A machine still under Speed Queen’s warranty should go to Speed Queen first.',
      },
      {
        q: 'Is my Speed Queen still under warranty?',
        a: 'Possibly. Many recent Speed Queen washers and dryers carry long warranties, and the exact coverage depends on the model and serial number. Check your paperwork or contact Speed Queen before paying for a repair.',
      },
      {
        q: 'Is an older Speed Queen worth repairing?',
        a: 'Usually, yes. These machines are built to last, and pumps, lid locks, belts, switches and heating parts are reasonable repairs. Tub bearings or a transmission on a very old unit are the main cases where it gets closer.',
      },
      {
        q: 'Can commercial or coin-operated Speed Queen machines be repaired?',
        a: 'This line covers residential laundry. If your machine is in a shared laundry room or used commercially, say so on the call and ask the provider whether they can help.',
      },
      {
        q: 'Why does my TC5 not show an error code?',
        a: 'The TC5 has mechanical controls, so there is nothing to display. Note the dial position where it stops and any noise, and give that to the technician instead of a code.',
      },
      {
        q: 'How much does Speed Queen repair cost?',
        a: 'It depends on the machine and the part, so no prices appear here. Ask the provider about pricing and any warranty on the work before the repair starts, and check your own Speed Queen coverage first.',
      },
    ],
    hasPage: true,
  },
];

/** Other brands local technicians commonly work on. Listed on the hub, no dedicated page yet. */
export const otherBrands: string[] = [];

export const brandHref = (b: Brand) => `/brands/${b.slug}/`;
