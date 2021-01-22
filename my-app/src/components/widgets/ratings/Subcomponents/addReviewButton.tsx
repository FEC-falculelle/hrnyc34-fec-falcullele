import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';

import {
    makeStyles,
    Button,
  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

  const useStyles = makeStyles((theme) => ({
    boldText: {
      fontWeight: theme.typography.fontWeightBold,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));


var AddReview = () => {
    const classes = useStyles();
    return (<span> 
        <Button
            variant="outlined"
            className={classes.button}
            endIcon={<AddIcon>ADD A REVIEW</AddIcon>}
            classes={{
                label: classes.boldText,
            }}
            > ADD A REVIEW
        </Button>
        </span>)
}

export default AddReview;