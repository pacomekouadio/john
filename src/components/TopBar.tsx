import React from 'react';
import { MapPin, Clock, Phone, User, Globe } from 'lucide-react';

interface TopBarProps {
  currentLang: string;
  onToggleLang: () => void;
  onOpenAccount: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ currentLang, onToggleLang, onOpenAccount }) => {
  return (
    <div id="top-bar" className="w-full bg-[#0d0e11] border-b border-white/5 text-neutral-400 text-[10px] md:text-[11px] py-1 px-3 sm:px-4 flex items-center justify-between font-sans select-none tracking-tight">
      {/* Left: Location */}
      <div className="flex items-center gap-1.5 truncate">
        <MapPin className="w-3 h-3 text-[#ff4d24] shrink-0" />
        <span className="truncate hidden xs:inline">742 Evergreen Terrace, Tokyo & NY</span>
        <span className="xs:hidden">Tokyo & NY</span>
      </div>

      {/* Center: Hours */}
      <div className="hidden sm:flex items-center gap-1.5 text-neutral-400">
        <Clock className="w-3 h-3 text-[#ff4d24]/80 shrink-0" />
        <span>Mon - Sun: 11:30 AM - 11:00 PM</span>
      </div>

      {/* Right: Phone, Lang & Account */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
        <a 
          href="tel:+15552348900" 
          className="flex items-center gap-1 hover:text-white transition-colors"
          title="Call Restaurant"
        >
          <Phone className="w-2.5 h-2.5 text-[#ff4d24]" />
          <span className="font-medium text-neutral-300 hidden md:inline">+1 (555) 234-8900</span>
          <span className="md:hidden">Call</span>
        </a>

        <button 
          onClick={onToggleLang}
          className="flex items-center gap-0.5 hover:text-white uppercase font-bold text-[9px] px-1 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors"
          title="Toggle Language"
        >
          <Globe className="w-2.5 h-2.5 text-neutral-400" />
          <span>{currentLang}</span>
        </button>

        <button 
          onClick={onOpenAccount}
          className="flex items-center gap-1 hover:text-white transition-colors pl-1 border-l border-white/10"
          title="Account / VIP Member"
        >
          <User className="w-3 h-3 text-neutral-300" />
          <span className="hidden sm:inline">VIP</span>
        </button>
      </div>
    </div>
  );
};
