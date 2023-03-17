import './ProyectosContainer.css';
import ProyectosList from '../ProyectosList/ProyectosList';
import { proyects } from '../../utils/proyects';


// >>>>>>>>>>>>>>>>>>>>HACERLO CON SLIDES<<<<<<<<<<<<<<<<<<<<<<<<<
function ProyectosContainer() {
  return (
    <section id='proyects'>
      <h2>Proyectos</h2>
      <ProyectosList proyects={proyects} />
      <div className='proyects__arrowCont'>
        <img src="./img/arrow.webp" alt="swipe" className='proyects__arrowCont-arrow' />
      </div>
    </section>
  )
}

export default ProyectosContainer;