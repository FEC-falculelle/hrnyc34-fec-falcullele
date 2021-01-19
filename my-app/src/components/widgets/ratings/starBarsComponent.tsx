import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';


var StarBar = () => {
  // const dispatch = useDispatch();
  const productReviewsState:any = useSelector((state: RootStore) => state.reviewsMetaInfo);

  console.log('List of review results state: ', productReviewsState.results);

  return (
    <div className='starBar'>
      im going to be a bar! with this info:
      <br></br>

      
    </div>

  );
}

export default StarBar;