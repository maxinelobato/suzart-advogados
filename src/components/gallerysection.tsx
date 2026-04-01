import { motion } from 'motion/react';
import { FadeIn } from './fade-in';

export function GallerySection() {

  const GALLERY = [
    // {
    //   url: 'https://lh3.googleusercontent.com/p/AF1QipPBxA0zO7448UOu-E5VUQO_ooCmzIAqIQOvc1WE=s474-k-no',
    //   size: 'h-[300px]',
    // },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipPEYfY-4Yi56ijgEctnZMzeKri5eWSS-bx-j0eO=s635-k-no',
      size: 'h-[400px]',
    },
    // { url: 'https://picsum.photos/seed/law3/800/800', size: 'h-[350px]' },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipMcxq9Iz2oabfPrlIyhk3MLVlPJ1qtZn4g4L02_=s544-k-no',
      size: 'h-[250px]',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
              Nosso Escritório
            </h2>
            <p className="text-gray-500">
              Ambiente preparado para oferecer o melhor atendimento jurídico.
            </p>
          </div>
        </FadeIn>

        <div className="columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6">
          {GALLERY.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={img.url}
                alt={`Escritório ${i}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
