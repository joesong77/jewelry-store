import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white border border-stone-100 hover:border-jade-200 hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-stone-900 text-white text-[10px] px-2 py-1 uppercase tracking-widest">New</span>
          )}
          {product.hasCertificate && (
            <span className="bg-jade-700 text-white text-[10px] px-2 py-1 uppercase tracking-widest">Cert</span>
          )}
        </div>
        
        {/* Quick Actions (Desktop) */}
        <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full text-stone-400 hover:text-red-500 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
          <Heart size={16} />
        </button>
      </Link>
      
      <div className="p-4 text-center">
        <h3 className="text-sm font-medium text-stone-800 mb-1 line-clamp-1 group-hover:text-jade-800 transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-xs text-stone-500 mb-2">{product.jadeType} / {product.category}</p>
        <p className="text-jade-900 font-serif font-bold">
          NT$ {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;