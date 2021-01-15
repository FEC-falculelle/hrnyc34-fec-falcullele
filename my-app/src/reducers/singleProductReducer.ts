import {ProductType, ProductDispatchTypes, PRODUCT_FAIL, PRODUCT_LOADING, PRODUCT_SUCCESS} from '../actions/actionTypes';

interface ExampleState {
  loading: boolean,
  products?: (ProductType)[]
}

const exampleState: ExampleState = {
  loading: false,
  products: []
};

const singleProductReducer = (state: ExampleState = exampleState, action: ProductDispatchTypes) : ExampleState => {
  switch (action.type) {
    case PRODUCT_FAIL:
      return {
        loading: false,
      }
    case PRODUCT_LOADING:
      return {
        loading: true,
      }
    case PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    default:
      return state
  }
};


export default singleProductReducer;