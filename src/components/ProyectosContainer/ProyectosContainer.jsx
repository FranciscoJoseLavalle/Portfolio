import './ProyectosContainer.css';
import ProyectosList from '../ProyectosList/ProyectosList';

let proyects = [
    {name: "Ayurveda", technologies: "React, Firebase"},
    {name: "Manga", technologies: "React, Firebase"},
    {name: "Finanzas", technologies: "React, Firebase"},
    {name: "Oreo", technologies: "React, Firebase"},
    {name: "Oreo", technologies: "React, Firebase"},
    {name: "Oreo", technologies: "React, Firebase"},
    {name: "Oreo", technologies: "React, Firebase"},
    {name: "Oreo", technologies: "React, Firebase"},
    {name: "Oreo", technologies: "React, Firebase"},
    {name: "Oreo", technologies: "React, Firebase"},
    {name: "Oreo", technologies: "React, Firebase"}
]
// >>>>>>>>>>>>>>>>>>>>HACERLO CON SLIDES<<<<<<<<<<<<<<<<<<<<<<<<<
function ProyectosContainer() {
  return (
    <section id='proyects'>
        <h2>Proyectos</h2>
        <ProyectosList proyects={proyects}/>
    </section>
  )
}

export default ProyectosContainer;