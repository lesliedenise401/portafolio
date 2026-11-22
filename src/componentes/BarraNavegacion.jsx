import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { datosPortafolio } from "../datos/datosPortafolio";

const BarraNavegacion = () => {
  const { iniciales, enlacesNavegacion } = datosPortafolio;
  const [seccionActiva, setSeccionActiva] = useState("inicio");
  const [desplazado, setDesplazado] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setDesplazado(window.scrollY > 10);
      const posiciones = enlacesNavegacion?.map((enlace) => {
        const elemento = document.getElementById(enlace.id);
        if (!elemento) return null;
        return { id: enlace.id, top: elemento.getBoundingClientRect().top };
      });
      const actual = posiciones
        ?.filter((p) => p && p.top <= 120)
        .sort((a, b) => b.top - a.top)?.[0]?.id;
      if (actual) setSeccionActiva(actual);
    };
    window.addEventListener("scroll", manejarScroll, { passive: true });
    manejarScroll();
    return () => window.removeEventListener("scroll", manejarScroll);
  }, [enlacesNavegacion]);

  const irA = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        desplazado ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md"
      } border-b border-[#ffd6e3]`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => irA("inicio")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffadc6] rounded-full"
          aria-label="Ir al inicio"
        >
          <span className="w-10 h-10 rounded-full bg-[#ffadc6] text-[#2d2428] flex items-center justify-center font-bold text-sm shadow-sm">
            {iniciales}
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {enlacesNavegacion?.map((enlace) => {
            const activo = seccionActiva === enlace.id;
            return (
              <li key={enlace.id} className="relative">
                <button
                  onClick={() => irA(enlace.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activo ? "text-[#2d2428]" : "text-[#6b5a61] hover:text-[#2d2428]"
                  }`}
                >
                  {enlace.etiqueta}
                </button>
                {activo && (
                  <motion.span
                    layoutId="subrayado-nav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ffadc6] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Menú móvil simple */}
        <div className="md:hidden">
          <select
            value={seccionActiva}
            onChange={(e) => irA(e.target.value)}
            className="bg-white border border-[#ffd6e3] text-[#2d2428] text-sm rounded-full px-3 py-1.5"
          >
            {enlacesNavegacion?.map((enlace) => (
              <option key={enlace.id} value={enlace.id}>
                {enlace.etiqueta}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default BarraNavegacion;