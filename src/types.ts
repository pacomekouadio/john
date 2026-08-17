export interface MenuItem {
  id: string;
  name: string;
  category: 'nigiri' | 'maki' | 'sashimi' | 'sets' | 'special';
  description: string;
  price: number;
  imageUrl: string;
  calories?: number;
  tags?: string[];
  pieces?: number;
  isPopular?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'utensils' | 'leaf' | 'sparkles' | 'award' | 'clock' | 'shield-check';
}

export interface ContactInfo {
  type: string;
  label: string;
  value: string;
  color: string;
  icon: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  tableType: 'counter' | 'dining' | 'tatami' | 'private';
  notes?: string;
}
