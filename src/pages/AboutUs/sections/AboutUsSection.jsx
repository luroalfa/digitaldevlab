import styled from 'styled-components';
import { FaLightbulb, FaUsers, FaHandshake, FaCheckCircle } from 'react-icons/fa'; // Importamos íconos
import photo from '../../../assets/team.jpg';

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 50px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px;
    text-align: center;
  }
`;

const TextContent = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const Signature = styled.div`
  margin-top: 20px;
`;

const Name = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  margin: 0;
`;

const ImageWrapper = styled.div`
  max-width: 20%;
  img {
    max-width: 100%;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      }
      }
      @media (max-width: 768px) {
        max-width: 100%;
  }
`;

const ValuesSection = styled.section`
  padding: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.accent};
  text-align: center;

  h2 {
    margin-bottom: 40px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin-top: 15px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  svg {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.accent};
    margin-bottom: 10px;
  }
`;

const AboutUsSection = () => {
  return (
    <>
      <AboutSection>
        <TextContent>
          <Title>Quiénes Somos</Title>
          <Paragraph>
            DIGITAL DEVLAB inició como una empresa dedicada a la creación de soluciones tecnológicas a medida,
            desde el desarrollo de aplicaciones web hasta servicios de consultoría para PYMEs. Nuestra misión es
            proporcionar herramientas digitales de calidad que impacten positivamente a nuestros clientes.
          </Paragraph>
          <Paragraph>
            Con un equipo altamente capacitado, buscamos siempre innovar y estar a la vanguardia tecnológica,
            asegurando que cada solución esté diseñada para cumplir con las más altas expectativas de nuestros clientes.
          </Paragraph>
          <Signature>
            <Name>Alfonso Rodríguez</Name>
            <p>CTO</p>
          </Signature>
        </TextContent>
        <ImageWrapper>
          <img src={photo} alt="Equipo de Digital DevLab" />
        </ImageWrapper>
      </AboutSection>

      <ValuesSection>
        <h2>Nuestros Valores</h2>
        <ValuesGrid>
          <ValueCard>
            <FaLightbulb />
            <h3>Innovación Constante</h3>
            <p>
              Creemos en la evolución continua y en la aplicación de las tecnologías más recientes para
              mantenernos a la vanguardia.
            </p>
          </ValueCard>
          <ValueCard>
            <FaUsers />
            <h3>Trabajo Colaborativo</h3>
            <p>
              Nuestro enfoque se basa en la colaboración cercana, tanto dentro de nuestro equipo como con
              nuestros clientes, para lograr los mejores resultados.
            </p>
          </ValueCard>
          <ValueCard>
            <FaHandshake />
            <h3>Orientación al Cliente</h3>
            <p>
              La experiencia del cliente es nuestra prioridad, y buscamos siempre superar sus expectativas
              a través de un servicio personalizado.
            </p>
          </ValueCard>
          <ValueCard>
            <FaCheckCircle />
            <h3>Compromiso con la Calidad</h3>
            <p>
              Nos esforzamos por ofrecer productos digitales que cumplan con altos estándares de calidad,
              asegurando la satisfacción del cliente en cada proyecto.
            </p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
    </>
  );
};

export default AboutUsSection;
