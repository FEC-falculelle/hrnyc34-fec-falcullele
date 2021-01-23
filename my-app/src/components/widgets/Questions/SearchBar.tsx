import React, { ChangeEvent } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        type="search"
        variant="outlined"
        margin="dense"
        size="small"
        onChange={onChange}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
