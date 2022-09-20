import { useState } from 'react';
import Burger from '../Burger/Burger';
import FotoHeader from '../FotoHeader/FotoHeader';
import HeaderSections from '../HeaderSections/HeaderSections';
import './Header.css';

function Header() {

  const [navMobile, setNavMobile] = useState(false);

  function nav() {
    console.log('hola')
    navMobile ? setNavMobile(false) : setNavMobile(true);
  }

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
      <Burger nav={nav}/>
      <nav className='header__nav' style={{
        display: navMobile ? 'block' : 'none'
      }}>
        <ul className='header__nav-ul'>
          <HeaderSections />
        </ul>
      </nav>
    </header>
  )
}

export default Header;