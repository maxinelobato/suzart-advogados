import { MessageSquare } from 'lucide-react';

export function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-9999 bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-whatsapp group"
    >
      <MessageSquare className="w-8 h-8" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Tire suas dúvidas agora!
      </span>
    </a>
  );
}
