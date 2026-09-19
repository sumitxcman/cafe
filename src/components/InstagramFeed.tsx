import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const feedImages = [
    {
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80',
      caption: 'Morning espresso ritual in progress.',
    },
    {
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
      caption: 'Quiet corners for slow readers and deep thinkers.',
    },
    {
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&q=80',
      caption: 'Royal Kashmiri Pink Chai with crushed pistachios.',
    },
    {
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
      caption: 'Toasted gourmet sourdough bites fresh from the kitchen.',
    },
    {
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
      caption: 'Warm evening lighting and shared laughter.',
    },
  ];

  return (
    <section className="py-20 bg-cream-100/40 border-b border-latte-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 block mb-2">
              Instagram Diary
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-espresso-950">
              FOLLOW THE MOMENTS.
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-cream-50 bg-espresso-900 hover:bg-copper-600 transition-all duration-300 shadow-sm"
          >
            <Instagram className="w-4 h-4 text-copper-400" />
            <span>Follow Us on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 5-Column Curated Lifestyle Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {feedImages.map((post, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-espresso-900 border border-latte-300 block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <Instagram className="w-6 h-6 text-champagne-300 mb-2" />
                <p className="text-[11px] text-cream-100 line-clamp-3 font-medium">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
