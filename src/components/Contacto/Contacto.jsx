import './Contacto.css';
import emailjs from '@emailjs/browser';

function Contacto() {
    
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_8q90a54', 'template_1dltjea', e.target, 'DiAaHBMoI1dvusi44')
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }

    return (
        <section id='contact'>
            <h2>Contacto</h2>
            <form onSubmit={(e) => sendEmail(e)}>
                <div>
                    <label htmlFor="nombre">Ingrese su nombre</label>
                    <input type="nombre" id='nombre' placeholder='*Ingresa tu nombre' name='nombre' />
                </div>
                <div>
                    <label htmlFor="email">Ingrese su email</label>
                    <input type="email" id='email' placeholder='*Ingresa tu email' name='email' />
                </div>
                <div>
                    <label htmlFor="mensaje">Ingrese su mensaje</label>
                    <textarea id="mensaje" placeholder='*Ingresa tu mensaje' name='mensaje'></textarea>
                </div>
                <button type='submit' className='send'>Enviar</button>
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