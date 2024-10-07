import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import IllustrationScene05 from '../../../../assets/Scenes05.svg';
import 'animate.css';
import { useTranslation } from 'react-i18next';
import { AboveTheFoldSection, Content, IconContainer, IllustrationContainer, LearnMoreLink } from './AboveTheFoldStyles'

const AboveTheFold = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/services/web-development'); // Redirigir a la página de desarrollo web
  };
  return (
    <AboveTheFoldSection>
      <Content className="animate__animated animate__fadeInDown">
        <h1>
          {t('aboveTheFold.welcome')}<br /> <span>{t('aboveTheFold.companyName')}</span>
        </h1>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">
          {t('aboveTheFold.description')}
        </p>
        <Button onClick={handleQuoteClick} className="animate__animated animate__bounceIn animate__delay-2s">
          <span className="btn-text-one">{t('aboveTheFold.quoteNow')}</span>
          <span className="btn-text-two">{t('aboveTheFold.requestQuote')}</span>
        </Button>
        <br />
        <LearnMoreLink to="/services" className="animate__animated animate__fadeInUp animate__delay-2s">
          {t('aboveTheFold.learnMore')}
        </LearnMoreLink>
      </Content>

      <IllustrationContainer className="animate__animated animate__zoomIn animate__delay-1s">
        <img src={IllustrationScene05} alt="Ilustración" />
        <IconContainer className="animate__animated animate__fadeInUp animate__delay-1s">
          <FaCode title="Desarrollo" />
          <FaLaptopCode title="Tecnología" />
          <FaLightbulb title="Innovación" />
        </IconContainer>
      </IllustrationContainer>
    </AboveTheFoldSection>
  );
};

export default AboveTheFold;
