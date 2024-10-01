import React from 'react';
import styled from 'styled-components';
import { StarFilled } from '@ant-design/icons';

// Estilos para la sección principal de testimonios
const TestimonialsWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 50px;
  text-align: center;
  border-radius: 10px;
`;

// Título de la sección
const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: 40px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

// Descripción o introducción sobre los testimonios
const Description = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
  font-size: 1.2rem;
  margin: 0;
  color: ${(props) => props.theme.colors.textPrimary};
`;

// Ocupación del usuario
const UserOccupation = styled.p`
  font-size: 1rem;
  margin: 5px 0;
  color: ${(props) => props.theme.colors.textSecondary};
`;

// Icono de Google
const GoogleIcon = styled.img`
  width: 20px;
  margin-left: 10px;
`;

// Estrellas de calificación
const StarRating = styled.div`
  color: ${(props) => props.theme.colors.attention};
  margin-bottom: 10px;
`;

// Texto del testimonio
const TestimonialText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 1.4;
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
  font-weight: bold;
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
      occupation: 'Gerente de Ventas',
      date: '5 de septiembre de 2018',
      rating: 5,
      testimonial: 'Genial sitio y muy responsables',
      userImage: 'https://randomuser.me/api/portraits/women/44.jpg', // Imagen de usuario estática
    },
    {
      id: 2,
      name: 'Jason Ramírez',
      occupation: 'Desarrollador Web',
      date: '22 de junio de 2021',
      rating: 5,
      testimonial: 'Super servicio, muy amables y profesionales.',
      userImage: 'https://randomuser.me/api/portraits/men/32.jpg', // Imagen de usuario estática
    },
    {
      id: 3,
      name: 'Carolina Cunningham',
      occupation: 'Especialista en Marketing',
      date: '22 de junio de 2017',
      rating: 5,
      testimonial: 'Proactivos, organizados, profesionales.',
      userImage: 'https://randomuser.me/api/portraits/women/65.jpg', // Imagen de usuario estática
    },
  ];

  return (
    <TestimonialsWrapper>
      <Title>Lo que dicen nuestros usuarios</Title>
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
                <GoogleIcon src='https://recensioni-io-static-folder.s3.eu-central-1.amazonaws.com/public_onlinereviews/images/integrations/google.png' alt="Google" />
              </UserInfo>
            </CardHeader>
            <StarRating>
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <StarFilled key={index} />
              ))}
            </StarRating>
            <TestimonialText>{testimonial.testimonial}</TestimonialText>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>

      {/* Botón para dejar una reseña */}
      <ReviewButtonWrapper>
        <ReviewButton href="/dejar-resena">Dejar una reseña</ReviewButton>
        <ReviewButton href="/dejar-resena">Ver mas reseñas</ReviewButton>
      </ReviewButtonWrapper>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
