import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ratingsForMeta } from '../../../../actions/ratingReview/ratingActionTypes';
import {RootStore} from '../../../../store/store';

import {getReviews} from '../../../../actions/ratingReview/getReviewsAction';
import {getReviewsMeta} from '../../../../actions/ratingReview/getReviewsMetaDataAction'

var totalRatings: number;

var RatingBreakdown = () => {
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
    <div className='ratingBreakdown'>
      rating breakdown <br></br>
      5 stars: ({ratings?.[5]}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      4 stars: ({ratings?.[4] || 0}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      3 stars: ({ratings?.[3] || 0}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      2 stars: ({ratings?.[2] || 0}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      1 stars: ({ratings?.[1] || 0}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      
    </div>

  );
}
export default RatingBreakdown;