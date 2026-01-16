import React from 'react';
import { Music, Flame, Users2, Ticket, CheckCircle2, Home, Shirt, Utensils, GraduationCap } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const experiences = [
    {
      icon: Music,
      title: "Capacitação Técnica Profunda",
      desc: "Aulas teóricas e práticas focadas na sua modalidade principal: Música ou Dança."
    },
    {
      icon: Flame,
      title: "Crescimento Espiritual Real",
      desc: "Momentos de Palavra, oração e adoração que fortalecem sua intimidade com Deus."
    },
    {
      icon: Users2,
      title: "Convivência e Comunhão",
      desc: "Tempo direto com professores, preletores e alunos de diversas cidades e nações."
    },
    {
      icon: Ticket,
      title: "Acesso aos Cultos de Ativação",
      desc: "Inclusa a participação nos Cultos de Ativação do CIPA (22 a 25 de janeiro)."
    }
  ];

  const inclusions = [
    { icon: CheckCircle2, text: "Curso completo (19 a 25/01)" },
    { icon: Home, text: "Hospedagem inclusa" },
    { icon: Utensils, text: "Alimentação completa (4 refeições diárias)" },
    { icon: GraduationCap, text: "Certificado de conclusão" },
    { icon: Shirt, text: "Camisa oficial do CIPA 2026" },
  ];

  return (
    <section className="py-8 px-4 relative bg-brand-purple overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Experience Grid */}
        <div className="mb-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-display font-light mb-4 text-white">O que você vai viver</h2>
                <p className="text-gray-300 max-w-xl mx-auto">Uma semana que vai marcar sua história para sempre.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 shadow-lg border border-white/10 transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors text-white">
                            <exp.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">{exp.title}</h3>
                        <p className="text-sm text-gray-300">{exp.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* All Inclusive Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-red to-brand-blood shadow-2xl border border-white/10">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/50 via-transparent to-transparent opacity-60"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-10 p-10 md:p-16 items-center">
                <div>
                    <h3 className="text-3xl font-display font-light text-white mb-4">
                        Tudo incluso para você focar no que importa
                    </h3>
                    <p className="text-red-100 mb-8">
                        Sua única preocupação será viver tudo o que Deus preparou. Nós cuidamos do resto.
                    </p>
                    <div className="space-y-4">
                        {inclusions.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <item.icon className="w-5 h-5 text-white shrink-0" />
                                <span className="text-white/90">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Visual Image */}
                <div className="h-full flex items-center justify-center relative">
                    <div className="relative w-full aspect-square max-w-sm group">
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        
                        {/* Image Masked as Circle */}
                        <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                             <img 
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
                                alt="Ambiente imersivo" 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                             />
                             <div className="absolute inset-0 bg-brand-red/40 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center bg-brand-purple/90 backdrop-blur-sm p-4 rounded-xl shadow-lg transform translate-y-20 border border-white/20">
                                <span className="block text-4xl font-black text-white">100%</span>
                                <span className="block text-xs uppercase tracking-widest text-white/80">Imersivo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;