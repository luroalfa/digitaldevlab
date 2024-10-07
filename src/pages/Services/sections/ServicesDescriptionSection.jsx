import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

// Estilo para la sección descriptiva
const DescriptionSectionWrapper = styled.section`
  padding: 80px 20%;
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    padding: 50px 10%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 50px;
`;

const ServicesDescriptionSection = () => {
    return (
        <DescriptionSectionWrapper>
            <Title>Servicios que Impulsan tu Negocio</Title>
            <Description>
                En Digital Dev Lab ofrecemos una gama de servicios diseñados para ayudar a tu empresa a destacarse en el mundo digital. Desde el desarrollo de sitios web personalizados hasta la creación de portafolios digitales y menús para restaurantes, cada uno de nuestros servicios está pensado para brindarte resultados excepcionales.
            </Description>
            <Button>
                <span className="btn-text-one">Cotiza tu Proyecto</span>
                <span className="btn-text-two">¡Empieza Ahora!</span>
            </Button>
        </DescriptionSectionWrapper>
    );
};

export default ServicesDescriptionSection;
