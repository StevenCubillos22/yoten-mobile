import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div id="menu-btn" className="fas fa-bars" onClick={toggleMenu}></div>
      <a href="#" className="logo">
        <img src="/imgs/yOTENLOGO.png" alt="Logotipo-web" width="100px" height="110px" />
      </a>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="#Inicio">Inicio</a>
        <a href="#about">Sobre nosotros</a>
        <a href="#destination">Actividades</a>
        <a href="#services">Servicios</a>
        <a href="#gallery">Galeria</a>
      </nav>
    </header>
  );
};

export default Header;
