import React from 'react';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cream-100">
      {/* Background with warm ambient lighting & luxury café photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Café Interior Ambiance"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Warm editorial gradient overlay: ensures text readability while keeping warm tones */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/85 to-cream-50/40 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-700 text-xs font-semibold uppercase tracking-[0.25em] mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-copper-600" />
            <span>Crafted for Slow Moments</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-espresso-950 leading-[1.1] tracking-tight mb-6">
            WHERE EVERY SIP <br />
            <span className="italic font-normal font-cormorant text-copper-700">FEELS SPECIAL.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-espresso-700 font-normal leading-relaxed max-w-xl mb-10">
            Specialty coffee, handcrafted teas and comforting bites — served in an atmosphere made for good conversations and slow moments.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-cream-50 bg-espresso-900 hover:bg-copper-600 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-espresso-900 bg-cream-50/80 hover:bg-cream-50 border border-latte-300 hover:border-copper-500 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Visit Us</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-copper-700 hover:text-copper-600 hover:underline transition-colors"
            >
              <span>Book a Table</span>
            </button>
          </div>

          {/* Supporting Badge */}
          <div className="pt-6 border-t border-latte-200/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-espresso-600 font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-copper-600" />
              <span>OPEN DAILY • 10:00 AM ONWARDS</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-copper-600" />
              <span>AMAYRA EMPORIO • KHARAR, PUNJAB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
