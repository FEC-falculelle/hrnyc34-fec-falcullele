import axios from 'axios';
import { DispatchType } from '../../store/store';
import { createAction } from '@reduxjs/toolkit';
import { ADD_ANSWER, ADD_ANSWER_SUCCESS, ADD_ANSWER_ERROR, RESET_ANSWER_STATUS } from './actionTypesQA';

interface ParamsType {
  body: string;
  name: string;
  email: string;
}

const addAnswer = (id: number, params: ParamsType) => async (dispatch: DispatchType) => {
  dispatch({
    type: ADD_ANSWER,
  });

  try {
    await axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${id}/answers`, params);
    return dispatch({
      type: ADD_ANSWER_SUCCESS,
    });
  } catch (e) {
    return dispatch({
      type: ADD_ANSWER_ERROR,
    });
  }
};

export const resetAnswerStatus = createAction(RESET_ANSWER_STATUS);

export default addAnswer;
