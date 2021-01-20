import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  makeStyles,
  Box,
} from '@material-ui/core';

interface NewQuestionProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(4, 6),
    backgroundColor: '#e4e7ed',
  },
  form: {
    width: '100%',
  },
  textField: {
    margin: theme.spacing(2, 0),
  },
}));

const NewQuestion = ({open, onClose}: NewQuestionProps) => {
  const classes = useStyles();
  const validationSchema = yup.object({
    question: yup
      .string()
      .max(1000, 'Question should be of maximum 1000 characters length')
      .required('Question is required'),
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
        question: '',
        email: '',
        nickname: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title" className={classes.title}>ASK YOUR QUESTION</DialogTitle>
      <DialogContent>
        <DialogContentText>
          About the ...Product Name Here...
        </DialogContentText>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            fullWidth
            id="question"
            label="Question"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.touched.question && Boolean(formik.errors.question)}
            helperText={(formik.touched.question && formik.errors.question) || (`${formik.values.question ? formik.values.question.length : 0} / 1000`)}
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
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewQuestion;
