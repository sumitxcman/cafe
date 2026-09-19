import React, { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-cream-50 relative border-b border-latte-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 block mb-3">
            Visual Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-espresso-950 mb-4">
            MOMENTS AT AMAYRA
          </h2>
          <p className="font-cormorant italic text-xl text-espresso-700 font-normal">
            "A glimpse into the textures, aromas, and gatherings that define our space."
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-16">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'bg-espresso-900 text-cream-50 border-espresso-900 shadow-sm'
                    : 'bg-cream-100 text-espresso-800 border-latte-200 hover:border-copper-500 hover:text-copper-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Luxury Masonry / Asymmetric Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden bg-cream-100 border border-latte-200 hover:border-copper-400 transition-all duration-300 shadow-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-bold tracking-widest text-copper-300 block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-cream-50 font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-200/80 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
