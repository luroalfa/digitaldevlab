import React from 'react';
import styled from 'styled-components';
import illustration from '../../../assets/team_collaboration.svg'; // Ruta de tu imagen

// Contenedor principal de la sección
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 100px;
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

// Estilos para el párrafo
const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 20px;
`;

// Firma (nombre del autor)
const Signature = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-top: 20px;
`;

// Contenedor para darle fondo o sombra a la imagen
const ImageWrapper = styled.div`
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Posición relativa para colocar la capa */

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); /* Capa oscura para mejorar el contraste */
    z-index: -1; /* Coloca la capa detrás de la imagen */
    border-radius: 10px; /* Asegura que el borde sea redondeado */
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Borde redondeado para la imagen */
  }

  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 30px;
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

const AboutUs = () => {
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
                <Signature>Luis Alfonso Rodríguez</Signature>
                {/* Redes sociales */}
                <SocialMediaWrapper>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </SocialMediaWrapper>
            </TextContent>
            <ImageWrapper>
                <img src={illustration} alt="Quiénes Somos" />
            </ImageWrapper>
        </AboutSection>
    );
};

export default AboutUs;
