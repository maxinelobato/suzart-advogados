import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './fade-in';

export function Testimonials() {

  const TESTIMONIALS = [
    {
      name: 'Ricardo S.',
      text: 'Tinha um problema trabalhista complexo que se arrastava por anos. Depois de apenas 3 meses com a Suzart Advogados, conseguimos um acordo justo. Super recomendo!',
      rating: 5,
    },
    {
      name: 'Mariana L.',
      text: 'Atendimento impecável! A Dra. foi extremamente atenciosa no meu processo de divórcio. O resultado superou minhas expectativas. Nota 10!',
      rating: 5,
    },
    {
      name: 'Carlos A.',
      text: 'Já indiquei para vários amigos empresários. A consultoria preventiva deles salvou minha empresa de multas pesadas. Melhor de São Paulo!',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-gray-500">
              Resultados que transformam vidas e negócios.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl relative"
            >
              <div className="flex text-gold mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <span className="font-bold text-primary">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
