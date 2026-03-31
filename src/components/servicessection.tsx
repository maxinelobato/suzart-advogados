import clsx, { ClassValue } from 'clsx';
import {
  ArrowRight,
  Briefcase,
  Gavel,
  MapPin,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

export function ServicesSection() {
  function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

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

  const SERVICES = [
    {
      title: 'Direito Civil',
      description:
        'Resolução de conflitos, contratos, responsabilidade civil e direitos reais.',
      icon: Scale,
      size: 'h-[200px]',
    },
    {
      title: 'Direito Trabalhista',
      description:
        'Defesa dos direitos do trabalhador e consultoria para empresas.',
      icon: Briefcase,
      size: 'h-[250px]',
    },
    {
      title: 'Direito de Família',
      description: 'Divórcios, guarda, inventários e planejamento sucessório.',
      icon: Users,
      size: 'h-[220px]',
    },
    {
      title: 'Direito Empresarial',
      description:
        'Assessoria jurídica completa para o crescimento do seu negócio.',
      icon: Gavel,
      size: 'h-[280px]',
    },
    {
      title: 'Consultoria Jurídica',
      description:
        'Prevenção de riscos e orientação estratégica personalizada.',
      icon: ShieldCheck,
      size: 'h-[210px]',
    },
    {
      title: 'Direito Imobiliário',
      description:
        'Regularização de imóveis, contratos de compra e venda e locação.',
      icon: MapPin,
      size: 'h-[240px]',
    },
  ];

  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-gray-500">
              Soluções jurídicas completas para todas as suas necessidades.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                backgroundColor: 'rgba(212, 172, 13, 0.05)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                zIndex: 10,
              }}
              className={cn(
                'bg-gray-50 p-8 rounded-3xl border border-gray-100 transition-all group flex flex-col justify-between relative h-full',
                s.size,
              )}
            >
              <div>
                <s.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-primary mb-4">
                  {s.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                className="mt-6 text-primary font-bold text-sm flex items-center gap-2 hover:text-gold transition-colors"
              >
                Saber mais <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
