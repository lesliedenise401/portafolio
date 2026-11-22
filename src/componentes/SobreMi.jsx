import { useState } from "react";
import { motion } from "framer-motion";
import { datosPortafolio } from "../datos/datosPortafolio";

const SobreMi = () => {
  const { nombreAcento, perfilExtendido } = datosPortafolio;
  const [imagenOk, setImagenOk] = useState(true);

  return (
    <section id="sobre-mi" className="bg-[#ffeaf1] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#2d2428] text-center mb-12"
        >
          Sobre mí
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: imagen */}
          <div className="relative flex justify-center">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-40 puntos-decorativos-rosa opacity-80" />
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-[#ffadc6] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]" />
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 overflow-hidden rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-white flex items-center justify-center shadow-md">
                {imagenOk ? (
                  <img
                    src="src/assets/foto-3.jpeg"
                    alt="Sobre mí"
                    className="w-full h-full object-cover"
                    onError={() => setImagenOk(false)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#ffeaf1] to-[#ffd6e3] flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#ffadc6]">
                      {datosPortafolio?.iniciales}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Columna derecha: texto */}
          <div>
            <h3 className="text-2xl font-semibold text-[#ffadc6] mb-4">
              {nombreAcento}
            </h3>
            {perfilExtendido?.map((parrafo, indice) => (
              <p
                key={indice}
                className="text-[#6b5a61] leading-relaxed mb-4 last:mb-0"
              >
                {parrafo}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;