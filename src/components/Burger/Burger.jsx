import './Burger.css';

function Burger({nav}) {
  return (
    <button className='burger'><img src="./img/burger.png" alt="Burger" onClick={nav}/></button>
  )
}

export default Burger