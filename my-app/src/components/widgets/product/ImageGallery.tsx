import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';
import '../../../styles/App.css';

interface Props {
  exampleData: string;
}

function ImageGallery() {
  const dispatch = useDispatch();
  const productState = useSelector((state: RootStore) => state.products);

  const handleSubmit = () => dispatch(getProducts())

  console.log('product state: ', productState);

  return (
        <div className='featured-image'>
          <button onClick={handleSubmit}>Click Me and look at the console to see the results from the api</button>
      </div>
  );
}

export default ImageGallery;