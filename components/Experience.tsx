
import React from 'react';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 italic">Una Experiencia Ambiental</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Más que una charla, una inmersión en la naturaleza desde el Parque Rural.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="rounded-3xl overflow-hidden shadow-lg group">
          <div className="h-64 relative overflow-hidden">
            <img src="https://picsum.photos/seed/nature1/600/400" alt="Naturaleza 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h4 className="absolute bottom-4 left-4 text-white font-bold text-lg">Entorno Natural</h4>
          </div>
          <div className="p-6 bg-white">
            <p className="text-sm text-gray-500">Conexión directa con la biodiversidad local en el Parque Rural.</p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg group">
          <div className="h-64 relative overflow-hidden">
            <img src="https://picsum.photos/seed/nature2/600/400" alt="Naturaleza 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h4 className="absolute bottom-4 left-4 text-white font-bold text-lg">Aprendizaje Vivo</h4>
          </div>
          <div className="p-6 bg-white">
            <p className="text-sm text-gray-500">Observación y contacto con las plantas medicinales en su hábitat.</p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg group">
          <div className="h-64 relative overflow-hidden">
            <img src="https://picsum.photos/seed/nature3/600/400" alt="Naturaleza 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h4 className="absolute bottom-4 left-4 text-white font-bold text-lg">Sinergia Híbrida</h4>
          </div>
          <div className="p-6 bg-white">
            <p className="text-sm text-gray-500">Si no puedes venir, conéctate virtualmente sin perder la esencia.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
