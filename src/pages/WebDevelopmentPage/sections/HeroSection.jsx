import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Estilos para el Hero con Parallax
const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;  /* Ocupa toda la pantalla */
  background-image: url('https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg'); /* Imagen de fondo */
  background-attachment: fixed;  /* Efecto Parallax */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// Capa oscura (overlay) para el texto
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);  /* Ajusta la opacidad según prefieras */
  z-index: 1;
`;

// Contenedor para el texto (título y descripción)
const Content = styled.div`
  position: relative;
  z-index: 2;  /* Aseguramos que el contenido esté por encima de la capa oscura */
  color: white;

  h1 {
    font-size: 4rem;
    color: white;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    color: white;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <HeroWrapper>
            <Overlay />
            <Content>
                <h1>{t('Desarrollo Web en Costa Rica')}</h1>
                <p>Haz realidad tus ideas digitales.</p>
                <p>{t('Somos una agencia de desarrollo web en Costa Rica especializada en la creación de sitios web a medida.')}</p>
            </Content>
        </HeroWrapper>
    );
};

export default HeroSection;
