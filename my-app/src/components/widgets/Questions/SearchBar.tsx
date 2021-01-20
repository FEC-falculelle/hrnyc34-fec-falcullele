import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputAdornment,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));


const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        type="search"
        variant="outlined"
        margin="dense"
        size="small"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}

export default SearchBar;
