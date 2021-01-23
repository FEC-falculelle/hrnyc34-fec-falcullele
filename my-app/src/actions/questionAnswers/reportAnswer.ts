import axios from 'axios';
import { DispatchType } from '../../store/store';
import { REPORT_ANSWER, REPORT_ANSWER_SUCCESS, REPORT_ANSWER_ERROR } from './actionTypesQA';

const reportAnswer = (id: number) => async (dispatch: DispatchType) => {
  dispatch({
    type: REPORT_ANSWER,
  });

  try {
    await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${id}/report`);
    console.log('Report has been submitted!');
    return dispatch({
      type: REPORT_ANSWER_SUCCESS,
    });
  } catch (e) {
    return dispatch({
      type: REPORT_ANSWER_ERROR,
    });
  }
};

export default reportAnswer;
