import { motion } from "framer-motion";
import heroImg from "@/assets/hero-restaurant.jpg";

const ShimmerParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full bg-gold/40"
    style={{ left: `${x}%`, top: `${y}%`, width: 4, height: 4 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.5, 0.5],
      y: [0, -30, -60],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 4,
    x: Math.random() * 100,
    y: 30 + Math.random() * 60,
  }));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior do Restaurante dos Guarás com vista para o mangue"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 to-transparent" />
      </div>

      {/* Shimmer particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <ShimmerParticle key={p.id} delay={p.delay} x={p.x} y={p.y} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Gastronomia à beira do mangue
          </motion.p>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-cream leading-none mb-4">
            Restaurante
          </h1>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl italic font-medium text-gold leading-none mb-8">
            dos Guarás
          </h1>

          <motion.div
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          />

          <motion.p
            className="font-body text-cream/70 text-lg md:text-xl font-light max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Onde a natureza encontra a sofisticação
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
