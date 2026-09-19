import { GalleryItem } from '../types';

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Interior' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'tea', label: 'Tea' },
  { id: 'food', label: 'Food' },
  { id: 'ambience', label: 'Ambience' },
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Warm Wooden Corner',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    caption: 'Thoughtful corners bathed in natural evening light.'
  },
  {
    id: 'g-2',
    title: 'Artisan Latte Pour',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
    caption: 'Precision extraction and microfoam harmony.'
  },
  {
    id: 'g-3',
    title: 'Royal Pink Tea Ritual',
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
    caption: 'Traditional slow-brewed pink tea with pistachios.'
  },
  {
    id: 'g-4',
    title: 'Evening Café Atmosphere',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    caption: 'Warm ambient lighting designed for slow conversations.'
  },
  {
    id: 'g-5',
    title: 'Gourmet Sourdough Bites',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
    caption: 'Handcrafted toasted paninis and corn rolls.'
  },
  {
    id: 'g-6',
    title: 'Cozy Library & Work Alcove',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
    aspect: 'tall',
    caption: 'Work-friendly seating with warm acoustic timber.'
  },
  {
    id: 'g-7',
    title: 'Fresh Single-Origin Roast',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
    caption: 'Hand-sorted Indian Arabica beans.'
  },
  {
    id: 'g-8',
    title: 'Friends & Slow Moments',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    caption: 'Laughter, shared plates, and endless warmth.'
  },
  {
    id: 'g-9',
    title: 'Artisan Molten Pastries',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
    caption: 'Freshly baked daily in our pastry studio.'
  }
];
