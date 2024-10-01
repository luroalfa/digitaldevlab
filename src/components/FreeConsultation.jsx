import React from 'react';
import styled from 'styled-components';
import asesorImage from '../assets/img-webs.jpg'; // Cambia por la ruta de tu imagen

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 220px;
  background-color: ${(props) => props.theme.colors.primary}; 
  border-radius: 10px;

  @media (max-width: 1200px) {
    padding: 50px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.accent}; 
  font-family: ${(props) => props.theme.fonts.heading};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textPrimary}; 
  font-family: ${(props) => props.theme.fonts.body};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CallToAction = styled.a`
  background-color: ${(props) => props.theme.colors.secondary}; 
  color: ${(props) => props.theme.colors.textOnAttention};
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto; /* Ajusta la altura automáticamente */
    object-fit: cover; /* Mantiene el aspecto de la imagen */
    border-radius: 10px;
    max-height: 400px; /* Limita la altura máxima */
    width: auto; /* Asegura que el ancho sea proporcional */
  }

  @media (max-width: 768px) {
    img {
      max-width: 100%;
      max-height: 300px;
    }
  }
`;

const FreeConsultation = () => {
  return (
    <SectionWrapper>
      <TextContent>
        <Title>Asesoramiento en Desarrollo Web Gratis</Title>
        <Description>
          ¿Quieres llevar tu negocio al siguiente nivel? Nuestro equipo de expertos en desarrollo web está aquí para ayudarte.
          Te ofrecemos asesoramiento gratuito para crear una página web personalizada y funcional que se adapte a las necesidades de tu empresa.
          Optimiza tu presencia en línea y aumenta tu visibilidad con una plataforma moderna y profesional.
        </Description>
        <CallToAction href="/contacto">Solicita tu Asesoramiento Gratis</CallToAction>
      </TextContent>
      <ImageWrapper>
        <img src={asesorImage} alt="Asesoramiento en Desarrollo Web" />
      </ImageWrapper>
    </SectionWrapper>
  );
};

export default FreeConsultation;
