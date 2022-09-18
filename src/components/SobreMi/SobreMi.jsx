import { useState } from 'react';
import Tecnologias from '../Tecnologias/Tecnologias';
import './SobreMi.css';

function SobreMi() {
    const [aboutSelected, setAboutSelected] = useState('info');

    let technologies = [
        {name: "HTML", thumbnail: 'html-5.webp'},
        {name: "CSS", thumbnail: 'css-3.webp'},
        {name: "Bootstrap", thumbnail: 'bootstrap.webp'},
        {name: "Git", thumbnail: 'git.webp'},
        {name: "SASS", thumbnail: 'sass.webp'},
        {name: "Javascript", thumbnail: 'js.webp'},
        {name: "React", thumbnail: 'reactjs.png'},
        {name: "Node", thumbnail: 'node.png'},
        {name: "Express", thumbnail: 'reactjs.png'},
        {name: "MongoDB", thumbnail: 'mongo.png'}
    ]

    return (
        <section id='aboutMe' className='sobreMi'>
            <h2>Sobre mí</h2>
            <div className='sobreMi__btnContainer'>
                <button onClick={() => setAboutSelected('info')} style={{
                    color: aboutSelected === 'info' ? '#fff' : 'violet',
                    backgroundColor: aboutSelected === 'info' ? 'violet' : 'transparent'
                }}>Información</button>
                <button onClick={() => setAboutSelected('tecno')} style={{
                    color: aboutSelected === 'tecno' ? '#fff' : 'violet',
                    backgroundColor: aboutSelected === 'tecno' ? 'violet' : 'transparent'
                }}>Tecnologías</button>
            </div>
            {aboutSelected === 'info'
                ? <div className='sobreMi__textContainer'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione harum explicabo voluptatibus quod, id esse illo dolor fuga blanditiis officia. Laboriosam id dolores nemo dolore officia aut nobis nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam ad totam rerum consequatur ipsam fugiat excepturi repudiandae ipsa eveniet illum, officia molestias incidunt facere nesciunt laborum ducimus? Incidunt, atque.</p>
                </div>

                : <div className='sobreMi__tecnoContainer'>{technologies.map(technologie => <Tecnologias technologie={technologie}/>)}</div>
            }

        </section>
    )
}

export default SobreMi