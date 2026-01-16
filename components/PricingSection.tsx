import React from 'react';
import { Button } from './ui/Button';
import { Check, AlertCircle, CreditCard, Banknote } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-8 px-4 bg-gradient-to-b from-transparent to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="mb-12">
            <div className="inline-block px-4 py-1 border border-brand-red/50 rounded-full bg-brand-red/5 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
                Investimento
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-brand-purple mb-6">
                Garanta sua vaga agora
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-8">
                Por se tratar de um curso imersivo, as vagas são intencionalmente reduzidas. Quando as vagas acabam, as inscrições encerram.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-6 py-3 rounded-lg shadow-sm">
                <AlertCircle className="w-5 h-5" />
                <span className="font-bold">Apenas 10 vagas disponíveis</span>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
            
            {/* Lot 1 - Expired */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 opacity-60 grayscale shadow-sm">
                <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-2">1º Lote</h3>
                <div className="text-2xl font-bold text-gray-400 line-through">R$ 950,00</div>
                <div className="mt-4 text-xs font-bold text-red-500 border border-red-500/30 bg-red-50 py-1 px-2 rounded uppercase inline-block">Encerrado</div>
            </div>

            {/* Lot 3 - Active & Featured */}
            <div className="relative transform md:scale-110 z-10">
                <div className="absolute -inset-1 bg-gradient-to-b from-brand-purple to-brand-red rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white p-8 rounded-xl border border-brand-purple/20 shadow-2xl overflow-hidden">
                    
                    {/* Badge */}
                    <div className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">
                        Válido até 15/01
                    </div>

                    <h3 className="text-xl font-bold text-brand-purple uppercase tracking-widest mb-2">3º Lote</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                        <span className="text-sm text-gray-500">R$</span>
                        <span className="text-5xl font-black text-brand-purple">1.050</span>
                        <span className="text-sm text-gray-500">,00</span>
                    </div>
                    
                    <ul className="text-left space-y-3 my-8 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" /> 7 dias de imersão
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" /> Hospedagem + Alimentação
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" /> Certificado + Camisa
                        </li>
                    </ul>

                    <Button fullWidth variant="primary">
                        Inscrever Agora
                    </Button>
                </div>
            </div>

            {/* Lot 2 - Expired */}
             <div className="bg-white p-6 rounded-xl border border-gray-100 opacity-60 grayscale shadow-sm">
                <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-2">2º Lote</h3>
                <div className="text-2xl font-bold text-gray-400 line-through">R$ 1.000,00</div>
                <div className="mt-4 text-xs font-bold text-red-500 border border-red-500/30 bg-red-50 py-1 px-2 rounded uppercase inline-block">Encerrado</div>
            </div>

        </div>

        {/* Payment & Group Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="flex items-center gap-2 font-bold text-brand-purple mb-4">
                    <CreditCard className="w-5 h-5 text-brand-red" /> Formas de Pagamento
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✔ <strong>PIX</strong> (à vista)</li>
                    <li>✔ <strong>Boleto</strong> – 2x até 13/12/25</li>
                    <li>✔ <strong>Cartão de Crédito</strong> – até 10x (com juros)</li>
                </ul>
            </div>

             <div className="bg-brand-purple/5 p-6 rounded-xl border border-brand-purple/10">
                <h4 className="flex items-center gap-2 font-bold text-brand-purple mb-4">
                    <Banknote className="w-5 h-5 text-green-600" /> Desconto para Grupos
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                    Grupos com mais de 3 pessoas recebem <strong>5% de desconto</strong> por participante.
                </p>
                <p className="text-xs text-gray-500 italic">
                    (Não acumulativo com promoções como Black Friday)
                </p>
            </div>
        </div>

        {/* Black CIPA Promo */}
        <div className="mt-8 p-1 border border-dashed border-gray-300 rounded-lg hover:border-brand-purple transition-colors">
            <div className="bg-gray-50 p-4 rounded text-sm text-gray-600">
                <span className="font-bold text-brand-purple">📅 PROMOÇÃO BLACK CIPA:</span> Válida de 23/12 a 31/12/2025 - R$ 200,00 OFF
            </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;