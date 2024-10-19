import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Hero = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  height: 400px;
  background-image: url('https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7); /* Capa oscura más densa */
  }

  h1 {
    position: relative;
    font-size: 3.5rem; /* Tamaño más grande para mayor jerarquía */
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin-bottom: 15px;
    z-index: 1;
  }

  p {
    position: relative;
    font-size: 1.5rem; /* Aumenta el tamaño de la descripción */
    color: ${({ theme }) => theme.colors.primary};
    z-index: 1;
    max-width: 800px; /* Limita el ancho de la descripción para mayor legibilidad */
    margin-bottom: 25px;
  }
`;

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <Hero>
            <h1>{t('Desarrollo Web Básico')}</h1>
            <p>{t('Obtén una página web profesional por solo ₡60,000 en lugar de ₡150,000. Oferta válida solo este mes.')}</p>
        </Hero>
    );
};

export default HeroSection;
