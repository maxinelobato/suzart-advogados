import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './fade-in';

export function Differentials() {

  const diffs = [
    {
      title: 'Atendimento Humanizado',
      desc: 'Não tratamos apenas processos, cuidamos de pessoas.',
    },
    {
      title: 'Transparência Total',
      desc: 'Você sabe exatamente o que está acontecendo em cada fase.',
    },
    {
      title: 'Foco em Resultados',
      desc: 'Estratégias agressivas para garantir seus direitos.',
    },
    {
      title: 'Tecnologia',
      desc: 'Processos 100% digitais para maior rapidez e segurança.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn x={-30}>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                Por que escolher a{' '}
                <span className="text-gold">Suzart Advogados</span>?
              </h2>
              <div className="space-y-6">
                {diffs.map((d, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary">{d.title}</h4>
                      <p className="text-gray-500 text-sm">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} x={30}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
                alt="Justiça"
                className="w-4/5 mx-auto lg:w-full rounded-3xl shadow-2xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-8 rounded-3xl text-white shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">14+</div>
                <div className="text-sm uppercase tracking-widest opacity-80">
                  Anos de Atuação
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
