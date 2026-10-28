import { useState } from 'react';
import { ChevronLeft, ArrowLeft } from 'lucide-react';
import { MAIN_LINES } from './data/menuData';
import type { SubItem } from './data/menuData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ItemModal } from './components/ItemModal';
import { QrModal } from './components/QrModal';

export default function App() {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [showQr, setShowQr] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const isRtl = lang === 'fa';

  const activeCategoryData = MAIN_LINES.find((cat) => cat.id === selectedCategory);
  const activeItem = activeCategoryData?.items.find((item) => item.id === selectedItem);

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

        {/* بخش هدر و برندینگ */}
        <Header lang={lang} onToggleLang={() => setLang(lang === 'fa' ? 'en' : 'fa')} />

        {/* محتوای اصلی: لیست دسته‌بندی‌ها یا محصولات */}
        <main className="relative z-10 px-6 py-4 flex-1 overflow-y-auto flex flex-col justify-start sm:justify-center">
          {!selectedCategory ? (
            <div className="flex flex-col gap-3.5 my-auto w-full pt-2 pb-2">
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
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedItem(null);
                  }}
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

              {/* لیست آیتم‌های لاین */}
              <div className="space-y-3 overflow-y-auto pr-1 flex-1">
                {activeCategoryData?.items.map((item: SubItem) => {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedItem(item.id)}
                      className="w-full text-right bg-[#E8DCCF]/90 hover:bg-[#DFCDBF] backdrop-blur-md border border-[#D4C4B3] rounded-2xl p-3 shadow-sm relative text-[#4A3525] transition-all"
                    >
                      {item.popular && (
                        <span className="absolute top-2.5 left-2.5 bg-[#A3785E] text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10">
                          {isRtl ? 'پرفروش' : 'Popular'}
                        </span>
                      )}

                      {/* ساختار رسپانسیو کارت */}
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={typeof item.title === 'string' ? item.title : (isRtl ? item.title?.fa : item.title?.en)}
                            className="w-16 h-16 rounded-xl object-cover border border-[#D4C4B3] shadow-inner flex-shrink-0 bg-[#E8DCCF]"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80';
                            }}
                          />
                        )}

                        <div className="flex-1 w-full flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-sm leading-tight">
                              {typeof item.title === 'string' ? item.title : (isRtl ? item.title?.fa : item.title?.en)}
                            </h3>
                            <p className="text-[11px] text-[#735543] mt-0.5 leading-relaxed line-clamp-1">
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
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </main>

        {/* بخش فوتر */}
        <Footer onOpenQr={() => setShowQr(true)} />

        {/* مدال جزئیات آیتم منو */}
        {selectedItem && activeItem && (
          <ItemModal
            item={activeItem}
            isRtl={isRtl}
            onClose={() => setSelectedItem(null)}
          />
        )}

        {/* مدال بارکد QR */}
        {showQr && (
          <QrModal
            isRtl={isRtl}
            onClose={() => setShowQr(false)}
          />
        )}

      </div>
    </div>
  );
}
