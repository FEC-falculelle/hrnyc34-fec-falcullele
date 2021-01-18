import axios from 'axios';
import { DispatchType } from '../../store/store';
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR} from './actionTypesQA';
import { Question } from './types';

interface Result {
  product_id: string;
  results: Question[];
}


const getQuestions = (id: number) => async (dispatch: DispatchType) => {
    dispatch({
      type: GET_QUESTIONS,
    });

    try {
      const res = await axios.get<Result>(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=${id}`
      );
      return dispatch({
        type: GET_QUESTIONS_SUCCESS,
        payload: res.data.results,
      });
    }
    catch(e) {
      return dispatch({
        type: GET_QUESTIONS_ERROR,
        payload: [],
      });
   }
};

export default getQuestions;
