import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPanier } from '../actions/panierActions';

const Panier = () => {
  const dispatch = useDispatch();
  const panierState = useSelector((state) => state.panier);

  useEffect(() => {
    const storedPanier = JSON.parse(localStorage.getItem('panier')) || [];
    dispatch(setPanier(storedPanier));
  }, [dispatch]);

  const modifierQuantite = (index, nouvelleQuantite) => {
    const updatedPanier = [...panierState.panier];
    updatedPanier[index].qt = nouvelleQuantite;
    dispatch(setPanier(updatedPanier));
    localStorage.setItem('panier', JSON.stringify(updatedPanier));
  };

  const supprimerProduit = (index) => {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer ce produit du panier ?');
    if (confirmation) {
      const updatedPanier = [...panierState.panier];
      updatedPanier.splice(index, 1);
      dispatch(setPanier(updatedPanier));
      localStorage.setItem('panier', JSON.stringify(updatedPanier));
    }
  };

  // Calculate Overall Total Price
  const overallTotal = panierState.panier.reduce((total, item) => total + item.product.price * item.qt, 0).toFixed(2);

  return (
    <div className="container mt-5">
      <h2>Votre Panier</h2>

      {panierState.panier.length === 0 ? (
        <div class="alert alert-danger" role="alert">Votre panier est vide.</div>
      ) : (
        panierState.panier.map((item, index) => (
          <div key={index} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="img-fluid rounded-start"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.product.title}</h5>
                  <p className="card-text">Prix unitaire: {item.product.price} EUR</p>
                  <p className="card-text">Quantité: {item.qt}</p>
                  <div className="btn-group" role="group" aria-label="Modifier Quantité">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => modifierQuantite(index, item.qt - 1)}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-light" disabled>
                      {item.qt}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => modifierQuantite(index, item.qt + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => supprimerProduit(index)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {panierState.panier.length > 0 && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Total</h5>
            <p className="card-text">Montant total: {overallTotal} EUR</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;
