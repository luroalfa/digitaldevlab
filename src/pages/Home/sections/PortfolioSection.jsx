import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { List, Typography, Carousel } from 'antd'; // Importamos List, Typography y Carousel de Ant Design
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../../assets/background-digital-marketing.gif';
import Button from '../../../components/Button';
import TitleSection from '../../../components/TitleSection';

// Estilos del contenedor principal con overlay
const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 50px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

// Capa de overlay
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: -1;
`;

// Estilos del contenedor de texto
const TextContent = styled(motion.div)`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 50px 0;
  }
`;

// Estilos para el carrusel de imágenes
const CarouselWrapper = styled.div`
  max-width: 50%;
  z-index: 2;
  .ant-carousel .slick-slide {
    text-align: center;
    // height: 400px;
    // line-height: 400px;
    background: #364d79;
    overflow: hidden; 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      height: auto;
      line-height: normal; 
    }
  
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

// Estilos para la llamada a la acción (CTA)
const CallToActionWrapper = styled.div`
  margin-top: 20px;
`;

const PortfolioSection = () => {
  const { t } = useTranslation();  // Hook para acceder a las traducciones
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // Ajusta el umbral de visibilidad
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  // Obtén la lista de características
  const features = [
    t('portfolioSection.listItems.item1'),
    t('portfolioSection.listItems.item2'),
    t('portfolioSection.listItems.item3'),
    t('portfolioSection.listItems.item4'),
    t('portfolioSection.listItems.item5'),
  ];

  return (
    <SectionWrapper ref={sectionRef}>
      <Overlay />
      {/* Reemplazamos la imagen estática por el carrusel */}
      <CarouselWrapper>
        <Carousel autoplay>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio1.png" alt="Imagen 1" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio2.png" alt="Imagen 2" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio3.png" alt="Imagen 3" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio4.png" alt="Imagen 4" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio5.png" alt="Imagen 5" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio6.png" alt="Imagen 6" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio7.png" alt="Imagen 7" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio8.png" alt="Imagen 8" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio9.png" alt="Imagen 9" />
          </div>
          <div>
            <img src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio10.png" alt="Imagen 10" />
          </div>
        </Carousel>
      </CarouselWrapper>
      <TextContent
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <TitleSection titleText={t('portfolioSection.title')} isVisible={true} customColor="#ffffff" />
        <Typography.Title level={2} style={{ color: '#fff' }}>
          {t('portfolioSection.subTitle')}
        </Typography.Title>

        {/* Usamos Ant Design List component */}
        <List
          bordered
          dataSource={features}
          renderItem={(feature) => (
            <List.Item style={{ color: '#fff', fontSize: '1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {feature}
            </List.Item>
          )}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.3)' }}
        />

        <CallToActionWrapper>
          <Button $customColor="#ffffff" $customTextColor="#000000" width="100%" height="35px">
            <span className="btn-text-one">{t('portfolioSection.ctaPrimary')}</span>
            <span className="btn-text-two">{t('portfolioSection.ctaSecondary')}</span>
          </Button>
        </CallToActionWrapper>
      </TextContent>
    </SectionWrapper>
  );
};

export default PortfolioSection;
