import React from 'react';
import styled, { keyframes } from 'styled-components';

// Definimos la animación de fadeIn si es necesario
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Estilizamos el título
const Title = styled.h2`
  color: ${(props) => props.customColor || props.theme.colors.accent};  // Si se pasa un color, lo usamos, si no, usamos el color del tema
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 10px;
  font-size: 2.5rem;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Componente TitleSection que acepta props
const TitleSection = ({ titleText, isVisible = true, customColor }) => {
  return (
    <Title $isVisible={isVisible} customColor={customColor}>
      {titleText}
    </Title>
  );
};

export default TitleSection;
