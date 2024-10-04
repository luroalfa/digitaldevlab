import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Importamos motion para las animaciones
import identityIllustration from '../../../assets/Metakrivia.png'; // Ajusta la ruta de tu ilustración
import TitleSection from '../../../components/TitleSection';

// Contenedor principal de la sección
const SectionWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 80px 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`;

// Contenedor de la sección de contenido
const ContentWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

// Contenedor de texto
const TextContent = styled(motion.div)`
  flex: 1;
  padding: 0 20px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
  }
`;

// Párrafo de descripción
const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Lista de beneficios
const BenefitsList = styled(motion.ul)`
  list-style-type: disc;
  margin: 20px 0;
  padding-left: 20px;
  text-align: left;

  @media (max-width: 768px) {
    padding-left: 10px;
    text-align: center;
  }

  li {
    font-size: 1.1rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

// Imagen ilustrativa
const ImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 80%;
    height: auto;
    border-radius: 15px; /* Bordes redondeados */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Sombra suave */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05); /* Aumentar ligeramente el tamaño al pasar el mouse */
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25); /* Sombra más profunda */
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

// Botón de llamada a la acción
const CallToAction = styled(motion.a)`
  display: inline-block;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textOnAttention};
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

// Componente de Identidad Corporativa con animaciones y responsive
const IdentitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Usamos IntersectionObserver para detectar cuando el componente entra en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Desconectar después de la primera vez
          }
        });
      },
      { threshold: 0.1 }
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

  // Variantes de animación para framer-motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
  };

  return (
    <SectionWrapper ref={sectionRef}>
      <TitleSection titleText="Identidad Corporativa" isVisible={true} initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={fadeInVariants} />

      <ContentWrapper
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        {/* Imagen ilustrativa */}
        <ImageWrapper>
          <img src={identityIllustration} alt="Ilustración de identidad corporativa" />
        </ImageWrapper>
        {/* Contenido de texto */}
        <TextContent>
          <Description>
            La identidad corporativa es mucho más que solo un logo. Es la forma en la que tu empresa
            se presenta al mundo, define quién eres, cómo te comunicas y cómo te perciben tus
            clientes.
          </Description>
          <Description>
            Nuestro equipo te ayudará a construir una identidad que refleje tus valores y resuene con
            tu audiencia.
          </Description>
          <BenefitsList>
            <li>Diseño de logos personalizados</li>
            <li>Manual de marca completo</li>
            <li>Colores y tipografía consistentes</li>
            <li>Tarjetas de presentación, papelería y más</li>
          </BenefitsList>
          <CallToAction href="/contacto">Solicita tu consulta gratuita</CallToAction>
        </TextContent>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default IdentitySection;
