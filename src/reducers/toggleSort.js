export default (state = 'name', action) => {
  switch(action.type) {
    case 'TOGGLE_SORT':
      return action.payload;
    default:
      return state;
  }
}
