import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";
import aboutImg from "@/assets/about-restaurant.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import dish1 from "@/assets/dish-1.jpg";
import guara3 from "@/assets/guara-3d-3.png";

const images = [
  { src: heroImg, title: "Salão Principal" },
  { src: aboutImg, title: "Terraço ao Pôr do Sol" },
  { src: gallery1, title: "Bar & Drinks" },
  { src: gallery2, title: "Jantar à Luz de Velas" },
  { src: gallery3, title: "Vista do Mangue" },
  { src: dish1, title: "Nossos Pratos" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    const next = (selected + dir + images.length) % images.length;
    setSelected(next);
  };

  return (
    <section id="galeria" className="relative py-32 bg-background overflow-hidden">
      {/* Guará */}
      <motion.img
        src={guara3}
        alt="Guará no mangue"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 opacity-[0.06] pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Nossos Espaços
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-2">
            <span className="italic text-primary">Galeria</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-sm cursor-pointer group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-end">
                <motion.p
                  className="font-display text-xl text-cream p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  {img.title}
                </motion.p>
              </div>
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
              className="absolute top-6 right-6 text-cream/70 hover:text-primary transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-6 text-cream/50 hover:text-primary transition-colors z-50"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-6 text-cream/50 hover:text-primary transition-colors z-50"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected].src}
                alt={images[selected].title}
                className="max-w-full max-h-[75vh] object-contain rounded-sm"
              />
              <p className="font-display text-2xl text-cream text-center mt-6 italic">
                {images[selected].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
