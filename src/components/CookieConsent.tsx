import { useEffect, useState } from 'react';
import {
  getCookieConsent,
  loadGoogleAnalytics,
  setCookieConsent,
} from '../lib/loadAnalytics';

interface Props {
  measurementId?: string;
}

export default function CookieConsent({ measurementId }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();

    if (consent === 'accepted' && measurementId) {
      loadGoogleAnalytics(measurementId);
      return;
    }

    if (!consent) {
      setVisible(true);
    }
  }, [measurementId]);

  function accept() {
    setCookieConsent('accepted');
    setVisible(false);
    if (measurementId) {
      loadGoogleAnalytics(measurementId);
    }
  }

  function reject() {
    setCookieConsent('rejected');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-brand-800 bg-brand-950 p-4 shadow-2xl sm:p-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm leading-relaxed text-slate-200">
          <p id="cookie-consent-title" className="font-semibold text-white">
            Cookies e privacidade
          </p>
          <p id="cookie-consent-description" className="mt-1">
            Utilizamos cookies analíticos para entender como você usa o site e
            melhorar nossos serviços. Você pode aceitar ou recusar o
            rastreamento.{' '}
            <a
              href="/privacidade"
              className="text-brand-400 underline hover:text-brand-300"
            >
              Política de Privacidade
            </a>
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={reject}
            className="rounded-lg border border-brand-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-brand-900"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
