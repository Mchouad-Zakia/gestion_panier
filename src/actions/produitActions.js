export const setProductList = (products) => ({
  type: 'SET_PRODUCT_LIST',
  payload: products,
});

export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  payload: categories,
});

export const setSelectedCategory = (category) => ({
  type: 'SET_SELECTED_CATEGORY',
  payload: category,
});

export const addToCart = (product) => ({
  type: 'ADD_TO_CART', // Utiliser 'ADD_TO_CART' au lieu de 'ADD_TO_PANIER'
  payload: product,
});

export const setArticle = (article) => ({
  type: 'SET_ARTICLE',
  payload: article,
});
