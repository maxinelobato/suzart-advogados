import { FadeIn } from './fade-in';

export function StatsSection() {

  const STATS = [
    { label: 'Anos de Experiência', value: '14+' },
    { label: 'Clientes Satisfeitos', value: '477+' },
    { label: 'Processos Ativos', value: '1.2k+' },
    { label: 'Avaliação Google', value: '5.0' },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                  {s.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
