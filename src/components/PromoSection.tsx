import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { IMAGES } from '../data';

interface PromoSectionProps {
  onOpenReservation: () => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="promo" className="relative bg-[#111215] text-white pt-8 pb-14 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-12 w-64 h-64 bg-[#ff4d24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
        
        {/* Left Column: Promotion Typography */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-1 text-[#ff6b4a] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-2">
            <Flame className="w-3 h-3 text-[#ff4d24]" />
            <span>Best Sushi in Town</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-[26px] font-black tracking-tight leading-tight text-white uppercase font-['Montserrat',sans-serif] mb-3">
            Make to Yoclk öng <br />
            <span className="text-neutral-100">your Sushi Coantcs</span>
          </h2>

          <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mb-5 font-normal">
            Whether for an intimate omakase celebration, private tatami room dining, or tailored corporate events, our master chefs provide an unforgettable sensory journey.
          </p>

          <button
            onClick={onOpenReservation}
            className="group bg-[#ff4d24] hover:bg-[#ff3b0d] active:scale-95 text-white text-xs uppercase tracking-wider font-bold py-2 px-5 rounded-full shadow-lg shadow-[#ff4d24]/20 flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>Reservation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column: Round Black Plate with Sushi & Chopsticks */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative group max-w-[260px] sm:max-w-[290px] w-full">
            {/* Visual glow backdrop */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ff4d24]/25 to-transparent rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
            
            {/* Round Plate Image */}
            <div className="relative rounded-full overflow-hidden border border-white/10 shadow-2xl aspect-square bg-black">
              <img
                src={IMAGES.promoRoundPlate}
                alt="Sushi Specialty Black Dish with Salmon and Maki"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Decorative Kanji watermark */}
            <div className="absolute -bottom-2 -right-2 bg-black/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-bold text-neutral-300 uppercase tracking-widest shadow-lg">
              鮨 • 匠の味
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
