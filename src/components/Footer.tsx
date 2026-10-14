import { siteConfig } from '../config/site';

const year = new Date().getFullYear();

const linkClass =
  'text-slate-200 underline decoration-brand-700 underline-offset-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function Footer() {
  return (
    <footer className="border-t border-brand-800 bg-brand-950 py-6 text-center text-xs text-slate-300 sm:py-8 sm:text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p>Atendimento 100% online · todo o Brasil</p>
        <p className="mt-2">
          © {year} {siteConfig.shortName}
          <span className="text-brand-700" aria-hidden="true">
            {' '}
            ·{' '}
          </span>
          CNPJ {siteConfig.cnpj}
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <a href="/privacidade" className={linkClass}>
            Política de Privacidade
          </a>
          <span className="text-brand-700" aria-hidden="true">
            ·
          </span>
          <a href="/termos" className={linkClass}>
            Termos de Uso
          </a>
          <span className="text-brand-700" aria-hidden="true">
            ·
          </span>
          <button type="button" data-cookie-manage className={linkClass}>
            Gerenciar cookies
          </button>
        </p>
      </div>
    </footer>
  );
}
