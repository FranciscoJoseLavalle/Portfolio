import './Contacto.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Loader from '../Loader/Loader';

function Contacto() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState(false);
    const [emailFinally, setEmailFinally] = useState(false);
    const [showEmailFinally, setShowEmailFinally] = useState(false);


    function sendEmail(e) {
        e.preventDefault();
        if (nombre !== '' && email !== '' && mensaje !== '') {
            setShowEmailFinally(true);
            emailjs.sendForm('service_8q90a54', 'template_1dltjea', e.target, 'DiAaHBMoI1dvusi44')
                .then(response => console.log(response))
                .catch(err => console.log(err))
                .finally(emailSended(e))
        } else {
            if (nombre === '') {
                setErrorNombre(true);
            } else {
                setErrorNombre(false);
            }
            if (email === '') {
                setErrorEmail(true);
            } else {
                setErrorEmail(false);
            }
            if (mensaje === '') {
                setErrorMensaje(true);
            } else {
                setErrorMensaje(false);
            }
        }

    }

    function emailSended(e) {
        e.target.reset()

        setErrorNombre(false);
        setErrorEmail(false);
        setErrorMensaje(false);

        setEmailFinally(false);
        setTimeout(() => {
            setEmailFinally(true);
        }, 750)
        setTimeout(() => {
            setShowEmailFinally(false);
            setEmailFinally(false);
        }, 4000)

        setNombre('');
        setEmail('');
        setMensaje('');
    }

    return (
        <section id='contact'>
            <h2>Contacto</h2>
            <form onSubmit={(e) => sendEmail(e)}>
                <div>
                    <label htmlFor="nombre">Ingrese su nombre</label>
                    <input type="nombre" id='nombre' placeholder='*Ingresa tu nombre' name='nombre' onInput={(e) => setNombre(e.target.value)} style={{
                        backgroundColor: errorNombre ? '#933' : '#2a2036'
                    }} />
                </div>
                <div>
                    <label htmlFor="email">Ingrese su email</label>
                    <input type="email" id='email' placeholder='*Ingresa tu email' name='email' onInput={(e) => setEmail(e.target.value)} style={{
                        backgroundColor: errorEmail ? '#933' : '#2a2036'
                    }} />
                </div>
                <div>
                    <label htmlFor="mensaje">Ingrese su mensaje</label>
                    <textarea id="mensaje" placeholder='*Ingresa tu mensaje' name='mensaje' onInput={(e) => setMensaje(e.target.value)} style={{
                        backgroundColor: errorMensaje ? '#933' : '#2a2036'
                    }}></textarea>
                </div>
                <button type='submit' className='send'>Enviar</button>
            </form>
            {showEmailFinally
                ? <div>
                    {emailFinally ? <p className='succesfully'>Mensaje enviado satisfactoriamente...</p> : <Loader />}
                </div>
                : <></>
            }
            <div className='contact__social'>
                <a href="https://www.linkedin.com/in/francisco-lavalle-336330216/" target="_blank">
                    <img src="./img/linkedin.webp" alt="LinkedinIMG" /> LinkedIn
                </a>
                <a href="https://github.com/FranciscoJoseLavalle" target="_blank">
                    <img src="./img/github.webp" alt="GithubIMG" />Github
                </a>
            </div>
        </section>
    )
}

export default Contacto