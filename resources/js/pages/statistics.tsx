import React, { useState } from 'react';
import BottomNav from '../components/bottomnav'; 
import { 
  BarChart3, 
  LineChart, 
  PieChart as PieIcon,
  ArrowUpRight, 
  PackageCheck,
  ChevronDown
} from 'lucide-react';

const PERIOD_DATA = {
  Today: [
    { item: 'Nasi Katok', sold: 15, revenue: 15.00, color: 'bg-blue-500' },
    { item: 'Teh C Peng', sold: 8, revenue: 12.00, color: 'bg-orange-400' },
    { item: 'Cucur Sayur', sold: 20, revenue: 10.00, color: 'bg-yellow-500' },
    { item: 'Kopi Kaw', sold: 5, revenue: 6.00, color: 'bg-stone-600' },
  ],
  Weekly: [
    { item: 'Nasi Katok', sold: 120, revenue: 120.00, color: 'bg-blue-500' },
    { item: 'Teh C Peng', sold: 65, revenue: 97.50, color: 'bg-orange-400' },
    { item: 'Cucur Sayur', sold: 150, revenue: 75.00, color: 'bg-yellow-500' },
    { item: 'Kopi Kaw', sold: 40, revenue: 48.00, color: 'bg-stone-600' },
  ],
  Monthly: [
    { item: 'Nasi Katok', sold: 450, revenue: 450.00, color: 'bg-blue-500' },
    { item: 'Teh C Peng', sold: 210, revenue: 315.00, color: 'bg-orange-400' },
    { item: 'Cucur Sayur', sold: 320, revenue: 160.00, color: 'bg-yellow-500' },
    { item: 'Kopi Kaw', sold: 180, revenue: 216.00, color: 'bg-stone-600' },
  ]
};

const Statistics: React.FC = () => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [period, setPeriod] = useState<'Today' | 'Weekly' | 'Monthly'>('Monthly');
  
  const currentData = PERIOD_DATA[period];
  const totalRevenue = currentData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalSold = currentData.reduce((acc, curr) => acc + curr.sold, 0);

  const glassCardClasses = `
    bg-white/75 backdrop-blur-2xl border border-white rounded-[2.5rem] p-6 mb-6
    shadow-[0_20px_50px_rgba(0,0,0,0.2),inset_0_0_20px_rgba(0,0,0,0.15)] 
  `;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 relative bg-white">
      
      {/* FIXED BACKGROUND LAYER: Curve stays consistent during data swaps */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[15%] left-[-15%] w-[130%] h-[100%] bg-[#3ABEF9]" 
          style={{ borderRadius: '100% 100% 0 0' }}
        />
      </div>

      <main className="flex-1 p-5 max-w-md mx-auto w-full pb-32 relative z-10">
        
        {/* HEADER & PERIOD TOGGLE */}
        <header className="flex justify-between items-center mb-8 px-2">
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Stats</h1>
          
          <div className="relative group">
            <select 
              value={period}
              onChange={(e) => setPeriod(e.target.value as any)}
              className="appearance-none bg-white/90 pl-4 pr-10 py-2.5 rounded-2xl shadow-lg border border-white text-xs font-black uppercase tracking-widest focus:outline-none cursor-pointer"
            >
              <option value="Today">Today</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600" />
          </div>
        </header>

        {/* TOP STATS */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-emerald-600 p-5 rounded-[2rem] text-white shadow-xl">
            <p className="text-[9px] font-bold uppercase opacity-80 mb-1 tracking-widest">Revenue</p>
            <p className="text-xl font-black">BND {totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-slate-900 p-5 rounded-[2rem] text-white shadow-xl">
            <p className="text-[9px] font-bold uppercase opacity-80 mb-1 tracking-widest">Units Sold</p>
            <p className="text-xl font-black">{totalSold}</p>
          </div>
        </div>

        {/* MAIN CHART CARD */}
        <section className={glassCardClasses}>
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black text-slate-950 text-sm uppercase tracking-widest">Sales Trend</h3>
            
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button onClick={() => setChartType('bar')} className={`p-2 rounded-lg transition-all ${chartType === 'bar' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}><BarChart3 size={16} /></button>
              <button onClick={() => setChartType('line')} className={`p-2 rounded-lg transition-all ${chartType === 'line' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}><LineChart size={16} /></button>
              <button onClick={() => setChartType('pie')} className={`p-2 rounded-lg transition-all ${chartType === 'pie' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}><PieIcon size={16} /></button>
            </div>
          </div>

          <div className="h-56 w-full flex items-center justify-center relative">
            {chartType === 'pie' ? (
              <div className="relative w-44 h-44 rounded-full shadow-2xl border-8 border-white/50 flex items-center justify-center"
                style={{
                  background: `conic-gradient(
                    #3b82f6 0% 40%, 
                    #fb923c 40% 65%, 
                    #eab308 65% 85%, 
                    #57534e 85% 100%
                  )`
                }}>
                <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                   <p className="text-[10px] font-black text-slate-400 uppercase">Top</p>
                   <p className="text-xs font-black text-blue-600">Nasi Katok</p>
                </div>
              </div>
            ) : (
              <div className="h-full w-full flex items-end justify-between gap-3 px-2">
                {currentData.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                    <div 
                      className={`w-full rounded-t-xl transition-all duration-700 ${chartType === 'bar' ? 'bg-blue-500' : 'bg-emerald-500 h-[2px] mb-20 rounded-full'}`}
                      style={{ height: chartType === 'bar' ? `${(data.sold / currentData[0].sold) * 100}%` : '4px' }}
                    />
                    <p className="text-[8px] font-black text-slate-400 uppercase rotate-[-45deg] origin-top-left mt-2 whitespace-nowrap">{data.item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ITEM BREAKDOWN */}
        <section className="bg-white/75 backdrop-blur-2xl border border-white rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
          <h3 className="font-black text-slate-700 text-[11px] mb-5 uppercase tracking-[0.15em]">Movement Breakdown</h3>
          <div className="space-y-4">
            {currentData.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center group">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <p className="font-extrabold text-slate-900 text-sm">{item.item}</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-slate-900 text-sm">{item.sold} <span className="text-[10px] text-slate-400 tracking-tighter uppercase">Sold</span></p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <BottomNav />
    </div>
  );
};

export default Statistics;