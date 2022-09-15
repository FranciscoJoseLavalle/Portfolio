import './ProyectosList.css';
import ProyectosItem from '../ProyectosItem/ProyectosItem';

function ProyectosList({proyects}) {
  return (
    <div>
        {proyects.map(proyect => <ProyectosItem proyect={proyect}/>)}
    </div>
  )
}

export default ProyectosList