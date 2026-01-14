
import React, { useState } from 'react';

export const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    modality: 'virtual'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp Message
    const message = `¡Hola Anahí! 👋 Me quiero anotar a la charla "Hablemos sobre Guayaba".\n\n📝 Mis datos:\n👤 Nombre: ${formData.name}\n📧 Email: ${formData.email}\n📱 Teléfono: ${formData.phone}\n📍 Modalidad: ${formData.modality.toUpperCase()}\n\n¡Quedo a la espera de más info!`;
    
    const whatsappUrl = `https://wa.me/543764385152?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 text-center py-20 bg-white rounded-[40px] text-gray-800 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold mb-4">¡Inscripción Iniciada!</h2>
        <p className="text-xl text-gray-600 mb-8 font-medium">Ya se ha generado tu mensaje de WhatsApp. Si no se abrió automáticamente, puedes intentar de nuevo.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-sage text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
        >
          Volver a empezar
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-6xl font-bold mb-4 italic text-white leading-tight">Reserva tu lugar</h2>
          <p className="text-xl opacity-90 leading-relaxed font-medium max-w-md">
            La charla es totalmente gratuita, pero los cupos son limitados. Asegura tu participación hoy mismo vía WhatsApp.
          </p>
          
          <div className="space-y-8 pt-4">
            <div className="flex items-start gap-6 group">
              <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white group-hover:text-sage transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-xl">Acceso a material exclusivo</p>
                <p className="text-base opacity-75 font-medium mt-1">Recibirás un PDF con el resumen de las propiedades de la Guayaba.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="bg-white/20 p-3 rounded-2xl group-hover:bg-white group-hover:text-sage transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-xl">Sesión de Q&A</p>
                <p className="text-base opacity-75 font-medium mt-1">Espacio abierto para consultas personalizadas con Anahí Fleck.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl text-gray-800 border-8 border-sage/10">
          <h3 className="text-2xl font-bold mb-8 text-center text-sage italic">Completa tus datos</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">Nombre Completo</label>
              <input 
                required
                type="text" 
                placeholder="Ej. Juan Pérez"
                className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-sage focus:ring-4 focus:ring-sage/10 outline-none transition-all font-medium text-lg"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">Correo Electrónico</label>
              <input 
                required
                type="email" 
                placeholder="tu@email.com"
                className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-sage focus:ring-4 focus:ring-sage/10 outline-none transition-all font-medium text-lg"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">WhatsApp / Teléfono</label>
              <input 
                required
                type="tel" 
                placeholder="+54 376 438-5152"
                className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-sage focus:ring-4 focus:ring-sage/10 outline-none transition-all font-medium text-lg"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-500 mb-4 uppercase tracking-widest">¿Cómo participarás?</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, modality: 'virtual'})}
                  className={`py-5 rounded-2xl font-bold border-2 transition-all text-lg ${formData.modality === 'virtual' ? 'border-sage bg-sage/5 text-sage shadow-inner' : 'border-stone-100 text-stone-300'}`}
                >
                  Virtual
                </button>
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, modality: 'presencial'})}
                  className={`py-5 rounded-2xl font-bold border-2 transition-all text-lg ${formData.modality === 'presencial' ? 'border-sage bg-sage/5 text-sage shadow-inner' : 'border-stone-100 text-stone-300'}`}
                >
                  Presencial
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-sage text-white py-6 rounded-2xl text-xl font-bold hover:bg-opacity-90 shadow-xl shadow-sage/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              Confirmar e Ir a WhatsApp
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </button>
            <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tus datos se enviarán directamente a Anahí Fleck</p>
          </form>
        </div>
      </div>
    </div>
  );
};
