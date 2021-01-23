import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';

import {getReviews} from '../../../../actions/ratingReview/getReviewsAction';
import {getReviewsMeta} from '../../../../actions/ratingReview/getReviewsMetaDataAction'

let totalRatings: number;

const RatingBreakdown = (): JSX.Element => {
  const dispatch = useDispatch();
  const initialRatings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.ratings);

  const singleProductState = useSelector((state: RootStore) => state.singleProduct);
  
  const [product, setProduct] = useState(() => singleProductState);
  const [ratings, setRatings] = useState(() => initialRatings);
  
  let five, four, three, two, one;

  if (ratings) {
    totalRatings = Object.values(ratings).reduce((accum, currentVal) => {
      return accum + parseInt(currentVal);
    },0);

    if (typeof ratings?.[5] === 'string'){
      const top = parseInt(ratings?.[5]);
    five = {
      width:`${(top * 100 / totalRatings)}%`,
      height: `10px`,
      backgroundColor: `green`,
      };
    }
    if (typeof ratings?.[4] === 'string'){
      const top = parseInt(ratings?.[4]);
    four = {
      width:`${(top * 100 / totalRatings)}%`,
      height: `10px`,
      backgroundColor: `green`,
      };
    }
    if (typeof ratings?.[3] === 'string'){
      const top = parseInt(ratings?.[3]);
    three = {
      width:`${(top * 100 / totalRatings)}%`,
      height: `10px`,
      backgroundColor: `green`,
      };
    }
    if (typeof ratings?.[2] === 'string'){
      const top = parseInt(ratings?.[2]);
    two = {
      width:`${(top * 100 / totalRatings)}%`,
      height: `10px`,
      backgroundColor: `green`,
      };
    }
    if (typeof ratings?.[1] === 'string'){
      const top = parseInt(ratings?.[1]);
    one = {
      width:`${(top * 100 / totalRatings)}%`,
      height: `10px`,
      backgroundColor: `green`,
      };
    }
}

useEffect(() => {
  setRatings(() => initialRatings);
}, [initialRatings]);

useEffect(() => {
  setProduct(() => singleProductState);
}, [singleProductState]);

  useEffect(()  => {

    setRatings(() => initialRatings);
    setProduct(() => singleProductState)
    dispatch(getReviews(product.products.id.toString()));  
    dispatch(getReviewsMeta(product.products.id)); 
  }, []);


  return (
    <div className='ratingBreakdown'> <br></br>
      5 stars: ({ratings?.[5]}/{totalRatings}) <br/>
      <div className="grayBar" >
        <div className="greenBar" style = {five}> </div>
      </div>
      4 stars: ({ratings?.[4] || 0}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar" style = {four}> </div>
      </div>
      3 stars: ({ratings?.[3] || 0}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar" style = {three}> </div>
      </div>
      2 stars: ({ratings?.[2] || 0}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar" style = {two}> </div>
      </div>
      1 stars: ({ratings?.[1] || 0}/{totalRatings}) <br/>
      <div className="grayBar">
        <div className="greenBar" style = {one}> </div>
      </div>

    </div>

  );
}
export default RatingBreakdown;