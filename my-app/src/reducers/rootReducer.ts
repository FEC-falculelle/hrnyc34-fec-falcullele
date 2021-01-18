import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';
import reviewsReducer from './reviewsReducer'

const RootReducer = combineReducers( {
  products: productsReducer,
  singleProduct: singleProductReducer,
  reviewsInfo: reviewsReducer
});

export default RootReducer;