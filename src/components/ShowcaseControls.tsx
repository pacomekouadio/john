import React from 'react';
import { Smartphone, Monitor, Globe, Sparkles, Utensils } from 'lucide-react';

interface ShowcaseControlsProps {
  isMockupFrame: boolean;
  onToggleFrame: () => void;
  currentLang: string;
  onToggleLang: () => void;
  orderCount: number;
  onOpenReservation: () => void;
}

export const ShowcaseControls: React.FC<ShowcaseControlsProps> = ({
  isMockupFrame,
  onToggleFrame,
  currentLang,
  onToggleLang,
  orderCount,
  onOpenReservation,
}) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#1b1c1f]/90 backdrop-blur-md border-b border-white/10 py-1.5 px-3 sm:px-4 flex items-center justify-between text-xs text-neutral-300 shadow-md">
      {/* Left indicator */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ff4d24] animate-ping" />
        <span className="font-bold text-white uppercase tracking-wider text-[10px] sm:text-[11px] font-['Montserrat',sans-serif]">
          HUSH Showcase Studio
        </span>
        <span className="hidden md:inline text-neutral-500 text-[10px]">
          • Pixel-Perfect 1:1 Reproduction
        </span>
      </div>

      {/* Center / Right controls */}
      <div className="flex items-center gap-2">
        {/* Frame Toggle (Desktop only) */}
        <button
          onClick={onToggleFrame}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[10px] font-semibold transition-colors border border-white/10"
          title="Toggle between portrait mockup view and full screen view"
        >
          {isMockupFrame ? (
            <>
              <Monitor className="w-3 h-3 text-[#ff4d24]" />
              <span>Full Browser</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3 h-3 text-[#ff4d24]" />
              <span>Mockup Frame (480px)</span>
            </>
          )}
        </button>

        {/* Language switch */}
        <button
          onClick={onToggleLang}
          className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white text-[10px] font-bold uppercase transition-colors"
        >
          <Globe className="w-3 h-3 text-neutral-400" />
          <span>{currentLang}</span>
        </button>

        {/* Quick Order Cart / Reservation trigger */}
        <button
          onClick={onOpenReservation}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff4d24] hover:bg-[#ff3b0d] text-white text-[10px] font-bold uppercase tracking-wider transition-all shadow-sm shadow-[#ff4d24]/30"
        >
          <Utensils className="w-3 h-3" />
          <span>Book</span>
          {orderCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-black/50 text-white text-[9px] flex items-center justify-center font-bold">
              {orderCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
