import React from 'react';

import HIVEStoryCard from '../../../../shared/components/story-card/story-card';
import useHIVEImages from '../../../../shared/utils/hooks/useHIVEImages';

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
        <p className='text-muted pb-2 mt-2 mb-5 fs-5'>
          This is a platform for writers to create, share, and vote on stories.
          We're currently in development and will be launching soon.
        </p>
      </div>
      <div className='row'>
        <h3 className='bd-subtitle pb-2 mt-5'>
          Check out your HIVE's newest stories!
        </h3>
      </div>
      <div className='row d-flex justify-content-center'>
        <HIVEStoryCard
          key={images[0].name.toLowerCase()}
          imageName={images[0].name.toLowerCase()}
          imageURL={images[0].imgSource}
          imgFluid={false}
          isHover
          width='300'
          height='300'
          onClick={() => console.log('story')}
        />
        <HIVEStoryCard
          key={images[1].name.toLowerCase()}
          imageName={images[1].name.toLowerCase()}
          imageURL={images[1].imgSource}
          imgFluid={false}
          isHover
          width='300'
          height='300'
          onClick={() => console.log('story')}
        />
        <HIVEStoryCard
          key={images[2].name.toLowerCase()}
          imageName={images[2].name.toLowerCase()}
          imageURL={images[2].imgSource}
          imgFluid={false}
          isHover
          width='300'
          height='300'
          onClick={() => console.log('story')}
        />
        <HIVEStoryCard
          key={images[3].name.toLowerCase()}
          imageName={images[3].name.toLowerCase()}
          imageURL={images[3].imgSource}
          imgFluid={false}
          isHover
          width='300'
          height='300'
          onClick={() => console.log('story')}
        />
      </div>
      <div className='row'>
        <h3 className='bd-subtitle mb-2 mt-5'>How it works</h3>
        <p className='text-muted pb-2 mt-2 fs-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          purus et nunc fermentum aliquam. Nam nec turpis nec eros tincidunt.
        </p>
      </div>
    </div>
  );
};

export default BetaHIVE;
