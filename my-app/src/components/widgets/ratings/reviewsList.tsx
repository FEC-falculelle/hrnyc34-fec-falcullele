

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

import {getReviews} from '../../../actions/ratingReview/getReviewsAction';
// import ImageGallery from './ImageGallery';
// import ProductInfo from './ProductInfo';
// import ProductDescription from './ProductDescription';


var ReviewsList = () => {
  const dispatch = useDispatch();
  const productReviewsState = useSelector((state: RootStore) => state.reviewsInfo);


  useEffect(()  => {
    dispatch(getReviews());
  }, []);

  // useEffect(()  => {
  //   if (Array.isArray(productState.products)) {
  //     if (productState.products[0]) {
  //       dispatch(getReviews(productState.products[0].id));
  //     }
  //   } else {
  //     console.log('productState is not an array')
  //   }
  // }, [productState]);

  console.log('product state: ', productReviewsState);

  return (
    <div className='reviewsList'>
      ReviewsList
      <button onClick={() => {console.log('clicked')}}> testing!</button>
      
    </div>

  );
}

export default ReviewsList;