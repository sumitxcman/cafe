import { FC } from 'react';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';

export const Reviews: FC = () => {
  return (
    <section id="reviews" className="py-24 bg-cream-100/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-600 block mb-3">
            Customer Words
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-espresso-950 mb-4">
            LOVED BY COFFEE & CHAI ENTHUSIASTS
          </h2>
          <p className="font-cormorant italic text-xl text-espresso-700 font-normal">
            "Authentic reflections from guests who pause and sip with us."
          </p>
        </div>

        {/* Overall Rating Spotlight */}
        <div className="max-w-4xl mx-auto mb-16 p-8 bg-cream-50 border border-latte-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col items-center justify-center w-24 h-24 bg-espresso-900 text-cream-50 shrink-0">
              <span className="font-serif text-3xl font-bold">4.6</span>
              <div className="flex items-center text-champagne-300 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < 4 ? 'fill-champagne-300' : 'fill-champagne-300/40'} text-transparent`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-espresso-950 mb-1">
                Outstanding Guest Rating
              </h3>
              <p className="text-xs text-espresso-600">
                Based on <strong>23 verified reviews</strong> across dine-in and takeaway patrons in Kharar.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-espresso-700 divide-x divide-latte-300">
            <div className="text-center px-3">
              <span className="font-bold text-lg text-espresso-900 block font-serif">96%</span>
              <span className="text-[11px] uppercase tracking-wider text-copper-700">Recommend</span>
            </div>
            <div className="text-center px-4">
              <span className="font-bold text-lg text-espresso-900 block font-serif">4.8 / 5</span>
              <span className="text-[11px] uppercase tracking-wider text-copper-700">Ambience & Hygiene</span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-8 bg-cream-50 border border-latte-200 hover:border-copper-400 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-copper-600">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${idx < review.rating ? 'fill-copper-500 text-copper-500' : 'text-latte-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-espresso-500">{review.date}</span>
                </div>

                <p className="font-cormorant italic text-lg sm:text-xl text-espresso-900 leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-latte-200/70 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-latte-200 flex items-center justify-center font-serif text-xs font-semibold text-espresso-900">
                    {review.author[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-espresso-900">
                      {review.author}
                    </h4>
                    {review.badge && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-copper-700 font-medium">
                        <CheckCircle className="w-2.5 h-2.5" />
                        <span>{review.badge}</span>
                      </span>
                    )}
                  </div>
                </div>

                {review.favoriteItem && (
                  <span className="text-[11px] text-espresso-500 font-medium hidden sm:inline-block">
                    Ordered: <span className="text-copper-700">{review.favoriteItem}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-espresso-500">
          <p className="inline-flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-copper-600" />
            <span>Sample patron feedback gathered from customer visitor logs & table service notes.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
