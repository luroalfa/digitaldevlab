import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';  // Íconos de barra y cerrar

const MobileNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  
  .menu-icon {
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
`;

const MobileMenu = styled.ul`
  list-style: none;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  padding-top: 20px;
  gap: 20px;
  
  li {
    font-size: 1.5rem;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <MobileNav>
                <h1>Digital DevLab</h1>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </MobileNav>
            <MobileMenu open={isOpen}>
                <li><a href="#home" onClick={toggleMenu}>Inicio</a></li>
                <li><a href="#services" onClick={toggleMenu}>Servicios</a></li>
                <li><a href="#about" onClick={toggleMenu}>Acerca de</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
            </MobileMenu>
        </>
    );
};

export default MobileHeader;
