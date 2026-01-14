
import React from 'react';

export const MapSection: React.FC = () => {
  // Stable Embed URL for Parque Rural Posadas
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.354!2d-55.88294!3d-27.458219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945795f70a7b458b%3A0xc3f5c7885996cc51!2sParque%20Rural%20Posadas!5e0!3m2!1ses!2sar!4v1738260000000!5m2!1ses!2sar";
  
  // Link provided by the user
  const externalMapLink = "https://maps.app.goo.gl/ZeYMeb7KLQuVancF7";

  return (
    <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-stone-50 rounded-[50px] overflow-hidden shadow-xl border border-stone-200">
        <div className="grid lg:grid-cols-3 min-h-[500px]">
          <div className="p-10 lg:p-14 lg:col-span-1 flex flex-col justify-center space-y-8 bg-white lg:bg-transparent">
            <div>
              <h4 className="text-3xl font-bold text-gray-800 italic mb-4">¿Dónde nos encontramos?</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                El Parque Rural es el escenario perfecto para nuestra charla: un entorno natural preservado que facilita la reconexión ambiental en Posadas, Misiones.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage/10 text-sage rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Ubicación</p>
                  <p className="font-bold text-gray-800">Posadas, Misiones, Argentina</p>
                </div>
              </div>
              
              <a 
                href={externalMapLink}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-sage text-white px-8 py-4 rounded-full font-bold hover:bg-[#3d5536] hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Ver en Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative h-[450px] lg:h-auto bg-stone-100">
            <iframe 
              title="Ubicación Parque Rural"
              src={mapEmbedUrl}
              className="w-full h-full border-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
