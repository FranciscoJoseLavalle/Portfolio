import './SobreMi.css';

function SobreMi() {
    return (
        <section id='aboutMe' className='sobreMi'>
            <h2>Sobre mí</h2>
            <div className='sobreMi__btnContainer'>
                <button>Información</button>
                <button>Tecnologías</button>
            </div>
            <div className='sobreMi__textContainer'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione harum explicabo voluptatibus quod, id esse illo dolor fuga blanditiis officia. Laboriosam id dolores nemo dolore officia aut nobis nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam ad totam rerum consequatur ipsam fugiat excepturi repudiandae ipsa eveniet illum, officia molestias incidunt facere nesciunt laborum ducimus? Incidunt, atque.</p>
            </div>
        </section>
    )
}

export default SobreMi