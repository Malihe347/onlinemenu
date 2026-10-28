import React from 'react';

interface HeaderProps {
  lang: 'fa' | 'en';
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang }) => {
  return (
    <>
      {/* هدر: سوئیچ زبان */}
      <header className="relative z-10 pt-4 px-6 flex justify-end items-center">
        <button
          onClick={onToggleLang}
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
    </>
  );
};
