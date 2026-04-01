import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  MessageSquare,
  Phone,
  Scale,
} from 'lucide-react';
import { FadeIn } from './fade-in';

export function Footer() {

  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <FadeIn delay={0.1}>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Scale className="w-8 h-8 text-gold" />
                <span className="text-2xl font-serif font-bold">
                  Suzart Advogados
                </span>
              </div>
              <p className="text-white/60 leading-relaxed mb-8">
                Justiça e compromisso com seus direitos em São Paulo. Advocacia
                especializada com foco em resultados reais.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h4 className="text-lg font-bold mb-8">Links Rápidos</h4>
              <ul className="space-y-4">
                {['Inicio', 'Servicos', 'Sobre', 'Depoimentos', 'FAQ'].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-white/60 hover:text-gold transition-colors flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" /> {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h4 className="text-lg font-bold mb-8">Contato</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0" />
                  <span className="text-white/60">
                    Av. Amador Bueno da Veiga, 1232 - Penha de França, São Paulo
                    - SP
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-6 h-6 text-gold shrink-0" />
                  <span className="text-white/60">(11) 95039-1906</span>
                </li>
                <li className="flex gap-4">
                  <MessageSquare className="w-6 h-6 text-gold shrink-0" />
                  <span className="text-white/60">
                    suporte@suzartadvogados.com.br
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} y={10}>
          <div className="pt-12 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">
              © 2025 Suzart Advogados. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
