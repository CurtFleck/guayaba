
import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ endValue, suffix = "" }: { endValue: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Restart count whenever it comes back into view
          setCount(0);
          setHasAnimated(true);
        } else {
          setHasAnimated(false);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasAnimated, endValue]);

  return (
    <div ref={elementRef} className="text-4xl font-bold text-sage">
      {count}{suffix}
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-5xl font-bold mb-6 italic text-sage">Anahí Fleck</h2>
          <p className="text-xl font-bold text-gray-400 mb-8 tracking-widest uppercase">Ecosanación • Neuropsicología</p>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium">
            <p>
              Experta en la intersección entre la ciencia y la naturaleza, Anahí lidera <strong>Ecosanación Sistémica</strong>, un espacio dedicado al aprendizaje y la reconexión con la salud desde una perspectiva integral.
            </p>
            <p>
              Su enfoque combina los últimos hallazgos en neuropsicología y genética con el poder ancestral de la medicina natural, ofreciendo herramientas prácticas y basadas en evidencia para la sanación.
            </p>
            <div className="pt-8 flex gap-10">
              <div>
                <AnimatedCounter endValue={21} suffix="+" />
                <p className="text-xs font-bold uppercase text-gray-400 mt-2">Años de Exp.</p>
              </div>
              <div className="border-l border-gray-200 pl-10">
                <AnimatedCounter endValue={100} suffix="%" />
                <p className="text-xs font-bold uppercase text-gray-400 mt-2">Ciencia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background design */}
            <div className="absolute -inset-4 bg-sage/5 rounded-[60px] -rotate-3" />
            
            <div className="w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-[60px] border-[16px] border-white shadow-2xl overflow-hidden relative">
               <img 
                 src="anahi.png" 
                 alt="Anahi Fleck" 
                 className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Artistic decor icon */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full flex items-center justify-center p-6 shadow-xl border border-stone-50">
              <img src="eco fondo.png" alt="Icono" className="opacity-80 object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
