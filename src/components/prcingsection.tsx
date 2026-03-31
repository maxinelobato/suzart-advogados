import { motion } from 'motion/react';

export function PricingSection() {
  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

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

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Consulta de Orientação
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Acreditamos que o acesso à justiça deve ser claro. Oferecemos uma
            primeira análise do seu caso sem custos iniciais.
          </p>
          <div className="mt-12">
            <a
              href={WHATSAPP_LINK}
              className="bg-gold text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-gold/90 transition-all shadow-2xl inline-flex items-center gap-2"
            >
              Quero Agendar Agora
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
