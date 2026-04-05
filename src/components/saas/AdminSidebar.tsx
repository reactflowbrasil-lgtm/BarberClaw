import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar as CalendarIcon, 
  Users, 
  Scissors, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

export const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/calendar', icon: CalendarIcon, label: 'Agenda' },
    { path: '/admin/customers', icon: Users, label: 'Clientes' },
    { path: '/admin/staff', icon: Scissors, label: 'Equipe & Serviços' },
    { path: '/admin/settings', icon: Settings, label: 'Configurações' },
  ];

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">
          Barber<span className="text-lime-400 font-normal">Flow</span>
          <span className="text-[10px] uppercase tracking-wider bg-lime-400/20 text-lime-400 ml-2 px-2 py-0.5 rounded-sm">PRO</span>
        </h1>
        <button onClick={() => setIsOpen(false)} className="md:hidden p-2 text-slate-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <nav className="flex-1 p-4 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link 
              key={item.path}
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                active 
                  ? 'bg-lime-400/10 text-lime-400' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" /> {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" /> Sair
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsOpen(true)}
          className="p-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white shadow-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col hidden md:flex shrink-0 h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <aside className="absolute inset-y-0 left-0 w-72 bg-[#0a0a0a] border-r border-white/10 flex flex-col animate-slide-in-left">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
};
