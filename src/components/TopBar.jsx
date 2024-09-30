import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Statistic, Button } from 'antd';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaTag } from 'react-icons/fa'; // Importar iconos
const { Countdown } = Statistic;

const getTimeUntilNovember = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  // Fecha para el 1 de noviembre del año actual
  let targetDate = new Date(currentYear, 10, 1); // Mes 10 es noviembre (meses en JS son 0-indexados)

  // Si ya ha pasado el 1 de noviembre este año, establecer la fecha para el próximo año
  if (now.getTime() > targetDate.getTime()) {
    targetDate = new Date(currentYear + 1, 10, 1); // 1 de noviembre del próximo año
  }

  return targetDate.getTime(); // Retorna el timestamp para el 1 de noviembre
};

const deadline = getTimeUntilNovember();

// Definir animaciones
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); /* Aparece desde arriba */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Posición final */
  }
`;

const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Zoom in */
  }
  100% {
    transform: scale(1); /* Zoom out */
  }
`;

const TopBarWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.attention};
  color: ${(props) => props.theme.colors.textOnAttention};
  padding: 10px 20px;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  transition: transform 0.3s ease;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')}; /* Usa $isVisible en lugar de isVisible */
  animation: ${fadeIn} 0.8s ease-in-out; /* Efecto de entrada para el TopBar */
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between; /* Distribuir el espacio entre los elementos */
  align-items: center;
  flex-wrap: nowrap;
  animation: ${fadeIn} 1.2s ease-in-out; /* Efecto de entrada para el contenido */
  
  /* Ajuste para pantallas pequeñas */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  white-space: nowrap; /* Evita el salto de línea en el texto */
  margin-right: 20px; /* Añade un espacio entre los elementos */
  animation: ${fadeIn} 1.5s ease-in-out; /* Efecto de entrada para la información de contacto */
  display: flex;
  gap: 15px;

  strong {
    font-weight: bold;
  }

  svg {
    margin-right: 5px;
  }
`;

const OfferSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  animation: ${fadeIn} 1.8s ease-in-out; /* Efecto de entrada para la sección de la oferta */

  strong {
    font-weight: bold;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  border: none;
  padding: 4px 12px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  text-decoration: none; /* Eliminar subrayado */

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none; /* Asegurarse de que también se mantenga sin subrayado en hover */
  }
`;

/* Estilos personalizados para el temporizador */
const StyledCountdown = styled(Countdown)`
  .ant-statistic-content-value {
    color: ${(props) => props.theme.colors.textOnAttention}; /* Ajusta el color del temporizador */
  }

  .ant-statistic-title {
    color: ${(props) => props.theme.colors.textOnAttention}; /* Ajusta el color del título */
  }
`;

const CountdownWrapper = styled.div`
  margin-left: 20px; /* Añade espacio a la izquierda del temporizador */
  animation: ${zoomInOut} 2s infinite ease-in-out; /* Animación de zoom para el temporizador */
`;

const TopBar = ({ isVisible }) => {
  const onFinish = () => {
    console.log('Temporizador finalizado');
  };

  return (
    <TopBarWrapper $isVisible={isVisible}> {/* Usa $isVisible para evitar que se pase al DOM */}
      <TopBarContent>
        {/* Información de contacto */}
        <ContactInfo>
          <div>
            <FaPhoneAlt /> <strong>Teléfono:</strong> <span>+506 7003 1154</span>
          </div>
          <div>
            <FaMapMarkerAlt /> <strong>Dirección:</strong> <span>Alajuela, Costa Rica</span>
          </div>
          <div>
            <FaEnvelope /> <strong>Email:</strong> <span>info@digitaldevlab.com</span>
          </div>
        </ContactInfo>

        {/* Sección de la oferta */}
        <OfferSection>
          <FaTag /> <strong>¡Aprovecha nuestra oferta especial en servicios de desarrollo web!</strong>
          <StyledButton href="#services">Ver servicios</StyledButton>

          {/* Temporizador */}
          <CountdownWrapper>
            <StyledCountdown
              title={<strong>La oferta termina en</strong>}
              value={deadline}
              onFinish={onFinish}
              format="D [días] HH:mm:ss"
            />
          </CountdownWrapper>
        </OfferSection>
      </TopBarContent>
    </TopBarWrapper >
  );
};

export default TopBar;
