import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import WebDevelopmentPackages from './sections/WebDevelopmentPackages';
import HeroSection from './sections/HeroSection';

const WebDevWrapper = styled.section`
  padding: 50px 10%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IntroSection = styled.div`
  margin-bottom: 60px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 20px;
  }
`;

const WebDevelopmentPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />
      <WebDevWrapper>
        <IntroSection>
          <h2>{t('Impulsa tu negocio con nuestro desarrollo web profesional')}</h2>
          <p>
            {t(
              'Hoy en día, tener presencia digital es esencial para destacar en un mercado competitivo. Con nuestros paquetes de desarrollo web, obtendrás soluciones diseñadas para fortalecer tu marca y atraer más clientes.'
            )}
          </p>
          <p>
            {t(
              'Nuestros planes se adaptan a tus necesidades, desde soluciones iniciales hasta opciones avanzadas con funcionalidades personalizadas. Además, ofrecemos soporte continuo para garantizar el máximo rendimiento de tu página.'
            )}
          </p>
        </IntroSection>

        <WebDevelopmentPackages />
      </WebDevWrapper>
    </>
  );
};

export default WebDevelopmentPage;
