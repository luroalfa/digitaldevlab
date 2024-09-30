import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 40px 20px;
  color: ${(props) => props.theme.colors.accent};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: auto; /* Esto asegura que el footer esté en la parte inferior de la página */
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

const Section = styled.div`
  flex: 1;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secondary};
  }

  p, a {
    color: ${(props) => props.theme.colors.accent};
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: ${(props) => props.theme.colors.accent};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
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

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <Section>
                    <h3>Contacto</h3>
                    <p><FaPhoneAlt /> Teléfono: +506 7003 1154</p>
                    <p><FaEnvelope /> Email: info@digitaldevlab.com</p>
                </Section>

                <Section>
                    <h3>Links Rápidos</h3>
                    <p><a href="#home">Inicio</a></p>
                    <p><a href="#services">Servicios</a></p>
                    <p><a href="#about">Acerca de</a></p>
                    <p><a href="#contact">Contacto</a></p>
                </Section>

                <Section>
                    <h3>Síguenos</h3>
                    <SocialIcons>
                        <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                    </SocialIcons>
                </Section>
            </FooterContent>

            <BottomDisclaimer>
                <p>&copy; {new Date().getFullYear()} Digital DevLab. Todos los derechos reservados.</p>
            </BottomDisclaimer>
        </FooterWrapper>
    );
};

export default Footer;
