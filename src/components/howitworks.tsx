import { motion } from 'motion/react';

export function HowItWorks() {
  const FadeIn = ({ children, delay = 0, y = 20, x = 0, ...props }: any) => (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    >
      {children}
    </motion.div>
  );

  const steps = [
    {
      title: 'Contato Inicial',
      desc: 'Você nos conta seu caso via WhatsApp ou formulário.',
    },
    {
      title: 'Análise Jurídica',
      desc: 'Nossa equipe estuda os fatos e documentos apresentados.',
    },
    {
      title: 'Estratégia',
      desc: 'Definimos o melhor caminho legal para proteger seus direitos.',
    },
    {
      title: 'Execução',
      desc: 'Acompanhamos cada etapa do processo com transparência total.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-500">
              Transparência e agilidade em cada etapa do seu processo.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-serif text-2xl font-bold mx-auto mb-6 group-hover:bg-gold group-hover:text-white transition-all">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
