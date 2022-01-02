import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  getProducts,
  setProducts
} from '../../store/slices/productSlice';
import getAllProducts from '../../utils/getAllProducts';
import Header from '../../components/header/Header.jsx';
import ProductList from '../../components/productList/ProductList.jsx';

const Home = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts().then(data => {
        dispatch(setProducts(data))
    });
  }, [])

  return (
    <Fragment>
      <Header

      
      />
      <ProductList
        products={products}
      />
    </Fragment>
  );
};

export default Home;