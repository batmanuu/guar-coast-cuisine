import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/Imagem1.jpg";
import aboutImg from "@/assets/Cópia-de-IMG_2804.avif";
import gallery1 from "@/assets/melhoria_vista_cais.png";
import gallery2 from "@/assets/Imagem8-copy.jpg";
import gallery3 from "@/assets/vista_area_tarde.jpeg";
import dish1 from "@/assets/Cópia-de-IMG_2790.avif";
import guara3 from "@/assets/guara-3d-3.png";
import vista_salao from "@/assets/IMG_2822.jpg";
import dish3 from "@/assets/DJI_0328.jpg"; // Using an existing dessert image as placeholder
import dish4 from "@/assets/sorvete_regional.png"; // Using an existing drink image as placeholder

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const images = [
  // 0: Top Left [2x2]
  { src: heroImg, title: "Salão Principal", isCenter: false, className: "col-span-2 row-span-2 col-start-1 row-start-1", moveX: "-30vw", moveY: "-30vh" },
  // 1: Top Center [2x1] (Gap top)
  { src: aboutImg, title: "Terraço ao Pôr do Sol", isCenter: false, className: "col-span-2 row-span-1 col-start-3 row-start-2", moveX: "0", moveY: "-30vh" },
  // 2: Top Right [2x3]
  { src: gallery1, title: "Bar & Drinks", isCenter: false, className: "col-span-2 row-span-3 col-start-5 row-start-1", moveX: "30vw", moveY: "-30vh" },
  // 3: Middle Left [2x3]
  { src: gallery2, title: "Jantar à Luz de Velas", isCenter: false, className: "col-span-2 row-span-3 col-start-1 row-start-3", moveX: "-30vw", moveY: "0" },
  // 4: CENTER [2x2] -> Crucial: col 3-4, row 3-4 makes it the exact center of a 6x6 grid.
  { src: gallery3, title: "Vista do Mangue", isCenter: true, className: "col-span-2 row-span-2 col-start-3 row-start-3", moveX: "0", moveY: "0" },
  // 5: Middle Right [1x2]
  { src: dish1, title: "Nossos Pratos", isCenter: false, className: "col-span-1 row-span-2 col-start-5 row-start-4", moveX: "30vw", moveY: "0" },
  // 6: Bottom Right 1 [1x3]
  { src: vista_salao, title: "Chef's Special", isCenter: false, className: "col-span-1 row-span-3 col-start-6 row-start-4", moveX: "30vw", moveY: "30vh" },
  // 7: Bottom Center [2x2]
  { src: dish4, title: "Detalhes", isCenter: false, className: "col-span-2 row-span-2 col-start-3 row-start-5", moveX: "0", moveY: "30vh" },
  // 8: Bottom Left gap [2x1]
  { src: dish3, title: "Clima Noturno", isCenter: false, className: "col-span-2 row-span-1 col-start-1 row-start-6", moveX: "-30vw", moveY: "30vh" },
];

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const centerImgRef = useRef<HTMLImageElement>(null);
  const outerImgsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!containerRef.current || !gridRef.current || !centerImgRef.current) return;

    // Reset references to ensure we don't have stale elements
    const outerElements = outerImgsRef.current.filter(Boolean);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      // Create a master timeline for the scroll sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=250%", // How long the pinning lasts
          scrub: 1.5,     // Smooth scrubbing
          pin: true,      // Pin the whole section
          anticipatePin: 1,
        },
      });

      // 1. Calculate exact scale needed to cover the screen perfectly without over-zooming
      const screenRatio = Math.max(
        window.innerWidth / centerImgRef.current.offsetWidth,
        window.innerHeight / centerImgRef.current.offsetHeight
      );

      // 2. Zoom the entire grid just enough to fill the screen (Fly-through effect)
      tl.to(gridRef.current, {
        scale: screenRatio,
        ease: "power2.inOut",
      }, 0); // Start at timeline 0

      // Animate center image border radius to 0 as it fills screen
      tl.to(centerImgRef.current, {
        borderRadius: "0px",
        ease: "power2.inOut",
      }, 0);

      // Actively push outer elements away from the center to widen the gaps
      if (outerElements.length > 0) {
        tl.to(outerElements, {
          x: (i, el) => el.dataset.moveX,
          y: (i, el) => el.dataset.moveY,
          ease: "power2.inOut",
        }, 0);
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const navigate = (dir: number) => {
    if (selected === null) return;
    const next = (selected + dir + images.length) % images.length;
    setSelected(next);
  };

  return (
    <section id="galeria" className="bg-background pt-8 md:pt-16">
      {/* TITLE SECTION - Normal document flow creates space above grid */}
      <motion.div
        className="text-center relative z-30 mb-8 md:mb-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-wine mb-4">
          Nossos Espaços
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
          <span className="italic text-primary">Galeria</span>
        </h2>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
      </motion.div>

      {/* GALLERY PINNED SECTION */}
      <div ref={containerRef} className="relative overflow-hidden h-[100vh] flex flex-col items-center justify-center pb-8">
        {/* Guará */}
        <motion.img
          src={guara3}
          alt="Guará no mangue"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-80 opacity-[0.06] pointer-events-none"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10 w-full flex justify-center">
          {/* 6x6 Staggered Masonry Grid Container that handles the flying zoom */}
          <div
            ref={gridRef}
            className="grid grid-cols-6 grid-rows-6 gap-2 md:gap-4 w-[95vw] md:w-[85vw] max-w-[1200px] aspect-[4/5] md:aspect-video mx-auto origin-center relative z-20 will-change-transform"
          >
            {images.map((img, i) => {
              return (
                <div
                  key={i}
                  ref={(el) => {
                    if (!img.isCenter && el) outerImgsRef.current[i] = el;
                  }}
                  data-move-x={img.moveX}
                  data-move-y={img.moveY}
                  className={`relative cursor-pointer group will-change-transform ${img.isCenter ? "z-30 shadow-2xl shadow-black/50 overflow-visible" : "overflow-hidden rounded-md md:rounded-xl z-10"
                    } ${img.className}`}
                  onClick={() => setSelected(i)}
                >
                  <img
                    ref={img.isCenter ? centerImgRef : null}
                    src={img.src}
                    alt={img.title}
                    className={`w-full h-full object-cover will-change-transform transition-transform duration-700 rounded-md md:rounded-xl ${img.isCenter ? "origin-center object-center" : "group-hover:scale-110"
                      }`}
                    loading="lazy"
                  />

                  {/* Information overlay */}
                  <div className={`absolute inset-0 bg-dark/20 transition-all duration-500 flex items-end opacity-0 ${img.isCenter ? '' : 'group-hover:opacity-100 group-hover:bg-dark/50'}`}>
                    <p className="font-display text-sm md:text-xl text-cream p-4 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {img.title}
                    </p>
                  </div>

                  {/* Gold corner accent on hover */}
                  <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Lightbox Portal */}
        {typeof document !== "undefined" && createPortal(
          <AnimatePresence>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 w-screen h-[100dvh]"
                onClick={() => setSelected(null)}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(null); }}
                  className="absolute top-6 right-6 text-cream/70 hover:text-primary transition-colors z-[110] p-2"
                >
                  <X size={32} />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                  className="absolute left-6 text-cream/50 hover:text-primary transition-colors z-[110] p-4"
                >
                  <ChevronLeft size={40} />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); navigate(1); }}
                  className="absolute right-6 text-cream/50 hover:text-primary transition-colors z-[110] p-4"
                >
                  <ChevronRight size={40} />
                </button>

                <motion.div
                  key={selected}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-5xl max-h-[90vh] mx-6 flex flex-col justify-center items-center"
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
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
};

export default GallerySection;