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
    metaTitle: 'Appliance Repair Belton TX | Next Door to Temple',
    metaDescription:
      'Appliance repair in Belton, TX for fridges, washers, dryers, dishwashers and ovens, from a team based next door in Temple. Same-day service available.',
    h1: 'Appliance Repair in Belton, TX, Right Next Door to Temple',
    intro: [
      'Need appliance repair in Belton? Appliance Repair Temple fixes refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes across Belton, TX, from the older streets north of Nolan Creek to the newer subdivisions on the edge of town. Same-day service is available, subject to technician availability, location, and current demand.',
      'Belton is the Bell County seat and sits right beside Temple, so it is one of the shortest drives on our routes. That makes Belton visits easier to fit into the day than towns farther out.',
      'The work is the same as anywhere else we go. The technician finds the part that failed, explains what the repair involves, and starts only after your OK. If an appliance is not worth fixing, you will hear that too.',
    ],
    travelNote:
      'Belton visits are usually scheduled alongside our south and west Temple routes, so availability tends to track Temple’s. Call to confirm the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Older homes north of Nolan Creek',
        text: 'Much of Belton’s older housing sits north of the Nolan Creek corridor. Tight laundry closets, long dryer vent runs and original water shutoff valves are common there. On laundry calls, the technician checks the vent and the hookups too, because they cause a lot of repeat failures.',
      },
      {
        heading: 'Newer subdivisions and newer appliances',
        text: 'Newer master-planned neighborhoods often came with French door refrigerators, front-load laundry and electronic controls that report error codes. Write the code down before you call, and check whether the manufacturer’s warranty still applies.',
      },
      {
        heading: 'Rentals near UMHB',
        text: 'Homes and apartments near the University of Mary Hardin-Baylor turn over every school year, and appliances that sit empty over the summer can come back with stuck pumps or dried-out seals. If you manage a rental, tell us who approves the repair and who will let the technician in.',
      },
      {
        heading: 'Lake homes, garages and second freezers',
        text: 'With Belton Lake and Stillhouse Hollow Lake close by, plenty of Belton homes keep a second refrigerator or chest freezer in a garage or shop. In summer heat those units run hard. Clean coils and a little space around them make a real difference.',
      },
    ],
    sections: [
      {
        heading: 'Repairs we handle',
        accent: 'in Belton homes.',
        paragraphs: [
          'Refrigerators and freezers are the most urgent calls, especially in July and August, when a weak start relay or a dusty condenser coil finally gives out. If the fridge side is warm but the freezer is cold, it is usually a fan or a defrost problem, both of which are common repairs.',
          'Laundry is the other big one. Washers that will not drain or spin usually have a clogged pump, a worn lid lock or a broken belt. Dryers that run without heat usually have a failed heating part, and a restricted vent is often the reason it failed in the first place, so we check airflow on every dryer call.',
          'Dishwashers in hard water homes collect mineral scale in the spray arms and inlet screens, which shows up as cloudy glasses and dishes that are not quite clean. Ovens and ranges round out the list: burned bake elements, weak gas igniters and temperature sensors that have drifted.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Belton.',
        paragraphs: [
          'Call or send a request with your address, the appliance, the brand and what it is doing. We confirm the details by phone and set a visit window. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Calling earlier in the day gives you a better shot at a same-day visit in Belton.',
        ],
      },
      {
        heading: 'Before the technician',
        accent: 'arrives.',
        paragraphs: [
          'Find the model number on the appliance, usually on a label inside the door, under the lid or on the frame. Write down any error code. Clear a path and, if you can, empty the washer or dishwasher. If you rent, let your landlord know first, since many leases make the landlord responsible for appliances they provide.',
        ],
      },
    ],
    zips: ['76513'],
    zipsVerified: true,
    nearby: ["Morgan's Point Resort", 'Harker Heights', 'Salado', 'Killeen', 'Nolanville'],
    faqs: [
      {
        q: 'Do you cover all of Belton?',
        a: 'Yes. We serve Belton’s 76513 ZIP code, including the older neighborhoods near downtown and Nolan Creek and the newer subdivisions around town. If you are outside city limits, give us your address and we will confirm.',
      },
      {
        q: 'Can you come to Belton the same day?',
        a: 'Often. Same-day service is available, subject to technician availability, location, and current demand. Belton is close to Temple, which helps. We will give you the earliest open time when you call.',
      },
      {
        q: 'Do you repair appliances in rentals near UMHB?',
        a: 'Yes. Tenants and landlords both call us. If the landlord or property manager is paying, we need them to approve the repair, and someone needs to let the technician in.',
      },
      {
        q: 'Do you work on garage and shop freezers around Belton Lake?',
        a: 'Yes. Garage refrigerators and chest freezers are a common call. Make sure the technician can reach the back of the unit and the outlet.',
      },
      {
        q: 'Which appliances do you repair in Belton?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'My appliance is still under warranty. Should I call you?',
        a: 'Check with the manufacturer first, since independent repair may not be covered by a factory warranty. If the warranty has expired or you are not sure, call us with the model number.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'Do you also cover towns around Belton?',
        a: 'Yes. Along with Belton and Temple, we cover Morgan’s Point Resort, Harker Heights, Nolanville, Killeen, Salado and other nearby towns. Give us your address and we will confirm.',
      },
      {
        q: 'How much does appliance repair in Belton cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['washer', 'dryer', 'refrigerator', 'freezer'],
  },
  {
    slug: 'killeen-tx',
    name: 'Killeen',
    metaTitle: 'Appliance Repair in Killeen, TX | Appliance Repair Temple',
    metaDescription:
      'Appliance repair in Killeen, TX for refrigerators, washers, dryers, dishwashers and ranges. Request service online or call to check availability.',
    h1: 'Appliance Repair in Killeen, TX',
    intro: [
      'Killeen is the largest city in Bell County and the home of Fort Hood, which means a lot of households move in and out on military orders. Many of our Killeen calls come from renters, landlords and families who just moved in and found that an appliance did not survive the last tenant.',
      'The technician repairs refrigerators, washers, dryers, dishwashers and ranges across Killeen, tells you what failed, and gets your OK before starting.',
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
        text: 'We can work with the property manager directly. Have the authorization and payment details ready so the technician can start once the repair is approved.',
      },
      {
        heading: 'Laundry that runs every day',
        text: 'Large households wear out dryer belts, rollers and washer suspension faster. These are common parts and usually worth fixing.',
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
    metaTitle: 'Appliance Repair in Harker Heights, TX | Appliance Repair Temple',
    metaDescription:
      'Appliance repair in Harker Heights, TX for refrigerators, washers, dryers, dishwashers and ovens. Request service or call to check availability.',
    h1: 'Appliance Repair in Harker Heights, TX',
    intro: [
      'Harker Heights sits between Killeen and Belton along I-14, with a lot of newer construction and homes near Stillhouse Hollow Lake. Many homes here have built-in French door refrigerators, front-load laundry and gas or dual-fuel ranges.',
      'We repair all of those. The technician diagnoses the fault, explains it in plain terms, and gets your OK before starting.',
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
    metaTitle: 'Appliance Repair in Salado, TX | Appliance Repair Temple',
    metaDescription:
      'Appliance repair in Salado, TX for refrigerators, freezers, washers, dryers, dishwashers and ranges. Call to check availability or request service.',
    h1: 'Appliance Repair in Salado, TX',
    intro: [
      'Salado is a small village south of Belton on I-35, along Salado Creek. Homes range from historic houses near Main Street to larger properties on acreage outside town. Those larger properties often have second refrigerators, chest freezers and shop appliances that get heavy use.',
      'We repair refrigerators, freezers, washers, dryers, dishwashers and ranges in and around Salado. The technician explains the repair and gets your OK before starting.',
    ],
    travelNote:
      'Salado is at the south edge of our area, so appointments are scheduled on specific days. Call to find the next open slot.',
    localPoints: [
      {
        heading: 'Rural property appliances',
        text: 'Freezers and spare refrigerators in barns and shops face heat, dust and pests. Keeping the condenser area clean is the simplest thing you can do for them.',
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
        a: 'If it is a relay, thermostat or fan, usually yes. A failed compressor on an older, small chest freezer is usually not worth repairing.',
      },
    ],
    featuredServices: ['freezer', 'refrigerator', 'oven', 'dryer'],
  },
];

export const areaHref = (a: Area) => `/service-areas/${a.slug}/`;
