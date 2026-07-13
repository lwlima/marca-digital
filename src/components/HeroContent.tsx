import { siteConfig, whatsappUrl } from '../config/site';
import { whatsappButtonProps } from '../config/analytics';
import WhatsAppIcon from './WhatsAppIcon';

export default function HeroContent() {
  return (
    <div className="relative z-[2] mx-auto flex max-w-7xl items-center px-4 py-6 sm:px-6 sm:py-7 lg:min-h-[34rem] lg:px-10 lg:py-16 xl:min-h-[38rem] xl:px-14 2xl:min-h-[40rem]">
      <div className="max-w-xs [text-shadow:0_1px_20px_rgba(3,13,24,0.85)] sm:max-w-md md:max-w-lg lg:max-w-2xl lg:[text-shadow:0_1px_28px_rgba(3,13,24,0.85)]">
        <h1
          id="hero-heading"
          className="text-[1.35rem] font-extrabold leading-[1.2] tracking-tight sm:text-2xl md:text-3xl lg:text-[2.65rem] lg:leading-[1.15] xl:text-5xl"
        >
          Transforme seu site em uma máquina de novos clientes.
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg">
          {siteConfig.heroSubtitle}
        </p>
        <div className="mt-4 lg:mt-8">
          <a
            href={whatsappUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            {...whatsappButtonProps('hero')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 lg:px-6 lg:py-3.5 lg:text-base"
          >
            <WhatsAppIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            {siteConfig.ctaHeroLabel}
          </a>
          <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
            {siteConfig.ctaHeroMicrocopy}
          </p>
        </div>
      </div>
    </div>
  );
}
