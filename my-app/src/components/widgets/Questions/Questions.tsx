import React, { useEffect, useState, ChangeEvent } from 'react';
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
  const [searchString, setSearchString] = useState('');

  const loadMore = () => {
    setNumShown(numShown + 4);
  };

  useEffect(() => {
    dispatch(getQuestions(11001));
  }, []);

  useEffect(() => {
    setQuestionShown(questions);
  }, [questions]);

  const filterQuestions = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchString = e.target.value.toLowerCase();
    if (newSearchString.length >= 3) {
      const filteredQuestions: QuestionType[] = [];
      questions.forEach((question) => {
        if (question.question_body.toLowerCase().indexOf(newSearchString) !== -1) {
          filteredQuestions.push(question);
        } else {
          const answers: QuestionType['answers'] = {};
          Object.values(question.answers).forEach((answer) => {
            if (answer.body.toLowerCase().indexOf(newSearchString) !== -1) {
              answers[answer.id] = answer;
            }
          });
          if (Object.keys(answers).length) {
            filteredQuestions.push({
              ...question,
              answers,
            });
          }
        }
      });
      setQuestionShown(filteredQuestions);
      setSearchString(newSearchString);
    } else {
      setQuestionShown(questions);
      setSearchString('');
    }
  }

  return (
    <>
      <SearchBar onChange={filterQuestions}/>
      {questionShown.slice(0, numShown).map((question) => (
        <Question key={question.question_id} questionInfo={question} searchString={searchString}/>
      ))}
      <Buttons loadMore={loadMore} disableLoadMore={questions.length <= numShown} />
    </>
  );
}

export default Questions;
