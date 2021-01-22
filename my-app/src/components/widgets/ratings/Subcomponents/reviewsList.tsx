import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';

import ReviewTile from './reviewTile';

var reviewsProp:any;

var ReviewsList = () => {
  const initialReviews = useSelector((state: RootStore) => state.reviewsInfo);

  const [reviewsList, setReviewsList] = useState<any>([]);

useEffect(() => {
  setReviewsList(() => initialReviews);
}, [])

useEffect(() => {
  setReviewsList(() => initialReviews);
}, [initialReviews])

  if (reviewsList?.reviews?.results){
    console.log(reviewsList.reviews.results, 'these are the reviews on the current product')
    reviewsProp = reviewsList.reviews.results;
  }
  return (
    <div className='reviewsList'>
      ReviewsList
      <ReviewTile reviewsProp={reviewsProp}/>
      
    </div>

  );
}

export default ReviewsList;