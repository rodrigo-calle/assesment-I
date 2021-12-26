import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useProductContext } from '../../context/ProductContext';
import './ProductCard.css';
// import { timerSecond } from '../../utils/timer';

const ProductCard = (props) => {
  const { pro } = props;
  const [minute, setMinute] = useState(Math.round(pro.rating.count / 60));
  const [second, setSecond] = useState(pro.rating.count % 60);
  const hour = '00';

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

  const detailClick = (id) => {
    navigate(`/detail/${id}`);
    setIdentificador(id);
  };

  return (
    <div className="card-container" key={pro.id}>
      <img className="card-container__image" src={pro.image} alt={pro.title} />
      <div className="card-container__caption">
        <p className="card-container__caption--title">
          {pro.title.length > 20
            ? `${pro.title.slice(0, 20).toUpperCase()}...`
            : pro.title.toUpperCase()}
        </p>
        <p className="card-container__caption--price">{`$${pro.price}`}</p>
        <p className="card-container__caption--description">
          {pro.description.length > 55
            ? `${pro.description.slice(0, 42)}...`
            : pro.description}
        </p>
        <p className="card-container__caption--time">
          Time:{' '}
          {minute < 0
            ? `Finished`
            : `${hour}:${
                minute.toString().length === 1 ? `0${minute}` : `${minute}`
              }: ${
                second.toString().length === 1 ? `0${second}` : `${second}`
              }`}
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
            onClick={() => detailClick(pro.id)}
          >
            GO TO DETAIL
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  pro: PropTypes.instanceOf(Object).isRequired,
};
