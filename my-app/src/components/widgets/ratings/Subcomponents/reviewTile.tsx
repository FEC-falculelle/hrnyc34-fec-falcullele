import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {RootStore} from '../../../../store/store';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

var ReviewTile = ({reviewsProp}:any) => {

  console.log(reviewsProp, 'REVIEWSPROPPPPPP')
  if (reviewsProp) {
    var renderReviews = reviewsProp.map((review:any) => {

    return (<div className ="reviewTile"> 
            <Rating 
        key = {review.review_id}
        name="5stars"
        value= {review.rating}
        precision={0.5}
        defaultValue={0}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        disabled/> <br/>
        {review.summary} <br/>
        {review.body} <br/>
        by: {review.reviewer_name} <br/>

    </div>)
  })
}


  return (
    <div className='reviewTile'>
      {renderReviews}
    </div>

  );
}

export default ReviewTile;