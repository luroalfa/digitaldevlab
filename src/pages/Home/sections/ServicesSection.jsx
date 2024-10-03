import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Badge } from 'antd';
import ServiceCard from '../../../components/ServiceCard';
import Button from '../../../components/Button';
import { useTranslation } from 'react-i18next'; // Importa el hook

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
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.accent};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 10px;
  font-size: 2.5rem;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.accent};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1.2s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 20px;
  }
`;

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

const ServiceCardWrapper = styled.div`
  animation: ${({ $isVisible }) => ($isVisible ? scaleUp : 'none')} 1.3s ease-out; 
  transition: transform 0.5s ease, box-shadow 0.5s ease;
`;

const BadgeRibbon = styled(Badge.Ribbon)`
  top: -10px;
  right: -10px;

  ${({ text }) => !text && `
    display: none;
  `}
`;

const CTAWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1.5s ease-out;

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

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
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

  return (
    <SectionWrapper ref={sectionRef} $isVisible={isVisible}>
      <Title $isVisible={isVisible}>{t('services.title')}</Title>
      <Description $isVisible={isVisible}>
        {t('services.description')}
      </Description>

      <ServicesGrid>
        <ServiceCardWrapper $isVisible={isVisible}>
          <BadgeRibbon text={t('services.specialOffer')} color="red">
            <ServiceCard
              title={t('services.webDevelopment.title')}
              description={t('services.webDevelopment.description')}
              benefits={[
                t('services.webDevelopment.benefits.0'),
                t('services.webDevelopment.benefits.1'),
                t('services.webDevelopment.benefits.2'),
              ]}
              buttonText={t('services.webDevelopment.buttonText')}
              link="/servicios/desarrollo-web-basico"
            />
          </BadgeRibbon>
        </ServiceCardWrapper>

        <ServiceCardWrapper $isVisible={isVisible}>
          <ServiceCard
            title={t('services.linkPages.title')}
            description={t('services.linkPages.description')}
            benefits={[
              t('services.linkPages.benefits.0'),
              t('services.linkPages.benefits.1'),
              t('services.linkPages.benefits.2'),
            ]}
            buttonText={t('services.linkPages.buttonText')}
            link="/servicios/paginas-de-enlaces"
          />
        </ServiceCardWrapper>

        <ServiceCardWrapper $isVisible={isVisible}>
          <ServiceCard
            title={t('services.portfolio.title')}
            description={t('services.portfolio.description')}
            benefits={[
              t('services.portfolio.benefits.0'),
              t('services.portfolio.benefits.1'),
              t('services.portfolio.benefits.2'),
            ]}
            buttonText={t('services.portfolio.buttonText')}
            link="/servicios/portafolio-digital"
          />
        </ServiceCardWrapper>

        <ServiceCardWrapper $isVisible={isVisible}>
          <ServiceCard
            title={t('services.digitalMenu.title')}
            description={t('services.digitalMenu.description')}
            benefits={[
              t('services.digitalMenu.benefits.0'),
              t('services.digitalMenu.benefits.1'),
              t('services.digitalMenu.benefits.2'),
            ]}
            buttonText={t('services.digitalMenu.buttonText')}
            link="/servicios/menu-digital"
          />
        </ServiceCardWrapper>
      </ServicesGrid>

      <CTAWrapper $isVisible={isVisible}>
        <p>{t('services.ctaText')}</p>
        <Button className="animate__animated animate__bounceIn animate__delay-2s">
          <span className="btn-text-one">{t('services.ctaButton')}</span>
          <span className="btn-text-two">{t('services.ctaLink')}</span>
        </Button>
      </CTAWrapper>
    </SectionWrapper>
  );
};

export default ServicesSection;
