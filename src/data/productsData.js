// eslint-disable-next-line import/prefer-default-export
export const getAllproducts = () =>
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .catch((error) => console.log(error));
