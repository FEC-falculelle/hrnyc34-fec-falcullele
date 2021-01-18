import {ProductType, Featured, ProductDispatchTypes, PRODUCT_FAIL, PRODUCT_LOADING, PRODUCT_SUCCESS} from '../actions/actionTypes';

interface ExampleState {
  loading: boolean,
  products?: Featured
}

const exampleState: ExampleState = {
  loading: false,
  products: {
    "id": 11001,
    "campus": "hrnyc",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-01-12T21:17:59.200Z",
    "updated_at": "2021-01-12T21:17:59.200Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ]
  }
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