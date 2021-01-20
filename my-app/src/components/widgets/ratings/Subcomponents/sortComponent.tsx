import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';

// import {getReviews} from '../../../actions/ratingReview/getReviewsAction';
// import ImageGallery from './ImageGallery';
// import ProductInfo from './ProductInfo';
// import ProductDescription from './ProductDescription';

var totalRatings:number;

var SortComponent = () => {

  const dispatch = useDispatch();
  const initialRatings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.ratings);

  const [ratings, setRatings] = useState(() => initialRatings);
  
  if (ratings) {
    totalRatings = Object.values(ratings).reduce((accum, currentVal) => {
      return parseInt(accum) + parseInt(currentVal);
    });
  }

  return (
    <div className='sortingComponent'>
      {totalRatings} reviews, sorted by: 
      <select>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
        <option selected value="relevant">Relevant</option>
      </select> 
    </div>

  );
}

export default SortComponent;