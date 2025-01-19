import React from 'react';

interface HIVEGenreSquareProps {
  imgFluid: boolean;
  imageName?: string;
  imageURL?: string;
  setGenreSelection: (genre: string) => void;
}

export const HIVEGenreSquare: React.FC<HIVEGenreSquareProps> = ({
  imgFluid,
  imageName = 'adventure',
  imageURL = '/static/media/adventure.0d10cc0c8c2a3c0643f3.png',
  setGenreSelection,
}) => {
  return (
    <div
      className='col-12 col-sm-6 col-md-4 col-lg-3'
      onClick={() => setGenreSelection(imageName)}
    >
      <div className='d-flex flex-column genre-square'>
        <img
          className={'genre-image img-fluid'}
          src={imageURL}
          alt={imageName}
          style={{ cursor: 'pointer' }}
          max-width='none'
        />
        <p className='fs-4 mb-4'>{imageName}</p>
      </div>
    </div>
  );
};

export default HIVEGenreSquare;
