import { combineReducers } from 'redux';
import products from './products';
import shoppingcart from './shopping-cart';
import filterPhrase from './filterPhrase';
const rootReducer = combineReducers({
  products,
  shoppingcart,
  filterPhrase
})

export default rootReducer;
