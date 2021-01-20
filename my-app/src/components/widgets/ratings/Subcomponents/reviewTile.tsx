import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';


var ReviewTile = () => {
  // const dispatch = useDispatch();
  const productReviewsState = useSelector((state: RootStore) => state.reviewsInfo);

  console.log('List of review results state: ', productReviewsState.reviews);

  return (
    <div className='reviewTile'>
      This is a single review

      
    </div>

  );
}

export default ReviewTile;