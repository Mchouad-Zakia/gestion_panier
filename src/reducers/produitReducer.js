const initialState = {
  productList: [],
  categories: [],
  selectedCategory: null,
  panier: [],
  article: null,
};

const produitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return { ...state, productList: action.payload };
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'ADD_TO_CART':
      const existingProductIndex = state.panier.findIndex(
        (p) => p.product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedPanier = [...state.panier];
        updatedPanier[existingProductIndex].qt += 1;
        return { ...state, panier: updatedPanier };
      } else {
        return { ...state, panier: [...state.panier, { product: action.payload, qt: 1 }] };
      }
    case 'SET_ARTICLE':
      return { ...state, article: action.payload };
    default:
      return state;
  }
};

export default produitReducer;
