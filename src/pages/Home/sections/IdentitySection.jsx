import React from 'react';
import styled from 'styled-components';
import TitleSection from '../../../components/TitleSection';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';
import { List } from 'antd';
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción

// Contenedor principal de la sección
const SectionWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 80px 200px;
  text-align: center;
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`;

// Contenedor de la sección de contenido
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

// Contenedor de texto
const TextContent = styled.div`
  flex: 1;
  padding: 50px 20px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    flex: none;
  }
`;

// Párrafo de descripción
const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

// Imagen ilustrativa
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

const ListHeader = styled.div`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ListItem = styled(List.Item)`
  color: ${(props) => props.theme.colors.accent} !important; // Color del texto basado en el tema
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Componente de Identidad Corporativa con soporte de idiomas
const IdentitySection = () => {
  const { t } = useTranslation(); // Inicializa el hook de traducción

  const images = [
    { src: "https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio1.webp", alt: t('identitySection.images.alt1') },
    { src: "https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio2.webp", alt: t('identitySection.images.alt2') },
  ];

  return (
    <SectionWrapper>
      <TitleSection titleText={t('identitySection.title')} isVisible={true} />

      <ContentWrapper>
        {/* Imagen ilustrativa (carrusel) */}
        <ImageWrapper>
          <ImageCarousel images={images} direction="vertical" />
        </ImageWrapper>
        {/* Contenido de texto */}
        <TextContent>
          <Description>
            {t('identitySection.description1')}
          </Description>
          <Description>
            {t('identitySection.description2')}
          </Description>
          <Button width="50%" height="35px">
            <span className="btn-text-one">{t('identitySection.ctaPrimary')}</span>
            <span className="btn-text-two">{t('identitySection.ctaSecondary')}</span>
          </Button>
        </TextContent>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default IdentitySection;
