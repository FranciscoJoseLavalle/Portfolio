import './ProyectosContainer.css';
import ProyectosList from '../ProyectosList/ProyectosList';

let proyects = [
  { name: "Ayurveda", technologies: "React, Firebase, HTML, CSS", thumbnail: "ayurveda.png" },
  { name: "Finanzas", technologies: "React, HTML, CSS", thumbnail: "finanzas.png" },
  { name: "Oreo", technologies: "Javascript, HTML, CSS", thumbnail: "oreo.png" },
  { name: "Manga", technologies: "Javascript, HTML, CSS", thumbnail: "mangasstore.webp" }
]
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