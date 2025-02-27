import React from 'react';

import HIVEStoryCard from '../../components/story-card/story-card';
import useHIVEImages from '../../utils/hooks/useHIVEImages';

export const BetaHIVE: React.FC = () => {
  const logoPath = require('../../assets/images/logo/betaHIVE.png');
  const images = useHIVEImages();

  if (!images || images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='row d-flex justify-content-center align-items-center mt-4 pt-4 pb-4 w-50 h-50 m-auto'>
        <img src={logoPath} alt='Beta HIVE' className='w-100 h-100' />
      </div>
      <div className='row'>
        <h1 className='bd-title pb-2'>Welcome to the fiction Beta HIVE</h1>
        <p className='text-muted pb-2 mt-2 mb-5 fs-5'>
          Beta HIVE is a platform for writers to create, share, and vote on
          stories. We're currently in development and will be launching soon.
        </p>
      </div>
      <div className='row'>
        <h3 className='bd-subtitle pb-2 mt-5'>Check out the HIVE's newest stories!</h3>
      </div>
      <div className='row d-flex justify-content-center'>
        <HIVEStoryCard
          key={images[0].name.toLowerCase()}
          imageName={images[0].name.toLowerCase()}
          imageURL={images[0].url}
          imgFluid={false}
          isHover
          width='300'
          height='300'
          onClick={() => console.log('story')}
        />
        <HIVEStoryCard
          key={images[1].name.toLowerCase()}
          imageName={images[1].name.toLowerCase()}
          imageURL={images[1].url}
          imgFluid={false}
          isHover
          width='300'
          height='300'
          onClick={() => console.log('story')}
        />
        <HIVEStoryCard
          key={images[2].name.toLowerCase()}
          imageName={images[2].name.toLowerCase()}
          imageURL={images[2].url}
          imgFluid={false}
          isHover
          width='300'
          height='300'
          onClick={() => console.log('story')}
        />
        <HIVEStoryCard
          key={images[3].name.toLowerCase()}
          imageName={images[3].name.toLowerCase()}
          imageURL={images[3].url}
          imgFluid={false}
          isHover
          width='300'
          height='300'
          onClick={() => console.log('story')}
        />
      </div>
    </div>
  );
};

export default BetaHIVE;
