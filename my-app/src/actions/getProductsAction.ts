import {Dispatch} from "redux";
import {ProductDispatchTypes, PRODUCTS_LOADING, PRODUCTS_FAIL, PRODUCTS_SUCCESS, ProductType} from './actionTypes';
import axios from 'axios';
import API_TOKEN from '../config';

export const getProducts = (/* add in product param here to search for specific products*/) => async (dispatch: Dispatch<ProductDispatchTypes>) => {
  try {
    dispatch( {
      type: PRODUCTS_LOADING
    })

    const res = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products`,
    {headers: {
      "Authorization" : API_TOKEN
    }
  }
    )

    dispatch( {
      type: PRODUCTS_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch( {
      type: PRODUCTS_FAIL
    })
  }
};










/*

import generateBoard from '../data/generateBoard';
let newBoard = generateBoard(10,10);

var retryAction = (e) => ({

  type: 'RETRY',
    results: null,
    exampleBoard: newBoard,
    win: false
});

export default retryAction;





*/
