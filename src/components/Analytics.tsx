import Script from 'next/script';

const gaId = process.env.NEXT_PUBLIC_GA_ID;

/** GA4 loads after the page is interactive so it never blocks rendering. */
export function Analytics() {
  if (!gaId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  );
}
