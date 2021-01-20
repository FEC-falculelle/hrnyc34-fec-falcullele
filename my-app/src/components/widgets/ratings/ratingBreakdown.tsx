import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ratingsForMeta } from '../../../actions/ratingReview/ratingActionTypes';
import {RootStore} from '../../../store/store';

var RatingBreakdown = () => {
  const dispatch = useDispatch();
  const initialRatings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.ratings);

  const [ratings, setRatings] = useState(() => initialRatings);

  if (ratings) {
    var total: number = Object.values(ratings).reduce((accum, currentVal) => {
      return parseInt(accum) + parseInt(currentVal);
    });
    console.log(total, 'TOTALLLLL')
  }

  return (
    <div className='ratingBreakdown'>
      rating breakdown
      5 stars: {ratings?.[5]} <br/>
      4 stars: {ratings?.[4]} <br/>
      
    </div>

  );
}

export default RatingBreakdown;