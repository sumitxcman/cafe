import React from 'react';
import { Utensils, ShoppingBag, Truck, Wifi, Lamp, Users } from 'lucide-react';

export const Ambience: React.FC = () => {
  const services = [
    {
      title: 'Dine-In Experience',
      desc: 'Plush velvet seating, natural wood accents, warm lighting, and quiet corners for work or conversation.',
      badge: 'DINE IN',
      icon: Utensils,
    },
    {
      title: 'Quick Takeaway',
      desc: 'Eco-friendly insulated cups & boxes prepared quickly for your commute or quick coffee break.',
      badge: 'TAKEAWAY',
      icon: ShoppingBag,
    },
    {
      title: 'Doorstep Delivery',
      desc: 'Order your favorite artisanal coffee and hot bites delivered fresh across Kharar & Mohali.',
      badge: 'DELIVERY',
      icon: Truck,
    },
  ];

  const ambienceHighlights = [
    { icon: Wifi, title: 'High-Speed Wi-Fi', subtitle: 'Work-Friendly' },
    { icon: Lamp, title: 'Warm Ambience', subtitle: 'Acoustic Comfort' },
    { icon: Users, title: 'Spacious Seating', subtitle: 'Family & Friends' },
  ];

  return (
    <section className="py-24 bg-espresso-950 text-cream-50 relative overflow-hidden">
      {/* Background Subtle Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-copper-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-400 block mb-3">
            The Ambiance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-cream-50 mb-4">
            STAY A LITTLE LONGER.
          </h2>
          <p className="text-sm sm:text-base text-cream-300/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Thoughtfully designed for comfort, work, and memorable evenings. Settle into quiet alcoves or share lively tables with loved ones.
          </p>
        </div>

        {/* Cinematic Dual Ambience Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-7 aspect-[16/10] overflow-hidden border border-espresso-800 relative group">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
              alt="Comfortable work-friendly seating and warm interiors"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-xs uppercase tracking-widest text-champagne-300 font-bold block mb-1">
                Quiet Focus & Remote Work
              </span>
              <p className="font-serif text-lg text-cream-100">
                Comfortable power sockets & ergonomic seating
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-[4/3] lg:aspect-[16/14] overflow-hidden border border-espresso-800 relative group">
            <img
              src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80"
              alt="Evening ambience with friends"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-xs uppercase tracking-widest text-copper-300 font-bold block mb-1">
                Evening Hangouts
              </span>
              <p className="font-serif text-lg text-cream-100">
                Warm lighting & soothing melodies
              </p>
            </div>
          </div>
        </div>

        {/* 3 Ambience Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {ambienceHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-mocha-900/60 border border-espresso-800 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-espresso-900 border border-copper-500/30 flex items-center justify-center text-copper-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cream-100 uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-xs text-cream-300/60 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Core Services: DINE-IN, TAKEAWAY, DELIVERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-espresso-800">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-mocha-900/40 border border-espresso-800/80 hover:border-copper-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-300 px-3 py-1 bg-espresso-900 border border-copper-500/30">
                      {service.badge}
                    </span>
                    <Icon className="w-5 h-5 text-copper-400" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream-100 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-300/70 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-espresso-800/60 text-xs text-copper-400 font-medium tracking-wider uppercase">
                  Available Daily 10 AM Onwards
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
