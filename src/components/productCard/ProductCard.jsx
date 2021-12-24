/* eslint-disable func-names */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProductContext } from '../../context/ProductContext';
import { getAllproducts } from '../../data/productsData';
import './ProductCard.css';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [minute, setMinute] = useState(Math.floor(Math.random() * (3 - 1) + 1));
  const [second, setSecond] = useState(0);
  const change = () => {
    setSecond((sec) => sec - 1);
  };
  if (second < 0) {
    setMinute((min) => min - 1);
    setSecond(59);
  }

  useEffect(() => {
    setInterval(change, 1000);
  }, []);
  const navigate = useNavigate();
  const { setIdentificador } = useProductContext();
  useEffect(() => {
    setLoading(true);
    getAllproducts()
      .then((data) => setProducts(data))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <p>Data is loading...</p>;
  }
  const detailClick = (id) => {
    navigate(`/detail/${id}`);
    setIdentificador(id);
  };
  return (
    <div className="cards">
      {products.map((item) => (
        <div className="card-container" key={item.id}>
          <img
            className="card-container__image"
            src={item.image}
            alt={item.title}
          />
          <div className="card-container__caption">
            <p className="card-container__caption--title">
              {item.title.length > 20
                ? `${item.title.slice(0, 20).toUpperCase()}...`
                : item.title.toUpperCase()}
            </p>
            <p className="card-container__caption--price">{`$${item.price}`}</p>
            <p className="card-container__caption--description">
              {item.description.length > 55
                ? `${item.description.slice(0, 42)}...`
                : item.description}
            </p>
            <p className="card-container__caption--time">
              Time: {minute < 0 ? `terminado` : `${minute}:${second}`}
            </p>
            {minute < 0 ? (
              <button
                type="button"
                className="card-container__caption--btn-blocked"
              >
                TIME OUT
              </button>
            ) : (
              <button
                type="button"
                className="card-container__caption--btn-detail"
                onClick={() => detailClick(item.id)}
              >
                GO TO DETAIL
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
