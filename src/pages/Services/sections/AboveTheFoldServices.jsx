import { Carousel } from 'antd';
import styled, { keyframes } from 'styled-components';
import ImgSlide1 from '../../../assets/bg1.jpg'; // Cambia esta ruta por las imágenes correspondientes a cada servicio
import ImgSlide2 from '../../../assets/slider02abovethefoldsection.jpg'; // Cambia esta ruta por las imágenes correspondientes a cada servicio
import ImgSlideDigitalMenu from '../../../assets/sliderDigitalMenuabovethefoldsection.jpg'; // Cambia esta ruta por las imágenes correspondientes a cada servicio
import ImgSlideDigitalPortfolio from '../../../assets/sliderDigitalPortfolioabovethefoldsection.jpg'; // Cambia esta ruta por las imágenes correspondientes a cada servicio
import { useMediaQuery } from 'react-responsive';
import TitleSection from '../../../components/TitleSection';

// Animación de fade-in para el contenido del slide
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Estilo para la sección del carousel adaptada
const FullScreenCarouselWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.background};
  overflow: hidden;
`;

// Contenedor de cada slide, usando una "transient prop" ($bgImage)
const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${(props) => props.$bgImage}) no-repeat center center/cover;
`;

// Contenido del slide con animación fade-in
const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  color: #fff;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6); 
  border-radius: 10px;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Título del slide con efecto de sombra y tamaño ajustado
const SlideTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Texto del slide
const SlideText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  max-width: 800px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

// Animación de pulsación para el CTA (ajustada)
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05); /* Aumenta el tamaño en el centro del ciclo */
  }
  100% {
    transform: scale(1);
  }
`;
// Botón de llamada a la acción (CTA)
const CTAButton = styled.a`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulse} 2.5s infinite ease-in-out; /* Pulsación más suave */
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}; 
    color: ${({ theme }) => theme.colors.accent};
  }


@media(max - width: 768px) {
    padding: 10px 20px;
    font - size: 1rem;
}
`;

const FullScreenCarousel = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <FullScreenCarouselWrapper>
            <Carousel arrows dotPosition={isMobile ? 'left' : 'bottom'} effect="fade" autoplay>
                {/* Slide 1: Desarrollo Web */}
                <div>
                    <SlideContainer $bgImage={ImgSlide1}>
                        <SlideContent>
                            <TitleSection titleText="Desarrollo Web" customColor="#ffffff" />
                            <SlideText>
                                Desarrollamos aplicaciones web personalizadas y escalables, optimizadas para todos los dispositivos con SEO avanzado y soporte continuo.
                            </SlideText>
                            <CTAButton href="services/web-development">Descubre Más</CTAButton>
                        </SlideContent>
                    </SlideContainer>
                </div>

                {/* Slide 2: Páginas de Enlaces */}
                <div>
                    <SlideContainer $bgImage={ImgSlide2}>
                        <SlideContent>
                            <TitleSection titleText="Páginas de Enlaces" customColor="#ffffff" />
                            <SlideText>
                                Gestiona todos tus enlaces en un solo lugar. Ideal para influencers, marcas y profesionales que buscan centralizar su presencia online.
                            </SlideText>
                            <CTAButton href="/paginas-enlaces">Gestiona Tus Enlaces</CTAButton>
                        </SlideContent>
                    </SlideContainer>
                </div>

                {/* Slide 3: Portafolio Digital */}
                <div>
                    <SlideContainer $bgImage={ImgSlideDigitalPortfolio}>
                        <SlideContent>
                            <TitleSection titleText="Portafolio Digital" customColor="#ffffff" />
                            <SlideText>
                                Presenta tus proyectos de forma profesional con un portafolio digital personalizado, fácil de actualizar y optimizado para móviles.
                            </SlideText>
                            <CTAButton href="/portafolio-digital">Crea Tu Portafolio</CTAButton>
                        </SlideContent>
                    </SlideContainer>
                </div>

                {/* Slide 4: Menú Digital */}
                <div>
                    <SlideContainer $bgImage={ImgSlideDigitalMenu}>
                        <SlideContent>
                            <TitleSection titleText="Menú Digital" customColor="#ffffff" />
                            <SlideText>
                                Digitaliza tu restaurante con un menú interactivo que se adapta a dispositivos móviles. Actualiza tus platos y precios fácilmente.
                            </SlideText>
                            <CTAButton href="/menu-digital">Crea Tu Menú</CTAButton>
                        </SlideContent>
                    </SlideContainer>
                </div>
            </Carousel>
        </FullScreenCarouselWrapper>
    );
};

export default FullScreenCarousel;
