// eslint-disable-next-line import/prefer-default-export
export const getAllproducts = () =>
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
