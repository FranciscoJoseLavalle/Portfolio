import './ProyectosItem.css';

function ProyectosItem({proyect}) {
  return (
    <div>
      <hr />  
      <h4>{proyect.name}</h4>
      <p>{proyect.technologies}</p>
      <hr />
    </div>
  )
}

export default ProyectosItem