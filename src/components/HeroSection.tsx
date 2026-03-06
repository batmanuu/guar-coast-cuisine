import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-restaurant.jpg";
import guaraWalking from "@/assets/guara-walking.png";
import guara1 from "@/assets/guara-3d-1.png";

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0.2]);

  // Walking Guará — starts visible, centered-bottom, fades out as it "transforms" into flying
  const walkOpacity = useTransform(scrollYProgress, [0, 0.08, 0.2], [1, 1, 0]);
  const walkScale = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1.05, 0.8]);
  const walkY = useTransform(scrollYProgress, [0, 0.15, 0.25], ["0%", "-10%", "-40%"]);
  const walkRotate = useTransform(scrollYProgress, [0, 0.2], [0, -10]);

  // Flying Guará — fades in as walking fades out, then flies across screen
  const flyOpacity = useTransform(scrollYProgress, [0.12, 0.22, 0.85, 1], [0, 1, 1, 0]);
  const flyX = useTransform(scrollYProgress, [0.15, 0.4, 0.65, 1], ["0%", "-15%", "-45%", "-120%"]);
  const flyY = useTransform(scrollYProgress, [0.15, 0.3, 0.55, 0.8, 1], ["0%", "-15%", "-35%", "-55%", "-90%"]);
  const flyRotate = useTransform(scrollYProgress, [0.15, 0.4, 0.7, 1], [0, -12, -20, -30]);
  const flyScale = useTransform(scrollYProgress, [0.15, 0.35, 0.6, 1], [0.7, 1.15, 1, 0.6]);

  // Feather particles scatter on "takeoff"
  const featherOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.5, 0.7], [0, 0.8, 0.4, 0]);
  const featherSpread = useTransform(scrollYProgress, [0.1, 0.5, 0.8], [0, 1, 1.8]);

  // Scroll hint
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // End fade
  const endFade = useTransform(scrollYProgress, [0.88, 1], [0, 1]);

  const fireflies = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    delay: Math.random() * 6,
    x: Math.random() * 100,
    y: 15 + Math.random() * 75,
  }));

  const feathers = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const radius = 120 + Math.random() * 140;
    return { id: i, angle, radius };
  });

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale, opacity: bgOpacity }}>
          <img
            src={heroImg}
            alt="Vista do mangue ao entardecer"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/45 via-dark/10 to-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/35 via-transparent to-dark/20" />

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
            background: "radial-gradient(ellipse at center 70%, transparent 30%, hsl(var(--dark) / 0.65) 100%)",
          }}
        />

        {/* === WALKING GUARÁ — initial state === */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-20 pb-[12vh]">
          <motion.img
            src={guaraWalking}
            alt="Guará caminhando"
            className="w-52 md:w-64 lg:w-80"
            style={{
              opacity: walkOpacity,
              scale: walkScale,
              y: walkY,
              rotate: walkRotate,
              filter: "drop-shadow(0 20px 40px hsl(var(--dark) / 0.5))",
            }}
          />
        </div>

        {/* === FLYING GUARÁ — takes over mid-scroll === */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <motion.img
            src={guara1}
            alt="Guará em voo"
            className="w-52 md:w-72 lg:w-96"
            style={{
              x: flyX,
              y: flyY,
              rotate: flyRotate,
              scale: flyScale,
              opacity: flyOpacity,
              filter: "drop-shadow(0 30px 60px hsl(var(--dark) / 0.5))",
            }}
          />
        </div>

        {/* Feather particles on takeoff */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15">
          {feathers.map((f) => (
            <motion.div
              key={f.id}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `hsl(var(--primary) / ${0.3 + Math.random() * 0.4})`,
                x: useTransform(featherSpread, (v) => Math.cos(f.angle) * f.radius * v),
                y: useTransform(featherSpread, (v) => Math.sin(f.angle) * f.radius * v - v * 60),
                opacity: featherOpacity,
                scale: useTransform(scrollYProgress, [0.1, 0.25, 0.6], [0, 1, 0.2]),
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          style={{ opacity: scrollHintOpacity }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-cream/50">
            Role para voar
          </p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* End fade to background */}
        <motion.div
          className="absolute inset-0 bg-background z-30 pointer-events-none"
          style={{ opacity: endFade }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
