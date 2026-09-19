import { FC } from 'react';
import { Instagram, Facebook, Phone, MapPin, Clock, ArrowUp, MessageCircle } from 'lucide-react';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-950 text-cream-50 pt-20 pb-12 border-t border-espresso-800 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-espresso-800/80">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block mb-4">
              <span className="font-serif tracking-[0.25em] text-2xl md:text-3xl font-semibold text-cream-50 block">
                AMAYRA
              </span>
              <span className="text-[10px] tracking-[0.35em] text-copper-400 font-medium uppercase block -mt-1">
                Coffee & Tea House
              </span>
            </a>

            <p className="text-sm text-cream-300/80 leading-relaxed max-w-sm mb-6">
              Specialty coffee, handcrafted tea and delicious moments. A sanctuary in Kharar designed for slow moments, great coffee and memorable conversations.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-900 border border-copper-500/30 flex items-center justify-center text-copper-400 hover:text-white hover:bg-copper-600 hover:border-copper-600 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-900 border border-copper-500/30 flex items-center justify-center text-copper-400 hover:text-white hover:bg-copper-600 hover:border-copper-600 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919877169296?text=Hi%20Amayra%20Caf%C3%A9%2C%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20or%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-900 border border-copper-500/30 flex items-center justify-center text-copper-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-champagne-300 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-cream-300/70">
              <li>
                <a href="#home" className="hover:text-copper-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-copper-400 transition-colors">Signatures Menu</a>
              </li>
              <li>
                <a href="#story" className="hover:text-copper-400 transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-copper-400 transition-colors">Visual Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-copper-400 transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-copper-400 transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit & Timings (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.25em] text-champagne-300 mb-6">
              Visit & Contact
            </h4>
            <div className="space-y-4 text-xs text-cream-300/80 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <p>
                  AMAYRA EMPORIO, 96–97,<br />
                  Kharar, Punjab 140301
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-copper-400 shrink-0" />
                <a href="tel:09877169296" className="text-cream-100 hover:text-copper-400 font-semibold transition-colors">
                  098771 69296
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-copper-400 shrink-0" />
                <span>Open Daily from 10:00 AM onwards</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-espresso-900">
              <span className="text-[10px] uppercase tracking-widest text-copper-400 font-bold block mb-1">
                Services Available
              </span>
              <p className="text-xs text-cream-300/60">
                Dine-in • Takeaway • Doorstep Delivery
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar with Brand Tagline & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-300/50">
          <div className="font-cormorant italic text-sm tracking-wider text-champagne-300/90 text-center md:text-left">
            CRAFTED FOR GOOD COFFEE & GREAT CONVERSATIONS.
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} AMAYRA Café House. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-espresso-900 hover:bg-copper-600 text-copper-300 hover:text-cream-50 border border-espresso-800 transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
