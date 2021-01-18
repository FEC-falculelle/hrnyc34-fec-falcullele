import {ReviewDataFromAPI, ReviewsDispatchTypes, REVIEWS_FAIL, REVIEWS_LOADING, REVIEWS_SUCCESS} from '../actions/ratingReview/ratingActionTypes';

interface ExampleState {
  loading: boolean,
  reviews?: (ReviewDataFromAPI)[]
}

const exampleState: ExampleState = {
  loading: false,
  reviews: []
};

const reviewsReducer = (state: ExampleState = exampleState, action: ReviewsDispatchTypes) : ExampleState => {
  switch (action.type) {
    case REVIEWS_FAIL:
      return {
        loading: false,
      }
    case REVIEWS_LOADING:
      return {
        loading: true,
      }
    case REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload
      }
    default:
      return state
  }
};


export default reviewsReducer;