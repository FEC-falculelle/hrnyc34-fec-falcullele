import React, {FC} from 'react';
import Answer from './Answer';
import { Question as QuestionType } from '../../../actions/questionAnswers/types';
import {
  Box,
  Typography,
} from '@material-ui/core';

interface QuestionProps {
  questionInfo: QuestionType,
}

const Question: FC<QuestionProps> = ({ questionInfo }) => {
  return (
    <Box>
      <Typography variant="h5" component="h3">
        {`Q: ${questionInfo.question_body}`}
      </Typography>
      {Object.values(questionInfo.answers).map((answer) => (
        <Answer key={answer.id} answerInfo={answer} />
      ))}
    </Box>
  );
};

export default Question;