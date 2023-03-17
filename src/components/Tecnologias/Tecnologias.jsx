import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import './Tecnologias.css';

function Tecnologias({ technologie }) {
    return (
        <div className='technologie'>
            <LazyLoadImage
                src={`./img/technologies/${technologie.thumbnail}`}
                alt={`${technologie.name} image`}
                effect="blur"
                className='studie__thumbnail-img'
                width='48px'
                height='48px'
            />
            {/* <img src={`./img/${technologie.thumbnail}`} alt="Tecnología IMG" width='48px' height='48px' /> */}
            <p>{technologie.name}</p>
        </div>
    )
}

export default Tecnologias