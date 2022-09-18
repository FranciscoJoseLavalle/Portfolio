import './ProyectosItem.css';

function ProyectosItem({proyect}) {
  return (
    <div className='proyect'>
      <h4>{proyect.name}</h4>
      <img src="./img/ayurveda.png" alt="" />
      <p>{proyect.technologies}</p>
      <div>
        <button>Ver deploy</button>
        <button>Ver código</button>
      </div>
    </div>
  )
}

export default ProyectosItem