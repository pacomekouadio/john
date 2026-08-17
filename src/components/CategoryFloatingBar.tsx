import React from 'react';
import { Utensils, Sparkles } from 'lucide-react';

interface CategoryFloatingBarProps {
  onSelectCategory: (cat: string) => void;
  onOpenReservation: () => void;
}

export const CategoryFloatingBar: React.FC<CategoryFloatingBarProps> = ({
  onSelectCategory,
  onOpenReservation,
}) => {
  return (
    <div className="relative z-20 -my-5 px-3 sm:px-6 flex justify-center">
      <div className="bg-white/95 backdrop-blur-md text-neutral-800 rounded-full py-1.5 px-2.5 sm:px-3 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] border border-neutral-200/90 flex items-center justify-between gap-1.5 sm:gap-2 max-w-sm sm:max-w-md w-full">
        
        {/* Left Category Button */}
        <button
          onClick={() => onSelectCategory('nigiri')}
          className="flex-1 text-center py-1 px-1.5 sm:px-2 rounded-full hover:bg-neutral-100 text-[9px] sm:text-[11px] font-bold text-neutral-700 hover:text-neutral-900 transition-colors truncate"
        >
          <span className="truncate">Nigiri & Maki</span>
        </button>

        {/* Center Prominent Orange Button */}
        <button
          onClick={onOpenReservation}
          className="bg-[#ff4d24] hover:bg-[#ff3b0d] active:scale-95 text-white font-bold text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 rounded-full shadow-md shadow-[#ff4d24]/30 transition-all flex items-center gap-1 shrink-0 uppercase tracking-wider cursor-pointer"
        >
          <Sparkles className="w-3 h-3 hidden sm:inline" />
          <span className="truncate">Menu / Reservation</span>
        </button>

        {/* Right Category Button */}
        <button
          onClick={() => onSelectCategory('sashimi')}
          className="flex-1 text-center py-1 px-1.5 sm:px-2 rounded-full hover:bg-neutral-100 text-[9px] sm:text-[11px] font-bold text-neutral-700 hover:text-neutral-900 transition-colors truncate"
        >
          <span className="truncate">Sashimi & Sets</span>
        </button>

      </div>
    </div>
  );
};
