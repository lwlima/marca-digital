import { siteConfig, whatsappUrl } from '../config/site';
import { whatsappButtonProps } from '../config/analytics';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <a
          href="#inicio"
          className="flex min-w-0 items-center"
          aria-label={`${siteConfig.name} — início`}
        >
          <img
            src={siteConfig.assets.logoFullNavbar}
            alt={siteConfig.shortName}
            width={400}
            height={94}
            decoding="async"
            className="h-7 w-auto max-w-[min(11rem,48vw)] object-contain object-left sm:h-9 sm:max-w-none md:h-10 lg:h-11"
          />
        </a>

        <a
          href={whatsappUrl('navbar')}
          target="_blank"
          rel="noopener noreferrer"
          {...whatsappButtonProps('navbar')}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-base"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          {siteConfig.ctaNavLabel}
        </a>
      </div>
    </header>
  );
}
