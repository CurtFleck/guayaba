
import React from 'react';

export const Hero: React.FC = () => {
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
      
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
      {/* Soft background shape */}
      <div className="absolute top-0 right-0 -z-10 w-2/5 h-full bg-stone-50 rounded-l-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage/10 text-sage text-xs font-bold mb-6 tracking-widest uppercase">
              Sesión Abierta • 100% Gratuita
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hablemos sobre <br/>
              <span className="text-sage italic font-serif">Guayaba</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Descubre las asombrosas propiedades medicinales de este fruto desde la mirada de la Ecosanación y la Neuropsicología.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-stone-100">
                <div className="bg-sage/10 p-2.5 rounded-xl text-sage">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Cuándo</p>
                  <p className="font-bold text-sm text-gray-800">2 de Feb • 9:00 AM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-stone-100">
                <div className="bg-sage/10 p-2.5 rounded-xl text-sage">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Dónde</p>
                  <p className="font-bold text-sm text-gray-800 leading-tight">
                    Parque Rural & <br/> Virtual Online
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#inscripcion" 
                onClick={(e) => scrollToSection(e, 'inscripcion')}
                className="bg-sage text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#3d5536] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-sage/20 text-center"
              >
                Inscribirme Ahora
              </a>
              <a 
                href="https://wa.me/543764385152" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 text-gray-700 font-bold px-8 py-5 border-2 border-stone-200 rounded-full hover:bg-stone-50 hover:border-sage transition-all"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Background design */}
            <div className="absolute inset-0 bg-sage/5 rounded-full blur-3xl" />
            
            {/* Circular Anahi photo as requested */}
            <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl relative border-[12px] border-white ring-1 ring-stone-200 z-10 transition-transform hover:scale-[1.02] duration-500">
              <img 
                src="anahi.png" 
                alt="Anahí Fleck" 
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            <div className="absolute -bottom-10 right-0 lg:-right-10 bg-white/95 backdrop-blur-md p-6 rounded-[32px] shadow-xl border border-stone-100 z-20 hidden sm:block max-w-xs">
                 <p className="text-sage font-bold italic text-sm text-center leading-relaxed">
                   "Una experiencia ambiental única en el Parque Rural"
                 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
