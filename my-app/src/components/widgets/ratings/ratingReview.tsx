import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

import ReviewsList from './reviewsList';
import SortComponent from './sortComponent';
import ProductBreakdown from './productBreakdown';
import RatingBreakdown from './ratingBreakdown';

var ProductReviewsComponent = () => {
  // const dispatch = useDispatch();
  // const productReviewsState = useSelector((state: RootStore) => state.productReviewsInfo);

  // console.log('product state: ', productReviewsInfo);

  return (
    <div className='ratings'>
      ratings and review component :
      <SortComponent />
      <ReviewsList />
      <ProductBreakdown />
      <RatingBreakdown />
    </div>

  );
}

export default ProductReviewsComponent;