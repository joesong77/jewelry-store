import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../services/mockData';
import { Category, JadeType } from '../types';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ProductList: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') as Category | null;

  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(initialCategory || 'All');
  const [selectedType, setSelectedType] = useState<JadeType | 'All'>('All');
  const [priceRange, setPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
      if (selectedType !== 'All' && product.jadeType !== selectedType) return false;
      
      if (priceRange === 'low') return product.price <= 10000;
      if (priceRange === 'mid') return product.price > 10000 && product.price <= 30000;
      if (priceRange === 'high') return product.price > 30000;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1;
      return 0; // featured (default order)
    });
  }, [selectedCategory, selectedType, priceRange, sortBy]);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header / Breadcrumb area */}
      <div className="bg-stone-50 py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif text-stone-900 mb-2">
            {selectedCategory === 'All' ? '所有系列' : selectedCategory}
          </h1>
          <p className="text-stone-500 text-sm">首頁 / 商品列表 / {selectedCategory === 'All' ? '全部' : selectedCategory}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center justify-between w-full p-4 border border-stone-200 mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="flex items-center"><Filter size={18} className="mr-2"/> 篩選與排序</span>
            <ChevronDown size={18} className={`transform transition ${showFilters ? 'rotate-180' : ''}`}/>
          </button>

          {/* Sidebar Filters */}
          <aside className={`w-full lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-8 sticky top-24">
              
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 text-stone-900">類別</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === 'All'} 
                      onChange={() => setSelectedCategory('All')}
                      className="accent-jade-700"
                    />
                    <span className="text-stone-600 group-hover:text-jade-800">全部顯示</span>
                  </label>
                  {Object.values(Category).map(cat => (
                    <label key={cat} className="flex items-center space-x-2 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === cat} 
                        onChange={() => setSelectedCategory(cat)}
                        className="accent-jade-700"
                      />
                      <span className="text-stone-600 group-hover:text-jade-800">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Jade Type Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 text-stone-900">種水</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.values(JadeType).map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(selectedType === type ? 'All' : type)}
                      className={`px-3 py-1 text-sm border ${
                        selectedType === type 
                          ? 'bg-jade-800 text-white border-jade-800' 
                          : 'bg-white text-stone-600 border-stone-200 hover:border-jade-500'
                      } transition-colors`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 text-stone-900">價格</h3>
                <div className="space-y-2">
                  {[
                    { val: 'All', label: '全部' },
                    { val: 'low', label: '$10,000 以下' },
                    { val: 'mid', label: '$10,000 - $30,000' },
                    { val: 'high', label: '$30,000 以上' },
                  ].map(opt => (
                     <label key={opt.val} className="flex items-center space-x-2 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="price" 
                        checked={priceRange === opt.val} 
                        onChange={() => setPriceRange(opt.val)}
                        className="accent-jade-700"
                      />
                      <span className="text-stone-600 group-hover:text-jade-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-100">
              <span className="text-stone-500 text-sm">共有 {filteredProducts.length} 件商品</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-stone-500">排序：</span>
                <select 
                  className="text-sm border-none bg-transparent focus:ring-0 cursor-pointer font-medium text-stone-800"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">推薦</option>
                  <option value="newest">新品</option>
                  <option value="price-asc">價格低到高</option>
                  <option value="price-desc">價格高到低</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-stone-50 rounded-lg">
                <p className="text-stone-500 mb-4">暫時沒有符合條件的翡翠作品</p>
                <button 
                  onClick={() => { setSelectedCategory('All'); setSelectedType('All'); setPriceRange('All'); }}
                  className="text-jade-800 underline underline-offset-4"
                >
                  清除所有篩選
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;