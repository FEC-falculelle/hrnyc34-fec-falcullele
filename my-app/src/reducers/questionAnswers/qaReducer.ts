import { createReducer } from '@reduxjs/toolkit';
import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_ERROR,
  RESET_QUESTION_STATUS,
  ADD_ANSWER,
  ADD_ANSWER_SUCCESS,
  ADD_ANSWER_ERROR,
  RESET_ANSWER_STATUS,
} from '../../actions/questionAnswers/actionTypesQA';

import getQuestionsAction, { Question } from '../../actions/questionAnswers/types';

interface QaState {
  questions: Question[],
  loadingQuestions: boolean,
  addQuestionStatus: null | 'success' | 'error',
  addAnswerStatus: null | 'success' | 'error',
}

const initialState: QaState = {
  loadingQuestions: false,
  questions: [],
  addQuestionStatus: null,
  addAnswerStatus: null,
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
    case ADD_QUESTION_SUCCESS:
      return {
        ...state,
        addQuestionStatus: 'success',
      };
    case ADD_QUESTION_ERROR:
      return {
        ...state,
        addQuestionStatus: 'error',
      };
    case ADD_QUESTION:
      return {
        ...state,
        addQuestionStatus: null,
      };
    case RESET_QUESTION_STATUS:
      return {
        ...state,
        addQuestionStatus: null,
      };
    case ADD_ANSWER_SUCCESS:
      return {
        ...state,
        addAnswerStatus: 'success',
      };
    case ADD_ANSWER_ERROR:
      return {
        ...state,
        addAnswerStatus: 'error',
      };
    case ADD_ANSWER:
      return {
        ...state,
        addAnswerStatus: null,
      };
    case RESET_ANSWER_STATUS:
      return {
        ...state,
        addAnswerStatus: null,
      };
    default:
      return state;
  }
};

export default qaReducer;
