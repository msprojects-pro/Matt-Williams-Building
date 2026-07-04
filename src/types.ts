export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'masonry' | 'building' | 'landscaping' | 'all';
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface QuoteRequestData {
  name: string;
  phone: string;
  email: string;
  service: string;
  urgency: string;
  message: string;
  location: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
