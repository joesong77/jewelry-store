import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Truck, Award } from 'lucide-react';
import { PRODUCTS, BLOG_POSTS } from '../services/mockData';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-stone-100 overflow-hidden flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-stone-200/50 -skew-x-12 translate-x-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl space-y-6">
            <h2 className="text-jade-900 font-medium tracking-[0.2em] uppercase text-sm">Premium Jade Collection</h2>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight">
              一抹溫潤，<br />典藏於指尖
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              嚴選天然 A 貨翡翠，每件皆附專業鑑定書與保固。<br className="hidden md:block"/>
              只為陪你久一點的東方優雅。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/products" 
                className="bg-jade-900 text-white px-8 py-3.5 flex items-center justify-center hover:bg-jade-800 transition duration-300 tracking-wide text-sm font-medium shadow-lg shadow-jade-900/20"
              >
                探索新品系列 <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white border border-stone-300 text-stone-800 px-8 py-3.5 flex items-center justify-center hover:bg-stone-50 transition duration-300 tracking-wide text-sm font-medium"
              >
                了解翡翠保證
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image - Absolute positioned */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] hidden md:block">
           <img 
            src="https://picsum.photos/id/10/800/1200" 
            alt="Jade Ring Hero" 
            className="w-full h-full object-cover shadow-2xl rounded-l-3xl opacity-90" 
           />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-jade-50 rounded-full text-jade-700"><Award size={32} /></div>
              <h3 className="font-serif text-lg text-stone-900">全館附認證書</h3>
              <p className="text-sm text-stone-500">與權威鑑定中心合作，保證 A 貨真品</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-jade-50 rounded-full text-jade-700"><Shield size={32} /></div>
              <h3 className="font-serif text-lg text-stone-900">七日鑑賞期</h3>
              <p className="text-sm text-stone-500">安心退換貨服務，購物無負擔</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-jade-50 rounded-full text-jade-700"><CheckCircle size={32} /></div>
              <h3 className="font-serif text-lg text-stone-900">終身清潔保養</h3>
              <p className="text-sm text-stone-500">專屬會員售後服務，光彩永駐</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">為你準備的翡翠靈感</h2>
            <p className="text-stone-500">從日常佩戴到收藏等級，找到屬於你的那一抹綠</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['高冰系列', '日常簡約', '典藏收藏', '客製訂製'].map((cat, idx) => (
              <Link to="/products" key={idx} className="group relative h-80 overflow-hidden rounded-sm cursor-pointer block">
                <img 
                  src={`https://picsum.photos/id/${200 + idx}/600/800`} 
                  alt={cat} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif font-medium">{cat}</h3>
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 block border-b border-white w-max pb-1">瀏覽系列</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-2">本月精選</h2>
              <p className="text-stone-500">設計師精選款式，限時推薦</p>
            </div>
            <Link to="/products" className="text-jade-800 font-medium hover:text-jade-900 flex items-center">
              查看全部 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-20 bg-jade-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-jade-300 uppercase tracking-widest text-sm mb-2 block">Jade Academy</span>
              <h2 className="text-4xl font-serif mb-6">翡翠入門 3 分鐘</h2>
              <p className="text-jade-100 mb-8 leading-relaxed">
                第一次買翡翠也沒關係，我們用最簡單的方式，陪你認識真正的好玉。從種水分辨到真偽鑑定，這裡有你需要的知識。
              </p>
              <Link to="/academy" className="inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-jade-900 transition duration-300">
                進入翡翠學堂
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BLOG_POSTS.map(post => (
                <div key={post.id} className="bg-jade-800 p-6 rounded-sm border border-jade-700/50 hover:border-jade-500 transition cursor-pointer">
                  <span className="text-xs text-jade-300 mb-2 block">{post.category}</span>
                  <h3 className="font-serif text-xl mb-3">{post.title}</h3>
                  <p className="text-sm text-jade-200/80 mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="text-sm underline decoration-jade-500 underline-offset-4">閱讀更多</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;