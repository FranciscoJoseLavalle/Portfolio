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
            </form>
            <div className='contact__social'>
                <a href="#"><img src="./img/linkedin.webp" alt="LinkedinIMG" /> LinkedIn</a>
                <a href="#"><img src="./img/github.png" alt="GithubIMG" />Github</a>
            </div>
        </section>
    )
}

export default Contacto