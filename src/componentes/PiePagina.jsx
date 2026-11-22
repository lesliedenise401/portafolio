import { datosPortafolio } from "../datos/datosPortafolio";

const PiePagina = () => {
  const { nombre, iniciales } = datosPortafolio;
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff] border-t border-[#ffd6e3] py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-[#ffadc6] text-[#2d2428] flex items-center justify-center font-bold text-xs">
            {iniciales}
          </span>
          <span className="text-sm text-[#6b5a61]">{nombre}</span>
        </div>
        <p className="text-sm text-[#6b5a61]">
          © {anio} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default PiePagina;