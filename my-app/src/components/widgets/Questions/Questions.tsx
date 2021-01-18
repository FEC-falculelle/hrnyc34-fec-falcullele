import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getQuestions from '../../../actions/questionAnswers/getQuestions';
import { RootState } from '../../../store/store';
import Question from './Question';



const Questions = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state: RootState) => state.qaReducer);

  useEffect(() => {
    dispatch(getQuestions(11001))
  }, []);
  return (
    <>
      {questions.map((question) => (
        <Question key={question.question_id} questionInfo={question}/>
      ))}
    </>
  );
}

export default Questions;