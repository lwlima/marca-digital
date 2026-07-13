import { whatsappUrl } from '../config/site';
import { whatsappButtonProps } from '../config/analytics';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl('floating')}
      target="_blank"
      rel="noopener noreferrer"
      {...whatsappButtonProps('floating')}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Falar pelo WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
