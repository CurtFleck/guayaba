
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={scrollToTop}
        >
          {/* Ecosanación Logo Only as requested */}
          <div className="h-12 w-12 flex-shrink-0 transition-transform group-hover:scale-110">
             <img src="eco fondo.png" alt="Ecosanación Logo" className="w-full h-full object-contain" />
          </div>
          <div className="hidden lg:block ml-1">
            <h1 className="text-lg font-bold text-sage leading-tight">Ecosanación Sistémica</h1>
            <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">Espacio de Aprendizaje</p>
          </div>
        </div>

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
          <div className="h-8 md:h-10 w-auto opacity-90">
            <img src="casa latina.png" alt="Casa Latina Logo" className="h-full object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
};
