import React from 'react';
import { Button } from './ui/Button';

const Footer: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-purple pt-8 pb-8 overflow-hidden">
      {/* Background glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-brand-red/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        
        <h2 className="text-5xl md:text-7xl font-display font-thin text-white mb-6 tracking-tighter">
          CHAMADA FINAL
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
          Sua arte é um chamado.
        </p>
        <p className="text-xl md:text-2xl text-white font-bold mb-12">
          Sua excelência é uma resposta.
        </p>
        
        <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 inline-block w-full max-w-2xl bg-white/5">
          <p className="text-gray-300 mb-8">
            Não adie o que Deus quer fazer em você.
          </p>
          
          <Button onClick={scrollToPricing} fullWidth className="bg-brand-red text-white hover:bg-white hover:text-brand-red border-none h-16 text-lg shadow-[0_0_50px_-10px_rgba(0,0,0,0.3)]">
            GARANTIR MINHA VAGA AGORA
          </Button>
          
          <p className="mt-4 text-xs text-red-200/80 uppercase tracking-widest animate-pulse">
            Vagas limitadas | Inscrições podem encerrar a qualquer momento
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
          <p>&copy; 2026 CIPA - Igreja Ágape Betim.</p>
          <p>Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;