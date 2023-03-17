import './SobreMiItems.css';
import { technologies } from '../../utils/technologies'
import Tecnologias from '../Tecnologias/Tecnologias'
import Studies from '../Studies/Studies';
import { studies } from '../../utils/studies';

const SobreMiItems = ({ aboutSelected }) => {

    switch (aboutSelected) {
        case 'info': {
            return (
                <div className='sobreMi__textContainer'>
                    <p>Soy <b style={{ color: 'violet' }}>Programador Web FullStack.</b> Comencé a estudiar de forma <b style={{ color: 'violet' }}>autodidacta</b> en 2021 y a fines del mismo año me anoté en Coderhouse.</p>
                    <p>Tengo 20 años, vivo en Buenos Aires, Argentina. Me <b style={{ color: 'violet' }}>apasiona</b> la tecnología desde chico y me encanta encontrar <b style={{ color: 'violet' }}>soluciones</b> a todo lo que se me presenta.</p>
                    <p>Disfruto mucho programando tanto el <b style={{ color: 'violet' }}>Backend</b> como el <b style={{ color: 'violet' }}>Frontend</b> de una aplicación. Estoy en un constante <b style={{ color: 'violet' }}>aprendizaje</b>, siempre preparándome para nuevos <b style={{ color: 'violet' }}>desafíos</b>.</p>
                </div >
            )
        }
        case 'tecno': {
            return (
                <div className='sobreMi__tecnoContainer'>
                    {technologies.map((technologie, i) => <Tecnologias key={i} technologie={technologie} />)}
                </div>
            )
        }
        case 'experience': {
            return (
                <div className='sobreMi__textContainer'>
                    <ul>
                        <li>
                            <p style={{ color: 'violet' }}><b>Tutor de Backend</b></p>
                            <small>Coderhouse | 02/2023 - actualidad</small>
                        </li>
                        <li>
                            <p style={{ color: 'violet' }}><b>Programador web FullStack</b></p>
                            <small>SideIT Solutions | 11/2022 - 02/2023</small>
                        </li>
                    </ul>
                </div>
            )
        }
        case 'studies': {
            return (
                <div className='sobreMi__textContainer'>
                    <ul>
                        {studies.map(studie => <Studies key={studie.name} studie={studie} />)}
                    </ul>
                </div>
            )
        }

        default: {
            return (
                <></>
            )
        }
    }
}

export default SobreMiItems