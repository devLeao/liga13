"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical, X, Trophy, Home, Users, Newspaper } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 transition-all">
            
          {/* LOGO AUMENTADA */}
            <div className="flex-shrink-0 flex items-center h-full">
              <Link 
                href="/" 
                className="relative block w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 hover:scale-110 transition-transform duration-300 ease-out"
              >
                <Image 
                  src="/logo.png" 
                  alt="Logo Liga 13" 
                  fill 
                  className="object-contain" 
                  priority 
                />
              </Link>
            </div>

            {/* MENU EXPOSTO SOMENTE NO DESKTOP */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-liga-gold text-xs font-black uppercase tracking-widest transition-colors">Início</Link>
              <Link href="/campeonatos" className="text-white hover:text-liga-gold text-xs font-black uppercase tracking-widest transition-colors">Campeonatos</Link>
              <Link href="/sobre" className="text-white hover:text-liga-gold text-xs font-black uppercase tracking-widest transition-colors">Institucional</Link>
              <Link href="/noticias" className="text-white hover:text-liga-gold text-xs font-black uppercase tracking-widest transition-colors">Notícias</Link>
              <Link href="/contato" className="bg-liga-red hover:bg-red-800 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-liga-red/20">Contato</Link>
            </div>

            {/* TRÊS PONTINHOS SOMENTE NO MOBILE */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors group"
                aria-label="Abrir Menu"
              >
                <MoreVertical size={32} className="text-liga-gold group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={closeMenu} 
        />
      )}

      <div 
        className={`fixed top-0 right-0 z-[60] h-full w-80 bg-liga-black border-l border-liga-gold/30 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-liga-gold font-bold text-xl uppercase tracking-tighter italic">Menu Principal</span>
          <button 
            onClick={closeMenu}
            className="p-2 text-white hover:text-liga-red transition-colors"
          >
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6">
          <NavLink href="/" icon={<Home size={24} />} label="Início" onClick={closeMenu} />
          <NavLink href="/campeonatos" icon={<Trophy size={24} />} label="Campeonatos" onClick={closeMenu} />
          <NavLink href="/sobre" icon={<Users size={24} />} label="Institucional" onClick={closeMenu} />
          <NavLink href="/noticias" icon={<Newspaper size={24} />} label="Notícias" onClick={closeMenu} />
        </div>
        
        <div className="absolute bottom-0 w-full p-6 text-center text-white/30 text-xs border-t border-white/5 font-bold uppercase tracking-widest">
          © 2026 Liga 13
        </div>
      </div>
    </>
  );
}

function NavLink({ href, icon, label, onClick }: { href: string; icon: any; label: string; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="flex items-center space-x-4 text-lg font-black uppercase italic text-white/90 hover:text-liga-gold hover:bg-white/5 p-3 rounded-lg transition-all group"
    >
      <span className="text-liga-red group-hover:text-liga-gold transition-colors">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}