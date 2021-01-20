import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';

import ReviewTile from './reviewTile';


var ReviewsList = () => {
  const initialReviews = useSelector((state: RootStore) => state.reviewsInfo);
  const [reviews, setReviews] = useState(() => initialReviews);

  if (initialReviews.reviews?.results){
    console.log(initialReviews.reviews?.results, 'these are the reviews on the current product')
  }
  return (
    <div className='reviewsList'>
      ReviewsList
      <ReviewTile />
      <button onClick={() => {console.log('clicked')}}> testing!</button>
      
    </div>

  );
}

export default ReviewsList;