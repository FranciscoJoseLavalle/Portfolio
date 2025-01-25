import './HeaderSections.css';

function HeaderSections({ navMobile, nav }) {
    return (
        <>
            <li><a href="#header" onClick={nav}>Inicio</a></li>
            <li><a href="#aboutMe" onClick={nav}>Sobre mí</a></li>
            <li><a href="#proyects" onClick={nav}>Experiencia</a></li>
            <li><a href="#contact" onClick={nav}>Contacto</a></li>
        </>
    )
}

export default HeaderSections