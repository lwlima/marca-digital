const CONSENT_KEY = 'marca-digital-cookie-consent';

export type CookieConsentValue = 'accepted' | 'rejected';

const consentDenied = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
} as const;

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(CONSENT_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

export function setCookieConsent(value: CookieConsentValue) {
  localStorage.setItem(CONSENT_KEY, value);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === 'function') return;

  window.gtag = function gtag() {
    // Official gtag stub: must push `arguments`, not a rest Array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
}

function applyConsentDefault() {
  if (window.__marcaDigitalConsentDefault || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'default', {
    ...consentDenied,
    wait_for_update: 500,
  });
  window.__marcaDigitalConsentDefault = true;
}

function injectGoogleAnalytics(measurementId: string) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag?.('js', new Date());
  window.gtag?.('config', measurementId, {
    send_page_view: true,
    anonymize_ip: true,
  });

  const params = new URLSearchParams(window.location.search);
  const campaign = params.get('utm_campaign');
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');

  if (campaign || source || medium) {
    window.gtag?.('event', 'campaign_details', {
      campaign: campaign ?? undefined,
      source: source ?? undefined,
      medium: medium ?? undefined,
      term: params.get('utm_term') ?? undefined,
      content: params.get('utm_content') ?? undefined,
    });
  }
}

export function loadGoogleAnalytics(measurementId: string) {
  if (typeof window === 'undefined' || !measurementId) return;
  if (getCookieConsent() !== 'accepted') return;

  ensureGtag();
  applyConsentDefault();
  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
  });

  if (window.__marcaDigitalAnalyticsLoaded) return;
  window.__marcaDigitalAnalyticsLoaded = true;

  const start = () => injectGoogleAnalytics(measurementId);
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(start, { timeout: 2000 });
  } else {
    window.setTimeout(start, 1);
  }
}

export function denyAnalyticsStorage() {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  const expire = 'Thu, 01 Jan 1970 00:00:00 GMT';
  const host = window.location.hostname;
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0]?.trim();
    if (!name?.startsWith('_ga')) continue;
    document.cookie = `${name}=;expires=${expire};path=/`;
    document.cookie = `${name}=;expires=${expire};path=/;domain=.${host}`;
  }
}

export function initAnalyticsIfConsented(measurementId?: string) {
  if (!measurementId) return;
  if (getCookieConsent() === 'accepted') {
    loadGoogleAnalytics(measurementId);
  }
}
