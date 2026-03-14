import { motion } from "framer-motion";
import aboutImg from "@/assets/IMG_2808.jpg";
import guara1 from "@/assets/guara-3d-1.png";
import guara2 from "@/assets/guara-3d-2.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-32 bg-background overflow-hidden">
      {/* Guará decorativo 1 */}
      <motion.img
        src={guara1}
        alt="Guará decorativo"
        className="absolute -right-20 top-10 w-72 opacity-10 pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Guará decorativo 2 */}
      <motion.img
        src={guara2}
        alt="Guará decorativo"
        className="absolute -left-20 bottom-10 w-72 opacity-15 pointer-events-none"
        animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-forest mb-4">
              Nossa História
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-2">
              Sobre{" "}
              <span className="italic text-primary">Nós</span>
            </h2>
            <div className="w-16 h-[1px] bg-wine mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, harum. Unde delectus tempora ratione beatae amet, quis soluta, doloremque corporis similique recusandae, alias nemo maxime laboriosam! Maxime omnis sequi debitis.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum odit consequuntur blanditiis numquam sapiente harum nostrum, distinctio ipsam voluptas in deserunt delectus quo alias consequatur repellat quia impedit cum illum.
            </p>
            <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-6 w-full mt-4">
              <div className="text-center flex-1 sm:flex-none">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-forest">Novo</p>
                <p className="font-body text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap">Destino</p>
              </div>
              <div className="w-[1px] h-8 sm:h-12 bg-border shrink-0" />
              <div className="text-center flex-1 sm:flex-none">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-forest">Comidas</p>
                <p className="font-body text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap">Típicas</p>
              </div>
              <div className="w-[1px] h-8 sm:h-12 bg-border shrink-0" />
              <div className="text-center flex-1 sm:flex-none">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-forest">Paz</p>
                <p className="font-body text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap">& Natureza</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Uma visão dos barcos de pesca de dentro do manguezal"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-gold/30 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
