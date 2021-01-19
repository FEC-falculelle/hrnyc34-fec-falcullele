import React, {FC} from 'react';
import { Answer as AnswerType } from '../../../actions/questionAnswers/types';
import {
  Box,
  Typography,
} from '@material-ui/core';

interface AnswerProps {
  answerInfo: AnswerType,
}

const Answer: FC<AnswerProps> = ({ answerInfo }) => {
  return (
    <Box>
      <Typography variant="body1" component="p">
        {answerInfo.body}
      </Typography>
    </Box>
  );
};

export default Answer;