import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="localizacao" className="relative py-32 bg-petrol overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Venha Nos Visitar
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-dark mb-2">
            <span className="italic text-primary">Localização</span> & Contato
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl text-dark mb-1">Endereço</h3>
                <p className="font-body text-dark/50 text-sm leading-relaxed">
                  Av. Beira Mar, 1200 — Mangue<br />
                  São Luís, MA — Brasil
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl text-dark mb-1">Telefone</h3>
                <p className="font-body text-dark/50 text-sm">(98) 3232-1200</p>
                <p className="font-body text-dark/50 text-sm">(98) 99900-1200</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl text-dark mb-1">Horário</h3>
                <p className="font-body text-dark/50 text-sm">Terça a Domingo</p>
                <p className="font-body text-dark/50 text-sm">11h30 às 23h00</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-display text-xl text-dark mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-sm bg-cream/5 border border-cream/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Instagram className="text-cream/60 hover:text-primary" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-sm bg-cream/5 border border-cream/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Facebook className="text-cream/60 hover:text-primary" size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-full min-h-[400px] rounded-sm overflow-hidden border border-cream/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9594!2d-44.2825!3d-2.5297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzEnNDYuOSJTIDQ0wrAxNic1Ny4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.5) contrast(1.1)" }}
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
      <div className="container mx-auto px-6 mt-24 pt-10 border-t border-cream/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display text-xl text-cream/40">
            Restaurante dos <span className="italic text-primary/60">Guarás</span>
          </p>
          <p className="font-body text-xs text-cream/30 tracking-wider">
            © 2025 Todos os direitos reservados
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
