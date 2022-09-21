import './ProyectosItem.css';

function ProyectosItem({ proyect }) {
  return (
    <div className='proyect'>
      <div className='proyect__banner'>
        <img src={`./img/${proyect.thumbnail}`} alt="Proyect Image" />
        <div className='proyect__banner-title'>
          <h4>{proyect.name}</h4>
        </div>
      </div>
      <div className='proyect__container'>
        <div className='proyect__container-info'>
          <p>{proyect.technologies}</p></div>
        <div className='proyect__container-buttons'>
          <a href={proyect.src} target='_blank'>Ver deploy</a>
          <a href={proyect.code} target='_blank'>Ver código</a>
        </div></div>
    </div>
  )
}

export default ProyectosItem