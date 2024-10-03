// FloatingWhatsAppButtonStyles.js
import styled from 'styled-components';
import { IoLogoWhatsapp } from 'react-icons/io';

// Estilos generales para el botón de WhatsApp
export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: breathe 2s ease-in-out infinite;
  text-decoration: none;
  cursor: pointer;
`;

// Estilos específicos para el icono de WhatsApp
export const WhatsAppIcon = styled(IoLogoWhatsapp)`
  color: #fff;
  font-size: 24px;
  animation: beat 2s ease-in-out infinite;
`;

// Animaciones para el botón
export const StyledComponents = styled.div`
  @keyframes breathe {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
