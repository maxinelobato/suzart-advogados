import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { FadeIn } from './fade-in';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQ = [
    {
      q: 'Quanto custa uma consulta?',
      a: 'Os valores variam conforme a complexidade do caso. Entre em contato para uma avaliação inicial.',
    },
    {
      q: 'A primeira consulta é gratuita?',
      a: 'Sim, oferecemos uma primeira consulta de orientação sem compromisso para entender seu caso.',
    },
    {
      q: 'Atendem online?',
      a: 'Sim, realizamos atendimentos via videoconferência para sua maior comodidade e agilidade.',
    },
    {
      q: 'Quais áreas atendem?',
      a: 'Atendemos Direito Civil, Trabalhista, Família, Empresarial, Imobiliário e Consumidor.',
    },
    {
      q: 'Como funciona o processo?',
      a: 'Iniciamos com a análise documental, seguida da estratégia jurídica e acompanhamento em todas as instâncias.',
    },
    {
      q: 'Como agendar?',
      a: 'Basta clicar no botão do WhatsApp ou preencher o formulário abaixo. Respondemos em até 2 horas.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-gray-500">
              Tudo o que você precisa saber antes de iniciar seu processo.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-primary">{item.q}</span>
                  {openIndex === i ? (
                    <ChevronUp className="text-gold" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-gray-600 leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
