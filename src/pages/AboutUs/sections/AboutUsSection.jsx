import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/team.jpg';

// Contenedor principal de la sección
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 200px 100px 50px 100px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }
`;

// Estilos para el contenedor de texto
const TextContent = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Título de la sección
const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TitleCTO = styled.span`
  font-size: 1rem;
  font-style: normal;
  color: ${(props) => props.theme.colors.textSecondary};
  display: block;
  margin-top: 5px;
`;


// Estilos para el párrafo
const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 20px;
`;

// Firma (nombre del autor)
const Signature = styled.div`
  margin-top: 20px;
`;

const Name = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
`;

// Contenedor de la imagen con efectos profesionales
const ImageWrapper = styled.div`
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  img {
    max-width: 80%;
    height: auto;
    border-radius: 15px; /* Bordes redondeados */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transición suave */

    &:hover {
      transform: scale(1.05); /* Efecto de zoom suave al hacer hover */
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Sombra más profunda en hover */
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 30px;
    img {
      max-width: 100%;
    }
  }
`;

// Componente de redes sociales
const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    color: ${(props) => props.theme.colors.accent};
    margin-right: 20px;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const AboutUsSection = () => {
  return (
    <AboutSection>
      <TextContent>
        <Title>Quiénes Somos</Title>
        <Paragraph>
          DIGITAL DEVLAB inició como una empresa dedicada a la creación de soluciones tecnológicas a medida, desde el desarrollo de aplicaciones web hasta servicios de consultoría para PYMEs.
          Nuestra misión es proporcionar herramientas digitales de calidad que impacten positivamente a nuestros clientes.
        </Paragraph>
        <Paragraph>
          Con un equipo altamente capacitado, buscamos siempre innovar y estar a la vanguardia tecnológica, asegurando que cada solución esté diseñada para cumplir con las más altas expectativas de nuestros clientes.
        </Paragraph>
        <Signature>
          <Name>Alfonso Rodríguez</Name>
          <TitleCTO>CTO - Chief Technology Officer</TitleCTO>
        </Signature>
        {/* Redes sociales */}
        <SocialMediaWrapper>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </SocialMediaWrapper>
      </TextContent>
      <ImageWrapper>
        <img src={photo} alt="Equipo de Digital DevLab" />
      </ImageWrapper>
    </AboutSection>
  );
};

export default AboutUsSection;
