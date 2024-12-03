import React from 'react';

interface Image {
  name: string;
  url: string;
}

export const useHIVEImages = () => {
  const [images, setImages] = React.useState<Image[]>([]);

  React.useEffect(() => {
    const context = (require as any).context(
      '../../assets/images',
      false,
      /\.png$/
    );
    const imageArray: Image[] = context.keys().map((key: string) => {
      const name = key.replace('./', '').replace('.png', '');
      const url = context(key);
      return { name, url };
    });

    setImages(imageArray);
  }, []);

  return images;
};

export default useHIVEImages;