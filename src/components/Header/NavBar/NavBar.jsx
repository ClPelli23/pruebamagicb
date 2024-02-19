import './NavBar.css'
import {useState} from 'react'
// import React, {useState} from 'react';
import logoMagic from '../../../assets/escutMagic.png';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/pruebamagic'); // hace que el Home sea lo que esté activo cuando carga la página la primera vez.
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return(
    <nav className="navbar">
              <div className='brand'>
              <img src={logoMagic} onClick={() => handleLinkClick('Home')}></img>
              </div>
              <ul className="menu">
                {/* <li ><a 
                  className={activeLink === 'Home' ? 'active' : ''} href='#' onClick={() => handleLinkClick('Home')}>Home</a></li> */}
                {/* <li ><a 
                  className={activeLink === 'pruebamagic' ? 'active' : ''} href='#pruebamagic' onClick={() => handleLinkClick('pruebamagic')}>pruebamagic</a></li> */}
                <li><a 
                className={activeLink === 'AboutPage' ? 'active' : ''} href='#aboutPage' onClick={() => handleLinkClick('AboutPage')}>Nosaltres</a></li>
                <li><a className={activeLink === 'TeamsPage' ? 'active' : ''} href='#teamsPage' onClick={() => handleLinkClick('TeamsPage')}>Equips</a></li>
                <li><a className={activeLink === 'NoticePage' ? 'active' : ''} href='#noticePage' onClick={() => handleLinkClick('NoticePage')}>Notícies</a></li>
                <li><a className={activeLink === 'ContactPage' ? 'active' : ''} href='#contactPage' onClick={() => handleLinkClick('ContactPage')}>Contacte</a></li>
                <li><a target="_blank" rel='noreferrer' href="https://oziostore.com/CFMagicSantsFutJugador/">ROBA OFICIAL</a></li>
              </ul>
    </nav> 
    );
}

export default NavBar;