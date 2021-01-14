import {ProductType, ProductDispatchTypes, PRODUCTS_FAIL, PRODUCTS_LOADING, PRODUCTS_SUCCESS} from '../actions/actionTypes';

interface ExampleState {
  loading: boolean,
  products?: ProductType | ProductType[]
}

const exampleState: ExampleState = {
  loading: false
};

const productsReducer = (state: ExampleState = exampleState, action: ProductDispatchTypes) : ExampleState => {
  switch (action.type) {
    case PRODUCTS_FAIL:
      return {
        loading: false,
      }
    case PRODUCTS_LOADING:
      return {
        loading: true,
      }
    case PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    default:
      return state
  }
};


export default productsReducer;