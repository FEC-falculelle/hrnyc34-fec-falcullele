import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';
import '../../../styles/App.css';

interface Props {
  exampleData: string;
}

function ProductInfo() {
  const dispatch = useDispatch();
  const productState = useSelector((state: RootStore) => state.products);

  console.log('product state: ', productState);

  return (
    <div className='product-options'>
      product options
    </div>
  );
}

export default ProductInfo;