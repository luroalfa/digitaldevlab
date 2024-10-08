import React from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaLock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import WebDevelopmentPackages from './sections/WebDevelopmentPackages';
import HeroSection from './sections/HeroSection';

const WebDevWrapper = styled.section`
  padding: 50px 10%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (max-width: 768px) {
    margin-top: 0px;
    flex-direction: column;
    align-items: center;
  }
`;


const IntroSection = styled.div`
  margin-bottom: 60px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 20px;
  }
`;

const BenefitsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BenefitCard = styled.div`
  width: 45%;
  margin-bottom: 20px;
  text-align: center;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WebDevelopmentPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />
      <WebDevWrapper>

        {/* Hero Section */}

        <IntroSection>
          <h2>{t('¿Por qué tu negocio necesita un sitio web profesional?')}</h2>
          <p>
            {t('Hoy en día, tener una presencia en línea no es solo una opción, es una necesidad para cualquier negocio que quiera destacar en un mercado cada vez más competitivo. Un sitio web bien diseñado es la herramienta clave para atraer más clientes, generar confianza y establecer una imagen sólida de tu marca en internet.')}
          </p>
          <p>
            {t('Nuestro equipo especializado en desarrollo web crea soluciones adaptadas a las necesidades de tu empresa, asegurándonos de que tu sitio web sea rápido, seguro, y totalmente optimizado para los motores de búsqueda (SEO). Además, brindamos un soporte continuo para que tu página siempre esté actualizada y funcionando al máximo rendimiento. ¡Aprovecha las oportunidades de crecimiento que te ofrece estar presente en el mundo digital!')}
          </p>
          <p>
            {t('Elige uno de nuestros paquetes de desarrollo web y da el siguiente paso para transformar tu negocio. Ya sea que necesites una página web básica o una solución avanzada con funcionalidades personalizadas, tenemos el paquete perfecto para ti.')}
          </p>
        </IntroSection>




        {/* Incorporando el componente WebDevelopmentPackages */}
        <WebDevelopmentPackages />


      </WebDevWrapper>
    </>
  );
};

export default WebDevelopmentPage;
