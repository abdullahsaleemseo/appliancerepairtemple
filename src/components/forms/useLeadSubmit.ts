'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { routes } from '@/config/site';
import { track } from '@/lib/analytics';
import { deviceType, readAttribution } from '@/lib/attribution';
import { normalizePhone, validateLead, type FieldErrors, type LeadInput } from '@/lib/lead';

export const THANK_YOU_KEY = 'tar_lead';

export function useLeadSubmit(formId: string) {
  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const started = useRef(false);

  const onStart = useCallback(() => {
    if (started.current) return;
    started.current = true;
    track('form_start', { form_id: formId });
  }, [formId]);

  const submit = useCallback(
    async (data: Omit<LeadInput, 'formId' | 'pageUrl' | 'attribution' | 'device'>) => {
      const found = validateLead(data);
      setErrors(found);
      if (Object.keys(found).length) {
        setStatus('idle');
        return false;
      }
      setStatus('sending');
      setMessage('');
      try {
        const res = await fetch('/api/lead/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            phone: normalizePhone(data.phone),
            formId,
            pageUrl: window.location.href,
            attribution: readAttribution(),
            device: deviceType(),
          }),
        });
        const json = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: FieldErrors; message?: string; leadId?: string };
        if (!res.ok || !json.ok) {
          if (json.errors) setErrors(json.errors);
          setMessage(json.message || 'Something went wrong sending your request. Please call us instead.');
          setStatus('error');
          return false;
        }
        try {
          sessionStorage.setItem(
            THANK_YOU_KEY,
            JSON.stringify({ name: data.name.trim().split(' ')[0], leadId: json.leadId, appliance: data.appliance, formId }),
          );
        } catch {
          // Thank-you page falls back to a generic greeting.
        }
        router.push(routes.thankYou);
        return true;
      } catch {
        setMessage('We could not reach the server. Please check your connection or call us.');
        setStatus('error');
        return false;
      }
    },
    [formId, router],
  );

  return { errors, setErrors, status, message, submit, onStart };
}
