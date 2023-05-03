import './ProyectosContainer.css';
import ProyectosList from '../ProyectosList/ProyectosList';

// >>>>>>>>>>>>>>>>>>>>HACERLO CON SLIDES<<<<<<<<<<<<<<<<<<<<<<<<<
function ProyectosContainer() {
  return (
    <section id='proyects'>
      <h2>Proyectos</h2>
      <ProyectosList />
      {/* <div className='proyects__arrowCont'>
        <img src="./img/icons/arrow.webp" alt="swipe" className='proyects__arrowCont-arrow' />
      </div> */}
    </section>
  )
}

export default ProyectosContainer;