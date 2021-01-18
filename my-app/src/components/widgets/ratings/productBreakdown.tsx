import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import HoverRating from './starComponent';

var ProductBreakdown = () => {
  // const dispatch = useDispatch();
  // const productReviewsState = useSelector((state: RootStore) => state.productReviewsInfo);

  // console.log('product state: ', productReviewsInfo);

  return (
    <div className='productBreakdown'>
      ProductBreakdown
      <HoverRating />
      
    </div>

  );
}

export default ProductBreakdown;