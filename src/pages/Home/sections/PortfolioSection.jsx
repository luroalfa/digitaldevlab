import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { color, motion } from 'framer-motion';
import backgroundImage from '../../../assets/background-digital-marketing.gif';
import illustration from '../../../assets/rodriguezfallasluis.webp';
import Button from '../../../components/Button'
import TitleSection from '../../../components/TitleSection';

// Estilos del contenedor principal con overlay
const SectionWrapper = styled.section`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 50px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

// Capa de overlay
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); 
  z-index: -1;
`;

// Estilos del contenedor de texto
const TextContent = styled(motion.div)`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 50px 0;
  }
`;

// Estilos del subtítulo
const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Estilos de la lista
const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  
  li {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #fff;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Estilos para la imagen
const ImageWrapper = styled(motion.div)`
  max-width: 50%;
  img {
    max-width: 80%;
    height: auto;
    border-radius: 15px; /* Bordes redondeados */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones suaves */
    
    &:hover {
      transform: scale(1.05); /* Efecto de hover para aumentar ligeramente el tamaño */
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* Sombra más profunda en hover */
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

// Estilos del botón de llamada a la acción (CTA)
const CallToAction = styled(motion.a)`
  background-color: ${(props) => props.theme.colors.secondary}; 
  color: ${(props) => props.theme.colors.textOnAttention};
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 } // Ajusta el umbral de visibilidad
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

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  return (
    <SectionWrapper ref={sectionRef}>
      <Overlay /> {/* Overlay que oscurece el fondo */}
      <ImageWrapper
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <img src={illustration} alt="Ilustración de Portafolio Digital" />
      </ImageWrapper>
      <TextContent
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <TitleSection titleText="PORTAFOLIO DIGITAL" isVisible={true} customColor="#ffffff" />
        <SubTitle>¡Crea tu portafolio profesional en línea!</SubTitle>
        <List>
          <li>Diseño a medida</li>
          <li>Fácil de actualizar</li>
          <li>Optimizado para dispositivos móviles</li>
          <li>Funcionalidades personalizadas</li>
          <li>Mayor visibilidad profesional</li>
        </List>
        <Button width="100%" height="35px" className="animate__animated animate__bounceIn animate__delay-2s">
          <span className="btn-text-one">Solicita tu Asesoría Gratuita</span>
          <span className="btn-text-two">Ver Planes de Servicios</span>
        </Button>

      </TextContent>
    </SectionWrapper>
  );
};

export default PortfolioSection;
