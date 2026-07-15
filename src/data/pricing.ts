import type { WhatsAppButtonLocation } from '../config/analytics';

export const excessHourRate = 100;

/** Três tiers — landing, institucional e combo com Perfil da Empresa. */
export const pricingPlans = [
  {
    id: 'landing',
    name: 'Landing',
    blurb: '1 página para converter',
    setupFrom: 900,
    monthly: 200,
    hours: 2,
    featured: false,
    whatsapp: 'plan_landing' as const satisfies WhatsAppButtonLocation,
    features: [
      '1 página focada em conversão',
      'Padrão PageSpeed na entrega',
      'Configuração de Analytics',
      '2h/mês de alterações',
      'Domínio, e-mail, SSL e backup',
      'Suporte de segunda a sexta',
    ],
  },
  {
    id: 'basico',
    name: 'Institucional',
    blurb: 'Site completo para PME',
    setupFrom: 1800,
    monthly: 280,
    hours: 3,
    featured: true,
    whatsapp: 'plan_institucional' as const satisfies WhatsAppButtonLocation,
    features: [
      'Até 5 páginas',
      'Padrão PageSpeed na entrega',
      'Configuração de Analytics',
      '3h/mês de alterações',
      'Domínio, e-mail, SSL e backup',
      'Suporte de segunda a sexta',
    ],
  },
  {
    id: 'completo',
    name: 'Completo',
    blurb: 'Landing ou Institucional + Perfil da Empresa no Google',
    setupFrom: 4000,
    setupNote: 'Inclui o site escolhido + Perfil da Empresa',
    monthly: 480,
    hours: 5,
    featured: false,
    whatsapp: 'plan_completo' as const satisfies WhatsAppButtonLocation,
    features: [
      'Landing ou Institucional — você escolhe',
      'Configuração do Perfil da Empresa no Google',
      'Configuração de Analytics',
      '5h/mês de alterações',
      'Domínio, e-mail, SSL e backup',
      'Suporte de segunda a domingo',
    ],
  },
] as const;

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
}
