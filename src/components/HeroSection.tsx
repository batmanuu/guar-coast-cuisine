import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-restaurant.jpg";
import guara1 from "@/assets/guara-3d-1.png";

const FloatingMist = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      bottom: "0%",
      width: `${200 + Math.random() * 300}px`,
      height: `${80 + Math.random() * 120}px`,
      background: "radial-gradient(ellipse, hsl(var(--cream) / 0.08), transparent 70%)",
      filter: "blur(40px)",
    }}
    animate={{
      x: [0, 60, -40, 0],
      y: [0, -80, -120, 0],
      opacity: [0, 0.6, 0.3, 0],
      scale: [0.8, 1.4, 1.1, 0.8],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

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
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Guará starts centered and "takes flight" as user scrolls
  const guaraX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["0%", "-10%", "-50%", "-120%"]);
  const guaraY = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ["0%", "-15%", "-40%", "-80%"]);
  const guaraRotate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, -8, -15, -25]);
  const guaraScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1.15, 1.05, 0.7]);

  // Wing flap simulation via subtle rotation oscillation is handled by the ambient animation

  const mists = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 1.5,
    x: Math.random() * 100,
    duration: 10 + Math.random() * 6,
  }));

  const fireflies = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 6,
    x: Math.random() * 100,
    y: 20 + Math.random() * 70,
  }));

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Background with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.08, 1.03, 1.06] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={heroImg}
          alt="Vista do mangue ao entardecer"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/20 to-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/50 via-transparent to-dark/30" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark/90 to-transparent" />

      {/* Atmospheric mist */}
      <div className="absolute inset-0 pointer-events-none">
        {mists.map((m) => (
          <FloatingMist key={m.id} delay={m.delay} x={m.x} duration={m.duration} />
        ))}
      </div>

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
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--dark) / 0.6) 100%)",
        }}
      />

      {/* GUARÁ — the hero focal point */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <motion.div
          style={{
            x: guaraX,
            y: guaraY,
            rotate: guaraRotate,
            scale: guaraScale,
          }}
        >
          {/* Ambient gentle hover */}
          <motion.img
            src={guara1}
            alt="Guará — ave símbolo do mangue"
            className="w-64 md:w-80 lg:w-96 drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 30px 60px hsl(var(--dark) / 0.4))",
            }}
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { delay: 0.5, duration: 1.5 },
              scale: { delay: 0.5, duration: 1.5 },
              y: { delay: 2, duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </motion.div>
      </div>

      {/* Subtle bottom text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-28">
        <motion.p
          className="font-body text-xs tracking-[0.4em] uppercase text-cream/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ delay: 2, duration: 4, repeat: Infinity }}
        >
          Role para descobrir
        </motion.p>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
