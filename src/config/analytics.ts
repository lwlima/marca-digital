export const WHATSAPP_BUTTON_ATTR = 'data-whatsapp-button';

export type WhatsAppButtonLocation =
  | 'navbar'
  | 'hero'
  | 'problem'
  | 'floating'
  | 'mid_cta'
  | 'final_cta';

export const WHATSAPP_GA_EVENTS: Record<WhatsAppButtonLocation, string> = {
  navbar: 'whatsapp_click_navbar',
  hero: 'whatsapp_click_hero',
  problem: 'whatsapp_click_problem',
  floating: 'whatsapp_click_floating',
  mid_cta: 'whatsapp_click_mid_cta',
  final_cta: 'whatsapp_click_final_cta',
};

export function whatsappButtonProps(location: WhatsAppButtonLocation) {
  return { [WHATSAPP_BUTTON_ATTR]: location } as Record<string, string>;
}
