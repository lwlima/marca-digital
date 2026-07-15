import type { WhatsAppButtonLocation } from '../config/analytics';

const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://marcadigital.dev.br';

export const brandAssets = {
  logoFull: '/logo-extensa.webp',
  logoFullNavbar: '/logo-extensa-navbar.webp',
  logoFullNavbarLg: '/logo-extensa-navbar-400.webp',
  logoSymbol: '/logo-mark.webp',
  logoFullWithBg: '/logo-extensa-on-dark.webp',
  logoSymbolWithBg: '/logo-mark-on-dark.webp',
  ogImage: '/og-image.jpg',
  favicon: '/favicon.svg',
  favicon32: '/favicon-32.png',
  favicon192: '/favicon-192.png',
  faviconApple: '/apple-touch-icon.png',
  hero: '/hero.webp',
} as const;

export const whatsappMessages: Record<WhatsAppButtonLocation, string> = {
  navbar:
    'Olá! Gostaria de solicitar um diagnóstico gratuito do meu site e presença no Google.',
  hero:
    'Olá! Gostaria de solicitar um diagnóstico gratuito do meu site e presença no Google.',
  problem:
    'Olá! Quero entender o que está travando meu site e solicitar um diagnóstico gratuito.',
  mid_cta:
    'Olá! Vi como funciona o processo e gostaria de solicitar um diagnóstico gratuito.',
  final_cta:
    'Olá! Ainda tenho dúvidas e gostaria de solicitar um diagnóstico gratuito.',
  floating:
    'Olá! Vim pelo site da Marca Digital e gostaria de falar sobre um diagnóstico gratuito.',
};

export const siteConfig = {
  name: 'Marca Digital | Consultoria de Performance',
  shortName: 'Marca Digital',
  tagline: 'Consultoria de Performance',
  owner: 'Luciano Wilian de Lima',
  title: 'Marca Digital | Consultoria de Performance — Sites e Google Maps',
  description:
    'Consultoria de performance digital para empresas locais: sites ultra-rápidos, otimização no Google Maps e infraestrutura gerenciada.',
  url: siteUrl,
  cnpj: '57.374.824/0001-49',
  email: 'contato@marcadigital.dev.br',
  whatsapp: '5519992839122',
  heroSubtitle:
    'Sites rápidos e presença no Google para empresas que querem mais contatos — sem enrolação de agência de marketing.',
  ctaNavLabel: 'Diagnóstico grátis',
  ctaHeroLabel: 'Quero um diagnóstico gratuito',
  ctaHeroMicrocopy: 'Sem compromisso · Diagnóstico em poucos minutos',
  ctaProblemLabel: 'Quero saber o que está travando meu site',
  ctaMidLabel: 'Quero um diagnóstico gratuito',
  ctaMidTitle: 'Pronto para receber mais contatos?',
  ctaMidDescription:
    'Em poucos minutos avalio seu site e sua presença no Google.',
  ctaFinalLabel: 'Quero um diagnóstico gratuito',
  ctaFinalTitle: 'Ainda com dúvidas?',
  ctaFinalDescription:
    'Solicite um diagnóstico gratuito e veja o que está travando seus contatos online.',
  ogImage: brandAssets.ogImage,
  assets: brandAssets,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    'Transforme seu site em uma máquina de novos clientes — Marca Digital | Consultoria de Performance',
} as const;

export const problemStats = {
  slowLoadSeconds: '3',
  mobileAbandonmentPercent: '53',
  mobileAbandonmentContext:
    'desistem se o site demora mais de 3 segundos para carregar no celular',
  source: 'Fonte: Think with Google, dados de Google Analytics (mar. 2016)',
} as const;

export function whatsappUrl(location: WhatsAppButtonLocation) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessages[location])}`;
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).href;
}
