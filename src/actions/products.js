import axios from 'axios';


export const getAllProducts = () => {
  return {
  type: 'GET_ALL_PRODUCTS',
  payload: axios.get('http://localhost:8000/cameras')
  }
}
