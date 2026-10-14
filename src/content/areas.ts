import type { Area } from './types';

/**
 * Nearby-city pages. Only towns with a real service commitment and their own
 * content get a page; the rest stay on the hub list in site.nearbyTowns.
 * ZIP lists outside Temple must be checked against USPS before launch.
 */
export const areas: Area[] = [
  {
    slug: 'belton-tx',
    name: 'Belton',
    metaTitle: 'Appliance Repair in Belton, TX | Temple Appliance Repair',
    metaDescription:
      'Appliance repair in Belton, TX for refrigerators, washers, dryers, dishwashers and ovens. Request service or call to check today’s availability.',
    h1: 'Appliance Repair in Belton, TX',
    intro: [
      'Belton is the Bell County seat and sits right next to Temple, so it is one of the shortest drives on our route. Calls here range from older homes near downtown and the University of Mary Hardin-Baylor to newer subdivisions on the west side toward Lake Belton.',
      'We handle the same work in Belton that we do in Temple: refrigerators that stop cooling, washers that will not drain, dryers with no heat, dishwashers that leave dishes dirty and ovens that will not hold temperature. The technician diagnoses the problem and gives you a price before starting.',
    ],
    travelNote:
      'Belton calls are usually scheduled on the same routes as south and west Temple, so availability tends to match Temple’s.',
    localPoints: [
      {
        heading: 'Older homes, older hookups',
        text: 'Homes in the older parts of Belton sometimes have tight laundry closets, older dryer vent runs and original shutoff valves. The technician checks the vent and water connections as part of a laundry call, because they cause a lot of repeat failures.',
      },
      {
        heading: 'Student rentals and move-outs',
        text: 'Rentals near campus see heavy appliance use and turnover. If you manage a rental, tell us who should approve the repair price and who will let the technician in.',
      },
      {
        heading: 'Lake-area homes',
        text: 'Second refrigerators and chest freezers in garages and shops near the lake work hard in summer. Clean coils and good airflow around the unit make a big difference.',
      },
    ],
    zips: ['76513'],
    faqs: [
      {
        q: 'Do you charge extra to come to Belton?',
        a: 'Ask when you call. Trip and diagnostic fees are explained before the appointment is booked.',
      },
      {
        q: 'Can you come to Belton the same day?',
        a: 'Sometimes. It depends on the day’s schedule and how early you call. We will tell you the earliest open time when you reach us.',
      },
      {
        q: 'Do you repair appliances in rental homes near UMHB?',
        a: 'Yes. Tenants and landlords both call us. We need the property manager or owner to approve the repair price if they are paying.',
      },
      {
        q: 'Which appliances do you repair in Belton?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves and over-the-range microwaves.',
      },
    ],
    featuredServices: ['washer', 'dryer', 'refrigerator', 'freezer'],
  },
  {
    slug: 'killeen-tx',
    name: 'Killeen',
    metaTitle: 'Appliance Repair in Killeen, TX | Temple Appliance Repair',
    metaDescription:
      'Appliance repair in Killeen, TX for refrigerators, washers, dryers, dishwashers and ranges. Request service online or call to check availability.',
    h1: 'Appliance Repair in Killeen, TX',
    intro: [
      'Killeen is the largest city in Bell County and the home of Fort Hood, which means a lot of households move in and out on military orders. Many of our Killeen calls come from renters, landlords and families who just moved in and found that an appliance did not survive the last tenant.',
      'The technician repairs refrigerators, washers, dryers, dishwashers and ranges across Killeen, tells you what failed, and gives you a price before starting.',
    ],
    travelNote:
      'Killeen is farther west than our Temple routes, so appointments are grouped by day. Calling early gives you a better shot at a same-week slot.',
    localPoints: [
      {
        heading: 'Move-in problems',
        text: 'Appliances that sat unused between tenants often have dried-out seals, stuck drain pumps or a refrigerator that will not restart. If you just moved in and something is off, report it to your landlord in writing first, then call.',
      },
      {
        heading: 'Landlord and property manager calls',
        text: 'We can work with the property manager directly. Have the authorization and payment details ready so the technician can start once the price is approved.',
      },
      {
        heading: 'Laundry that runs every day',
        text: 'Large households wear out dryer belts, rollers and washer suspension faster. These are inexpensive parts and usually worth fixing.',
      },
    ],
    zips: ['76541', '76542', '76543', '76549'],
    faqs: [
      {
        q: 'Do you serve all of Killeen?',
        a: 'We serve Killeen and the surrounding neighborhoods. Give us your ZIP code and we will confirm.',
      },
      {
        q: 'Do you repair appliances on post?',
        a: 'On-post housing has its own maintenance process. Contact your housing office first; their contractor usually handles appliance repair.',
      },
      {
        q: 'I am a renter. Who pays for the repair?',
        a: 'That depends on your lease. Most leases make the landlord responsible for appliances they provide. Check with your landlord before booking.',
      },
      {
        q: 'How soon can a technician get to Killeen?',
        a: 'It depends on the week. Call and we will give you the earliest open slot.',
      },
    ],
    featuredServices: ['washer', 'dryer', 'refrigerator', 'dishwasher'],
  },
  {
    slug: 'harker-heights-tx',
    name: 'Harker Heights',
    metaTitle: 'Appliance Repair in Harker Heights, TX | Temple Appliance Repair',
    metaDescription:
      'Appliance repair in Harker Heights, TX for refrigerators, washers, dryers, dishwashers and ovens. Request service or call to check availability.',
    h1: 'Appliance Repair in Harker Heights, TX',
    intro: [
      'Harker Heights sits between Killeen and Belton along I-14, with a lot of newer construction and homes near Stillhouse Hollow Lake. Many homes here have built-in French door refrigerators, front-load laundry and gas or dual-fuel ranges.',
      'We repair all of those. The technician diagnoses the fault, explains it in plain terms, and gives you a price before starting.',
    ],
    travelNote:
      'Harker Heights appointments are usually grouped with Killeen and Belton routes on the same day.',
    localPoints: [
      {
        heading: 'Newer appliances, newer problems',
        text: 'Feature-heavy refrigerators and washers report faults as codes. Write down the code before you call. It helps the technician bring the right part on the first trip.',
      },
      {
        heading: 'Front-load washer care',
        text: 'Front-loaders are common here. Wiping the door seal and leaving the door open after a load prevents most smell and mold complaints.',
      },
      {
        heading: 'Factory warranty first',
        text: 'If your appliance is less than a year old, check the manufacturer warranty before booking. Independent repair may not be covered by it.',
      },
    ],
    zips: ['76548'],
    faqs: [
      {
        q: 'Do you repair built-in refrigerators in Harker Heights?',
        a: 'Tell us the brand and model when you call so we can confirm parts and the right technician.',
      },
      {
        q: 'My new washer shows an error code. Can you help?',
        a: 'Yes. If the washer is still under factory warranty, call the manufacturer first. If not, we can diagnose it.',
      },
      {
        q: 'How do I book service in Harker Heights?',
        a: 'Call, or use the request form with your ZIP code and a short description of the problem.',
      },
    ],
    featuredServices: ['refrigerator', 'washer', 'oven', 'dishwasher'],
  },
  {
    slug: 'salado-tx',
    name: 'Salado',
    metaTitle: 'Appliance Repair in Salado, TX | Temple Appliance Repair',
    metaDescription:
      'Appliance repair in Salado, TX for refrigerators, freezers, washers, dryers, dishwashers and ranges. Call to check availability or request service.',
    h1: 'Appliance Repair in Salado, TX',
    intro: [
      'Salado is a small village south of Belton on I-35, along Salado Creek. Homes range from historic houses near Main Street to larger properties on acreage outside town. Those larger properties often have second refrigerators, chest freezers and shop appliances that get heavy use.',
      'We repair refrigerators, freezers, washers, dryers, dishwashers and ranges in and around Salado. The technician gives you a price before starting any repair.',
    ],
    travelNote:
      'Salado is at the south edge of our area, so appointments are scheduled on specific days. Call to find the next open slot.',
    localPoints: [
      {
        heading: 'Rural property appliances',
        text: 'Freezers and spare refrigerators in barns and shops face heat, dust and pests. Keeping the condenser area clean is the cheapest thing you can do for them.',
      },
      {
        heading: 'Propane appliances',
        text: 'Some homes outside town use propane for ranges and dryers. Tell us when you book, because propane appliances use different orifices and settings than natural gas.',
      },
      {
        heading: 'Older homes',
        text: 'Historic homes can have tight kitchens and older wiring. The technician will flag anything on the electrical side that should go to an electrician.',
      },
    ],
    zips: ['76571'],
    faqs: [
      {
        q: 'Do you come out to properties outside Salado?',
        a: 'Give us the address or ZIP and we will confirm whether it is in range.',
      },
      {
        q: 'Can you repair a propane range?',
        a: 'Mention propane when you book so we can confirm the technician and parts before the visit.',
      },
      {
        q: 'My chest freezer in the barn stopped. Is it worth repairing?',
        a: 'If it is a relay, thermostat or fan, usually yes. A failed compressor on an older, small chest freezer is usually not worth the cost.',
      },
    ],
    featuredServices: ['freezer', 'refrigerator', 'oven', 'dryer'],
  },
];

export const areaHref = (a: Area) => `/service-areas/${a.slug}/`;
