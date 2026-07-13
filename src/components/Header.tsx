import { siteConfig, whatsappUrl } from '../config/site';
import { whatsappButtonProps } from '../config/analytics';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-0"
          aria-label={`${siteConfig.name} — início`}
        >
          <img
            src={siteConfig.assets.logoSymbol}
            alt=""
            aria-hidden="true"
            width={64}
            height={64}
            decoding="async"
            className="h-14 w-14 shrink-0 sm:h-[3.75rem] sm:w-[3.75rem] md:h-16 md:w-16"
          />
          <span className="-ml-1.5 truncate text-lg font-bold tracking-tight text-brand-900 sm:-ml-2 sm:text-xl md:text-2xl">
            {siteConfig.shortName}
          </span>
        </a>

        <a
          href={whatsappUrl('navbar')}
          target="_blank"
          rel="noopener noreferrer"
          {...whatsappButtonProps('navbar')}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-600 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:px-4 sm:py-2.5 sm:text-base"
        >
          <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          {siteConfig.ctaNavLabel}
        </a>
      </div>
    </header>
  );
}
