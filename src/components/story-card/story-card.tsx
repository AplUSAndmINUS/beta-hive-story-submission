import React from 'react';

interface HIVEStoryCardProps {
  imgFluid?: boolean;
  imageName?: string;
  imageURL?: string;
  isHover: boolean;
  onClick?: () => void;
  height?: string;
  width?: string;
}

export const HIVEStoryCard: React.FC<HIVEStoryCardProps> = ({
  imgFluid,
  imageName = 'adventure',
  imageURL = '/static/media/adventure.0d10cc0c8c2a3c0643f3.png',
  isHover = true,
  onClick,
  height,
  width,
}) => {
  return (
    <div
      className='col-12 col-sm-6 col-md-4 col-lg-3'
      onClick={onClick}
    >
      <div className='d-flex flex-column genre-square'>
        <img
          className={`${isHover && 'genre-image'} ${
            imgFluid ? 'img-fluid' : ''
          }`}
          src={imageURL}
          alt={imageName}
          style={{ cursor: `${isHover ? 'pointer' : 'auto'}` }}
          max-width='none'
          height={`${height} && ${height}`}
          width={`${width} && ${width}`}
        />
      </div>
    </div>
  );
};

export default HIVEStoryCard;
