import React, { useState } from 'react';
import styled from 'styled-components';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSwitch from '../ThemeSwitch';

const MobileNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
`;

const HamburgerLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    height: 3em; /* Tamaño del SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: ${(props) => props.theme.colors.textBackground};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  input:checked + & .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content {
    background-color: ${(props) => props.theme.colors.background};
  }
  .ant-drawer-body {
    background-color: ${(props) => props.theme.colors.background} !important; /* Cambia esto al color deseado */
  }


  .ant-drawer-header {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textBackground};
    border-bottom: 1px solid ${(props) => props.theme.colors.accent};
  }

  .ant-drawer-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 20px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  li {
    margin: 10px 0;
  }

  a {
    color: ${(props) => props.theme.colors.accent};
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s ease;
    }
    `;

const Title = styled.h2`
    color: ${(props) => props.theme.colors.accent};
`;

const MobileHeader = ({ toggleTheme }) => {
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad del drawer

  const onClose = () => {
    setVisible(false); // Cerrar el drawer
  };

  return (
    <>
      <MobileNav>
        <Title >Digital DevLab</Title>
        <HamburgerLabel onClick={() => setVisible(!visible)}>
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </HamburgerLabel>
      </MobileNav>

      <StyledDrawer
        title="Menú"
        placement="right"
        closable={true}
        onClose={onClose}
        open={visible}
      >
        <div style={{ padding: '20px 0', display: 'flex', justifyContent: "space-between" }}> {/* Contenedor para los switches */}
          <ThemeSwitch toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
        <ul>
          <li><Link to="/" onClick={onClose}>Inicio</Link></li>
          <li><Link to="/services" onClick={onClose}>Servicios</Link></li>
          <li><Link to="/about" onClick={onClose}>Acerca de</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contacto</Link></li>
        </ul>
      </StyledDrawer>
    </>
  );
};

export default MobileHeader;
