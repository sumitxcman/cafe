import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { Sparkles, UtensilsCrossed } from 'lucide-react';

export const SignatureMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('coffee');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cream-100/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 block mb-3">
            Curated Selections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-espresso-950 mb-4">
            OUR SIGNATURES
          </h2>
          <p className="font-cormorant italic text-xl text-espresso-700 font-normal">
            "Things you'll want to come back for."
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-16">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 sm:px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'bg-espresso-900 text-cream-50 border-espresso-900 shadow-sm'
                    : 'bg-cream-50 text-espresso-800 border-latte-300 hover:border-copper-500 hover:text-copper-700'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-cream-50 border border-latte-200 hover:border-copper-400/80 transition-all duration-300 overflow-hidden flex flex-col shadow-sm hover:shadow-md"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-espresso-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge Tag */}
                {item.tag && (
                  <div className="absolute top-3 left-3 bg-espresso-900/90 backdrop-blur-sm text-champagne-300 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest border border-champagne-300/30 flex items-center gap-1.5">
                    <Sparkles className="w-2.5 h-2.5 text-copper-400" />
                    <span>{item.tag}</span>
                  </div>
                )}

                {/* Origin or Note Badge */}
                {item.originOrNotes && (
                  <div className="absolute bottom-3 left-3 right-3 bg-espresso-950/80 backdrop-blur-sm text-cream-200 px-2.5 py-1 text-[11px] truncate">
                    {item.originOrNotes}
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-espresso-950 group-hover:text-copper-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg font-semibold text-espresso-900 shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-latte-200/60 flex items-center justify-between text-xs text-copper-700 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <UtensilsCrossed className="w-3 h-3 text-copper-500" />
                    <span>Freshly Prepared</span>
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-espresso-500 group-hover:text-espresso-900 transition-colors">
                    Dine-in / Takeaway
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary & Freshness Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-espresso-600 font-medium tracking-wide uppercase">
            All beverages can be customized with Oat / Almond Milk & sugar preferences upon request.
          </p>
        </div>
      </div>
    </section>
  );
};
