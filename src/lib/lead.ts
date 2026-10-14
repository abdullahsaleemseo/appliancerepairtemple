import type { ApplianceKey } from '@/content/types';

export type LeadInput = {
  name: string;
  phone: string;
  email?: string;
  zip: string;
  appliance: ApplianceKey | 'other' | '';
  brand?: string;
  issue?: string;
  contactTime?: string;
  consent: boolean;
  formId: string;
  pageUrl: string;
  attribution?: Record<string, string | undefined> | null;
  device?: string;
  company?: string;
  turnstileToken?: string;
};

export type FieldErrors = Partial<Record<'name' | 'phone' | 'email' | 'zip' | 'appliance' | 'consent' | 'issue', string>>;

export const digitsOnly = (s: string) => s.replace(/\D/g, '');

export function normalizePhone(raw: string) {
  const d = digitsOnly(raw);
  return d.length === 11 && d.startsWith('1') ? d.slice(1) : d;
}

/** Shared by the browser (inline errors) and the API route (authoritative check). */
export function validateLead(input: Partial<LeadInput>, opts: { requireAppliance?: boolean } = {}): FieldErrors {
  const errors: FieldErrors = {};
  const name = (input.name || '').trim();
  if (name.length < 2) errors.name = 'Please enter your name.';
  else if (name.length > 80) errors.name = 'Please shorten your name.';

  const phone = normalizePhone(input.phone || '');
  if (phone.length !== 10 || /^[01]/.test(phone)) errors.phone = 'Please enter a 10-digit US phone number.';

  const email = (input.email || '').trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'That email address does not look right.';

  if (!/^\d{5}$/.test((input.zip || '').trim())) errors.zip = 'Please enter a 5-digit ZIP code.';

  if (opts.requireAppliance !== false && !input.appliance) errors.appliance = 'Please choose an appliance.';

  if ((input.issue || '').length > 1000) errors.issue = 'Please keep the description under 1,000 characters.';

  if (!input.consent) errors.consent = 'Please check the box so we can call you back.';
  return errors;
}

export const contactTimes = ['Any time', 'Morning (8am-12pm)', 'Afternoon (12pm-4pm)', 'Evening (4pm-8pm)'];
