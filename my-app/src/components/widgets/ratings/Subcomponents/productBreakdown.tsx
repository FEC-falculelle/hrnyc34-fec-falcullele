import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';
import HoverRating from '../starComponent';
import StarBar from '../starBarsComponent';

var ProductBreakdown = () => {
  // const dispatch = useDispatch();
  const ratings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta);
  // console.log('product state: ', ratings);

  return (
    <div className='productBreakdown'>
      ProductBreakdown
      <h1>17.5</h1>
      <HoverRating />
      <StarBar />
    </div>

  );
}

export default ProductBreakdown;