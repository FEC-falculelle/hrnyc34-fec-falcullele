import React, { useState } from 'react';
import { Answer as AnswerType } from '../../../actions/questionAnswers/types';
import {
  Box,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';

interface AnswerProps {
  answerInfo: AnswerType,
}

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  faintText1: {
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 12,
  },
  faintText2: {
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 11,
  },
  answerContainer: {
    display: 'flex',
  },
  answerContent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
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
  flex: {
    display: 'flex',
    alignItems: 'flex-start',
  },
}));

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Answer = ({ answerInfo }: AnswerProps) => {

  const [reported, setReported] = useState(false);

  const handleReport = () => {
    setReported(true);
  };

  const classes = useStyles();
  const d = new Date(answerInfo.date);

  return (
    <Box className={classes.answerContainer} >
      <Typography component="span" className={classes.boldText}>
        {'A: '}
      </Typography>
      <Box className={classes.answerContent}>
        <Typography variant="body1" component="p">
          {answerInfo.body}
        </Typography>
        <Box className={classes.flex}>
          <Typography component="p" className={classes.faintText1}>
            {`by ${answerInfo.answerer_name}, ${months[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}  |  Helpful? `}
          </Typography>
          <Button
            className={classes.actionButton}
            classes={{
              label: classes.faintText2,
            }}
            disableRipple
            disableFocusRipple
          >
            {`Yes (${answerInfo.helpfulness})`}
          </Button>
          <Typography className={classes.faintText1}>
            {' | '}
          </Typography>
          <Button
            className={classes.actionButton}
            classes={{
              label: classes.faintText2,
            }}
            disableRipple
            disableFocusRipple
            onClick={handleReport}
            disabled={reported}
          >
            {reported ? 'Reported' : 'Report'}
          </Button>
        </Box>
      </Box>
      <Typography variant="body1" component="p">
          {/* {answerInfo.photos} */}
        </Typography>
    </Box>
  );
};

export default Answer;
