import { Product, Category, JadeType, BlogPost } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '晨露高冰翡翠戒指',
    price: 26800,
    category: Category.RING,
    jadeType: JadeType.ICE,
    hasCertificate: true,
    isNew: true,
    images: [
      'https://picsum.photos/id/10/800/800', 
      'https://picsum.photos/id/11/800/800',
      'https://picsum.photos/id/12/800/800'
    ],
    description: '靈感來自清晨葉尖的第一滴露水。高冰種翡翠的通透，像藏著一束微光，在日常的每一個抬手間，悄悄地閃爍。',
    specs: { size: '12 x 10 mm', material: '18K Gold' },
    rating: 4.9,
    reviewCount: 12
  },
  {
    id: '2',
    name: '正陽綠典藏項鍊',
    price: 45000,
    category: Category.NECKLACE,
    jadeType: JadeType.GLASS,
    hasCertificate: true,
    isNew: false,
    images: ['https://picsum.photos/id/20/800/800', 'https://picsum.photos/id/21/800/800'],
    description: '色澤飽滿的正陽綠，象徵著生機與富貴。採用傳統鑲嵌工藝，展現東方女性的優雅韻味。',
    specs: { size: '15 x 15 mm', material: 'Platinum' },
    rating: 5.0,
    reviewCount: 8
  },
  {
    id: '3',
    name: '冰糯種平安扣',
    price: 12800,
    category: Category.PENDANT,
    jadeType: JadeType.GLUTINOUS,
    hasCertificate: true,
    isNew: false,
    images: ['https://picsum.photos/id/30/800/800'],
    description: '簡約而不簡單的平安扣設計，寓意歲歲平安。質地細膩溫潤，適合日常佩戴。',
    specs: { size: '20mm diameter', material: 'Silk Cord / Silver Clasp' },
    rating: 4.7,
    reviewCount: 24
  },
  {
    id: '4',
    name: '紫羅蘭貴妃手鐲',
    price: 88000,
    category: Category.BRACELET,
    jadeType: JadeType.ICE,
    hasCertificate: true,
    isNew: true,
    images: ['https://picsum.photos/id/40/800/800'],
    description: '罕見的冰種紫羅蘭，色澤夢幻，質地通透。貴妃鐲型貼合手腕，舒適度極佳。',
    specs: { size: '56mm inner diameter', material: 'Natural Jadeite' },
    rating: 5.0,
    reviewCount: 5
  },
  {
    id: '5',
    name: '墨翠幾何男戒',
    price: 32000,
    category: Category.RING,
    jadeType: JadeType.OIL,
    hasCertificate: true,
    isNew: true,
    images: ['https://picsum.photos/id/50/800/800'],
    description: '濃郁墨綠，打燈透綠。幾何切面設計，展現現代男性的沈穩與品味。',
    specs: { size: '14 x 12 mm', material: '18K White Gold' },
    rating: 4.8,
    reviewCount: 3
  },
  {
    id: '6',
    name: '飄花山水牌',
    price: 56000,
    category: Category.PENDANT,
    jadeType: JadeType.ICE,
    hasCertificate: true,
    isNew: false,
    images: ['https://picsum.photos/id/60/800/800'],
    description: '天然飄花意境如山水畫卷，每一塊都是獨一無二的藝術品。',
    specs: { size: '40 x 25 mm', material: '18K Gold Inlay' },
    rating: 4.9,
    reviewCount: 15
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '翡翠入門 3 分鐘：教你分辨 A 貨、B 貨與 C 貨',
    excerpt: '市場上翡翠琳瑯滿目，如何避免買到注膠染色的假貨？本文帶你快速掌握鑑定基礎。',
    image: 'https://picsum.photos/id/101/600/400',
    date: '2023-10-15',
    category: '鑑定知識'
  },
  {
    id: '2',
    title: '種水怎麼看？圖解冰種、糯種與豆種的差異',
    excerpt: '「內行看種，外行看色」。學會看種水，是收藏翡翠的第一步。',
    image: 'https://picsum.photos/id/102/600/400',
    date: '2023-11-02',
    category: '翡翠學堂'
  }
];