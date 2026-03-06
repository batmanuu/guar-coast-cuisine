import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import guara1 from "@/assets/guara-3d-1.png";
import guara2 from "@/assets/guara-3d-2.png";

const ParallaxGuara = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Main guará — flies from right-center to left-bottom
  const x1 = useTransform(scrollYProgress, [0, 0.5, 1], ["70vw", "10vw", "-30vw"]);
  const y1 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["-10vh", "5vh", "15vh", "30vh"]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 5, 15]);
  const scale1 = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.6, 1.1, 1, 0.8]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0.3]);

  // Secondary guará — smaller, follows behind
  const x2 = useTransform(scrollYProgress, [0, 0.5, 1], ["90vw", "30vw", "-20vw"]);
  const y2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["-5vh", "0vh", "10vh", "25vh"]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 10]);
  const scale2 = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.4, 0.7, 0.65, 0.5]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [0, 0.7, 0.7, 0.2]);

  return (
    <div ref={ref} className="relative h-[50vh] -mt-[25vh] -mb-[25vh] z-30 pointer-events-none overflow-visible">
      {/* Main guará */}
      <motion.img
        src={guara1}
        alt="Guará em voo"
        className="absolute w-48 md:w-72 lg:w-80 drop-shadow-2xl"
        style={{
          x: x1,
          y: y1,
          rotate: rotate1,
          scale: scale1,
          opacity: opacity1,
          filter: "drop-shadow(0 20px 40px hsl(var(--dark) / 0.3))",
        }}
      />

      {/* Secondary guará */}
      <motion.img
        src={guara2}
        alt="Guará companheiro"
        className="absolute w-32 md:w-48 lg:w-56 drop-shadow-xl"
        style={{
          x: x2,
          y: y2,
          rotate: rotate2,
          scale: scale2,
          opacity: opacity2,
          filter: "drop-shadow(0 15px 30px hsl(var(--dark) / 0.25))",
        }}
      />
    </div>
  );
};

export default ParallaxGuara;
