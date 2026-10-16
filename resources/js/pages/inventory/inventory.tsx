import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
  ChevronLeft, Plus, Package, 
  Settings2, RefreshCcw, ArrowUpDown,
  Layers
} from 'lucide-react';
import BottomNav from '../../components/bottomnav';
import AddStock from './addstock'; 
import EditStock from './editstock'; 
import AdjustStockModal from './adjuststockmodal';

const Inventory = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [adjustingItem, setAdjustingItem] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const [items, setItems] = useState([
    { id: 1, name: 'Nasi Katok Classic', stock: 45, defaultStock: 50, price: 1.50, category: 'Food' },
    { id: 2, name: 'Mee Goreng Basah', stock: 12, defaultStock: 20, price: 2.50, category: 'Food' },
    { id: 4, name: 'Iced Milo', stock: 80, defaultStock: 100, price: 2.00, category: 'Drink' },
    { id: 5, name: 'Cucur Udang', stock: 25, defaultStock: 40, price: 1.00, category: 'Cucur' },
  ]);

  const categories = ['All', 'Food', 'Drink', 'Cucur'];
  const filteredItems = items.filter(item => activeFilter === 'All' ? true : item.category === activeFilter);

  return (
    <div className="h-screen flex flex-col font-sans text-slate-900 relative bg-white overflow-hidden">
      <Head title="Inventory Management" />

      {/* BACKGROUND CURVE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[15%] left-[-15%] w-[130%] h-[100%] bg-[#3ABEF9]" 
          style={{ borderRadius: '100% 100% 0 0' }}
        />
      </div>

      {/* HEADER */}
      <header className="relative z-30 px-6 py-4 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="flex justify-between items-center max-w-md mx-auto w-full mb-4">
          <div className="flex items-center gap-3">
            <div>
                <h1 className="text-lg font-black text-slate-900 tracking-tight">Inventory</h1>
                <p className="text-[8px] font-bold text-blue-500 uppercase tracking-widest leading-none">Stock Room</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsAddModalOpen(true)} 
            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center active:scale-90 transition-all"
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar max-w-md mx-auto">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveFilter(cat)} 
              className={`px-4 py-1.5 rounded-lg text-[9px] font-black transition-all whitespace-nowrap uppercase tracking-widest ${
                activeFilter === cat 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-100' 
                : 'bg-white/50 text-slate-400 border border-white active:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full relative z-10 overflow-y-auto hide-scrollbar space-y-4 pb-28">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative bg-white/90 backdrop-blur-2xl rounded-[2rem] border border-white shadow-sm overflow-hidden transition-all">
            <div className="p-5">
                {/* TOP SECTION: Information Cluster */}
                <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100/50">
                            <Package size={22} strokeWidth={2.5} />
                        </div>
                        <div>
                            <div className="flex gap-1.5 mb-1.5">
                                <span className="text-[7px] font-black bg-blue-600 text-white px-2 py-0.5 rounded-md uppercase tracking-widest">
                                    {item.category}
                                </span>
                                <span className="text-[7px] font-black bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-md uppercase tracking-widest">
                                    BND {item.price.toFixed(2)}
                                </span>
                            </div>
                            <h4 className="font-black text-[16px] text-slate-900 tracking-tight leading-none mb-2">{item.name}</h4>
                            <div className="flex items-center gap-1.5 opacity-60">
                                <Layers size={10} className="text-slate-500" />
                                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Default Stock: {item.defaultStock} Units</span>
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={() => setEditingItem(item)} 
                        className="p-2.5 bg-slate-50 text-slate-300 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-90"
                    >
                        <Settings2 size={16} />
                    </button>
                </div>

                {/* BOTTOM SECTION: Stock Control Row */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-50">
                    <button 
                        onClick={() => setAdjustingItem(item)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-[1.2rem] p-3.5 flex items-center justify-between shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
                    >
                        <div className="flex items-center gap-3 pl-1">
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[18px] font-black text-white">{item.stock}</span>
                                <span className="text-[7px] font-bold text-blue-100 uppercase tracking-widest opacity-70">Current Stock</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                            <ArrowUpDown size={12} className="text-white" strokeWidth={3} />
                            <span className="text-[9px] font-black text-white uppercase tracking-tight">Adjust</span>
                        </div>
                    </button>

                    <button 
                        onClick={() => {
                            if(confirm("Refill to base stock?")) {
                                setItems(items.map(i => i.id === item.id ? { ...i, stock: i.defaultStock } : i));
                            }
                        }}
                        className="w-14 h-14 bg-white text-slate-300 rounded-[1.2rem] flex flex-col items-center justify-center active:bg-blue-50 active:text-blue-600 transition-all border border-slate-100 shadow-sm"
                    >
                        <RefreshCcw size={16} strokeWidth={2.5} />
                        <span className="text-[6px] font-black uppercase mt-1 opacity-60">Reset</span>
                    </button>
                </div>

                {/* Status Indicator */}
                {item.stock < 10 && (
                    <div className="absolute top-3 right-3">
                        <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-md border border-red-100">
                             <div className="w-1 h-1 bg-red-500 rounded-full animate-ping" />
                             <span className="text-[6px] font-black text-red-500 uppercase tracking-tighter">Low</span>
                        </div>
                    </div>
                )}
            </div>
          </div>
        ))}
      </main>

      <div className="relative z-50">
        <BottomNav />
      </div>

      {/* MODALS */}
      {isAddModalOpen && (
        <AddStock 
            isOpen={isAddModalOpen} 
            onClose={() => setIsAddModalOpen(false)} 
            onAdd={(data) => setItems([{...data, id: Date.now(), stock: parseInt(data.defaultStock)}, ...items])} 
        />
      )}
      
      {editingItem && (
        <EditStock 
          item={editingItem} 
          isOpen={!!editingItem} 
          onClose={() => setEditingItem(null)} 
          onUpdate={(updated) => setItems(items.map(i => i.id === updated.id ? updated : i))} 
          onDelete={(id) => setItems(items.filter(i => i.id !== id))} 
        />
      )}
      
      {adjustingItem && (
        <AdjustStockModal 
          item={adjustingItem} 
          isOpen={!!adjustingItem} 
          onClose={() => setAdjustingItem(null)} 
          onConfirm={(id: number, newStock: number) => {
            setItems(items.map(item => item.id === id ? { ...item, stock: newStock } : item));
            setAdjustingItem(null);
          }} 
        />
      )}
    </div>
  );
};

export default Inventory;