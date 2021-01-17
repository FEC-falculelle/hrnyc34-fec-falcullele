import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';
import styleReducer from './styleReducer';

const RootReducer = combineReducers( {
  products: productsReducer,
  singleProduct: singleProductReducer,
  style: styleReducer
});

export default RootReducer;