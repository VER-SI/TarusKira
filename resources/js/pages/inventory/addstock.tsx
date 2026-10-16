import React, { useState } from 'react';
import { X, Tag, Hash, Banknote, PlusCircle } from 'lucide-react';

interface AddStockProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: any) => void;
}

const AddStock = ({ isOpen, onClose, onAdd }: AddStockProps) => {
  const [newItem, setNewItem] = useState({ 
    name: '', 
    defaultStock: '', 
    price: '', 
    category: 'Food' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newItem);
    setNewItem({ name: '', defaultStock: '', price: '', category: 'Food' });
    onClose();
  };

  if (!isOpen) return null;

  // Consistent with your established style guide
  const labelClasses = "text-[12px] font-black uppercase text-slate-900 tracking-[0.15em] px-3 mb-2 block";
  const inputWrapper = "relative flex items-center group mb-5";
  const iconClass = "absolute left-5 text-blue-500 transition-colors";
  const inputStyle = "w-full bg-white/80 backdrop-blur-md border border-white rounded-[1.8rem] py-5 pl-14 pr-6 text-[14px] font-bold outline-none shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900 placeholder:text-slate-300";

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/40 backdrop-blur-sm transition-all overflow-hidden">
      
      {/* BRANDING BACKGROUND CURVE (Matches your Profile page for consistency) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[40%] left-[-15%] w-[130%] h-[100%] bg-[#3ABEF9]" 
          style={{ borderRadius: '100% 100% 0 0' }}
        />
      </div>

      <div className="bg-white/90 backdrop-blur-2xl w-full max-w-md p-8 rounded-t-[3rem] shadow-2xl relative z-10 animate-in slide-in-from-bottom-20 duration-300 border-t border-white">
        
        {/* DRAG HANDLE FOR MOBILE FEEL */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6 opacity-50" />

        {/* Header */}
        <div className="flex justify-between items-center mb-8 px-2">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">New Stall Item</h2>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none mt-1">Configure Stock Defaults</p>
          </div>
          <button onClick={onClose} className="p-2.5 bg-blue-50 text-blue-600 rounded-full active:scale-90 transition-all">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Item Name */}
          <section>
            <label className={labelClasses}>Identity</label>
            <div className={inputWrapper}>
              <Tag className={iconClass} size={18} />
              <input 
                placeholder="e.g. Nasi Katok Classic"
                className={inputStyle}
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                required
              />
            </div>
          </section>
          
          {/* Category Selector */}
          <section>
            <label className={labelClasses}>Category</label>
            <div className="flex gap-2 p-2 bg-white/50 backdrop-blur-xl rounded-[2rem] border border-white shadow-inner mb-6">
              {['Food', 'Drink', 'Cucur'].map(cat => (
                <button 
                  key={cat} type="button"
                  onClick={() => setNewItem({...newItem, category: cat})}
                  className={`flex-1 py-3 rounded-[1.4rem] text-[10px] font-black uppercase tracking-widest transition-all ${
                    newItem.category === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Price & Default Stock Grid */}
          <div className="grid grid-cols-2 gap-4">
            <section>
              <label className={labelClasses}>Price (BND)</label>
              <div className={inputWrapper}>
                <Banknote className={iconClass} size={18} />
                <input 
                  type="number" step="0.10" placeholder="1.50"
                  className={inputStyle}
                  value={newItem.price}
                  onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                  required
                />
              </div>
            </section>
            <section>
              <label className={labelClasses}>Daily Stock</label>
              <div className={inputWrapper}>
                <Hash className={iconClass} size={18} />
                <input 
                  type="number" placeholder="50"
                  className={inputStyle}
                  value={newItem.defaultStock}
                  onChange={(e) => setNewItem({...newItem, defaultStock: e.target.value})}
                  required
                />
              </div>
            </section>
          </div>

          {/* Submit Button */}
            <div className="pt-4">
            <button 
                type="submit" 
                className="w-full bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 py-5 rounded-[2.2rem] text-white font-black text-[13px] uppercase tracking-[0.25em] shadow-xl shadow-blue-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3 border-t border-white/20"
            >
                <PlusCircle size={18} />
                Add to Stock Room
            </button>
            
            <p className="text-center text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] mt-6">
                *Resets to default at End Shift
            </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddStock;