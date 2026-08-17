import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChefHat, 
  Calendar, 
  Users, 
  CheckCircle2, 
  UtensilsCrossed,
  Sparkles
} from 'lucide-react';
import { IMAGES } from '../data';
import { ReservationData } from '../types';

interface ContactSectionProps {
  onOpenReservationModal: () => void;
  onOpenFullMenu: () => void;
  onSuccessBooking: (data: ReservationData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenReservationModal,
  onOpenFullMenu,
  onSuccessBooking,
}) => {
  // Local quick reservation state
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>('2026-08-18');
  const [time, setTime] = useState<string>('19:30');
  const [tableType, setTableType] = useState<'counter' | 'dining' | 'tatami' | 'private'>('counter');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reservation: ReservationData = {
      name: name || 'Guest of Honor',
      phone: phone || '+1 555-0199',
      email: 'guest@example.com',
      date,
      time,
      guests,
      tableType,
    };
    onSuccessBooking(reservation);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative bg-white text-neutral-900 pt-12 pb-14 px-4 sm:px-6">
      {/* Title */}
      <div className="text-center max-w-md mx-auto mb-8">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 font-['Montserrat',sans-serif]">
          Contact Sekuls
        </h2>
        <div className="w-8 h-0.5 bg-[#ff4d24] mx-auto my-1.5 rounded-full" />
        <p className="text-neutral-500 text-[11px] sm:text-xs leading-relaxed">
          Reserve your seat at our master sushi counter or reach out for bespoke catering & private events.
        </p>
      </div>

      {/* Two Columns Grid matching the exact mockup composition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
        
        {/* Left Column: Contact Card with Photo & Colored Badges */}
        <div className="bg-neutral-50 rounded-2xl p-3.5 sm:p-4 border border-neutral-200/80 shadow-md flex flex-col justify-between">
          
          {/* Top: Square/Vertical Sushi Photo with Nigiri on dark plate */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4 bg-neutral-900 group shadow-inner">
            <img
              src={IMAGES.contactNigiriSlate}
              alt="Hush Signature Aburi Salmon Nigiri"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute top-2 left-2 bg-[#ff4d24] text-white text-[8px] font-bold uppercase px-2 py-0.5 rounded-md shadow">
              Omakase Bar
            </div>
            <div className="absolute bottom-2 right-2 text-white text-[10px] bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
              Shibuya & NY
            </div>
          </div>

          {/* Contact Details with Colored Round Icons matching reference */}
          <div className="space-y-2.5 text-xs text-neutral-700">
            {/* Red badge */}
            <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-neutral-100/80 transition-colors">
              <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <ChefHat className="w-3.5 h-3.5" />
              </div>
              <div className="truncate">
                <div className="text-[9px] text-neutral-400 font-semibold uppercase leading-none">Restaurant</div>
                <div className="font-bold text-neutral-900 text-[11px]">HUSH Modern Japanese</div>
              </div>
            </div>

            {/* Green badge */}
            <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-neutral-100/80 transition-colors">
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="truncate">
                <div className="text-[9px] text-neutral-400 font-semibold uppercase leading-none">Direct Phone</div>
                <a href="tel:+15552348900" className="font-bold text-neutral-900 hover:text-[#ff4d24] text-[11px] transition-colors">
                  +1 (555) 234-8900
                </a>
              </div>
            </div>

            {/* Orange badge */}
            <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-neutral-100/80 transition-colors">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="truncate">
                <div className="text-[9px] text-neutral-400 font-semibold uppercase leading-none">Email Inquiries</div>
                <a href="mailto:contact@hush-sushi.com" className="font-bold text-neutral-900 hover:text-[#ff4d24] text-[11px] transition-colors">
                  contact@hush-sushi.com
                </a>
              </div>
            </div>

            {/* Blue badge */}
            <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-neutral-100/80 transition-colors">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div className="truncate">
                <div className="text-[9px] text-neutral-400 font-semibold uppercase leading-none">Address</div>
                <div className="font-bold text-neutral-900 text-[11px] truncate">742 Evergreen Terrace, Tokyo & NY</div>
              </div>
            </div>

            {/* Purple badge */}
            <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-neutral-100/80 transition-colors">
              <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div className="truncate">
                <div className="text-[9px] text-neutral-400 font-semibold uppercase leading-none">Service Hours</div>
                <div className="font-bold text-neutral-900 text-[11px]">Mon - Sun: 11:30 AM - 11:00 PM</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Booking Details Card */}
        <div className="bg-neutral-50 rounded-2xl p-3.5 sm:p-4 border border-neutral-200/80 shadow-md flex flex-col justify-between">
          
          <div>
            {/* Header with Orange Tag */}
            <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#ff4d24] text-white flex items-center justify-center shadow-sm">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-black text-xs sm:text-sm uppercase tracking-tight text-neutral-900 font-['Montserrat',sans-serif]">
                  Booking Details
                </h3>
              </div>
              <span className="text-[9px] font-bold text-[#ff4d24] bg-[#ff4d24]/10 px-2 py-0.5 rounded-full uppercase">
                Instant Confirmation
              </span>
            </div>

            {/* Quick interactive form */}
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Guests Count Selector */}
              <div>
                <label className="block text-[10px] font-bold text-neutral-700 uppercase mb-1">
                  Guests Count
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 2, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-1 text-center rounded-lg text-xs font-bold transition-all ${
                        guests === num
                          ? 'bg-neutral-900 text-white shadow-sm'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Choice */}
              <div>
                <label className="block text-[10px] font-bold text-neutral-700 uppercase mb-1">
                  Experience / Table
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setTableType('counter')}
                    className={`py-1 px-2 text-left rounded-lg text-[10px] font-bold border transition-all ${
                      tableType === 'counter'
                        ? 'bg-[#ff4d24]/10 border-[#ff4d24] text-[#ff4d24]'
                        : 'bg-white border-neutral-200 text-neutral-600'
                    }`}
                  >
                    🍣 Chef Counter (Omakase)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTableType('tatami')}
                    className={`py-1 px-2 text-left rounded-lg text-[10px] font-bold border transition-all ${
                      tableType === 'tatami'
                        ? 'bg-[#ff4d24]/10 border-[#ff4d24] text-[#ff4d24]'
                        : 'bg-white border-neutral-200 text-neutral-600'
                    }`}
                  >
                    🎋 Private Tatami Room
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-700 uppercase mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-neutral-200 rounded-lg py-1 px-2 text-[11px] font-medium text-neutral-900 focus:outline-none focus:border-[#ff4d24]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-neutral-700 uppercase mb-1">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-lg py-1 px-2 text-[11px] font-medium text-neutral-900 focus:outline-none focus:border-[#ff4d24]"
                  >
                    <option value="12:00">12:00 PM (Lunch Omakase)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="18:30">06:30 PM (Dinner 1st)</option>
                    <option value="19:30">07:30 PM (Dinner Prime)</option>
                    <option value="21:00">09:00 PM (Late Tasting)</option>
                  </select>
                </div>
              </div>

              {/* Guest Name & Contact quick input */}
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border border-neutral-200 rounded-lg py-1 px-2 text-[11px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ff4d24]"
                />
                <input
                  type="tel"
                  placeholder="Mobile Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white border border-neutral-200 rounded-lg py-1 px-2 text-[11px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ff4d24]"
                />
              </div>

              {submitted && (
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Table confirmed for {guests} guests on {date} at {time}!</span>
                </div>
              )}

              {/* Two Buttons matching the mockup: Orange Reservation + White All Menu */}
              <div className="pt-2 flex items-center gap-2">
                {/* Primary Button */}
                <button
                  type="submit"
                  id="contact-reservation-submit"
                  className="flex-1 bg-[#ff4d24] hover:bg-[#ff3b0d] active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-2 px-3 rounded-full shadow-md shadow-[#ff4d24]/30 transition-all cursor-pointer text-center"
                >
                  Reservation
                </button>

                {/* Secondary Button */}
                <button
                  type="button"
                  onClick={onOpenFullMenu}
                  className="bg-white hover:bg-neutral-100 active:scale-95 text-neutral-800 border border-neutral-300 font-bold text-xs uppercase tracking-wider py-2 px-3.5 rounded-full transition-all cursor-pointer text-center"
                >
                  All Menu
                </button>
              </div>
            </form>
          </div>

          {/* Micro trust note */}
          <div className="mt-3 pt-2 border-t border-neutral-200/80 flex items-center justify-between text-[9px] text-neutral-400">
            <span>Free cancellation up to 4h prior</span>
            <span className="font-semibold text-neutral-600">No deposit required</span>
          </div>

        </div>

      </div>
    </section>
  );
};
