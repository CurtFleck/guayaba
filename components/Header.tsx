
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={scrollToTop}
          >
            {/* Ecosanación Logo */}
            <div className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 transition-transform group-hover:scale-110">
               <img src="eco fondo.png" alt="Ecosanación Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block ml-1">
              <h1 className="text-base md:text-lg font-bold text-sage leading-tight">Ecosanación Sistémica</h1>
              <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-gray-400 font-bold">Espacio de Aprendizaje</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#beneficios" 
              onClick={(e) => scrollToSection(e, 'beneficios')}
              className="text-sm font-bold text-gray-700 hover:text-sage transition-all"
            >
              Propiedades
            </a>
            <a 
              href="#sobre-mi" 
              onClick={(e) => scrollToSection(e, 'sobre-mi')}
              className="text-sm font-bold text-gray-700 hover:text-sage transition-all"
            >
              Sobre Anahí
            </a>
            <a 
              href="#experiencia" 
              onClick={(e) => scrollToSection(e, 'experiencia')}
              className="text-sm font-bold text-gray-700 hover:text-sage transition-all"
            >
              La Experiencia
            </a>
            <a 
              href="#inscripcion" 
              onClick={(e) => scrollToSection(e, 'inscripcion')}
              className="bg-sage text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#3d5536] hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              Anotarme Gratis
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block h-8 md:h-10 w-auto opacity-90">
              <img src="casa latina.png" alt="Casa Latina Logo" className="h-full object-contain" />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-sage hover:bg-sage/5 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-md pt-24 px-6">
          <nav className="flex flex-col gap-6 text-center">
            <a 
              href="#beneficios" 
              onClick={(e) => scrollToSection(e, 'beneficios')}
              className="text-xl font-bold text-gray-800 py-2 border-b border-stone-100"
            >
              Propiedades
            </a>
            <a 
              href="#sobre-mi" 
              onClick={(e) => scrollToSection(e, 'sobre-mi')}
              className="text-xl font-bold text-gray-800 py-2 border-b border-stone-100"
            >
              Sobre Anahí
            </a>
            <a 
              href="#experiencia" 
              onClick={(e) => scrollToSection(e, 'experiencia')}
              className="text-xl font-bold text-gray-800 py-2 border-b border-stone-100"
            >
              La Experiencia
            </a>
            <a 
              href="#inscripcion" 
              onClick={(e) => scrollToSection(e, 'inscripcion')}
              className="mt-4 bg-sage text-white px-8 py-5 rounded-full text-lg font-bold shadow-xl shadow-sage/20"
            >
              Anotarme Gratis
            </a>
            
            <div className="mt-12 flex flex-col items-center gap-4 opacity-60">
               <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">En colaboración con</p>
               <img src="casa latina.png" alt="Casa Latina Logo" className="h-10 object-contain" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
