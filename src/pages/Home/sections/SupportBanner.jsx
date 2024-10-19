import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BannerBackground from '../../../assets/Banner.png';
import Button from '../../../components/Button';
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción
import { Rate } from 'antd'; // Importa el componente Rate

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

const SupportBanner = () => {
  const { t } = useTranslation(); // Inicializa el hook de traducción
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
        <Rate defaultValue={5} disabled style={{ color: 'yellow' }} />
        <h2>{t('supportBanner.title')}</h2>
        <h3>{t('supportBanner.subtitle')}</h3>
        <p className="contact-info">
          {t('supportBanner.contactInfo')}
        </p>
        {/* Componente de Rate con las 5 estrellas llenas */}
        <Button>
          <span className="btn-text-one">{t('supportBanner.ctaPrimary')}</span>
          <span className="btn-text-two">{t('supportBanner.ctaSecondary')}</span>
        </Button>
      </InfoContainer>
    </BannerWrapper>
  );
};

export default SupportBanner;
