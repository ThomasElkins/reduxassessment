import { combineReducers } from 'redux';
import products from './products';
import shoppingcart from './shopping-cart';
import filterPhrase from './filterPhrase';
import toggleSort from './toggleSort';
const rootReducer = combineReducers({
  products,
  shoppingcart,
  filterPhrase,
  toggleSort
})

export default rootReducer;
