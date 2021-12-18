import React from 'react';
import './productCard.scss';

const ProductCard = ({product}) => {
  const {
    productImage, 
    productName, 
    price,
    isExclusive,
    isSale
  } = product;
  return (
    <div className="productCard_container">
        <img className="productCard_image" src={`/assets/products/${productImage}`} />
        <div className="productCard_badge">
          { isSale && <div className="productCard_badge-sale">Sale</div> }
          { isExclusive && <div className="productCard_badge-exclusive">Exclusive</div> }
        </div>
        <span className="productCard_title">{productName}</span>
        <span className="productCard_price">{price}</span>
    </div>
  );
};

export default ProductCard;