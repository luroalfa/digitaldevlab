import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

// Estilo principal para el footer
const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 40px 20px;
  color: ${(props) => props.theme.colors.accent};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: auto; /* Para asegurarse que el footer esté en la parte inferior */
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Columna del logo y slogan
const LogoColumn = styled.div`
  flex: 1;
  margin: 20px;
  text-align: left;

  img {
    width: 150px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secondary};
  }

  p {
    color: ${(props) => props.theme.colors.accent};
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

// Información de contacto
const ContactColumn = styled.div`
  flex: 1;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secondary};
  }

  p {
    color: ${(props) => props.theme.colors.accent};
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const QuickLinksColumn = styled.div`
  flex: 1;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secondary};
  }

  a {
    display: block;
    color: ${(props) => props.theme.colors.accent};
    font-size: 0.9rem;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const SocialMediaColumn = styled.div`
  flex: 1;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secondary};
  }

  div {
    display: flex;
    gap: 15px;
    justify-content: center;

    a {
      color: ${(props) => props.theme.colors.accent};
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

const BottomDisclaimer = styled.div`
  margin-top: 30px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text};
  border-top: 1px solid ${(props) => props.theme.colors.accent};
  padding-top: 20px;
  width: 100%;
  max-width: 1200px;
  text-align: center;

  p {
    margin: 0;
  }
`;

// Componente principal del Footer
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoColumn>
          <img src="ruta-del-logo.png" alt="Logo Digital DevLab" />
          <h3>DIGITAL DEVLAB</h3>
          <p>Innovando tu futuro digital</p>
          <p><FaMapMarkerAlt /> Costa Rica</p>
        </LogoColumn>

        <ContactColumn>
          <h3>Contacto</h3>
          <p><FaPhoneAlt /> Teléfono Residencial: +506 2222 3333</p>
          <p><FaPhoneAlt /> Teléfono Móvil: +506 7003 1154</p>
          <p><FaEnvelope /> Email: info@digitaldevlab.com</p>
        </ContactColumn>

        <QuickLinksColumn>
          <h3>Links Rápidos</h3>
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#about">Acerca de</a>
          <a href="#contact">Contacto</a>
        </QuickLinksColumn>

        <SocialMediaColumn>
          <h3>Síguenos</h3>
          <div>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </SocialMediaColumn>
      </FooterContent>

      <BottomDisclaimer>
        <p>&copy; {new Date().getFullYear()} Digital DevLab. Todos los derechos reservados.</p>
      </BottomDisclaimer>
    </FooterWrapper>
  );
};

export default Footer;
