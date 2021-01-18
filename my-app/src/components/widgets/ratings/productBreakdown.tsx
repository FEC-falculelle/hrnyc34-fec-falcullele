import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import HoverRating from './starComponent';

var ProductBreakdown = () => {
  // const dispatch = useDispatch();

  return (
    <div className='productBreakdown'>
      ProductBreakdown
      <h1>A BIG NUMBER</h1>
      <HoverRating />
      
    </div>

  );
}

export default ProductBreakdown;