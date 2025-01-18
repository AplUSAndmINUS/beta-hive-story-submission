import React from 'react';

interface HIVEGenreSquareProps {
  imgFluid?: boolean;
  imageName: string;
  imageURL: string;
  setGenreSelection: (genre: string) => void;
  height?: string;
  width?: string;
}

export const HIVEGenreSquare: React.FC<HIVEGenreSquareProps> = ({
  imgFluid,
  imageName,
  imageURL,
  setGenreSelection,
  height,
  width
}) => {
  return (
    <div
      className='col-12 col-sm-6 col-md-4 col-lg-3'
      onClick={() => setGenreSelection(imageName)}
    >
      <div className='d-flex flex-column genre-square'>
        <img
          className={`genre-image ${imgFluid ? 'img-fluid' : ''}`}
          src={imageURL}
          alt={imageName}
          style={{ cursor: 'pointer' }}
          max-width='none'
          height={`${height} && ${height}`}
          width={`${width} && ${width}`}
        />
        <p className='fs-4 mb-4'>{imageName}</p>
      </div>
    </div>
  );
};

export default HIVEGenreSquare;
