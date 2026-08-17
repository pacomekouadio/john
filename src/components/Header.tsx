import React, { useState } from 'react';
import { Menu as MenuIcon, X, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#features' },
    { label: 'Services', href: '#features' },
    { label: 'Gallery', href: '#promo' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#16171b]/95 backdrop-blur-md border-b border-white/5 py-2.5 px-3 sm:px-5 transition-all">
      <div className="flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          {/* Stylized Red/Orange Japanese Sushi Emblem */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#e03d15] to-[#ff6b4a] flex items-center justify-center shadow-sm shadow-[#ff4d24]/30 group-hover:scale-105 transition-transform">
            <span className="text-[13px] leading-none font-bold text-white tracking-tighter">🍣</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-widest text-white uppercase font-['Montserrat',sans-serif]">
              HUSH
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs text-neutral-300 font-medium tracking-wide">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`hover:text-white transition-colors relative py-1 ${
                activeSection === item.href.replace('#', '') ? 'text-[#ff4d24] font-semibold' : ''
              }`}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff4d24] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right: Reservation Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            id="header-reservation-btn"
            onClick={onOpenReservation}
            className="bg-[#ff4d24] hover:bg-[#ff3b0d] active:scale-95 text-white text-[11px] sm:text-xs uppercase tracking-wider font-bold py-1.5 px-3 sm:px-4 rounded-full shadow-md shadow-[#ff4d24]/20 transition-all hover:shadow-lg hover:shadow-[#ff4d24]/30 cursor-pointer"
          >
            RESERVATION
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-neutral-300 hover:text-white rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 pt-2 pb-3 border-t border-white/10 flex flex-col gap-2 text-sm text-neutral-200 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 px-1 py-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-2.5 py-1.5 rounded hover:bg-white/10 hover:text-[#ff4d24] transition-colors text-xs font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 px-1 flex items-center justify-between border-t border-white/5 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1">
              <UtensilsCrossed className="w-3 h-3 text-[#ff4d24]" /> Edo Style Omakase
            </span>
            <span className="text-[#ff4d24] font-semibold">Open Today</span>
          </div>
        </div>
      )}
    </header>
  );
};
