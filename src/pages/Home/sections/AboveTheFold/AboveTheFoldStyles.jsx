import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Keyframes para la animación de pulsación (zoom in y zoom out continuo)
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05); /* Aumenta un poco el tamaño */
  }
  100% {
    transform: scale(1);
  }
`;

export const AboveTheFoldSection = styled.section`
  height: calc(100vh - 105px);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background-color: ${(props) =>
    props.theme.colors.primary}; /* Fondo de color sólido */
  color: ${(props) => props.theme.colors.accent};
  text-align: left;
  overflow: hidden;

  /* Círculos decorativos en el fondo */
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    z-index: 0;
  }

  &::before {
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      ${(props) => props.theme.colors.secondary},
      transparent
    );
    top: -100px;
    left: -100px;
    border: 4px solid ${(props) => props.theme.colors.accent};
  }

  &::after {
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      ${(props) => props.theme.colors.background},
      transparent
    );
    bottom: -150px;
    right: -150px;
    border: 3px solid ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    height: 100vh;
    margin-top: 40px;
    flex-direction: column;
    text-align: center;

    &::before {
      width: 400px;
      height: 400px;
      top: -50px;
      left: -50px;
    }

    &::after {
      width: 200px;
      height: 200px;
      bottom: -100px;
      right: -100px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 600px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    align-items: center;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    color: ${(props) => props.theme.colors.accent};

    span {
      font-family: ${(props) => props.theme.fonts.heading};
      font-size: 3.5rem;
      color: ${(props) => props.theme.colors.secondary}; /* Color destacado */
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    color: ${(props) => props.theme.colors.accent};
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

// El contenedor de la ilustración solo tendrá el efecto de pulsación continuo
export const IllustrationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  max-width: 400px;
  position: relative;
  z-index: 1;
  animation: ${pulse} 3s ease-in-out infinite; /* Efecto continuo de zoom in y out */

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;

  svg {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const LearnMoreLink = styled(Link)`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: underline;
  }
`;
