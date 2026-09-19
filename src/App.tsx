import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { SignatureMenu } from './components/SignatureMenu';
import { SignaturePour } from './components/SignaturePour';
import { OurStory } from './components/OurStory';
import { FoodShowcase } from './components/FoodShowcase';
import { Ambience } from './components/Ambience';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-50 text-espresso-900 font-sans selection:bg-copper-500 selection:text-cream-50">
      {/* Sticky Header Navigation */}
      <Header onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* 2. The Café Experience (4 Pillars) */}
        <Experience />

        {/* 3. Signature Menu (Filterable Categories) */}
        <SignatureMenu />

        {/* 4. Signature Pour Feature (Dark Espresso Spotlight) */}
        <SignaturePour />

        {/* 5. Our Story ("More Than A Café") */}
        <OurStory />

        {/* 6. Food & Gourmet Kitchen Showcase */}
        <FoodShowcase />

        {/* 7. Ambience & Services (Dark Immersion + Dine-in/Takeaway/Delivery) */}
        <Ambience />

        {/* 8. Luxury Masonry Gallery */}
        <Gallery />

        {/* 9. Customer Reviews & 4.6 Rating */}
        <Reviews />

        {/* 10. Visit Us / Location & Direct Actions */}
        <Location />

        {/* 11. Instagram Moments Grid */}
        <InstagramFeed />
      </main>

      {/* 12. Sophisticated Dark Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
};

export default App;
