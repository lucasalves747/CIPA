import React from 'react';
import { Star, MapPin, Calendar, AlertTriangle } from 'lucide-react';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-10 px-4 overflow-hidden">
      
      {/* Background Image - Desktop Only */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
          alt="Background Art" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Heavy light gradient overlay to maintain "claro" theme and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,1)_100%)]"></div>
      </div>

      {/* Decorative text corners */}
      <div className="absolute top-8 left-8 text-[10px] uppercase tracking-widest text-brand-purple/50 hidden md:block z-10">
        Betim / MG
      </div>
      <div className="absolute top-8 right-8 text-[10px] uppercase tracking-widest text-brand-purple/50 hidden md:block z-10">
        Brasil
      </div>
      <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-widest text-brand-purple/50 hidden md:block z-10">
        Arte & Adoração
      </div>
      
      {/* Central Content */}
      <div className="max-w-6xl w-full mx-auto text-center z-10 flex flex-col items-center gap-8">
        
        {/* Mobile Image - Visible only on mobile */}
        <div className="md:hidden w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl mb-2 aspect-[4/3] relative">
             <img 
              src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
              alt="CIPA 2026 Art" 
              className="w-full h-full object-cover"
            />
             {/* Subtle internal gradient for depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/10 to-transparent"></div>
        </div>

        {/* Top Tagline */}
        

        {/* Main Title */}
        <div className="relative">
            <h1 className="font-display font-thin text-6xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-purple via-brand-purple to-brand-red relative z-10 leading-[0.9] pb-2 drop-shadow-sm">
            CIPA 2026
            </h1>
            <p className="font-display font-light text-2xl md:text-4xl text-brand-darkBrown mt-2 tracking-widest uppercase shadow-black/5 drop-shadow-sm">
                Curso de Artes
            </p>
        </div>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed font-light drop-shadow-sm font-medium">
          Uma semana para aperfeiçoar sua arte, aprofundar sua fé e viver seu chamado.
        </p>

        {/* Date & Location Pill */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 py-4 px-8 glass-card rounded-full mt-4 shadow-xl border-white/50 bg-white/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-brand-purple font-bold">
                <Calendar className="w-4 h-4 text-brand-red" />
                <span>19 a 25 de Janeiro de 2026</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-brand-purple/20"></div>
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-brand-purple font-bold">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>Betim, MG</span>
            </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mt-8">
            <Button onClick={scrollToPricing} variant="dark" className="shadow-[0_20px_50px_-10px_rgba(41,10,89,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(41,10,89,0.5)]">
                Garantir minha vaga
            </Button>
            <div className="flex items-center gap-2 text-brand-red text-xs font-bold tracking-widest uppercase bg-white/80 px-3 py-2 border border-brand-red/20 rounded shadow-sm backdrop-blur-sm">
                <AlertTriangle className="w-3 h-3" />
                Apenas 10 vagas disponíveis
            </div>
        </div>

      </div>

      {/* Scripture floating */}
      <div className="absolute right-4 top-1/3 max-w-[200px] text-right hidden lg:block opacity-60 z-10">
        <p className="text-[10px] leading-tight text-gray-500 font-medium">
          "Portanto, sede vós perfeitos, como perfeito é o vosso Pai celestial."
        </p>
        <p className="text-[10px] font-bold mt-1 text-brand-purple">Mateus 5:48</p>
      </div>

    </section>
  );
};

export default Hero;