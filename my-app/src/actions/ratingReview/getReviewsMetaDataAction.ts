import {Dispatch} from "redux";
import {ReviewsMetaDispatchTypes, REVIEWSMETA_LOADING, REVIEWSMETA_FAIL, REVIEWSMETA_SUCCESS, ReviewResults} from './ratingActionTypes';
import axios from 'axios';
import API_TOKEN from '../../config';

export const getReviewsMeta = (id: number) => async (dispatch: Dispatch<ReviewsMetaDispatchTypes>) => {
  try {
    dispatch( {
      type: REVIEWSMETA_LOADING
    })

    const res = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta`,
    {headers: {
      "Authorization" : API_TOKEN
    },
    params: {
      "product_id": id
    },
  }
    )

    dispatch( {
      type: REVIEWSMETA_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch( {
      type: REVIEWSMETA_FAIL
    })
  }
};
