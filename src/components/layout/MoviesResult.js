import React from 'react';

import { Container } from '@material-ui/core';

import OnlyOneSelectForm from '../forms/OnlyOneSelectForm';
import DisplayResult from './DisplayResult';

const MoviesResult = (props) => {
  const { result, handleChange } = props;
  return (
    <Container maxWidth={false}>
      <OnlyOneSelectForm
        handleSearchTypeChange={handleChange}
        options={['now_playing', 'popular', 'top_rated', 'upcoming']}
        defaultOption='popular'
      />
      {result != null ? <DisplayResult result={result} /> : null}
    </Container>
  );
};

export default MoviesResult;
