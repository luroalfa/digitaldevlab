import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BannerBackground from '../assets/Banner.png'; // Ruta de la imagen

// Estilos del contenedor del banner
const BannerWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 220px;
  background-image: url(${BannerBackground});
  background-size: cover;
  background-position: center;
  color: white;
  height: 300px; 
  
  @media (max-width: 768px) {
    padding: 50px;
    flex-direction: column;
    text-align: center;
    height: auto;
  }
`;

// Contenedor de información dentro del banner
const InfoContainer = styled(motion.div)`
  max-width: 500px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
  }

  .contact-info {
    margin-top: 10px;
    font-size: 1rem;
  }
`;

// Estilo del botón
const Button = styled(motion.button)`
  padding: 10px 20px;
  background-color: #00bfff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007fff;
  }
`;

const SupportBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Se puede activar si deseas reiniciar la animación
          }
        });
      },
      { threshold: 0.1 } // El componente debe estar al menos al 10% visible
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

  // Variantes de animación para la aparición
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  return (
    <BannerWrapper ref={sectionRef}>
      <InfoContainer
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <h2>Soporte 24/7</h2>
        <h3>Siempre disponibles para ayudarte</h3>
        <p className="contact-info">
          ¿Necesitas asistencia? Nuestro equipo está disponible las 24 horas, todos los días, para resolver tus dudas y ayudarte a tener éxito.
        </p>
        <Button
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Contáctanos Ahora
        </Button>
      </InfoContainer>
    </BannerWrapper>
  );
};

export default SupportBanner;
