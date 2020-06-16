import React from 'react';

import { Container } from '@material-ui/core';

import OnlyOneSelectForm from '../forms/OnlyOneSelectForm';
import DisplayResult from './DisplayResult';

const TvResult = (props) => {
  const { result, handleChange } = props;
  return (
    <Container maxWidth={false}>
      <OnlyOneSelectForm
        handleSearchTypeChange={handleChange}
        options={['airing_today', 'on_the_air', 'popular', 'top_rated']}
        defaultOption='popular'
      />
      {result != null ? <DisplayResult result={result} /> : null}
    </Container>
  );
};

export default TvResult;
