import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Meu Mapa de Ônibus</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 