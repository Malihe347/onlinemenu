import React from 'react';

interface QrModalProps {
  isRtl: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isRtl, onClose }) => {
  const currentMenuUrl = typeof window !== 'undefined' ? window.location.href : 'https://elora.menu';

  return (
    <div className="fixed inset-0 z-50 bg-[#4A3525]/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] border border-[#D4C4B3] rounded-3xl p-6 w-full max-w-[270px] text-center shadow-2xl">
        <h3 className="text-sm font-bold text-[#4A3525] mb-1">
          {isRtl ? 'منوی دیجیتال میز' : 'Table Digital Menu'}
        </h3>
        <p className="text-[11px] text-[#8C624E] mb-4">ELORA Lounge</p>
        <div className="p-3 bg-white rounded-2xl shadow-inner inline-block">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(currentMenuUrl)}`}
            alt="QR Code"
            className="w-32 h-32"
          />
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] rounded-xl text-xs font-semibold transition"
        >
          {isRtl ? 'بستن' : 'Close'}
        </button>
      </div>
    </div>
  );
};
