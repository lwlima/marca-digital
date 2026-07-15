import { AlertTriangle, Clock, MapPinOff } from 'lucide-react';
import { problemStats, siteConfig, whatsappUrl } from '../config/site';
import { whatsappButtonProps } from '../config/analytics';
import SectionEyebrow from './SectionEyebrow';
import WhatsAppIcon from './WhatsAppIcon';

export default function Problem() {
  return (
    <section
      id="problema"
      className="bg-white py-16 sm:py-20"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div
          className="relative w-full max-w-sm shrink-0 sm:max-w-md lg:max-w-xs xl:max-w-sm"
          aria-hidden="true"
        >
          <div className="rounded-2xl bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 p-6 shadow-lg ring-1 ring-red-100 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>

            <div className="mt-6 space-y-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Clock className="h-5 w-5 shrink-0 text-amber-500" />
                <div className="flex-1">
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span>Carregando site...</span>
                    <span className="font-semibold text-red-700">
                      {problemStats.slowLoadSeconds}s
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-amber-400 to-red-500" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-500">
                <MapPinOff className="h-5 w-5 shrink-0 text-red-700" />
                <span>Não encontrado no Google Maps</span>
              </div>
            </div>

            <p className="mt-4 text-center text-sm font-semibold text-red-700">
              {problemStats.mobileAbandonmentPercent}%{' '}
              {problemStats.mobileAbandonmentContext}
            </p>
            <p className="mt-2 text-center text-xs text-slate-500">
              {problemStats.source}
            </p>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <SectionEyebrow className="mb-3 lg:mb-4">O problema</SectionEyebrow>
          <h2
            id="problem-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            O seu site atual está te custando dinheiro?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Um site lento, difícil de navegar ou que não aparece no Google Maps
            não é apenas um &ldquo;detalhe&rdquo;. É a porta de entrada para seu
            cliente ir direto para o concorrente. Se o seu site não carrega em
            menos de 3 segundos ou não facilita o contato via WhatsApp, você
            está perdendo vendas todos os dias.
          </p>
          <a
            href={whatsappUrl('problem')}
            target="_blank"
            rel="noopener noreferrer"
            {...whatsappButtonProps('problem')}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-700 hover:decoration-brand-400 sm:text-base"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {siteConfig.ctaProblemLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
