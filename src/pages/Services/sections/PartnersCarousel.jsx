import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Contenedor principal de la sección del carrusel de socios/clientes
const PartnersCarouselWrapper = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.primary}; /* Color de fondo */
  text-align: center;
`;

// Contenedor de los logos con el efecto de desplazamiento
const CarouselTrack = styled.div`
  display: flex;
  align-items: center;
  animation: ${scroll} 30s linear infinite; /* Animación de desplazamiento continuo */
`;

// Estilo para cada logo de los socios/clientes
const PartnerLogo = styled.img`
  max-width: 150px;
  max-height: 100px;
  margin: 0 20px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0); /* Elimina el filtro gris cuando el logo se pasa el mouse */
  }
`;

const PartnersCarousel = () => {
    const { t } = useTranslation();

    return (
        <PartnersCarouselWrapper>
            <h2>Nuestros Socios y Clientes</h2>
            <p>Trabajamos con empresas líderes en sus industrias</p>

            <div style={{ overflow: 'hidden', width: '100%' }}>
                <CarouselTrack>
                    <PartnerLogo src="https://logo.clearbit.com/apple.com" alt="Apple" />
                    <PartnerLogo src="https://logo.clearbit.com/google.com" alt="Google" />
                    <PartnerLogo src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" />
                    <PartnerLogo src="https://logo.clearbit.com/amazon.com" alt="Amazon" />
                    <PartnerLogo src="https://logo.clearbit.com/facebook.com" alt="Facebook" />
                    <PartnerLogo src="https://logo.clearbit.com/spotify.com" alt="Spotify" />
                    {/* Repite los logos para lograr un bucle infinito */}
                    <PartnerLogo src="https://logo.clearbit.com/apple.com" alt="Apple" />
                    <PartnerLogo src="https://logo.clearbit.com/google.com" alt="Google" />
                    <PartnerLogo src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" />
                    <PartnerLogo src="https://logo.clearbit.com/amazon.com" alt="Amazon" />
                    <PartnerLogo src="https://logo.clearbit.com/facebook.com" alt="Facebook" />
                    <PartnerLogo src="https://logo.clearbit.com/spotify.com" alt="Spotify" />
                </CarouselTrack>
            </div>
        </PartnersCarouselWrapper>
    );
};

export default PartnersCarousel;
