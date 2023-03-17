import { technologies } from '../../utils/technologies';
import "react-lazy-load-image-component/src/effects/blur.css";
import './ProyectosItem.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProyectosItem({ proyect }) {
  return (
    <div className='proyect'>
      <div className='proyect__banner'>

        <LazyLoadImage
          src={`./img/${proyect.thumbnail}`}
          alt={`${proyect.name} image`}
          effect="blur"
          className='studie__thumbnail-img'
        />
        {/* <img src={`./img/${proyect.thumbnail}`} alt="Proyect Image" /> */}
        <div className='proyect__banner-title'>
          <h4>{proyect.name}</h4>
        </div>
      </div>
      <div className='proyect__container'>
        <div className='proyect__container-info'>
          {technologies.map((techno, i) =>
            proyect.technologies.toLowerCase().includes(techno.name.toLowerCase())
              ? <img key={i} src={`img/${techno.thumbnail}`} alt="Tecnología" />
              : null
          )}
        </div>
        <div className='proyect__container-buttons'>
          <a href={proyect.src} target='_blank'>Ver deploy</a>
          <a href={proyect.code} target='_blank'>Ver código</a>
        </div></div>
    </div>
  )
}

export default ProyectosItem