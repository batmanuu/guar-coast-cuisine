import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import guara2 from "@/assets/guara-3d-2.png";

const categories = ["Entradas", "Peixes", "Frutos do Mar", "Sobremesas"];

const menuItems: Record<string, Array<{ name: string; desc: string; price: string; img: string }>> = {
  Entradas: [
    { name: "Ceviche de Camarão", desc: "Camarão fresco marinado em limão com manga e coentro", price: "R$ 58", img: dish2 },
    { name: "Carpaccio de Peixe", desc: "Lâminas finas de robalo com azeite trufado e alcaparras", price: "R$ 52", img: dish1 },
    { name: "Casquinha de Caranguejo", desc: "Casquinha gratinada com catupiry e temperos regionais", price: "R$ 46", img: dish3 },
    { name: "Bolinho de Piracuí", desc: "Bolinhos crocantes de peixe seco com molho tártaro de ervas", price: "R$ 38", img: dish4 },
  ],
  Peixes: [
    { name: "Filhote ao Tucupi", desc: "Filhote grelhado com molho de tucupi, jambu e arroz de castanha", price: "R$ 128", img: dish1 },
    { name: "Robalo na Brasa", desc: "Robalo fresco na brasa com legumes da estação e molho de ervas", price: "R$ 118", img: dish1 },
    { name: "Pirarucu de Casaca", desc: "Pirarucu desfiado com banana da terra, farinha e leite de coco", price: "R$ 135", img: dish3 },
    { name: "Tambaqui Assado", desc: "Costela de tambaqui assada lentamente com molho de castanhas", price: "R$ 112", img: dish2 },
  ],
  "Frutos do Mar": [
    { name: "Lagosta Grelhada", desc: "Lagosta com manteiga de ervas finas e farofa de dendê", price: "R$ 189", img: dish3 },
    { name: "Camarão Flambado", desc: "Camarões gigantes flambados no conhaque com risoto de açafrão", price: "R$ 145", img: dish2 },
    { name: "Moqueca Paraense", desc: "Moqueca de camarão e peixe com leite de coco e dendê", price: "R$ 132", img: dish1 },
    { name: "Polvo à Lagareiro", desc: "Tentáculos de polvo grelhados com batatas ao murro e azeite", price: "R$ 168", img: dish4 },
  ],
  Sobremesas: [
    { name: "Tarte de Maracujá", desc: "Torta fina de maracujá com merengue maçaricado", price: "R$ 42", img: dish4 },
    { name: "Petit Gâteau Tropical", desc: "Bolo quente de chocolate com sorvete de cupuaçu", price: "R$ 48", img: dish4 },
    { name: "Mousse de Açaí", desc: "Mousse cremosa de açaí com crocante de castanha-do-pará", price: "R$ 36", img: dish2 },
    { name: "Crème Brûlée de Bacuri", desc: "Creme queimado com sabor de bacuri e caramelo de rapadura", price: "R$ 44", img: dish1 },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState("Entradas");

  return (
    <section id="cardapio" className="relative min-h-screen py-32 bg-petrol overflow-hidden flex items-center">
      {/* Guará decorativo */}
      <motion.img
        src={guara2}
        alt="Guará em voo"
        className="absolute -left-32 bottom-20 w-96 opacity-[0.07] pointer-events-none rotate-12"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Nossos Sabores
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-2">
            O <span className="italic text-primary">Cardápio</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm tracking-[0.15em] uppercase px-6 py-3 rounded-sm border transition-all duration-500 ${
                active === cat
                  ? "bg-primary text-cream border-primary"
                  : "bg-transparent text-cream/60 border-cream/20 hover:border-primary/50 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {menuItems[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group flex gap-5 p-5 rounded-sm border border-cream/10 hover:border-primary/30 transition-all duration-500 hover:bg-cream/5"
              >
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl text-cream group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg text-primary">{item.price}</span>
                  </div>
                  <p className="font-body text-sm text-cream/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
