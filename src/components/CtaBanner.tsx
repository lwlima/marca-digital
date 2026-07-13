import { siteConfig, whatsappUrl } from '../config/site';
import { whatsappButtonProps, type WhatsAppButtonLocation } from '../config/analytics';
import WhatsAppIcon from './WhatsAppIcon';

type Variant = 'mid' | 'final';

const variantConfig: Record<
  Variant,
  {
    location: WhatsAppButtonLocation;
    headingId: string;
    title: string;
    description: string;
    label: string;
    sectionClass: string;
    titleClass: string;
  }
> = {
  mid: {
    location: 'mid_cta',
    headingId: 'cta-mid-heading',
    title: siteConfig.ctaMidTitle,
    description: siteConfig.ctaMidDescription,
    label: siteConfig.ctaMidLabel,
    sectionClass:
      'bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-12 sm:py-14',
    titleClass: 'text-2xl font-bold tracking-tight text-white sm:text-3xl',
  },
  final: {
    location: 'final_cta',
    headingId: 'cta-final-heading',
    title: siteConfig.ctaFinalTitle,
    description: siteConfig.ctaFinalDescription,
    label: siteConfig.ctaFinalLabel,
    sectionClass: 'border-t border-slate-200 bg-white py-10 sm:py-12',
    titleClass: 'text-xl font-bold tracking-tight text-slate-900 sm:text-2xl',
  },
};

interface Props {
  variant?: Variant;
}

export default function CtaBanner({ variant = 'mid' }: Props) {
  const config = variantConfig[variant];
  const isDark = variant === 'mid';

  return (
    <section
      className={config.sectionClass}
      aria-labelledby={config.headingId}
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 id={config.headingId} className={config.titleClass}>
          {config.title}
        </h2>
        <p
          className={`mt-3 text-base leading-relaxed sm:text-lg ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {config.description}
        </p>
        <a
          href={whatsappUrl(config.location)}
          target="_blank"
          rel="noopener noreferrer"
          {...whatsappButtonProps(config.location)}
          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isDark
              ? 'bg-brand-600 hover:bg-brand-700 focus-visible:outline-brand-400'
              : 'bg-brand-600 hover:bg-brand-700 focus-visible:outline-brand-600'
          }`}
        >
          <WhatsAppIcon className="h-5 w-5" />
          {config.label}
        </a>
      </div>
    </section>
  );
}
