import { useState } from 'react';
import SobreMiButtons from '../SobreMiButtons/SobreMiButtons';
import SobreMiItems from '../SobreMiItems/SobreMiItems';
import Tecnologias from '../Tecnologias/Tecnologias';
import './SobreMi.css';

function SobreMi() {
    const [aboutSelected, setAboutSelected] = useState('info');

    return (
        <section id='aboutMe' className='sobreMi'>
            <h2>Sobre mí</h2>
            <div className='sobreMi__btnContainer'>
                <SobreMiButtons setAboutSelected={setAboutSelected} aboutSelected={aboutSelected} type={'info'} text={"Información"}/>
                <SobreMiButtons setAboutSelected={setAboutSelected} aboutSelected={aboutSelected} type={'tecno'} text={"Tecnologías"} />
                <SobreMiButtons setAboutSelected={setAboutSelected} aboutSelected={aboutSelected} type={'experience'} text={"Experiencia"}/>
                <SobreMiButtons setAboutSelected={setAboutSelected} aboutSelected={aboutSelected} type={'studies'} text={"Estudios"}/>
            </div>
            <SobreMiItems aboutSelected={aboutSelected} />

        </section>
    )
}

export default SobreMi