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
    metaTitle: 'Samsung Appliance Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'Samsung refrigerator ice maker, washer error code or dryer not heating in Temple, TX? Request a diagnostic visit or call to discuss the repair.',
    intro: [
      'Samsung refrigerators and laundry are popular in newer homes around Temple. They are feature-heavy, and they report most faults as error codes, which helps narrow down the problem quickly.',
      'The technician reads the code, confirms the failed part with testing, and explains the repair before any work starts.',
    ],
    appliances: [
      { key: 'refrigerator', note: 'French door, side-by-side, bottom-freezer' },
      { key: 'washer', note: 'Top-load and front-load' },
      { key: 'dryer', note: 'Electric and gas' },
      { key: 'oven', note: 'Electric and gas ranges' },
      { key: 'dishwasher', note: 'Built-in models' },
      { key: 'microwave', note: 'Over-the-range' },
    ],
    issues: [
      {
        title: 'Ice maker freezing up or not making ice',
        text: 'Ice buildup in the ice maker compartment of French door models is a well-known issue. The repair depends on the model and may involve the ice maker, a fan or a heater.',
      },
      {
        title: 'Washer shows a code and stops',
        text: 'Codes point to drain, door lock or balance problems. The technician tests the pump, lock and suspension before replacing anything.',
      },
      {
        title: 'Dryer not heating',
        text: 'Heating element or thermal fuse on electric models, igniter or gas valve on gas models. Airflow is checked too.',
      },
      {
        title: 'Refrigerator fresh food side warm',
        text: 'Often a frosted evaporator or a fan problem. Defrost parts and fans are replaceable.',
      },
    ],
    faqs: [
      {
        q: 'Can you fix a Samsung ice maker that keeps freezing up?',
        a: 'The fix depends on the model. The technician will look at the ice maker, its fan and any heaters, and tell you what the repair involves before starting.',
      },
      {
        q: 'Where is the model number on a Samsung refrigerator?',
        a: 'Usually on a label inside the fresh food section, on the left or right wall near the top.',
      },
      {
        q: 'Do I need to tell you the error code?',
        a: 'Please do. It helps the technician bring the likely parts on the first visit.',
      },
    ],
    hasPage: true,
  },
];

/** Other brands commonly serviced. Listed on the hub, no dedicated page yet. */
export const otherBrands = ['LG', 'Frigidaire', 'Maytag', 'KitchenAid', 'Bosch', 'Kenmore', 'Electrolux', 'Amana', 'Speed Queen'];

export const brandHref = (b: Brand) => `/brands/${b.slug}/`;
