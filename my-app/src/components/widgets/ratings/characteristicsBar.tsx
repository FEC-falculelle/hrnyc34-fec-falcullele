import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';


var CharacteristicsBar = () => {
  // const dispatch = useDispatch();
  const productReviewsState = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta);

  console.log('REVIEW META INFO state: ', productReviewsState);
//   if (productReviewsState.results) {
//       console.log("awefwaefwaef", productReviewsState)
//   }
  return (
    <div className='characteristicsBar'>
      This is a bar

      
    </div>

  );
}

export default CharacteristicsBar;