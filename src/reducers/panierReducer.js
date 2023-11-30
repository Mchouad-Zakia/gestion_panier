// panierReducer.js

const initialState = {
  panier: [],
  nombreProduits: 0,
};

const panierReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PANIER':
      return { ...state, panier: action.payload };
    case 'SET_NOMBRE_PRODUITS':
      return { ...state, nombreProduits: action.payload };
    case 'ADD_TO_PANIER':
      // Ajouter un produit au panier et incrémenter le nombre de produits
      const updatedPanier = [...state.panier, action.payload];
      return {
        ...state,
        panier: updatedPanier,
        nombreProduits: state.nombreProduits + 1,
      };
    case 'REMOVE_FROM_PANIER':
      // Implementez la logique pour supprimer un produit du panier
      return state;
    case 'CLEAR_PANIER':
      // Implementez la logique pour vider l'ensemble du panier
      return { ...state, panier: [], nombreProduits: 0 };
    default:
      return state;
  }
};

export default panierReducer;
