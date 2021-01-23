import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  makeStyles,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import addAnswer, { resetAnswerStatus } from '../../../actions/questionAnswers/addAnswer';
import { Question } from '../../../actions/questionAnswers/types';
import { DropzoneArea } from 'material-ui-dropzone';

interface NewQuestionProps {
  open: boolean;
  onClose: () => void;
  question: Question;
}

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(4, 6),
    backgroundColor: theme.palette.background.default,
  },
  form: {
    width: '100%',
  },
  textField: {
    margin: theme.spacing(2, 0),
  },
  submitImage: {
    margin: '20px 0px',
  },
  modal: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const NewAnswer = ({open, onClose, question}: NewQuestionProps) => {

  const dispatch = useDispatch();

  const product = useSelector((state: RootStore) => state.singleProduct.products);

  const addAnswerStatus = useSelector((state: RootStore) => state.qaReducer.addAnswerStatus);

  const classes = useStyles();

  const validationSchema = yup.object({
    answer: yup
      .string()
      .max(1000, 'Answer should be of maximum 1000 characters length')
      .required('Answer is required'),
    nickname: yup
      .string()
      .max(60, 'Nickname should be of maximum 60 characters length')
      .required('Nickname is required'),
    email: yup
      .string()
      .max(60, 'Email should be of maximum 60 characters length')
      .email('Enter a valid email')
      .required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      answer: '',
      email: '',
      nickname: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      closeAndReset();
      dispatch(addAnswer(question.question_id, {
        body: values.answer,
        name: values.nickname,
        email: values.email,
      }));
    },
  });

  const closeAndReset = () => {
    onClose();
    formik.resetForm();
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={closeAndReset}
        maxWidth="md"
        PaperProps={{
          className: classes.modal,
        }}
      >
        <DialogTitle id="form-dialog-title" className={classes.title}>SUBMIT YOUR ANSWER</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`${product.name} : ${question.question_body}`}
          </DialogContentText>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <TextField
              fullWidth
              id="answer"
              label="Answer"
              variant="outlined"
              onChange={formik.handleChange}
              error={formik.touched.answer && Boolean(formik.errors.answer)}
              helperText={(formik.touched.answer && formik.errors.answer) || (`${formik.values.answer ? formik.values.answer.length : 0} / 1000`)}
              className={classes.textField}
            />
            <TextField
              fullWidth
              id="nickname"
              name="nickname"
              label="Nickname - Example: jackson11"
              variant="outlined"
              onChange={formik.handleChange}
              error={formik.touched.nickname && Boolean(formik.errors.nickname)}
              helperText={(formik.touched.nickname && formik.errors.nickname) || ('For privacy reasons, do not use your full name or email address')}
              className={classes.textField}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={(formik.touched.email && formik.errors.email) || ('For authentication reasons, you will not be emailed')}
              className={classes.textField}
            />
            <DropzoneArea
              acceptedFiles={['image/*']}
              dropzoneText={"Drag and drop an image here or click"}
              filesLimit={5}
              onChange={(files) => console.log('Files:', files)}
            />
            <Button className={classes.submitImage} color="primary" variant="contained" fullWidth type="submit">
              Submit Answer
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={!!addAnswerStatus}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => dispatch(resetAnswerStatus())}
      >
        <Alert variant="filled" severity={addAnswerStatus || 'success'}>
          {addAnswerStatus === 'success' ? 'Answer was successfully submitted!' : 'ERROR: Answer was not submitted!'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewAnswer;