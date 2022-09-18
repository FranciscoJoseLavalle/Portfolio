import './Tecnologias.css';

function Tecnologias({technologie}) {
    return (
        <div className='technologie'>
            <img src={`./img/${technologie.thumbnail}`} alt="" />
            <p>{technologie.name}</p>
        </div>
    )
}

export default Tecnologias