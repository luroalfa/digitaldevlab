import React from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaLink, FaSuitcase, FaUtensils, FaBullhorn, FaTools, FaMobileAlt, FaRobot } from 'react-icons/fa'; // Añadimos FaBullhorn para el servicio de Landing Page
import { Link } from 'react-router-dom'; // Importamos Link para redirigir dentro de la app

// Estilo para la sección descriptiva
const DescriptionSectionWrapper = styled.section`
  padding: 80px 10%;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    padding: 50px 5%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 50px;
`;

const ServicesListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas iguales */
  gap: 30px; /* Espacio entre las tarjetas */
  padding: 0 10%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas en pantallas medianas */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
    padding: 0 5%;
  }
`;

// Hacemos que toda la tarjeta sea clicable usando Link
const ServiceCard = styled(Link)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none; /* Evita subrayado en los links */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px); /* Efecto de elevar la tarjeta al pasar el mouse */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.accent};
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.accent};
    margin-bottom: 20px;
  }

  svg {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.accent};
    margin-bottom: 15px;
  }
`;

const ServicesDescriptionSection = () => {
  return (
    <DescriptionSectionWrapper>
      <Title>Servicios que Impulsan tu Negocio</Title>
      <Description>
        En Digital Dev Lab ofrecemos una gama de servicios diseñados para ayudar a tu empresa a destacarse en el mundo digital. Desde el desarrollo de sitios web personalizados hasta la creación de portafolios digitales y menús para restaurantes, cada uno de nuestros servicios está pensado para brindarte resultados excepcionales.
      </Description>

      {/* Lista de Servicios */}
      <ServicesListWrapper>
        <ServiceCard to="/services/web-development">
          <FaLaptopCode />
          <h3>Desarrollo Web</h3>
          <p>Creación de sitios web personalizados con diseño responsive, optimización SEO y tecnología avanzada para asegurar tu presencia en línea.</p>
        </ServiceCard>

        <ServiceCard to="/services/link-pages">
          <FaLink />
          <h3>Páginas de Enlaces</h3>
          <p>Centraliza todos tus enlaces en una sola página personalizada, ideal para influencers, marcas personales o pequeñas empresas.</p>
        </ServiceCard>

        <ServiceCard to="/services/digital-portfolio">
          <FaSuitcase />
          <h3>Portafolio Digital</h3>
          <p>Muestra tu trabajo con un portafolio digital profesional, diseñado para destacar y atraer a más clientes.</p>
        </ServiceCard>

        <ServiceCard to="/services/digital-menu">
          <FaUtensils />
          <h3>Menú Digital</h3>
          <p>Soluciones de menús digitales para restaurantes, fáciles de actualizar y optimizados para dispositivos móviles.</p>
        </ServiceCard>

        <ServiceCard to="/services/landing-page">
          <FaBullhorn />
          <h3>Landing Page</h3>
          <p>Desarrollamos Landing Pages efectivas para captar clientes potenciales y aumentar conversiones, personalizadas según tus necesidades.</p>
        </ServiceCard>

        <ServiceCard to="/services/web-maintenance">
          <FaTools />
          <h3>Mantenimiento Web</h3>
          <p>Mantenemos tu sitio web actualizado, seguro y funcionando correctamente. Ofrecemos actualizaciones regulares, monitoreo de seguridad y soporte técnico para garantizar el rendimiento óptimo de tu plataforma.</p>
        </ServiceCard>

        <ServiceCard to="/services/chatbot-development">
          <FaRobot />
          <h3>Creación de Chatbots</h3>
          <p>Implementamos chatbots inteligentes para automatizar la atención al cliente en tu sitio web o plataformas de mensajería como WhatsApp, Facebook Messenger, entre otros. Mejora la interacción con tus clientes las 24 horas del día.</p>
        </ServiceCard>

        <ServiceCard to="/services/mobile-app-development">
          <FaMobileAlt />
          <h3>Desarrollo de Aplicaciones Móviles</h3>
          <p>Creación de aplicaciones móviles nativas o híbridas para Android y iOS, utilizando tecnologías modernas como React Native o Flutter. Llevamos tus ideas a las manos de millones de usuarios móviles.</p>
        </ServiceCard>
      </ServicesListWrapper>
    </DescriptionSectionWrapper>
  );
};

export default ServicesDescriptionSection;
