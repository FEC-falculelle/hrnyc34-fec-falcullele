import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Answer as AnswerType } from '../../../actions/questionAnswers/types';
import reportAnswer from '../../../actions/questionAnswers/reportAnswer';
import helpfulAnswer from '../../../actions/questionAnswers/helpfulAnswer';
import {
  Box,
  Typography,
  makeStyles,
  Button,
  Modal,
} from '@material-ui/core';
import Highlighter from 'react-highlight-words';

interface AnswerProps {
  answerInfo: AnswerType;
  searchString: string;
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
  photoSize: {
    width: 60,
    height: 45,
    marginRight: theme.spacing(1),
    border: '1px solid black',
    borderRadius: 4,
  },
  modalPhotoSize: {
    width: '75vw',
    height: '45vw',
  },
  flexPhoto: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
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

const Answer = ({ answerInfo, searchString }: AnswerProps) => {

  const [reported, setReported] = useState(false);
  const [helpfulness, setHelpfulness] = useState(false);

  const dispatch = useDispatch();

  const handleReport = () => {
    dispatch(reportAnswer(answerInfo.id));
    setReported(true);
  };

  const handleHelpfulness = () => {
    dispatch(helpfulAnswer(answerInfo.id));
    setHelpfulness(true);
  }

  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleClick = (photoUrl: string) => () => {
    setModalImage(photoUrl);
  };

  const handleClose = () => {
    setModalImage(null);
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
          <Highlighter
            searchWords={[searchString]}
            textToHighlight={answerInfo.body}
            autoEscape={true}
          />
        </Typography>
        <Box className={classes.flex}>
          <Modal open={!!modalImage} onClose={handleClose}>
            <div onClick={handleClose} className={classes.flexPhoto}>
              {!!modalImage && <img className={classes.modalPhotoSize} src={modalImage} />}
            </div>
          </Modal>
          {answerInfo.photos.map((photo) => (
            <img
              className={classes.photoSize}
              src={photo}
              onClick={handleClick(photo)}
            />
          ))}
        </Box>
        <Box className={classes.flex}>
          <Typography component="p" className={classes.faintText1}>
            {/* <Typography component="span" >

            </Typography>
            {(answerInfo.answerer_name === 'Seller') ? } */}
            {`by ${answerInfo.answerer_name}, ${months[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}  |  Helpful? `}
          </Typography>
          <Button
            className={classes.actionButton}
            classes={{
              label: classes.faintText2,
            }}
            disableRipple
            disableFocusRipple
            onClick={handleHelpfulness}
            disabled={helpfulness}
          >
            {helpfulness ? `Yes (${answerInfo.helpfulness + 1})` : `Yes (${answerInfo.helpfulness})`}
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
    </Box>
  );
};

export default Answer;
