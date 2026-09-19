import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FoodShowcase: React.FC = () => {
  const foodItems = [
    {
      title: 'Crispy Golden Corn Rolls',
      category: 'Signature Snack',
      price: '₹220',
      image: 'https://images.unsplash.com/photo-1623253083987-26681ce4a992?auto=format&fit=crop&w=800&q=80',
      desc: 'Sweet corn and molten mozzarella with house dips.',
      span: 'col-span-12 md:col-span-7',
      aspect: 'aspect-[16/10]',
    },
    {
      title: 'Smoked Sourdough Panini',
      category: 'Gourmet Sandwich',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      desc: 'Artisanal sourdough with pesto, smoked cheese & sun-dried tomatoes.',
      span: 'col-span-12 md:col-span-5',
      aspect: 'aspect-[4/3]',
    },
    {
      title: 'Truffle & Parmesan Fries',
      category: 'Bites',
      price: '₹210',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
      desc: 'Hand-cut russets tossed in white truffle oil and aged cheese.',
      span: 'col-span-12 md:col-span-4',
      aspect: 'aspect-[4/3]',
    },
    {
      title: 'Sun-Dried Tomato Penne',
      category: 'Artisan Pasta',
      price: '₹320',
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
      desc: 'Silky roasted bell pepper reduction with herbs.',
      span: 'col-span-12 md:col-span-4',
      aspect: 'aspect-[4/3]',
    },
    {
      title: 'Belgian Molten Lava Cake',
      category: 'Decadent Dessert',
      price: '₹260',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
      desc: 'Flowing chocolate center with vanilla bean gelato.',
      span: 'col-span-12 md:col-span-4',
      aspect: 'aspect-[4/3]',
    },
  ];

  return (
    <section className="py-24 bg-latte-100/50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 block mb-3">
              Gourmet Kitchen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-espresso-950 leading-tight">
              GOOD COFFEE DESERVES GOOD COMPANY.
            </h2>
          </div>
          <div className="text-right">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-espresso-900 hover:text-copper-600 transition-colors pb-1 border-b border-espresso-900 hover:border-copper-600"
            >
              <span>Explore All Kitchen Bites</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className={`${item.span} group relative bg-cream-50 overflow-hidden border border-latte-200 hover:border-copper-400 transition-all duration-300 shadow-sm`}
            >
              <div className={`relative ${item.aspect} overflow-hidden bg-espresso-900`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-copper-300 block mb-1">
                    {item.category} • {item.price}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-cream-50 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cream-200/80 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
