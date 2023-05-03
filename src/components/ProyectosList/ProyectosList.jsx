import './ProyectosList.css';
import ProyectosItem from '../ProyectosItem/ProyectosItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { proyects } from '../../utils/proyects'; import { EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function ProyectosList() {
  return (
    <section>
      <Swiper
        // className='proyects-container'
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        effect='coverflow'
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {proyects.map((proyect, i) => <SwiperSlide><ProyectosItem key={i} proyect={proyect} /></SwiperSlide>)}
      </Swiper>
    </section>
  )
}

export default ProyectosList