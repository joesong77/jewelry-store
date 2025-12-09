import React from 'react';
import { BLOG_POSTS } from '../services/mockData';

const Academy: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-jade-400 uppercase tracking-widest text-sm mb-4 block">Jade Academy</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">翡翠學堂</h1>
          <p className="text-stone-300 leading-relaxed text-lg font-light">
            第一次買翡翠也沒關係，<br/>
            我們用最簡單的方式，陪你認識真正的好玉。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {['全部文章', '入門知識', '鑑定技巧', '保養指南', '市場趨勢'].map((tag, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full border ${idx === 0 ? 'bg-jade-900 text-white border-jade-900' : 'bg-white text-stone-600 border-stone-200 hover:border-jade-500'} transition-all`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-4 aspect-[3/2]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-xs text-stone-400 space-x-2">
                  <span className="text-jade-700 font-medium">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-jade-800 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block text-jade-800 text-sm font-medium border-b border-jade-200 pb-0.5 group-hover:border-jade-800 transition-all">
                  閱讀全文
                </span>
              </div>
            </article>
          ))}
          
          {/* Mock extra posts for layout */}
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-sm mb-4 aspect-[3/2] bg-stone-200 flex items-center justify-center">
              <span className="text-stone-400">Image Placeholder</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-xs text-stone-400 space-x-2">
                <span className="text-jade-700 font-medium">保養指南</span>
                <span>•</span>
                <span>2023-09-20</span>
              </div>
              <h3 className="text-xl font-serif text-stone-900 group-hover:text-jade-800 transition-colors">
                翡翠可以戴著洗澡嗎？3 個你必須知道的保養誤區
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                關於翡翠的日常養護，網路上說法眾多。專家解析常見誤區，讓你的翡翠越戴越亮。
              </p>
               <span className="inline-block text-jade-800 text-sm font-medium border-b border-jade-200 pb-0.5 group-hover:border-jade-800 transition-all">
                  閱讀全文
                </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Academy;