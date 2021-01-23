import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import {RootStore} from '../../../store/store';

import ReviewsList from './Subcomponents/reviewsList';
import SortComponent from './Subcomponents/sortComponent';
import ProductBreakdown from './Subcomponents/productBreakdown';
import RatingBreakdown from './Subcomponents/ratingBreakdown';
import CharacteristicsBar from './Subcomponents/characteristicsBar'
import AddReview from './Subcomponents/addReviewButton';
import MoreReviews from './Subcomponents/moreReviewsButton';

import {getReviews} from '../../../actions/ratingReview/getReviewsAction';
import {getReviewsMeta} from '../../../actions/ratingReview/getReviewsMetaDataAction'


const ProductReviewsComponent = () => {
  const dispatch = useDispatch();
  // const productReviewsState = useSelector((state: RootStore) => state.reviewsInfo);
  // const productState = useSelector((state: RootStore) => state.singleProduct);

  useEffect(()  => {
    dispatch(getReviews('11001'));  
    dispatch(getReviewsMeta(11001)); 
  }, []);

  return (
    <div className='ratings'>
      <div className='div1'>
        <ProductBreakdown />
        <RatingBreakdown />
        <br/>
        <CharacteristicsBar />
      </div>
      <div className='div2'>
        <SortComponent />
        <ReviewsList />
        <div>
          <MoreReviews/>
          <AddReview/>
        </div>
        <hr className="solid" />
      </div>
    </div>

  );
}

export default ProductReviewsComponent;