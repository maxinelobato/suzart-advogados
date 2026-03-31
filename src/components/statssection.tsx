import { motion } from 'motion/react';

export function StatsSection() {
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
