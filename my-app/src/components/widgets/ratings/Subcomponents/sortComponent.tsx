import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';

import {getReviews} from '../../../../actions/ratingReview/getReviewsAction';
import {getReviewsMeta} from '../../../../actions/ratingReview/getReviewsMetaDataAction'


var totalRatings:number;

const SortComponent = () => {

  const dispatch = useDispatch();
  const initialRatings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.ratings);

  const [ratings, setRatings] = useState(() => initialRatings);
  
  if (ratings) {
    totalRatings = Object.values(ratings).reduce((accum, currentVal) => {
      return parseInt(accum) + parseInt(currentVal);
    });
  }

  useEffect(()  => {
    dispatch(getReviews('11001'));  
    dispatch(getReviewsMeta(11001)); 
    setRatings(() => initialRatings);
  }, []);

  useEffect(() => {
    setRatings(() => initialRatings);
  }, [initialRatings])

  return (
    <div className='sortingComponent'>
      {totalRatings} reviews, sorted by: 
      <select>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
        <option selected value="relevant">Relevant</option>
      </select> 
    </div>

  );
}

export default SortComponent;