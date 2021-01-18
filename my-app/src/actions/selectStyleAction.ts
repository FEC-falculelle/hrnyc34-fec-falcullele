import {Dispatch} from "redux";
import {ProductDispatchTypes} from './actionTypes';

export const selectStyle = (index: number = 0) => (dispatch: Dispatch<ProductDispatchTypes>) => {
    dispatch( {
      type: 'CURRENT_STYLE_INDEX',
      payload: index
    });
};