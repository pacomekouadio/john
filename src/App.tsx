import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrushDivider } from './components/BrushDivider';
import { OurMenuSection } from './components/OurMenuSection';
import { CoreSushiSection } from './components/CoreSushiSection';
import { PromoSection } from './components/PromoSection';
import { CategoryFloatingBar } from './components/CategoryFloatingBar';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuDetailModal } from './components/MenuDetailModal';
import { ShowcaseControls } from './components/ShowcaseControls';
import { MenuItem, ReservationData } from './types';
import { MENU_ITEMS } from './data';

export default function App() {
  // Showcase mode: default true on desktop to match the uploaded mockup presentation
  const [isMockupFrame, setIsMockupFrame] = useState(true);
  const [currentLang, setCurrentLang] = useState<'EN' | 'FR' | 'JA'>('EN');
  const [activeSection, setActiveSection] = useState('hero');
  
  // Modals & Interactivity
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [cartItems, setCartItems] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleToggleLang = () => {
    const langs: ('EN' | 'FR' | 'JA')[] = ['EN', 'FR', 'JA'];
    const nextIdx = (langs.indexOf(currentLang) + 1) % langs.length;
    setCurrentLang(langs[nextIdx]);
    showToast(`Language switched to ${langs[nextIdx]}`);
  };

  const handleDiscoverMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderAdded = (item: MenuItem, quantity: number) => {
    setCartItems((prev) => [...prev, { item, quantity }]);
    showToast(`Added ${quantity}x ${item.name} to order`);
  };

  const handleReservationSuccess = (data: ReservationData) => {
    showToast(`Reservation request confirmed for ${data.guests} guests!`);
  };

  const handleSelectCategory = (cat: string) => {
    const item = MENU_ITEMS.find((m) => m.category === cat) || MENU_ITEMS[0];
    setSelectedMenuItem(item);
  };

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'features', 'promo', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#25262a] flex flex-col items-center justify-start text-neutral-100 font-sans selection:bg-[#ff4d24] selection:text-white">
      
      {/* Top Showcase Toolbar for presentation mode & actions */}
      <ShowcaseControls
        isMockupFrame={isMockupFrame}
        onToggleFrame={() => setIsMockupFrame(!isMockupFrame)}
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        orderCount={cartItems.length}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Website Container:
          - Desktop default: Centered floating portrait container (width 480px - 520px) with deep studio shadow
          - Small screen or Fullscreen mode: 100% width fluid responsive layout
      */}
      <main 
        id="app-container"
        className={`w-full transition-all duration-300 ${
          isMockupFrame 
            ? 'max-w-[480px] my-0 sm:my-8 rounded-none sm:rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] border-0 sm:border border-white/10 overflow-hidden ring-1 ring-black/40' 
            : 'max-w-7xl mx-auto my-0'
        } bg-[#131417] flex flex-col`}
      >
        {/* 1. TOP MICRO BAR */}
        <TopBar
          currentLang={currentLang}
          onToggleLang={handleToggleLang}
          onOpenAccount={() => showToast('VIP Membership portal opening soon')}
        />

        {/* 2. MAIN HEADER / NAVIGATION */}
        <Header
          onOpenReservation={() => setIsReservationOpen(true)}
          activeSection={activeSection}
        />

        {/* 3. HERO SECTION (Dark Charcoal with angled slate sushi platter) */}
        <HeroSection
          onDiscoverMenu={handleDiscoverMenu}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 4. BRUSH / TORN PAPER INK TRANSITION DIVIDER */}
        <BrushDivider fillColor="#ffffff" />

        {/* 5. OUR MENU SECTION (White Background, 3 Cards Layout) */}
        <OurMenuSection
          onSelectItem={(item) => setSelectedMenuItem(item)}
          onOpenFullMenu={() => setSelectedMenuItem(MENU_ITEMS[1])}
        />

        {/* 6. OUR CORE SUSHI / SERVICES (Dark Charcoal, 4 White Cards + Center Photo) */}
        <CoreSushiSection />

        {/* 7. PROMOTIONAL DARK SECTION (Round Black Plate Dish with Sushi & Chopsticks) */}
        <PromoSection
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 8. FLOATING CATEGORY PILL BAR */}
        <CategoryFloatingBar
          onSelectCategory={handleSelectCategory}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 9. CONTACT & BOOKING SECTION (White Background, 2 Columns with Colored Badges) */}
        <ContactSection
          onOpenReservationModal={() => setIsReservationOpen(true)}
          onOpenFullMenu={() => setSelectedMenuItem(MENU_ITEMS[0])}
          onSuccessBooking={handleReservationSuccess}
        />

        {/* 10. FOOTER (Dark Minimalist) */}
        <Footer
          onScrollTop={handleScrollTop}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
      </main>

      {/* Global Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onConfirm={handleReservationSuccess}
      />

      <MenuDetailModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onOrderAdded={handleOrderAdded}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-neutral-900/95 text-white border border-[#ff4d24]/50 shadow-2xl px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#ff4d24] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
