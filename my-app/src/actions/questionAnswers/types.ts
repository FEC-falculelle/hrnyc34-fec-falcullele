import { GET_QUESTIONS, GET_QUESTIONS_ERROR, GET_QUESTIONS_SUCCESS, ADD_QUESTION, ADD_QUESTION_ERROR, ADD_QUESTION_SUCCESS, ADD_ANSWER, ADD_ANSWER_ERROR, ADD_ANSWER_SUCCESS, ADD_HELPFUL_ANSWER, ADD_HELPFUL_ANSWER_ERROR, ADD_HELPFUL_ANSWER_SUCCESS, ADD_HELPFUL_QUESTION, ADD_HELPFUL_QUESTION_ERROR, ADD_HELPFUL_QUESTION_SUCCESS, RESET_QUESTION_STATUS, RESET_ANSWER_STATUS, REPORT_ANSWER_ERROR, REPORT_ANSWER_SUCCESS, REPORT_ANSWER } from './actionTypesQA';

export interface Answer {
  id: number,
  body: string,
  date: string,
  answerer_name: string,
  helpfulness: number,
  photos: string[],
}

export interface Question {
  question_id: number,
  question_body: string,
  question_date: string,
  asker_name: string,
  question_helpfulness: number,
  reported: boolean,
  answers: {
    [id: string]: Answer,
  }
}

// GET QUESTIONS
interface getQuestionsSuccessAction {
  type: typeof GET_QUESTIONS_SUCCESS;
  payload: Question[],
}

interface getQuestionsAction {
  type: typeof GET_QUESTIONS;
}

interface getQuestionsErrorAction {
  type: typeof GET_QUESTIONS_ERROR;
}


// ADD QUESTION
interface addQuestionsSuccessAction {
  type: typeof ADD_QUESTION_SUCCESS;
}

interface addQuestionsAction {
  type: typeof ADD_QUESTION;
}

interface addQuestionsErrorAction {
  type: typeof ADD_QUESTION_ERROR;
}

interface resetQuestionAction {
  type: typeof RESET_QUESTION_STATUS;
}

// ADD ANSWER
interface addAnswerSuccessAction {
  type: typeof ADD_ANSWER_SUCCESS;
}

interface addAnswerAction {
  type: typeof ADD_ANSWER;
}

interface addAnswerErrorAction {
  type: typeof ADD_ANSWER_ERROR;
}

interface resetAnswerAction {
  type: typeof RESET_ANSWER_STATUS;
}

// ADD HELPFUL ANSWER
interface addHelpfulAnswerSuccessAction {
  type: typeof ADD_HELPFUL_ANSWER_SUCCESS;
}

interface addHelpfulAnswerAction {
  type: typeof ADD_HELPFUL_ANSWER;
}

interface addHelpfulAnswerErrorAction {
  type: typeof ADD_HELPFUL_ANSWER_ERROR;
}

// ADD HELPFUL QUESTION
interface addHelpfulQuestionSuccessAction {
  type: typeof ADD_HELPFUL_QUESTION_SUCCESS;
}

interface addHelpfulQuestionAction {
  type: typeof ADD_HELPFUL_QUESTION;
}

interface addHelpfulQuestionErrorAction {
  type: typeof ADD_HELPFUL_QUESTION_ERROR;
}

// REPORT ANSWER
interface reportAnswerAction {
  type: typeof REPORT_ANSWER;
}

interface reportAnswerSuccessAction {
  type: typeof REPORT_ANSWER_SUCCESS;
}

interface reportAnswerErrorAction {
  type: typeof REPORT_ANSWER_ERROR;
}


type QuestionsActionTypes = getQuestionsAction | getQuestionsSuccessAction | getQuestionsErrorAction | addQuestionsSuccessAction | addQuestionsAction | addQuestionsErrorAction | addAnswerSuccessAction | addAnswerAction | addAnswerErrorAction | addHelpfulAnswerSuccessAction | addHelpfulAnswerAction | addHelpfulAnswerErrorAction | addHelpfulQuestionSuccessAction | addHelpfulQuestionAction | addHelpfulQuestionErrorAction | resetQuestionAction | resetAnswerAction | reportAnswerAction | reportAnswerSuccessAction | reportAnswerErrorAction;

export default QuestionsActionTypes;