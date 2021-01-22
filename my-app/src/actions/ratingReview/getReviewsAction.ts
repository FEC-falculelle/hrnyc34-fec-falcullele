import {Dispatch} from "redux";
import {ReviewsDispatchTypes, REVIEWS_LOADING, REVIEWS_FAIL, REVIEWS_SUCCESS, ReviewResults} from './ratingActionTypes';
import axios from 'axios';
import API_TOKEN from '../../config';

export const getReviews = (id: string, page: number = 1, count: number = 25, sort: string = 'newest') => async (dispatch: Dispatch<ReviewsDispatchTypes>) => {
  try {
    dispatch( {
      type: REVIEWS_LOADING
    })

    const res = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/`,
    {headers: {
      "Authorization" : API_TOKEN
    },
    params: {
      "product_id": id,
      "page": page,
      "count" : count, 
      "sort" : sort
    }
  }
    )

    dispatch( {
      type: REVIEWS_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch( {
      type: REVIEWS_FAIL
    })
  }
};
