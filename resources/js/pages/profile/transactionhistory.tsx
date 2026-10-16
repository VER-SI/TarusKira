import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
  ChevronLeft, Calendar, 
  Utensils, ChevronDown
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import BottomNav from '../../components/bottomnav'; // Consistent with your profile page

const TransactionHistory = () => {
  const [selectedDate, setSelectedDate] = useState('2026-05-09');
  const [foodFilter, setFoodFilter] = useState('All');

  const logs = [
    { id: 1, food: 'Nasi Katok', qty: 12, time: '08:00', date: '2026-05-09' },
    { id: 2, food: 'Mee Goreng', qty: 8, time: '10:00', date: '2026-05-09' },
    { id: 3, food: 'Nasi Katok', qty: 25, time: '12:00', date: '2026-05-09' },
    { id: 4, food: 'Satay Ayam', qty: 15, time: '14:00', date: '2026-05-09' },
    { id: 5, food: 'Mee Goreng', qty: 10, time: '16:00', date: '2026-05-09' },
    { id: 6, food: 'Nasi Katok', qty: 5, time: '18:00', date: '2026-05-09' },
  ];

  const labelClasses = "text-[14px] font-black uppercase text-slate-900 tracking-[0.15em] px-3 mb-3 block";
  const glassCard = "bg-white/85 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-xl p-7";

  return (
    <div className="h-screen flex flex-col font-sans text-slate-900 relative bg-white overflow-hidden">
      <Head title="Transaction Timeline" />

      {/* FIXED BRANDING BACKGROUND CURVE (Copied from Profile) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[12%] left-[-15%] w-[130%] h-[100%] bg-[#3ABEF9]" 
          style={{ borderRadius: '100% 100% 0 0' }}
        />
      </div>

      {/* HEADER (Aligned with Profile Style) */}
      <header className="relative z-30 px-6 py-4 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="flex justify-between items-center max-w-md mx-auto w-full">
          <div className="flex items-center gap-3">
            <Link href={route('profile')} className="p-1 -ml-1 text-slate-400 active:scale-90 transition-all">
              <ChevronLeft size={22} />
            </Link>
            <h1 className="text-lg font-black text-slate-900 tracking-tight">Food Logs</h1>
          </div>
          
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 shadow-sm">
            <Calendar size={12} className="text-blue-600" />
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-[9px] font-black uppercase bg-transparent outline-none text-blue-600 cursor-pointer"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 max-w-md mx-auto w-full relative z-10 overflow-y-auto hide-scrollbar flex flex-col gap-6">
        
        {/* GRAPH SECTION */}
        <section className="mt-4">
          <span className={labelClasses}>Hourly Tally</span>
          <div className={glassCard}>
            <div className="flex justify-between items-center mb-6">
               <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Qty Sold</p>
               <div className="relative">
                <select 
                  onChange={(e) => setFoodFilter(e.target.value)}
                  className="appearance-none bg-slate-50 border border-slate-100 rounded-lg pl-3 pr-8 py-1.5 text-[9px] font-black uppercase tracking-tight outline-none text-slate-600 cursor-pointer"
                >
                  <option value="All">All Food</option>
                  <option value="Nasi Katok">Nasi Katok</option>
                  <option value="Mee Goreng">Mee Goreng</option>
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={logs} margin={{ left: -35 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 9, fontWeight: 900, fill: '#64748b'}} 
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{fontSize: 9, fontWeight: 900, fill: '#94a3b8'}}
                  />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '1.5rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: '900', fontSize: '10px'}}
                  />
                  <Bar dataKey="qty" radius={[6, 6, 0, 0]}>
                    {logs.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.food === 'Nasi Katok' ? '#2563eb' : '#3ABEF9'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* LOG LIST */}
        <section className="pb-20">
          <span className={labelClasses}>Successful Orders</span>
          <div className="space-y-3">
            {logs.map((log) => (
              <div key={log.id} className="bg-white/90 backdrop-blur-2xl border border-white rounded-[1.8rem] p-5 shadow-md flex items-center justify-between group active:scale-[0.98] transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shadow-sm">
                    <Utensils size={18} />
                  </div>
                  <div>
                    <p className="font-black text-[14px] text-slate-900 tracking-tight">{log.food}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{log.time} • Completed</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-[15px] text-slate-900 tracking-tighter">{log.qty} pcs</p>
                  <p className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Success</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="relative z-50">
        <BottomNav />
      </div>
    </div>
  );
};

export default TransactionHistory;