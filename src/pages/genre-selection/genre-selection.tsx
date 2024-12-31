import React from 'react';

import { useAppDispatch, useAppSelector } from '../../stores/store';
import { setGenreSelection } from '../../stores/reducers/story-submission';
import HIVEGenreSquare from '../../components/hive-genre/hive-genre-square';
import useHIVEImages from '../../utils/hooks/useHIVEImages';
import useNavigation from '../../utils/hooks/useNavigation';

export const GenreSelection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { genreSelection } = useAppSelector((state) => state.storySubmission);
  const images = useHIVEImages();
  const navigate = useNavigation();

  const handleGenreSelection = (genre: string) => {
    dispatch(setGenreSelection(genre));
    navigate('/prompt-selection');
  };

  console.log(genreSelection);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2 mt-4'>Choose your HIVE</h1>
      </div>
      <div className='row'>
        {images.map((image, index) => (
          <HIVEGenreSquare
            key={image.name + index}
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
