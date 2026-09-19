import React from 'react';
import { Heart, Sparkles, Coffee } from 'lucide-react';

export const OurStory: React.FC = () => {
  const highlights = [
    {
      title: 'Fresh Ingredients',
      desc: 'Sourced daily from artisanal bakers and verified spice estates.',
      icon: Sparkles,
    },
    {
      title: 'Thoughtful Preparation',
      desc: 'Small batches, calibrated brew temperatures, and handmade touches.',
      icon: Coffee,
    },
    {
      title: 'Warm Hospitality',
      desc: 'Rooted in timeless Punjabi warmth, made for comfort and slow connection.',
      icon: Heart,
    },
  ];

  return (
    <section id="story" className="py-24 bg-cream-50 relative border-b border-latte-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 block mb-3">
              Rooted in Kharar, Punjab
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso-950 leading-[1.15] mb-6">
              MORE THAN A CAFÉ.
            </h2>

            <blockquote className="font-cormorant italic text-xl sm:text-2xl text-espresso-800 leading-snug border-l-2 border-copper-500 pl-4 my-4">
              "We believe a great café is more than coffee and food. It is a place to pause, connect, work, celebrate and enjoy the little moments."
            </blockquote>

            <p className="text-sm sm:text-base text-espresso-700 leading-relaxed font-normal mb-8">
              Nestled in Amayra Emporio, Amayra was founded with a singular passion: to create an elevated sanctuary for coffee aficionados, chai devotees, and friends seeking genuine connection. We pair centuries-old chai rituals with modern third-wave specialty coffee culture.
            </p>

            {/* 3 Highlights */}
            <div className="space-y-4 pt-4 border-t border-latte-200">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-latte-100 flex items-center justify-center shrink-0 text-copper-600 mt-0.5 border border-latte-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-espresso-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-espresso-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Editorial Dual Imagery */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative">
              {/* Primary Large Image */}
              <div className="aspect-[4/5] overflow-hidden shadow-xl border border-latte-300">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Amayra Café Interior & Slow Lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Smaller Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-3/5 aspect-square overflow-hidden shadow-2xl border-4 border-cream-50">
                <img
                  src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
                  alt="Good Conversations Over Coffee"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Luxury Badge Accent */}
              <div className="absolute top-6 right-6 bg-espresso-900/90 backdrop-blur-sm text-champagne-300 px-4 py-2 border border-champagne-300/30 text-[10px] uppercase font-bold tracking-widest shadow-lg">
                ESTD • Kharar
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
