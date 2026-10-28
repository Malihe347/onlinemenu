import React from 'react';
import type { SubItem } from '../data/menuData';

interface ItemModalProps {
  item: SubItem;
  isRtl: boolean;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, isRtl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#4A3525]/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] border border-[#D4C4B3] rounded-3xl p-5 w-full max-w-[300px] text-right shadow-2xl animate-fadeIn">
        {item.imageUrl && (
          <div className="w-full h-44 rounded-2xl overflow-hidden mb-3 border border-[#D4C4B3] shadow-inner bg-[#E8DCCF]">
            <img
              src={item.imageUrl}
              alt={typeof item.title === 'string' ? item.title : (isRtl ? item.title?.fa : item.title?.en)}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80';
              }}
            />
          </div>
        )}
        <h3 className="font-bold text-base text-[#4A3525] mb-1">
          {typeof item.title === 'string' ? item.title : (isRtl ? item.title?.fa : item.title?.en)}
        </h3>
        <p className="text-xs text-[#735543] leading-relaxed mb-4">
          {typeof item.desc === 'string' ? item.desc : (isRtl ? item.desc?.fa : item.desc?.en)}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-[#D4C4B3]">
          <span className="font-bold text-[#8C624E] text-sm">
            {item.price.toLocaleString('fa-IR')} {isRtl ? 'تومان' : 'Tomans'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#A3785E] hover:bg-[#8C624E] text-[#FAF7F2] rounded-xl text-xs font-semibold transition"
          >
            {isRtl ? 'بستن' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
