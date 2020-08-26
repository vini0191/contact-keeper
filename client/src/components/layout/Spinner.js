import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <img
    src={spinner}
    style={{ width: '200px', margin: 'auto', display: 'block' }}
    alt="loading"
  />
);

export default Spinner;