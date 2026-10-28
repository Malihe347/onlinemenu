import React, { useState } from 'react';
import { Phone, Send, MessageCircle, Wifi, QrCode, Check } from 'lucide-react';

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

interface FooterProps {
  onOpenQr: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQr }) => {
  const [wifiCopied, setWifiCopied] = useState(false);

  // رفع ارور Safe Clipboard: پشتیبانی از حالت‌های امن و فال‌بک
  const handleCopyWifi = async () => {
    const textToCopy = 'elora-guest-2026';
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback برای مرورگرهای قدیمی یا وب‌ویو موبایل
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setWifiCopied(true);
      setTimeout(() => setWifiCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
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
          {wifiCopied ? <Check className="w-3.5 h-3.5 text-[#FAF7F2]" /> : <Wifi className="w-3.5 h-3.5 text-[#FAF7F2]" />}
        </button>
        <button
          onClick={onOpenQr}
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
  );
};
