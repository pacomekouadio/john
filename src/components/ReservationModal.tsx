import React, { useState } from 'react';
import { X, Calendar, Users, Clock, CheckCircle2, ChefHat, Sparkles } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reservation: ReservationData) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-08-18');
  const [time, setTime] = useState('19:30');
  const [tableType, setTableType] = useState<'counter' | 'dining' | 'tatami' | 'private'>('counter');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resData: ReservationData = {
      name: name || 'Valued Guest',
      phone: phone || '+1 (555) 234-8900',
      email: email || 'guest@hush-sushi.com',
      date,
      time,
      guests,
      tableType,
      notes,
    };
    onConfirm(resData);
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-neutral-900 border border-white/10 text-white rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full bg-[#ff4d24] flex items-center justify-center text-white text-xs font-bold shadow">
                🍣
              </div>
              <h3 className="text-lg font-black tracking-tight uppercase font-['Montserrat',sans-serif]">
                Table Reservation
              </h3>
            </div>
            <p className="text-xs text-neutral-400 mb-4">
              Secure your omakase experience at HUSH. No advance deposit required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Party Size */}
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#ff4d24]" />
                  <span>Number of Guests</span>
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        guests === num
                          ? 'bg-[#ff4d24] border-[#ff4d24] text-white shadow-md shadow-[#ff4d24]/30'
                          : 'bg-neutral-800/80 border-white/10 text-neutral-300 hover:border-white/30'
                      }`}
                    >
                      {num} {num === 1 ? 'Person' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating preference */}
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <ChefHat className="w-3.5 h-3.5 text-[#ff4d24]" />
                  <span>Seating Experience</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTableType('counter')}
                    className={`p-2 text-left rounded-lg text-xs font-medium border transition-all ${
                      tableType === 'counter'
                        ? 'bg-[#ff4d24]/20 border-[#ff4d24] text-white'
                        : 'bg-neutral-800/60 border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-white text-[11px]">🍣 Sushi Master Counter</div>
                    <div className="text-[9px] text-neutral-400">Front row Omakase view</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTableType('tatami')}
                    className={`p-2 text-left rounded-lg text-xs font-medium border transition-all ${
                      tableType === 'tatami'
                        ? 'bg-[#ff4d24]/20 border-[#ff4d24] text-white'
                        : 'bg-neutral-800/60 border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-white text-[11px]">🎋 Private Tatami Suite</div>
                    <div className="text-[9px] text-neutral-400">Quiet & intimate dining</div>
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-neutral-300 mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#ff4d24]" /> Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-neutral-800 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#ff4d24]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-neutral-300 mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#ff4d24]" /> Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-neutral-800 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#ff4d24]"
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="18:30">06:30 PM (Dinner 1st)</option>
                    <option value="19:30">07:30 PM (Dinner Prime)</option>
                    <option value="21:00">09:00 PM (Late Tasting)</option>
                  </select>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-neutral-800 border border-white/10 rounded-lg p-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff4d24]"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder="Mobile Phone *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-neutral-800 border border-white/10 rounded-lg p-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff4d24]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-800 border border-white/10 rounded-lg p-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff4d24]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-[#ff4d24] hover:bg-[#ff3b0d] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-lg shadow-[#ff4d24]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Reservation</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-black text-white uppercase font-['Montserrat',sans-serif] mb-2">
              Reservation Confirmed!
            </h3>

            <p className="text-xs text-neutral-300 max-w-xs mx-auto mb-4">
              Thank you, <span className="font-bold text-white">{name || 'Guest'}</span>! We look forward to welcoming you at HUSH.
            </p>

            <div className="bg-neutral-800/80 rounded-xl p-3 border border-white/10 text-left text-xs space-y-1.5 mb-5 max-w-xs mx-auto">
              <div className="flex justify-between text-neutral-400">
                <span>Party:</span>
                <span className="font-bold text-white">{guests} Guests</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Date & Time:</span>
                <span className="font-bold text-[#ff6b4a]">{date} at {time}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Seating:</span>
                <span className="font-bold text-white capitalize">{tableType}</span>
              </div>
              <div className="flex justify-between text-neutral-400 border-t border-white/10 pt-1">
                <span>Booking ID:</span>
                <span className="font-mono text-emerald-400 font-bold">#HUSH-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="bg-[#ff4d24] hover:bg-[#ff3b0d] text-white font-bold text-xs uppercase tracking-wider py-2 px-6 rounded-full shadow-lg transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
