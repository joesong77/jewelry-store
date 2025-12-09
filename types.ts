export enum Category {
  RING = 'Ring',
  NECKLACE = 'Necklace',
  BRACELET = 'Bracelet',
  PENDANT = 'Pendant',
}

export enum JadeType {
  ICE = 'Ice',
  GLASS = 'Glass',
  GLUTINOUS = 'Glutinous',
  OIL = 'Oil',
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  jadeType: JadeType;
  hasCertificate: boolean;
  isNew: boolean;
  images: string[];
  description: string;
  specs: {
    size: string;
    material: string;
  };
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}