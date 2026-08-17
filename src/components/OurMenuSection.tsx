import React from 'react';
import { Plus, Utensils, Sparkles, ChevronRight } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface OurMenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenFullMenu: () => void;
}

export const OurMenuSection: React.FC<OurMenuSectionProps> = ({ onSelectItem, onOpenFullMenu }) => {
  const leftItem = MENU_ITEMS[0]; // Sake Nigiri
  const centerItem = MENU_ITEMS[1]; // Omakase Set
  const rightItem = MENU_ITEMS[2]; // Salmon Sashimi

  return (
    <section id="menu" className="relative bg-white text-neutral-900 pt-6 pb-12 px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-md mx-auto mb-7">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 font-['Montserrat',sans-serif]">
          Our Menu
        </h2>
        <div className="w-8 h-0.5 bg-[#ff4d24] mx-auto my-1.5 rounded-full" />
        <p className="text-neutral-500 text-[11px] sm:text-xs leading-relaxed">
          Crafted fresh daily with the finest seasonal catch from Toyosu fish market and authentic Akazu sushi rice.
        </p>
      </div>

      {/* 3-Card Layout matching the exact mockup composition */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-3 items-stretch">
        
        {/* Left Card: Image with details below */}
        <div 
          onClick={() => onSelectItem(leftItem)}
          className="group bg-neutral-50 hover:bg-white rounded-xl p-2.5 border border-neutral-200/80 hover:border-[#ff4d24]/40 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] mb-2.5 bg-neutral-100">
              <img
                src={leftItem.imageUrl}
                alt={leftItem.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-1.5 right-1.5 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                ${leftItem.price.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#ff4d24] text-[10px] font-semibold uppercase mb-0.5">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Nigiri</span>
            </div>
            <h3 className="text-xs sm:text-[13px] font-bold text-neutral-900 line-clamp-1 group-hover:text-[#ff4d24] transition-colors">
              {leftItem.name}
            </h3>
            <p className="text-neutral-500 text-[10px] sm:text-[11px] line-clamp-2 mt-1 leading-snug">
              {leftItem.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-200/60">
            <span className="text-[10px] text-neutral-400 font-medium">{leftItem.pieces} pieces</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectItem(leftItem);
              }}
              className="w-6 h-6 rounded-full bg-neutral-900 group-hover:bg-[#ff4d24] text-white flex items-center justify-center transition-colors shadow-sm"
              title="View item details"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center Card: Elevated Featured Item with Orange Highlights */}
        <div 
          onClick={() => onSelectItem(centerItem)}
          className="group bg-gradient-to-b from-neutral-900 to-neutral-950 text-white rounded-xl p-3 border border-neutral-800 shadow-xl hover:border-[#ff4d24]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
        >
          {/* Accent corner pill */}
          <div className="absolute top-2 right-2 bg-[#ff4d24] text-white text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider shadow">
            Chef Special
          </div>

          <div>
            <div className="w-7 h-7 rounded-lg bg-[#ff4d24]/20 border border-[#ff4d24]/40 flex items-center justify-center text-[#ff6b4a] mb-2.5">
              <Utensils className="w-3.5 h-3.5" />
            </div>

            <h3 className="text-sm font-bold text-white uppercase tracking-tight group-hover:text-[#ff6b4a] transition-colors">
              {centerItem.name}
            </h3>

            <p className="text-neutral-300 text-[10px] sm:text-[11px] mt-1.5 leading-relaxed">
              {centerItem.description}
            </p>

            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-lg font-black text-[#ff6b4a]">${centerItem.price.toFixed(2)}</span>
              <span className="text-[10px] text-neutral-400">/ 8 curated pieces</span>
            </div>
          </div>

          <div className="mt-4 pt-2.5 border-t border-neutral-800 flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectItem(centerItem);
              }}
              className="w-full bg-[#ff4d24] hover:bg-[#ff3b0d] active:scale-95 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-[#ff4d24]/30 transition-all"
            >
              <span>Order Special</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right Card: Image with details below */}
        <div 
          onClick={() => onSelectItem(rightItem)}
          className="group bg-neutral-50 hover:bg-white rounded-xl p-2.5 border border-neutral-200/80 hover:border-[#ff4d24]/40 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] mb-2.5 bg-neutral-100">
              <img
                src={rightItem.imageUrl}
                alt={rightItem.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-1.5 right-1.5 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                ${rightItem.price.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#ff4d24] text-[10px] font-semibold uppercase mb-0.5">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Sashimi</span>
            </div>
            <h3 className="text-xs sm:text-[13px] font-bold text-neutral-900 line-clamp-1 group-hover:text-[#ff4d24] transition-colors">
              {rightItem.name}
            </h3>
            <p className="text-neutral-500 text-[10px] sm:text-[11px] line-clamp-2 mt-1 leading-snug">
              {rightItem.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-200/60">
            <span className="text-[10px] text-neutral-400 font-medium">{rightItem.pieces} pieces</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectItem(rightItem);
              }}
              className="w-6 h-6 rounded-full bg-neutral-900 group-hover:bg-[#ff4d24] text-white flex items-center justify-center transition-colors shadow-sm"
              title="View item details"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* View All Menu CTA */}
      <div className="text-center mt-6">
        <button
          onClick={onOpenFullMenu}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-neutral-700 hover:text-[#ff4d24] uppercase tracking-wider py-1 px-3 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <span>View Complete Omakase Menu</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
};
