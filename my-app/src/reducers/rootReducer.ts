import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';

const RootReducer = combineReducers( {
  products: productsReducer,
  singleProduct: singleProductReducer
});

export default RootReducer;