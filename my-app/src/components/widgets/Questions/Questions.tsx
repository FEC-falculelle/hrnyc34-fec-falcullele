import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getQuestions from '../../../actions/questionAnswers/getQuestions';
import { RootState } from '../../../store/store';
import Question from './Question';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import { Question as QuestionType } from '../../../actions/questionAnswers/types';


const Questions = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state: RootState) => state.qaReducer);

  const [numShown, setNumShown] = useState(4);
  const [questionShown, setQuestionShown] = useState<QuestionType[]>([]);

  const loadMore = () => {
    setNumShown(numShown + 4);
  };

  useEffect(() => {
    dispatch(getQuestions(11001));
  }, []);

  useEffect(() => {
    setQuestionShown(questions);
  }, [questions]);

  // const filterQuestions = (e) => {
  //   const searchString = e.target.value;
  //   if (searchString >= 3) {
  //     setQuestionShown[questions.filter]
  //   }
  // }

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
