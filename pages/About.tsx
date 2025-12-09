import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative h-[60vh] bg-stone-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-800 opacity-50"></div>
        <img 
          src="https://picsum.photos/id/40/1200/800" 
          alt="Workshop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">堅持真品，是對大地最深的敬意</h1>
          <p className="text-lg font-light text-stone-300 max-w-2xl mx-auto">
            JADE & CO. 致力於讓翡翠回歸純粹的美好，<br/>
            每一件作品，都承載著我們對品質的偏執。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Story Section */}
        <section className="text-center space-y-6">
          <span className="text-jade-700 uppercase tracking-widest text-sm font-bold">Brand Story</span>
          <h2 className="text-3xl font-serif text-stone-900">為什麼我們做翡翠？</h2>
          <p className="text-stone-600 leading-loose">
            在混亂的市場中，找到一件令人安心的翡翠，竟成了最困難的事。<br/>
            我們見過太多被化學藥劑破壞的 B 貨、C 貨，在燈光下偽裝成珍寶。<br/><br/>
            JADE & CO. 的成立，就是為了打破這層迷霧。<br/>
            我們堅持「非 A 貨不賣」，所有原石親自挑選，與擁有三十年經驗的老師傅合作切割打磨。<br/>
            我們相信，翡翠是有靈性的，唯有真誠，才能對得起這份大自然的饋贈。
          </p>
        </section>

        <hr className="border-stone-200 w-24 mx-auto" />

        {/* Process Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <img src="https://picsum.photos/id/60/600/800" alt="Inspection" className="rounded-sm shadow-md"/>
           <div className="space-y-6">
             <h3 className="text-2xl font-serif text-stone-900">嚴格鑑定，層層把關</h3>
             <p className="text-stone-600 leading-relaxed">
               我們深知信任建立不易。因此，除了內部的初步篩選，
               JADE & CO. 與國內權威鑑定機構（如 TGI、GIC）深度合作。
             </p>
             <ul className="space-y-4">
               <li className="flex items-start">
                 <span className="w-8 h-8 rounded-full bg-jade-100 text-jade-800 flex items-center justify-center mr-4 font-bold text-sm">1</span>
                 <span className="text-stone-700 pt-1">原石篩選：剔除有嚴重裂紋或雜質的料子。</span>
               </li>
               <li className="flex items-start">
                 <span className="w-8 h-8 rounded-full bg-jade-100 text-jade-800 flex items-center justify-center mr-4 font-bold text-sm">2</span>
                 <span className="text-stone-700 pt-1">成品送檢：每件商品皆送往第三方實驗室檢測。</span>
               </li>
               <li className="flex items-start">
                 <span className="w-8 h-8 rounded-full bg-jade-100 text-jade-800 flex items-center justify-center mr-4 font-bold text-sm">3</span>
                 <span className="text-stone-700 pt-1">雙重認證：出貨附上鑑定證書與店家保證卡。</span>
               </li>
             </ul>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;