import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, GitBranch } from "lucide-react";
import { datosPortafolio } from "../datos/datosPortafolio";
import ModalVistaPrevia from "./ModalVistaPrevia";

const Proyectos = () => {
  const { proyectos } = datosPortafolio;
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProyectoSeleccionado(null);
  };

  return (
    <section id="proyectos" className="bg-[#ffffff] py-20 relative overflow-hidden">
      {/* Cuadrículas decorativas de puntos */}
      <div className="absolute left-4 top-16 w-24 h-40 puntos-decorativos opacity-70" />
      <div className="absolute right-4 bottom-16 w-24 h-40 puntos-decorativos opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#2d2428] text-center mb-12"
        >
          Proyectos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos?.map((proyecto, indice) => (
            <motion.article
              key={indice}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: indice * 0.1 }}
              className="bg-white border border-[#ffd6e3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <div className="w-full h-56 bg-[#ffeaf1] overflow-hidden flex items-center justify-center relative p-3">
                <span className="absolute text-4xl font-bold text-[#ffadc6]">
                  {proyecto?.titulo?.charAt(0) ?? "P"}
                </span>
                <img
                  src={proyecto?.imagen}
                  alt={proyecto?.titulo}
                  className="w-full h-full object-contain relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#2d2428] mb-2">
                  {proyecto?.titulo}
                </h3>
                <p className="text-[#6b5a61] text-sm leading-relaxed mb-5 flex-1">
                  {proyecto?.descripcion}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => abrirModal(proyecto)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#ffadc6] text-[#2d2428] font-medium hover:bg-[#ffc1d4] transition-colors duration-200"
                  >
                    <Eye size={16} /> DEMO
                  </button>
                  <a
                    href={proyecto?.repositorio ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#ffadc6] text-[#2d2428] font-medium hover:bg-[#ffeaf1] transition-colors duration-200"
                  >
                    <GitBranch size={16} /> REPO
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ModalVistaPrevia
        abierto={modalAbierto}
        alCerrar={cerrarModal}
        proyecto={proyectoSeleccionado}
      />
    </section>
  );
};

export default Proyectos;