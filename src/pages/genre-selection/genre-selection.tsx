import React from 'react';

import { useAppDispatch } from '../../stores/store';
import { setGenreSelection } from '../../stores/reducers/story-submission';
import HIVEGenreSquare from '../../components/hive-genre/hive-genre-square';
import useHIVEImages from '../../utils/hooks/useHIVEImages';
import useNavigation from '../../utils/hooks/useNavigation';

export const GenreSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const images = useHIVEImages();
  const navigate = useNavigation();

  const handleGenreSelection = (genre: string) => {
    dispatch(setGenreSelection(genre));
    navigate('Prompt Selection');
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2 mt-4'>Choose your HIVE</h1>
      </div>
      <div className='row'>
        {images.map((image, index) => (
          <HIVEGenreSquare
            key={image.name + index}
            imgFluid
            imageName={image.name.toLowerCase()}
            imageURL={image.url}
            setGenreSelection={handleGenreSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
