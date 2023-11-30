import React from 'react';
import { Link } from 'react-router-dom';
//import './home.css';

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="titre">Bienvenue dans notre magasin en ligne</h1>
      <p>Découvrez notre sélection de produits de haute qualité.</p>
      <button className="butn">
        <Link to="/produit">Voir les produits</Link>
      </button>
    </div>
  );
};

export default Home;
