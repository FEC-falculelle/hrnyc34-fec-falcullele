import { GET_QUESTIONS, GET_QUESTIONS_ERROR, GET_QUESTIONS_SUCCESS } from './actionTypesQA';

export interface Photo {
  id: number,
  url: string,
}

export interface Answer {
  id: number,
  body: string,
  date: string,
  answerer_name: string,
  helpfulness: number,
  photos: [{
    [id: string]: Photo,
  }]
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

type QuestionsActionTypes = getQuestionsAction | getQuestionsSuccessAction | getQuestionsErrorAction;

export default QuestionsActionTypes;