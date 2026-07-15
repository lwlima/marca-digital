import { MessageCircle, Target, Zap } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

const highlights = [
  {
    icon: Target,
    title: 'Resultado antes de técnico',
    description:
      'Você não precisa entender de site, Google ou ferramentas. Precisa de mais contatos chegando pelo Google e WhatsApp.',
  },
  {
    icon: Zap,
    title: 'Site que não perde cliente',
    description:
      'Páginas rápidas no celular, Perfil da Empresa no Google ajustado e caminho claro para o cliente falar com você.',
  },
  {
    icon: MessageCircle,
    title: '5 anos resolvendo problemas reais',
    description:
      'Há 5 anos ajudo empresas a resolver problemas reais na web. Hoje uso essa experiência para quem quer vender mais, não para impressionar com termos complicados.',
  },
] as const;

export default function Authority() {
  return (
    <section
      id="autoridade"
      className="bg-slate-50 py-16 sm:py-20"
      aria-labelledby="authority-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow className="mb-3">Por que a Marca Digital</SectionEyebrow>
          <h2
            id="authority-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Eu cuido da parte técnica para você vender mais.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Feito para prestadores de serviço — não para agência de anúncios ou
            posts. Resolvo o que trava o negócio online: site lento, invisível
            no Google ou difícil de contatar. Você foca em atender; eu cuido do
            resto.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-3 md:gap-5">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-5 text-left"
            >
              <div
                className="mb-3 inline-flex rounded-lg bg-brand-600/10 p-2.5"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
