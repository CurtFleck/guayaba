
import React from 'react';

export const Footer: React.FC = () => {
  const igLink = "https://www.instagram.com/anahi_ecosanacion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <footer className="bg-stone-50 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
             <div className="flex items-center gap-4">
               <div className="h-14 w-14 bg-white rounded-2xl p-2 shadow-sm border border-stone-100 overflow-hidden flex items-center justify-center">
                  <img src="eco fondo.png" alt="Eco Logo" className="object-contain" />
               </div>
               <div>
                <h3 className="text-xl font-bold text-sage">Ecosanación Sistémica</h3>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Desde Posadas, Misiones</p>
               </div>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed font-medium">
               Espacio dedicado a la sanación integral y al aprendizaje consciente a través de la neuropsicología y el ambiente.
             </p>
             <div className="flex gap-4">
                <a 
                  href={igLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-gray-400 hover:text-sage transition-all font-bold group"
                >
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-sage group-hover:bg-sage/5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <span className="text-xs uppercase tracking-widest">Instagram</span>
                </a>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-8 uppercase tracking-widest text-xs">Información Clave</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="font-bold text-sage">Lunes 02/02 - 9:00 AM</span>
              </li>
              <li>Sede: Parque Rural (Experiencia Ambiental)</li>
              <li>Virtual: Vía Zoom / Meet (Link al inscribirse)</li>
              <li className="pt-4 flex items-center gap-3">
                 <span className="text-[10px] font-bold text-gray-400 uppercase">En colaboración con:</span>
                 <img src="casa latina.png" alt="Casa Latina" className="h-5 opacity-60" />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-8 uppercase tracking-widest text-xs">Contacto Directo</h4>
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-stone-100 group hover:shadow-xl transition-all duration-500">
               <p className="text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">WhatsApp de consultas:</p>
               <a href="tel:3764385152" className="text-2xl font-bold text-sage hover:underline decoration-rose-300 transition-all">
                 3764-385152
               </a>
               <p className="mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">Posadas, Misiones • Argentina</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">© 2026 Ecosanación Sistémica • Anahí Fleck</p>
          <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
             <img src="casa latina.png" alt="Casa Latina" className="h-5 object-contain" />
             <img src="eco fondo.png" alt="Eco" className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
};
