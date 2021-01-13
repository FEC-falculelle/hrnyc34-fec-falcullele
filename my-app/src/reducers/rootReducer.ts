import {combineReducers} from 'redux';
import productsReducer from './productsReducer';

const RootReducer = combineReducers( {
  example: productsReducer
});

export default RootReducer;