import React from 'react';

import { Container } from '@material-ui/core';

import OnlyOneSelectForm from '../forms/OnlyOneSelectForm';
import DisplayResult from './DisplayResult';

const MoviesResult = (props) => {
  const { movieSearchType, handleMoviesChange, content } = props;
  return (
    <Container maxWidth={false}>
      <OnlyOneSelectForm
        handleSearchTypeChange={handleMoviesChange}
        options={['now_playing', 'popular', 'top_rated', 'upcoming']}
        defaultOption="popular"
      />
      {content != null ? <DisplayResult content={content} /> : null}
    </Container>
  );
};

export default MoviesResult;
