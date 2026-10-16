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
    metaTitle: 'Appliance Repair Belton TX | Same-Day & Emergency',
    metaDescription:
      'Same-day and emergency appliance repair in Belton, TX for fridges, washers, dryers, dishwashers and ovens, from next door in Temple. Subject to availability.',
    h1: 'Appliance Repair in Belton, TX, Right Next Door to Temple',
    intro: [
      'Need appliance repair in Belton? Appliance Repair Temple fixes refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes across Belton, TX, from the older streets north of Nolan Creek to the newer subdivisions on the edge of town. Same-day service is available, subject to technician availability, location, and current demand.',
      'Belton is the Bell County seat and sits right beside Temple, so it is one of the shortest drives on our routes. That makes Belton visits easier to fit into the day than towns farther out.',
      'The work is the same as anywhere else we go. The technician finds the part that failed, explains what the repair involves, and starts only after your OK. If an appliance is not worth fixing, you will hear that too.',
      'That covers refrigerator repair and freezer repair, washer and dryer repair, dishwasher repair, oven, stove and range repair, and over-the-range microwave repair in Belton, across the major brands. Urgent problems, such as a fridge warming up or a washer leaking across the floor, get priority as emergency appliance repair during business hours.',
    ],
    emergencyNote:
      'A refrigerator warming up with groceries inside, a washer leaking toward the carpet or a dryer that smells hot cannot wait, and Belton is one of the shortest drives from Temple. Urgent calls from Belton homes get priority scheduling during business hours.',
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
        heading: 'Appliance problems in Belton,',
        accent: 'season by season.',
        paragraphs: [
          'Summer is refrigerator and freezer season. Long stretches of heat push kitchen fridges and garage freezers hard, and a weak start relay, a dusty condenser coil or a tired fan motor tends to fail in July and August. If the fridge feels warm and never seems to stop running, call before the food is lost.',
          'Spring and early summer bring storms. A storm that knocks the power out can leave a freezer on a tripped garage outlet, or damage a start relay or control board when the power comes back. After an outage, check that every refrigerator and freezer actually restarted.',
          'Fall and the holidays are oven and dryer season. Ovens that sat quiet all summer get a workout, and self-clean cycles before Thanksgiving are a common time for door locks and temperature sensors to fail. Dryers run more loads as the weather cools, which shows up any lint buildup in the vent.',
          'Winter freezes are rarer, but a hard one can crack a washer fill hose or an ice maker line in an unheated laundry room or garage. If a line froze, check for leaks once it thaws.',
        ],
      },
      {
        heading: 'Landlords, tenants and',
        accent: 'property managers.',
        paragraphs: [
          'Belton has plenty of rentals, from homes near downtown to houses and apartments around the University of Mary Hardin-Baylor. When a rental appliance fails, the lease usually decides who arranges the repair. Tenants should tell the landlord or property manager first.',
          'Landlords and property managers can call us directly. Tell us the address, who approves the repair and who will let the technician in. You hear what failed and what the repair involves before any work starts, so the approval happens before the work.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Belton.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
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
        q: 'Do you offer emergency appliance repair in Belton?',
        a: 'Yes. A refrigerator or freezer warming up with food inside, a washer or dishwasher leaking, or an appliance that smells like burning gets priority scheduling during business hours, Monday to Saturday, 8:00 AM to 8:00 PM. Same-day emergency service is subject to technician availability, location, and current demand. Ask about emergency visit details when you call.',
      },
      {
        q: 'Can you repair my refrigerator in Belton today?',
        a: 'Often. Refrigerator repair calls get priority because the food inside is at risk, and Belton is close to Temple. Same-day service is subject to technician availability, location, and current demand. Keep the doors closed while you wait.',
      },
      {
        q: 'Do you do washer and dryer repair in Belton?',
        a: 'Yes. Washers that will not drain, spin or stop leaking, and dryers that will not heat or take too long, are among our most common Belton calls. On every dryer call, the technician checks the vent airflow too.',
      },
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
    metaTitle: 'Appliance Repair Killeen TX | Homes & Rentals',
    metaDescription:
      'In-home appliance repair in Killeen, TX for refrigerators, washers, dryers, dishwashers and ovens. Help for renters, landlords and families on PCS moves.',
    h1: 'Appliance Repair in Killeen, TX for Homes and Rentals',
    intro: [
      'Appliance Repair Temple fixes refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes across Killeen, TX, from the older additions on the north side to the newer neighborhoods south of I-14. The technician finds what failed, explains the repair, and starts only after you approve it.',
      'Killeen is the largest city in Bell County and sits right outside Fort Hood, so a lot of households here arrive and leave on military orders. Many of our Killeen calls come from renters, landlords, property managers and families who just moved in and found an appliance that did not make it through the last move.',
      'Killeen is farther from our Temple base than Belton or Harker Heights, so visits are planned around our west routes. Same-day service is available, subject to technician availability, location, and current demand.',
    ],
    travelNote:
      'Killeen visits are grouped with our west routes along the I-14 and US 190 corridor. Call early in the day and we will give you the earliest open time for your address.',
    localPoints: [
      {
        heading: 'PCS moves and move-in surprises',
        text: 'Appliances that sit empty between tenants or get unplugged for a move often come back with stuck drain pumps, dried-out door seals or a refrigerator that will not cool after it is restarted. If you just moved in, give a fridge a full day to settle before you call, and report any problem to your landlord in writing.',
      },
      {
        heading: 'Landlords and property managers',
        text: 'Killeen has a large rental market, and we work with owners and managers as well as tenants. Tell us who approves the repair, who handles payment and who will let the technician in. That keeps the visit from stalling at the door.',
      },
      {
        heading: 'Older additions on the north side',
        text: 'Homes in north and northwest Killeen tend to be older. Laundry closets can be tight, dryer vent runs long, and shutoff valves original to the house. On laundry calls the technician checks the vent and the water hookups too, since they cause a lot of repeat failures.',
      },
      {
        heading: 'Newer homes south of I-14',
        text: 'The area south of I-14 between Stan Schlueter Loop and Chaparral Road holds much of Killeen’s newest building. Those homes often came with French door refrigerators, front-load laundry and electronic controls that show error codes. Write the code down and check the factory warranty before you call.',
      },
    ],
    sections: [
      {
        heading: 'What we fix',
        accent: 'in Killeen homes.',
        paragraphs: [
          'Refrigerators and freezers come first in summer. A dusty condenser coil, a failed fan motor or a defrost problem can turn a working fridge warm in a day. If the freezer is cold but the fresh food side is warm, that pattern usually points to airflow or defrost, both common repairs.',
          'Laundry is close behind. Busy households wear out dryer belts, rollers and heating parts faster, and washers that will not drain usually have a clogged pump or a worn lid lock. We check airflow on every dryer call, because a restricted vent is often why the heating part failed.',
          'Dishwashers that leave dishes dirty or water in the tub often have a blocked filter, a worn pump or scale in the spray arms. Ovens and ranges round out the list with burned bake elements, weak igniters and temperature sensors that have drifted.',
        ],
      },
      {
        heading: 'Renting in Killeen?',
        accent: 'Check this first.',
        paragraphs: [
          'Many leases put landlord-supplied appliances on the landlord. Before you book a repair yourself, read your lease and contact your landlord or property manager. If they ask you to arrange the visit, let us know who is approving the work so we can confirm it before the technician starts.',
          'If you live in on-post housing at Fort Hood, appliance problems go through your housing office and its maintenance contractor, not an outside repair company. Off-post homes and rentals in Killeen are the ones we serve.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Killeen.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Because Killeen sits at the west end of our routes, an early call gives you a better shot at a same-day visit.',
          'Before the visit, find the model number, usually on a label inside the door, under the lid or on the frame, and note any error code. Clear a path to the appliance and, if you can, empty the washer or dishwasher.',
        ],
      },
    ],
    zips: ['76541', '76542', '76543', '76549'],
    zipsVerified: true,
    nearby: ['Harker Heights', 'Nolanville', 'Belton', "Morgan's Point Resort", 'Salado'],
    faqs: [
      {
        q: 'Which parts of Killeen do you cover?',
        a: 'We serve homes in Killeen’s 76541, 76542, 76543 and 76549 ZIP codes. If your address is on the edge of town or outside city limits, give it to us and we will confirm.',
      },
      {
        q: 'Can you come to Killeen the same day?',
        a: 'Sometimes. Same-day service is available, subject to technician availability, location, and current demand. Killeen is at the west end of our routes, so calling early helps.',
      },
      {
        q: 'Do you repair appliances in on-post housing at Fort Hood?',
        a: 'No. On-post housing has its own maintenance process. Contact your housing office, since its contractor handles appliance repair there. We serve off-post homes and rentals in Killeen.',
      },
      {
        q: 'I rent my home. Who pays for the repair?',
        a: 'That depends on your lease. Most leases make the landlord responsible for appliances they provide. Check with your landlord or property manager before booking.',
      },
      {
        q: 'Can my property manager schedule the repair?',
        a: 'Yes. We can work with the manager directly. We need to know who approves the repair and who will let the technician in.',
      },
      {
        q: 'My fridge stopped cooling after we moved. Is it broken?',
        a: 'Not always. A refrigerator that was moved or unplugged can take up to a day to reach temperature. If it is still warm after that, or it runs nonstop, call us.',
      },
      {
        q: 'Which appliances do you repair in Killeen?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'How much does appliance repair in Killeen cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['refrigerator', 'washer', 'dryer', 'dishwasher'],
  },
  {
    slug: 'harker-heights-tx',
    name: 'Harker Heights',
    metaTitle: 'Appliance Repair Harker Heights TX | Same-Day Help',
    metaDescription:
      'Appliance repair in Harker Heights, TX for refrigerators, washers, dryers, dishwashers and ranges, including newer models with error codes. Call to book.',
    h1: 'Appliance Repair in Harker Heights, TX, Between Killeen and Belton',
    intro: [
      'Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes across Harker Heights, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Harker Heights roughly doubled in size between 2000 and 2020, so a large share of its homes, and the appliances in them, are fairly new. That changes the kind of calls we get here. Fewer worn-out machines, more electronic controls, error codes, sensors and questions about whether a factory warranty still applies.',
      'Older or newer, the visit works the same way. The technician tests the appliance, tells you which part failed and what the repair involves, and waits for your OK before starting. If a repair is not worth the money on your model, you will hear that too.',
    ],
    travelNote:
      'Harker Heights sits between Killeen and Belton along I-14, so visits are usually grouped with those routes on the same day. Call to confirm the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Newer homes, newer appliances',
        text: 'Many Harker Heights homes came with French door refrigerators, front-load laundry pairs and ranges with touch controls. These report problems as error codes. Write the code down, along with the model number, before you call. It helps the technician come prepared.',
      },
      {
        heading: 'Warranty check first',
        text: 'If your appliance is less than a year old, or you bought an extended plan, check that coverage before you book. Independent repair may not be covered by a factory warranty. If the warranty has run out or you are not sure, call us with the model number.',
      },
      {
        heading: 'Larger homes toward the lake',
        text: 'Homes on the south side, toward Stillhouse Hollow Lake and Dana Peak Park, tend to be larger, often with a second refrigerator or a freezer in the garage. A garage unit works harder in summer heat, so clean coils and room to breathe matter more there.',
      },
      {
        heading: 'Rentals and military moves',
        text: 'Being close to Fort Hood, Harker Heights also has plenty of rentals and families on PCS moves. If you rent, check your lease and talk to your landlord before booking, since many leases make the landlord responsible for the appliances they supply.',
      },
    ],
    sections: [
      {
        heading: 'Error codes',
        accent: 'and what to do with them.',
        paragraphs: [
          'An error code points to the system that tripped, not always to the part that failed. A drain code on a front-load washer can mean a clogged pump filter, a kinked hose or a failed pump. A code on a refrigerator display can come from a sensor, a fan or a defrost problem.',
          'Before you call, try the simple steps in your owner’s manual, like clearing the washer’s pump filter or switching the appliance off at the breaker for a minute. If the code comes back, stop resetting it and book a visit. Repeated resets can hide a fault that keeps getting worse.',
        ],
      },
      {
        heading: 'Repairs we handle',
        accent: 'in Harker Heights.',
        paragraphs: [
          'Refrigerator calls lead in summer: warm fresh food sections, frost on the back wall of the freezer, ice makers that stop and water dispensers that leak. Fan motors, defrost parts and water valves are frequent fixes.',
          'Front-load washers bring drain errors, door locks that will not release and musty smells from the door seal. Dryers that run without heat or take two cycles to dry often have a failed heating part or a restricted vent, so we check the airflow on every dryer call.',
          'Dishwashers that leave a film on glasses or water in the tub, and ranges with a dead bake element, a weak igniter or a touch panel that stopped responding, round out the list.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Harker Heights.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Calling earlier in the day gives you a better shot at a same-day visit.',
          'Before the visit, find the model number on the appliance, usually on a label inside the door, under the lid or on the frame. Clear a path to the appliance and, if you can, empty the washer or dishwasher.',
        ],
      },
    ],
    zips: ['76548'],
    zipsVerified: true,
    nearby: ['Killeen', 'Nolanville', 'Belton', "Morgan's Point Resort", 'Salado'],
    faqs: [
      {
        q: 'Do you cover all of Harker Heights?',
        a: 'Yes. We serve the 76548 ZIP code, from the neighborhoods along I-14 to the homes on the south side toward Stillhouse Hollow Lake. Some nearby addresses carry a Killeen or Belton mailing city, so give us your address and we will confirm.',
      },
      {
        q: 'Can you come to Harker Heights the same day?',
        a: 'Often. Same-day service is available, subject to technician availability, location, and current demand. We will give you the earliest open time when you call.',
      },
      {
        q: 'My new washer shows an error code. Can you help?',
        a: 'Yes. If the washer is still under factory warranty, contact the manufacturer first. If not, write down the code and the model number and call us.',
      },
      {
        q: 'Do you work on French door and side-by-side refrigerators?',
        a: 'Yes. Tell us the brand and model when you call so we can check parts before the visit.',
      },
      {
        q: 'Do you repair appliances in rental homes?',
        a: 'Yes. Tenants and landlords both call us. If the landlord or property manager is paying, we need them to approve the repair, and someone needs to let the technician in.',
      },
      {
        q: 'Which appliances do you repair in Harker Heights?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'How much does appliance repair in Harker Heights cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['refrigerator', 'washer', 'dryer', 'dishwasher'],
  },
  {
    slug: 'salado-tx',
    name: 'Salado',
    metaTitle: 'Appliance Repair Salado TX | Village & Rural Homes',
    metaDescription:
      'Appliance repair in Salado, TX and the 76571 area for refrigerators, freezers, washers, dryers, dishwashers and ranges, in town or out on acreage. Call us.',
    h1: 'Appliance Repair in Salado, TX, for Village Homes and Acreage',
    intro: [
      'Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in Salado, TX and the countryside around it. Same-day service is available, subject to technician availability, location, and current demand.',
      'Salado itself is small, with about 2,400 residents at the 2020 census, but the 76571 ZIP code covers roughly 125 square miles. Many of the calls we get from Salado come from homes on acreage outside the village, not from the streets near Main Street.',
      'That shapes what we see. More chest freezers and second refrigerators in garages, shops and barns, longer drives between stops, and appliances that work hard through a Central Texas summer. The visit itself is the same anywhere: the technician finds what failed, explains the repair, and starts only after your OK.',
    ],
    travelNote:
      'Salado is at the south end of our area, south of Belton along I-35, so visits are planned around our south routes. Call early and we will give you the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Freezers and fridges in barns and shops',
        text: 'Spare refrigerators and chest freezers out in a barn or shop deal with heat, dust and the occasional mouse nest in the condenser area. Keep a few inches of clearance around the unit, vacuum the coils a couple of times a year and keep the floor around it clear.',
      },
      {
        heading: 'Historic homes in the village',
        text: 'Salado has nineteen sites on the National Register of Historic Places, and some of the older homes near the village center have tight kitchens and older wiring. If the technician sees anything electrical that should go to an electrician, you will be told plainly.',
      },
      {
        heading: 'Long driveways and gates',
        text: 'For homes on acreage, tell us about gates, gate codes, dogs and where to park when you book. If the appliance is in an outbuilding, let us know which one. It saves time on arrival.',
      },
      {
        heading: 'Power blips and surges',
        text: 'Rural power lines see more outages and flickers during storms. If an appliance stopped after the power went out, check the breaker and any GFCI outlet first, then unplug it for a minute and plug it back in before you call.',
      },
    ],
    sections: [
      {
        heading: 'Is that barn freezer',
        accent: 'worth fixing?',
        paragraphs: [
          'Often, yes. Many freezer failures come down to a start relay, a thermostat or a fan motor, and those are reasonable repairs. If the freezer hums, clicks and shuts off every few minutes, that pattern often points to the start relay or the compressor.',
          'A failed compressor on an older, small chest freezer is usually a different story, and the technician will tell you when a repair costs too much relative to the unit. While you wait, keep the lid closed. A full chest freezer holds its temperature longer than a half-empty one.',
        ],
      },
      {
        heading: 'Repairs we handle',
        accent: 'around Salado.',
        paragraphs: [
          'Refrigerators that run but do not cool, frost on the freezer wall, ice makers that quit and water leaking under the crisper drawers are the most common kitchen calls. Fan motors, defrost parts and water valves are frequent fixes.',
          'Washers that will not drain or spin and dryers that run without heat come next. On every dryer call we check the vent, since a long or crushed vent run is one of the most common reasons a dryer stops heating.',
          'Dishwashers that leave a film or do not drain, and ovens with a burned bake element or a temperature that has drifted, round out the list.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Salado.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Salado is one of our longer drives, so calling earlier in the day gives you a better shot at a same-day visit.',
          'Before the visit, find the model number, usually on a label inside the door, under the lid or on the frame, and write down any error code.',
        ],
      },
    ],
    zips: ['76571'],
    zipsVerified: true,
    nearby: ['Belton', "Morgan's Point Resort", 'Harker Heights', 'Killeen', 'Nolanville'],
    faqs: [
      {
        q: 'Do you come out to properties outside the village?',
        a: 'Yes. We serve the 76571 ZIP code, which reaches well beyond the village itself. Give us your address and we will confirm.',
      },
      {
        q: 'Can you come to Salado the same day?',
        a: 'Sometimes. Same-day service is available, subject to technician availability, location, and current demand. Salado is at the south end of our routes, so calling early helps.',
      },
      {
        q: 'My chest freezer in the barn stopped. Is it worth repairing?',
        a: 'If it is a relay, thermostat or fan, usually yes. A failed compressor on an older, small chest freezer is usually not worth repairing. The technician will tell you which it is.',
      },
      {
        q: 'Do you repair propane ranges and dryers?',
        a: 'Yes. Tell us the appliance runs on propane when you book, since propane appliances use different settings and parts than natural gas, and the technician will come prepared.',
      },
      {
        q: 'My appliance stopped after a storm. What should I check?',
        a: 'Check the breaker and any GFCI outlet, then unplug the appliance for a minute and plug it back in. If it still does not work, call us.',
      },
      {
        q: 'Which appliances do you repair in Salado?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'How much does appliance repair in Salado cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['freezer', 'refrigerator', 'washer', 'dryer'],
  },
  {
    slug: 'nolanville-tx',
    name: 'Nolanville',
    metaTitle: 'Appliance Repair Nolanville TX | New & Older Homes',
    metaDescription:
      'Appliance repair in Nolanville, TX for refrigerators, washers, dryers, dishwashers and ovens, including first-year problems in newly built homes. Call us.',
    h1: 'Appliance Repair in Nolanville, TX, for Growing Neighborhoods',
    intro: [
      'Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes across Nolanville, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Nolanville has grown fast. It was incorporated in 1961 with about 200 residents and counted 5,917 at the 2020 census, and new subdivisions are still going up on the east side near I-14. That mix gives us two kinds of calls: older appliances in established homes, and brand-new appliances that were not hooked up quite right.',
      'Either way, the visit works the same. The technician tests the appliance, tells you what failed and what the repair involves, and starts only after your OK. If the problem turns out to be an installation issue rather than a broken part, you will hear that too.',
    ],
    travelNote:
      'Nolanville sits on I-14 between Belton and Harker Heights, so visits are usually grouped with those routes. Call to confirm the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Newer subdivisions on the east side',
        text: 'Much of Nolanville’s newest building sits along the east side near I-14, with homes built from the 2010s on. Those kitchens and laundry rooms often have the appliance package that came with the house, and the first year or two is when installation problems tend to show.',
      },
      {
        heading: 'Established homes in town',
        text: 'Older homes closer to the center of town often have appliances well past their first decade. Worn belts, tired door gaskets, failing start relays and clogged dryer vents are the usual repairs here, and most are worth doing.',
      },
      {
        heading: 'Military families and rentals',
        text: 'Nolanville is a short drive from Fort Hood, and many homes here are rented or change hands on military orders. If you rent, check your lease and talk to your landlord before booking, since many leases make the landlord responsible for the appliances they supply.',
      },
      {
        heading: 'Laundry rooms that get daily use',
        text: 'Families with kids run the washer and dryer every day. That wears out dryer rollers, belts and washer suspension parts faster. A thumping, squealing or walking machine is worth a call before a small problem damages something bigger.',
      },
    ],
    sections: [
      {
        heading: 'New home,',
        accent: 'new appliance problems.',
        paragraphs: [
          'Some of the most common calls from newly built homes are not broken parts at all. A dishwasher drain hose without a high loop can let dirty water flow back into the tub. A refrigerator water line pinched behind the unit can stop the ice maker. A washer that was never leveled will shake and walk across the floor on the spin cycle.',
          'Before you book, check your paperwork. In many new homes, appliance coverage comes from the manufacturer’s warranty, not the builder’s. If the appliance is still covered, contact the manufacturer first, since independent repair may not be covered. If coverage has run out, or the problem is in the hookup rather than the appliance, call us.',
        ],
      },
      {
        heading: 'Repairs we handle',
        accent: 'in Nolanville.',
        paragraphs: [
          'Refrigerators that run warm, freezers that frost up and ice makers that quit come first in summer. Fan motors, defrost parts and water valves are frequent fixes.',
          'Washers that will not drain or spin and dryers that run without heat are close behind. On every dryer call we check the vent, because a crushed or clogged vent is one of the most common reasons a dryer stops heating.',
          'Dishwashers that leave dishes dirty or water in the tub, and ovens with a burned bake element, a weak igniter or a temperature that has drifted, round out the list.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Nolanville.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Calling earlier in the day gives you a better shot at a same-day visit.',
          'Before the visit, find the model number, usually on a label inside the door, under the lid or on the frame, and write down any error code. Clear a path to the appliance and, if you can, empty the washer or dishwasher.',
        ],
      },
    ],
    zips: ['76559'],
    zipsVerified: true,
    nearby: ['Harker Heights', 'Belton', 'Killeen', "Morgan's Point Resort", 'Salado'],
    faqs: [
      {
        q: 'Do you cover all of Nolanville?',
        a: 'Yes. We serve Nolanville’s 76559 ZIP code, from the older streets in town to the newer subdivisions near I-14. If you are outside city limits, give us your address and we will confirm.',
      },
      {
        q: 'Can you come to Nolanville the same day?',
        a: 'Often. Same-day service is available, subject to technician availability, location, and current demand. We will give you the earliest open time when you call.',
      },
      {
        q: 'My new home’s dishwasher smells and leaves water behind. Is it broken?',
        a: 'Not always. Check the filter at the bottom of the tub first. If the drain hose was installed without a high loop, dirty water can flow back in. The technician can check the hookup as well as the dishwasher.',
      },
      {
        q: 'My appliance is still under warranty. Should I call you?',
        a: 'Contact the manufacturer first, since independent repair may not be covered by a factory warranty. If the warranty has expired or you are not sure, call us with the model number.',
      },
      {
        q: 'Do you repair appliances in rental homes?',
        a: 'Yes. Tenants and landlords both call us. If the landlord or property manager is paying, we need them to approve the repair, and someone needs to let the technician in.',
      },
      {
        q: 'Which appliances do you repair in Nolanville?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'How much does appliance repair in Nolanville cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['dishwasher', 'refrigerator', 'washer', 'dryer'],
  },
  {
    slug: 'morgans-point-resort-tx',
    name: "Morgan's Point Resort",
    metaTitle: "Appliance Repair Morgan's Point Resort TX | Lake Homes",
    metaDescription:
      "Appliance repair in Morgan's Point Resort, TX for refrigerators, freezers, washers, dryers, dishwashers and ovens in homes along Belton Lake. Call to book.",
    h1: "Appliance Repair in Morgan's Point Resort, TX, on Belton Lake",
    intro: [
      "Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes across Morgan's Point Resort, TX. Same-day service is available, subject to technician availability, location, and current demand.",
      "Morgan's Point Resort is a lakeside city of about 4,600 people on the east shore of Belton Lake, north of Belton and west of Temple. Homes here range from older lake houses to newer builds, plus manufactured homes, and many have a garage or shop that holds a second refrigerator or a chest freezer.",
      'Whatever the house looks like, the visit works the same way. The technician tests the appliance, tells you what failed and what the repair involves, and starts only after your OK. If a repair does not make sense for an older unit, you will hear that too.',
    ],
    travelNote:
      "Morgan's Point Resort shares the 76513 ZIP code with Belton, and visits are usually grouped with our Belton and west Temple routes. Call to confirm the earliest open time for your address.",
    localPoints: [
      {
        heading: 'Same ZIP as Belton',
        text: "Many addresses here use 76513 and some show Belton as the mailing city. When you book, tell us the street and that you are in Morgan's Point Resort. It helps the technician plan the route and find your home on the first try.",
      },
      {
        heading: 'Garage fridges and lake freezers',
        text: 'Lake living tends to mean a second refrigerator for drinks and a chest freezer for fish and game, often in a garage that runs hot in summer. Keep the coils clean, leave a few inches of space around the unit and avoid stacking boxes on top of a chest freezer.',
      },
      {
        heading: 'Older lake houses',
        text: 'Some homes near the water date back decades, with small kitchens, original hookups and long dryer vent runs. On laundry calls the technician checks the vent and the water connections too, because they cause many repeat failures.',
      },
      {
        heading: 'Manufactured homes',
        text: 'Manufactured homes often have apartment-size ranges, compact refrigerators and tight laundry closets with little room behind the machines. Let us know the layout when you book so the technician can plan for the space.',
      },
    ],
    sections: [
      {
        heading: 'Before you call',
        accent: 'try these first.',
        paragraphs: [
          'Power can flicker during storms. If an appliance stopped right after the power blinked, check the breaker and any GFCI outlet in the garage or kitchen first. Then unplug the appliance for a minute and plug it back in.',
          'If a garage refrigerator is not cooling, look at where it sits. In a closed garage in July, many standard refrigerators struggle. Pull it a few inches from the wall and check that the condenser fan is running. If it still runs warm, or it clicks on and off every few minutes, book a visit.',
        ],
      },
      {
        heading: 'Repairs we handle',
        accent: "in Morgan's Point Resort.",
        paragraphs: [
          'Refrigerators and freezers lead the list in summer: warm fresh food sections, frost on the freezer wall, ice makers that stop and chest freezers that will not start. Start relays, fan motors and defrost parts are frequent fixes.',
          'Washers that will not drain or spin and dryers that run without heat come next. On every dryer call we check the vent, since a long or clogged vent is one of the most common reasons a dryer stops heating.',
          'Dishwashers that leave dishes dirty or water in the tub, and ovens with a burned bake element or a temperature that has drifted, round out the list.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: "for Morgan's Point.",
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Calling earlier in the day gives you a better shot at a same-day visit.',
          'Before the visit, find the model number, usually on a label inside the door, under the lid or on the frame, and write down any error code. If the appliance is in a garage or shop, make sure the technician can reach it and the outlet behind it.',
        ],
      },
    ],
    zips: ['76513'],
    zipsVerified: true,
    nearby: ['Belton', 'Harker Heights', 'Nolanville', 'Salado', 'Killeen'],
    faqs: [
      {
        q: "Do you cover all of Morgan's Point Resort?",
        a: "Yes. We serve homes throughout Morgan's Point Resort, which shares the 76513 ZIP code with Belton. Give us your street address and we will confirm.",
      },
      {
        q: "Can you come to Morgan's Point Resort the same day?",
        a: 'Often. Same-day service is available, subject to technician availability, location, and current demand. We will give you the earliest open time when you call.',
      },
      {
        q: 'Do you repair garage refrigerators and chest freezers?',
        a: 'Yes. They are one of our most common calls around the lake. Make sure the technician can reach the back of the unit and the outlet.',
      },
      {
        q: 'Do you work on appliances in manufactured homes?',
        a: 'Yes. Tell us the brand, the model and how much space there is around the appliance so the technician can plan the visit.',
      },
      {
        q: 'Is an old chest freezer worth repairing?',
        a: 'If it is a relay, thermostat or fan, usually yes. A failed compressor on an older, small chest freezer is usually not worth repairing. The technician will tell you which it is.',
      },
      {
        q: "Which appliances do you repair in Morgan's Point Resort?",
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: "How much does appliance repair in Morgan's Point Resort cost?",
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['freezer', 'refrigerator', 'washer', 'dryer'],
  },
  {
    slug: 'troy-tx',
    name: 'Troy',
    metaTitle: 'Appliance Repair Troy TX | 8 Miles North of Temple',
    metaDescription:
      'Appliance repair in Troy, TX for refrigerators, freezers, washers, dryers, dishwashers and ovens, in town and on rural roads in the 76579 area. Call us.',
    h1: 'Appliance Repair in Troy, TX, Just Up I-35 from Temple',
    intro: [
      'Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes in and around Troy, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Troy sits beside I-35 about 8 miles north of Temple, which makes it one of the shorter drives on our routes. The town has been growing quickly. It counted 1,645 residents in 2010 and 2,375 in 2020, and the 76579 ZIP code reaches well past city limits into the farm and ranch country around it, even crossing into Falls County.',
      'So a Troy call might be a newer home in a fresh subdivision or an older farmhouse a few miles down a county road. The visit works the same either way. The technician tests the appliance, tells you what failed and what the repair involves, and starts only after your OK.',
    ],
    travelNote:
      'Troy visits are usually grouped with our north Temple routes along I-35. Call to confirm the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Newer homes in town',
        text: 'With the population growing, Troy has added newer houses with the appliance package that came with the build. If an appliance is less than a year or two old, check the manufacturer’s warranty before you book, since independent repair may not be covered.',
      },
      {
        heading: 'Farm and ranch properties',
        text: 'Homes outside town often have a long driveway, a gate and a shop or barn with a spare refrigerator or a chest freezer. Tell us about gates, dogs and where the appliance is when you book. It saves time when the technician arrives.',
      },
      {
        heading: 'Older farmhouses',
        text: 'Older homes can have small kitchens, original water shutoffs and long dryer vent runs. On laundry calls the technician checks the vent and the hookups as well, because they cause many repeat failures.',
      },
      {
        heading: 'Heavy-use laundry',
        text: 'Work clothes, mud and dust are hard on a washer and dryer. Shake off dirt before a load, clean the lint screen every time and do not overload the drum. Those habits keep belts, pumps and bearings going longer.',
      },
    ],
    sections: [
      {
        heading: 'Repair or replace?',
        accent: 'How to decide.',
        paragraphs: [
          'Start with age. Most refrigerators, washers, dryers and ranges are built to last around 10 to 15 years, and dishwashers a little less. A failed part on a five-year-old appliance is almost always worth fixing. On an appliance near the end of that range, it depends on what failed.',
          'Small parts like a belt, a relay, a fan motor, a door switch or a heating element are usually reasonable repairs at any age. A failed sealed system on an old refrigerator or a cracked tub on an old washer usually is not. A common rule of thumb: if the repair would cost more than half of what a comparable new appliance costs, replacement deserves a serious look.',
          'The technician will tell you plainly which side of that line your appliance is on. You make the call.',
        ],
      },
      {
        heading: 'Repairs we handle',
        accent: 'in and around Troy.',
        paragraphs: [
          'Refrigerators that run but do not cool, frost on the freezer wall and ice makers that quit are the most common kitchen calls. Fan motors, defrost parts and water valves are frequent fixes. Chest freezers that hum and click off often have a bad start relay.',
          'Washers that will not drain or spin and dryers that run without heat come next. On every dryer call we check the vent, since a long or clogged vent is one of the most common reasons a dryer stops heating.',
          'Dishwashers that leave dishes dirty or water in the tub, and ovens with a burned bake element or a temperature that has drifted, round out the list.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Troy.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Calling earlier in the day gives you a better shot at a same-day visit.',
          'Before the visit, find the model number, usually on a label inside the door, under the lid or on the frame, and write down any error code. If the appliance is in a shop or barn, make sure the technician can reach it and the outlet behind it.',
        ],
      },
    ],
    zips: ['76579'],
    zipsVerified: true,
    nearby: ['Moody', 'Holland', 'Little River-Academy', 'Belton', "Morgan's Point Resort"],
    faqs: [
      {
        q: 'Do you cover homes outside Troy city limits?',
        a: 'Yes, across the 76579 ZIP code, which includes rural roads around town. Give us your address and we will confirm.',
      },
      {
        q: 'Can you come to Troy the same day?',
        a: 'Often. Troy is a short drive from Temple. Same-day service is available, subject to technician availability, location, and current demand.',
      },
      {
        q: 'Is my 12-year-old refrigerator worth fixing?',
        a: 'It depends on what failed. A fan, relay or defrost part is usually worth it. A sealed system failure on an older refrigerator usually is not. The technician will explain the options.',
      },
      {
        q: 'Do you repair freezers and fridges in shops and barns?',
        a: 'Yes. Make sure the technician can reach the back of the unit and the outlet, and let us know about any gates.',
      },
      {
        q: 'My appliance is still under warranty. Should I call you?',
        a: 'Contact the manufacturer first, since independent repair may not be covered by a factory warranty. If the warranty has expired or you are not sure, call us with the model number.',
      },
      {
        q: 'Which appliances do you repair in Troy?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'How much does appliance repair in Troy cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['refrigerator', 'washer', 'dryer', 'freezer'],
  },
  {
    slug: 'little-river-academy-tx',
    name: 'Little River-Academy',
    metaTitle: 'Appliance Repair Little River-Academy TX | Near Temple',
    metaDescription:
      'Appliance repair in Little River-Academy, TX for refrigerators, freezers, washers, dryers, dishwashers and ovens, in town and out on Highway 95. Call us.',
    h1: 'Home Appliance Repair in Little River-Academy, TX',
    intro: [
      'Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes across Little River-Academy, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Little River-Academy is a small city of about 2,000 people roughly 10 miles south of Temple. It grew out of two older communities, Little River and Academy, and the Academy side centers on Main Street where it meets State Highway 95. Around town, the 76554 ZIP code takes in country homes and acreage along the farm roads.',
      'Wherever you are in it, the visit works the same way. The technician tests the appliance, tells you what failed and what the repair involves, and starts only after your OK. If a repair does not make sense for your appliance, you will hear that too.',
    ],
    travelNote:
      'Little River-Academy visits are usually grouped with our south and east Temple routes along Highway 95. Call to confirm the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Family homes near the schools',
        text: 'Much of town revolves around the Academy schools, and family households run the washer, dryer and dishwasher hard. Thumping, squealing and long dry times are early warnings. A call at that stage often means a smaller repair than waiting for a breakdown.',
      },
      {
        heading: 'Country homes on acreage',
        text: 'Homes outside town often have long driveways, gates and a spare refrigerator or chest freezer in a shop. Tell us about gates, dogs and where the appliance is when you book.',
      },
      {
        heading: 'Older homes in town',
        text: 'Older houses near the center of each community can have small kitchens, original water shutoffs and long dryer vent runs. On laundry calls the technician checks the vent and the hookups, because they cause many repeat failures.',
      },
      {
        heading: 'Appliances that outlast their parts',
        text: 'Plenty of homes here keep a reliable appliance going for years. Belts, door gaskets, relays and heating elements wear out long before the machine itself, and replacing them is usually worth it.',
      },
    ],
    sections: [
      {
        heading: 'Stop using it',
        accent: 'if you notice this.',
        paragraphs: [
          'Most appliance problems can wait for a visit. A few cannot. Unplug the appliance or switch off its breaker, and do not use it again until it has been checked, if you see sparks, smell burning plastic or hot wiring, see scorch marks on a cord or outlet, or find water pooling near an outlet or under a machine.',
          'If you smell gas near a range, dryer or water heater, do not switch anything on or off. Leave the house and call your gas provider or 911 from outside. A dryer that feels hot on the outside or smells scorched is also a reason to stop and call, since lint buildup in the vent is a known fire risk.',
        ],
      },
      {
        heading: 'What to tell us',
        accent: 'when you call.',
        paragraphs: [
          'A few details help the technician arrive ready. The brand and model number, usually on a label inside the door, under the lid or on the frame. What the appliance is doing, or not doing, and when it started. Any error code, noise or smell. Anything that happened just before, like a storm, a move or a power outage, and what you have already tried.',
          'You do not need to know what is wrong. A plain description is enough, and the technician will take it from there.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Little River-Academy.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Calling earlier in the day gives you a better shot at a same-day visit.',
          'Most calls here are refrigerators and freezers that stop cooling, washers that will not drain or spin, dryers that run without heat, dishwashers that leave dishes dirty and ovens that will not heat. On every dryer call we check the vent as well.',
        ],
      },
    ],
    zips: ['76554'],
    zipsVerified: true,
    nearby: ['Holland', 'Rogers', 'Troy', 'Belton', 'Salado'],
    faqs: [
      {
        q: 'Do you cover homes outside Little River-Academy city limits?',
        a: 'Yes, across the 76554 ZIP code, including country homes along the farm roads. Give us your address and we will confirm.',
      },
      {
        q: 'Can you come to Little River-Academy the same day?',
        a: 'Often. Same-day service is available, subject to technician availability, location, and current demand. We will give you the earliest open time when you call.',
      },
      {
        q: 'My dryer smells hot. Should I keep using it?',
        a: 'No. Turn it off, clean the lint screen and check that the outside vent flap opens when the dryer runs. If the smell or heat continues, do not use it until it has been checked.',
      },
      {
        q: 'Do you repair freezers and fridges in shops?',
        a: 'Yes. Make sure the technician can reach the back of the unit and the outlet, and let us know about any gates.',
      },
      {
        q: 'My appliance is still under warranty. Should I call you?',
        a: 'Contact the manufacturer first, since independent repair may not be covered by a factory warranty. If the warranty has expired or you are not sure, call us with the model number.',
      },
      {
        q: 'Which appliances do you repair in Little River-Academy?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'How much does appliance repair in Little River-Academy cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['washer', 'dryer', 'refrigerator', 'dishwasher'],
  },
  {
    slug: 'rogers-tx',
    name: 'Rogers',
    metaTitle: 'Appliance Repair Rogers TX | Southeast Bell County',
    metaDescription:
      'Appliance repair in Rogers, TX and the 76569 area for refrigerators, freezers, washers, dryers, dishwashers and ovens, in town and on rural roads. Call us.',
    h1: 'Appliance Repair in Rogers, TX, Out on Highway 190',
    intro: [
      'Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes in and around Rogers, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Rogers is a small town in southeastern Bell County, about 14 miles southeast of Temple on US 190. It has held close to the same size for more than a century, with 1,275 residents in 1910 and 1,113 at the 2020 census. The 76569 ZIP code reaches well beyond town into farm country and across the line into Milam County.',
      'That makes Rogers one of the longer drives on our routes, so we try to make every visit count. The technician tests the appliance, tells you what failed and what the repair involves, and starts only after your OK. If a repair does not make sense for your appliance, you will hear that too.',
    ],
    travelNote:
      'Rogers sits at the southeast end of our area, so visits are planned around our east routes along US 190. Call early and we will give you the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Long-established homes',
        text: 'Many homes in town have been lived in for decades, with kitchens and laundry rooms that were fitted long before today’s appliances. Tight spaces, original shutoff valves and long dryer vent runs are common, so the technician checks the hookups as well as the appliance.',
      },
      {
        heading: 'Farm and country properties',
        text: 'Outside town, homes often have long driveways, gates and a shop or barn with a spare refrigerator or chest freezer. Tell us about gates, dogs and where the appliance is when you book.',
      },
      {
        heading: 'Appliances kept for the long haul',
        text: 'A lot of households here keep a dependable appliance running as long as it will go. That usually makes sense. Belts, gaskets, relays and heating elements wear out long before the machine does.',
      },
      {
        heading: 'Rogers ISD families',
        text: 'Family homes run the washer, dryer and dishwasher every day during the school year. Long dry times, thumping spins and dishes that come out gritty are early signs worth a call before they turn into a bigger repair.',
      },
    ],
    sections: [
      {
        heading: 'Make the most',
        accent: 'of one visit.',
        paragraphs: [
          'Because Rogers is a longer drive, a little preparation goes a long way. Take a photo of the model and serial tag before you call, usually inside the door, under the lid or on the frame, and have it handy when you talk to us. With the exact model, the technician can check common parts for that appliance before heading out.',
          'If a second appliance is acting up, mention it when you book, even if it seems minor. Looking at both on the same trip is easier than scheduling two visits. And if anything changes before the appointment, like the appliance starting to work again or getting worse, give us a call.',
        ],
      },
      {
        heading: 'Keep an older appliance',
        accent: 'running longer.',
        paragraphs: [
          'Refrigerators and freezers: vacuum the condenser coils once or twice a year, keep the door gaskets clean, and leave a few inches of space around units in a garage or shop. Dryers: clean the lint screen every load and check that the outside vent flap opens when the dryer runs.',
          'Washers: do not overload the drum, use the right detergent for the machine, and clear the pump filter on front-loaders. Dishwashers: clean the filter at the bottom of the tub every month or so and scrape plates before loading. Small habits like these head off a lot of common repairs.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Rogers.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Rogers is at the edge of our routes, so calling earlier in the day gives you a better shot at a same-day visit.',
          'Most calls here are refrigerators and freezers that stop cooling, washers that will not drain or spin, dryers that run without heat, dishwashers that leave dishes dirty and ovens that will not heat.',
        ],
      },
    ],
    zips: ['76569'],
    zipsVerified: true,
    nearby: ['Holland', 'Little River-Academy', 'Troy', 'Belton', 'Salado'],
    faqs: [
      {
        q: 'Do you cover homes outside Rogers?',
        a: 'Yes, across the 76569 ZIP code, including rural roads around town. Part of the ZIP crosses into Milam County, so give us your address and we will confirm.',
      },
      {
        q: 'Can you come to Rogers the same day?',
        a: 'Sometimes. Same-day service is available, subject to technician availability, location, and current demand. Rogers is at the east end of our routes, so calling early helps.',
      },
      {
        q: 'Can the technician look at two appliances on one visit?',
        a: 'Yes. Mention both when you book so we can plan enough time.',
      },
      {
        q: 'Is my older washer worth repairing?',
        a: 'Often. Pumps, lid locks, belts and suspension parts are reasonable repairs. A failed transmission or worn tub bearings on an older machine usually tip the balance toward replacing it. The technician will explain the options.',
      },
      {
        q: 'Do you repair freezers and fridges in shops and barns?',
        a: 'Yes. Make sure the technician can reach the back of the unit and the outlet, and let us know about any gates.',
      },
      {
        q: 'Which appliances do you repair in Rogers?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'How much does appliance repair in Rogers cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['refrigerator', 'freezer', 'washer', 'dryer'],
  },
  {
    slug: 'holland-tx',
    name: 'Holland',
    metaTitle: 'Appliance Repair Holland TX | 17 Miles South of Temple',
    metaDescription:
      'Appliance repair in Holland, TX and the 76534 area for refrigerators, freezers, washers, dryers, dishwashers and ovens, in town and on country roads. Call.',
    h1: 'Small-Town Appliance Repair in Holland, TX',
    intro: [
      'Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes in and around Holland, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Holland sits on State Highway 95 about 17 miles south of Temple. It was settled in 1860 as Mountain Home, incorporated in 1891, and has stayed close to 1,100 residents for decades, with 1,075 counted at the 2020 census. The 76534 ZIP code covers a much wider area of farms and country homes, reaching into Milam County.',
      'In a town this size, word gets around, and we would rather be known for straight answers than for upselling. The technician tests the appliance, tells you what failed and what the repair involves, and starts only after your OK. If a repair is not worth it, you will hear that too.',
    ],
    travelNote:
      'Holland visits are usually grouped with our south routes along Highway 95. Call early and we will give you the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Older homes in town',
        text: 'Many houses in Holland have stood for generations. Kitchens and laundry rooms in older homes tend to be tight, with original shutoff valves and long dryer vent runs, so the technician checks the hookups along with the appliance.',
      },
      {
        heading: 'Country homes and outbuildings',
        text: 'Outside town, a spare refrigerator or a chest freezer in a shop or barn is common. Heat, dust and pests are hard on them. Keep a few inches of space around the unit and vacuum the coils a couple of times a year.',
      },
      {
        heading: 'Gates, dogs and directions',
        text: 'Some country addresses are hard to find on a map. When you book, tell us about gates, dogs, which entrance to use and where the appliance is. It saves time when the technician arrives.',
      },
      {
        heading: 'Holland ISD families',
        text: 'Family homes run the washer, dryer and dishwasher every day. Long dry times, a washer that thumps on spin or dishes that come out gritty are early signs worth a call.',
      },
    ],
    sections: [
      {
        heading: 'What that noise',
        accent: 'usually means.',
        paragraphs: [
          'A refrigerator that clicks every few minutes and never starts often has a failing start relay. A loud buzz or squeal from inside the freezer often points to the evaporator fan, and a rattle from the bottom back can be the condenser fan or a loose drain pan.',
          'A washer that grinds or roars on spin often has worn tub bearings, while a loud thump usually means an unbalanced load or worn suspension. A dryer that squeaks or thumps as it tumbles usually needs new rollers, a belt or an idler pulley. A dishwasher that hums but does not wash may have a jammed or failed pump.',
          'Noises are a clue, not a diagnosis. Note when the sound happens and what the appliance was doing, and tell us when you call.',
        ],
      },
      {
        heading: 'Water on the floor?',
        accent: 'Where to look first.',
        paragraphs: [
          'Under a refrigerator, a leak is often a clogged defrost drain, a cracked water line to the ice maker or a loose water valve fitting. Under a washer, check the hoses at the back and the drain hose connection before anything else. Under a dishwasher, the cause is often a worn door seal, a loose drain connection or suds from the wrong detergent.',
          'If water is pooling near an outlet or cord, switch off the breaker before you touch anything. Close the water supply valve for the appliance if you can reach it, dry the area, and call us.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Holland.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Holland is one of our longer drives, so calling earlier in the day gives you a better shot at a same-day visit.',
          'Before the visit, find the model number, usually on a label inside the door, under the lid or on the frame, and write down any error code.',
        ],
      },
    ],
    zips: ['76534'],
    zipsVerified: true,
    nearby: ['Little River-Academy', 'Rogers', 'Salado', 'Belton', 'Troy'],
    faqs: [
      {
        q: 'Do you cover homes outside Holland?',
        a: 'Yes, across the 76534 ZIP code, including country roads around town. Part of the ZIP crosses into Milam County, so give us your address and we will confirm.',
      },
      {
        q: 'Can you come to Holland the same day?',
        a: 'Sometimes. Same-day service is available, subject to technician availability, location, and current demand. Holland is at the south end of our routes, so calling early helps.',
      },
      {
        q: 'My refrigerator is clicking but not cooling. What is wrong?',
        a: 'A click every few minutes often points to a failing start relay or a compressor that cannot start. Unplug it, check that the coils are clean and the fan turns, then call us if it still will not run.',
      },
      {
        q: 'My washer is leaking. Should I keep using it?',
        a: 'No. Turn off the water supply to the washer, check the hoses at the back, and call us. Running a leaking washer can damage the floor and anything nearby.',
      },
      {
        q: 'Do you repair freezers and fridges in shops and barns?',
        a: 'Yes. Make sure the technician can reach the back of the unit and the outlet, and let us know about any gates.',
      },
      {
        q: 'Which appliances do you repair in Holland?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'How much does appliance repair in Holland cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['refrigerator', 'washer', 'dryer', 'dishwasher'],
  },
  {
    slug: 'moody-tx',
    name: 'Moody',
    metaTitle: 'Appliance Repair Moody TX | Up Highway 317 from Temple',
    metaDescription:
      'Appliance repair in Moody, TX and the 76557 area for refrigerators, freezers, washers, dryers, dishwashers and ovens, from a team based in Temple. Call us.',
    h1: 'Appliance Repair in Moody, TX, from Your Neighbors in Temple',
    intro: [
      'Appliance Repair Temple repairs refrigerators, freezers, washers, dryers, dishwashers, ovens and ranges in homes in and around Moody, TX. Same-day service is available, subject to technician availability, location, and current demand.',
      'Moody is a small city of about 1,400 people in southern McLennan County, up State Highway 317 from the Temple area. It counts as part of the Waco metro, but for appliance service it sits closer to our Temple base. The 76557 ZIP code covers about 123 square miles of farm and ranch country and reaches into Bell and Coryell counties, out past Mother Neff State Park on the Leon River.',
      'That means a Moody call might be a house in town or a home a few miles down a county road. The visit works the same either way. The technician tests the appliance, tells you what failed and what the repair involves, and starts only after your OK.',
    ],
    travelNote:
      'Moody is at the north end of our area, so visits are planned around our north routes along Highway 317. Call early and we will give you the earliest open time for your address.',
    localPoints: [
      {
        heading: 'Homes in town',
        text: 'Moody has stayed between about 1,000 and 1,400 residents for roughly a century, so many houses in town are well established. Older kitchens and laundry rooms can be tight, with original shutoff valves and long dryer vent runs, and the technician checks those along with the appliance.',
      },
      {
        heading: 'Farm and ranch properties',
        text: 'Across the wider 76557 area, homes often have long driveways, gates and a shop or barn with a spare refrigerator or chest freezer. Tell us about gates, dogs and where the appliance is when you book.',
      },
      {
        heading: 'Three counties, one ZIP',
        text: 'Because 76557 crosses into Bell and Coryell counties, some addresses near Moody are not in McLennan County at all. Give us your full address when you call so we can confirm coverage and plan the route.',
      },
      {
        heading: 'Moody ISD families',
        text: 'Family homes run the washer, dryer and dishwasher every day. Long dry times, a washer that thumps on spin or dishes that come out gritty are early signs worth a call before they turn into a bigger repair.',
      },
    ],
    sections: [
      {
        heading: 'Cold snaps are hard',
        accent: 'on appliances too.',
        paragraphs: [
          'Central Texas freezes do not last long, but they catch appliances off guard. Water lines to refrigerator ice makers and washer hoses in unheated laundry rooms or garages can freeze and split. After a hard freeze, check behind the washer and the refrigerator for drips before you run them.',
          'Garage refrigerators and freezers can also act up in the cold. Many standard refrigerators are not built to run in a garage that drops near freezing, and the fresh food side may warm up while the freezer thaws. If yours only misbehaves on cold nights, that is useful information for the technician.',
        ],
      },
      {
        heading: 'Ice maker stopped?',
        accent: 'Check these first.',
        paragraphs: [
          'Make sure the ice maker is switched on and the shutoff arm or sensor is not stuck in the full position. Check that the freezer is cold enough, usually around 0°F, since many ice makers stop below a certain temperature. If you recently changed the water filter, reseat it, as a filter that is not fully locked in can block water flow.',
          'If ice is still not forming, the problem is often a failed water inlet valve, a frozen fill tube or the ice maker assembly itself. Those are common repairs, so book a visit with the model number ready.',
        ],
      },
      {
        heading: 'How scheduling works',
        accent: 'for Moody.',
        paragraphs: [
          'Call with your address, the appliance, the brand and what it is doing. We confirm the details and set a visit window on the same call. We are open Monday to Saturday, 8:00 AM to 8:00 PM.',
          'Our typical response is about 60 minutes during business hours. That is a typical figure, subject to technician availability, location, and current demand, not a guaranteed arrival time. Moody is one of our longer drives, so calling earlier in the day gives you a better shot at a same-day visit.',
          'Most calls here are refrigerators and freezers that stop cooling, washers that will not drain or spin, dryers that run without heat, dishwashers that leave dishes dirty and ovens that will not heat. On every dryer call we check the vent too.',
        ],
      },
    ],
    zips: ['76557'],
    zipsVerified: true,
    nearby: ['Troy', 'Belton', "Morgan's Point Resort", 'Holland', 'Little River-Academy'],
    faqs: [
      {
        q: 'Do you cover homes outside Moody city limits?',
        a: 'Yes, across the 76557 ZIP code, which includes parts of McLennan, Bell and Coryell counties. Give us your address and we will confirm.',
      },
      {
        q: 'Moody is in McLennan County. Do you really come out from Temple?',
        a: 'Yes. Moody is on our north routes along Highway 317. Same-day service is available, subject to technician availability, location, and current demand.',
      },
      {
        q: 'My washer hose split after a freeze. What should I do?',
        a: 'Shut off the water supply valves behind the washer, unplug it and dry the area. Then call us. Do not run the washer until the hose and connections have been checked.',
      },
      {
        q: 'My ice maker stopped. Is it worth repairing?',
        a: 'Usually. Inlet valves, fill tubes and ice maker assemblies are common, reasonable repairs. Check that the ice maker is on and the filter is seated first.',
      },
      {
        q: 'Do you repair freezers and fridges in shops and barns?',
        a: 'Yes. Make sure the technician can reach the back of the unit and the outlet, and let us know about any gates.',
      },
      {
        q: 'Which appliances do you repair in Moody?',
        a: 'Refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops and over-the-range microwaves, across the major brands.',
      },
      {
        q: 'What happens if a part has to be ordered?',
        a: 'Many common parts can be replaced on the first visit. Some are model-specific and have to be ordered. The technician will tell you if that is the case and what happens next.',
      },
      {
        q: 'How much does appliance repair in Moody cost?',
        a: 'It depends on the appliance and the part, so we do not list prices online. Call to discuss your repair needs with the brand and model number ready.',
      },
    ],
    featuredServices: ['refrigerator', 'washer', 'dryer', 'freezer'],
  },
];

export const areaHref = (a: Area) => `/service-areas/${a.slug}/`;
