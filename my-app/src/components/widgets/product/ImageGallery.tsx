import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';
import Carousel from './Carousel';

function ImageGallery() {

  return (
        <div className='featured-image'>
          <Carousel />
      </div>
  );
}

export default ImageGallery;