import { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import PropTypes from 'prop-types'; 

const CarouselWrapper = styled.div`
  max-width: 100%;
  z-index: 2;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  .ant-carousel .slick-slide {
    text-align: center;
    background: #364d79;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

const ImageCarousel = ({ images, direction }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <CarouselWrapper $isLoaded={isLoaded}>
      <Carousel
        arrows
        autoplay
        dotPosition={direction === 'horizontal' ? 'bottom' : 'left'}
        vertical={direction === 'vertical'}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} onLoad={handleImageLoad} />
          </div>
        ))}
      </Carousel>
      {!isLoaded && <p>Cargando imágenes...</p>}
    </CarouselWrapper>
  );
};


ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string, 
    })
  ).isRequired, 
  direction: PropTypes.oneOf(['horizontal', 'vertical']), 
};


ImageCarousel.defaultProps = {
  direction: 'horizontal', 
};

export default ImageCarousel;
