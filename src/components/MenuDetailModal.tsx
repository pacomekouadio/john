import React, { useState } from 'react';
import { X, Flame, Sparkles, Check, ShoppingBag, Plus, Minus } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOrderAdded: (item: MenuItem, quantity: number) => void;
}

export const MenuDetailModal: React.FC<MenuDetailModalProps> = ({
  item,
  onClose,
  onOrderAdded,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    onOrderAdded(item, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-neutral-900 border border-white/10 text-white rounded-2xl max-w-sm w-full p-5 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 bg-black/60 text-neutral-300 hover:text-white rounded-full hover:bg-black/90 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Item Image */}
        <div className="relative -mx-5 -mt-5 mb-4 aspect-[16/10] overflow-hidden bg-black">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />
          
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="bg-[#ff4d24] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow">
              {item.category}
            </span>
            {item.isPopular && (
              <span className="bg-amber-500/90 text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                <Flame className="w-3 h-3" /> Popular
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-black uppercase text-white font-['Montserrat',sans-serif]">
              {item.name}
            </h3>
            <span className="text-lg font-black text-[#ff6b4a]">
              ${(item.price * quantity).toFixed(2)}
            </span>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[9px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded-md">
                  #{tag}
                </span>
              ))}
              {item.calories && (
                <span className="text-[9px] bg-white/5 text-neutral-400 px-2 py-0.5 rounded-md">
                  {item.calories} kcal
                </span>
              )}
            </div>
          )}

          {/* Quantity selector */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-medium">Quantity</span>
            <div className="flex items-center gap-3 bg-neutral-800 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-6 h-6 rounded bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-xs font-bold w-4 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-6 h-6 rounded bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-[#ff4d24] hover:bg-[#ff3b0d] text-white shadow-lg shadow-[#ff4d24]/30'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Selection</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Dining Order • ${(item.price * quantity).toFixed(2)}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
