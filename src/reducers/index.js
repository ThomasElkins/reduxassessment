import { combineReducers } from 'redux';
import products from './products';
import shoppingcart from './shopping-cart';
const rootReducer = combineReducers({
  products,
  shoppingcart
})

export default rootReducer;
