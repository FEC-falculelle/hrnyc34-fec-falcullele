import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

// import {getReviews} from '../../../actions/ratingReview/getReviewsAction';
// import ImageGallery from './ImageGallery';
// import ProductInfo from './ProductInfo';
// import ProductDescription from './ProductDescription';

interface Props {
  exampleData: string;
}

var RatingBreakdown = () => {
  // const dispatch = useDispatch();
  // const productReviewsState = useSelector((state: RootStore) => state.productReviewsInfo);

  // console.log('product state: ', productReviewsInfo);

  return (
    <div className='ratingBreakdown'>
      rating breakdown

      
    </div>

  );
}

export default RatingBreakdown;