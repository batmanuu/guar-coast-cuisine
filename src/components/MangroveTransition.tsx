import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * SVG mangrove silhouette layers for parallax transition.
 * Each layer moves at a different speed creating depth.
 */

// Far background — subtle hills / distant mangrove canopy
const Layer1 = () => (
  <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
    <path d="M0 280 Q200 180 400 220 Q600 260 800 200 Q1000 140 1200 210 Q1350 250 1440 200 L1440 400 L0 400Z"
      fill="hsl(var(--forest) / 0.3)" />
    <path d="M0 300 Q300 240 500 270 Q700 300 900 250 Q1100 200 1300 260 L1440 230 L1440 400 L0 400Z"
      fill="hsl(var(--forest) / 0.4)" />
  </svg>
);

// Mid-ground — mangrove tree shapes with characteristic aerial roots
const Layer2 = () => (
  <svg viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
    {/* Ground / water line */}
    <path d="M0 340 Q100 310 200 330 Q350 360 500 320 Q650 280 800 310 Q950 340 1100 300 Q1250 270 1440 310 L1440 500 L0 500Z"
      fill="hsl(var(--forest) / 0.55)" />
    {/* Mangrove tree cluster left */}
    <path d="M80 340 L80 260 Q90 220 110 240 Q120 200 140 230 Q150 190 160 220 Q170 210 180 250 Q190 230 200 260 L200 340Z"
      fill="hsl(var(--forest) / 0.7)" />
    {/* Roots left */}
    <path d="M60 340 Q80 310 90 340 M100 340 Q110 300 130 340 M150 340 Q160 310 180 340 M190 340 Q210 310 220 340"
      stroke="hsl(var(--forest) / 0.6)" strokeWidth="2" fill="none" />
    {/* Central tall mangrove */}
    <path d="M650 320 L650 200 Q660 160 680 190 Q690 140 710 180 Q720 150 730 190 Q740 170 750 210 Q760 200 770 240 L770 320Z"
      fill="hsl(var(--forest) / 0.65)" />
    <path d="M630 320 Q650 280 660 320 M680 320 Q700 260 720 320 M740 320 Q760 280 780 320"
      stroke="hsl(var(--forest) / 0.5)" strokeWidth="2.5" fill="none" />
    {/* Right cluster */}
    <path d="M1100 310 L1100 230 Q1110 190 1130 220 Q1140 170 1160 210 Q1170 180 1180 220 L1180 310Z"
      fill="hsl(var(--forest) / 0.6)" />
    <path d="M1080 310 Q1100 270 1110 310 M1130 310 Q1150 260 1170 310 M1190 310 Q1210 270 1220 310"
      stroke="hsl(var(--forest) / 0.5)" strokeWidth="2" fill="none" />
  </svg>
);

// Foreground — dense mangrove silhouettes with prominent roots
const Layer3 = () => (
  <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
    {/* Dense ground */}
    <path d="M0 380 Q80 350 160 370 Q240 390 360 360 Q480 330 600 370 Q720 400 840 360 Q960 330 1080 370 Q1200 400 1320 360 Q1380 340 1440 370 L1440 600 L0 600Z"
      fill="hsl(var(--dark) / 0.85)" />
    {/* Left dense mangrove cluster */}
    <path d="M-20 380 L-20 240 Q0 180 30 220 Q40 160 60 200 Q70 140 90 190 Q100 160 120 210 Q130 180 150 230 Q170 200 190 260 L190 380Z"
      fill="hsl(var(--dark) / 0.9)" />
    {/* Prominent roots left */}
    <path d="M-30 380 Q0 330 20 380 M30 380 Q50 310 80 380 M90 380 Q110 320 140 380 M160 380 Q180 340 200 380"
      stroke="hsl(var(--dark) / 0.75)" strokeWidth="3" fill="none" />
    {/* Center-left bush */}
    <path d="M300 370 Q310 320 330 340 Q340 290 360 330 Q370 300 390 350 Q400 330 410 370Z"
      fill="hsl(var(--dark) / 0.85)" />
    {/* Center large mangrove */}
    <path d="M550 370 L550 200 Q570 140 600 190 Q610 120 640 180 Q660 130 680 190 Q700 150 720 210 Q740 180 760 240 L760 370Z"
      fill="hsl(var(--dark) / 0.95)" />
    {/* Roots center */}
    <path d="M520 370 Q550 300 570 370 M590 370 Q620 280 650 370 M670 370 Q700 300 730 370 M750 370 Q780 320 800 370"
      stroke="hsl(var(--dark) / 0.7)" strokeWidth="3.5" fill="none" />
    {/* Right tall mangrove */}
    <path d="M950 360 L950 220 Q960 170 980 210 Q990 150 1010 200 Q1020 170 1040 220 Q1060 190 1070 240 L1070 360Z"
      fill="hsl(var(--dark) / 0.9)" />
    <path d="M930 360 Q950 310 970 360 M990 360 Q1010 290 1030 360 M1050 360 Q1070 310 1090 360"
      stroke="hsl(var(--dark) / 0.7)" strokeWidth="3" fill="none" />
    {/* Far right cluster */}
    <path d="M1250 370 Q1260 310 1280 340 Q1290 280 1310 320 Q1320 290 1340 340 Q1360 310 1380 370Z"
      fill="hsl(var(--dark) / 0.85)" />
    <path d="M1240 370 Q1260 330 1280 370 M1300 370 Q1320 320 1350 370 M1370 370 Q1400 330 1440 370"
      stroke="hsl(var(--dark) / 0.7)" strokeWidth="2.5" fill="none" />
  </svg>
);

// Closest foreground — dark silhouette that becomes the content background
const Layer4 = () => (
  <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
    <path d="M0 420 Q60 390 120 410 Q200 430 300 400 Q400 370 500 410 Q600 440 700 400 Q800 370 900 410 Q1000 440 1100 400 Q1200 370 1300 410 Q1380 430 1440 400 L1440 600 L0 600Z"
      fill="hsl(var(--background))" />
    {/* Small foreground root details */}
    <path d="M100 420 Q120 400 140 420 M400 410 Q420 390 440 410 M700 400 Q720 380 740 400 M1000 410 Q1020 390 1040 410 M1300 410 Q1320 395 1340 410"
      stroke="hsl(var(--dark) / 0.4)" strokeWidth="2" fill="none" />
  </svg>
);

const MangroveTransition = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each layer moves at a different speed (further = slower)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  // Layer 4 (closest) stays fixed

  return (
    <div ref={ref} className="relative h-[60vh] -mt-[10vh] z-20 pointer-events-none overflow-hidden">
      {/* Sky / atmosphere gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-forest/10 to-background" />
      
      {/* Parallax layers */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        <Layer1 />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        <Layer2 />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y3 }}>
        <Layer3 />
      </motion.div>

      <div className="absolute inset-0">
        <Layer4 />
      </div>
    </div>
  );
};

export default MangroveTransition;
