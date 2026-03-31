import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function LocationSection() {
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

  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

  return (
    <section id="localizacao" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn x={-30}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                  Onde Estamos
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Localizado no coração de São Paulo, nosso escritório oferece
                  uma infraestrutura moderna e acolhedora para receber nossos
                  clientes com o máximo de conforto e privacidade.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Endereço</h4>
                    <p className="text-gray-500">
                      Av. Amador Bueno da Veiga, 1232 - Penha de França, São
                      Paulo - SP, 03636-000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">
                      Horário de Atendimento
                    </h4>
                    <p className="text-gray-500">
                      Segunda a Sexta: 09:00 às 18:00
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">
                      Telefone / WhatsApp
                    </h4>
                    <p className="text-gray-500">(11) 95039-1906</p>
                  </div>
                </div>
              </div>

              <motion.a
                href={WHATSAPP_LINK}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all"
              >
                Traçar Rota via WhatsApp <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-125 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.259856865259!2d-46.5331633!3d-23.5231544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49764f32057d1c21%3A0x6544730e1933e38b!2sSuzart%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1774655460991!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Suzart Advogados"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
