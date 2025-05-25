import React from 'react';
import Header from '../components/Header';
import Mapa from '../components/Mapa';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Mapa />
      </div>
    </div>
  );
};

export default Home; 