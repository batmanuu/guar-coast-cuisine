import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import guara2 from "@/assets/guara-3d-2.png";
import guara3 from "@/assets/guara-3d-3.png";

const ParallaxGuara = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Companion guará — enters from right, arcs across
  const x1 = useTransform(scrollYProgress, [0, 0.5, 1], ["80vw", "15vw", "-25vw"]);
  const y1 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["-15vh", "0vh", "10vh", "25vh"]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-12, 5, 15]);
  const scale1 = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.5, 0.9, 0.85, 0.6]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 0.8, 0.8, 0.2]);

  // Smaller trailing guará
  const x2 = useTransform(scrollYProgress, [0, 0.5, 1], ["95vw", "35vw", "-15vw"]);
  const y2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["-8vh", "5vh", "12vh", "20vh"]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [-18, -2, 8]);
  const scale2 = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.35, 0.6, 0.55, 0.4]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [0, 0.6, 0.6, 0.15]);

  return (
    <div ref={ref} className="relative h-[50vh] -mt-[25vh] -mb-[25vh] z-30 pointer-events-none overflow-visible">
      <motion.img
        src={guara2}
        alt="Guará em voo"
        className="absolute w-40 md:w-56 lg:w-64 drop-shadow-2xl"
        style={{
          x: x1, y: y1, rotate: rotate1, scale: scale1, opacity: opacity1,
          filter: "drop-shadow(0 20px 40px hsl(var(--dark) / 0.3))",
        }}
      />
      <motion.img
        src={guara3}
        alt="Guará companheiro"
        className="absolute w-28 md:w-40 lg:w-48 drop-shadow-xl"
        style={{
          x: x2, y: y2, rotate: rotate2, scale: scale2, opacity: opacity2,
          filter: "drop-shadow(0 15px 30px hsl(var(--dark) / 0.25))",
        }}
      />
    </div>
  );
};

export default ParallaxGuara;
