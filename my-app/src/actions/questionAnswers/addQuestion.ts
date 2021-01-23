import axios from 'axios';
import { DispatchType } from '../../store/store';
import { createAction } from '@reduxjs/toolkit';
import { ADD_QUESTION, ADD_QUESTION_SUCCESS, ADD_QUESTION_ERROR, RESET_QUESTION_STATUS } from './actionTypesQA';

interface ParamsType {
  body: string;
  name: string;
  email: string;
  product_id: number;
}

const addQuestion = (params: ParamsType) => async (dispatch: DispatchType) => {
  dispatch({
    type: ADD_QUESTION,
  });

  try {
    await axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/', params);
    return dispatch({
      type: ADD_QUESTION_SUCCESS,
    });
  } catch (e) {
    return dispatch({
      type: ADD_QUESTION_ERROR,
    });
  }
};

export const resetQuestionStatus = createAction(RESET_QUESTION_STATUS);

export default addQuestion;
