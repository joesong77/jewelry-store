import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: '所有商品', path: '/products' },
    { name: '戒指', path: '/products?category=Ring' },
    { name: '項鍊', path: '/products?category=Necklace' },
    { name: '翡翠學堂', path: '/academy' },
    { name: '關於我們', path: '/about' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600 hover:text-jade-800 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <Link to="/" className="flex flex-col items-center md:items-start" onClick={closeMenu}>
              <span className="font-serif text-2xl font-bold text-jade-900 tracking-wide">JADE & CO.</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hidden md:block">Authentic Jadeite</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path && !location.search 
                    ? 'text-jade-800 border-b-2 border-jade-800' 
                    : 'text-stone-600 hover:text-jade-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-stone-400 hover:text-jade-800 transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="text-stone-400 hover:text-jade-800 transition-colors hidden sm:block">
              <Heart size={20} />
            </button>
            <Link to="/cart" className="text-stone-600 hover:text-jade-800 transition-colors relative p-1">
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-jade-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:text-jade-800 hover:bg-stone-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center space-x-4 px-3">
              <span className="text-stone-500 text-sm">搜尋</span>
              <span className="text-stone-500 text-sm">收藏</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;