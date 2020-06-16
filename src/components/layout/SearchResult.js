import React from 'react';

import { Container } from '@material-ui/core';

import DisplayResult from './DisplayResult';

const SearchResult = (props) => {
  const { searchQuery, result } = props;
  return (
    <Container maxWidth={false}>
      {searchQuery === '' ? (
        <h2>Please enter a search</h2>
      ) : searchQuery !== '' && result === null ? (
        <h2>Please initiate a search</h2>
      ) : searchQuery !== '' && result !== null && result.length === 0 ? (
        <h2>Sorry, there were no results</h2>
      ) : (
              <DisplayResult result={result} />
            )}
    </Container>
  );
};

export default SearchResult;
