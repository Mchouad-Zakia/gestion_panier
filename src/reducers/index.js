import { combineReducers } from 'redux';
import panierReducer from './panierReducer';
import produitReducer from './produitReducer';

const rootReducer = combineReducers({
  panier: panierReducer,
  produit: produitReducer,
});

export default rootReducer;
