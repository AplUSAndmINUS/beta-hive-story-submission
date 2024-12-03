import React from 'react';

import HIVEGenreSquare from '../../components/hive-genre/hive-genre-square';
import useHIVEImages from '../../utils/hooks/useHIVEImages';

export const GenreSelection: React.FC = () => {
  const images = useHIVEImages();

  return (
    <div className='container-fluid'>
      <div className='row'>
        <p>Genre Selection</p>
      </div>
      <div className='row'>
        {images.map((image, index) => (
          <HIVEGenreSquare
            key={image.name + index}
            imageName={image.name}
            imageURL={image.url}
          />
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
