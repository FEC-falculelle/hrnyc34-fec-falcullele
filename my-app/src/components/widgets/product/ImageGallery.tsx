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

  return (
        <div className='featured-image'>
          image
      </div>
  );
}

export default ImageGallery;