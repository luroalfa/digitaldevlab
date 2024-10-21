import styled from 'styled-components';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaLock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button } from 'antd';
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

const HighlightSection = styled.div`
  margin: 40px 0;
  text-align: center;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 20px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Section = styled.div`
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

const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BenefitCard = styled.div`
  width: 45%;
  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactForm = styled.div`
  margin-top: 60px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textButton};
  border-radius: 10px;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.textButton};
    text-align: center;
    margin-bottom: 20px;
  }

  .ant-form-item {
    margin-bottom: 20px;
  }

  .ant-input {
    border-radius: 5px;
    padding: 10px;
  }

  .ant-btn {
    width: 100%;
    font-size: 1.2rem;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.textButton};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const WebDevPage = () => {
  const { t } = useTranslation();

  const onFinish = (values) => {
    console.log('Formulario Enviado: ', values);
  };

  return (
    <>
      <HeroSection />
      <WebDevWrapper>
        <HighlightSection>
          <h1>{t('Desarrollo Web Personalizado')}</h1>
          <p>
            {t(
              'Obtén una página web profesional optimizada por solo ₡60,000. Aprovecha nuestra oferta exclusiva y lleva tu negocio al siguiente nivel.'
            )}
          </p>
        </HighlightSection>

        <Section id="content">
          <h2>{t('Contenido del Servicio')}</h2>
          <p>
            {t(
              'Nuestro servicio está diseñado para ofrecer soluciones web de alto rendimiento, ideales para posicionar tu negocio en el entorno digital.'
            )}
          </p>
          <p>
            {t(
              'Incluimos una presentación completa de tu empresa, con detalles de tus servicios, perfiles del equipo y un formulario de contacto funcional.'
            )}
          </p>
        </Section>

        <Section id="features">
          <h2>{t('Características del Servicio')}</h2>
          <p>
            {t(
              'Este servicio es ideal para empresas que buscan destacar en línea con un diseño profesional y funcional, sin comprometer su presupuesto.'
            )}
          </p>
        </Section>

        <BenefitsContainer id="benefits">
          <BenefitCard>
            <FaLaptopCode />
            <h3>{t('Diseño Profesional Personalizado')}</h3>
            <p>{t('Creamos una página web única adaptada a tus necesidades.')}</p>
          </BenefitCard>

          <BenefitCard>
            <FaMobileAlt />
            <h3>{t('Optimización para Dispositivos Móviles')}</h3>
            <p>
              {t('Tu sitio se verá y funcionará perfectamente en cualquier dispositivo.')}
            </p>
          </BenefitCard>

          <BenefitCard>
            <FaLock />
            <h3>{t('Certificación SSL')}</h3>
            <p>{t('Incluimos un certificado SSL para garantizar la seguridad de los datos.')}</p>
          </BenefitCard>

          <BenefitCard>
            <FaSearch />
            <h3>{t('Soporte Técnico Personalizado')}</h3>
            <p>{t('Te acompañamos con soporte continuo para cualquier duda.')}</p>
          </BenefitCard>
        </BenefitsContainer>

        <ContactForm id="contact-form">
          <h2>{t('Solicita tu Página Web Profesional')}</h2>
          <Form name="contact" layout="vertical" onFinish={onFinish}>
            <Form.Item
              label={t('Nombre Completo')}
              name="name"
              rules={[
                { required: true, message: t('Por favor ingrese su nombre completo') },
              ]}
            >
              <Input placeholder={t('Nombre Completo')} />
            </Form.Item>

            <Form.Item
              label={t('Correo Electrónico')}
              name="email"
              rules={[
                { required: true, message: t('Por favor ingrese su correo electrónico') },
              ]}
            >
              <Input placeholder={t('Correo Electrónico')} />
            </Form.Item>

            <Form.Item
              label={t('Descripción del Proyecto')}
              name="projectDescription"
              rules={[
                { required: true, message: t('Por favor describa su proyecto') },
              ]}
            >
              <Input.TextArea placeholder={t('Descripción del Proyecto')} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {t('Enviar Solicitud')}
              </Button>
            </Form.Item>
          </Form>
        </ContactForm>
      </WebDevWrapper>
    </>
  );
};

export default WebDevPage;
