import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';

export const PublicHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Scissors className="w-6 h-6 text-lime-400" />
          <h1 className="text-xl font-bold tracking-tight">
            Barber<span className="text-lime-400 font-normal">Flow</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="/#recursos" className="hover:text-white transition-colors">Recursos</a>
          <a href="/#planos" className="hover:text-white transition-colors">Planos</a>
          <Link to="/marketplace" className="hover:text-white transition-colors">Explorar Barbearias</Link>
          <Link to="/onboarding" className="hover:text-white transition-colors">Para Barbearias</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
            Entrar
          </Link>
          <Link to="/register" className="bg-lime-400 text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-lime-500 transition-colors">
            Criar Conta
          </Link>
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 animate-slide-in-top">
          <nav className="flex flex-col p-6 gap-4 text-lg font-medium">
            <a href="/#recursos" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Recursos</a>
            <a href="/#planos" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Planos</a>
            <Link to="/marketplace" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Explorar Barbearias</Link>
            <Link to="/onboarding" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Para Barbearias</Link>
            <div className="h-px bg-white/5 my-2"></div>
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">Entrar</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
