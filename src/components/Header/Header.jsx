import Burger from '../Burger/Burger';
import FotoHeader from '../FotoHeader/FotoHeader';
import HeaderSections from '../HeaderSections/HeaderSections';
import './Header.css';

function Header() {
  return (
    <header className='header' id='header'>
      <div className='header__name'>
        <h1 className='h1d'>Francisco José Lavalle</h1>
        <h1 className='h1m'>Francisco
          <br />
          José
          <br />
          Lavalle</h1>
        <button className='header__name-btn'>Contáctame</button>
      </div>
      <FotoHeader />
      <Burger />
      <nav className='header__nav'>
        <ul className='header__nav-ul'>
          <HeaderSections />
        </ul>
      </nav>
    </header>
  )
}

export default Header;