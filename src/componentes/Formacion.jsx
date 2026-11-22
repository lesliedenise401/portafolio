import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { datosPortafolio } from "../datos/datosPortafolio";

const Formacion = () => {
  const { formacion } = datosPortafolio;

  return (
    <section id="formacion" className="bg-[#ffeaf1] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#2d2428] text-center mb-12"
        >
          Formación
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {formacion?.map((item, indice) => (
            <motion.div
              key={indice}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: indice * 0.1 }}
              className="bg-white border border-[#ffd6e3] rounded-2xl p-6 w-full sm:w-80 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-16 h-16 rounded-full bg-[#ffeaf1] border border-[#ffd6e3] flex items-center justify-center mb-4">
                {item?.logo ? (
                  <img
                    src={item.logo}
                    alt={item?.institucion}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <GraduationCap size={32} className="text-[#ffadc6]" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-[#ffadc6] mb-1">
                {item?.carrera}
              </h3>
              <p className="text-sm text-[#2d2428] font-medium mb-1">
                {item?.institucion}
              </p>
              <p className="text-xs text-[#6b5a61]">{item?.periodo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formacion;