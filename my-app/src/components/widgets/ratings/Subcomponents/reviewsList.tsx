

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';

import ReviewTile from './reviewTile';


var ReviewsList = () => {

  return (
    <div className='reviewsList'>
      ReviewsList
      <ReviewTile />
      <button onClick={() => {console.log('clicked')}}> testing!</button>
      
    </div>

  );
}

export default ReviewsList;