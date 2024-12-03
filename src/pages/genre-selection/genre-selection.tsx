import React from 'react';

import HIVEGenreSquare from '../../components/hive-genre/hive-genre-square';

export const GenreSelection: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      <p>Genre Selection</p>
      <HIVEGenreSquare />
    </div>
  );
};

export default GenreSelection;
