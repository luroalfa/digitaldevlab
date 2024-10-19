import styled from 'styled-components';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Breadcrumb, Form, Input, Button } from 'antd';
import HeroSection from './sections/HeroSection';

const WebDevBasicWrapper = styled.section`
  padding: 50px 10%;
  margin-top: 130px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (max-width: 768px) {
    margin-top: 0px;
    flex-direction: column;
    align-items: center;
  }
`;

const BreadcrumbWrapper = styled.div`
  margin-bottom: 20px;
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

const ContentSection = styled.div`
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

const BenefitsSection = styled.div`
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 40px;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 20px;
  }
`;

const ContactFormSection = styled.div`
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

const WebDevBasicPage = () => {
  const { t } = useTranslation();

  const onFinish = (values) => {
    console.log('Formulario Enviado: ', values);
    // Aquí puedes manejar la lógica de envío del formulario, por ejemplo, a una API o servicio de correo
  };

  return (
    <WebDevBasicWrapper>
      {/* Hero Section */}
      <HeroSection />

      {/* Breadcrumb Section */}
      <BreadcrumbWrapper>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">{t('Inicio')}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/services">{t('Servicios')}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/services/web-development">{t('Desarrollo Web')}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{t('Web Básica')}</Breadcrumb.Item>
        </Breadcrumb>
      </BreadcrumbWrapper>

      {/* Content Section */}
      <ContentSection id="content">
        <h2>{t('Contenido del Paquete')}</h2>
        <p>{t('En nuestro servicio de diseño web, nos enfocamos en ofrecer páginas web básicas que son completas y efectivas para satisfacer las necesidades de su empresa.')}</p>
        <p>{t('El contenido de estas páginas web incluye una descripción detallada de la empresa, perfiles del equipo, servicios ofrecidos y una sección de contacto para que los visitantes puedan comunicarse fácilmente.')}</p>
      </ContentSection>

      {/* Intro Section */}
      <IntroSection id="intro">
        <h2>{t('Lo que incluye el Paquete Básico')}</h2>
        <p>{t('Este paquete está diseñado para pequeñas empresas que necesitan un sitio web profesional a un costo accesible.')}</p>
      </IntroSection>

      {/* Benefits Section */}
      <BenefitsSection id="benefits">
        <BenefitCard>
          <FaLaptopCode />
          <h3>{t('1 Página web')}</h3>
          <p>{t('Un diseño único y profesional para tu sitio web.')}</p>
        </BenefitCard>

        <BenefitCard>
          <FaMobileAlt />
          <h3>{t('Diseño Responsivo')}</h3>
          <p>{t('Aseguramos que tu sitio se vea increíble en todos los dispositivos.')}</p>
        </BenefitCard>

        <BenefitCard>
          <FaLock />
          <h3>{t('SSL Gratuito')}</h3>
          <p>{t('Protege a tus usuarios con un certificado SSL gratuito.')}</p>
        </BenefitCard>

        <BenefitCard>
          <FaSearch />
          <h3>{t('Soporte Básico')}</h3>
          <p>{t('Te brindamos soporte para cualquier duda o problema.')}</p>
        </BenefitCard>
      </BenefitsSection>

      {/* Contact Form Section */}
      <ContactFormSection id="contact-form">
        <h2>{t('Solicitar Servicio de Desarrollo Web Básico')}</h2>
        <Form
          name="contact"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label={t('Nombre Completo')}
            name="name"
            rules={[{ required: true, message: t('Por favor ingrese su nombre completo') }]}
          >
            <Input placeholder={t('Nombre Completo')} />
          </Form.Item>

          <Form.Item
            label={t('Correo Electrónico')}
            name="email"
            rules={[{ required: true, message: t('Por favor ingrese su correo electrónico') }]}
          >
            <Input placeholder={t('Correo Electrónico')} />
          </Form.Item>

          <Form.Item
            label={t('Descripción del Proyecto')}
            name="projectDescription"
            rules={[{ required: true, message: t('Por favor describa su proyecto') }]}
          >
            <Input.TextArea placeholder={t('Descripción del Proyecto')} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t('Solicitar Servicio')}
            </Button>
          </Form.Item>
        </Form>
      </ContactFormSection>
    </WebDevBasicWrapper>
  );
};

export default WebDevBasicPage;
