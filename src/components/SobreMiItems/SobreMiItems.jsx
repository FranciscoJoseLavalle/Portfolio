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
                    <p>Soy <b style={{ color: 'violet' }}>Programador Web FullStack.</b> Enfocado en la mejoría constante de los sitios web, centrándome en <b style={{ color: 'violet' }}>rendimiento, estética y buenas prácticas.</b></p>
                    <p>Tengo 22 años, vivo en Buenos Aires, Argentina. Me <b style={{ color: 'violet' }}>apasiona</b> la tecnología desde chico y me encanta encontrar <b style={{ color: 'violet' }}>soluciones</b> a todo lo que se me presenta.</p>
                    {/* <p>Disfruto mucho programando. Estoy en un constante <b style={{ color: 'violet' }}>aprendizaje</b>, siempre preparándome para nuevos <b style={{ color: 'violet' }}>desafíos</b>.</p> */}
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
                            <p style={{ color: 'violet' }}><b>Programador web FullStack</b></p>
                            <small style={{ color: 'white' }}>Desarrollo de aplicaciones web con Laravel, PHP, MySQL y Vue.</small>
                            <small>Fullbai | 04/2024 - actualidad</small>
                        </li>
                        <li>
                            <p style={{ color: 'violet' }}><b>Programador web FullStack</b></p>
                            <small style={{ color: 'white' }}>Desarrollo de aplicaciones web con Express, React y MongoDB.</small>
                            <small>Freelancer | 02/2023 - actualidad</small>
                        </li>
                        <li>
                            <p style={{ color: 'violet' }}><b>Programador web FullStack</b></p>
                            <small style={{ color: 'white' }}>Desarrollo de aplicaciones web con Laravel, PHP, MySQL y Vue.</small>
                            <small>GearthLogic | 06/2023 - 04/2024</small>
                        </li>
                        <li>
                            <p style={{ color: 'violet' }}><b>Tutor de Backend</b></p>
                            <small style={{ color: 'white' }}>Guío a los alumnos durante sus estudios en Backend, explicándoles temas como Node, Express, Javascript, MongoDB, MySQL, entre otros.</small>
                            <small>Coderhouse | 02/2023 - 05/2024</small>
                        </li>
                        <li>
                            <p style={{ color: 'violet' }}><b>Programador web FullStack</b></p>
                            <small style={{ color: 'white' }}>Desarrollo de aplicaciones web con Symfony, PHP y MySQL.</small>
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