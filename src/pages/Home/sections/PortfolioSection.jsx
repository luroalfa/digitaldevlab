import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Typography, Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../../assets/background-digital-marketing.gif';
import Button from '../../../components/Button';
import TitleSection from '../../../components/TitleSection';
import ImageCarousel from '../../../components/ImageCarousel';

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

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 50%; // Para asegurarse de que no se desborde
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%; // Para asegurarse de que no se desborde
    margin-bottom: 20px;
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
const TextContent = styled.div`
  max-width: 50%;
  padding-left: 50px !important;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
    padding-left: 0px !important;
  }
`;

// Estilos para la llamada a la acción (CTA)
const CallToActionWrapper = styled.div`
  margin-top: 20px;
`;

const PortfolioSection = () => {
  const { t } = useTranslation();

  const features = [
    t('portfolioSection.listItems.item1'),
    t('portfolioSection.listItems.item2'),
    t('portfolioSection.listItems.item3'),
    t('portfolioSection.listItems.item4'),
    t('portfolioSection.listItems.item5'),
  ];

  const images = [
    { src: "https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio1.webp", alt: "Imagen 1" },
    { src: "https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio2.webp", alt: "Imagen 2" },
  ];

  return (
    <SectionWrapper>
      <Overlay />
      <ImageWrapper >
        <ImageCarousel images={images} direction="horizontal" />
      </ImageWrapper>
      <TextContent>
        <TitleSection titleText={t('portfolioSection.title')} isVisible={true} customColor="#ffffff" />
        <Typography.Title level={2} style={{ color: '#fff' }}>
          {t('portfolioSection.subTitle')}
        </Typography.Title>
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
    </SectionWrapper >
  );
};

export default PortfolioSection;
