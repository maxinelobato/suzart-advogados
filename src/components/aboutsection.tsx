import { Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSection() {
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
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn x={-30}>
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Advogado"
                className="w-4/5 mx-auto lg:w-full rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2} x={30}>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                Sobre o Profissional
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Com mais de uma década de experiência no cenário jurídico de São
                Paulo, a Suzart Advogados nasceu com o propósito de oferecer uma
                advocacia técnica, ética e extremamente focada no cliente.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nossa equipe é liderada por especialistas com formação nas
                melhores instituições do país, garantindo que cada caso receba a
                profundidade acadêmica e a agilidade prática que o mercado
                moderno exige.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="text-gold" />
                  <span className="font-bold text-primary">OAB/SP Ativa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-gold" />
                  <span className="font-bold text-primary">
                    Equipe Especializada
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
