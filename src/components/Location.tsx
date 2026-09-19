import React from 'react';
import { MapPin, Phone, Clock, Navigation, UtensilsCrossed, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="visit" className="py-24 bg-cream-50 relative border-b border-latte-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Location Details & Actions */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 block mb-3">
              Find Our Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso-950 mb-6">
              VISIT US IN KHARAR
            </h2>
            <p className="text-base text-espresso-700 leading-relaxed font-normal mb-8">
              Conveniently located at Amayra Emporio with ample parking, serene indoor atmosphere, and warm hospitality waiting for you.
            </p>

            {/* Address & Timings List */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-latte-100 border border-latte-300 flex items-center justify-center shrink-0 text-copper-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-espresso-950 mb-1">
                    Location Address
                  </h4>
                  <p className="text-sm text-espresso-800 leading-relaxed">
                    AMAYRA EMPORIO, 96–97<br />
                    Kharar, Punjab 140301
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-latte-100 border border-latte-300 flex items-center justify-center shrink-0 text-copper-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-espresso-950 mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-espresso-800">
                    Open Daily: <span className="font-semibold text-espresso-950">10:00 AM onwards</span> till Late Evening
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-latte-100 border border-latte-300 flex items-center justify-center shrink-0 text-copper-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-espresso-950 mb-1">
                    Direct Café Line
                  </h4>
                  <a
                    href="tel:09877169296"
                    className="text-sm text-copper-700 hover:text-copper-800 font-semibold transition-colors"
                  >
                    098771 69296
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-latte-100 border border-latte-300 flex items-center justify-center shrink-0 text-copper-700">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-espresso-950 mb-1">
                    Available Services
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2.5 py-0.5 bg-cream-200 text-espresso-800 text-xs font-medium">Dine-in</span>
                    <span className="px-2.5 py-0.5 bg-cream-200 text-espresso-800 text-xs font-medium">Takeaway</span>
                    <span className="px-2.5 py-0.5 bg-cream-200 text-espresso-800 text-xs font-medium">Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://maps.google.com/?q=Amayra+Emporio+Kharar+Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-cream-50 bg-espresso-900 hover:bg-copper-600 transition-all duration-300 shadow-md group"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="tel:09877169296"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-espresso-900 bg-cream-50 hover:bg-latte-100 border border-latte-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-copper-600" />
                <span>Call Café</span>
              </a>
            </div>
          </div>

          {/* Styled Clean Location Map Frame */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden bg-cream-100 border border-latte-300 shadow-lg aspect-[4/3] sm:aspect-[16/11]">
              <iframe
                title="Amayra Emporio Location Map"
                src="https://maps.google.com/maps?q=Amayra%20Emporio,%20Kharar,%20Punjab%20140301&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(92%) brightness(96%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              <div className="absolute top-4 left-4 bg-espresso-900/90 backdrop-blur-sm text-cream-50 px-4 py-2 border border-copper-500/30 text-xs shadow-md">
                <span className="font-semibold block font-serif">Amayra Emporio</span>
                <span className="text-[10px] text-copper-300">Kharar, Punjab 140301</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
