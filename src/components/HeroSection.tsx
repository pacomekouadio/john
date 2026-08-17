import React from 'react';
import { ArrowRight, Sparkles, ChefHat } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroSectionProps {
  onDiscoverMenu: () => void;
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDiscoverMenu, onOpenReservation }) => {
  return (
    <section id="hero" className="relative bg-[#131417] text-white pt-6 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff4d24]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-48 h-48 bg-orange-950/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-4">
        {/* Left Column: Typography & Action */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#ff6b4a] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d24] animate-pulse" />
            WELCOME TO HUSH
          </div>

          {/* Main Display Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-black tracking-tight leading-[1.12] text-white uppercase font-['Montserrat',sans-serif] mb-3">
            Hush Modern <br />
            <span className="text-neutral-100">Restaurant</span>
          </h1>

          {/* Paragraph */}
          <p className="text-neutral-400 text-xs sm:text-[13px] leading-relaxed max-w-sm mb-5 font-normal">
            Immerse yourself in authentic Japanese gastronomy. Every slice of Tsukiji-grade salmon and hand-pressed Akazu nigiri is crafted to perfection by master chefs.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              id="hero-discover-btn"
              onClick={onDiscoverMenu}
              className="group bg-[#ff4d24] hover:bg-[#ff3b0d] active:scale-95 text-white text-xs uppercase tracking-wider font-bold py-2 px-5 rounded-full shadow-lg shadow-[#ff4d24]/25 flex items-center gap-2 transition-all hover:gap-2.5 cursor-pointer"
            >
              <span>Discover Menu</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={onOpenReservation}
              className="text-neutral-300 hover:text-white text-xs font-semibold px-3 py-2 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ChefHat className="w-3.5 h-3.5 text-[#ff4d24]" />
              <span>Book Table</span>
            </button>
          </div>

          {/* Micro badges below */}
          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10 text-[10px] text-neutral-400">
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#ff4d24]" />
              <span>Tsukiji Direct</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-neutral-600" />
            <div>Michelin Guide 2025</div>
            <div className="w-1 h-1 rounded-full bg-neutral-600" />
            <div className="text-neutral-300 font-medium">★ 4.9 (1,200+)</div>
          </div>
        </div>

        {/* Right Column: Hero Slate Sushi Photo & Culinary Details */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-4 md:mt-0">
          <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
            {/* Visual glow backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4d24]/20 to-orange-500/10 rounded-2xl blur-lg group-hover:opacity-100 transition duration-500 opacity-60" />
            
            {/* Main Slate Platter Photo */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[4/3] sm:aspect-square">
              <img
                src={IMAGES.heroSlate}
                alt="Hush Restaurant Premium Salmon Sushi Platter"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Overlay subtle gradient for authentic dark slate look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Chef Badge Tag */}
              <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md border border-white/15 px-2 py-1 rounded-md text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d24]" />
                Omakase Special
              </div>

              {/* Bottom detail pill */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/75 backdrop-blur-md border border-white/10 rounded-lg p-2 flex items-center justify-between text-[11px] text-white">
                <div>
                  <div className="font-semibold text-white truncate">Grand Omakase Platter</div>
                  <div className="text-[9px] text-neutral-300">Salmon, Otoro & Maki</div>
                </div>
                <div className="text-right">
                  <div className="text-[#ff6b4a] font-bold">$42.00</div>
                  <div className="text-[8px] text-neutral-400">12 pcs</div>
                </div>
              </div>
            </div>

            {/* Scattered aesthetic seasoning dots / Japanese flair */}
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#ff4d24]/40 blur-sm pointer-events-none" />
            <div className="absolute -top-2 -right-2 text-neutral-500 text-[10px] font-mono select-none pointer-events-none">
              旬 • 鮨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
