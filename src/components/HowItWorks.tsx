import { BarChart3, Code2, MessageCircle } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Conversa no WhatsApp',
    description:
      'Você conta o que precisa. Se já tiver site, podemos fazer um diagnóstico gratuito em PDF — o objetivo é indicar o plano certo.',
  },
  {
    number: 2,
    icon: Code2,
    title: 'Proposta e execução',
    description:
      'Fechamos Landing, Institucional ou Completo (ou sistema sob orçamento) e desenvolvemos o projeto conosco.',
  },
  {
    number: 3,
    icon: BarChart3,
    title: 'Acompanhamento',
    description:
      'Com a mensalidade ativa: hospedagem, franquia de horas e relatório simples de desempenho.',
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-white py-16 sm:py-20"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow className="mb-3">Processo</SectionEyebrow>
          <h2
            id="how-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Como Funciona
          </h2>
        </div>

        <ol className="relative mt-10 space-y-0">
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <li key={number} className="relative flex gap-5 pb-10 last:pb-0">
              {index < steps.length - 1 && (
                <span
                  className="absolute left-5 top-12 h-[calc(100%-1rem)] w-0.5 -translate-x-1/2 bg-brand-200"
                  aria-hidden="true"
                />
              )}
              <div
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm shadow-brand-200"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="pt-0.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  Passo {number}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 rounded-xl border border-brand-100 bg-brand-50 px-5 py-4 text-center text-sm leading-relaxed text-slate-700 sm:text-base">
          Valores de referência na seção Serviços. Proposta fechada no WhatsApp.
        </p>
      </div>
    </section>
  );
}
