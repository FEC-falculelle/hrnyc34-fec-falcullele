import axios from 'axios';
import { DispatchType } from '../../store/store';
import { ADD_HELPFUL_QUESTION, ADD_HELPFUL_QUESTION_SUCCESS, ADD_HELPFUL_QUESTION_ERROR } from './actionTypesQA';

const helpfulQuestion = (id: number) => async (dispatch: DispatchType) => {
  dispatch({
    type: ADD_HELPFUL_QUESTION,
  });

  try {
    await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/answers/${id}/helpful`);
    console.log('Question was recorded as Helpful!');
    return dispatch({
      type: ADD_HELPFUL_QUESTION_SUCCESS,
    });
  } catch (e) {
    return dispatch({
      type: ADD_HELPFUL_QUESTION_ERROR,
    });
  }
};

export default helpfulQuestion;
