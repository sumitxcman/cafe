import { ReviewItem } from '../types';

export const REVIEWS_OVERVIEW = {
  averageRating: 4.6,
  totalReviews: 23,
  recommendationPercentage: 96,
  ratingDistribution: [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ]
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r-1',
    author: 'Gurpreet S.',
    rating: 5,
    date: '3 days ago',
    comment: 'Good ambience and yummiest food. The Kashmiri Pink Chai and Crispy Corn Rolls are an absolute must-try! The interior is so peaceful and cozy.',
    badge: 'Local Guide',
    favoriteItem: 'Royal Kashmiri Chai & Corn Rolls'
  },
  {
    id: 'r-2',
    author: 'Amanjot Kaur',
    rating: 5,
    date: '1 week ago',
    comment: 'Very good place to hangout with friends and family. The seating is super comfortable, staff is extremely courteous and the latte art is gorgeous.',
    badge: 'Verified Guest',
    favoriteItem: 'Velvet Cappuccino & Truffle Fries'
  },
  {
    id: 'r-3',
    author: 'Rohit Sharma',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Very hygiene atmosphere and premium vibes right here in Kharar. Great coffee aroma the moment you walk in. Excellent spot for remote work as well.',
    badge: 'Frequent Visitor',
    favoriteItem: 'Single Origin Espresso'
  },
  {
    id: 'r-4',
    author: 'Simran Varma',
    rating: 4,
    date: '3 weeks ago',
    comment: 'Loved the Blueberry Cheesecake and Masala Kulhad Chai. A truly aesthetic café with generous space between tables. Will visit again soon!',
    badge: 'Verified Guest',
    favoriteItem: 'Blueberry Cheesecake'
  }
];
