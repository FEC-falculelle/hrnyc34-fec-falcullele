import React from 'react';
import { Answer as AnswerType } from '../../../actions/questionAnswers/types';
import {
  Box,
  Typography,
  makeStyles,
  useTheme,
} from '@material-ui/core';

interface AnswerProps {
  answerInfo: AnswerType,
}

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const Answer = ({ answerInfo }: AnswerProps) => {
  console.log(useTheme());
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="body1" component="p">
        <Typography component="span" className={classes.boldText}>
          {'A: '}
        </Typography>
        {answerInfo.body}
      </Typography>
    </Box>
  );
};

export default Answer;
