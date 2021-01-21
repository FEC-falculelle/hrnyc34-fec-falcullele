import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';

var totalRatings: number;
var totalStars: any;

const StyledRating = withStyles({
  iconFilled: {
    color: '#161616',
  },
})(Rating);

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

  return (
    <div className='starBar'>
      <h1> {(totalStars / totalRatings).toFixed(1)}</h1>
    <StyledRating 
      name="5stars"
      value= {totalStars / totalRatings}
      precision={0.25}
      defaultValue={0}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
      readOnly />

      
    </div>

  );
}

export default ProductBreakdown;