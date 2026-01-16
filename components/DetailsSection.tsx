import React from 'react';
import { UserCheck, MapPin, Clock, XCircle } from 'lucide-react';

const DetailsSection: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Target Audience */}
            <div>
                <h3 className="text-2xl font-display font-light text-brand-purple mb-8 border-l-4 border-brand-red pl-4">
                    Para quem é este curso?
                </h3>
                
                <div className="space-y-6">
                    {[
                        "Músicos e bailarinos cristãos",
                        "Pessoas que servem ou desejam servir no ministério de artes",
                        "Quem deseja crescer espiritualmente e tecnicamente",
                        "Quem busca excelência na arte para glorificar a Deus"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0 mt-1">
                                <UserCheck className="w-3 h-3 text-brand-purple" />
                            </div>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}

                    <div className="flex items-start gap-4 mt-8 bg-red-50 p-4 rounded-lg border border-red-100">
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <p className="text-red-800 text-sm">
                            Não é indicado para quem busca apenas um evento casual ou turístico.
                        </p>
                    </div>
                </div>
            </div>

            {/* Logistics */}
            <div>
                <h3 className="text-2xl font-display font-light text-brand-purple mb-8 border-l-4 border-brand-purple pl-4">
                    Informações Importantes
                </h3>
                
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                            <MapPin className="w-6 h-6 text-brand-red" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Local</h4>
                            <p className="text-xl text-brand-purple font-medium">Igreja Ágape Betim</p>
                            <p className="text-gray-500">Betim, Minas Gerais</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                            <Clock className="w-6 h-6 text-brand-purple" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Check-in</h4>
                            <p className="text-gray-900 font-medium">Domingo, 18/01/2026</p>
                            <p className="text-gray-500">Até às 20h00</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                            <Clock className="w-6 h-6 text-brand-purple" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Encerramento</h4>
                            <p className="text-gray-900 font-medium">Domingo, 25/01/2026</p>
                            <p className="text-gray-500">Das 09h30 às 12h00</p>
                        </div>
                    </div>
                </div>

                {/* Map Image */}
                <div className="mt-8 h-48 w-full bg-gray-100 rounded-lg border border-gray-200 overflow-hidden relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                      alt="Mapa" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-purple/10 group-hover:bg-transparent transition-colors">
                      <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg text-xs font-bold uppercase tracking-widest text-brand-purple flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Ver no mapa
                      </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default DetailsSection;