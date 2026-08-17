import React from 'react';
import { Instagram, Facebook, Share2, ArrowUp, Utensils } from 'lucide-react';

interface FooterProps {
  onScrollTop: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTop, onOpenReservation }) => {
  return (
    <footer id="main-footer" className="bg-[#0b0c0e] text-neutral-400 text-xs pt-8 pb-6 px-4 sm:px-6 border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#e03d15] to-[#ff6b4a] flex items-center justify-center shadow-sm">
              <span className="text-[11px] leading-none font-bold text-white">🍣</span>
            </div>
            <span className="text-lg font-black tracking-widest text-white uppercase font-['Montserrat',sans-serif]">
              HUSH
            </span>
          </div>
          <p className="text-[11px] text-neutral-400 max-w-xs">
            Artisanal Japanese gastronomy, Edo omakase sushi & bespoke private culinary dining.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-semibold text-neutral-300">
          <a href="#hero" className="hover:text-white transition-colors">Home</a>
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#features" className="hover:text-white transition-colors">About</a>
          <a href="#promo" className="hover:text-white transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Icons & Action */}
        <div className="flex items-center gap-3">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#ff4d24] text-white flex items-center justify-center transition-colors shadow"
            title="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#ff4d24] text-white flex items-center justify-center transition-colors shadow"
            title="Facebook"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onOpenReservation}
            className="bg-white/10 hover:bg-[#ff4d24] text-white text-[10px] uppercase font-bold py-1.5 px-3 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Utensils className="w-3 h-3" />
            <span>Book Table</span>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-neutral-400">
        <div>
          © {new Date().getFullYear()} HUSH Japanese Restaurant. All Rights Reserved.
        </div>
        
        <div className="flex items-center gap-3">
          <span>Tsukiji • Shibuya • Manhattan</span>
          <button 
            onClick={onScrollTop}
            className="flex items-center gap-1 text-neutral-300 hover:text-white hover:underline transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
