import React from 'react';
import { Link } from '@inertiajs/react'; // Import the Link component
import BottomNav from '../../components/bottomnav';
import { 
  TrendingUp, 
  Package, 
  Wallet,
  ChevronRight,
  History,
  Zap,
  LogOut,
  UserCircle,
  Clock
} from 'lucide-react';

const Profile: React.FC = () => {
  const glassCardClasses = `
    bg-white/75 backdrop-blur-2xl border border-white rounded-[2.5rem] p-6 mb-6
    shadow-[0_20px_50px_rgba(0,0,0,0.2),inset_0_0_20px_rgba(0,0,0,0.15)] 
  `;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 relative overflow-hidden bg-white">
      
      {/* BRANDING BACKGROUND CURVE */}
      <div 
        className="absolute top-[10%] left-[-15%] w-[130%] h-[95%] bg-[#3ABEF9] z-0" 
        style={{ borderRadius: '100% 100% 0 0' }}
      />

      <main className="flex-1 p-5 max-w-md mx-auto w-full pb-32 relative z-10">
        
        {/* HEADER */}
        <header className="mb-10 px-2">
          <h1 className="text-3xl font-black tracking-tighter text-slate-900">Account</h1>
          <p className="text-[10px] font-bold text-blue-800/60 uppercase tracking-widest mt-1">Management Portal</p>
        </header>

        {/* BUSINESS PROFILE CARD */}
        <section className={glassCardClasses}>
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-50">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hana" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                <Zap size={14} className="text-white fill-current" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Haziq</h2>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-8">Gadong Market • Stall #14</p>

            <div className="grid grid-cols-3 gap-2 w-full border-t border-slate-100 pt-6">
              <div className="text-center">
                <div className="flex justify-center mb-1 text-blue-600"><TrendingUp size={16} /></div>
                <p className="text-sm font-black text-slate-900">BND 85</p>
                <p className="text-[8px] font-black text-slate-400 uppercase leading-none">Avg. Daily</p>
              </div>
              <div className="text-center border-x border-slate-100">
                <div className="flex justify-center mb-1 text-emerald-600"><Package size={16} /></div>
                <p className="text-sm font-black text-slate-900">1,240</p>
                <p className="text-[8px] font-black text-slate-400 uppercase leading-none">Items Sold</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1 text-orange-500"><Wallet size={16} /></div>
                <p className="text-sm font-black text-slate-900">BND 2.4k</p>
                <p className="text-[8px] font-black text-slate-400 uppercase leading-none">Monthly</p>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATIONS SECTION */}
        <section className="space-y-3">
          <h3 className="font-black text-slate-700 text-[11px] px-2 uppercase tracking-[0.15em] mb-4">Operations</h3>
          
          {/* Linked to personalinformation.tsx */}
          <Link 
            href="/profile/personal-information" 
            className="w-full bg-white/80 backdrop-blur-xl p-4 rounded-[1.5rem] border border-white shadow-md flex items-center justify-between active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <UserCircle size={18} />
              </div>
              <p className="font-extrabold text-slate-900 text-sm">Personal Information</p>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </Link>

          {/* Linked to transactions.tsx */}
          <Link 
            href={route('profile.transactionhistory')} 
            className="w-full bg-white/75 backdrop-blur-2xl p-5 rounded-[2rem] border border-white shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-between active:scale-[0.98] transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <History size={18} />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm tracking-tight">Transaction History</p>
                <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                  <Clock size={10} /> View Tally Timeline
                </p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
          </Link>
        </section>

        {/* LOGOUT */}
        <Link 
          href={route('logout')} 
          method="post" 
          as="button" 
          className="w-full mt-8 p-5 bg-red-50 text-red-600 border border-red-100 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-all"
        >
          <LogOut size={18} />
          Switch User / Logout
        </Link>

      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;