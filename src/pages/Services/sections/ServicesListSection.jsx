import React from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaLink, FaSuitcase, FaUtensils, FaBullhorn } from 'react-icons/fa'; // Añadimos FaBullhorn para el servicio de Landing Page
import { Link } from 'react-router-dom'; // Importamos Link para redirigir dentro de la app

const ServicesListWrapper = styled.section`
  padding: 80px 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    padding: 50px 10%;
    flex-direction: column;
  }
`;

// Hacemos que toda la tarjeta sea clicable usando Link
const ServiceCard = styled(Link)`
  width: 45%;
  margin-bottom: 40px;
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

  @media (max-width: 768px) {
    width: 100%;
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

const ServicesListSection = () => {
    return (
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

            {/* Nuevo servicio de Landing Page */}
            <ServiceCard to="/services/landing-page">
                <FaBullhorn />
                <h3>Landing Page</h3>
                <p>Desarrollamos Landing Pages efectivas para captar clientes potenciales y aumentar conversiones, personalizadas según tus necesidades.</p>
            </ServiceCard>
        </ServicesListWrapper>
    );
};

export default ServicesListSection;
