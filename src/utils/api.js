import axios from 'axios';
const request = axios.create({
  baseURL: 'https://golden--shoes.herokuapp.com/api'
});
export const fetchProducts = () => {
  return request.get('/products').then(({ data }) => {
    return data.products;
  });
};

export const fetchProductsByKeyword = (keyword) => {
  return request.get(`/products/${keyword}`).then(({ data }) => {
    return data.products;
  });
};
