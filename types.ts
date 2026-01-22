
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Partner {
  name: string;
  tier?: string;
  logo: string;
}

export interface Location {
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  brand: string;
  specs: string[];
}
