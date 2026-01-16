import React from 'react';
import { Target, Heart, BookOpen, Users, Cross } from 'lucide-react';

const ImpactSection: React.FC = () => {
  return (
    <section className="relative py-8 px-4 border-t border-brand-purple/5 bg-white/50">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-2">Bloco de Impacto</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-light text-brand-purple leading-tight">
                        Você não foi chamado apenas para tocar ou dançar.
                    </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                    Você foi chamado para servir a um Deus perfeito com excelência, profundidade e propósito.
                    O Curso de Artes do CIPA 2026 não é apenas um curso. É uma experiência espiritual, técnica e ministerial.
                </p>

                <div className="grid grid-cols-1 gap-4">
                    {[
                        { icon: Target, text: "Na sua técnica" },
                        { icon: Heart, text: "Na sua intimidade com Deus" },
                        { icon: Cross, text: "Na sua consciência de chamado" },
                        { icon: Users, text: "Na sua vida em comunidade" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-brand-purple/5 flex items-center justify-center border border-brand-purple/10 group-hover:border-brand-red/50 transition-colors">
                                <item.icon className="w-5 h-5 text-brand-purple group-hover:text-brand-red transition-colors" />
                            </div>
                            <span className="text-gray-700 font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Theme Card */}
            <div className="relative group">
                {/* Clean background blob for light mode */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-brand-red/10 blur-3xl rounded-full transform rotate-3"></div>
                
                <div className="relative glass-card p-10 md:p-12 rounded-2xl border-white/40 shadow-xl text-center bg-white/80 overflow-hidden">
                    {/* Subtle background image for texture */}
                    <img 
                        src="https://images.unsplash.com/photo-1507643179173-617d654551a3?q=80&w=2000&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                        alt=""
                    />
                    
                    <div className="relative z-10">
                        <BookOpen className="w-12 h-12 text-brand-purple mx-auto mb-6" />
                        <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Tema Oficial</h4>
                        <h3 className="text-4xl font-display font-light text-brand-purple mb-6">
                            Servindo um Deus Perfeito
                        </h3>
                        <div className="w-12 h-1 bg-brand-red mx-auto mb-6"></div>
                        <blockquote className="text-xl font-light italic text-gray-700">
                            "Portanto, sede vós perfeitos, como perfeito é o vosso Pai celestial."
                        </blockquote>
                        <p className="text-sm font-bold mt-4 text-brand-red">(Mateus 5:48)</p>
                        
                        <p className="mt-8 text-sm text-gray-500 leading-relaxed text-justify">
                            Desde 2012, o mês de janeiro é separado como tempo de primícias. O CIPA nasceu dessa direção profética para capacitar adoradores que desejam impactar o mundo através da arte.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;