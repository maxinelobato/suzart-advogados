import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ContactBar } from './contactbar';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // --- Constants ---
  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;
  const GOOGLE_RATING = { score: 5, count: 159 };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-10"
    >
      {/* Background Video Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <motion.video
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-scales-of-justice-close-up-34532-large.mp4"
            type="video/mp4"
          />
          O seu navegador não suporta a tag de vídeo.
        </motion.video>
        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/90 via-primary/70 to-primary/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Star className="w-5 h-5 fill-current" />
                </motion.div>
              ))}
            </div>
            <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 border border-white/20 px-5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              {GOOGLE_RATING.score} no Google ({GOOGLE_RATING.count} avaliações)
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50, rotateX: 45 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] },
              },
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-[0.95] mb-10 tracking-tighter perspective-1000"
          >
            Defesa e Proteção
            <span className="text-gold relative inline-block italic">
              dos seus Direitos
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.5, duration: 1.2, ease: 'easeInOut' }}
                className="absolute -bottom-3 left-0 h-1 bg-gold/40 rounded-full blur-[1px]"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Advocacia de excelência em São Paulo. Unimos tradição jurídica e
            inovação para garantir a melhor defesa dos seus interesses.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10"
          >
            <div className="relative">
              {/* Pulsing Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.15, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-5 bg-gold/40 rounded-full blur-2xl z-0"
              />

              <motion.a
                href={WHATSAPP_LINK}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 60px rgba(212, 172, 13, 0.8)',
                  backgroundColor: '#e5bc11',
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-gold text-white px-14 py-4 rounded-full text-2xl font-bold transition-all shadow-[0_20px_50px_rgba(212,172,13,0.4)] flex items-center justify-center gap-4 group relative overflow-hidden z-10"
              >
                <span className="relative z-10">Agendar Consulta</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform relative z-10" />

                {/* Shimmer Effect */}
                <motion.div
                  animate={{
                    left: ['-100%', '200%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'linear',
                    repeatDelay: 1,
                  }}
                  className="absolute top-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] z-0 pointer-events-none"
                />
              </motion.a>
            </div>

            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span>Atendimento Prioritário</span>
              </div>
              <p className="text-white/40 text-xs ml-7 italic">
                Resposta em até 15 minutos
              </p>
            </div>
          </motion.div>

          <ContactBar />

          {/* Scroll Indicator moved here */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-16 flex flex-col items-center gap-3 text-white/40"
          >
            <span className="text-[9px] uppercase tracking-[0.5em] font-bold">
              Descubra
            </span>
            <div className="w-px h-16 bg-linear-to-b from-gold/60 via-gold/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
