import {ProductType, Style, ProductDispatchTypes, STYLE_FAIL, STYLE_LOADING, STYLE_SUCCESS} from '../actions/actionTypes';
import {exampleStyle} from './exampleStyle';

interface ExampleState {
  loading: boolean,
  products?: Style
}

const exampleState: ExampleState = {
  loading: false,
  products: exampleStyle
};

const styleReducer = (state: ExampleState = exampleState, action: ProductDispatchTypes) : ExampleState => {
  switch (action.type) {
    case STYLE_FAIL:
      return {
        loading: false,
      }
    case STYLE_LOADING:
      return {
        loading: true,
      }
    case STYLE_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    default:
      return state
  }
};


export default styleReducer;