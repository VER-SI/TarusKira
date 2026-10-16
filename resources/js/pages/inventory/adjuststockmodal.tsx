import React, { useState } from 'react';
import { X, Plus, Minus, CheckCircle2 } from 'lucide-react';

const AdjustStockModal = ({ item, isOpen, onClose, onConfirm }: any) => {
  const [amount, setAmount] = useState(1);
  const [mode, setMode] = useState<'add' | 'remove'>('add');

  const newTotal = mode === 'add' ? item.stock + amount : Math.max(0, item.stock - amount);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-slate-900/40 backdrop-blur-sm transition-all">
      <div className="bg-white/90 backdrop-blur-2xl w-full max-w-sm p-8 rounded-[3rem] shadow-2xl animate-in zoom-in-95 duration-200 border border-white">
        
        <div className="text-center mb-8">
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1">Quick Action</p>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">{item.name}</h3>
        </div>

        {/* Toggle Mode */}
        <div className="flex bg-slate-100/50 p-1.5 rounded-2xl mb-8 border border-slate-100">
          <button 
            onClick={() => setMode('add')}
            className={`flex-1 py-3.5 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'add' ? 'bg-white text-emerald-600 shadow-md shadow-emerald-100/50' : 'text-slate-400 opacity-60'}`}
          >
            <Plus size={14} strokeWidth={3} /> Adding
          </button>
          <button 
            onClick={() => setMode('remove')}
            className={`flex-1 py-3.5 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'remove' ? 'bg-white text-red-500 shadow-md shadow-red-100/50' : 'text-slate-400 opacity-60'}`}
          >
            <Minus size={14} strokeWidth={3} /> Removing
          </button>
        </div>

        {/* Amount Selector */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <button 
            onClick={() => setAmount(Math.max(1, amount - 1))} 
            className="w-14 h-14 bg-white rounded-2xl text-slate-900 border border-slate-100 shadow-sm flex items-center justify-center active:scale-90 transition-all active:bg-slate-50"
          >
            <Minus size={22} strokeWidth={2.5} />
          </button>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl font-black text-slate-900 tracking-tighter">{amount}</span>
            <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Units</span>
          </div>

          <button 
            onClick={() => setAmount(amount + 1)} 
            className="w-14 h-14 bg-white rounded-2xl text-slate-900 border border-slate-100 shadow-sm flex items-center justify-center active:scale-90 transition-all active:bg-slate-50"
          >
            <Plus size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Summary Box */}
        <div className="bg-blue-50/50 rounded-[2rem] p-6 mb-8 border border-blue-100/50 border-dashed">
            <div className="flex justify-between items-center opacity-40 mb-2">
                <span className="text-[9px] font-black uppercase tracking-widest">Initial Stock</span>
                <span className="text-[10px] font-bold">{item.stock}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Projected Total</span>
                <span className="text-xl font-black text-blue-600 tracking-tight">{newTotal} Units</span>
            </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={onClose} 
            className="flex-1 py-5 bg-slate-50 text-slate-400 font-black rounded-[2.2rem] text-[10px] uppercase tracking-widest active:scale-95 transition-all border border-slate-100"
          >
            Cancel
          </button>
          <button 
            onClick={() => onConfirm(item.id, newTotal)}
            className="flex-[2] py-5 bg-gradient-to-br from-blue-600 to-blue-500 text-white font-black rounded-[2.2rem] text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-blue-100 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <CheckCircle2 size={16} /> Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdjustStockModal;