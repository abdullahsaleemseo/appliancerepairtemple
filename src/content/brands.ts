import type { Brand } from './types';
import { site } from '@/config/site';

const loc = `${site.citySlug}-${site.stateSlug}`;

export const brands: Brand[] = [
  {
    key: 'whirlpool',
    slug: `whirlpool-appliance-repair-${loc}`,
    name: 'Whirlpool',
    h1: 'Local Whirlpool Appliance Repair in Temple, TX',
    metaTitle: 'Whirlpool Appliance Repair Temple TX | Local Service',
    metaDescription:
      'Whirlpool washer, dryer, fridge, dishwasher or range acting up? Local Whirlpool appliance repair in Temple, TX. Same-day service available. Call (254) 555-0147.',
    intro: [
      'Whirlpool washer stuck mid-cycle, dryer blowing cold or refrigerator warming up? Appliance Repair Temple repairs Whirlpool washers, dryers, refrigerators, dishwashers, ranges and over-the-range microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Whirlpool is one of the most common names in Temple kitchens and laundry rooms, from builder-grade appliances in rentals to newer laundry pairs and French door refrigerators. Whirlpool Corporation also owns Maytag, KitchenAid, JennAir and Amana, and many parts are shared across those brands. That usually makes Whirlpool-family parts easier to find.',
      'The technician diagnoses the problem on site, explains what failed in plain terms, and starts the repair only after your OK.',
    ],
    appliances: [
      { key: 'washer', note: 'Top-load and front-load, including agitator and high-efficiency models' },
      { key: 'dryer', note: 'Electric and gas dryers, including stacked units' },
      { key: 'refrigerator', note: 'Top-freezer, bottom-freezer, side-by-side and French door' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'oven', note: 'Electric and gas ranges and wall ovens' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Top-load washer won’t spin',
        text: 'Many newer top-loaders lock the lid before they spin. A worn lid lock, a broken lid strike or water left in the drum will stop the cycle. These are common, replaceable parts.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'Dryers protect themselves with a thermal fuse that opens when the dryer overheats, usually because the vent is restricted. We replace the failed part and check the vent so it does not happen again.',
      },
      {
        title: 'Refrigerator ice maker stopped',
        text: 'The usual causes are a water inlet valve, a frozen fill tube, an old filter or the ice maker itself. The technician tests each before ordering anything.',
      },
      {
        title: 'Dishwasher leaving water behind',
        text: 'Most Whirlpool-family dishwashers have a removable filter under the lower spray arm. A clogged filter is the first check, then the drain hose and pump.',
      },
    ],
    haveReady: [
      'The full model and serial number. A clear photo of the tag is perfect.',
      'Which appliance it is and whether it is gas or electric, if that applies.',
      'What it is doing, and any error code or flashing light pattern.',
      'Roughly how old it is, and whether it is still under the manufacturer’s warranty.',
      'Your ZIP code and a good time for a visit.',
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
        q: 'Do you also repair Maytag, KitchenAid and Amana?',
        a: 'Yes. Maytag, KitchenAid, JennAir and Amana are Whirlpool Corporation brands, and many of their parts are shared. Tell us the brand and model number when you book.',
      },
      {
        q: 'Are you an authorized Whirlpool service center?',
        a: 'No. Appliance Repair Temple is an independent repair service. We are not affiliated with or authorized by Whirlpool. We repair Whirlpool appliances that are out of warranty or where you prefer a local independent technician.',
      },
      {
        q: 'My Whirlpool is still under warranty. Should I call you?',
        a: 'Contact Whirlpool first. Independent repair may not be covered by the manufacturer’s warranty. If the warranty has expired, call us.',
      },
      {
        q: 'What does the error code on my Whirlpool mean?',
        a: 'Codes point to a system, such as draining, the door lock or a sensor, and their meaning varies by model. Write the code down, or take a photo, and give it to us when you call.',
      },
      {
        q: 'Can you repair my Whirlpool the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Many common Whirlpool parts can be replaced on the first visit. Some model-specific parts need to be ordered.',
      },
      {
        q: 'How much does Whirlpool appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number ready.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'ge',
    slug: `ge-appliance-repair-${loc}`,
    name: 'GE',
    h1: 'GE & GE Profile Appliance Repair in Temple, TX',
    metaTitle: 'GE Appliance Repair Temple TX | GE & GE Profile',
    metaDescription:
      'GE range, fridge, dishwasher, washer or dryer not working? GE and GE Profile appliance repair in Temple, TX. Same-day service available. Call (254) 555-0147.',
    intro: [
      'GE oven slow to heat, refrigerator warming up or dishwasher leaving water behind? Appliance Repair Temple repairs GE and GE Profile ranges, wall ovens, cooktops, refrigerators, dishwashers, washers, dryers and over-the-range microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'GE appliances are everywhere in Temple, especially ranges, refrigerators and dishwashers that came with the house. GE Appliances has been owned by Haier since 2016 and sells several lines under the GE name, including GE, GE Profile, Café and Monogram. Tell us which line you have, because parts and features vary between them.',
      'On every visit, the technician tests the suspect parts, explains what failed and what the repair involves, and starts work only after your OK.',
    ],
    appliances: [
      { key: 'oven', note: 'Electric and gas ranges, wall ovens and cooktops' },
      { key: 'refrigerator', note: 'Top-freezer, side-by-side and French door' },
      { key: 'dishwasher', note: 'Built-in dishwashers, front and top control' },
      { key: 'washer', note: 'Top-load and front-load washers' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'microwave', note: 'Over-the-range and built-in microwaves' },
    ],
    issues: [
      {
        title: 'Gas oven slow to heat or not lighting',
        text: 'On gas ranges, a weak hot surface igniter is the most common cause. It can glow and still fail to open the gas valve. The technician tests it with a meter before looking at the valve or the board.',
      },
      {
        title: 'Refrigerator warm, freezer still cold',
        text: 'Usually a frosted evaporator coil from a defrost problem, or an evaporator fan that stopped. Either way, cold air is not reaching the fresh-food side.',
      },
      {
        title: 'Dishwasher not draining',
        text: 'Check the filter, the drain hose loop under the sink and the disposal connection first. If those are clear, the drain pump is the likely cause.',
      },
      {
        title: 'Electric burner or element not heating',
        text: 'A burned element, a loose or burned terminal, or a failed infinite switch. All are standard parts on most GE ranges.',
      },
    ],
    haveReady: [
      'The full model and serial number. The model number starts with a letter. A photo of the tag works.',
      'Which GE line it is: GE, GE Profile, Café or Monogram.',
      'Gas or electric, for ranges, cooktops and dryers.',
      'What the appliance is doing, and any error code or F code on the display.',
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
        q: 'Do you work on GE Profile and Café appliances?',
        a: 'Yes. Tell us the exact model when you book, since GE Profile, Café and Monogram models can use different parts. The technician checks parts availability before the visit.',
      },
      {
        q: 'Are you an authorized GE service provider?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by GE Appliances. If your appliance is under the GE warranty, contact GE Appliances first.',
      },
      {
        q: 'My GE oven shows an F code. What does that mean?',
        a: 'GE ovens use F codes to flag faults, often in a sensor, the door lock or the control. The exact meaning varies by model. Write the code down and give it to us when you call.',
      },
      {
        q: 'Where is the model number on my GE range?',
        a: 'Open the oven door and check the front frame, or pull out the storage drawer and look on the frame. On some models it is under the cooktop. GE model numbers start with a letter.',
      },
      {
        q: 'Can you repair my GE appliance the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Common GE parts can often be replaced on the first visit, while some need to be ordered.',
      },
      {
        q: 'How much does GE appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number ready.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'samsung',
    slug: `samsung-appliance-repair-${loc}`,
    name: 'Samsung',
    h1: 'Samsung Appliance Repair in Temple, TX: Fridges, Laundry & Ranges',
    metaTitle: 'Samsung Appliance Repair Temple TX | Fridges & Laundry',
    metaDescription:
      'Samsung ice maker frozen, washer showing a code or dryer not heating? Samsung appliance repair in Temple, TX. Same-day service available. Call (254) 555-0147.',
    intro: [
      'Samsung ice maker frozen solid, washer stopping with a code or dryer blowing cold? Appliance Repair Temple repairs Samsung refrigerators, washers, dryers, ranges, dishwashers and over-the-range microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Samsung refrigerators and laundry pairs are common in newer Temple homes, especially in the subdivisions on the west side of town. They are feature-heavy machines, and most of them report faults as error codes on the display. A code narrows the search, but it rarely names the exact part, so the technician confirms the cause with testing before ordering anything.',
      'You hear what failed and what the repair involves, and the work starts only after your OK.',
    ],
    appliances: [
      { key: 'refrigerator', note: 'French door, side-by-side and bottom-freezer, including models with door ice makers' },
      { key: 'washer', note: 'Top-load and front-load washers' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'oven', note: 'Electric and gas ranges' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Ice maker frozen up or not making ice',
        text: 'Ice building up around the ice maker is a frequent complaint from owners of some Samsung French door models. Depending on the model, the cause can be the ice maker, a fan, a heater or a door seal. The technician checks each before deciding on the repair.',
      },
      {
        title: 'Washer stops and shows a code',
        text: 'Most codes point to draining, the door lock or an unbalanced load. The technician tests the pump, lock and suspension before replacing anything.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A heating element or thermal fuse on electric models, an igniter or gas valve on gas models. Airflow is checked too, since a clogged vent is a common root cause.',
      },
      {
        title: 'Fridge warm, freezer cold',
        text: 'Often a frosted evaporator or a fan that stopped. Defrost parts and fans are replaceable on most models.',
      },
    ],
    haveReady: [
      'The model number and serial number. Samsung serial numbers are long, so a photo of the label is the easiest way to share them.',
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
        q: 'Can you fix a Samsung ice maker that keeps freezing up?',
        a: 'Usually, yes. The repair depends on the model and may involve the ice maker, a fan, a heater or the seal around the ice compartment. The technician finds the cause before recommending a fix.',
      },
      {
        q: 'Are you a Samsung authorized service center?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by Samsung. If your appliance is still under Samsung’s warranty, contact Samsung first.',
      },
      {
        q: 'Do I need to tell you the error code?',
        a: 'Please do. A code points to the system that failed and helps the technician bring the likely parts on the first visit.',
      },
      {
        q: 'Where is the model number on my Samsung refrigerator?',
        a: 'Check the side wall inside the fresh-food section, just above the top shelf. Many models also have a label on the lower outside of the cabinet near the front.',
      },
      {
        q: 'Can you repair my Samsung the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Some Samsung parts are model-specific and may need to be ordered.',
      },
      {
        q: 'How much does Samsung appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number and error code ready.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'lg',
    slug: `lg-appliance-repair-${loc}`,
    name: 'LG',
    h1: 'Independent LG Appliance Repair in Temple, TX',
    metaTitle: 'LG Appliance Repair Temple TX | Fridges, Washers, Dryers',
    metaDescription:
      'LG fridge not cooling, washer error code or dryer not heating? Independent LG appliance repair in Temple, TX. Same-day service available. Call (254) 555-0147.',
    intro: [
      'LG refrigerator warming up, washer stopping with a code or dryer running cold? Appliance Repair Temple repairs LG refrigerators, washers, dryers, ranges, dishwashers and over-the-range microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'LG appliances are common in newer Temple homes, especially French door refrigerators, front-load laundry pairs and smart ranges. Most LG models report faults as codes on the display or through the LG app. A code points the technician to the right system, then testing confirms which part actually failed.',
      'If your LG refrigerator has stopped cooling, check the purchase date and your paperwork before you decide anything. LG offers longer compressor coverage on many refrigerator models than its standard warranty, so a compressor problem may be a warranty matter first. If it is not covered, or the problem is something else, call us.',
    ],
    appliances: [
      { key: 'refrigerator', note: 'French door, side-by-side, bottom-freezer and InstaView-style models' },
      { key: 'washer', note: 'Front-load and top-load washers, including stacked and WashTower-style units' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'oven', note: 'Electric and gas ranges and wall ovens' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Refrigerator not cooling',
        text: 'Many LG refrigerators use inverter or linear compressors. Before blaming the compressor, the technician checks the fans, defrost system, sensors and control board, which fail more simply. If it is the compressor, we tell you so you can check the warranty.',
      },
      {
        title: 'Ice maker slow or frozen',
        text: 'Often a fill tube that has frozen, a water inlet valve, an old filter or the ice maker module. The technician checks each before ordering a part.',
      },
      {
        title: 'Front-load washer stops with a code',
        text: 'Drain, door lock and unbalanced-load codes are the most common. The pump filter, the lock and the suspension are tested before anything is replaced.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A heating element or thermal fuse on electric models, an igniter or gas valve on gas models. A clogged vent is a common root cause, so airflow is checked too.',
      },
    ],
    haveReady: [
      'The model and serial number from the label. A photo is the easiest way to share it.',
      'The exact error code, and whether it shows on the display or in the LG app.',
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
        q: 'Are you an authorized LG service provider?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by LG. If your appliance is under LG’s warranty, contact LG first.',
      },
      {
        q: 'My LG refrigerator stopped cooling. Is it the compressor?',
        a: 'Not always. Fans, the defrost system, sensors and the control board can all stop a refrigerator from cooling. The technician tests those first. If the compressor has failed, check whether LG’s compressor coverage applies to your model before paying for that repair.',
      },
      {
        q: 'Do you repair Kenmore appliances made by LG?',
        a: 'Yes. Some Kenmore models were built by LG. Give us the full Kenmore model number and we will check the parts.',
      },
      {
        q: 'What does the error code on my LG washer mean?',
        a: 'Codes point to a system, such as draining, the door lock or an unbalanced load. Their meaning varies by model. Note the code and give it to us when you call.',
      },
      {
        q: 'Can you repair my LG the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Some LG parts are model-specific and may need to be ordered.',
      },
      {
        q: 'How much does LG appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number and any error code ready.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'frigidaire',
    slug: `frigidaire-appliance-repair-${loc}`,
    name: 'Frigidaire',
    h1: 'Frigidaire Appliance Repair in Temple, TX, for Every Room',
    metaTitle: 'Frigidaire Appliance Repair Temple TX | Fridges & Ranges',
    metaDescription:
      'Frigidaire fridge, freezer, range, dishwasher or laundry acting up? Independent Frigidaire appliance repair in Temple, TX. Same-day service available.',
    intro: [
      'Frigidaire freezer warming up, range not heating or dishwasher leaving water behind? Appliance Repair Temple repairs Frigidaire refrigerators, freezers, ranges, dishwashers, washers, dryers and microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Frigidaire, part of the Electrolux group, is one of the most common brands we see in Temple. It shows up in rentals, in starter homes and in garages, where a Frigidaire chest or upright freezer often holds the extra food. Models range from basic units to the Gallery and Professional lines, and many share parts and designs across the family.',
      'The approach is the same for all of them. The technician tests the appliance, finds the part that failed and explains what the repair involves before any work starts.',
    ],
    appliances: [
      { key: 'refrigerator', note: 'Top-freezer, side-by-side and French door, including Gallery and Professional models' },
      { key: 'freezer', note: 'Chest and upright freezers, including garage-ready models' },
      { key: 'oven', note: 'Electric and gas ranges, smoothtop and coil, and wall ovens' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'washer', note: 'Top-load and front-load washers' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Freezer or fridge running warm',
        text: 'Frost buildup from a defrost problem, a failed evaporator or condenser fan, or a start relay are common causes. On garage freezers, heat and dusty coils make it worse. The technician checks airflow and the defrost system before looking at the sealed system.',
      },
      {
        title: 'Ice maker not making ice',
        text: 'Often a water inlet valve, a frozen fill tube, a freezer that is not cold enough or the ice maker assembly. Some Frigidaire ice makers have been part of safety recalls, so check your model first (see below).',
      },
      {
        title: 'Range or oven not heating',
        text: 'A burned bake or broil element on electric models, a weak igniter on gas models, or a temperature sensor that has drifted. Smoothtop burners that will not heat are often a switch or the element itself.',
      },
      {
        title: 'Dishwasher not draining or cleaning',
        text: 'A clogged filter, a blocked drain hose, a worn drain pump or a weak wash motor. The filter is checked first, since it causes many of these calls.',
      },
    ],
    haveReady: [
      'The model and serial number from the label. A photo is the easiest way to share it.',
      'Whether it is a Gallery, Professional or standard model, if you know.',
      'Gas or electric, for ranges and dryers.',
      'Any error code on the display.',
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
        q: 'Are you an authorized Frigidaire service provider?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by Frigidaire or Electrolux. If your appliance is under the manufacturer’s warranty, contact Frigidaire first.',
      },
      {
        q: 'Has my Frigidaire been recalled?',
        a: 'Some Frigidaire refrigerators, ice makers and ranges have been part of safety recalls. Look up your model and serial number at cpsc.gov or with Frigidaire before paying for a repair, since a recall remedy is handled by the manufacturer.',
      },
      {
        q: 'Do you repair Frigidaire chest and upright freezers?',
        a: 'Yes, including freezers in garages and shops. Make sure the technician can reach the back of the unit and the outlet.',
      },
      {
        q: 'Do you work on Frigidaire Gallery and Professional models?',
        a: 'Yes. Give us the full model number so we can check parts, since some Gallery and Professional parts are model-specific.',
      },
      {
        q: 'Do you repair Kenmore appliances made by Frigidaire?',
        a: 'Yes. Many Kenmore models were built by Frigidaire. Give us the full Kenmore model number and we will check the parts.',
      },
      {
        q: 'How much does Frigidaire appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number ready.',
      },
    ],
    hasPage: true,
  },
];

/** Other brands commonly serviced. Listed on the hub, no dedicated page yet. */
export const otherBrands = ['Maytag', 'KitchenAid', 'Bosch', 'Kenmore', 'Electrolux', 'Amana', 'Speed Queen'];

export const brandHref = (b: Brand) => `/brands/${b.slug}/`;
