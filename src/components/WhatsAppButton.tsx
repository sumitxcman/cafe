import { FC } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: FC = () => {
  const phoneNumber = '919877169296';
  const defaultMessage = encodeURIComponent('Hi Amayra Café, I would like to inquire about a table reservation or order.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden md:inline-block mr-3 px-3.5 py-1.5 bg-espresso-950/90 backdrop-blur-md text-cream-50 text-xs font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-copper-500/30 whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none"
      >
        {/* Subtle pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
