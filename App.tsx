
import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Brain, 
  ShieldCheck, 
  Activity, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  FlaskConical,
  HeartPulse,
  Monitor
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura de la navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="eco fondo.png" alt="Ecosanación Logo" className="h-10 w-auto object-contain" />
          <span className="font-bold text-xl tracking-tight text-gray-900">Ecosanación</span>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#beneficios" onClick={(e) => handleScrollTo(e, 'beneficios')} className="font-semibold text-gray-700 hover:text-guava-pink transition-colors">Propiedades</a>
          <a href="#anahi" onClick={(e) => handleScrollTo(e, 'anahi')} className="font-semibold text-gray-700 hover:text-guava-pink transition-colors">Anahí Fleck</a>
          <a href="#detalles" onClick={(e) => handleScrollTo(e, 'detalles')} className="font-semibold text-gray-700 hover:text-guava-pink transition-colors">Evento</a>
          <button onClick={(e) => handleScrollTo(e, 'inscripcion')} className="bg-guava-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg">
            Inscribirme Gratis
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('inscripcion')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-soft-cream">
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full opacity-10">
        <img src="anahi guayaba.jpg" alt="Fondo" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-pink-100">
            <img src="casa latina.png" alt="Casa Latina" className="h-8 w-auto" />
            <span className="h-4 w-px bg-gray-200 mx-2"></span>
            <span className="text-guava-pink font-bold text-sm tracking-widest uppercase">Sesión Abierta y Gratuita</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[1.1]">
            Poder de la <span className="text-guava-pink italic">Guayaba</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-600 leading-relaxed italic">
            Ecosanación y Neuropsicología: Un viaje científico a tus raíces biológicas.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={handleScrollToForm} className="flex items-center justify-center bg-guava-pink text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-pink-200 group">
              ¡Quiero Anotarme! <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="https://wa.me/3764385152" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white border-2 border-guava-green text-guava-green px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-50 transition-all">
              <MessageCircle className="mr-2" /> Consultar WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white">
            <img src="anahi.png" alt="Anahí Fleck" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 z-20 bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-100 max-w-[280px]">
            <div className="flex items-center space-x-3 mb-2">
              <img src="eco fondo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <p className="font-bold text-gray-900">Anahí Fleck</p>
            </div>
            <p className="text-sm text-gray-500">Especialista en Ecosanación y Neuropsicología</p>
          </div>
        </div>
      </div>
    </header>
  );
};

