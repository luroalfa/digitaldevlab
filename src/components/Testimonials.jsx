import { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd'; // Importamos Modal de Ant Design
import { StarFilled } from '@ant-design/icons';
import TitleSection from './TitleSection';
import Button from './Button';
import { useTranslation } from 'react-i18next';

// Estilos para la sección principal de testimonios
const TestimonialsWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 50px;
  text-align: center;
  border-radius: 10px;
`;

// Resto de los estilos...

const Testimonials = () => {
  const { t } = useTranslation(); // Hook de traducción
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para mostrar el modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Función para ocultar el modal
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Datos estáticos para los testimonios
  const testimonials = [
    {
      id: 1,
      name: 'Hilda Carvajal Miranda',
      service: 'Portafolio',
      occupation: 'Gerente de Ventas',
      website: 'https://hildasales.com',
      rating: 5,
      testimonial: t('testimonials.testimonial1'),
      userImage: 'https://randomuser.me/api/portraits/women/44.jpg', // Imagen de usuario estática
      pathSource: 'https://recensioni-io-static-folder.s3.eu-central-1.amazonaws.com/public_onlinereviews/images/integrations/google.png'
    },
    // Otros testimonios...
  ];

  return (
    <TestimonialsWrapper>
      <TitleSection titleText={t('testimonials.title')} isVisible={true} />
      <Description>{t('testimonials.description')}</Description>
      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <CardHeader>
              <UserImage src={testimonial.userImage} alt={testimonial.name} />
              <UserInfo>
                <UserName>{testimonial.name}</UserName>
                <UserOccupation>{testimonial.occupation}</UserOccupation>
                <strong>{t('testimonials.service')}</strong> {testimonial.service}
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
            <GoogleLogoImage src={testimonial.pathSource} alt="Google Reviews" />
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
      <br />
      {/* Botón que dispara el modal */}
      <Button onClick={showModal}>
        <span className="btn-text-one">{t('testimonials.buttonText1')}</span>
        <span className="btn-text-two">{t('testimonials.buttonText2')}</span>
      </Button>

      {/* Modal que se muestra cuando el botón es presionado */}
      <Modal 
        title={t('testimonials.modalTitle')} 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        okText={t('testimonials.modalOkText')} 
        cancelText={t('testimonials.modalCancelText')}>
        <p>{t('testimonials.modalMessage')}</p>
      </Modal>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
