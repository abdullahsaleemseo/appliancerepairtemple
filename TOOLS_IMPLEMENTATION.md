# Interactive tools

Four free tools. None of them needs an account or an email address. Answers stay in the visitor's browser tab (`sessionStorage`) and are never sent anywhere.

| Route | Tool | Client component |
|---|---|---|
| `/appliance-maintenance-checklist-generator/` | Maintenance checklist generator | `src/components/tools/MaintenanceTool.tsx` |
| `/appliance-error-code-decoder/` | Error code decoder | `src/components/tools/ErrorCodeTool.tsx` |
| `/appliance-repair-cost-estimator/` | Repair cost estimator (no prices) | `src/components/tools/CostTool.tsx` |
| `/appliance-symptom-diagnostic-tool/` | Symptom diagnostic tool | `src/components/tools/SymptomTool.tsx` |

The route files live in `src/app/<route>/page.tsx`. All four use the shared page layout in `src/components/tools/ToolPage.tsx`, which provides:
- the hero
- the tool
- a fallback message for visitors without JavaScript
- the how-it-works, coverage, safety and FAQ sections
- links to the other three tools
- the final call band

The tools are listed in the footer and in `sitemap.ts`.

## Referral-network rules that shape the tools

The site is a pay-per-call referral line (see `CLAUDE.md`). As a result:

- **No prices or currency.** The cost estimator works in relative "cost points" and shows levels (Lower, Moderate, Higher, Major) and a share of replacement cost. The owner chose this in October 2026.
- **One CTA: a tracked call.** There is no WhatsApp, no booking page and no business hours. `toolConfig.whatsappUrl` stays `null`.
- **Schema:** FAQPage and BreadcrumbList only. WebApplication JSON-LD was left out on purpose.
- **"Same-day" is not used.** The urgency levels are Monitor, Schedule soon, Get help today, and Stop use now.

## Where things live

| What | File |
|---|---|
| Business settings: name, phone, city, ZIP rules, emergency sentence, CTA labels, cost model, theme | `src/config/tools.ts` |
| Types for all tool data | `src/content/tools/types.ts` |
| Appliances (18), brands (16), brands by appliance, lifespans, replacement points | `src/content/tools/appliances.ts` |
| Problems per appliance, used by the symptom tool and the cost estimator: causes, urgency, safe checks, technician-only work, cost rule | `src/content/tools/issues.ts` |
| Maintenance tasks and interval rules | `src/content/tools/maintenance.ts` |
| Error code families and the error-code database (116 records) | `src/content/tools/errorCodes.ts` |
| Danger signs and free-text safety keywords | `src/content/tools/safety.ts` |
| Page copy, meta tags and FAQs for the four pages | `src/content/tools/pages.ts` |
| Decision logic, with no UI code | `src/lib/tools/` (`maintenance.ts`, `errorCodes.ts`, `cost.ts`, `diagnose.ts`, `shared.ts`) |
| Shared UI: wizard, option cards, safety banner, result CTA, disclaimer | `src/components/tools/Wizard.tsx`, `ToolParts.tsx`, `useSessionState.ts` |

## Updating business details

Edit `src/config/tools.ts`. Most values come from `src/config/site.ts`, so a change to the phone number or the city there carries through. The values that live only in `src/config/tools.ts`:

- `postalCode.serviceZips`: Temple ZIPs plus the verified ZIPs from the area pages. A unit test fails if this list drifts from `src/content/areas.ts`.
- `emergencyMessage`: the one emergency sentence the network approved.
- `cta`: the button labels.
- `costModel`: visit points, labour points per hour, parts point ranges, modifiers, level bounds and the repair-or-replace thresholds.
- `resultDelayMs`: the pause before results appear. Keep it under 700ms.

There are no placeholders left to replace. Every value is either real or deliberately unused (`whatsappUrl`, `currency` while `showCurrency` is false).

## How to add things

- **Appliance:**
  1. Add its key to `ToolApplianceKey` in `types.ts`.
  2. Add an entry to `appliances` and a list to `brandsByAppliance` in `appliances.ts`.
  3. Add at least 4 issues in `issues.ts` and at least 3 maintenance tasks, including one `proOnly` task, in `maintenance.ts`.

  The unit tests enforce these minimums.
