import {combineReducers} from 'redux';
import productsReducer from './productsReducer';

const RootReducer = combineReducers( {
  products: productsReducer
});

export default RootReducer;