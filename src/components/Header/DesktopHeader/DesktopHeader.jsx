import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import LogoDark from '../../../assets/logo-dark.svg';
import LogoLight from '../../../assets/logo-light.svg';
import ThemeSwitch from '../../ThemeSwitch';
import TopBar from './TopBar/TopBar';
import { Link, useLocation } from 'react-router-dom'; // Importamos useLocation para obtener la ruta actual
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

// Estilo del contenedor de navegación
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
`;

// Eliminamos isActive antes de que llegue al DOM usando desestructuración
const NavLink = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  color: ${(props) => (props.isActive ? props.theme.colors.secondary : props.theme.colors.accent)};
  text-decoration: none;
  padding: 10px 15px;
  border-bottom: ${(props) => (props.isActive ? `2px solid ${props.theme.colors.secondary}` : 'none')};
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;



// Contenedor para el logo
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

// Componente principal de la cabecera
const DesktopHeader = ({ toggleTheme, isDarkTheme }) => {
  const { t } = useTranslation(); // Hook de traducción
  const location = useLocation(); // Obtenemos la ruta actual
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
      <TopBar isVisible={isTopBarVisible} /> {/* Incluye el TopBar con visibilidad controlada */}
      <DesktopNav $isTopBarVisible={isTopBarVisible}>
        <LogoContainer>
          <img src={isDarkTheme ? LogoLight : LogoDark} alt="Digital DevLab Logo" />
          <h2>DIGITAL DEVLAB</h2>
        </LogoContainer>

        {/* Menú de navegación con resalte de la opción activa */}
        <ul>
          <li>
            <NavLink to="/" isActive={location.pathname === '/'}>
              {t('menu.home')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" isActive={location.pathname === '/services'}>
              {t('menu.services')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" isActive={location.pathname === '/about'}>
              {t('menu.about')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" isActive={location.pathname === '/contact'}>
              {t('menu.contact')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" isActive={location.pathname === '/blog'}>
              {t('menu.blog')}
            </NavLink>
          </li>
        </ul>

        {/* Cambio de tema y selector de idioma */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
          <ThemeSwitch toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
      </DesktopNav>
    </>
  );
};

export default DesktopHeader;
