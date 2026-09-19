import React from 'react';
import { Droplet, Thermometer, Compass, Flame } from 'lucide-react';

export const SignaturePour: React.FC = () => {
  const pourSpecs = [
    {
      icon: Compass,
      label: 'Single Estate Beans',
      detail: 'Chikmagalur 100% Arabica, Shade Grown at 4,200 ft.',
    },
    {
      icon: Thermometer,
      label: 'Precision Temperature',
      detail: 'Extracted precisely at 93.5°C for optimal sweetness & zero bitterness.',
    },
    {
      icon: Droplet,
      label: 'Brew Ratio',
      detail: '1:2 Golden Extraction yielding velvety crema with dark cocoa notes.',
    },
    {
      icon: Flame,
      label: 'Roast Profile',
      detail: 'Medium-Dark artisanal small-batch drum roast.',
    },
  ];

  return (
    <section className="py-24 bg-espresso-950 text-cream-50 relative overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-copper-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mocha-800/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase - Dual Editorial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden border border-espresso-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
                alt="Signature Coffee Pour & Latte Art"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-copper-400 font-semibold block mb-1">
                  Artisanal Extraction
                </span>
                <p className="font-serif text-lg sm:text-xl text-cream-50 font-medium">
                  The Golden Ratio Pour
                </p>
              </div>
            </div>

            {/* Overlapping small floating detail box */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 p-5 bg-mocha-900/95 border border-copper-500/30 backdrop-blur-md shadow-2xl">
              <span className="text-[10px] uppercase tracking-widest text-champagne-300 font-bold block mb-1">
                Tasting Notes
              </span>
              <p className="font-serif text-sm text-cream-100 italic">
                Dark Chocolate, Roasted Hazelnuts, Caramel Finish.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-copper-400 block mb-4">
              Signature Pour
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream-50 leading-tight mb-6">
              "Beautifully brewed. <br />
              <span className="font-cormorant italic font-normal text-champagne-300">
                Perfectly served."
              </span>
            </h2>

            <p className="text-base text-cream-300/80 font-normal leading-relaxed mb-10">
              Every cup begins long before water meets grind. We source high-elevation Indian Arabica and authentic Kashmiri tea leaves, calibrated daily by our baristas to celebrate terroir, aromatics, and nuanced character.
            </p>

            {/* Pour Specification Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-espresso-800">
              {pourSpecs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-espresso-900 border border-copper-500/30 flex items-center justify-center shrink-0 text-copper-400 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-cream-100 mb-1">
                        {spec.label}
                      </h4>
                      <p className="text-xs text-cream-300/70 leading-relaxed">
                        {spec.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <a
                href="#menu"
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-champagne-300 hover:text-white transition-colors"
              >
                <span>View Full Beverage Roster</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
