import { useState, useEffect, FC } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: FC<HeaderProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-sm border-b border-latte-200/60 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo Wordmark */}
          <a
            href="#home"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className={`font-serif tracking-[0.25em] text-2xl md:text-3xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-espresso-950' : 'text-espresso-950'
            }`}>
              AMAYRA
            </span>
            <span className="text-[9px] tracking-[0.35em] text-copper-600 font-medium uppercase -mt-0.5">
              Coffee & Tea House
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wider uppercase text-espresso-700 hover:text-copper-600 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-copper-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:09877169296"
              className="p-2.5 rounded-full text-espresso-700 hover:text-copper-600 hover:bg-latte-100 transition-colors"
              title="Call Café: 098771 69296"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream-50 bg-espresso-900 hover:bg-espresso-800 rounded-none shadow-sm hover:shadow-md transition-all duration-300 border border-espresso-800"
            >
              <Calendar className="w-3.5 h-3.5 text-copper-400" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenReservation}
              className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider bg-espresso-900 text-cream-50"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-espresso-900 hover:text-copper-600 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50/98 border-b border-latte-200 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif tracking-wider text-espresso-800 hover:text-copper-600 transition-colors py-1 border-b border-latte-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-xs font-semibold uppercase tracking-widest text-center bg-espresso-900 text-cream-50"
              >
                Reserve a Table
              </button>
              <a
                href="tel:09877169296"
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-widest text-center text-espresso-800 border border-latte-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-copper-600" />
                <span>Call Café (098771 69296)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
