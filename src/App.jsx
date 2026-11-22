import BarraNavegacion from "./componentes/BarraNavegacion";
import Presentacion from "./componentes/Presentacion";
import SobreMi from "./componentes/SobreMi";
import Habilidades from "./componentes/Habilidades";
import Formacion from "./componentes/Formacion";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import PiePagina from "./componentes/PiePagina";
import BotonSubir from "./componentes/BotonSubir";

function App() {
  return (
    <>
      <BarraNavegacion />
      <main>
        <Presentacion />
        <SobreMi />
        <Habilidades />
        <Formacion />
        <Proyectos />
        <Contacto />
      </main>
      <PiePagina />
      <BotonSubir />
    </>
  );
}

export default App;