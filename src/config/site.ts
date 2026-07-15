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
  pagespeedProof: '/pagespeed-padrao.webp',
} as const;

/** Contato comercial (foco: vender site / solução). */
const msgProjeto = `Olá! Vim pelo site da Marca Digital e gostaria de falar sobre um site / projeto.

Meu nome:`;

/** Diagnóstico: secundário — quem já tem site. */
const msgDiagnostico = `Olá! Já tenho um site e gostaria de um diagnóstico gratuito (PageSpeed).

Meu nome:
Link do site:

(Para a análise PageSpeed, o link do site já é suficiente.)`;

function msgPlano(planLabel: string) {
  return `Olá! Vi o plano ${planLabel} no site e gostaria de saber mais.

Meu nome:`;
}

/** Sistemas / E-commerce: sem pré-requisito — discovery na conversa. */
const msgOrcamentoSistemas = `Olá! Gostaria de pedir orçamento para Sistema / E-commerce.

Meu nome:`;

export const whatsappMessages: Record<WhatsAppButtonLocation, string> = {
  navbar: msgProjeto,
  hero: msgProjeto,
  mid_cta: msgProjeto,
  final_cta: msgProjeto,
  floating: msgProjeto,
  problem: msgDiagnostico,
  plan_landing: msgPlano('Landing'),
  plan_institucional: msgPlano('Institucional'),
  plan_completo: msgPlano('Completo'),
  quote_systems: msgOrcamentoSistemas,
};

export const siteConfig = {
  name: 'Marca Digital | Consultoria de Performance',
  shortName: 'Marca Digital',
  tagline: 'Consultoria de Performance',
  owner: 'Luciano Wilian de Lima',
  title:
    'Marca Digital | Consultoria de Performance — Sites e Perfil da Empresa no Google',
  description:
    'Consultoria de performance digital para prestadores de serviço: sites ultra-rápidos, Perfil da Empresa no Google e infraestrutura gerenciada.',
  url: siteUrl,
  cnpj: '57.374.824/0001-49',
  email: 'contato@marcadigital.dev.br',
  whatsapp: '5519992839122',
  heroSubtitle:
    'Sites rápidos e Perfil da Empresa no Google para prestadores de serviço que querem mais contatos — sem enrolação de agência de marketing.',
  ctaNavLabel: 'Quero um site',
  ctaHeroLabel: 'Quero um site rápido',
  ctaHeroMicrocopy: 'Landing, Institucional ou Completo · proposta no WhatsApp',
  ctaProblemLabel: 'Já tenho site — quero um diagnóstico',
  ctaMidLabel: 'Falar sobre meu projeto',
  ctaMidTitle: 'Pronto para receber mais contatos?',
  ctaMidDescription:
    'Sites feitos para converter no celular, com hospedagem e manutenção inclusos. Fale no WhatsApp e montamos a proposta.',
  ctaFinalLabel: 'Falar no WhatsApp',
  ctaFinalTitle: 'Vamos tirar seu projeto do papel?',
  ctaFinalDescription:
    'Escolha um plano ou conte o que você precisa — respondo no WhatsApp e avançamos juntos.',
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
