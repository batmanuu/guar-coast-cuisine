import { motion } from "framer-motion";
import aboutImg from "@/assets/about-restaurant.jpg";
import guara1 from "@/assets/guara-3d-1.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-32 bg-background overflow-hidden">
      {/* Guará decorativo */}
      <motion.img
        src={guara1}
        alt="Guará decorativo"
        className="absolute -right-20 top-10 w-72 opacity-10 pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
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
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Nossa História
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-2">
              Sobre{" "}
              <span className="italic text-primary">Nós</span>
            </h2>
            <div className="w-16 h-[1px] bg-primary mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-6">
              Nascido à margem das águas serenas do mangue, o Restaurante dos Guarás é mais que um lugar para se 
              alimentar — é uma experiência sensorial completa. Desde 2010, transformamos os sabores regionais 
              em pratos que contam histórias, unindo tradição e sofisticação em cada detalhe.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-8">
              Nosso nome é uma homenagem ao guará, ave icônica que habita os manguezais ao redor, 
              símbolo da riqueza natural que nos inspira diariamente. Aqui, cada prato é preparado com 
              ingredientes frescos, colhidos da terra e do mar, honrando a culinária paraense com 
              um toque contemporâneo.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-display text-4xl text-primary">15</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Anos</p>
              </div>
              <div className="w-[1px] h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-4xl text-primary">Chef</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Premiado</p>
              </div>
              <div className="w-[1px] h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-4xl text-primary">100%</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">Regional</p>
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
                alt="Terraço do restaurante ao pôr do sol com vista para o mangue"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-primary/30 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
