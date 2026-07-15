import { siteConfig } from '../config/site';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-brand-800 bg-brand-950 py-6 text-center text-xs text-slate-300 sm:py-8 sm:text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>
            © {year} {siteConfig.shortName}
          </span>
          <span className="text-brand-700" aria-hidden="true">
            ·
          </span>
          <span>CNPJ {siteConfig.cnpj}</span>
          <span className="text-brand-700" aria-hidden="true">
            ·
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-slate-200 underline decoration-brand-700 underline-offset-2 transition-colors hover:text-white"
          >
            {siteConfig.email}
          </a>
          <span className="text-brand-700" aria-hidden="true">
            ·
          </span>
          <a
            href="/privacidade"
            className="text-slate-200 underline decoration-brand-700 underline-offset-2 transition-colors hover:text-white"
          >
            Política de Privacidade
          </a>
          <span className="text-brand-700" aria-hidden="true">
            ·
          </span>
          <a
            href="/termos"
            className="text-slate-200 underline decoration-brand-700 underline-offset-2 transition-colors hover:text-white"
          >
            Termos de Uso
          </a>
        </p>
      </div>
    </footer>
  );
}
