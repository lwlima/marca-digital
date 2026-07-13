import type { WhatsAppButtonLocation } from '../config/analytics';
import { WHATSAPP_GA_EVENTS } from '../config/analytics';

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}

export function trackWhatsAppClick(location: WhatsAppButtonLocation) {
  trackEvent(WHATSAPP_GA_EVENTS[location], {
    event_category: 'conversion',
    button_location: location,
    link_type: 'whatsapp',
  });
}

export function trackFaqToggle(question: string, isOpen: boolean) {
  trackEvent('faq_toggle', {
    event_category: 'engagement',
    event_label: question,
    faq_open: isOpen,
  });
}
