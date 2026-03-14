import { motion } from "framer-motion";
import heroVideo from "@/assets/Video Project Final Reverse.mp4";
import logo from "@/assets/Imagem9-edit-removebg-preview.png";

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
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    delay: Math.random() * 4,
    x: Math.random() * 100,
    y: 30 + Math.random() * 60,
  }));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/30 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/30 to-transparent" />
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
          <motion.img
            src={logo}
            alt="Restaurante dos Guarás"
            className="h-40 md:h-52 lg:h-60 mx-auto mb-8 brightness-0 invert opacity-90"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
          />

          <motion.p
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Gastronomia à beira do mangue
            {/* Trocar a cor para vermelho guara ou verde natureza. Dentro da nossa paleta de cores. */}
          </motion.p>

          <motion.div
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
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
          <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
