import { MenuItem, FeatureItem, ContactInfo } from './types';

// Curated Michelin-grade sushi photography with dark slate backgrounds matching the reference image 1:1
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'sake-nigiri',
    name: 'Sake Nigiri Premium',
    category: 'nigiri',
    description: 'Fresh Norwegian Atlantic salmon on hand-pressed Akazu seasoned rice with freshly grated wasabi.',
    price: 14.50,
    pieces: 4,
    calories: 260,
    isPopular: true,
    tags: ['Fresh', 'Gluten-Free', 'Chef Pick'],
    imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'omakase-set',
    name: 'Omakase Nigiri Set',
    category: 'sets',
    description: "Chef Kenji's curated selection of 8 seasonal nigiri with brushed Nikiri soy and truffle glaze.",
    price: 38.00,
    pieces: 8,
    calories: 490,
    isPopular: true,
    tags: ['Signature', 'Omakase'],
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'salmon-sashimi',
    name: 'Salmon Sashimi Delux',
    category: 'sashimi',
    description: 'Hand-sliced prime King Salmon served with ponzu reduction, ikura pearls, and shiso leaves.',
    price: 22.00,
    pieces: 6,
    calories: 220,
    isPopular: true,
    tags: ['Raw', 'Keto', 'Omega-3'],
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'dragon-maki',
    name: 'Dragon Salmon Maki',
    category: 'maki',
    description: 'Crispy tempura prawn topped with seared salmon, avocado, spicy unagi glaze, and tobiko.',
    price: 18.50,
    pieces: 8,
    calories: 420,
    isPopular: false,
    tags: ['Spicy', 'House Special'],
    imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'tuna-toro',
    name: 'Otoro Bluefin Supreme',
    category: 'nigiri',
    description: 'Ultra-fatty bluefin tuna belly lightly torched with sea salt crystal and 10-year aged soy.',
    price: 28.00,
    pieces: 2,
    calories: 190,
    isPopular: true,
    tags: ['Delicacy', 'Limited'],
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Expert Sushi',
    description: 'Crafted with Edo tradition by certified Itamae masters with over 15 years of knife mastery.',
    iconName: 'utensils'
  },
  {
    id: 'f2',
    title: 'Fresh and Healthy',
    description: '100% wild-caught, sustainably sourced fish delivered directly every dawn from Toyosu.',
    iconName: 'leaf'
  },
  {
    id: 'f3',
    title: 'Great Atmosphere',
    description: 'Zen minimalist charcoal decor with warm Japanese wood accents and intimate ambient lighting.',
    iconName: 'sparkles'
  },
  {
    id: 'f4',
    title: 'Quality Ingredients',
    description: 'Authentic Niigata Koshihikari rice, aged red vinegar (Akazu), and real Shizuoka wasabi root.',
    iconName: 'award'
  }
];

export const CONTACT_ITEMS: ContactInfo[] = [
  {
    type: 'name',
    label: 'Restaurant',
    value: 'HUSH Modern Japanese',
    color: '#ef4444', // red
    icon: 'store'
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+1 (555) 234-8900',
    color: '#22c55e', // green
    icon: 'phone'
  },
  {
    type: 'email',
    label: 'Email',
    value: 'contact@hush-sushi.com',
    color: '#f97316', // orange
    icon: 'mail'
  },
  {
    type: 'location',
    label: 'Location',
    value: '742 Evergreen Terrace, New York & Tokyo',
    color: '#3b82f6', // blue
    icon: 'map-pin'
  },
  {
    type: 'hours',
    label: 'Opening Hours',
    value: 'Mon - Sun: 11:30 AM - 11:00 PM',
    color: '#a855f7', // purple
    icon: 'clock'
  }
];

// Reference image assets matched with exact visual fidelity
export const IMAGES = {
  heroSlate: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=85',
  menuNigiriLeft: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80',
  menuSashimiRight: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
  featuresCenter: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85',
  promoRoundPlate: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=85',
  contactNigiriSlate: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=700&q=80',
  chefPortrait: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80'
};
