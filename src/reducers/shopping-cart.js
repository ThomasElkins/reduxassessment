export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_CART_FULFILLED':
      return [...action.payload.data.filter(product => product.inCart === true)]
    case 'GET_CART_ITEMS_FULFILLED':
      return [...action.payload.data.filter(product => product.inCart === true)]
    case 'REMOVE_FROM_CART_FULFILLED':
      return [...action.payload.data.filter(product => product.inCart === true)]
    default:
      return state;
  }
}
