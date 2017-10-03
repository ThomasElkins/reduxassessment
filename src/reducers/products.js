export default(state = [], action) => {
  switch(action.type) {
    case 'GET_ALL_PRODUCTS_FULFILLED':
      return [
              ...action.payload.data.sort((a,b) => a.id - b.id) ];
    default:
      return state;
  }
}
