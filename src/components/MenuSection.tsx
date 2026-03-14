import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import guara2 from "@/assets/guara-3d-2.png";
import caranguejoTocToc from "@/assets/caranguejo_toc_toc.png";
import iscaDePeixe from "@/assets/isca_de_peixe.png";
import macaxeiraFrita from "@/assets/macaxeira_frita.png";
import camaraoEmpanado from "@/assets/camarao_empanado.png";
import caipiveja from "@/assets/caipiveja.png";
import lagoaAzul from "@/assets/lagoa_azul.png";
import cervejaHeineken from "@/assets/cerveja_heineken.png";
import caipiCoco from "@/assets/caipi_coco.png";
import caranguejada from "@/assets/caranguejada.png";
import peixadaEscabeche from "@/assets/peixada_escabeche.png";
import pescadinhaFritas from "@/assets/pescadinha_fritas.png";
import camaraoAlhoOleo from "@/assets/camarao_alho_oleo.png";
import pudimDeLeite from "@/assets/pudim_de_leite.png";
import cocadaDeForno from "@/assets/cocada_de_forno.png";
import mousseCupuacu from "@/assets/mousse_cupuacu.png";
import sorveteRegional from "@/assets/sorvete_regional.png";

const categories = ["Entradas", "Drinks", "Frutos do Mar", "Sobremesas"];

const menuItems: Record<string, Array<{ name: string; desc: string; price: string; img: string }>> = {
  Entradas: [
    { name: "Caranguejo Toc Toc", desc: "Farofa e vinagrete (4 und)", price: "R$ 79,00", img: caranguejoTocToc },
    { name: "Isca de Peixe", desc: "Farofa e vinagrete", price: "R$ 120,00", img: iscaDePeixe },
    { name: "Macaxeira Frita", desc: "Molho rosê", price: "R$ 35,00", img: macaxeiraFrita },
    { name: "Camarão Empanado", desc: "Farofa e vinagrete", price: "R$ 140,00", img: camaraoEmpanado },
  ],
  Drinks: [
    { name: "Caipirinha", desc: "Caipirinha clássica de limão", price: "R$ 25,00", img: caipiveja },
    { name: "Lagoa Azul", desc: "Coquetel vibrante com curaçau blue", price: "R$ 20,00", img: lagoaAzul },
    { name: "Cerveja Heineken", desc: "Cerveja premium gelada", price: "R$ 20,00", img: cervejaHeineken },
    { name: "Caipi Coco", desc: "Caipirinha cremosa de coco", price: "R$ 20,00", img: caipiCoco },
  ],
  "Frutos do Mar": [
    { name: "Caranguejada", desc: "Arroz, farofa, pirão e vinagrete", price: "R$ 125,00", img: caranguejada },
    { name: "Peixada Escabeche", desc: "Ao molho de camarão. Arroz, farofa, pirão e vinagrete", price: "R$ 170,00", img: peixadaEscabeche },
    { name: "Pescadinha Fritas", desc: "Arroz, farofa, pirão e vinagrete", price: "R$ 110,00", img: pescadinhaFritas },
    { name: "Camarão Alho e Óleo", desc: "Farofa e vinagrete", price: "R$ 160,00", img: camaraoAlhoOleo },
  ],
  Sobremesas: [
    { name: "Pudim de Leite", desc: "Clássico pudim de leite condensado com calda de caramelo", price: "R$ 25,00", img: pudimDeLeite },
    { name: "Cocada de Forno", desc: "Cocada quente servida com bola de sorvete de creme", price: "R$ 32,00", img: cocadaDeForno },
    { name: "Mousse de Cupuaçu", desc: "Mousse cremosa da fruta típica da região norte", price: "R$ 28,00", img: mousseCupuacu },
    { name: "Sorvete Regional", desc: "Duas bolas de sorvete (sabores: taperebá, bacuri ou açaí)", price: "R$ 22,00", img: sorveteRegional },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState("Entradas");
  const [selectedItem, setSelectedItem] = useState<{ name: string; desc: string; price: string; img: string } | null>(null);

  // Close modal when clicking escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedItem(null);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  return (
    <section id="cardapio" className="relative py-32 bg-cream min-h-screen overflow-hidden flex flex-col justify-center" onKeyDown={handleKeyDown}>
      {/* Guará decorativo */}
      <motion.img
        src={guara2}
        alt="Guará em voo"
        className="absolute -left-32 bottom-20 w-96 opacity-[0.05] invert pointer-events-none rotate-12"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-wine mb-4">
            Nossos Sabores
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-wine mb-2">
            O <span className="italic text-dark">Cardápio</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-wine to-transparent mx-auto" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm tracking-[0.15em] uppercase px-6 py-3 rounded-sm border transition-all duration-500 ${active === cat
                ? "bg-wine text-cream border-wine"
                : "bg-transparent text-dark/60 border-dark/20 hover:border-wine/50 hover:text-dark"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="min-h-[300px]">
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
                  key={item.name} initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  onClick={() => setSelectedItem(item)}
                  className="group flex gap-5 p-5 bg-transparent rounded-sm border border-dark/10 hover:border-wine/30 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
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
                      <h3 className="font-display text-xl text-dark group-hover:text-wine transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-display text-lg font-semibold text-wine/90">{item.price}</span>
                    </div>
                    <p className="font-body text-sm text-dark/60 leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for Item Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream rounded-sm shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row relative"
            >


              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-3xl md:text-4xl text-dark mb-1 drop-shadow-sm">
                  {selectedItem.name}
                </h3>

                {/* Dynamically extract the first sentence as a subtitle if it ends with a period, otherwise just show it normally if handled otherwise. To be safe, let's explicitly style it. */}
                {selectedItem.desc.includes('.') ? (
                  <>
                    <p className="font-body text-wine/80 italic text-sm md:text-base mb-4">
                      {selectedItem.desc.split('.')[0]}
                    </p>
                    <div className="w-12 h-[1px] bg-wine/50 mb-6" />
                    <p className="font-body text-dark/70 leading-relaxed mb-8">
                      {selectedItem.desc.substring(selectedItem.desc.indexOf('.') + 1).trim() || selectedItem.desc}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-[1px] bg-wine/50 mt-3 mb-6" />
                    <p className="font-body text-dark/70 leading-relaxed mb-8">
                      {selectedItem.desc}
                    </p>
                  </>
                )}
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-display text-2xl font-semibold text-wine">
                    {selectedItem.price}
                  </span>
                  <button onClick={() => setSelectedItem(null)} className="font-body text-xs tracking-widest uppercase px-6 py-3 border border-dark/20 text-dark hover:bg-wine hover:text-cream hover:border-wine transition-all duration-300">
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuSection;
