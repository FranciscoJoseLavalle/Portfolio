import Contacto from '../Contacto/Contacto';
import ProyectosContainer from '../ProyectosContainer/ProyectosContainer';
import ProyectosListCopy from '../ProyectosList/ProyectosList';
import SobreMi from '../SobreMi/SobreMi';
import './Main.css';

function Main() {
  return (
    <main>
      <SobreMi />
      <ProyectosContainer />
      <Contacto />
    </main>
  )
}

export default Main;