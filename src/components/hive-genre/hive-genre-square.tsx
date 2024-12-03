import React from 'react';

export const HIVEGenreSquare: React.FC = () => {
  interface Image {
    name: string;
    url: string;
  }

  const [ images, setImages ] = React.useState<Image[]>([]);

  React.useEffect(() => {
    const context = (require as any).context(
      '../../assets/images',
      false,
      /\.png$/
    );
    context.keys().forEach((key: string) => {
      const name = key.replace('./', '').replace('.png', '');
      const url = context(key);
      images.push({ name, url });
    });

    setImages(images);
  }, [images]);

  return (
    <div className="d-flex flex-column">
      <img src={images[0]?.url} alt={images[0]?.name} />
      <p>Hive Genre</p>
    </div>
  );
}

export default HIVEGenreSquare;