- **Brand:** add it to `BrandKey` and `brands` (set `tier: 'premium'` for high-end brands), then list it under the appliances it makes.
- **Error code:** append a record to `errorCodes` with:
  - `appliance`, `brands` and `code` (exactly as the display shows it)
  - optional `aliases`
  - `title` and `category`
  - optional `cause` and `severity` overrides
  - `source`

  The category supplies the meaning, first checks, stop-use advice, next step, severity and parts level. When you confirm a code against a service manual, change its `source` text.
- **Symptom rule:** add an issue, or a cause on an existing issue. Each cause has a `weight` from 1 to 5. It can also have a `boostIf`, which raises the cause when the visitor reports:
  - other issue ids
  - an operating status
  - a minimum age
- **Cost rule:** every issue has a `cost` with:
  - `parts` as a `[low, high]` pair of levels (`none`, `low`, `moderate`, `high`, `major`)
  - `labourHours` as `[low, high]`
  - `complexity`
  - a `description`

## Calculation (cost estimator)

```
total points = (visit + parts + labour hours x labourPointsPerHour) x modifiers
modifiers    = premium brand x built-in x age 10+ x urgent x outside service ZIPs x complexity
level        = first costModel.levels entry whose max >= upper total
replacement  = appliance.replacementPoints x premium x built-in (replacement multipliers)
share        = total / replacement
```

The results are deterministic: the same inputs always give the same output.

Repair or replace:
- **Replace:** when the upper share is at least 0.5.
- **Compare:** when the upper share is at least 0.3.
- **Repair:** otherwise.

Age then adjusts that verdict:
- At or past the typical lifespan, the verdict moves one step toward replacement.
- In the later part of the lifespan, a borderline repair becomes "compare".

The result lists its reasons and is worded as guidance, not an instruction.

## Symptom ranking

Each cause starts from its weight, then gains:
- +2 for every extra symptom it explains
- +1.5 for a matching operating status
- +1 for a matching age

Ties keep the order in the data. The top three causes are shown, with the reason each one moved.

Urgency starts from the issue's own urgency and is raised by:
- the extra symptoms
- leaking (Get help today)
- stopped (Get help today for cooling appliances)
- unsafe signs (Stop use now)

## Safety overrides

These replace any ordinary result with the stop-use screen:
- any ticked danger sign (gas, smoke, sparking, shock, flooding, burning smell)
- a danger keyword in the decoder's free text
- an issue whose urgency is `stop`

## Testing

Automated:
- `npm test` runs `tests/tools.test.ts` with Node's test runner through `tsx`. It covers:
  - data integrity
  - code normalization and lookup
  - safety overrides
  - deterministic costs and modifiers
  - ZIP rules
  - repair-or-replace
  - cause ranking
  - maintenance intervals
- `npm run check` now runs the type check, the copy check and these tests.

Manual or end-to-end checklist. Run it on a phone width (360 to 390px) and on desktop:

1. **Happy path:** finish each tool and confirm the result, the disclaimer, the Copy or share button and the Call Now CTA all appear.
2. **Validation:** press Continue without answering. A message appears under the step and Continue stays dimmed. On the cost tool, enter `1234` as the ZIP; the 5-digit message appears.
3. **Unknown error code:**
   - Decoder: washer, LG, code `ZZ9`. The page shows "This code is not in the decoder yet" with the model number and owner manual advice.
   - Decoder: washer, Other, code `OE`. The answer does not guess, and it mentions which brands use the code.
4. **Critical safety:**
   - Decoder: type "there is smoke" in the notes.
   - Symptom tool: choose "Unsafe signs present". It requires a ticked sign, then shows the stop-use screen.
   - Cost tool: choose a stop-level problem such as a dryer burning smell.
5. **Mobile layout:** there is no sideways scrolling, tap targets are at least 44px, and the sticky call bar does not hide the Continue button once the page is scrolled.
6. **Restart and storage:**
   - Reload mid-wizard; the answers and the step are kept.
   - Press Start over, then Clear answers; everything resets.
   - Close the tab; the answers are gone.
7. **Print:** on the maintenance results, press Print / Save as PDF. Only the checklist prints, with the line's name and number at the top.
8. **Keyboard:**
   - Tab through the options; focus rings are visible, and Space or the arrow keys select options.
   - After Continue, focus moves to the new step heading. On results, focus moves to the result heading.
