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
import { twMerge } from 'tailwind-merge';
import { FadeIn } from './fade-in';

export function ServicesSection() {
  function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

  const SERVICES = [
    {
      title: 'Direito Civil',
      description:
        'Resolução de conflitos, contratos, responsabilidade civil e direitos reais.',
      icon: Scale,
    },
    {
      title: 'Direito Trabalhista',
      description:
        'Defesa dos direitos do trabalhador e consultoria para empresas.',
      icon: Briefcase,
    },
    {
      title: 'Direito de Família',
      description: 'Divórcios, guarda, inventários e planejamento sucessório.',
      icon: Users,
    },
    {
      title: 'Direito Empresarial',
      description:
        'Assessoria jurídica completa para o crescimento do seu negócio.',
      icon: Gavel,
    },
    {
      title: 'Consultoria Jurídica',
      description:
        'Prevenção de riscos e orientação estratégica personalizada.',
      icon: ShieldCheck,
    },
    {
      title: 'Direito Imobiliário',
      description:
        'Regularização de imóveis, contratos de compra e venda e locação.',
      icon: MapPin,
    },
  ];

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
            <div
              key={i}
              className={cn(
                'bg-gray-50 p-8 rounded-3xl shadow-2xl transition-all flex flex-col justify-between relative h-full duration-150 ease-in-out hover:scale-[1.02]',
              )}
            >
              <s.icon className="w-10 h-10 text-gold mb-6" />
              <h4 className="text-xl font-bold text-primary mb-4">{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.description}
              </p>
              <a
                href={WHATSAPP_LINK}
                className="pt-6 text-primary font-bold text-sm flex items-center gap-2 hover:text-gold transition-colors"
              >
                Saber mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
