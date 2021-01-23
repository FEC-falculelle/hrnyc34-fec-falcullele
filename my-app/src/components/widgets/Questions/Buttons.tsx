import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import NewQuestion from './NewQuestion';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

interface ButtonsProps {
  loadMore: () => void;
  disableLoadMore: boolean;
}

const Buttons = ({ loadMore, disableLoadMore }: ButtonsProps) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={loadMore}
        disabled={disableLoadMore}
        classes={{
          label: classes.boldText,
        }}
      >
        MORE ANSWERED QUESTIONS
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        endIcon={<AddIcon>ADD A QUESTION</AddIcon>}
        classes={{
          label: classes.boldText,
        }}
        onClick={handleClickOpen}
      >
        ADD A QUESTION
      </Button>
      <NewQuestion open={open} onClose={handleClose} />
    </div>
  );
};

export default Buttons;
