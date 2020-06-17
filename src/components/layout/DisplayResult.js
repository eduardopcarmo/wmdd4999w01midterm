import React from 'react';

import DisplayContent from './DisplayContent';

const DisplayResult = (props) => {
  const { result } = props;
  return (
    <>
      {result.map((item, index) => {
        return <DisplayContent {...item} key={index} />;
      })}
    </>
  );
};

export default DisplayResult;
