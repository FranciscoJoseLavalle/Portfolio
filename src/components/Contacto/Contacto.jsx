import './Contacto.css';

function Contacto() {
    return (
        <section id='contact'>
            <h2>Contacto</h2>
            <form>
                <div>
                    <label htmlFor="nombre">Ingrese su nombre</label>
                    <input type="nombre" id='nombre' placeholder='*Ingresa tu nombre' />
                </div>
                <div>
                    <label htmlFor="email">Ingrese su email</label>
                    <input type="email" id='email' placeholder='*Ingresa tu email' />
                </div>
                <div>
                    <label htmlFor="mensaje">Ingrese su mensaje</label>
                    <textarea id="mensaje" placeholder='*Ingresa tu mensaje'></textarea>
                </div>
                <button className='send'>Enviar</button>
            </form>
            <div className='contact__social'>
                <a href="https://www.linkedin.com/in/francisco-lavalle-336330216/" target="">
                    <img src="./img/linkedin.webp" alt="LinkedinIMG" /> LinkedIn
                </a> 
                <a href="https://github.com/FranciscoJoseLavalle">
                    <img src="./img/github.png" alt="GithubIMG" />Github
                </a>
            </div>
        </section>
    )
}

export default Contacto