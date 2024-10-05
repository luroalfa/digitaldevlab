import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import LogoDark from '../../../assets/logo-dark.svg';
import LogoLight from '../../../assets/logo-light.svg';
import ThemeSwitch from '../../ThemeSwitch';
import TopBar from './TopBar/TopBar';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../../Language/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation(); // Obtener la función de traducción
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
          <li><Link to="/">{t('menu.home')}</Link></li>
          <li><Link to="/services">{t('menu.services')}</Link></li>
          <li><Link to="/about">{t('menu.about')}</Link></li>
          <li><Link to="/contact">{t('menu.contact')}</Link></li>
          <li><Link to="/blog">{t('menu.blog')}</Link></li>
        </ul>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
          <ThemeSwitch toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
      </DesktopNav>
    </>
  );
};

export default DesktopHeader;
