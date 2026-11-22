import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Users, Mail } from "lucide-react";
import { datosPortafolio } from "../datos/datosPortafolio";

const iconosRedes = {
  Users: Users,
  Code: Code,
  Mail: Mail,
};

const Presentacion = () => {
  const {
    nombre,
    iniciales,
    saludo,
    subtitulo,
    parrafoPerfil,
    redesSociales,
  } = datosPortafolio;

  const [textoMaquina, setTextoMaquina] = useState("");
  const [imagenOk, setImagenOk] = useState(true);

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      i++;
      setTextoMaquina(subtitulo?.slice(0, i) ?? "");
      if (i >= (subtitulo?.length ?? 0)) clearInterval(intervalo);
    }, 90);
    return () => clearInterval(intervalo);
  }, [subtitulo]);

  const irA = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#ffffff] overflow-hidden pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#6b5a61] text-lg mb-2"
          >
            {saludo}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2d2428] leading-tight mb-4"
          >
            {nombre}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-1 mb-6"
          >
            <span className="text-lg sm:text-xl font-semibold tracking-widest text-[#6b5a61]">
              {textoMaquina}
            </span>
            <span className="inline-block w-0.5 h-6 bg-[#ffadc6] animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#6b5a61] max-w-md mb-8 leading-relaxed"
          >
            {parrafoPerfil}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => window.print()}
              className="px-6 py-3 rounded-full border-2 border-[#ffadc6] text-[#2d2428] font-medium hover:bg-[#ffeaf1] transition-colors duration-200"
            >
              DESCARGAR CV
            </button>
            <button
              onClick={() => irA("contacto")}
              className="px-6 py-3 rounded-full bg-[#ffadc6] text-[#2d2428] font-medium hover:bg-[#ffc1d4] transition-colors duration-200"
            >
              CONTACTO
            </button>
          </motion.div>
        </div>

        {/* Columna derecha: foto */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Cuadrícula decorativa de puntos detrás */}
          <div className="absolute -top-6 -right-6 w-40 h-40 puntos-decorativos opacity-70" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 puntos-decorativos opacity-60" />

          <div className="relative">
            {/* Forma orgánica */}
            <div className="absolute inset-0 bg-[#ffeaf1] rounded-[40%_60%_55%_45%_/_50%_45%_55%_50%] scale-110" />
            <div className="absolute inset-0 border-2 border-[#ffd6e3] rounded-[40%_60%_55%_45%_/_50%_45%_55%_50%] scale-115" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-[40%_60%_55%_45%_/_50%_45%_55%_50%] bg-[#ffeaf1] flex items-center justify-center">
              {imagenOk ? (
                <img
                  src="/foto-2.jpeg"
                  alt="Fotografía de perfil"
                  className="w-full h-full object-cover"
                  onError={() => setImagenOk(false)}
                />
              ) : (
                <span className="text-6xl font-bold text-[#ffadc6]">
                  {iniciales}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Barra vertical de redes sociales (inferior izquierda) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex flex-col gap-3">
        {redesSociales?.map((red) => {
          const Icono = iconosRedes[red.icono] ?? Mail;
          return (
            <a
              key={red.nombre}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={red.nombre}
              className="w-10 h-10 rounded-full bg-white border border-[#ffd6e3] flex items-center justify-center text-[#6b5a61] hover:text-[#2d2428] hover:border-[#ffadc6] hover:bg-[#ffeaf1] transition-all duration-200 shadow-sm"
            >
              <Icono size={18} />
            </a>
          );
        })}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#ffd6e3] animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Presentacion;