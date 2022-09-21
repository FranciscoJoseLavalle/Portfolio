import './ProyectosList.css';
import ProyectosItem from '../ProyectosItem/ProyectosItem';

function ProyectosList({proyects}) {
  return (
    <div className='proyects-container'>
        {proyects.map(( proyect, i) => <ProyectosItem key={i} proyect={proyect}/>)}
    </div>
  )
}

export default ProyectosList