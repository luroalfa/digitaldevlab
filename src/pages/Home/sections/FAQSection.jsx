import React from 'react';
import { Collapse } from 'antd';
import styled, { useTheme } from 'styled-components';
import faqImage from '../../../assets/faq.jpg'; // Asegúrate de reemplazar esto con la ruta de tu imagen

const { Panel } = Collapse;

const FAQSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 200px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }
`;

const FAQTitleWrapper = styled.div`
  flex: 1;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const FAQImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const CollapseWrapper = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    width: 100%;
  }

  .ant-collapse-header {
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary} !important;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }

  .ant-collapse-content {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: 480px) {
    .ant-collapse-header {
      font-size: 1rem;
    }

    .ant-collapse-content {
      font-size: 0.95rem;
    }
  }
`;

const items = [
    {
        key: '1',
        label: '¿Cuál es el horario de atención?',
        children: (
            <p>
                Nuestro horario de atención es de lunes a viernes, de 9:00 am a 6:00 pm.
            </p>
        ),
    },
    {
        key: '2',
        label: '¿Cómo puedo contactar con soporte?',
        children: (
            <p>
                Puedes contactar con nuestro equipo de soporte a través del correo
                info@digitaldevlab.com o vía WhatsApp.
            </p>
        ),
    },
    {
        key: '3',
        label: '¿Qué métodos de pago aceptan?',
        children: (
            <p>
                Aceptamos pagos con tarjeta de crédito, PayPal y transferencias
                bancarias.
            </p>
        ),
    },
];

const FAQSection = () => {
    const theme = useTheme(); // Accedemos al tema activo

    return (
        <FAQSectionWrapper>
            <FAQTitleWrapper>
                <FAQTitle>Preguntas Frecuentes</FAQTitle>
                <FAQImage src={faqImage} alt="Preguntas Frecuentes" />
            </FAQTitleWrapper>

            <CollapseWrapper>
                <Collapse accordion>
                    {items.map((item) => (
                        <Panel header={item.label} key={item.key}>
                            {item.children}
                        </Panel>
                    ))}
                </Collapse>
            </CollapseWrapper>
        </FAQSectionWrapper>
    );
};

export default FAQSection;
