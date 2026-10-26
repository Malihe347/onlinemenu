import { useState } from 'react';
import {
  Phone,
  Send,
  MessageCircle,
  Wifi,
  QrCode,
  Check,
  ChevronLeft,
  ArrowLeft,
} from 'lucide-react';
import { MAIN_LINES } from './data/menuData';
import type { SubItem } from './data/menuData';

// آیکون استاندارد اینستاگرام به صورت SVG برای جلوگیری از ارور lucide-react
const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [wifiCopied, setWifiCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const isRtl = lang === 'fa';

  const handleCopyWifi = () => {
    navigator.clipboard.writeText('elora-guest-2026');
    setWifiCopied(true);
    setTimeout(() => setWifiCopied(false), 2000);
  };

  const activeCategoryData = MAIN_LINES.find((cat) => cat.id === selectedCategory);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative min-h-[100dvh] w-full flex justify-center items-center overflow-hidden bg-[#FAF7F2] font-sans select-none"
    >
      {/* کانتینر اصلی موبایل */}
      <div className="relative w-full max-w-md h-[100dvh] flex flex-col justify-between overflow-hidden shadow-2xl bg-[#FAF7F2]">

        {/* پس‌زمینه محو کافه */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('/img/background.jpg')`,
          }}
        />

        {/* هدر: سوئیچ زبان */}
        <header className="relative z-10 pt-4 px-6 flex justify-end items-center">
          <button
            onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCCF] border border-[#D5C7B8] shadow-sm text-xs font-semibold text-[#4A3525] transition active:scale-95"
          >
            <span>{lang === 'fa' ? 'IR فا' : 'GB|EN'}</span>
          </button>
        </header>

        {/* لوگو و عنوان کافه الورا */}
        <div className="relative z-10 flex flex-col items-center mt-2 px-6">
          <div className="w-36 py-3 rounded-2xl bg-[#A3785E] border border-[#8C624E]/30 flex flex-col items-center justify-center shadow-md">
            <h1 className="text-2xl font-black tracking-widest text-[#FAF7F2] font-serif m-0">
              ELORA
            </h1>
            <span className="text-[10px] text-[#F3E5DC] tracking-widest uppercase font-medium mt-0.5">
              Lounge & Cafe
            </span>
          </div>
        </div>

        {/* محتوای اصلی: لیست دسته‌بندی‌ها یا محصولات */}
        <main className="relative z-10 px-6 py-4 flex-1 overflow-y-auto flex flex-col justify-center">
          {!selectedCategory ? (
            <div className="flex flex-col gap-3.5">
              {MAIN_LINES.map((line) => (
                <button
                  key={line.id}
                  onClick={() => setSelectedCategory(line.id)}
                  className="group relative w-full h-[52px] rounded-2xl flex items-center justify-center 
                             bg-[#E8DCCF]/90 hover:bg-[#DFCDBF] backdrop-blur-sm
                             border border-[#D4C4B3] shadow-[0_3px_10px_rgba(74,53,37,0.06)]
                             transition-all duration-200 active:scale-[0.98]"
                >
                  <span className="text-base font-bold text-[#4A3525] tracking-wide">
                    {typeof line.title === 'string' ? line.title : (isRtl ? line.title.fa : line.title.en)}
                  </span>
                  <ChevronLeft
                    className={`w-4 h-4 text-[#8C624E] absolute ${isRtl ? 'left-4' : 'right-4 rotate-180'
                      } opacity-90 group-hover:opacity-100 transition-opacity`}
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col h-full py-2 animate-fadeIn">
              {/* دکمه بازگشت */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E8DCCF] border border-[#D4C4B3] text-[#4A3525] text-xs font-bold hover:bg-[#DFCDBF] transition shadow-sm"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRtl ? '' : 'rotate-180'}`} />
                  <span>{isRtl ? 'بازگشت' : 'Back'}</span>
                </button>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#A3785E] text-[#FAF7F2]">
                  {activeCategoryData && (
                    typeof activeCategoryData.title === 'string'
                      ? activeCategoryData.title
                      : (isRtl ? activeCategoryData.title.fa : activeCategoryData.title.en)
                  )}
                </span>
              </div>

              {/* لیست آیتم‌های لاین به همراه عکس */}
              <div className="space-y-3 overflow-y-auto pr-1 flex-1">
                {activeCategoryData?.items.map((item: SubItem) => (
                  <div
                    key={item.id}
                    className="bg-[#E8DCCF]/90 backdrop-blur-md border border-[#D4C4B3] rounded-2xl p-3 shadow-sm flex items-center gap-3 relative"
                  >
                    {item.popular && (
                      <span className="absolute top-2.5 left-2.5 bg-[#A3785E] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10">
                        {isRtl ? 'پرفروش' : 'Popular'}
                      </span>
                    )}

                    {/* عکس آیتم */}                   
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={typeof item.title === 'string' ? item.title : (isRtl ? item.title?.fa : item.title?.en)}
                        className="w-16 h-16 rounded-xl object-cover border border-[#D4C4B3] shadow-inner flex-shrink-0 bg-[#E8DCCF]"
                        onError={(e) => {                  
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80';
                        }}
                      />
                    )}


                    {/* اطلاعات آیتم */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-[#4A3525] text-sm leading-tight">
                          {typeof item.title === 'string' ? item.title : (isRtl ? item.title?.fa : item.title?.en)}
                        </h3>
                        <p className="text-[11px] text-[#735543] mt-0.5 leading-relaxed line-clamp-2">
                          {typeof item.desc === 'string' ? item.desc : (isRtl ? item.desc?.fa : item.desc?.en)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-1 mt-1 border-t border-[#D4C4B3]/50">
                        <span className="font-bold text-[#8C624E] text-xs">
                          {item.price.toLocaleString('fa-IR')} {isRtl ? 'تومان' : 'Tomans'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* نوار فوتر و آیکون‌های ارتباطی */}
        <footer className="relative z-10 pb-6 pt-2 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/989123456789"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] border border-[#8C624E]/30 flex items-center justify-center transition active:scale-95 shadow-sm"
              title="واتس‌اپ"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/elora.lounge"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] border border-[#8C624E]/30 flex items-center justify-center transition active:scale-95 shadow-sm"
              title="اینستاگرام"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/eloralounge"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] border border-[#8C624E]/30 flex items-center justify-center transition active:scale-95 shadow-sm"
              title="تلگرام"
            >
              <Send className="w-3.5 h-3.5 -translate-x-0.5" />
            </a>
            <a
              href="tel:02188880000"
              className="w-9 h-9 rounded-full bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] border border-[#8C624E]/30 flex items-center justify-center transition active:scale-95 shadow-sm"
              title="تماس"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={handleCopyWifi}
              className="w-9 h-9 rounded-full bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] border border-[#8C624E]/30 flex items-center justify-center transition active:scale-95 shadow-sm"
              title="کپی وای‌فای"
            >
              {wifiCopied ? <Check className="w-3.5 h-3.5 text-[#FAF7F2]" /> : <Wifi className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setShowQr(true)}
              className="w-9 h-9 rounded-full bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] border border-[#8C624E]/30 flex items-center justify-center transition active:scale-95 shadow-sm"
              title="QR Code میز"
            >
              <QrCode className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-[10px] text-[#735543] font-semibold tracking-wider uppercase">
            Powered by ELORA
          </div>
        </footer>

        {/* مدال بارکد QR */}
        {showQr && (
          <div className="fixed inset-0 z-50 bg-[#4A3525]/40 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#FAF7F2] border border-[#D4C4B3] rounded-3xl p-6 w-full max-w-[270px] text-center shadow-2xl">
              <h3 className="text-sm font-bold text-[#4A3525] mb-1">
                {isRtl ? 'منوی دیجیتال میز' : 'Table Digital Menu'}
              </h3>
              <p className="text-[11px] text-[#8C624E] mb-4">ELORA Lounge</p>
              <div className="p-3 bg-white rounded-2xl shadow-inner inline-block">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://elora.menu"
                  alt="QR Code"
                  className="w-32 h-32"
                />
              </div>
              <button
                onClick={() => setShowQr(false)}
                className="mt-4 w-full py-2 bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] rounded-xl text-xs font-semibold transition"
              >
                {isRtl ? 'بستن' : 'Close'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
