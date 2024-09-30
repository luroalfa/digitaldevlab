import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Badge } from 'antd';
import ServiceCard from '../../../components/ServiceCard';
import { Link } from 'react-router-dom';

// Animaciones keyframes
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Estilos para el contenedor de la sección
const SectionWrapper = styled.div`
  text-align: center;
  padding: 80px 20px;
  background-color: ${(props) => props.theme.colors.background};
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')}; /* Cambia isVisible por $isVisible */
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;

// Estilos para el título de la sección
const Title = styled.h2`
  color: ${(props) => props.theme.colors.accent}; 
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 10px;
  font-size: 2.5rem;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1s ease-out; /* Cambia isVisible por $isVisible */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Estilos para la descripción de la sección
const Description = styled.p`
  color: ${(props) => props.theme.colors.accent};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1.2s ease-out; /* Cambia isVisible por $isVisible */

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 20px;
  }
`;

// Estilos para el contenedor de los servicios
const ServicesGrid = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Animación de los cards al hacer hover
const ServiceCardWrapper = styled.div`
  animation: ${({ $isVisible }) => ($isVisible ? scaleUp : 'none')} 1.3s ease-out; /* Cambia isVisible por $isVisible */
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const BadgeRibbon = styled(Badge.Ribbon)`
  top: -10px;
  right: -10px;

  ${({ text }) => !text && `
    display: none;
  `}
`;

// Estilos para el botón de ver todos los servicios
const SeeAllServicesButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1.4s ease-out; /* Cambia isVisible por $isVisible */

  a {
    background-color: #00bfff;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: #008fbf;
      transform: translateY(-3px);
    }
  }
`;

const CTAWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1.5s ease-out; /* Cambia isVisible por $isVisible */

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.accent};
    margin-bottom: 10px;
  }

  a {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.primary};
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover {
      transform: translateY(-3%);
      box-shadow: 0 3px 10px rgba(207, 212, 222, 0.9);
    }
  }
`;

// Componente Services con animaciones al estar en pantalla
const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Se activa cuando el 10% del componente es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SectionWrapper ref={sectionRef} $isVisible={isVisible}>
      <Title $isVisible={isVisible}>Nuestros Servicios</Title>
      <Description $isVisible={isVisible}>
        Ofrecemos una selección de nuestros servicios más solicitados, diseñados a medida para impulsar tu negocio hacia el éxito tecnológico.
        Ya sea que necesites un sitio web personalizado, una app móvil eficiente o una consultoría tecnológica, estamos aquí para ayudarte a alcanzar
        nuevos niveles de eficiencia y crecimiento. Tu éxito es nuestra misión.
      </Description>

      <ServicesGrid>
        <ServiceCardWrapper $isVisible={isVisible}>
          <BadgeRibbon text="Oferta Especial" color="red">
            <ServiceCard
              title="Desarrollo Web Básico"
              description="Soluciones web personalizadas"
              benefits={["Diseño adaptable", "SEO básico", "Soporte limitado"]}
              buttonText="Ver planes web"
              link="/servicios/desarrollo-web-basico"
            />
          </BadgeRibbon>
        </ServiceCardWrapper>

        <ServiceCardWrapper $isVisible={isVisible}>
          <ServiceCard
            title="Páginas de enlaces"
            description="Centraliza todos tus enlaces"
            benefits={["Fácil gestión de enlaces", "Personalización", "Soporte técnico"]}
            buttonText="Gestiona tus enlaces"
            link="/servicios/paginas-de-enlaces"
          />
        </ServiceCardWrapper>

        <ServiceCardWrapper $isVisible={isVisible}>
          <ServiceCard
            title="Portafolio Digital"
            description="Muestra tu trabajo y habilidades en línea"
            benefits={["Diseño profesional", "Fácil de actualizar", "Optimizado para móviles"]}
            buttonText="Crea tu portafolio"
            link="/servicios/portafolio-digital"
          />
        </ServiceCardWrapper>
      </ServicesGrid>

      <CTAWrapper $isVisible={isVisible}>
        <p>¿No encontraste lo que buscas?</p>
        <SeeAllServicesButton $isVisible={isVisible}>
          <Link to="/servicios">Ver todos los servicios</Link>
        </SeeAllServicesButton>
      </CTAWrapper>
    </SectionWrapper>
  );
};

export default Services;
