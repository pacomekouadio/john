import React from 'react';
import { Utensils, Leaf, Sparkles, Award } from 'lucide-react';
import { IMAGES } from '../data';

export const CoreSushiSection: React.FC = () => {
  return (
    <section id="features" className="relative bg-[#16171a] text-white pt-8 pb-12 px-4 sm:px-6">
      {/* Title */}
      <div className="text-center max-w-md mx-auto mb-7">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-['Montserrat',sans-serif]">
          Our Core May Sushi
        </h2>
        <div className="w-8 h-0.5 bg-[#ff4d24] mx-auto my-1.5 rounded-full" />
        <p className="text-neutral-400 text-[11px] sm:text-xs">
          The culinary pillars that define the HUSH gastronomic experience.
        </p>
      </div>

      {/* Grid Layout: White Cards with Central Vertical Gourmet Photo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-center">
        
        {/* Left Column: 2 White Feature Cards */}
        <div className="flex flex-col gap-3">
          {/* Feature 1: Expert Sushi */}
          <div className="bg-white text-neutral-900 rounded-xl p-3.5 shadow-md border border-neutral-100/90 hover:border-[#ff4d24]/50 hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-6 h-6 rounded-md bg-[#ff4d24]/10 text-[#ff4d24] flex items-center justify-center mb-2">
              <Utensils className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
              Expert Sushi
            </h3>
            <p className="text-neutral-500 text-[10px] sm:text-[11px] mt-1 leading-relaxed">
              Every piece is hand-pressed by our certified Itamae masters with over 15 years of knife precision.
            </p>
          </div>

          {/* Feature 2: Fresh and Healthy */}
          <div className="bg-white text-neutral-900 rounded-xl p-3.5 shadow-md border border-neutral-100/90 hover:border-[#ff4d24]/50 hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-6 h-6 rounded-md bg-[#ff4d24]/10 text-[#ff4d24] flex items-center justify-center mb-2">
              <Leaf className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
              Fresh and Healthy
            </h3>
            <p className="text-neutral-500 text-[10px] sm:text-[11px] mt-1 leading-relaxed">
              100% wild-caught, sustainably sourced fish delivered every dawn from Tokyo Toyosu market.
            </p>
          </div>
        </div>

        {/* Center Column: Prominent Vertical Sushi Photo with Chopsticks */}
        <div className="flex justify-center my-2 md:my-0">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 group max-w-[240px] w-full aspect-[3/4] bg-neutral-900">
            <img
              src={IMAGES.featuresCenter}
              alt="Hush Core Sushi Gastronomy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            
            {/* Japanese aesthetic Kanji overlay */}
            <div className="absolute top-3 left-3 text-white/70 text-xs font-serif tracking-widest pointer-events-none">
              伝統の技
            </div>

            {/* Bottom highlight pill */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm border border-white/15 rounded-lg p-2 text-center text-white text-[10px]">
              <span className="text-[#ff6b4a] font-bold">100% Wild Sockeye</span> • Fresh Grated Wasabi
            </div>
          </div>
        </div>

        {/* Right Column: 2 White Feature Cards */}
        <div className="flex flex-col gap-3">
          {/* Feature 3: Great Atmosphere */}
          <div className="bg-white text-neutral-900 rounded-xl p-3.5 shadow-md border border-neutral-100/90 hover:border-[#ff4d24]/50 hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-6 h-6 rounded-md bg-[#ff4d24]/10 text-[#ff4d24] flex items-center justify-center mb-2">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
              Great Atmosphere
            </h3>
            <p className="text-neutral-500 text-[10px] sm:text-[11px] mt-1 leading-relaxed">
              Zen minimalist charcoal architecture with warm Hinoki wood accents and serene ambient sounds.
            </p>
          </div>

          {/* Feature 4: Quality Ingredients */}
          <div className="bg-white text-neutral-900 rounded-xl p-3.5 shadow-md border border-neutral-100/90 hover:border-[#ff4d24]/50 hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-6 h-6 rounded-md bg-[#ff4d24]/10 text-[#ff4d24] flex items-center justify-center mb-2">
              <Award className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
              Quality Ingredients
            </h3>
            <p className="text-neutral-500 text-[10px] sm:text-[11px] mt-1 leading-relaxed">
              Niigata Koshihikari rice, 10-year aged Akazu red vinegar, and real Shizuoka mountain wasabi.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
