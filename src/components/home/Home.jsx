import React, { useEffect, useState } from 'react';

import ProductCard from '../productCard/ProductCard';
import { getAllproducts } from '../../data/productsData';

import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllproducts()
      .then((data) => setProducts(data))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <p className="loader">Data is loading...</p>;
  }

  return (
    <div className="body-page">
      <h1>Home Page</h1>
      <div className="cards">
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard pro={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
