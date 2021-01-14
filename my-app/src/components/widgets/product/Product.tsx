import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';
import '../../../styles/App.css';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';

interface Props {
  exampleData: string;
}

function Product() {
  const dispatch = useDispatch();
  const productState = useSelector((state: RootStore) => state.products);

  console.log('product state: ', productState);

  return (
    <div className='product'>
      <ImageGallery />
        <ProductInfo />
          <ProductDescription />
    </div>

  );
}

export default Product;