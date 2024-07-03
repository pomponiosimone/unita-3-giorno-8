import React from 'react';

function ImageGrid({ imageRange }) {
  const images = [];
  for (let i = imageRange[0]; i <= imageRange[1]; i++) {
    images.push(
      <div key={i} className="col mb-2 text-center px-1">
        <img className="img-fluid" src={`assets/${i}.png`} alt="movie picture" />
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {images}
    </div>
  );
}

export default ImageGrid;