import React from 'react';

import { Container } from '@material-ui/core';

import DisplayResult from './DisplayResult';

const SearchResult = (props) => {
  const { searchQuery, content } = props;
  return (
    <Container maxWidth={false}>
      {searchQuery === '' ? (
        <h2>Please enter a search</h2>
      ) : searchQuery !== '' && content === null ? (
        <h2>Please initiate a search</h2>
      ) : searchQuery !== '' && content !== null && content.length === 0 ? (
        <h2>Sorry, there were no results</h2>
      ) : (
        <DisplayResult content={content} />
      )}
    </Container>
  );
};

export default SearchResult;
