import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';


interface Props {
  exampleData: string;
}

function ProductDescription() {
  const dispatch = useDispatch();
  const productState = useSelector((state: RootStore) => state.products);

  return (
          <div className='description'>
            description
          </div>
  );
}

export default ProductDescription;