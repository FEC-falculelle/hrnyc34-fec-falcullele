import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {RootStore} from '../../../../store/store';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#161616',
  },
})(Rating);

const ReviewTile = ({reviewsProp}:any) => {

  if (reviewsProp) {
    var renderReviews = reviewsProp.map((review:any) => {
    return (<div className ="reviewTile" key = {review.review_id}> 
            <StyledRating 
            className="fivestars"
        name="fivestars"
        value= {review.rating}
        precision={0.5}
        defaultValue={0}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        readOnly/> <br/>
        <div className="reviewTitle">{review.summary} </div><br/>
        {review.body} <br/> <br/>
        RECOMMENDED? {review.recommend}
        <br/>
        by: {review.reviewer_name} <br/>
        <div className='helpfulButton'> Helpful? YES | REPORT </div>
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