import React from 'react';
import ImageGrid from './ImageGrid';

function Section({ title, imageRange }) {
  return (
    <div>
      <h4>{title}</h4>
      <ImageGrid imageRange={imageRange} />
    </div>
  );
}

export default Section;