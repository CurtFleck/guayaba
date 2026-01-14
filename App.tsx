
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { MapSection } from './components/MapSection';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-sage/20 selection:text-sage">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <section id="beneficios" className="py-20 bg-white scroll-mt-24">
          <Benefits />
        </section>
        <section id="sobre-mi" className="py-20 bg-stone-50 scroll-mt-24">
          <About />
        </section>
        <section id="experiencia" className="py-20 bg-white scroll-mt-24">
          <Experience />
          <MapSection />
        </section>
        <section id="inscripcion" className="py-20 bg-sage text-white scroll-mt-24">
          <RegistrationForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
