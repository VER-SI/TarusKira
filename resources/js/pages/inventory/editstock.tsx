import React, { useState, useEffect } from 'react';
import { X, Tag, Hash, Banknote, Save, Trash2 } from 'lucide-react';

interface EditStockProps {
  item: any;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (item: any) => void;
  onDelete: (id: number) => void;
}

const EditStock = ({ item, isOpen, onClose, onUpdate, onDelete }: EditStockProps) => {
  const [formData, setFormData] = useState({ ...item });

  useEffect(() => { 
    if (item) setFormData({ ...item }); 
  }, [item]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ 
        ...formData, 
        price: parseFloat(formData.price), 
        defaultStock: parseInt(formData.defaultStock) 
    });
  };

  if (!isOpen) return null;

  const labelClasses = "text-[12px] font-black uppercase text-slate-900 tracking-[0.15em] px-3 mb-2 block";
  const inputWrapper = "relative flex items-center group mb-5";
  const iconClass = "absolute left-5 text-blue-500 transition-colors";
  const inputStyle = "w-full bg-white/80 backdrop-blur-md border border-white rounded-[1.8rem] py-5 pl-14 pr-6 text-[14px] font-bold outline-none shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900 placeholder:text-slate-300";

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/40 backdrop-blur-sm transition-all overflow-hidden">

      <div className="bg-white/90 backdrop-blur-2xl w-full max-w-md p-8 rounded-t-[3rem] shadow-2xl relative z-10 animate-in slide-in-from-bottom-20 duration-300 border-t border-white">
        
        {/* DRAG HANDLE */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6 opacity-50" />

        <div className="flex justify-between items-center mb-8 px-2">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Edit Item</h2>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none mt-1">Modify Product Details</p>
          </div>
          <button onClick={onClose} className="p-2.5 bg-blue-50 text-blue-600 rounded-full active:scale-90 transition-all">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <section>
            <label className={labelClasses}>Identity</label>
            <div className={inputWrapper}>
              <Tag className={iconClass} size={18} />
              <input 
                className={inputStyle} 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
          </section>

          <div className="grid grid-cols-2 gap-4">
            {/* Price Input */}
            <section>
              <label className={labelClasses}>Price (BND)</label>
              <div className={inputWrapper}>
                <Banknote className={iconClass} size={18} />
                <input 
                  type="number" 
                  step="0.10" 
                  className={inputStyle}
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>
            </section>
            
            {/* Default Stock Input */}
            <section>
              <label className={labelClasses}>Default Stock</label>
              <div className={inputWrapper}>
                <Hash className={iconClass} size={18} />
                <input 
                  type="number" 
                  className={inputStyle}
                  value={formData.defaultStock}
                  onChange={(e) => setFormData({...formData, defaultStock: e.target.value})}
                />
              </div>
            </section>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              type="button" 
              onClick={() => onDelete(item.id)}
              className="flex-1 bg-red-50 text-red-500 py-5 rounded-[2.2rem] font-black text-[12px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all border border-red-100"
            >
              <Trash2 size={16} /> Delete
            </button>
            <button 
              type="submit" 
              className="flex-[2] bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-5 rounded-[2.2rem] font-black text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl shadow-blue-200 active:scale-95 transition-all border-t border-white/20"
            >
              <Save size={16} /> Save Changes
            </button>
          </div>
          
          <p className="text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] mt-6 pb-2">
            *Updates reflect immediately in Stock Room
          </p>
        </form>
      </div>
    </div>
  );
};

export default EditStock;