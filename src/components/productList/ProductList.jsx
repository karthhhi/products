import React from 'react';
import ProductCard from '../productCard/ProductCard.jsx';
import './productList.scss';

const ProductList = ({products}) => {
  return (
    <div className="productList_container">
      { products.map(p => <ProductCard key={`${p.index}-${p.productName}`} product={p} />) }
    </div>
  );
};

export default ProductList;