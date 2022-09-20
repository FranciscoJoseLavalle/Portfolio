import './ProyectosItem.css';

function ProyectosItem({ proyect }) {
  return (
    <div className='proyect'>
      <div className='proyect__banner'>
        <img src={`./img/${proyect.thumbnail}`} alt="Proyect Image" />
        <div className='proyect__banner-title'><h4>{proyect.name}</h4></div>

      </div>
      <div className='proyect__container'>
        <div className='proyect__container-info'>
          <p>{proyect.technologies}</p></div>
        <div className='proyect__container-buttons'>
          <button>Ver deploy</button>
          <button>Ver código</button>
        </div></div>
    </div>
  )
}

export default ProyectosItem