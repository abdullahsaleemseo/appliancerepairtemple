import { phoneDisplay, site } from './site';

/**
 * Business configuration for the four interactive tools. Replace values here, not in the components.
 *
 * Referral-network rules (see CLAUDE.md) shape what this file holds:
 * - No prices. The cost guide works in relative "cost points" and shows levels (Lower, Moderate,
 *   Higher, Major), never currency. `costModel` below is the only place the scale is defined.
 * - No opening times, booking pages, WhatsApp or payment details. The only CTA is a tracked call.
 * - Emergency wording is limited to the approved sentence in `emergencyMessage`.
 */
export const toolConfig = {
  businessName: site.brandName,
  phoneDisplay,
  defaultCity: site.city,
  region: `${site.county}, ${site.stateAbbr}`,

  /** Not used: the network allows tracked phone calls only. Leave null unless the network approves another channel. */
  whatsappUrl: null as string | null,

  locale: 'en-US',
  /** Kept for future use. No currency amounts are rendered while `showCurrency` is false. */
  currency: 'USD',
  showCurrency: false,

  /** Towns named in the tools, taken from site.ts. */
  serviceAreas: [site.city, ...site.nearbyTowns],

  /**
   * US ZIP codes: five digits, optional +4. serviceZips lists Temple's ZIPs plus the verified ZIPs on the
   * area pages. It is written out here so the client bundle does not load the area content; a unit test
   * checks it against src/content/areas.ts.
   */
  postalCode: {
    label: 'ZIP code',
    pattern: /^\d{5}(-\d{4})?$/,
    example: site.templeZips[0],
    serviceZips: [
      ...site.templeZips,
      '76513', '76541', '76542', '76543', '76549', '76548', '76571', '76559', '76579', '76554', '76569', '76534', '76557',
    ] as string[],
  },

  /** The one emergency availability sentence the network approved. Use it once per page. */
  emergencyMessage: 'Emergency help may be available from local providers.',

  cta: {
    primary: 'Call Now',
    urgent: 'Call Now',
    afterResult: 'Talk it through with a technician',
  },

  /**
   * Relative cost model. One point is an arbitrary unit; only ratios matter.
   * total points = visit + parts + labour hours x labourPointsPerHour, then x each modifier.
   */
  costModel: {
    visitPoints: 1.5,
    labourPointsPerHour: 1.2,
    partsPoints: { none: [0, 0], low: [0.5, 1.5], moderate: [1.5, 4], high: [4, 8], major: [8, 15] } as Record<
      'none' | 'low' | 'moderate' | 'high' | 'major',
      [number, number]
    >,
    modifiers: {
      premiumBrand: 1.35,
      builtIn: 1.2,
      age10plus: 1.1,
      urgent: 1.15,
      outsideServiceZips: 1.1,
      complexity: { simple: 1, moderate: 1.08, complex: 1.18 },
    },
    /** Replacement cost multipliers for the comparable new unit. */
    replacement: { premiumBrand: 2.2, builtIn: 1.5 },
    /** Upper bounds (points) for each total level. Anything above the last bound is "Major". */
    levels: [
      { max: 5, label: 'Lower', note: 'A visit plus a small part or an adjustment.' },
      { max: 9, label: 'Moderate', note: 'A common part and an hour or two of labour.' },
      { max: 15, label: 'Higher', note: 'A larger component or a longer job.' },
      { max: Infinity, label: 'Major', note: 'A major component, such as a compressor, sealed system or main board.' },
    ],
    /** Repair-or-replace thresholds: share of comparable replacement cost. */
    replaceShare: { compare: 0.3, replace: 0.5 },
  },

  /**
   * Theme colours used by the tools. They mirror tailwind.config.ts so the tools match the site.
   * Change the Tailwind tokens to restyle; these values are for reference and the print view.
   */
  theme: { ink: '#0A0F1C', flame: '#C2500C', canvas: '#F6F3EE', mint: '#0E8A5F', danger: '#B42318' },

  /** Brief pause before results so the change is noticed. Kept under 700ms on purpose. */
  resultDelayMs: 450,
} as const;

export const toolRoutes = {
  maintenance: '/appliance-maintenance-checklist-generator/',
  errorCodes: '/appliance-error-code-decoder/',
  cost: '/appliance-repair-cost-estimator/',
  symptoms: '/appliance-symptom-diagnostic-tool/',
} as const;

export type ToolKey = keyof typeof toolRoutes;
