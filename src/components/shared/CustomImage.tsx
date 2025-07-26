import React, { useState } from 'react';

interface CustomImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  return (
    <div className={`image-container ${className}`}>
      {!isLoaded && !hasError && <div className="image-placeholder" />}
      {hasError ? (
        <div className="image-error">
          <i className="fas fa-image"></i>
          <p>Error al cargar la imagen</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={isLoaded ? 'loaded' : ''}
          onLoad={handleLoad}
          onError={handleError}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default CustomImage;
