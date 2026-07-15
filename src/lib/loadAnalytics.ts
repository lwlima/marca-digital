const CONSENT_KEY = 'marca-digital-cookie-consent';

export type CookieConsentValue = 'accepted' | 'rejected';

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(CONSENT_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

export function setCookieConsent(value: CookieConsentValue) {
  localStorage.setItem(CONSENT_KEY, value);
}

export function loadGoogleAnalytics(measurementId: string) {
  if (typeof window === 'undefined' || !measurementId) return;
  if (window.__marcaDigitalAnalyticsLoaded) return;

  window.__marcaDigitalAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];

  // Official gtag stub: must push `arguments` (Arguments object), not a rest Array.
  // Pushing [...args] leaves commands unprocessed and hits never leave the browser.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
    anonymize_ip: true,
  });

  const params = new URLSearchParams(window.location.search);
  const campaign = params.get('utm_campaign');
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');

  if (campaign || source || medium) {
    window.gtag('event', 'campaign_details', {
      campaign: campaign ?? undefined,
      source: source ?? undefined,
      medium: medium ?? undefined,
      term: params.get('utm_term') ?? undefined,
      content: params.get('utm_content') ?? undefined,
    });
  }
}

export function initAnalyticsIfConsented(measurementId?: string) {
  if (!measurementId) return;
  if (getCookieConsent() === 'accepted') {
    loadGoogleAnalytics(measurementId);
  }
}
