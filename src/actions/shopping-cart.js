import axios from 'axios';

export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: axios.patch(`http://localhost:8000/cart/${id}/add`)
  }
}

export const getCartItems = () => {
  return {
    type: 'GET_CART_ITEMS',
    payload: axios.get(`http://localhost:8000/cart`)
  }
}

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: axios.patch(`http://localhost:8000/cart/${id}/remove`)
  }
}
