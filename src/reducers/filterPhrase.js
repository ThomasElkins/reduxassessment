export default (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_FILTER_PHRASE':
      return action.payload.toUpperCase();
    default:
      return state;
  }
}
