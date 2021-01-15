import {Dispatch} from "redux";
import {ProductDispatchTypes, PRODUCT_LOADING, PRODUCT_FAIL, PRODUCT_SUCCESS, ProductType} from './actionTypes';
import axios from 'axios';
import API_TOKEN from '../config';

export const getProduct = (id: any = '') => async (dispatch: Dispatch<ProductDispatchTypes>) => {
  try {
    dispatch( {
      type: PRODUCT_LOADING
    })

    const res = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}`,
    {headers: {
      "Authorization" : API_TOKEN
    }
  }
    )

    dispatch( {
      type: PRODUCT_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch( {
      type: PRODUCT_FAIL
    })
  }
};