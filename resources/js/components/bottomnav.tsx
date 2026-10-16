import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Home, BarChart2, Box, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  const { url } = usePage();

  // Updated helper: returns true if path matches exactly OR if the URL starts with the path
  // (This keeps the Profile icon lit when viewing personal-information or history)
  const isActive = (path: string) => {
    if (path === '/') return url === '/';
    return url.startsWith(path);
  };

  const navItemClasses = (path: string) => 
    isActive(path)
      ? "p-4 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-100 active:scale-95 transition-all"
      : "p-4 text-slate-300 hover:text-slate-500 transition-colors active:scale-95";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-slate-100 px-8 pt-4 pb-6 flex justify-between items-center max-w-md mx-auto rounded-t-[2.5rem] shadow-[0_-15px_40px_rgba(0,0,0,0.08)] z-50">
      
      {/* Home */}
      <Link href="/" className={navItemClasses('/')}>
        <Home size={22} strokeWidth={isActive('/') ? 3 : 2} />
      </Link>

      {/* Statistics */}
      <Link href="/statistics" className={navItemClasses('/statistics')}>
        <BarChart2 size={22} strokeWidth={isActive('/statistics') ? 3 : 2} />
      </Link>

      {/* Inventory */}
      <Link href="/inventory" className={navItemClasses('/inventory')}>
        <Box size={22} strokeWidth={isActive('/inventory') ? 3 : 2} />
      </Link>

      {/* Profile & Sub-pages */}
      <Link href="/profile" className={navItemClasses('/profile')}>
        <User size={22} strokeWidth={isActive('/profile') ? 3 : 2} />
      </Link>
      
    </nav>
  );
};

export default BottomNav;