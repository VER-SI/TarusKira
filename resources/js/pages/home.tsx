import React, { useState } from 'react';
import BottomNav from '../components/bottomnav'; 
import { 
  Plus, 
  MapPin
} from 'lucide-react';

interface TallyItem {
  id: number;
  name: string;
  price: number;
  cost: number;
  stock: number;
  color: string;
  icon: string;
  category: string;
}

const Home: React.FC = () => {
  const [fullView, setFullView] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const [items, setItems] = useState<TallyItem[]>([
    { id: 1, name: 'Nasi Katok Klasik', price: 1.00, cost: 0.40, stock: 45, color: 'bg-blue-500', icon: '🍱', category: 'Food' },
    { id: 2, name: 'Teh C Peng', price: 1.50, cost: 0.60, stock: 12, color: 'bg-orange-400', icon: '🧋', category: 'Drink' },
    { id: 3, name: 'Cucur Sayur', price: 0.50, cost: 0.15, stock: 8, color: 'bg-yellow-500', icon: '🥨', category: 'Cucur' },
    { id: 4, name: 'Kopi Kaw', price: 1.20, cost: 0.50, stock: 20, color: 'bg-stone-600', icon: '☕', category: 'Drink' },
  ]);

  const filters = ['All', 'Food', 'Drink', 'Cucur'];
  const filteredItems = activeFilter === 'All' ? items : items.filter(item => item.category === activeFilter);

  const handleSale = (id: number): void => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id && item.stock > 0) return { ...item, stock: item.stock - 1 };
      return item;
    }));
  };

  const glassCardClasses = `
    bg-white/75 
    backdrop-blur-2xl 
    border 
    border-white 
    rounded-[2.5rem] 
    p-6 
    mb-6
    shadow-[0_20px_50px_rgba(0,0,0,0.2),inset_0_0_20px_rgba(0,0,0,0.15)] 
    transition-all duration-500
  `;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 relative bg-white">
      
      {/* FIXED BACKGROUND LAYER: Fixed the jumping curve issue */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[22%] left-[-15%] w-[130%] h-[100%] bg-[#3ABEF9] transition-transform duration-700" 
          style={{ 
              borderRadius: '100% 100% 0 0',
              transform: fullView ? 'translateY(-12%)' : 'translateY(0)' 
          }}
        />
      </div>

      <main className={`flex-1 p-5 max-w-md mx-auto w-full relative z-10 transition-all duration-500 ${fullView ? 'pt-10' : 'pt-5 pb-32'}`}>
        
        {!fullView && (
          <header className="bg-white/90 backdrop-blur-xl border border-white rounded-full p-2 flex items-center justify-between mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hana" alt="User" />
              </div>
              <div>
                <h2 className="font-extrabold text-sm tracking-tight text-slate-900">Hana Almahera</h2>
                <p className="text-[10px] text-slate-600 font-bold flex items-center gap-1 uppercase tracking-widest">
                  <MapPin size={10} className="text-blue-600" /> Gadong Night Market
                </p>
              </div>
            </div>
          </header>
        )}

        <section className={glassCardClasses}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-slate-950 text-lg uppercase tracking-tight">Tally Counter</h3>
            
            <button 
              onClick={() => setFullView(!fullView)}
              className="text-[10px] font-black tracking-widest uppercase px-5 py-2.5 bg-blue-600 text-white rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] active:scale-95 transition-all border border-blue-400/30"
            >
              {fullView ? 'Exit Full' : 'Full View'}
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-5 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-5 py-2.5 rounded-xl text-[11px] font-black transition-all border
                  ${activeFilter === filter 
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-100' 
                    : 'bg-emerald-50/50 text-emerald-700 border-emerald-100 hover:bg-emerald-100'}
                `}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="space-y-6 mt-2">
            {filteredItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between group p-1">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-white/30 transform transition-transform group-active:scale-90`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-extrabold text-base text-slate-950">{item.name}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 tracking-tighter">
                            {item.category}
                        </span>
                        <p className={`text-[12px] font-bold ${item.stock < 10 ? 'text-red-600' : 'text-slate-500'}`}>
                            {item.stock} in stock
                        </p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => handleSale(item.id)}
                  disabled={item.stock === 0}
                  className="w-12 h-12 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-[0_5px_15px_rgba(0,0,0,0.2)] active:scale-75 transition-all disabled:opacity-50"
                >
                  <Plus size={24} strokeWidth={4} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/75 backdrop-blur-2xl border border-white rounded-[2rem] p-4 mb-6 shadow-[0_15px_40px_rgba(0,0,0,0.18),inset_0_0_15px_rgba(0,0,0,0.12)]">
          <h3 className="font-bold text-slate-700 text-[11px] mb-3 px-2 uppercase tracking-[0.15em]">Health Tally</h3>
          <div className="flex gap-2">
             <div className="flex-1 bg-white/60 p-3 rounded-2xl border border-slate-50 text-center">
                <p className="text-[9px] text-slate-400 uppercase font-black mb-1">Restock</p>
                <p className="text-xl font-black text-orange-500">{items.filter(i => i.stock < 10 && i.stock > 0).length}</p>
             </div>
             <div className="flex-1 bg-white/60 p-3 rounded-2xl border border-slate-100 text-center">
                <p className="text-[9px] text-slate-400 uppercase font-black mb-1">Out</p>
                <p className="text-xl font-black text-slate-400">{items.filter(i => i.stock === 0).length}</p>
             </div>
          </div>
        </section>
      </main>

      {!fullView && <BottomNav />}

    </div>
  );
};

export default Home;