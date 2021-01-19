import {ReviewsMetaDataFromAPI, ReviewsMetaDispatchTypes, REVIEWSMETA_FAIL, REVIEWSMETA_LOADING, REVIEWSMETA_SUCCESS} from '../actions/ratingReview/ratingActionTypes';

interface metaDataInfo {
  loading: boolean,
  reviewsMeta?: ReviewsMetaDataFromAPI
}

const exampleState: metaDataInfo = {
  loading: false,
  reviewsMeta: {
    "product_id": "11001",
    "ratings": {
        "4": "1",
        "5": "1"
    },
    "recommended": {
        "false": "1",
        "true": "1"
    },
    "characteristics": {
        "Fit": {
            "id": 36825,
            "value": "4.0000000000000000"
        },
        "Length": {
            "id": 36826,
            "value": "3.5000000000000000"
        },
        "Comfort": {
            "id": 36827,
            "value": "5.0000000000000000"
        },
        "Quality": {
            "id": 36828,
            "value": "4.0000000000000000"
        }
    }
}
};

const reviewsMetaReducer = (state: metaDataInfo = exampleState, action: ReviewsMetaDispatchTypes) : metaDataInfo => {
  switch (action.type) {
    case REVIEWSMETA_FAIL:
      return {
        loading: false,
      }
    case REVIEWSMETA_LOADING:
      return {
        loading: true,
      }
    case REVIEWSMETA_SUCCESS:
      return {
        loading: false,
        reviewsMeta: action.payload
      }
    default:
      return state
  }
};


export default reviewsMetaReducer;