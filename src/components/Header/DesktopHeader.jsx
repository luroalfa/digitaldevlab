import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import LogoDark from '../../assets/logo-dark.svg';
import LogoLight from '../../assets/logo-light.svg';
import ThemeSwitch from '../ThemeSwitch';
import TopBar from '../TopBar';

// Definir animación fadeInDown
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px); /* Comienza desde arriba */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Llega a su posición original */
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  top: ${({ $isTopBarVisible }) => ($isTopBarVisible ? '83px' : '0')}; /* Mueve el nav dependiendo de la visibilidad del TopBar */
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: top 0.3s ease;

  /* Aplicar animación de entrada */
  animation: ${fadeInDown} 0.8s ease-out;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.accent};
  }

  a {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: auto;
    margin-right: 10px;
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 2rem;
    color: ${(props) => props.theme.colors.accent};
    margin: 0;
  }
`;

const DesktopHeader = ({ toggleTheme, isDarkTheme }) => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTopBarVisible(false);
      } else {
        setIsTopBarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <TopBar isVisible={isTopBarVisible} /> {/* Incluye el temporizador */}
      <DesktopNav $isTopBarVisible={isTopBarVisible}>
        <LogoContainer>
          <img src={isDarkTheme ? LogoLight : LogoDark} alt="Digital DevLab Logo" />
          <h2>DIGITAL DEVLAB</h2>
        </LogoContainer>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <ThemeSwitch toggleTheme={toggleTheme} />
      </DesktopNav>
    </>
  );
};

export default DesktopHeader;
