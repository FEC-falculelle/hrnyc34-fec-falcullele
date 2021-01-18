import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';
import styleReducer from './styleReducer';
import selectStyleReducer from './selectStyleReducer';

const RootReducer = combineReducers( {
  products: productsReducer,
  singleProduct: singleProductReducer,
  style: styleReducer,
  selectStyle: selectStyleReducer
});

export default RootReducer;