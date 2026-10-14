import type { Brand } from './types';
import { site } from '@/config/site';

const loc = `${site.citySlug}-${site.stateSlug}`;

export const brands: Brand[] = [
  {
    key: 'whirlpool',
    slug: `whirlpool-appliance-repair-${loc}`,
    name: 'Whirlpool',
    metaTitle: 'Whirlpool Appliance Repair in Temple, TX | Temple Appliance Repair',
    metaDescription:
      'Whirlpool washer, dryer, refrigerator, dishwasher or range acting up in Temple, TX? Request a diagnostic visit and a written repair price.',
    intro: [
      'Whirlpool is one of the most common appliance brands in Temple homes and rentals, and the company also makes Maytag, KitchenAid and Amana. That matters for repair: many parts are shared across those brands, so they are easy to find and usually reasonably priced.',
      'We see Whirlpool laundry pairs, top-freezer and French door refrigerators, dishwashers and ranges every week. The technician diagnoses the problem, explains it, and gives you a price before starting.',
    ],
    appliances: [
      { key: 'washer', note: 'Top-load (including Cabrio and agitator models) and front-load' },
      { key: 'dryer', note: 'Electric and gas' },
      { key: 'refrigerator', note: 'Top-freezer, bottom-freezer, side-by-side, French door' },
      { key: 'dishwasher', note: 'Built-in models' },
      { key: 'oven', note: 'Electric and gas ranges, wall ovens' },
      { key: 'microwave', note: 'Over-the-range units' },
    ],
    issues: [
      {
        title: 'Top-load washer won’t spin or shows a lid lock code',
        text: 'Newer top-loaders lock the lid before spinning. A worn lid lock or a broken strike on the lid stops the cycle. It is a common, inexpensive repair.',
      },
      {
        title: 'Dryer runs but no heat',
        text: 'Whirlpool dryers use a thermal fuse that blows when airflow is poor. The fuse is cheap, but the vent needs checking or it will happen again.',
      },
      {
        title: 'Refrigerator ice maker stops',
        text: 'Usually a water inlet valve, a frozen fill tube or the ice maker module. All three are common replacement parts.',
      },
      {
        title: 'Dishwasher not draining',
        text: 'Most Whirlpool-built dishwashers have a removable filter under the lower spray arm. A clogged filter is the first check, then the drain pump.',
      },
    ],
    faqs: [
      {
        q: 'Do you repair Maytag and KitchenAid too?',
        a: 'Maytag, KitchenAid and Amana are Whirlpool brands and share many parts. Tell us the brand and model when you book.',
      },
      {
        q: 'Where do I find my Whirlpool model number?',
        a: 'Washers: under the lid or on the back. Dryers: inside the door frame. Refrigerators: on a label inside the fresh food section, usually on a side wall. Dishwashers: on the edge of the door or the tub frame.',
      },
      {
        q: 'Is my Whirlpool still under factory warranty?',
        a: 'Check your purchase date and the warranty card. If it is still under the manufacturer’s warranty, contact Whirlpool first, because independent repair may not be covered.',
      },
    ],
    hasPage: true,
  },
  {
    key: 'ge',
    slug: `ge-appliance-repair-${loc}`,
    name: 'GE',
    metaTitle: 'GE Appliance Repair in Temple, TX | Temple Appliance Repair',
    metaDescription:
      'GE refrigerator, range, dishwasher, washer or dryer problems in Temple, TX? Request a diagnostic visit and a written price before any repair.',
    intro: [
      'GE appliances show up in a lot of Temple kitchens, especially ranges, refrigerators and dishwashers that came with the house. GE Appliances also sells the Profile, Café and Monogram lines, which share much of the same engineering.',
      'The technician diagnoses the fault, explains what failed, and gives you a price before any work starts.',
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
    metaTitle: 'Samsung Appliance Repair in Temple, TX | Temple Appliance Repair',
    metaDescription:
      'Samsung refrigerator ice maker, washer error code or dryer not heating in Temple, TX? Request a diagnostic visit and a written price.',
    intro: [
      'Samsung refrigerators and laundry are popular in newer homes around Temple. They are feature-heavy, and they report most faults as error codes, which helps narrow down the problem quickly.',
      'The technician reads the code, confirms the failed part with testing, and gives you a price before any repair.',
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
