import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ key, id, name, price, urlImage }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div
      key={ key }
      className="card"
    >
      <span
        className="product-price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price }
      </span>
      <img
        className="product-img"
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
      />
      <span
        className="product-name"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </span>
      <div className="container-product-counter">
        <button
          type="button"
          className="product-sub"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ quantity > 0 ? () => setQuantity(quantity - 1) : '' }
        >
          -
        </button>
        <input
          type="number"
          className="product-quantity"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
        />
        <button
          type="button"
          className="product-sum"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setQuantity(quantity + 1) }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
