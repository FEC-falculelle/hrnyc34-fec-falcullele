import { createReducer } from '@reduxjs/toolkit';
import {
  GET_QUESTIONS,
  GET_ANSWERS,
  PRODUCT_NAME,
  SHOW_ANSWERS,
  HELPFUL_ANSWER,
  SEARCH_CHANGE,
  ADD_ANSWER,
  ADD_QUESTION,
  REPORT_ANSWER,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
} from '../../actions/questionAnswers/actionTypesQA';

import getQuestionsAction, { Question } from '../../actions/questionAnswers/types';

interface Answer {
  id: number
}

interface QaState {
  questions: Question[],
  loadingQuestions: boolean,
}

const initialState: QaState = {
  loadingQuestions: false,
  questions: [],
};

const qaReducer = (
  state = initialState,
  action: getQuestionsAction,
): QaState => {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loadingQuestions: false,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        loadingQuestions: true,
      };
    case GET_QUESTIONS_ERROR:
      return {
        ...state,
        loadingQuestions: false,
      };

    default:
      return state;
  }
};

export default qaReducer;
