import './Burger.css';

function Burger({nav}) {
  return (
    <button className='burger'><img src="./img/icons/burger.webp" alt="Burger" onClick={nav}/></button>
  )
}

export default Burger