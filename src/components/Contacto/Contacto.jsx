import './Contacto.css';

function Contacto() {
  return (
    <section id='contact'>
        <h2>Contacto</h2>
        <a href="#">LinkedIn</a>
        <a href="#">Github</a>
        <form>
            <div>
                <label htmlFor="nombre">Ingrese su nombre</label>
                <input type="nombre" id='nombre'/>
            </div>
            <div>
                <label htmlFor="email">Ingrese su email</label>
                <input type="email" id='email'/>
            </div>
            <div>
                <label htmlFor="mensaje">Ingrese su mensaje</label>
                <textarea id="mensaje"></textarea>
            </div>
        </form>
    </section>
  )
}

export default Contacto