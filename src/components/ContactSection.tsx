import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";
import logo from "@/assets/image1-8-removebg-preview.png";

const ContactSection = () => {
  return (
    <section id="localizacao" className="relative py-32 bg-[#FDFBF7] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-forest mb-4">
            Venha Nos Visitar
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-dark mb-2">
            <span className="italic text-forest">Localização</span> & Contato
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-forest to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 max-w-7xl mx-auto items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:gap-8 justify-center"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
              {/* Box 1: Localização */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-2.7308597,-44.2529076"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 sm:p-5 sm:py-6 shadow-sm border border-dark/5 flex flex-col items-center text-center justify-center group hover:border-forest/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-forest" size={20} />
                </div>
                <h3 className="font-display text-base sm:text-lg text-dark mb-1 sm:mb-2 group-hover:text-forest transition-colors">Localização</h3>
                <p className="font-body text-dark/60 text-[11px] sm:text-sm leading-relaxed group-hover:text-dark/80 transition-colors">
                  Av. Beira Mar, 20<br />
                  São Luís, MA
                </p>
              </a>

              {/* Box 2: Reservas */}
              <a
                href="https://wa.me/5598984117223"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 sm:p-5 sm:py-6 shadow-sm border border-dark/5 flex flex-col items-center text-center justify-center group hover:border-forest/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-forest" size={20} />
                </div>
                <h3 className="font-display text-base sm:text-lg text-dark mb-1 sm:mb-2 group-hover:text-forest transition-colors">Reservas</h3>
                <p className="font-body text-dark/60 text-[11px] sm:text-sm group-hover:text-dark/80 transition-colors">
                  (98) 98411-7223
                </p>
              </a>

              {/* Box 3: Horários */}
              <div
                className="bg-white rounded-2xl p-4 sm:p-5 sm:py-6 shadow-sm border border-dark/5 flex flex-col items-center text-center justify-center group hover:border-forest/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-forest" size={20} />
                </div>
                <h3 className="font-display text-base sm:text-lg text-dark mb-1 sm:mb-2 group-hover:text-forest transition-colors">Horários</h3>
                <p className="font-body text-dark/60 text-[11px] sm:text-sm leading-relaxed">
                  Terça a Domingo<br />
                  11h30 às 23h00
                </p>
              </div>

              {/* Box 4: Contato */}
              <a
                href="mailto:restaurantedosguaras@gmail.com"
                className="bg-white rounded-2xl p-4 sm:p-5 sm:py-6 shadow-sm border border-dark/5 flex flex-col items-center text-center justify-center group hover:border-forest/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-forest" size={20} />
                </div>
                <h3 className="font-display text-base sm:text-lg text-dark mb-1 sm:mb-2 group-hover:text-forest transition-colors">Contato</h3>
                <p className="font-body text-dark/60 text-[11px] sm:text-sm leading-tight break-all px-1 group-hover:text-dark/80 transition-colors">
                  restaurantedosguaras@<br className="hidden sm:block" />gmail.com
                </p>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
              <span className="font-body text-xs tracking-widest uppercase text-dark/50 mr-2">Siga-nos:</span>
              <a
                href="https://www.instagram.com/restaurantedosguaras/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-dark/10 shadow-sm flex items-center justify-center hover:border-wine/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="text-dark/60 group-hover:text-wine transition-colors" size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@restaurantedosguaras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-dark/10 shadow-sm flex items-center justify-center hover:border-dark hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4 fill-dark/60 group-hover:fill-dark transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-elegant border border-dark/5 bg-white p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.3218291448525!2d-44.252907628520084!3d-2.7308597120406697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                className="rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Restaurante dos Guarás"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32 pt-12 border-t border-dark/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Restaurante dos Guarás Logo"
              className="h-16 brightness-0 mix-blend-multiply opacity-80"
            />
            <div className="h-10 w-[1px] bg-dark/20 ml-2 mr-2 hidden md:block" />
            <div className="text-center md:text-left">
              <p className="font-display text-2xl text-dark">
                Restaurante dos <span className="italic text-wine">Guarás</span>
              </p>
              <p className="font-body text-xs text-dark/50 tracking-wider uppercase mt-1">
                Restaurante & Mangue
              </p>
            </div>
          </div>

          <p className="font-body text-sm text-dark/40 tracking-wider">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
