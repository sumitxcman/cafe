export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'tea' | 'chai' | 'snacks' | 'desserts';
  description: string;
  price: string;
  image: string;
  tag?: 'Bestseller' | 'Signature' | 'Chef Special' | 'Popular' | 'New';
  originOrNotes?: string;
  spicyOrSweet?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'coffee' | 'tea' | 'food' | 'ambience';
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
  badge?: string;
  favoriteItem?: string;
}
