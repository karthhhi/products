import React from 'react';
import './productCard.scss';

const ProductCard = ({product}) => {
  const {
    productImage, 
    productName, 
    price,
    isExclusive,
    isSale,
    size
  } = product;
  return (
    <div className="productCard_container">
        <img 
          className="productCard_image" 
          src={`assets/products/${productImage}`}
          onError={(e)=>{e.target.src='assets/placeholder.jpg'}}
        />
        <div className='productCard_section-info'>
          <div className="productCard_badge">
            { isSale && <div className="productCard_badge-sale">Sale</div> }
            { isExclusive && <div className="productCard_badge-exclusive">Exclusive</div> }
          </div>
          <div className="productCard_size">{size.map(s=> <span>{s}</span>)}</div>
        </div>
        <span className="productCard_title">{productName}</span>
        <span className="productCard_price">{price}</span>
    </div>
  );
};

export default ProductCard;