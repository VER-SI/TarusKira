import React, { useState, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
import BottomNav from '../../components/bottomnav';
import { 
  ChevronLeft, User, Mail, Briefcase, MapPin, 
  Save, Lock, Edit3, X, ShieldCheck, Camera
} from 'lucide-react';

const PersonalInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: 'Hana Almahera',
    email: 'hana.dev@example.com',
    phone: '+673 8XXX XXX',
    stall: 'Stall #14, Gadong',
    division: 'Research & Planning', 
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hana'
  });

  const handlePictureClick = () => {
    if (isEditing) fileInputRef.current?.click();
  };

  // Section headers: Bold, Black, and slightly larger for prominence
  const labelClasses = "text-[14px] font-black uppercase text-slate-900 tracking-[0.15em] px-3 mb-3 block";

  return (
    <div className="h-screen flex flex-col font-sans text-slate-900 relative bg-white overflow-hidden">
      <Head title="Personal Information" />

      {/* FIXED BRANDING BACKGROUND CURVE */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[12%] left-[-15%] w-[130%] h-[100%] bg-[#3ABEF9]" 
          style={{ borderRadius: '100% 100% 0 0' }}
        />
      </div>

      {/* HEADER */}
      <header className="relative z-30 px-6 py-4 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="flex justify-between items-center max-w-md mx-auto w-full">
          <div className="flex items-center gap-3">
            <Link href={route('profile')} className="p-1 -ml-1 text-slate-400 active:scale-90 transition-all">
              <ChevronLeft size={22} />
            </Link>
            <h1 className="text-lg font-black text-slate-900 tracking-tight">Profile Setup</h1>
          </div>
          
          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-black text-[9px] uppercase tracking-widest bg-slate-100 text-slate-500 active:scale-95 transition-all"
                >
                  <X size={12} /> Cancel
                </button>
                <button 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-black text-[9px] uppercase tracking-widest bg-blue-600 text-white shadow-md active:scale-95 transition-all"
                >
                  <Save size={12} /> Confirm
                </button>
              </>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg font-black text-[9px] uppercase tracking-widest bg-blue-50 text-blue-600 active:scale-95 transition-all"
              >
                <Edit3 size={12} /> Edit
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 max-w-md mx-auto w-full relative z-10 overflow-hidden flex flex-col justify-start">
        
        {/* PROFILE PICTURE - Tightened margin to accommodate bigger cards */}
        <div className="flex flex-col items-center mb-4 mt-2">
          <div className="relative cursor-pointer" onClick={handlePictureClick}>
            <div className={`w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden transition-all ${isEditing ? 'ring-2 ring-blue-400 opacity-90' : ''}`}>
              <img src={formData.profilePic} alt="Profile" className="w-full h-full object-cover" />
            </div>
            {isEditing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-[2px]">
                <Camera className="text-white" size={24} />
              </div>
            )}
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" />
          </div>
        </div>

        <div className="space-y-5 flex-1">
          {/* SECTION: IDENTITY - Increased padding for "Bigger" feel */}
          <section>
            <span className={labelClasses}>Identity</span>
            <div className="bg-white/85 backdrop-blur-2xl border border-white rounded-[2.5rem] p-7 shadow-xl space-y-5">
              <InfoRow icon={<User size={18}/>} value={formData.name} label="Full Name" isEditing={isEditing} />
              <div className="h-px bg-slate-100/50 w-full" />
              <InfoRow icon={<Mail size={18}/>} value={formData.email} label="Email Address" isEditing={isEditing} />
            </div>
          </section>

          {/* SECTION: WORK - Increased padding for "Bigger" feel */}
          <section>
            <span className={labelClasses}>Employment</span>
            <div className="bg-white/85 backdrop-blur-2xl border border-white rounded-[2.5rem] p-7 shadow-xl space-y-5">
              <InfoRow icon={<Briefcase size={18}/>} value={formData.division} label="Division" isEditing={false} />
              <div className="h-px bg-slate-100/50 w-full" />
              <InfoRow icon={<MapPin size={18}/>} value={formData.stall} label="Stall Location" isEditing={isEditing} />
            </div>
          </section>

          {/* SECTION: SECURITY - Keeps a compact footer style */}
          <section className="mt-auto">
            <Link href={route('password.request')} className="w-full block active:scale-[0.98] transition-all">
              <div className="bg-white/90 backdrop-blur-2xl border border-white rounded-[1.8rem] p-4 shadow-md flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="font-black text-[14px] text-slate-900 tracking-tight">Security & Privacy</p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Update Password</p>
                  </div>
                </div>
                <Lock size={14} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>
          </section>
        </div>
      </main>

      <div className="relative z-50">
        <BottomNav />
      </div>
    </div>
  );
};

const InfoRow = ({ icon, value, label, isEditing }: { icon: any, value: string, label: string, isEditing: boolean }) => (
  <div className="flex items-center gap-5">
    <div className="text-blue-600 shrink-0 p-2.5 bg-blue-50 rounded-2xl shadow-sm">
      {icon}
    </div>
    <div className="flex-1">
      {isEditing ? (
        <div className="relative">
          <p className="text-[9px] font-black uppercase text-blue-500 mb-0.5 ml-1">{label}</p>
          <input 
            type="text" 
            defaultValue={value}
            className="w-full bg-slate-50 border-b-2 border-blue-400 px-2 py-1 text-[13px] font-bold text-slate-900 focus:outline-none focus:bg-blue-50/30 transition-all rounded-t-lg"
          />
        </div>
      ) : (
        <div>
          <p className="text-[12px] font-black uppercase text-slate-900 tracking-tight mb-1">{label}</p>
          <p className="text-[14px] font-bold text-slate-600 tracking-tight leading-tight">{value}</p>
        </div>
      )}
    </div>
  </div>
);

export default PersonalInformation;