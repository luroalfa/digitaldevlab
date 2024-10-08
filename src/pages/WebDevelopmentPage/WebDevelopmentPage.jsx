import React from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'antd'; // Importamos Breadcrumb de Ant Design
import WebDevelopmentPackages from './sections/WebDevelopmentPackages';

const WebDevWrapper = styled.section`
  padding: 50px 10%;
  margin-top: 130px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (max-width: 768px) {
    margin-top: 0px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 40px;
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


const BreadcrumbWrapper = styled.div`
  margin-bottom: 20px;
`;

const WebDevelopmentPage = () => {
  const { t } = useTranslation();

  return (
    <WebDevWrapper>
      {/* Breadcrumb Section */}
      <BreadcrumbWrapper>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">{t('Inicio')}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/services">{t('Servicios')}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{t('Desarrollo Web')}</Breadcrumb.Item>
        </Breadcrumb>
      </BreadcrumbWrapper>

      {/* Hero Section */}
      <HeroSection>
        <h1>{t('Desarrollo Web en Costa Rica')}</h1>
        <p>{t('Haz realidad tus ideas digitales. Somos una agencia de desarrollo web en Costa Rica especializada en la creación de sitios web a medida.')}</p>
        <img src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg" alt="Desarrollo Web" />
      </HeroSection>

      {/* Intro Section */}
      <IntroSection>
        <h2>{t('Lo que debes saber antes de comenzar')}</h2>
        <p>{t('Nuestro servicio de desarrollo web comienza con una consultoría detallada para entender las necesidades de tu negocio. Creamos experiencias únicas que capturan la esencia de tu marca y utilizamos tecnología avanzada para garantizar que tu sitio web sea rápido, seguro y escalable.')}</p>
        <p>{t('Además, ofrecemos un mantenimiento continuo para asegurar que tu plataforma esté siempre actualizada, optimizando su rendimiento y seguridad de forma constante. Cada cliente tiene un administrador de cuentas dedicado para proporcionar un servicio completo y personalizado.')}</p>
      </IntroSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <BenefitCard>
          <FaLaptopCode />
          <h3>{t('Diseño Responsivo')}</h3>
          <p>{t('Nos aseguramos de que tu sitio web sea completamente adaptable a cualquier dispositivo, proporcionando una excelente experiencia de usuario en móviles, tabletas y computadoras.')}</p>
        </BenefitCard>

        <BenefitCard>
          <FaMobileAlt />
          <h3>{t('Optimización para Móviles')}</h3>
          <p>{t('Tu sitio web estará optimizado para funcionar de forma rápida y fluida en dispositivos móviles, sin importar el tamaño de la pantalla.')}</p>
        </BenefitCard>

        <BenefitCard>
          <FaSearch />
          <h3>{t('Optimización SEO')}</h3>
          <p>{t('Implementamos las mejores prácticas de SEO para mejorar la visibilidad de tu sitio web en los motores de búsqueda y atraer más tráfico.')}</p>
        </BenefitCard>

        <BenefitCard>
          <FaLock />
          <h3>{t('Seguridad')}</h3>
          <p>{t('Tus datos y los de tus clientes están seguros con nosotros, implementamos las últimas medidas de seguridad en todos nuestros desarrollos.')}</p>
        </BenefitCard>
      </BenefitsSection>

      {/* Incorporando el componente WebDevelopmentPackages */}
      <WebDevelopmentPackages />


    </WebDevWrapper>
  );
};

export default WebDevelopmentPage;
