import axios from 'axios';
import { DispatchType } from '../../store/store';
import { ADD_HELPFUL_ANSWER, ADD_HELPFUL_ANSWER_SUCCESS, ADD_HELPFUL_ANSWER_ERROR } from './actionTypesQA';

const helpfulAnswer = (id: number) => async (dispatch: DispatchType) => {
  dispatch({
    type: ADD_HELPFUL_ANSWER,
  });

  try {
    await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/answers/${id}/helpful`);
    console.log('Answer was recorded as Helpful!');
    return dispatch({
      type: ADD_HELPFUL_ANSWER_SUCCESS,
    });
  } catch (e) {
    return dispatch({
      type: ADD_HELPFUL_ANSWER_ERROR,
    });
  }
};

export default helpfulAnswer;
