import { clsx, type ClassValue } from 'clsx';
import { Menu, Scale, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

  // --- Constants ---
  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-100 transition-all duration-500 ease-in-out',
        scrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-primary/5'
          : 'bg-transparent py-6',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Scale
            className={cn(
              'w-8 h-8 transition-colors duration-500',
              scrolled ? 'text-primary' : 'text-white',
            )}
          />
          <span
            className={cn(
              'text-xl font-serif font-bold tracking-tight transition-colors duration-500',
              scrolled ? 'text-primary' : 'text-white',
            )}
          >
            Suzart Advogados
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-all duration-500 hover:text-gold relative group',
                scrolled ? 'text-primary' : 'text-white',
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            className={cn(
              'px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-500 shadow-xl hover:scale-105 active:scale-95',
              scrolled
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-gold text-white hover:bg-gold/90',
            )}
          >
            Consulta Gratuita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl overflow-hidden md:hidden border-t border-gray-100"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary text-xl font-serif font-medium border-b border-gray-50 pb-4 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                className="bg-primary text-white text-center py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20"
              >
                Falar com Advogado
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
