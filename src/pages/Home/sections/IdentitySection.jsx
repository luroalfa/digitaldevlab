import React from 'react';
import styled from 'styled-components';
import { Carousel, List } from 'antd';
import TitleSection from '../../../components/TitleSection';
import Button from '../../../components/Button';

// Contenedor principal de la sección
const SectionWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 80px 20px;
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
  padding: 0 20px;

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
  max-width: 100%; // Para asegurarse de que no se desborde

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

// Botón de llamada a la acción
const CallToAction = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textOnAttention};
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
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

// Componente de Identidad Corporativa sin animaciones ni observer
const IdentitySection = () => {
  const benefits = [
    'Diseño de logos personalizados',
    'Manual de marca completo',
    'Colores y tipografía consistentes',
    'Tarjetas de presentación, papelería y más',
  ];

  return (
    <SectionWrapper>
      <TitleSection titleText="Identidad Corporativa" isVisible={true} />

      <ContentWrapper>
        {/* Imagen ilustrativa (carrusel) */}
        <ImageWrapper>
          <Carousel arrows dotPosition="left" vertical={true} autoplay style={{ width: '100%' }}>
            <div>
              <img
                src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio1.webp"
                alt="Ilustración de identidad corporativa"
                style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
              />
            </div>
            <div>
              <img
                src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Portfolio2.webp"
                alt="Ilustración de identidad corporativa"
                style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
              />
            </div>
          </Carousel>
        </ImageWrapper>
        {/* Contenido de texto */}
        <TextContent>
          <Description>
            La identidad corporativa es mucho más que solo un logo. Es la forma en la que tu empresa
            se presenta al mundo, define quién eres, cómo te comunicas y cómo te perciben tus
            clientes.
          </Description>
          <Description>
            Nuestro equipo te ayudará a construir una identidad que refleje tus valores y resuene con
            tu audiencia.
          </Description>
          <List
            header={<ListHeader>Beneficios de trabajar con nosotros:</ListHeader>}
            dataSource={benefits}
            renderItem={(item) => (
              <ListItem>{item}</ListItem>
            )}
          />
          <Button width="50%" height="35px">
            <span className="btn-text-one">Solicita tu consulta gratuita</span>
            <span className="btn-text-two">Ver más</span>
          </Button>
        </TextContent>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default IdentitySection;
