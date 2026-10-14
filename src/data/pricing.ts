import type { WhatsAppButtonLocation } from '../config/analytics';

export const excessHourRate = 100;

/** Três tiers — landing, institucional e combo com Perfil da Empresa. */
export const pricingPlans = [
  {
    id: 'landing',
    name: 'Landing',
    idealFor: 'Ideal para divulgar um serviço ou campanha.',
    setupFrom: 900,
    monthly: 200,
    hours: 2,
    featured: false,
    whatsapp: 'plan_landing' as const satisfies WhatsAppButtonLocation,
    features: [
      '1 página focada em conversão',
      'Meta: nota 90+ no PageSpeed mobile na entrega*',
      'Configuração de Analytics',
      '2h/mês de alterações',
      'Domínio, e-mail, SSL e backup',
      'Suporte de segunda a sexta, em horário comercial',
    ],
  },
  {
    id: 'basico',
    name: 'Institucional',
    idealFor: 'Ideal para apresentar a empresa em várias páginas.',
    setupFrom: 1800,
    monthly: 280,
    hours: 3,
    featured: true,
    whatsapp: 'plan_institucional' as const satisfies WhatsAppButtonLocation,
    features: [
      'Até 5 páginas',
      'Meta: nota 90+ no PageSpeed mobile na entrega*',
      'Configuração de Analytics',
      '3h/mês de alterações',
      'Domínio, e-mail, SSL e backup',
      'Suporte de segunda a sexta, em horário comercial',
    ],
  },
  {
    id: 'completo',
    name: 'Completo',
    blurb: 'Landing ou Institucional + Perfil da Empresa no Google',
    idealFor: 'Ideal para ser encontrado no Google e converter.',
    setupFrom: 4000,
    monthly: 480,
    hours: 5,
    featured: false,
    whatsapp: 'plan_completo' as const satisfies WhatsAppButtonLocation,
    features: [
      'Landing ou Institucional — você escolhe',
      'Meta: nota 90+ no PageSpeed mobile na entrega*',
      'Configuração do Perfil da Empresa no Google',
      'Configuração de Analytics',
      '5h/mês de alterações',
      'Domínio, e-mail, SSL e backup',
      'Suporte de segunda a domingo',
    ],
  },
] as const;

export function formatBRL(value: number) {
  const amount = value.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
  return `R$ ${amount}`;
}
