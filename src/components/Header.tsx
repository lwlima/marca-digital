import { siteConfig, whatsappUrl } from '../config/site';
import { whatsappButtonProps } from '../config/analytics';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { href: '#solucao', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#servicos', label: 'Preços' },
  { href: '#faq', label: 'Dúvidas' },
] as const;

const linkClass =
  'block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-700 lg:px-0 lg:py-0 lg:hover:bg-transparent';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <a
          href="#inicio"
          className="flex min-w-0 items-center"
          aria-label="Marca Digital — voltar ao início"
        >
          <img
            src={siteConfig.assets.logoFullNavbar}
            srcSet={`${siteConfig.assets.logoFullNavbar} 240w, ${siteConfig.assets.logoFullNavbarLg} 400w`}
            sizes="(min-width: 1024px) 170px, (min-width: 640px) 140px, 112px"
            alt={siteConfig.shortName}
            width={240}
            height={56}
            decoding="async"
            className="h-7 w-auto max-w-[min(11rem,48vw)] object-contain object-left sm:h-8 sm:max-w-none md:h-9 lg:h-10"
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Seções da página">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative lg:hidden">
            <button
              type="button"
              id="menu-button"
              aria-expanded="false"
              aria-controls="menu-mobile"
              className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Menu
            </button>
            <nav
              id="menu-mobile"
              hidden
              inert
              aria-label="Menu da página"
              className="absolute right-0 z-50 mt-2 w-44 rounded-lg border border-slate-200 bg-white p-1 shadow-lg"
            >
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href={whatsappUrl('navbar')}
            target="_blank"
            rel="noopener noreferrer"
            {...whatsappButtonProps('navbar')}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-base lg:min-h-0"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            {siteConfig.ctaNavLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
