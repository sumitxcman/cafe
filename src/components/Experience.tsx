import React from 'react';
import { Coffee, Utensils, Flame, MessageSquareHeart } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      number: '01',
      title: 'Crafted Drinks',
      subtitle: 'Specialty Brews & Signature Chai',
      desc: 'Single-origin espresso, traditional slow-simmered Kashmiri pink chai, and aromatic infusions brewed with utmost precision.',
      icon: Coffee,
    },
    {
      number: '02',
      title: 'Fresh Bites',
      subtitle: 'Gourmet Snacks & Pastries',
      desc: 'Crispy corn rolls, artisanal sourdough paninis, cheesy garlic loaves, and freshly baked molten delicacies made daily.',
      icon: Utensils,
    },
    {
      number: '03',
      title: 'Warm Ambience',
      subtitle: 'Comfortable & Work-Friendly',
      desc: 'Rich walnut wood, muted acoustic comfort, lush greenery, and soft warm lighting crafted for peaceful lingering.',
      icon: Flame,
    },
    {
      number: '04',
      title: 'Good Conversations',
      subtitle: 'Space to Connect & Unwind',
      desc: 'Whether it is a morning creative work session, a casual business meetup, or an evening with family and closest friends.',
      icon: MessageSquareHeart,
    },
  ];

  return (
    <section className="py-24 bg-cream-50 relative border-b border-latte-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 block mb-3">
            The Café Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-espresso-950 mb-5">
            Made for Moments Worth Staying For.
          </h2>
          <p className="text-base text-espresso-700 leading-relaxed font-normal max-w-2xl mx-auto">
            From your first morning coffee to late-evening conversations, every detail is designed to make your time here memorable.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="group relative p-8 bg-cream-100/70 hover:bg-cream-100 border border-latte-200 hover:border-copper-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl text-latte-400 group-hover:text-copper-600 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-cream-50 border border-latte-200 flex items-center justify-center text-espresso-800 group-hover:text-copper-600 group-hover:border-copper-300 transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-espresso-950 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-copper-700 font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-espresso-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-latte-200/60 flex items-center justify-between text-[11px] font-medium tracking-wider text-espresso-500 uppercase">
                  <span>Amayra Standard</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-400"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
