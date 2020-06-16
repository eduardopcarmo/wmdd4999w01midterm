import React from 'react';

import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  textfield: {
    width: '50ch',
  },
  select: {
    width: '25ch',
  },
}));

const SearchForm = (props) => {
  const {
    handleSearchInputChange,
    handleSearchTypeChange,
    fetchSearchContent,
  } = props;

  const classes = getStyles();


  return (
    <form noValidate className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className={classes.textfield}
        onChange={(event) => handleSearchInputChange(event.target.value)}
      />
      <FormControl variant="outlined" className={classes.select}>
        <InputLabel>Search Type</InputLabel>
        <Select
          label="Search Type"
          defaultValue="movie"
          onChange={(event) => handleSearchTypeChange(event.target.value)}
        >
          <MenuItem value="movie">movie</MenuItem>
          <MenuItem value="multi">multi</MenuItem>
          <MenuItem value="tv">tv</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={(event) => fetchSearchContent(event)}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
