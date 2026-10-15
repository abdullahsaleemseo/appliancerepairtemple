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
    metaTitle: 'GE Appliance Repair in Temple, TX | Appliance Repair Temple',
    metaDescription:
      'GE refrigerator, range, dishwasher, washer or dryer problems in Temple, TX? Request a diagnostic visit or call to discuss the repair.',
    intro: [
      'GE appliances show up in a lot of Temple kitchens, especially ranges, refrigerators and dishwashers that came with the house. GE Appliances also sells the Profile, Café and Monogram lines, which share much of the same engineering.',
      'The technician diagnoses the fault, explains what failed, and gets your OK before any work starts.',
    ],
    appliances: [
      { key: 'oven', note: 'Electric and gas ranges, wall ovens, cooktops' },
      { key: 'refrigerator', note: 'Top-freezer, side-by-side, French door' },
      { key: 'dishwasher', note: 'Built-in models' },
      { key: 'washer', note: 'Top-load and front-load' },
      { key: 'dryer', note: 'Electric and gas' },
      { key: 'microwave', note: 'Over-the-range and built-in' },
    ],
    issues: [
      {
        title: 'Gas oven slow to heat',
        text: 'A weak igniter is the most common cause on gas ranges. It glows, but not hot enough to open the gas valve on time.',
      },
      {
        title: 'Refrigerator warm, freezer fine',
        text: 'Usually a defrost problem or an evaporator fan, which stops cold air from reaching the fresh food side.',
      },
      {
        title: 'Dishwasher leaves water behind',
        text: 'Filter, drain hose, or drain pump, checked in that order.',
      },
      {
        title: 'Electric range element not heating',
        text: 'A burned element, loose terminal or failed infinite switch. All are standard parts.',
      },
    ],
    faqs: [
      {
        q: 'Do you work on GE Profile and Café appliances?',
        a: 'Tell us the exact model when you book so the technician can confirm parts availability before the visit.',
      },
      {
        q: 'Where is the model number on a GE range?',
        a: 'Usually behind the storage drawer or on the frame when you open the oven door.',
      },
      {
        q: 'My GE oven shows an F code. What does that mean?',
        a: 'GE ovens use F codes for faults, often a sensor, lock or control issue. Note the code and give it to us when you call.',
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
