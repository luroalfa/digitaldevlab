// ImageCarousel.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';

// Estilos para el contenedor del carrusel
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

const ImageCarousel = ({ images, direction = 'horizontal' }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <CarouselWrapper $isLoaded={isLoaded}>
            <Carousel
                arrows
                autoplay
                dotPosition={direction === 'horizontal' ? 'bottom' : 'left'} // Cambia la posición de los puntos según la dirección
                vertical={direction === 'vertical'} // Usa la prop vertical para determinar la dirección
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

export default ImageCarousel;
