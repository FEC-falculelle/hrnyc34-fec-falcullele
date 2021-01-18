import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }:any) => (
  <div
    className={ `slide-arrow-${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);

export default Arrow