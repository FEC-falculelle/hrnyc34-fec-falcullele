import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getQuestions from '../../../actions/questionAnswers/getQuestions';
import { RootState } from '../../../store/store';
import Question from './Question';
import SearchBar from './SearchBar';
import Buttons from './Buttons';


const Questions = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state: RootState) => state.qaReducer);

  const [numShown, setNumShown] = useState(4);

  const loadMore = () => {
    setNumShown(numShown + 4);
  };

  useEffect(() => {
    dispatch(getQuestions(11001))
  }, []);

  return (
    <>
      <SearchBar/>
      {questions.slice(0, numShown).map((question) => (
        <Question key={question.question_id} questionInfo={question}/>
      ))}
      <Buttons loadMore={loadMore} disableLoadMore={questions.length <= numShown} />
    </>
  );
}

export default Questions;
