import React from 'react';

interface HIVEGenreSquareProps {
  imageName: string;
  imageURL: string;
}

export const HIVEGenreSquare: React.FC<HIVEGenreSquareProps> = ({
  imageName,
  imageURL,
}) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
      <div className='d-flex flex-column'>
        <img className='img-fluid' src={imageURL} alt={imageName} />
        <p>{imageName}</p>
      </div>
    </div>
  );
};

export default HIVEGenreSquare;
