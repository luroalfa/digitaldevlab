import React from 'react';
import styled from 'styled-components';
import { StarFilled } from '@ant-design/icons';
import TitleSection from '../../../components/TitleSection';

// Estilos para la sección principal de testimonios
const TestimonialsWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 50px;
  text-align: center;
  border-radius: 10px;
`;

// Descripción o introducción sobre los testimonios
const Description = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-style: italic; /* Añadimos cursiva para hacerlo más sutil */
`;

// Contenedor de los testimonios
const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Estilos para cada tarjeta de testimonio
const TestimonialCard = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  position: relative;
  text-align: left;
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Contenedor del título y la imagen del usuario
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// Imagen de usuario
const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave para resaltar la imagen */
`;

// Información del usuario
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// Nombre del usuario
const UserName = styled.h4`
  font-size: 1.5rem;  /* Aumentamos el tamaño del nombre */
  margin: 0;
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: bold; /* Negrita para destacar el nombre */
`;

// Ocupación del usuario
const UserOccupation = styled.p`
  font-size: 1rem;
  margin: 5px 0;
  color: ${(props) => props.theme.colors.textSecondary};
  font-style: italic; /* Cursiva para dar una jerarquía menor */
`;

// Enlace del sitio web del usuario
const UserWebsite = styled.a`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 5px;
  text-decoration: none;
  font-weight: bold; /* Negrita para destacar el enlace al sitio web */

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.accent};
  }
`;

// Estrellas de calificación
const StarRating = styled.div`
  color: ${(props) => props.theme.colors.attention};
  margin-bottom: 10px;
`;

// Texto del testimonio
const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 1.4;
  margin-top: 10px;
`;

// Logo de Google
const GoogleLogoImage = styled.img`
  width: 50px;
  margin-top: 20px;
  align-self: center; /* Centramos el logo de Google */
`;

// Estilos del botón para dejar una reseña
const ReviewButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 50px;
  justify-content: center;
`;

const ReviewButton = styled.a`
  background-color: ${(props) => props.theme.colors.attention};
  color: ${(props) => props.theme.colors.textOnAttention};
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

// Componente principal
const Testimonials = () => {
  // Datos estáticos para los testimonios
  const testimonials = [
    {
      id: 1,
      name: 'Hilda Carvajal Miranda',
      service: 'Portafolio',
      occupation: 'Gerente de Ventas',
      website: 'https://hildasales.com',
      rating: 5,
      testimonial: 'Genial sitio y muy responsables.',
      userImage: 'https://randomuser.me/api/portraits/women/44.jpg', // Imagen de usuario estática
    },
    {
      id: 2,
      name: 'Jason Ramírez',
      service: 'Sitio Web',
      occupation: 'Desarrollador Web',
      website: 'https://jasondevweb.com',
      rating: 5,
      testimonial: 'Super servicio, muy amables y profesionales.',
      userImage: 'https://randomuser.me/api/portraits/men/32.jpg', // Imagen de usuario estática
    },
    {
      id: 3,
      name: 'Carolina Cunningham',
      service: 'Menu Digital',
      occupation: 'Encargado de Restaurante',
      website: 'https://carolmarketing.com',
      rating: 5,
      testimonial: 'Proactivos, organizados, profesionales.',
      userImage: 'https://randomuser.me/api/portraits/women/65.jpg', // Imagen de usuario estática
    },
  ];

  return (
    <TestimonialsWrapper>
      <TitleSection titleText='Lo que dicen nuestros usuarios' isVisible={true} />
      <Description>
        Nuestros clientes nos recomiendan por la calidad de nuestros servicios. Aquí tienes algunos de sus testimonios. ¡Tu opinión también es importante!
      </Description>
      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <CardHeader>
              <UserImage src={testimonial.userImage} alt={testimonial.name} />
              <UserInfo>
                <UserName>{testimonial.name}</UserName>
                <UserOccupation>{testimonial.occupation}</UserOccupation>
                <strong>Servicio:</strong> {testimonial.service}
                <UserWebsite href={testimonial.website} target="_blank" rel="noopener noreferrer">
                  {testimonial.website}
                </UserWebsite>
              </UserInfo>
            </CardHeader>
            <StarRating>
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <StarFilled key={index} />
              ))}
            </StarRating>
            <TestimonialText>{testimonial.testimonial}</TestimonialText>
            <GoogleLogoImage src='https://recensioni-io-static-folder.s3.eu-central-1.amazonaws.com/public_onlinereviews/images/integrations/google.png' alt="Google Reviews" />
          </TestimonialCard>
        ))}
      </TestimonialsGrid>

      {/* Botón para dejar una reseña */}
      <ReviewButtonWrapper>
        <ReviewButton href="/dejar-resena">Dejar una reseña</ReviewButton>
      </ReviewButtonWrapper>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
