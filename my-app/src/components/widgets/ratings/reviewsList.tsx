

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

import {getReviews} from '../../../actions/ratingReview/getReviewsAction';
import {getReviewsMeta} from '../../../actions/ratingReview/getReviewsMetaDataAction'
import ReviewTile from './reviewTile';


var ReviewsList = () => {
  const dispatch = useDispatch();
  const productReviewsState = useSelector((state: RootStore) => state.reviewsInfo);
  const productState = useSelector((state: RootStore) => state.singleProduct);


  useEffect(()  => {
    dispatch(getReviews('11001'));  // TODO: BASED ON PRODUCT INFO! hardcoded for now
    dispatch(getReviewsMeta(11001)); // TODO: BASED ON PRODUCT INFO!
  }, []);

  console.log('product Reviews state: ', productReviewsState);

  return (
    <div className='reviewsList'>
      ReviewsList
      <ReviewTile />
      <button onClick={() => {console.log('clicked')}}> testing!</button>
      
    </div>

  );
}

export default ReviewsList;