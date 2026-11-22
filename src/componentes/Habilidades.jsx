import { motion } from "framer-motion";
import {
  Code,
  Triangle,
  Smartphone,
  Layers,
  Feather,
  FileCode,
  Palette,
  Database,
  Server,
  HardDrive,
  GitBranch,
} from "lucide-react";
import { datosPortafolio } from "../datos/datosPortafolio";

const mapaIconos = {
  Code: Code,
  Triangle: Triangle,
  Smartphone: Smartphone,
  Layers: Layers,
  Feather: Feather,
  FileCode: FileCode,
  Palette: Palette,
  Database: Database,
  Server: Server,
  HardDrive: HardDrive,
  GitBranch: GitBranch,
};

const Habilidades = () => {
  const { habilidades } = datosPortafolio;

  return (
    <section id="habilidades" className="bg-[#ffffff] py-20 relative overflow-hidden">
      {/* Cuadrículas decorativas de puntos */}
      <div className="absolute left-4 top-20 w-24 h-40 puntos-decorativos-rosa opacity-70" />
      <div className="absolute right-4 bottom-20 w-24 h-40 puntos-decorativos-rosa opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#2d2428] text-center mb-12"
        >
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {habilidades?.map((habilidad, indice) => {
            const Icono = mapaIconos[habilidad?.icono] ?? Code;
            return (
              <motion.div
                key={habilidad?.nombre ?? indice}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: indice * 0.05 }}
                className="w-full aspect-square max-w-[160px] bg-[#ffeaf1]/60 border border-[#ffd6e3] rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-[#ffadc6] transition-all duration-200"
              >
                <Icono size={40} className="text-[#ffadc6]" />
                <span className="text-sm font-medium text-[#2d2428] text-center px-2">
                  {habilidad?.nombre}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;