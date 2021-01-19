import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getQuestions from '../../../actions/questionAnswers/getQuestions';
import { RootState } from '../../../store/store';
import Question from './Question';
import SearchBar from './SearchBar';
import Buttons from './Buttons';



const Questions = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state: RootState) => state.qaReducer);

  useEffect(() => {
    dispatch(getQuestions(11001))
  }, []);
  return (
    <>
      <SearchBar/>
      {questions.map((question) => (
        <Question key={question.question_id} questionInfo={question}/>
      ))}
      <Buttons/>
    </>
  );
}

export default Questions;