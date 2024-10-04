// FooterStyles.js
import styled from 'styled-components';
import { FaFacebookF, FaMobileAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHome, FaServicestack, FaInfoCircle } from 'react-icons/fa';
import { LiaBlogSolid } from "react-icons/lia";

// Estilo principal para el footer
export const FooterWrapper = styled.footer`
  background: linear-gradient(to top left, #0A2540, #223243); 
  padding: 40px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: auto;
  position: relative;
  overflow: hidden; 
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Logo y slogan column
export const LogoColumn = styled.div`
  flex: 1;
  margin: 20px;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

// Contact information
export const ContactColumn = styled.div`
  flex: 1;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 0.9rem;
    text-decoration: none;
  }
`;

export const QuickLinksColumn = styled.div`
  flex: 1;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  a {
    display: flex; /* Para alinear el ícono y el texto */
    align-items: center; /* Centra el ícono verticalmente */
    font-size: 0.9rem;
    text-decoration: none;
    margin-bottom: 10px;
    color: white;
    justify-content: center;

    svg {
      margin-right: 8px; /* Espacio entre el ícono y el texto */
    }
  }
`;

export const SocialMediaColumn = styled.div`
  flex: 1;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    gap: 15px;
    justify-content: center;

    a {
      font-size: 1.5rem;
      transition: color 0.3s ease;
      color: white;
    }
  }
`;

export const BottomDisclaimer = styled.div`
  margin-top: 30px;
  font-size: 0.8rem;
  border-top: 1px solid white;
  padding-top: 20px;
  width: 100%;
  max-width: 1200px;
  text-align: center;

  p {
    margin: 0;
  }
`;

// Exporta los íconos para su uso en el Footer
export const Icons = {
  LiaBlogSolid,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaMobileAlt
};
