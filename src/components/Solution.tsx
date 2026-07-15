import { MapPin, Gauge, Wrench } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

const pillars = [
  {
    icon: MapPin,
    title: 'Aparecer no Google Maps',
    description:
      'Ajuste da sua ficha no Google para quem buscar pelo seu serviço na região te encontrar antes do concorrente.',
  },
  {
    icon: Gauge,
    title: 'Site rápido no celular',
    description:
      'Páginas leves e seguras em qualquer aparelho. Nada de site pesado que faz o cliente desistir antes de falar com você.',
  },
  {
    icon: Wrench,
    title: 'Manutenção sem dor de cabeça',
    description:
      'Eu cuido de atualizações e segurança. Você só precisa atender os clientes que chegarem.',
  },
] as const;

export default function Solution() {
  return (
    <section
      id="solucao"
      className="bg-brand-950 py-16 text-white sm:py-20"
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow dark className="mb-3">
            A solução
          </SectionEyebrow>
          <h2
            id="solution-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Três frentes para trazer mais contatos.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-brand-800/60 bg-brand-900/50 p-6 transition-colors hover:border-brand-500/40 sm:p-8"
            >
              <div
                className="mb-5 inline-flex rounded-lg bg-brand-600/20 p-3"
                aria-hidden="true"
              >
                <Icon className="h-7 w-7 text-brand-300" />
              </div>
              <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
