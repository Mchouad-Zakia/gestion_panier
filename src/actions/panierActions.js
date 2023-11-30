// panierActions.js

export const setPanier = (panier) => ({
  type: 'SET_PANIER',
  payload: panier,
});

export const setNombreProduits = (nombreProduits) => ({
  type: 'SET_NOMBRE_PRODUITS',
  payload: nombreProduits,
});

// Additional Action Creators if needed
export const addToPanier = (product) => ({
  type: 'ADD_TO_PANIER',
  payload: product,
});

export const removeFromPanier = (productId) => ({
  type: 'REMOVE_FROM_PANIER',
  payload: productId,
});

export const clearPanier = () => ({
  type: 'CLEAR_PANIER',
});
export const updateNombreProduits = (nombreProduits) => ({
  type: 'UPDATE_NOMBRE_PRODUITS',
  payload: nombreProduits,
});