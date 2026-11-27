# Site cleanup report, Nov 27, 2026

Every change below is live on appliancerepairtemple.com (commit on `main` and `claude/jolly-sagan-cu5ygt`). `npm run check` and `npm run build` passed before the push.

## 1. Footer disclaimer (every page)

**BEFORE**

> Disclaimer: This site is a free service to assist homeowners in connecting with local appliance repair providers. All providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired provider furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not providers listed on this site. Appliance Repair Temple is not affiliated with, endorsed by or sponsored by any appliance manufacturer. Brand names are trademarks of their respective owners and are used only to identify appliances.

**AFTER**

> Disclaimer: Appliance Repair Temple is a free service that helps homeowners connect with independent appliance repair providers. We don't warrant or guarantee any work performed. Before work begins, please confirm that the provider you hire holds any license and insurance the job requires.

> Appliance Repair Temple is not affiliated with, endorsed by or sponsored by any appliance manufacturer. Brand names are trademarks of their respective owners and are used only to identify appliances.

The trademark sentence was part of the old footer paragraph but not part of the Ringba text. It now sits on its own line under your new disclaimer so the disclaimer itself matches your text exactly. Say the word and it goes.

## 2. Legal pages (all still `noindex, follow`)

### /disclaimer/

**BEFORE sections:** Guides and tools, Safety, Trademarks

**AFTER sections:** What the service is, No warranty or guarantee, Your checks before work starts, Information on this website, Brand names, Contact

### /terms-of-service/

**BEFORE sections:** What this site does, Independent providers, Availability, Calls, Information on this site, Photos, Trademarks, Acceptable use, Limitation of liability, Disclaimer, Changes to these terms, Governing law

**AFTER sections:** The service, Providers are independent, No guarantee, Your responsibilities, Website content, Brand names, Using the website fairly, Limitation of liability, Changes to these terms, Governing law, Contact

### /privacy-policy/

**BEFORE sections:** This site has no forms, Calls, Information collected automatically, How information is used, Who information is shared with, Cookies, Security, Your choices, Children, Changes, Contact

**AFTER sections:** What may be collected, How it's used, Who it's shared with, Cookies and analytics, How long it's kept, Security, Your choices, Children, Changes to this policy

Removed from the legal pages: actors or models, call tracking service, calls routed or recorded, "this site has no forms", "free referral service", "does not schedule appointments", and the Facebook contact line. Contact on all three is now the tracked phone number. Word counts (rendered body): disclaimer 324, terms 451, privacy 531. Dashes: 0.

## 3. Consistency lines

**Tool pages** (cost estimator, error code decoder, symptom tool, maintenance checklist), closing block:

BEFORE: "Rather talk it through? *Call our team.* Describe what you found and we will schedule a visit. Our technicians work across Temple and Bell County, TX."

AFTER: "Rather talk it *through?* Call (254) 615-2088 and describe what you found to check today's schedule. Technicians work across Temple and Bell County, TX." (the number is a tracked `PhoneLink`)

