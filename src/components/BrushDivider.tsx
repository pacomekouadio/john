import React from 'react';

interface BrushDividerProps {
  className?: string;
  fillColor?: string; // Color of the next section (default: #ffffff)
  flipped?: boolean;
}

export const BrushDivider: React.FC<BrushDividerProps> = ({
  className = '',
  fillColor = '#ffffff',
  flipped = false,
}) => {
  return (
    <div 
      className={`relative w-full overflow-hidden leading-none z-10 select-none pointer-events-none ${className} ${
        flipped ? 'rotate-180 -mt-1' : '-mb-1'
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14 md:h-18 block"
        style={{ fill: fillColor }}
      >
        {/* Detailed organic ink brush / torn paper edge path */}
        <path d="M0,0 
          C40,25 80,10 120,35 
          C160,55 200,30 240,45 
          C280,60 320,38 360,52 
          C400,68 440,40 480,60 
          C520,78 560,45 600,65 
          C640,82 680,50 720,70 
          C760,88 800,55 840,75 
          C880,92 920,60 960,80 
          C1000,98 1040,65 1080,85 
          C1120,102 1160,70 1200,90 
          L1200,120 L0,120 Z" 
        />
        {/* Subtle splatter / brush bristles effect */}
        <path 
          d="M0,35 Q150,15 300,45 T600,30 T900,55 T1200,40 L1200,120 L0,120 Z" 
          opacity="0.95" 
        />
        <path 
          d="M0,50 Q100,30 250,55 T550,42 T850,68 T1200,50 L1200,120 L0,120 Z" 
          opacity="0.9" 
        />
      </svg>
    </div>
  );
};
