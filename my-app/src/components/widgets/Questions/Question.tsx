import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Answer from './Answer';
import { Question as QuestionType } from '../../../actions/questionAnswers/types';
import NewAnswer from './NewAnswer';
import helpfulQuestion from '../../../actions/questionAnswers/helpfulQuestion';
import {
  Box,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import Highlighter from 'react-highlight-words';

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  button: {
    margin: theme.spacing(1),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  faintText: {
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 11,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  actionButton: {
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
    margin: theme.spacing(0,1),
    padding: 0,
    minWidth: 0,
  },
  questionContainer: {
    '& *': {
      letterSpacing: '0.04em',
    },
  }
}));

interface QuestionProps {
  questionInfo: QuestionType;
  searchString: string;
}

const Question = ({ questionInfo, searchString }: QuestionProps) => {
  const [numShown, setNumShown] = useState(2);
  const [helpfulness, setHelpfulness] = useState(false);

  const loadMore = () => {
    setNumShown(numShown + 2);
  };

  const dispatch = useDispatch();

  const handleHelpfulness = () => {
    dispatch(helpfulQuestion(questionInfo.question_id));
    setHelpfulness(true);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Box mt={1} className={classes.questionContainer}>
      <Box className={classes.header}>
        <Typography variant="body1" component="p" className={classes.boldText}>
          {'Q: '}
          <Highlighter
            searchWords={[searchString]}
            textToHighlight={questionInfo.question_body}
            autoEscape={true}
          />
        </Typography>
        <Box className={classes.flex}>
          <Typography className={classes.faintText}>
            {`Helpful? `}
          </Typography>
          <Button
            className={classes.actionButton}
            classes={{
              label: classes.faintText,
            }}
            disableRipple
            disableFocusRipple
            onClick={handleHelpfulness}
            disabled={helpfulness}
          >
            {helpfulness ? `Yes (${questionInfo.question_helpfulness + 1})` : `Yes (${questionInfo.question_helpfulness})`}
          </Button>
          <Typography className={classes.faintText}>
            {' |  '}
          </Typography>
          <Button
            className={classes.actionButton}
            classes={{
              label: classes.faintText,
            }}
            disableRipple
            disableFocusRipple
            onClick={handleClickOpen}
          >
            Add Answer
          </Button>
          <NewAnswer open={open} onClose={handleClose} question={questionInfo}/>
        </Box>
      </Box>
      {Object.values(questionInfo.answers).slice(0, numShown).map((answer) => (
        <Answer key={answer.id} answerInfo={answer} searchString={searchString}/>
      ))}
      {Object.values(questionInfo.answers).length > numShown && (
        <Button
          className={classes.button}
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
