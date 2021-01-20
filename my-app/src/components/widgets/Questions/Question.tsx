import React, { useState } from 'react';
import Answer from './Answer';
import { Question as QuestionType } from '../../../actions/questionAnswers/types';
import {
  Box,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

interface QuestionProps {
  questionInfo: QuestionType;
}

const Question = ({ questionInfo }: QuestionProps) => {
  const [numShown, setNumShown] = useState(2);

  const loadMore = () => {
    setNumShown(numShown + 2);
  };

  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h6" component="h3" className={classes.boldText}>
        {`Q: ${questionInfo.question_body}`}
      </Typography>
      {Object.values(questionInfo.answers).slice(0, numShown).map((answer) => (
        <Answer key={answer.id} answerInfo={answer} />
      ))}
      {Object.values(questionInfo.answers).length > numShown && (
        <Button
          size="small"
          onClick={loadMore}
          classes={{
            label: classes.boldText,
          }}
        >
          LOAD MORE ANSWERS
        </Button>
      )}
    </Box>
  );
};

export default Question;
