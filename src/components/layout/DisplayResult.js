import React from 'react';

import { Container } from '@material-ui/core';

import DisplayContent from './DisplayContent';

const DisplayResult = (props) => {
  const { content } = props;
  return (
    <Container maxWidth={false}>
      {content.map((item, index) => {
        return <DisplayContent {...item} key={index} />;
      })}
    </Container>
  );
};

export default DisplayResult;
