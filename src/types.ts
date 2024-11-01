export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
}