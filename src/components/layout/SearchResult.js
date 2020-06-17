import React from 'react';

import { Container, makeStyles } from '@material-ui/core';

import DisplayResult from './DisplayResult';

const getStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '5ch',
  },
  feedback: {
    textAlign: 'center',
    margin: '0',
    paddingBottom: '5ch',
  }
}));

const SearchResult = (props) => {
  const { searchQuery, result } = props;
  const classes = getStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      {searchQuery === '' ? (
        <h2 className={classes.feedback}>Please enter a search</h2>
      ) : searchQuery !== '' && result === null ? (
        <h2 className={classes.feedback}>Please initiate a search</h2>
      ) : searchQuery !== '' && result !== null && result.length === 0 ? (
        <h2 className={classes.feedback}>Sorry, there were no results</h2>
      ) : (
              <DisplayResult result={result} />
            )}
    </Container>
  );
};

export default SearchResult;
