
import React, { useState } from 'react';

const benefitData = [
  {
    id: 'nicotina',
    title: "Neurodetoxificante de Nicotina",
    desc: "Limpieza profunda y recuperación neuronal post-consumo de tabaco.",
    fullDesc: "Estudios sugieren que los compuestos de la guayaba ayudan en procesos de neuroprotección, siendo un aliado natural en la recuperación del sistema nervioso central tras la exposición a la nicotina.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'antioxidante',
    title: "Poder Antioxidante",
    desc: "Contiene flavonoides, taninos y terpenos que neutralizan radicales libres.",
    fullDesc: "Sus extractos de hojas y fruto contienen una alta concentración de flavonoides y terpenos que neutralizan radicales libres y reducen marcadores inflamatorios celulares significativamente.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 'defensa',
    title: "Defensa Natural",
    desc: "Acción antimicrobiana y antiparasitaria contra bacterias e infecciones leves.",
    fullDesc: "Posee compuestos fenólicos y aceites esenciales que demuestran actividad contra bacterias y algunos parásitos, explicando su uso tradicional histórico en diarreas e infecciones.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'metabolico',
    title: "Equilibrio Metabólico",
    desc: "Efectos hipoglucemiantes y moduladores lipídicos para una salud general.",
    fullDesc: "Ensayos y revisiones científicas indican un potencial útil como apoyo nutricional en el control glucémico, actuando como un modulador lipídico natural para la salud metabólica.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export const Benefits: React.FC = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<typeof benefitData[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">¿Por qué la Guayaba?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Exploramos la evidencia científica detrás de los usos tradicionales para tu bienestar integral. Haz clic en cada uno para saber más.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefitData.map((benefit) => (
          <div 
            key={benefit.id} 
            onClick={() => setSelectedBenefit(benefit)}
            className="group p-8 rounded-[32px] bg-white border border-gray-100 hover:border-sage/40 hover:shadow-2xl hover:shadow-sage/10 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="w-16 h-16 bg-sage/5 text-sage rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-sage group-hover:text-white transition-all duration-300">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">{benefit.title}</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">{benefit.desc}</p>
            <div className="mt-6 text-xs font-bold text-sage uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ver detalle +</div>
          </div>
        ))}
      </div>

      {/* Science and Tradition section with local image */}
      <div className="mt-20 bg-stone-50 rounded-[40px] p-8 lg:p-12 border border-stone-200">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold italic text-sage leading-tight">Ciencia y Tradición en armonía</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center font-bold shadow-md shadow-sage/20">1</div>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">Extractos de hojas que neutralizan radicales libres.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center font-bold shadow-md shadow-sage/20">2</div>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">Aceites esenciales con actividad antimicrobiana probada.</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-[4/3] group">
            <img 
              src="guayaba.jpeg" 
              alt="Botánica de Guayaba" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedBenefit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedBenefit(null)} />
          <div className="relative bg-white rounded-[32px] w-full max-w-xl p-8 lg:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedBenefit(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <div className="w-20 h-20 bg-sage/10 text-sage rounded-3xl flex items-center justify-center mb-8">
              {selectedBenefit.icon}
            </div>
            
            <h4 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">{selectedBenefit.title}</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{selectedBenefit.fullDesc}</p>
            
            <button 
              onClick={() => setSelectedBenefit(null)}
              className="w-full bg-sage text-white py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
