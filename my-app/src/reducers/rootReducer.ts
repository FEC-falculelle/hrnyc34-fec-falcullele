import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';
import styleReducer from './styleReducer';
import selectStyleReducer from './selectStyleReducer';

import reviewsReducer from './reviewsReducer'
import reviewsMetaReducer from './reviewsMetaDataReducer'
import qaReducer from './questionAnswers/qaReducer'

const RootReducer = combineReducers( {
  products: productsReducer,
  qaReducer,
  reviewsInfo: reviewsReducer,
  reviewsMetaInfo: reviewsMetaReducer,
  style: styleReducer,
  selectStyle: selectStyleReducer,
  singleProduct: singleProductReducer
});

export default RootReducer;
