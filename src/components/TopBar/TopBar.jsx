// TopBar.js
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaTag } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import {
  TopBarWrapper,
  TopBarContent,
  ContactInfo,
  OfferSection,
  StyledButton,
  StyledCountdown,
  CountdownWrapper,
} from './TopBarStyles'; // Importar los estilos desde el archivo separado

const getTimeUntilNovember = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  let targetDate = new Date(currentYear, 10, 1);
  if (now.getTime() > targetDate.getTime()) {
    targetDate = new Date(currentYear + 1, 10, 1);
  }
  return targetDate.getTime();
};

const deadline = getTimeUntilNovember();

const TopBar = ({ isVisible }) => {
  const { t } = useTranslation();
  const onFinish = () => {
    console.log('Temporizador finalizado');
  };

  const daysLabel = t('topBar.days');
  const format = `D [${daysLabel}] HH:mm:ss`;

  return (
    <TopBarWrapper $isVisible={isVisible}>
      <TopBarContent>
        <ContactInfo>
          <div>
            <FaPhoneAlt /> <strong>{t('topBar.phone')}:</strong> <span>+506 7003 1154</span>
          </div>
          <div>
            <FaMapMarkerAlt /> <strong>{t('topBar.address')}:</strong> <span>Alajuela, Costa Rica</span>
          </div>
          <div>
            <FaEnvelope /> <strong>{t('topBar.email')}:</strong> <span>info@digitaldevlab.com</span>
          </div>
        </ContactInfo>

        <OfferSection>
          <FaTag /> <strong>{t('topBar.specialOffer')}</strong>
          <StyledButton href="#services">{t('topBar.seeServices')}</StyledButton>

          <CountdownWrapper>
            <StyledCountdown
              title={<strong>{t('topBar.offerEndsIn')}</strong>}
              value={deadline}
              onFinish={onFinish}
              format={format}
            />
          </CountdownWrapper>
        </OfferSection>
      </TopBarContent>
    </TopBarWrapper>
  );
};

export default TopBar;
