import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import './Studies.css';

const Studies = ({ studie }) => {
  const [thumbnail, setThumbnail] = useState(false)

  useEffect(() => {
    thumbnail
      ? document.querySelector('body').style.overflow = 'hidden'
      : document.querySelector('body').style.overflow = 'auto'
  }, [thumbnail])

  return (
    <li className='studie'>
      <div>
        <p style={{ color: 'violet' }}><b>{studie.name}</b></p>
        <small>{studie.academy} | {studie.start} - {studie.finished}</small>
      </div>
      <div>
        <button className='header__name-btn' onClick={() => setThumbnail(true)}>Visualizar</button>
      </div>
      {thumbnail
        && <div className='studie__thumbnail'>
          <LazyLoadImage
            src={studie.thumbnail}
            alt={`${studie.name} image`}
            effect="blur"
            className='studie__thumbnail-img'
          />
          <div className='studie__thumbnail-background' onClick={() => setThumbnail(false)}></div>
        </div>
      }
    </li>
  )
}

export default Studies