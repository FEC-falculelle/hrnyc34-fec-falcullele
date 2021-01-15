import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

import ReviewsList from './reviewsList';

interface Props {
  exampleData: string;
}

var ProductReviewsComponent = () => {
  // const dispatch = useDispatch();
  // const productReviewsState = useSelector((state: RootStore) => state.productReviewsInfo);

  // console.log('product state: ', productReviewsInfo);

  return (
    <div className='ratings'>
      ratings and review component :
      <ReviewsList />

    </div>

  );
}

export default ProductReviewsComponent;