import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

interface Props {
  exampleData: string;
}

var ReviewTile = () => {
  // const dispatch = useDispatch();
//   const productReviewsState = useSelector((state: RootStore) => state.productReviewsInfo);

  // console.log('product state: ', productReviewsInfo);

  return (
    <div className='reviewTile'>
      This is a single review

      
    </div>

  );
}

export default ReviewTile;