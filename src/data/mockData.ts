import { Product, Promotion } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics',
    description: 'Experience premium sound quality with our wireless headphones featuring active noise cancellation, 30-hour battery life, and premium memory foam ear cushions.'
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Electronics',
    description: 'Stay connected and track your fitness with our advanced smartwatch. Features include heart rate monitoring, GPS tracking, and sleep analysis.'
  },
  {
    id: '3',
    name: 'Designer Backpack',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'Fashion',
    description: 'Combine style and functionality with our premium designer backpack. Made from water-resistant materials with laptop sleeve.'
  },
  {
    id: '4',
    name: 'Premium Coffee Maker',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    category: 'Home',
    description: 'Brew barista-quality coffee at home with our premium coffee maker. Features programmable settings and built-in grinder.'
  }
];

export const promotions: Promotion[] = [
  {
    id: '1',
    title: 'Diwali Special Sale',
    description: 'Up to 50% off on premium electronics',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=800&q=80'
  },
  {
    id: '2',
    title: 'Great Indian Festival',
    description: 'Exclusive deals on latest gadgets',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80'
  },
  {
    id: '3',
    title: 'Free Express Delivery',
    description: 'On orders above ₹999',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80'
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home',
  'Beauty',
  'Sports'
];