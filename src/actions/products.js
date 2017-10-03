import axios from 'axios';


export const getAllProducts = () => {
  return {
  type: 'GET_ALL_PRODUCTS',
  payload: axios.get('http://localhost:8000/cameras')
  }
}

export const updateFilterPhrase = (phrase) => {
  return {
    type: 'UPDATE_FILTER_PHRASE',
    payload: phrase
  }
}

export const toggleSort = (val) => {
  return {
    type: 'TOGGLE_SORT',
    payload: val
  }
}
