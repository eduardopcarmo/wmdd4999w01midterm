import React from 'react';

import { Container } from '@material-ui/core';

import OnlyOneSelectForm from '../forms/OnlyOneSelectForm';
import DisplayResult from './DisplayResult';

const TvResult = (props) => {
  const { tvSearchType, handleTVChange, content } = props;
  return (
    <Container maxWidth={false}>
      <OnlyOneSelectForm
        handleSearchTypeChange={handleTVChange}
        options={['airing_today', 'on_the_air', 'popular', 'top_rated']}
        defaultOption="popular"
      />
      {content != null ? <DisplayResult content={content} /> : null}
    </Container>
  );
};

export default TvResult;
