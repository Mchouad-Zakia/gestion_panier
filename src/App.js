import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Adjust the path accordingly
import Produits from './components/Produits'; // Adjust the path accordingly
import ProduitDetail from './components/ProduitDetail'; // Adjust the path accordingly
import Panier from './components/Panier'; // Adjust the path accordingly
import { Provider } from 'react-redux';
import store from './store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit" element={<Produits />} />
        <Route path="/produit/:id" element={<ProduitDetail />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </Provider>
  );
}

export default App;
