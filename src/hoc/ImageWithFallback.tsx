import React, { useState } from 'react';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallbackSrc: string;
  className: string;
};

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, fallbackSrc, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} alt={alt} className={className} onError={handleError} />;
};

export default ImageWithFallback;
