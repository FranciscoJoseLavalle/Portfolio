import './ProyectosContainer.css';
import ProyectosList from '../ProyectosList/ProyectosList';

let proyects = [
  { name: "e-Commerce", technologies: "Handlebars, Express, Mongoose, Node, CSS", thumbnail: "e-Commerce2.png", src: "https://ecommercefran.up.railway.app/", code: 'https://github.com/FranciscoJoseLavalle/proyectofinalbackend' },
  { name: "Ayurveda", technologies: "React, Firebase, HTML, CSS", thumbnail: "ayurveda.webp", src: "https://franciscojoselavalle.github.io/PrimeraReact/", code: 'https://github.com/FranciscoJoseLavalle/PrimeraReact' },
  { name: "Finanzas", technologies: "React, HTML, CSS", thumbnail: "finanzas.webp", src: 'https://finanzasreact.netlify.app/', code: 'https://github.com/FranciscoJoseLavalle/finanzasreact' },
  { name: "Oreo", technologies: "Javascript, HTML, CSS", thumbnail: "oreo.webp", src: 'https://oreoclicker.netlify.app/', code: 'https://github.com/FranciscoJoseLavalle/oreoclicker' },
  { name: "Manga", technologies: "Javascript, HTML, CSS", thumbnail: "mangasstore.webp", src: 'https://mangasstore.netlify.app/', code: 'https://github.com/FranciscoJoseLavalle/mangacelu' }
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