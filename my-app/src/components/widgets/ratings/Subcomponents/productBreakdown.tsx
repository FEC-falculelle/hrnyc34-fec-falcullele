import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';
import HoverRating from '../starComponent';

import Rating from '@material-ui/lab/Rating';

var totalRatings: number;
var totalStars: any;

var ProductBreakdown = () => {
  // const dispatch = useDispatch();
  const initialRatings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.ratings);
  const [ratings, setRatings] = useState(() => initialRatings);
  
  if (ratings) {
    totalRatings = Object.values(ratings).reduce((accum, currentVal) => {
      return parseInt(accum) + parseInt(currentVal);
    });

    totalStars = Object.entries(ratings)
      .reduce((accum, currentVal) => {
        return accum + (parseInt(currentVal[0]) * parseInt(currentVal[1]));
      }, 0);
  
  }

 console.log(ratings, 'RATINGS BRUHH')
 console.log(totalStars, 'TOTAL STARS BRUHH')

  return (
    <div className='starBar'>
      <h1> {totalStars / totalRatings}</h1>
    <Rating 
      name="5stars"
      value= {totalStars / totalRatings}
      precision={0.25}
      defaultValue={0}
      disabled />

      
    </div>

  );
}

export default ProductBreakdown;