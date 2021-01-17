import {Dispatch} from "redux";
import {ProductDispatchTypes, STYLE_LOADING, STYLE_FAIL, STYLE_SUCCESS, ProductType} from './actionTypes';
import axios from 'axios';
import API_TOKEN from '../config';

export const getStyle = (id: any = '') => async (dispatch: Dispatch<ProductDispatchTypes>) => {
  try {
    dispatch( {
      type: STYLE_LOADING
    })

    const res = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}/styles`,
    {headers: {
      "Authorization" : API_TOKEN
    }
  }
    )

    dispatch( {
      type: STYLE_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch( {
      type: STYLE_FAIL
    })
  }
};