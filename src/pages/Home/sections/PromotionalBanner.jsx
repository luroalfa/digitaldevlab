import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import promoImage from '../../../assets/Promotional.png';
import { useTranslation } from 'react-i18next';

const BannerWrapper = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.colors.secondary};
  background-image: url(${promoImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.colors.textBackground};
  padding: 40px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  height: 300px;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const BannerContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BannerText = styled(motion.div)`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.body};
  padding-bottom: 20px;
  color: #ffffff;

  em {
    font-style: italic;
    color: #ffffff;
  }

  span {
    color: #ffdd00;
    font-size: 19px;
    font-weight: bold;
  }
`;

const BannerButton = styled(motion.a)`
  background-color: ${(props) => props.theme.colors.attention};
  color: ${(props) => props.theme.colors.textOnAttention};
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Detener la observación una vez que se muestra
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Ajuste del margen para disparar las animaciones antes
      }
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
    <BannerWrapper ref={sectionRef}>
      <Overlay />
      <BannerContent
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <BannerText
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          {t('promotionalBanner.bannerText1')}
          <br />
          {t('promotionalBanner.bannerText2')}
          <br />
          <span>{t('promotionalBanner.highlightText')}</span>
        </BannerText>
        <BannerButton
          href="/services/web-basic"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          {t("promotionalBanner.buttonText")}
        </BannerButton>
      </BannerContent>
    </BannerWrapper>
  );
};

export default PromotionalBanner;
