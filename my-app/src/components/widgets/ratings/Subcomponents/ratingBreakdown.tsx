import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ratingsForMeta } from '../../../../actions/ratingReview/ratingActionTypes';
import {RootStore} from '../../../../store/store';

var totalRatings: number;

var RatingBreakdown = () => {
  const dispatch = useDispatch();
  const initialRatings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.ratings);

  const [ratings, setRatings] = useState(() => initialRatings);
  
  if (ratings) {
    totalRatings = Object.values(ratings).reduce((accum, currentVal) => {
      return parseInt(accum) + parseInt(currentVal);
    });
    
    console.log(totalRatings, 'TOTALLLLL')
  }

  return (
    <div className='ratingBreakdown'>
      rating breakdown <br></br>
      5 stars: {ratings?.[5]}/{totalRatings} <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      4 stars: {ratings?.[4]}/{totalRatings} <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      3 stars: {ratings?.[3]}/{totalRatings} <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      2 stars: {ratings?.[2]}/{totalRatings} <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      1 stars: {ratings?.[1]}/{totalRatings} <br/>
      <div className="grayBar">
        <div className="greenBar"> </div>
      </div>
      
    </div>

  );
}
export default RatingBreakdown;