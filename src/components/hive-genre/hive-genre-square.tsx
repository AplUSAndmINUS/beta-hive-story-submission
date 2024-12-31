import React from 'react';

interface HIVEGenreSquareProps {
  imageName: string;
  imageURL: string;
  setGenreSelection: (genre: string) => void;
}

export const HIVEGenreSquare: React.FC<HIVEGenreSquareProps> = ({
  imageName,
  imageURL,
  setGenreSelection,
}) => {
  return (
    <div
      className='col-12 col-sm-6 col-md-4 col-lg-3'
      onClick={() => setGenreSelection(imageName)}
    >
      <div className='d-flex flex-column genre-square'>
        <img
          className='img-fluid genre-image'
          src={imageURL}
          alt={imageName}
          style={{ cursor: 'pointer' }}
        />
        <p className='fs-4 mb-4'>{imageName}</p>
      </div>
    </div>
  );
};

export default HIVEGenreSquare;
