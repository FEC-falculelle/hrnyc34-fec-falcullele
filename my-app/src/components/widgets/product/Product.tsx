import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';
import {getProduct} from '../../../actions/singleProductAction';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import {Featured} from './types';


function Product() {

  const dispatch = useDispatch();

  const productState = useSelector((state: RootStore) => state.products);



  const [featuredProduct, setfeaturedProduct] = useState<Featured>();
  // const featuredState = useSelector((state: RootStore) => state.products[0]);
  // const [featuredProduct, setFeatured] = useState;

  useEffect(()  => {
    dispatch(getProducts());
  }, []);

  useEffect(()  => {
    if (Array.isArray(productState.products)) {
      if (productState.products[0]) {
        dispatch(getProduct(productState.products[0].id));
      }
    } else {
      console.log('productState is not an array')
    }
  }, [productState]);

  return (
    <div className='product'>
      <ImageGallery />
        <ProductInfo />
          <ProductDescription />
    </div>

  );
}

export default Product;