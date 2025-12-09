import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white tracking-wider">JADE & CO.</h3>
            <p className="text-sm leading-relaxed text-stone-400">
              傳承東方美學，嚴選天然 A 貨翡翠。<br />
              每一件作品，都是大自然的饋贈與匠心的結合。
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wide uppercase text-sm">顧客服務</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">購物說明</a></li>
              <li><a href="#" className="hover:text-white transition">退換貨政策</a></li>
              <li><a href="#" className="hover:text-white transition">常見問題 Q&A</a></li>
              <li><a href="#" className="hover:text-white transition">隱私權條款</a></li>
            </ul>
          </div>

          {/* Series */}
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wide uppercase text-sm">熱門系列</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">高冰種系列</a></li>
              <li><a href="#" className="hover:text-white transition">正陽綠典藏</a></li>
              <li><a href="#" className="hover:text-white transition">日常輕珠寶</a></li>
              <li><a href="#" className="hover:text-white transition">男士墨翠</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 tracking-wide uppercase text-sm">聯絡我們</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2 flex-shrink-0" />
                <span>台北市信義區松高路 99 號<br />翡翠大樓 8 樓</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>02-2345-6789</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>service@jadeandco.com</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-stone-500">
              客服時間：週一至週五 10:00 - 18:00
            </p>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} JADE & CO. All Rights Reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;