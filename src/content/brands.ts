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
  {
    key: 'maytag',
    slug: `maytag-appliance-repair-${loc}`,
    name: 'Maytag',
    h1: 'Maytag Washer, Dryer & Appliance Repair in Temple, TX',
    metaTitle: 'Maytag Appliance Repair Temple TX | Washers, Dryers & More',
    metaDescription:
      'Maytag washer not spinning, dryer not heating or fridge running warm? Independent Maytag appliance repair in Temple, TX. Same-day service available.',
    intro: [
      'Maytag washer stuck mid-cycle, dryer running cold or refrigerator warming up? Appliance Repair Temple repairs Maytag washers, dryers, refrigerators, dishwashers, ranges and microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Laundry is where we see Maytag most, from older top-loaders that have run for years to newer high-efficiency pairs. Maytag is part of Whirlpool Corporation, and many current Maytag models share designs and parts with Whirlpool appliances. That helps when a part is needed, because common parts are widely available.',
      'Before any repair, check the warranty. Maytag offers a 10-year limited parts warranty on certain parts of many newer appliances, such as the washer drive motor and wash basket and some refrigerator compressors. Labor is often not included in the later years, so a covered part can still mean a repair visit. Check your model’s warranty paperwork or contact Maytag, then call us for the rest.',
    ],
    appliances: [
      { key: 'washer', note: 'Top-load and front-load washers, including high-efficiency and agitator models' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'refrigerator', note: 'Top-freezer, side-by-side, bottom-freezer and French door' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'oven', note: 'Electric and gas ranges and wall ovens' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Washer will not spin or drain',
        text: 'A clogged drain pump, a worn lid lock or door latch, a broken drive belt or a failed shifter on top-loaders are common causes. The technician checks the drain path and lock before looking at the motor or transmission.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A failed heating element, thermal fuse or high-limit thermostat on electric models, or an igniter or gas valve coils on gas models. A restricted vent is often the root cause, so airflow is checked on every dryer call.',
      },
      {
        title: 'Refrigerator not cooling',
        text: 'Dusty condenser coils, a failed condenser or evaporator fan, a defrost problem or a start relay come before the compressor. If the compressor has failed, check Maytag’s parts coverage for your model first.',
      },
      {
        title: 'Dishwasher leaves dishes dirty',
        text: 'A clogged filter, scale in the spray arms, a weak wash pump or an inlet valve that is not letting in enough water. The filter is the first stop.',
      },
    ],
    haveReady: [
      'The model and serial number from the label. A photo is the easiest way to share it.',
      'The purchase date, so you can check which parts the Maytag warranty still covers.',
      'Top-load or front-load, and gas or electric for dryers and ranges.',
      'Any error code on the display, and what the washer or dryer was doing when it stopped.',
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
        q: 'Are you an authorized Maytag service provider?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by Maytag or Whirlpool Corporation. If your appliance is under Maytag’s warranty, contact Maytag first.',
      },
      {
        q: 'Does the Maytag 10-year warranty cover my repair?',
        a: 'It depends on the model and the part. The 10-year limited coverage applies to specific parts, such as the washer drive motor and wash basket and some refrigerator compressors, and labor is often not included in the later years. Check your warranty paperwork or ask Maytag.',
      },
      {
        q: 'Is my older Maytag washer worth repairing?',
        a: 'Often, yes. Pumps, lid locks, belts and suspension parts are reasonable repairs on an older washer. A failed transmission or worn tub bearings usually tip the balance toward replacing it.',
      },
      {
        q: 'Do Maytag and Whirlpool use the same parts?',
        a: 'Many current models share designs and parts, since both brands belong to Whirlpool Corporation. The full model number tells us exactly which parts fit.',
      },
      {
        q: 'Can you repair my Maytag the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Some parts are model-specific and may need to be ordered.',
      },
      {
        q: 'How much does Maytag appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number ready.',
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
      'KitchenAid dishwasher not cleaning, fridge running warm or range not heating? Independent KitchenAid appliance repair in Temple, TX. Same-day service available.',
    intro: [
      'KitchenAid dishwasher leaving a film, refrigerator warming up or range slow to heat? Appliance Repair Temple repairs KitchenAid dishwashers, refrigerators, ranges and over-the-range microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'KitchenAid major appliances are a Whirlpool Corporation brand, built mostly for the kitchen. In Temple homes we see them most as quiet third-rack dishwashers, counter-depth French door refrigerators and slide-in ranges in remodeled or higher-end kitchens. Many share core parts with Whirlpool and Maytag models, while trim, panels and some controls are specific to KitchenAid.',
      'The process is the same as for any brand. The technician tests the appliance, finds the part that failed and explains the repair before any work starts. This page covers major appliances. For a stand mixer or countertop appliance, contact KitchenAid.',
    ],
    appliances: [
      { key: 'dishwasher', note: 'Built-in dishwashers, including third-rack and top-control models' },
      { key: 'refrigerator', note: 'French door, counter-depth, side-by-side and bottom-freezer' },
      { key: 'oven', note: 'Electric and gas ranges, including slide-in models' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Dishwasher not cleaning or drying',
        text: 'A clogged filter, mineral scale in the spray arms or third-rack jets, a weak wash pump or a failed heating element. Hard water makes scale worse, so the technician checks the filter and spray arms first.',
      },
      {
        title: 'Dishwasher not draining',
        text: 'Usually a blocked filter, a kinked or clogged drain hose, a garbage disposal knockout plug that was never removed, or a failed drain pump. Each is checked before a part is ordered.',
      },
      {
        title: 'Refrigerator warm, freezer cold',
        text: 'Often an evaporator fan, a damper or a defrost problem blocking airflow to the fresh-food side. Counter-depth models have tighter spaces, so clean coils and clear vents matter.',
      },
      {
        title: 'Range slow to heat or uneven',
        text: 'A bake element or igniter on its way out, a temperature sensor that has drifted, or a convection fan that is not running. The technician checks each against the model’s specifications.',
      },
    ],
    haveReady: [
      'The model and serial number from the silver label. A photo is the easiest way to share it.',
      'Any error code or flashing light pattern on the control panel.',
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
        q: 'Are you an authorized KitchenAid service provider?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by KitchenAid or Whirlpool Corporation. If your appliance is under KitchenAid’s warranty, contact KitchenAid first.',
      },
      {
        q: 'Why does my KitchenAid dishwasher leave a white film?',
        a: 'Usually hard water scale or too much detergent. Clean the filter, run a cleaning cycle and check the rinse aid. If the film stays, or dishes come out dirty too, the spray arms or wash pump may need attention.',
      },
      {
        q: 'Do KitchenAid and Whirlpool use the same parts?',
        a: 'Many core parts are shared, since both brands belong to Whirlpool Corporation. Panels, trim and some controls are KitchenAid-specific. The full model number tells us exactly which parts fit.',
      },
      {
        q: 'Do you repair KitchenAid stand mixers?',
        a: 'No. We repair major home appliances. For a stand mixer or other countertop appliance, contact KitchenAid.',
      },
      {
        q: 'Can you repair my KitchenAid the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Some KitchenAid parts are model-specific and may need to be ordered.',
      },
      {
        q: 'How much does KitchenAid appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number ready.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'bosch',
    slug: `bosch-appliance-repair-${loc}`,
    name: 'Bosch',
    h1: 'Bosch Dishwasher & Appliance Repair in Temple, TX',
    metaTitle: 'Bosch Appliance Repair Temple TX | Dishwashers & More',
    metaDescription:
      'Bosch dishwasher showing E15 or E24, not draining or not drying? Independent Bosch appliance repair in Temple, TX, for dishwashers, fridges and ranges.',
    intro: [
      'Bosch dishwasher showing an error code, leaving water in the tub or not drying? Appliance Repair Temple repairs Bosch dishwashers, refrigerators and ranges in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Dishwashers are by far the Bosch appliance we see most. They run quietly, often with no lights on the front at all, and they protect themselves: when something goes wrong they stop and show a code instead of carrying on. That is good for your floor, but it means a Bosch that has quit is usually telling you exactly which system needs attention.',
      'Bosch identifies its appliances with an E-Nr (the model number) and an FD number (the production number), both printed on the rating label. Having both ready makes it much easier to find the right part the first time.',
    ],
    appliances: [
      { key: 'dishwasher', note: 'Built-in dishwashers, including 100, 300, 500, 800 and Benchmark series' },
      { key: 'refrigerator', note: 'French door and bottom-freezer refrigerators, including counter-depth' },
      { key: 'oven', note: 'Electric, gas and induction ranges, including slide-in models' },
    ],
    issues: [
      {
        title: 'E15: water in the base',
        text: 'Bosch says E15 means the safety switch has found water in the base and the leak protection has turned on. Turn off the water supply and switch the dishwasher off. The leak usually comes from a hose, a seal, the pump or the door gasket, and it needs to be found and fixed before the unit will run normally.',
      },
      {
        title: 'E24 or E25: not draining',
        text: 'Drain codes usually point to a blocked filter, a kinked or clogged drain hose, a disposal connection that is blocked, or a jammed or failed drain pump. Clean the filter first. If the code comes back, the pump and hose need to be checked.',
      },
      {
        title: 'Dishes come out wet',
        text: 'Most Bosch dishwashers dry by condensation rather than with a heated element, so rinse aid matters. If dishes stay wet with rinse aid filled, the technician checks the settings, the rinse aid dispenser and the water heating.',
      },
      {
        title: 'Refrigerator or range problems',
        text: 'Refrigerators that run warm usually have a fan, defrost or sensor problem. Ranges that will not heat often have a failed element, igniter or control. On induction ranges, the cookware is checked too, since a pan that is not magnetic will not heat.',
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
        q: 'Are you an authorized Bosch service provider?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by Bosch. If your appliance is under Bosch’s warranty, contact Bosch first.',
      },
      {
        q: 'What does E15 mean on my Bosch dishwasher?',
        a: 'According to Bosch, E15 means water has been detected in the base and the leak protection system has turned on. Turn off the water supply, switch the dishwasher off and call us. The source of the leak has to be found and fixed.',
      },
      {
        q: 'My Bosch dishwasher shows E24. What can I check?',
        a: 'Switch it off, then clean the filter at the bottom of the tub and check that the drain hose is not kinked. If the dishwasher drains to a garbage disposal, run the disposal. If the code comes back, the drain pump or hose needs a closer look.',
      },
      {
        q: 'What are the E-Nr and FD numbers?',
        a: 'The E-Nr is Bosch’s model number and the FD is the production number. Both are on the rating label. Bosch parts often depend on both, so have them ready when you call.',
      },
      {
        q: 'Can you repair my Bosch the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Some Bosch parts are model-specific and may need to be ordered.',
      },
      {
        q: 'How much does Bosch appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the E-Nr and FD numbers ready.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'kenmore',
    slug: `kenmore-appliance-repair-${loc}`,
    name: 'Kenmore',
    h1: 'Kenmore Appliance Repair in Temple, TX, for New and Older Models',
    metaTitle: 'Kenmore Appliance Repair Temple TX | Washers, Fridges & More',
    metaDescription:
      'Kenmore washer, dryer, fridge or range acting up? Independent Kenmore appliance repair in Temple, TX, for newer and older models. Same-day service available.',
    intro: [
      'Kenmore washer that will not spin, dryer running cold or refrigerator warming up? Appliance Repair Temple repairs Kenmore washers, dryers, refrigerators, freezers, dishwashers, ranges and microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Kenmore is a little different from other brands. For decades Kenmore appliances were sold through Sears but built by other manufacturers, including Whirlpool, LG, Frigidaire and others. That means two Kenmore refrigerators can have completely different parts inside, depending on who made them.',
      'The good news is that the model number tells us who built it. The digits before the dot point to the manufacturer, and the full number tells us exactly which parts fit. Many Kenmore appliances in Temple homes are older units that still run well, and a lot of them are worth repairing.',
    ],
    appliances: [
      { key: 'washer', note: 'Top-load and front-load washers, including older Elite models' },
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
        text: 'On Whirlpool-built Kenmore top-loaders, a worn lid switch or lid lock, a broken belt, a failed drive coupler or a clogged pump are common. On LG-built front-loaders, the drain filter and door lock come first. The model number tells us which design you have.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A heating element, thermal fuse or thermostat on electric dryers, an igniter or gas valve coils on gas dryers. Older dryers often have long vent runs packed with lint, so airflow is checked on every call.',
      },
      {
        title: 'Refrigerator or freezer running warm',
        text: 'Dusty condenser coils, a failed fan, a defrost problem or a start relay are the usual causes, especially on older units in garages. These are reasonable repairs on most models.',
      },
      {
        title: 'Parts for older models',
        text: 'Some older Kenmore parts have been discontinued. Because Kenmore shared designs with its manufacturers, a compatible part can often be found through the original builder. The technician will tell you plainly if a part is no longer available.',
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
        q: 'Are you affiliated with Kenmore or Sears?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by Kenmore, Sears or any manufacturer that built Kenmore appliances.',
      },
      {
        q: 'Who made my Kenmore appliance?',
        a: 'The digits before the dot in the model number identify the manufacturer. For example, 110 and 106 point to Whirlpool and 795 points to LG. Give us the full model number and we will look it up.',
      },
      {
        q: 'Is my old Kenmore worth repairing?',
        a: 'Often, yes. Many older Kenmore washers, dryers and refrigerators use simple, durable parts. If a key part has been discontinued or the repair is major on a very old unit, the technician will tell you.',
      },
      {
        q: 'Can you still get parts for older Kenmore models?',
        a: 'Many are still available, sometimes under the original manufacturer’s part number. Some have been discontinued. We check before ordering and tell you what we find.',
      },
      {
        q: 'Can you repair my Kenmore the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Some parts are model-specific and may need to be ordered.',
      },
      {
        q: 'How much does Kenmore appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the full model number ready.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'electrolux',
    slug: `electrolux-appliance-repair-${loc}`,
    name: 'Electrolux',
    h1: 'Electrolux Laundry & Kitchen Appliance Repair in Temple, TX',
    metaTitle: 'Electrolux Appliance Repair Temple TX | Laundry & Kitchen',
    metaDescription:
      'Electrolux front-load washer, dryer, fridge or range acting up? Independent Electrolux appliance repair in Temple, TX. Same-day service available. Call us.',
    intro: [
      'Electrolux washer stopping with a code, dryer taking too long or refrigerator warming up? Appliance Repair Temple repairs Electrolux front-load washers, dryers, refrigerators, freezers, ranges and dishwashers in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Electrolux is the parent company of Frigidaire and sells its own Electrolux-branded line, usually higher up the range: front-load laundry with steam cycles, counter-depth refrigerators and ranges with convection and air fry. Underneath, many Electrolux appliances share platforms and parts with Frigidaire models, which helps when a part is needed.',
      'Electrolux labels often show three numbers: the model number, a product number code (PNC) used for parts on some models, and the serial number. A photo of the full label is the easiest way to make sure we order the right part.',
    ],
    appliances: [
      { key: 'washer', note: 'Front-load washers, including steam and stacked laundry models' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'refrigerator', note: 'French door, side-by-side and counter-depth' },
      { key: 'freezer', note: 'Upright and chest freezers' },
      { key: 'oven', note: 'Electric, gas and induction ranges, and wall ovens' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
    ],
    issues: [
      {
        title: 'Front-load washer will not drain or unlock',
        text: 'A clogged pump filter behind the small front access door is the most common cause, followed by a failed drain pump or door lock. Clean the filter first; if the washer still will not drain or release the door, call us.',
      },
      {
        title: 'Washer smells or leaves residue',
        text: 'Front-loaders hold moisture in the door gasket and dispenser. Too much detergent, or the wrong kind, makes it worse. Wipe the gasket, leave the door open after loads and run a cleaning cycle. If water is leaking, the gasket or a hose may need replacing.',
      },
      {
        title: 'Dryer takes too long or runs cold',
        text: 'A restricted vent is the first suspect, then the heating element, thermal fuse or thermostats on electric models, or the igniter and gas valve coils on gas models. Moisture sensors that are coated with residue can also end cycles early or late.',
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
        q: 'Are you an authorized Electrolux service provider?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by Electrolux or Frigidaire. If your appliance is under Electrolux’s warranty, contact Electrolux first.',
      },
      {
        q: 'Are Electrolux and Frigidaire parts the same?',
        a: 'Many are, since Electrolux owns Frigidaire and the two share platforms. Some trim, controls and features are Electrolux-specific. The full model number tells us exactly which parts fit.',
      },
      {
        q: 'My Electrolux front-load washer will not drain. What can I check?',
        a: 'Switch it off, put a towel down and open the small access door at the bottom front. Drain the water through the hose if there is one, then clean the pump filter. If it still will not drain, the pump or a hose needs a closer look.',
      },
      {
        q: 'What is the PNC on my Electrolux label?',
        a: 'The product number code is an identifier Electrolux uses for some models and their parts. If your label has one, include it with the model and serial number when you call.',
      },
      {
        q: 'Can you repair my Electrolux the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Some Electrolux parts are model-specific and may need to be ordered.',
      },
      {
        q: 'How much does Electrolux appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number ready.',
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
      'Amana washer, dryer, fridge or range not working? Independent Amana appliance repair in Temple, TX, for homes and rentals. Same-day service available.',
    intro: [
      'Amana washer not agitating, dryer running cold or refrigerator warming up? Appliance Repair Temple repairs Amana washers, dryers, refrigerators, ranges, dishwashers and microwaves in homes across Temple, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Amana is a Whirlpool Corporation brand built around straightforward, value-priced appliances: top-load agitator washers, top-freezer refrigerators, coil and smoothtop ranges. That makes it a common sight in rental homes, apartments and starter houses around Temple, often bought as a set by a landlord or builder.',
      'Simple designs are usually good news for repair. Many Amana appliances share parts with Whirlpool and Maytag models, so common parts are easy to find and repairs tend to be practical. If you rent, check with your landlord before booking, since they may be responsible for the appliances they supply.',
    ],
    appliances: [
      { key: 'washer', note: 'Top-load agitator and high-efficiency washers' },
      { key: 'dryer', note: 'Electric and gas dryers' },
      { key: 'refrigerator', note: 'Top-freezer, bottom-freezer, side-by-side and French door' },
      { key: 'oven', note: 'Electric and gas ranges, coil and smoothtop' },
      { key: 'dishwasher', note: 'Built-in dishwashers' },
      { key: 'microwave', note: 'Over-the-range microwaves' },
    ],
    issues: [
      {
        title: 'Washer will not agitate or spin',
        text: 'On top-load agitator washers, a worn lid switch or lid lock, a failed drive coupler, worn agitator dogs or a broken belt are common, and most are reasonable repairs. A washer that hums but does not move often has a jammed pump or a failed motor coupling.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'A failed heating element, thermal fuse or thermostat on electric models, or an igniter or gas valve coils on gas models. Clogged vents are a common root cause, especially in apartments with long vent runs.',
      },
      {
        title: 'Top-freezer refrigerator warm',
        text: 'If the freezer is cold but the fresh-food section is warm, the evaporator fan or the defrost system is the usual suspect. If both are warm, the technician checks the condenser fan, the coils and the start relay.',
      },
      {
        title: 'Range burner or oven not heating',
        text: 'A burned coil element or a loose receptacle on coil tops, a failed surface element or switch on smoothtops, and a bake element or igniter in the oven. These are common parts on most Amana ranges.',
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
        q: 'Are you an authorized Amana service provider?',
        a: 'No. Appliance Repair Temple is an independent repair service and is not affiliated with or authorized by Amana or Whirlpool Corporation. If your appliance is under Amana’s warranty, contact Amana first.',
      },
      {
        q: 'Do you repair Amana air conditioners or furnaces?',
        a: 'No. Amana heating and air conditioning equipment is a separate business from Amana home appliances, and we do not work on HVAC. We repair Amana washers, dryers, refrigerators, ranges, dishwashers and microwaves.',
      },
      {
        q: 'Is my Amana washer worth repairing?',
        a: 'Usually, yes. Lid switches, couplers, belts and pumps are common, reasonable repairs. A failed transmission on an older washer is the main case where replacing it makes more sense.',
      },
      {
        q: 'I rent. Can I book the repair myself?',
        a: 'Check your lease first. Many leases make the landlord responsible for the appliances they supply. If your landlord asks you to arrange the visit, let us know who is approving the work.',
      },
      {
        q: 'Can you repair my Amana the same day?',
        a: 'Same-day service is available, subject to technician availability, location, and current demand. Common Amana parts are often available quickly; some may need to be ordered.',
      },
      {
        q: 'How much does Amana appliance repair cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the model number ready.',
      },
    ],
    hasPage: true,
  },
];

/** Other brands commonly serviced. Listed on the hub, no dedicated page yet. */
export const otherBrands = ['Speed Queen'];

export const brandHref = (b: Brand) => `/brands/${b.slug}/`;
