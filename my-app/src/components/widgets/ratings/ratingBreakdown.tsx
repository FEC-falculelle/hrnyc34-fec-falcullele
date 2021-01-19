import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ratingsForMeta } from '../../../actions/ratingReview/ratingActionTypes';
import {RootStore} from '../../../store/store';

var RatingBreakdown = () => {
  // const dispatch = useDispatch();
  const ratings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.ratings);

  // console.log('product state: ', ratings['4']);

  return (
    <div className='ratingBreakdown'>
      rating breakdown
      5 stars:
      
    </div>

  );
}

export default RatingBreakdown;