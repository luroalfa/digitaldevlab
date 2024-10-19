import styled from 'styled-components';
import Button from '../../../components/Button'; // Usa el botón existente
import Img from '../../../assets/bannerCTA.jpg'

// Gradiente de colores como el mostrado en la imagen
const gradientText = `
  background: -webkit-linear-gradient(45deg, #FF6A00, #FF3A85);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CTABannerWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.accent};
  padding: 100px 30px; /* Mayor padding para un look más imponente */
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Img}); /* Imagen de fondo */
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.9); /* Oscurecer la imagen de fondo ligeramente */

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
  ${gradientText}; /* Aplicamos el gradiente de colores */
`;

const CTADescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  max-width: 800px;
  line-height: 1.8;
  color: #ffffff; /* Texto blanco para contraste */
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.7); /* Sombra para dar profundidad */
`;

const CTAButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const CTABanner = () => {
    return (
        <CTABannerWrapper>
            <CTATitle>Obtén una Solución Personalizada para tu Negocio</CTATitle>
            <CTADescription>
                ¡Creemos algo increíble juntos! Contáctanos para una consulta gratuita y da el primer paso hacia el crecimiento de tu empresa.
            </CTADescription>
            <CTAButtonWrapper>
                <Button>
                    <span className="btn-text-one">Solicita tu Cotización</span>
                    <span className="btn-text-two">Comienza Ahora</span>
                </Button>
                <Button>
                    <span className="btn-text-one">Contáctanos</span>
                    <span className="btn-text-two">Ponte en Contacto</span>
                </Button>
            </CTAButtonWrapper>
        </CTABannerWrapper>
    );
};

export default CTABanner;
