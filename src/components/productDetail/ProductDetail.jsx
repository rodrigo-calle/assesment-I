import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';

import './ProductDetail.css';
import { useProductContext } from '../../context/ProductContext';
import { getAllproducts } from '../../data/productsData';

const ProductDetail = () => {
  const { identificador } = useProductContext();
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
    <div>
      {products.map((prod) =>
        prod.id === identificador ? (
          <div className="detail-container" key={prod.id}>
            <img
              className="detail-container__image"
              src={prod.image}
              alt={prod.title}
            />
            <div className="detail-container__caption">
              <p className="detail-container__caption--title">
                {prod.title.toUpperCase()}
              </p>
              <p className="detail-container__caption--price">{`$${prod.price}`}</p>
              <p className="detail-container__caption--description">
                {prod.description}
              </p>
              <p className="detail-container__caption--rate">Rate:</p>
              <Rating initialValue={prod.rating.rate} />
              <Link to="/" className="btn-back">
                Back to Products
              </Link>
            </div>
          </div>
        ) : (
          // eslint-disable-next-line no-console
          console.log('')
        ),
      )}
    </div>
  );
};
export default ProductDetail;
