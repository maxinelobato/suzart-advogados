import { Clock, MapPin, Phone } from 'lucide-react';
import { FadeIn } from './fade-in';

export function ContactBar() {

  return (
    <section className="bg-white/10 rounded-2xl mt-16 py-12 shadow border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 justify-center sm:justify-start md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="flex justify-center items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">Localização</h4>
                <p className="text-white/60 text-sm">
                  Av. Amador Bueno da Veiga, 1232 - Penha de França, SP
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex justify-center items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">Telefone</h4>
                <p className="text-white/60 text-sm">(11) 95039-1906</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex justify-center items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white">Horário</h4>
                <p className="text-white/60 text-sm">
                  Segunda a Sexta: 09h às 18h
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
