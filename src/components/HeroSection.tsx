import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-restaurant.jpg";
import guara1 from "@/assets/guara-3d-1.png";
import guara2 from "@/assets/guara-3d-2.png";
import guara3 from "@/assets/guara-3d-3.png";

const Firefly = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: 3,
      height: 3,
      background: "hsl(var(--gold))",
      boxShadow: "0 0 8px 3px hsl(var(--gold) / 0.5)",
    }}
    animate={{
      opacity: [0, 0.9, 0.2, 0.8, 0],
      x: [0, 15, -10, 20, 0],
      y: [0, -25, -10, -35, -50],
      scale: [0.5, 1, 0.7, 1.2, 0.3],
    }}
    transition={{ duration: 5 + Math.random() * 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress over 200vh (the pinned section height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background zoom on scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.6, 0.3]);

  // Main Guará — starts centered, flies up-left as you scroll
  const g1X = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], ["0%", "5%", "-20%", "-60%", "-120%"]);
  const g1Y = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.7, 1], ["0%", "-5%", "-30%", "-60%", "-100%"]);
  const g1Rotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -10, -20, -35]);
  const g1Scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [1, 1.1, 1.2, 1, 0.6]);
  const g1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.85, 1], [0, 1, 1, 0]);

  // Second Guará — enters from right, follows with delay
  const g2X = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["120%", "40%", "-10%", "-80%"]);
  const g2Y = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], ["50%", "20%", "-10%", "-50%", "-90%"]);
  const g2Rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-15, -5, -25]);
  const g2Scale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.5, 0.8, 0.75, 0.4]);
  const g2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.85, 1], [0, 0, 0.8, 0.8, 0]);

  // Third Guará — smaller, trailing
  const g3X = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ["150%", "60%", "10%", "-60%"]);
  const g3Y = useTransform(scrollYProgress, [0, 0.4, 0.65, 1], ["80%", "30%", "0%", "-70%"]);
  const g3Rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-20, -8, -30]);
  const g3Scale = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0.3, 0.55, 0.5, 0.25]);
  const g3Opacity = useTransform(scrollYProgress, [0, 0.3, 0.45, 0.85, 1], [0, 0, 0.6, 0.6, 0]);

  // Overlay text that fades in mid-scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.7, 0.85], [0.5, 1, 0, 0, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Feather particles that scatter
  const featherSpread = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);

  const fireflies = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 6,
    x: Math.random() * 100,
    y: 20 + Math.random() * 70,
  }));

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background with scroll-controlled zoom */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale, opacity: bgOpacity }}>
          <img
            src={heroImg}
            alt="Vista do mangue ao entardecer"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/15 to-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/20" />

        {/* Fireflies */}
        <div className="absolute inset-0 pointer-events-none">
          {fireflies.map((f) => (
            <Firefly key={f.id} delay={f.delay} x={f.x} y={f.y} />
          ))}
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--dark) / 0.7) 100%)",
          }}
        />

        {/* === SCROLL-CONTROLLED GUARÁS === */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          {/* Main Guará */}
          <motion.img
            src={guara1}
            alt="Guará em voo"
            className="absolute w-56 md:w-72 lg:w-96"
            style={{
              x: g1X,
              y: g1Y,
              rotate: g1Rotate,
              scale: g1Scale,
              opacity: g1Opacity,
              filter: "drop-shadow(0 30px 60px hsl(var(--dark) / 0.5))",
            }}
          />

          {/* Second Guará */}
          <motion.img
            src={guara2}
            alt="Guará companheiro"
            className="absolute w-40 md:w-52 lg:w-64"
            style={{
              x: g2X,
              y: g2Y,
              rotate: g2Rotate,
              scale: g2Scale,
              opacity: g2Opacity,
              filter: "drop-shadow(0 20px 40px hsl(var(--dark) / 0.4))",
            }}
          />

          {/* Third Guará */}
          <motion.img
            src={guara3}
            alt="Guará menor"
            className="absolute w-28 md:w-36 lg:w-44"
            style={{
              x: g3X,
              y: g3Y,
              rotate: g3Rotate,
              scale: g3Scale,
              opacity: g3Opacity,
              filter: "drop-shadow(0 15px 30px hsl(var(--dark) / 0.35))",
            }}
          />

          {/* Scattered feather particles on scroll */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 150 + Math.random() * 100;
            return (
              <motion.div
                key={`feather-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: `hsl(var(--primary) / ${0.3 + Math.random() * 0.4})`,
                  x: useTransform(featherSpread, (v) => Math.cos(angle) * radius * v),
                  y: useTransform(featherSpread, (v) => Math.sin(angle) * radius * v - v * 80),
                  opacity: useTransform(scrollYProgress, [0, 0.15, 0.5, 0.8], [0, 0.8, 0.4, 0]),
                  scale: useTransform(scrollYProgress, [0, 0.2, 0.6], [0, 1, 0.3]),
                }}
              />
            );
          })}
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          style={{ opacity: scrollHintOpacity }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-cream/50">
            Role para voar
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Fade-out overlay at end of scroll */}
        <motion.div
          className="absolute inset-0 bg-background z-30 pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]),
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
