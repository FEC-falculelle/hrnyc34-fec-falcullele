import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';

import reviewsReducer from './reviewsReducer'
import reviewsMetaReducer from './reviewsMetaDataReducer'
import qaReducer from './questionAnswers/qaReducer'

const RootReducer = combineReducers( {
  products: productsReducer,
  singleProduct: singleProductReducer,
  reviewsInfo: reviewsReducer,
  reviewsMetaInfo: reviewsMetaReducer,
  qaReducer,
});

export default RootReducer;
