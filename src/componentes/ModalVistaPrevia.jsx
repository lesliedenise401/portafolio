import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const ModalVistaPrevia = ({ abierto, alCerrar, proyecto }) => {
  return (
    <AnimatePresence>
      {abierto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={alCerrar}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="w-full h-64 sm:h-80 bg-[#ffeaf1] flex items-center justify-center overflow-hidden relative">
                <span className="absolute text-4xl font-bold text-[#ffadc6]">
                  {proyecto?.titulo?.charAt(0) ?? "P"}
                </span>
                {proyecto?.imagen ? (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto?.titulo}
                    className="w-full h-full object-contain relative z-10 p-4"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : null}
              </div>
              <button
                onClick={alCerrar}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 border border-[#ffd6e3] flex items-center justify-center text-[#6b5a61] hover:text-[#2d2428] hover:bg-[#ffeaf1]"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2d2428] mb-2">
                {proyecto?.titulo}
              </h3>
              <p className="text-[#6b5a61] mb-4 leading-relaxed">
                {proyecto?.descripcion}
              </p>

              {proyecto?.tecnologias?.length ? (
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto?.tecnologias?.map((tec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#ffeaf1] border border-[#ffd6e3] text-[#6b5a61]"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              ) : null}

              {proyecto?.demo && proyecto.demo !== "#" ? (
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffadc6] text-[#2d2428] font-medium hover:bg-[#ffc1d4] transition-colors"
                >
                  Ver demo <ExternalLink size={16} />
                </a>
              ) : (
                <p className="text-sm text-[#6b5a61] italic">
                  Demo en vivo no disponible.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalVistaPrevia;