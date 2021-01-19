import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewQuestion from './NewQuestion';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

export default function Buttons() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
      >
        MORE ANSWERED QUESTIONS
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        endIcon={<AddIcon>ADD A QUESTION</AddIcon>}
        onClick={handleClickOpen}
      >
        ADD A QUESTION
      </Button>
      <NewQuestion open={open} onClose={handleClose} />
    </div>
  );
}