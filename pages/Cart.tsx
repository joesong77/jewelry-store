import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShieldCheck } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-serif text-stone-300">購物車是空的</h2>
        <Link to="/products" className="bg-jade-900 text-white px-8 py-3 hover:bg-jade-800 transition">
          去逛逛新品
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-stone-900 mb-8">購物車</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="flex-1 bg-white p-6 shadow-sm rounded-sm">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-stone-100 text-sm text-stone-500 font-medium">
              <div className="col-span-6">商品資料</div>
              <div className="col-span-2 text-center">單價</div>
              <div className="col-span-2 text-center">數量</div>
              <div className="col-span-2 text-right">小計</div>
            </div>

            <div className="space-y-6 md:space-y-0">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex flex-col md:grid grid-cols-12 gap-4 py-6 border-b border-stone-100 items-center">
                  
                  {/* Product Info */}
                  <div className="col-span-6 w-full flex space-x-4">
                    <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover bg-stone-100 rounded-sm" />
                    <div>
                      <h3 className="font-serif text-stone-900">{item.name}</h3>
                      <p className="text-xs text-stone-500 mt-1">規格: {item.selectedSize || '標準'}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-red-500 text-xs flex items-center mt-2 transition"
                      >
                        <Trash2 size={12} className="mr-1" /> 移除
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-center text-sm">
                    NT$ {item.price.toLocaleString()}
                  </div>

                  {/* Quantity */}
                  <div className="col-span-2 flex justify-center">
                    <div className="flex items-center border border-stone-200 rounded-sm">
                      <button 
                        className="px-2 py-1 hover:bg-stone-100"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >-</button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 hover:bg-stone-100"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >+</button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="col-span-2 text-right font-bold text-jade-900">
                    NT$ {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link to="/products" className="text-stone-500 hover:text-jade-800 text-sm flex items-center inline-block">
                <ArrowLeft size={16} className="mr-2" /> 繼續購物
              </Link>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="w-full lg:w-96 space-y-6">
            <div className="bg-white p-6 shadow-sm rounded-sm">
              <h2 className="font-serif text-xl mb-6">訂單摘要</h2>
              <div className="space-y-4 text-sm text-stone-600 border-b border-stone-100 pb-4">
                <div className="flex justify-between">
                  <span>小計 ({totalItems} 件)</span>
                  <span>NT$ {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>運費</span>
                  <span>{totalPrice > 3000 ? '免運費' : 'NT$ 80'}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg text-stone-900 pt-4 mb-6">
                <span>合計</span>
                <span>NT$ {(totalPrice + (totalPrice > 3000 ? 0 : 80)).toLocaleString()}</span>
              </div>
              <button className="w-full bg-jade-800 text-white py-4 hover:bg-jade-900 transition shadow-lg text-sm tracking-widest uppercase font-bold">
                前往結帳
              </button>
            </div>

            {/* Trust Note */}
            <div className="bg-jade-50 p-4 border border-jade-100 rounded-sm flex items-start space-x-3">
              <ShieldCheck className="text-jade-700 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-bold text-jade-900">安心購物保證</h4>
                <p className="text-xs text-jade-800/80 mt-1">每筆訂單提供 7 天鑑賞期與終身免費清潔服務。全程保價配送。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;