const Benefits = () => (
  <section id="beneficios" className="py-24 bg-white scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 italic underline decoration-guava-pink">Propiedades Medicinales</h2>
        <p className="text-xl text-gray-600">
          Los extractos de hojas y fruto contienen flavonoides, taninos y terpenos que neutralizan radicales libres y reducen la inflamación.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Brain, title: "Neurodetoxificante", desc: "Ayuda en la desintoxicación de nicotina en el sistema nervioso.", color: "bg-red-50 text-red-600" },
          { icon: ShieldCheck, title: "Antioxidante", desc: "Neutraliza radicales libres y reduce marcadores inflamatorios.", color: "bg-green-50 text-green-600" },
          { icon: FlaskConical, title: "Antimicrobiana", desc: "Actividad contra bacterias y parásitos según usos tradicionales.", color: "bg-blue-50 text-blue-600" },
          { icon: HeartPulse, title: "Hipoglucemiante", desc: "Efectos metabólicos positivos y apoyo en control glucémico.", color: "bg-orange-50 text-orange-600" }
        ].map((item, i) => (
          <div key={i} className="group p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${item.color}`}>
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="anahi" className="py-24 bg-soft-cream scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative bg-white p-3 rounded-[4rem] shadow-2xl">
            <img src="anahi.png" alt="Anahí Fleck" className="rounded-[3.5rem] w-full h-auto" />
            <div className="absolute -bottom-6 -left-6">
               <img src="eco fondo.png" alt="Eco Logo" className="w-24 h-24 object-contain drop-shadow-lg" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 italic">Sobre Anahí Fleck</h2>
          <div className="text-xl text-gray-700 space-y-6 leading-relaxed">
            <p>
              Anahí propone una experiencia ambiental única. Su enfoque en la <strong>Ecosanación</strong> y la <strong>Neuropsicología</strong> permite entender cómo las propiedades de la naturaleza inciden en nuestro bienestar mental y físico.
            </p>
            <p>
              Esta charla busca desmitificar el uso tradicional de las plantas y respaldarlo con evidencia científica, aceites esenciales y compuestos fenólicos presentes en la Guayaba.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm italic text-gray-500 border-l-8 border-guava-pink text-lg">
            "La guayaba es un secreto de la neuropsicología que hoy vengo a revelarte."
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Details = () => (
  <section id="detalles" className="py-24 bg-white relative scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="bg-gray-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="anahi guayaba.jpg" alt="Decoration" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-white">
            <h2 className="text-5xl lg:text-7xl font-black leading-tight">
              Agendá el <span className="text-guava-pink italic underline">Encuentro</span>
            </h2>
            
            <div className="grid gap-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-guava-pink">
                  <Calendar size={32} />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Fecha</p>
                  <p className="text-2xl font-bold">Domingo 2 de Febrero</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-guava-green">
                  <Clock size={32} />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Hora</p>
                  <p className="text-2xl font-bold">9:00 AM</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Lugar</p>
                  <p className="text-2xl font-bold">Parque Rural (Misiones)</p>
                  <p className="text-blue-400">Híbrido: Virtual + Presencial</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-[3rem] p-10 backdrop-blur-md">
            <h4 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">Organiza</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-xl">
                <img src="casa latina.png" alt="Casa Latina" className="h-12 w-auto object-contain" />
                <span className="text-gray-900 font-black text-xl">Casa Latina</span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-xl">
                <img src="eco fondo.png" alt="Ecosanación" className="h-12 w-auto object-contain" />
                <span className="text-gray-900 font-black text-xl">Ecosanación</span>
              </div>
              <div className="mt-8 text-center">
                <p className="text-guava-pink text-4xl font-black uppercase tracking-widest animate-pulse drop-shadow-lg">
                  ¡GRATIS!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mode, setMode] = useState('Presencial (Parque Rural)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Por favor completa tu nombre y WhatsApp');
      return;
    }
    const message = `Hola! Soy ${name}. Mi WhatsApp es ${phone}. Me interesa participar en la charla de la Guayaba de forma ${mode}. ¡Quiero reservar mi lugar!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/3764385152?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inscripcion" className="py-24 bg-guava-pink scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-1/2 bg-gray-900 p-12 lg:p-20 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <img src="anahi guayaba.jpg" alt="Flyer Decor" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl font-black mb-6">Últimos Cupos</h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Inscríbete ahora para recibir los detalles de conexión virtual o la ubicación en el Parque Rural.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="text-guava-green" size={32} />
                  <span className="text-lg font-bold">Acceso directo a la charla</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="text-guava-pink" size={32} />
                  <span className="text-lg font-bold">Consultas: 3764-385152</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-8">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Registro</h3>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Nombre Completo</label>
                <input 
                  required 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-guava-pink focus:bg-white outline-none transition-all text-lg font-medium text-gray-800" 
                  placeholder="Escribe tu nombre..." 
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">WhatsApp</label>
                <input 
                  required 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-guava-pink focus:bg-white outline-none transition-all text-lg font-medium text-gray-800" 
                  placeholder="Ej: 3764556677" 
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">¿Cómo participarás?</label>
                <div className="relative">
                  <select 
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-guava-pink focus:bg-white outline-none transition-all text-lg appearance-none font-medium text-gray-800 cursor-pointer"
                  >
                    <option>Presencial (Parque Rural)</option>
                    <option>Virtual (Transmisión en vivo)</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ArrowRight className="rotate-90" size={20} />
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-900 text-white py-6 rounded-2xl font-black text-2xl hover:bg-black transition-all shadow-2xl hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-3"
              >
                <span>¡RESERVAR MI LUGAR!</span>
                <MessageCircle size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-16 border-t border-gray-100">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center space-x-12 mb-10">
        <img src="casa latina.png" alt="Casa Latina" className="h-14 w-auto object-contain" />
        <img src="eco fondo.png" alt="Ecosanación" className="h-14 w-auto object-contain" />
      </div>
      <p className="text-gray-500 font-bold text-lg mb-2">© 2024 Ecosanación & Anahí Fleck</p>
      <p className="text-gray-400 text-sm italic">Misiones, Argentina • Una experiencia ambiental única.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-soft-cream selection:bg-guava-pink selection:text-white">
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Details />
      <Form />
      <Footer />
      
      {/* Botón flotante móvil */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-40">
        <button 
          onClick={() => {
            const element = document.getElementById('inscripcion');
            if (element) {
              const offset = 80;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementRect = element.getBoundingClientRect().top;
              const elementPosition = elementRect - bodyRect;
              const offsetPosition = elementPosition - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}
          className="block w-full bg-guava-green text-white text-center py-5 rounded-2xl font-black text-xl shadow-2xl active:scale-95 transition-all"
        >
          ¡INSCRIBITE GRATIS!
        </button>
      </div>
    </div>
  );
}
