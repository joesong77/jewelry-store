import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../services/mockData';
import { useCart } from '../context/CartContext';
import { Shield, Truck, RefreshCcw, Star, ChevronRight, Check } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'details' | 'wear' | 'cert' | 'reviews'>('details');
  const [selectedSize, setSelectedSize] = useState<string>('#10');

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="bg-white pb-20 animate-fade-in">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-500 flex items-center mb-8">
        <span className="cursor-pointer hover:text-jade-800" onClick={() => navigate('/')}>首頁</span>
        <ChevronRight size={12} className="mx-2"/>
        <span className="cursor-pointer hover:text-jade-800" onClick={() => navigate('/products')}>所有商品</span>
        <ChevronRight size={12} className="mx-2"/>
        <span className="text-stone-800">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square w-full overflow-hidden bg-stone-50 border border-stone-100">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square cursor-pointer border ${selectedImage === idx ? 'border-jade-800' : 'border-transparent hover:border-jade-300'}`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="border-b border-stone-100 pb-6 mb-6">
              <h1 className="text-3xl font-serif text-stone-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 text-sm text-stone-500 mb-4">
                <span className="flex items-center text-yellow-500"><Star size={14} fill="currentColor" className="mr-1"/> {product.rating}</span>
                <span>|</span>
                <span>{product.reviewCount} 則評價</span>
                <span>|</span>
                <span className="text-jade-700 bg-jade-50 px-2 py-0.5 rounded-full text-xs">天然 A 貨保證</span>
              </div>
              <div className="text-3xl text-jade-900 font-serif mb-2">
                NT$ {product.price.toLocaleString()}
              </div>
              <p className="text-xs text-stone-500">
                可分 6 期 0 利率，每期 NT$ {Math.round(product.price / 6).toLocaleString()}
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-stone-600 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between border-b border-dashed border-stone-200 py-2">
                  <span className="text-stone-500">翡翠種類</span>
                  <span className="text-stone-800">{product.jadeType}</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-stone-200 py-2">
                  <span className="text-stone-500">主石尺寸</span>
                  <span className="text-stone-800">{product.specs.size}</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-stone-200 py-2">
                  <span className="text-stone-500">金屬材質</span>
                  <span className="text-stone-800">{product.specs.material}</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-stone-200 py-2">
                  <span className="text-stone-500">庫存狀態</span>
                  <span className="text-jade-700">現貨</span>
                </div>
              </div>

              {/* Selectors */}
              {product.category === 'Ring' && (
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">戒圍尺寸 (國際圍)</label>
                  <select 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full border-stone-300 rounded-sm shadow-sm focus:border-jade-500 focus:ring-jade-500"
                  >
                    <option value="#9">#9</option>
                    <option value="#10">#10</option>
                    <option value="#11">#11</option>
                    <option value="#12">#12</option>
                  </select>
                  <a href="#" className="text-xs text-jade-700 underline mt-2 inline-block">如何測量戒圍？</a>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => addToCart(product, 1, selectedSize)}
                className="flex-1 bg-stone-900 text-white py-4 hover:bg-stone-800 transition shadow-lg text-sm font-bold tracking-widest uppercase"
              >
                加入購物車
              </button>
              <button className="flex-1 border border-stone-900 text-stone-900 py-4 hover:bg-stone-50 transition text-sm font-bold tracking-widest uppercase">
                立即結帳
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-stone-50 rounded-sm">
              <div className="flex items-start space-x-3">
                <Shield className="text-jade-700 flex-shrink-0" size={20}/>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">真品保證</h4>
                  <p className="text-[10px] text-stone-500 leading-tight">附第三方權威鑑定證書，假一賠十</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RefreshCcw className="text-jade-700 flex-shrink-0" size={20}/>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">七日鑑賞</h4>
                  <p className="text-[10px] text-stone-500 leading-tight">收到商品 7 日內可無條件申請退換貨</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Truck className="text-jade-700 flex-shrink-0" size={20}/>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">免運配送</h4>
                  <p className="text-[10px] text-stone-500 leading-tight">全館滿 NT$3,000 免運費，安全宅配</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20">
          <div className="border-b border-stone-200 flex space-x-8 overflow-x-auto">
            {[
              { id: 'details', label: '商品詳情' },
              { id: 'wear', label: '佩戴示意' },
              { id: 'cert', label: '鑑定資訊' },
              { id: 'reviews', label: `顧客評價 (${product.reviewCount})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 px-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id 
                    ? 'border-jade-800 text-jade-900' 
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-12 min-h-[300px]">
            {activeTab === 'details' && (
              <div className="prose prose-stone max-w-3xl mx-auto">
                <h3 className="font-serif">關於這件作品</h3>
                <p>每一塊翡翠都是大自然億萬年的傑作。這件作品選用{product.jadeType}翡翠，結構細膩，光澤油潤。設計師保留了翡翠最原始的美感，輔以簡約的線條，展現出獨特的東方韻味。</p>
                <h4 className="mt-8 font-serif">保養建議</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>避免碰撞：翡翠雖硬度高，但脆性大，應避免與硬物碰撞。</li>
                  <li>避免高溫：長期高溫曝曬可能導致翡翠失去水分，光澤變暗。</li>
                  <li>定期清潔：使用軟布擦拭，或用中性清潔劑清洗後擦乾。</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'wear' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img src="https://picsum.photos/id/10/800/600" alt="Model wearing" className="w-full rounded-sm shadow-sm"/>
                <div>
                  <h3 className="font-serif text-2xl mb-4">日常搭配建議</h3>
                  <p className="text-stone-600 mb-4">
                    翡翠不再是老氣的代名詞。這款設計簡約大方，非常適合搭配白色襯衫或大地色系的針織衫，
                    能瞬間提升整體造型的質感，展現低調的奢華。
                  </p>
                  <p className="text-sm text-stone-500 italic">
                    * 照片為模特佩戴示意，實際大小請參考規格尺寸。
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'cert' && (
              <div className="flex flex-col md:flex-row gap-8 items-center bg-stone-50 p-8 rounded-lg">
                <div className="w-full md:w-1/3 bg-white p-4 shadow-sm border border-stone-200">
                  <div className="aspect-[3/4] bg-stone-100 flex items-center justify-center text-stone-400">
                    [ 鑑定書示意圖 ]
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="font-serif text-xl mb-4 text-jade-900 flex items-center">
                    <Check className="mr-2" /> 專業鑑定保證
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 border border-stone-200">
                      <span className="block text-stone-400 text-xs">鑑定機構</span>
                      <span className="font-bold text-stone-800">TGI 台灣寶石研究院</span>
                    </div>
                    <div className="bg-white p-3 border border-stone-200">
                      <span className="block text-stone-400 text-xs">鑑定結論</span>
                      <span className="font-bold text-stone-800">天然翡翠 (A貨)</span>
                    </div>
                    <div className="bg-white p-3 border border-stone-200">
                      <span className="block text-stone-400 text-xs">光性特徵</span>
                      <span className="font-bold text-stone-800">非均質集合體</span>
                    </div>
                    <div className="bg-white p-3 border border-stone-200">
                      <span className="block text-stone-400 text-xs">折射率</span>
                      <span className="font-bold text-stone-800">1.66 (點測)</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-4">
                    * 每件商品出貨時皆附正本鑑定書，可掃描 QR Code 線上複查。
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <h3 className="font-bold text-xl">顧客評價</h3>
                  <div className="flex items-center text-yellow-500">
                    <Star fill="currentColor" /> 
                    <span className="text-stone-900 font-bold ml-1 text-lg">4.9</span>
                    <span className="text-stone-400 text-sm ml-1">/ 5</span>
                  </div>
                </div>
                
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-stone-100 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-stone-800">陳**姐</span>
                      <span className="text-xs text-stone-400">2023-11-20</span>
                    </div>
                    <div className="flex text-yellow-500 text-xs mb-3">
                      {[...Array(5)].map((_, k) => <Star key={k} size={12} fill="currentColor"/>)}
                    </div>
                    <p className="text-sm text-stone-600">
                      實品比照片更美！透光度真的很好，戴起來手顯得很白。包裝也很精緻，還送了保養布，非常貼心。推薦給還在猶豫的人！
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;