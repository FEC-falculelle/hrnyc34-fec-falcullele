import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';
import qaReducer from './questionAnswers/qaReducer'

const RootReducer = combineReducers( {
  products: productsReducer,
  singleProduct: singleProductReducer,
  qaReducer,

});

export default RootReducer;