**/faq/** closing block:

BEFORE: "Our technicians repair refrigerators, washers, dryers, dishwashers and ovens across Temple and Bell County."

AFTER: "Technicians repair refrigerators, washers, dryers, dishwashers and ovens across Temple and Bell County."

**/get-connected/** (needed for the verify step to pass: it had "phone menu" x4 and "enter your ZIP" x11 in the HTML):

| BEFORE | AFTER |
|---|---|
| Meta: "...Call (254) 615-2088, pick the appliance, enter your ZIP and describe the problem to a technician near Temple, TX." | "...Call (254) 615-2088, say which appliance it is, give your ZIP and describe the problem. Temple, TX." |
| Step: "Pick the appliance, enter your ZIP. The phone menu asks which appliance is acting up and where you live..." | "Say the appliance and your ZIP. Tell whoever answers which appliance is acting up and where you live..." |
| Hero: "Have the model number handy, pick the appliance from the phone menu, enter your ZIP code and describe what it is doing." | "Have the model number handy, say which appliance it is, give your ZIP code and describe what it is doing." |

## 4. Blog links

Blog paragraphs had no way to hold links, so posts now support `[anchor](/path/)` inside text (paragraphs, lists, steps, alerts). Every BEFORE/AFTER text change in `src/content/blog.ts`:

**BEFORE:** 'Look at the ice maker. Water under the ice bin or a frozen mass on the freezer floor near it usually comes from the ice maker fill tube or water valve. The ice maker troubleshooting guide on this site covers it in detail.',

**AFTER:** 'Look at the ice maker. Water under the ice bin or a frozen mass on the freezer floor near it usually comes from the ice maker fill tube or water valve. Those fill problems are a job for [ice maker repair](/ice-maker-repair-temple-tx/) if a new filter and a level fridge do not stop them.',

**BEFORE:** 'A washer will not spin a drum full of water. The pump has to empty it first, so a drain problem shows up as a spin problem. If you open the lid or door at the end of a cycle and see standing water, start with the drain, not the spin.',

**AFTER:** 'A washer will not spin a drum full of water. The pump has to empty it first, so a drain problem shows up as a spin problem. If you open the lid or door at the end of a cycle and see standing water, start with the drain, not the spin, and work through [the checks for a washer that won\'t drain](/blog/washer-not-draining/) first.',

**BEFORE:** 'Small countertop microwave: a magnetron or control board repair can cost close to a new unit. If it is more than a few years old, replacement usually makes more sense. A door switch or fuse is still worth fixing.',

**AFTER:** 'Small countertop microwave: a magnetron or control board repair can cost close to a new unit. If it is more than a few years old, replacement usually makes more sense. A door switch or fuse is still worth fixing, and the age-and-cost math in [deciding whether to repair or replace an appliance](/blog/repair-or-replace-appliance/) applies here too.',

**BEFORE:** text: 'Stop here. Do not light anything or flip switches. Leave the house and call 911 or your gas company from outside.',

**AFTER:** text: 'Stop here. Do not light anything or flip switches. Leave the house and call 911 or your gas company from outside. Once they have made it safe, ask about [same-day appliance repair in Temple](/appliance-repair-temple-tx/) for the range itself.',

**BEFORE:** 'Water drains but clothes are still soaking wet. The washer may not be reaching full spin. An unbalanced load, an unlevel washer, a worn belt or drive part, or a lid lock that will not stay engaged can all cause it.',

**AFTER:** 'Water drains but clothes are still soaking wet. The washer may not be reaching full spin. An unbalanced load, an unlevel washer, a worn belt or drive part, or a lid lock that will not stay engaged can all cause it, and the checks for [a washer that drains but won\'t spin](/blog/washer-not-spinning/) pick up from there.',

**BEFORE:** 'That is why a vent problem so often shows up as a no-heat problem. Replacing the fuse or heating part without clearing the vent usually means it fails again.',

**AFTER:** 'That is why a vent problem so often shows up as a no-heat problem. Replacing the fuse or heating part without clearing the vent usually means it fails again, so a long or neglected run is worth a [professional dryer vent cleaning](/dryer-vent-cleaning-temple-tx/) before any part is swapped.',

**BEFORE:** 'The most important input is the diagnosis. Until you know which part failed, any decision is a guess.',

**AFTER:** 'The most important input is the diagnosis. Until you know which part failed, any decision is a guess, though the [appliance repair cost estimator](/appliance-repair-cost-estimator/) can show the rough cost level for your symptom while you wait.',

**BEFORE:** 'Garbage disposal. If the dishwasher drains into a disposal, run the disposal for a few seconds to clear it. On a newly installed disposal, the knockout plug inside the dishwasher inlet may still be in place. Whirlpool suggests pushing a pencil into the inlet: if it goes in about three inches, the plug is gone.',

**AFTER:** 'Garbage disposal. If the dishwasher drains into a disposal, run the disposal for a few seconds to clear it. If the disposal itself hums or jams, sort that out first; the usual fixes are part of [garbage disposal repair in Temple](/garbage-disposal-repair-temple-tx/). On a newly installed disposal, the knockout plug inside the dishwasher inlet may still be in place. Whirlpool suggests pushing a pencil into the inlet: if it goes in about three inches, the plug is gone.',

**Closing box link** (was "More on {appliance} repair in Temple." on every post; "more on" is a banned anchor pattern). AFTER, per post:

- refrigerator-leaking-water: "Leaks that come back after the drain is cleared are handled through **refrigerator repair in Temple**." → /refrigerator-repair-temple-tx/
- refrigerator-not-cooling: "Fan, defrost and relay faults like these are part of **refrigerator repair in Temple**." → /refrigerator-repair-temple-tx/
- ice-maker-not-working: "When the valve or the module has to be replaced, **ice maker repair in Temple** covers freezer-mounted and door-mounted units alike." → /ice-maker-repair-temple-tx/
- washer-not-spinning: "Belts, couplers, locks and motor parts are tested as part of **washer repair in Temple**." → /washer-repair-temple-tx/
- washer-not-draining: "Pump, lid lock and control faults are tested as part of **washer repair in Temple**." → /washer-repair-temple-tx/
- dryer-not-heating: "Elements, fuses, igniters and valve coils are all checked during **dryer repair in Temple**." → /dryer-repair-temple-tx/
- how-often-clean-dryer-vent: "For runs through the roof, the attic or a long wall, **dryer vent cleaning in Temple** clears the whole line, not just the end you can reach." → /dryer-vent-cleaning-temple-tx/
- dishwasher-drainage-problems: "Drain pump testing and replacement are part of **dishwasher repair in Temple**." → /dishwasher-repair-temple-tx/
- stove-burner-not-working: "Igniter, spark module, valve and switch repairs fall under **oven and stove repair in Temple**." → /oven-stove-repair-temple-tx/
- microwave-not-heating: "Work behind the cover belongs to **microwave repair in Temple**, where the parts are tested safely." → /microwave-repair-temple-tx/
- repair-or-replace-appliance: "A clear diagnosis through **appliance repair in Temple** tells you exactly which part failed before you decide." → /

**Keep reading box** BEFORE: same two newest same-appliance posts. AFTER: by topic. Refrigerator and ice posts show the other refrigerator and ice posts; laundry posts (washer, dryer, dryer vent) show the other laundry posts; kitchen posts (stove, microwave, dishwasher) show the other kitchen posts; repair-or-replace shows only the cost estimator and the homepage. Tool cards and the service card stay as they were.

Not added: refrigerator-not-cooling > freezer page. No paragraph in that post is about a stand-alone freezer, so a link there wouldn't fit. Ice maker post keeps its refrigerator link in the Keep reading box; dryer vent post keeps its dryer link there too.

## 5. Killeen

BEFORE: "Every covered town appears on the Temple and Bell County service map, and Temple's own repair details are on **the main Temple appliance repair page**."

AFTER: "Every covered town appears on the Temple and Bell County service map, while **appliance repair throughout Temple** covers every appliance in the house, from the fridge to the dryer."

## 6. Call hint line ("Tell us the appliance, the brand and what it is doing.")

BEFORE: it rendered in up to five places per page (hero call row, closing band, call card, footer, mobile call bar).

AFTER: it renders once per page, inside the call card. Removed from the hero call row, the closing band, the footer and the mobile call bar; the homepage hero card hides it so only the closing card shows it. Crawl confirms 1 per page (0 on legal pages, which have no call card).

## 7. Verify (live crawl after deploy)

Counts are on the full HTML. "press" is counted as a whole word, so "pressure" doesn't count. Non-legal pages show `noindex, nofollow` because indexing is switched off site-wide; legal pages show `noindex, follow` as required.

| URL | status | title | H1 | meta robots | actors or models | phone menu | enter your ZIP | press | Ringba | CTA hint | disclaimer exact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| / | 200 | Appliance Repair Temple TX \| Fridge, Washer & Oven Repair | Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /appliance-repair-temple-tx/ | 200 | Same-Day & Emergency Appliance Repair Temple TX | Same-Day Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /refrigerator-repair-temple-tx/ | 200 | Refrigerator Repair Temple TX \| Not Cooling or Leaking? | Refrigerator Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /freezer-repair-temple-tx/ | 200 | Freezer Repair Temple TX \| Chest & Upright Freezer Service | Freezer Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /washer-repair-temple-tx/ | 200 | Washer Repair Temple TX \| Not Spinning or Draining? | Washer Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /dryer-repair-temple-tx/ | 200 | Dryer Repair Temple TX \| Dryer Not Heating? Gas & Electric | Dryer Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /dishwasher-repair-temple-tx/ | 200 | Dishwasher Repair Temple TX \| Not Draining or Cleaning? | Dishwasher Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /oven-stove-repair-temple-tx/ | 200 | Oven & Stove Repair Temple TX \| Gas and Electric Ranges | Oven, Stove & Range Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /microwave-repair-temple-tx/ | 200 | Microwave Repair Temple TX \| Over-the-Range & Built-In | Microwave Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /ice-maker-repair-temple-tx/ | 200 | Ice Maker Repair Temple TX \| Not Making Ice? | Ice Maker & Water Dispenser Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /dryer-vent-cleaning-temple-tx/ | 200 | Dryer Vent Cleaning Temple TX \| Faster, Safer Drying | Dryer Vent Cleaning in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /garbage-disposal-repair-temple-tx/ | 200 | Garbage Disposal Repair Temple TX \| Jammed or Leaking? | Garbage Disposal Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 4 | 0 | 1 | yes |
| /brands/ | 200 | Appliance Brands We Repair in Temple, TX \| All Major Brands | Appliance Brands We Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/whirlpool-appliance-repair-temple-tx/ | 200 | Whirlpool Appliance Repair Temple TX \| Washers & Fridges | Whirlpool Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/ge-appliance-repair-temple-tx/ | 200 | GE Appliance Repair Temple TX \| GE, Profile & Café | GE Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/samsung-appliance-repair-temple-tx/ | 200 | Samsung Appliance Repair Temple TX \| Ice Makers & Codes | Samsung Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/lg-appliance-repair-temple-tx/ | 200 | LG Appliance Repair Temple TX \| Fridges, Washers & Dryers | LG Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/frigidaire-appliance-repair-temple-tx/ | 200 | Frigidaire Appliance Repair Temple TX \| Fridges & Ranges | Frigidaire Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/maytag-appliance-repair-temple-tx/ | 200 | Maytag Appliance Repair Temple TX \| Washers & Dryers | Maytag Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/kitchenaid-appliance-repair-temple-tx/ | 200 | KitchenAid Appliance Repair Temple TX \| Fridge & Dishwasher | KitchenAid Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/bosch-appliance-repair-temple-tx/ | 200 | Bosch Appliance Repair Temple TX \| Dishwashers & Laundry | Bosch Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/kenmore-appliance-repair-temple-tx/ | 200 | Kenmore Appliance Repair Temple TX \| Who Built Yours? | Kenmore Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/electrolux-appliance-repair-temple-tx/ | 200 | Electrolux Appliance Repair Temple TX \| Laundry & Kitchen | Electrolux Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/amana-appliance-repair-temple-tx/ | 200 | Amana Appliance Repair Temple TX \| Fridges, Washers, Ranges | Amana Appliance Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /brands/speed-queen-repair-temple-tx/ | 200 | Speed Queen Washer & Dryer Repair Temple TX | Speed Queen Washer and Dryer Repair in Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/ | 200 | Appliance Repair Service Areas \| Temple & Bell County TX | Areas We Serve Around Temple, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/belton-tx/ | 200 | Appliance Repair Belton TX \| Near UMHB & Lake Belton | Appliance Repair in Belton, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/killeen-tx/ | 200 | Appliance Repair Killeen TX \| Rentals, Moves & Fort Hood | Appliance Repair in Killeen, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/harker-heights-tx/ | 200 | Appliance Repair Harker Heights TX \| Kitchen & Laundry | Appliance Repair in Harker Heights, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/salado-tx/ | 200 | Appliance Repair Salado TX \| Built-In & High-End Units | Appliance Repair in Salado, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/nolanville-tx/ | 200 | Appliance Repair Nolanville TX \| New-Build Appliances | Appliance Repair in Nolanville, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/morgans-point-resort-tx/ | 200 | Appliance Repair Morgan's Point Resort TX \| Lake Homes | Appliance Repair in Morgan's Point Resort, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/troy-tx/ | 200 | Appliance Repair Troy TX \| Farm, Shop & Home Appliances | Appliance Repair in Troy, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/little-river-academy-tx/ | 200 | Appliance Repair Little River-Academy TX \| Home & Farm | Appliance Repair in Little River-Academy, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/rogers-tx/ | 200 | Appliance Repair Rogers TX \| Propane & Rural Homes | Appliance Repair in Rogers, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/holland-tx/ | 200 | Appliance Repair Holland TX \| Small-Town Kitchen & Laundry | Appliance Repair in Holland, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /service-areas/moody-tx/ | 200 | Appliance Repair Moody TX \| North of Temple off I-35 | Appliance Repair in Moody, TX | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /about/ | 200 | About Appliance Repair Temple \| Local Technicians in Temple, TX | About Appliance Repair Temple | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /get-connected/ | 200 | Call for Appliance Repair in Temple, TX \| Talk to a Tech | Appliance Repair in Temple, one free call away. | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /appliance-maintenance-checklist-generator/ | 200 | Appliance Maintenance Checklist Generator \| Temple, TX | Appliance Maintenance Checklist built for your home. | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /appliance-error-code-decoder/ | 200 | Appliance Error Code Decoder: Samsung, LG, Whirlpool, GE & More | Appliance Error Code Decoder: what the display is telling you. | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /appliance-repair-cost-estimator/ | 200 | Appliance Repair Cost Estimator: Repair or Replace? \| Temple, TX | Appliance Repair Cost Estimator: repair or replace? | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /appliance-symptom-diagnostic-tool/ | 200 | Appliance Symptom Checker: Find the Likely Cause \| Temple, TX | Appliance Symptom Checker: no error code needed. | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /faq/ | 200 | Appliance Repair FAQ Temple TX \| Fix It or Replace It? | Temple Appliance Repair FAQ, answered plainly. | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/ | 200 | Appliance Repair Tips Temple TX \| Fridge, Washer and Dryer | Appliance Repair Tips for Temple homes. | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/refrigerator-leaking-water/ | 200 | Refrigerator Leaking Water? Find the Source Fast \| Temple TX | Refrigerator Leaking Water? Find Where the Water Is, and You Have the Cause | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/washer-not-spinning/ | 200 | Washer Not Spinning? 8 Causes and What to Check \| Temple TX | Washer Not Spinning? Why It Happens, What to Check First and When to Call | noindex, nofollow | 0 | 0 | 0 | 4 | 0 | 1 | yes |
| /blog/microwave-not-heating/ | 200 | Microwave Not Heating? The 1-Minute Water Test \| Temple TX | Microwave Running but Not Heating? The 1-Minute Water Test and What It Tells You | noindex, nofollow | 0 | 0 | 0 | 5 | 0 | 1 | yes |
| /blog/stove-burner-not-working/ | 200 | Stove Burner Not Working? Gas & Electric Fixes \| Temple TX | Stove Burner Not Working? A Diagnosis Chart for Gas and Electric Stoves | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/ice-maker-not-working/ | 200 | Ice Maker Not Working? 9 Fixes to Try First \| Temple TX | Refrigerator Ice Maker Not Working? 9 Fixes to Try First | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/refrigerator-not-cooling/ | 200 | Refrigerator Not Cooling? 7 Checks to Try First \| Temple TX | Refrigerator Not Cooling? What to Check First and When to Call | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/washer-not-draining/ | 200 | Washer Not Draining? 6 Safe Checks Before You Call \| Temple | Washer Not Draining? Safe Checks Before You Call for Repair | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/dryer-not-heating/ | 200 | Dryer Not Heating? Gas and Electric Dryer Checks \| Temple TX | Dryer Not Heating? Safe Checks and When to Call a Technician | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/repair-or-replace-appliance/ | 200 | Repair or Replace an Appliance? Use the 50% Rule \| Temple TX | Repair or Replace an Appliance? A Practical Way to Decide | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/how-often-clean-dryer-vent/ | 200 | How Often to Clean a Dryer Vent: 7 Clog Signs \| Temple TX | How Often Should You Clean a Dryer Vent? Signs, Steps and Safety | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /blog/dishwasher-drainage-problems/ | 200 | Dishwasher Not Draining? Filter, Hose, Pump Checks \| Temple | Dishwasher Not Draining? Common Causes and Safe Checks | noindex, nofollow | 0 | 0 | 0 | 0 | 0 | 1 | yes |
| /disclaimer/ | 200 | Disclaimer \| Appliance Repair Temple | Disclaimer | noindex, follow | 0 | 0 | 0 | 0 | 0 | 0 | yes |
| /terms-of-service/ | 200 | Terms of Service \| Appliance Repair Temple | Terms of Service | noindex, follow | 0 | 0 | 0 | 0 | 0 | 0 | yes |
| /privacy-policy/ | 200 | Privacy Policy \| Appliance Repair Temple | Privacy Policy | noindex, follow | 0 | 0 | 0 | 0 | 0 | 0 | yes |
| /accessibility/ | 200 | Accessibility \| Appliance Repair Temple | Accessibility | noindex, follow | 0 | 0 | 0 | 0 | 0 | 0 | yes |

60 URLs, 0 failing
