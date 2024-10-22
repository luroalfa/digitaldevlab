import { useState } from "react";
import styled from "styled-components";
import { Form, Input, Modal, Select, Button as AntButton } from "antd";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Basic from "../../../assets/basic.png";
import Bussiness from "../../../assets/bussiness.png";
import Profesional from "../../../assets/profesional.png";
import Button from "../../../components/Button";
import { useMediaQuery } from "react-responsive";

const { Option } = Select;

const PackagesWrapper = styled.section`
  padding: 50px 10%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    padding: 50px 5%;
    h2 {
      font-size: 2rem;
    }
  }
`;

const PackageGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const PackageCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
  position: relative;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.accent};
    margin: 15px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: left;
    margin-bottom: auto; /* Empuja el footer hacia abajo */
  }

  .card-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    margin-top: auto; /* Asegura que el footer quede al fondo */
    padding: 10px 0;
  }

  li {
    margin-bottom: 10px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    display: flex;
    align-items: center;
  }

  li::before {
    content: "✔️";
    color: ${({ theme }) => theme.colors.secondary};
    margin-right: 10px;
  }
`;

const SVGImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  object-fit: contain;
  margin-top: 10px;
`;

const OfferBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.attention};
  color: ${({ theme }) => theme.colors.textOnAttention};
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const WebDevelopmentPackages = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const prices = {
    basic: "₡60,000",
    originalBasic: "₡150,000",
    intermediate: "₡400,000",
    advanced: "₡1,000,000",
  };
  const plansForm = [
    { title: "Plan Básico", img: Basic, price: prices.basic },
    { title: "Plan Profesional", img: Profesional, price: prices.intermediate },
    { title: "Plan Corporativo", img: Bussiness, price: prices.advanced },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const showModal = (plan) => {
    setModalContent(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const handleQuoteSubmit = (values) => {
    message.success("¡Solicitud enviada con éxito!");
    closeQuoteModal();
  };

  const plans = [
    {
      title: "Plan Básico",
      badge: <OfferBadge>Oferta del Mes</OfferBadge>,
      price: (
        <>
          <span style={{ textDecoration: "line-through", color: "red" }}>
            {prices.originalBasic}
          </span>{" "}
          {prices.basic}
        </>
      ),
      description: "El punto de partida para tu presencia en línea.",
      benefits: [
        "1 Página web",
        "Diseño responsivo",
        "SSL gratuito",
        "Soporte básico",
        "Formulario de contacto funcional",
      ],
      img: Basic,
    },
    {
      title: "Plan Profesional",
      price: prices.intermediate,
      description:
        "Un sitio web optimizado y escalable para el crecimiento digital.",
      benefits: [
        "Hasta 5 páginas",
        "Diseño responsivo avanzado",
        "Optimización SEO",
        "Integración con Google Analytics",
        "SSL gratuito",
      ],
      img: Profesional,
    },
    {
      title: "Plan Corporativo",
      price: prices.advanced,
      description:
        "Soluciones avanzadas para empresas que buscan liderar su sector.",
      benefits: [
        "Sitio web personalizado",
        "Diseño avanzado y animaciones",
        "Optimización SEO",
        "Integración API y formularios",
        "Mantenimiento mensual",
      ],
      img: Bussiness,
    },
  ];

  return (
    <PackagesWrapper>
      <h2>Opciones de Desarrollo Web</h2>
      <PackageGrid>
        {plans.map((plan, index) => (
          <PackageCard key={index}>
            {plan.badge}
            <SVGImage src={plan.img} alt={plan.title} />
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <ul>
              {plan.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <div className="card-footer">
              <FaEye className="footer-icon" onClick={() => showModal(plan)} />
              <FaShareAlt className="footer-icon" />
            </div>
          </PackageCard>
        ))}
      </PackageGrid>
      <br />
      <Button
        width={isMobile ? "100%" : "30%"}
        height="35px"
        className="animate__animated animate__bounceIn animate__delay-2s"
        onClick={openQuoteModal}
      >
        <span className="btn-text-one">Solicitar Cotización</span>
        <span className="btn-text-two">Elige el plan que se adapte a tus necesidades</span>
      </Button>
      <Modal
        title="Formulario de Cotización"
        open={isQuoteModalOpen}
        onCancel={closeQuoteModal}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleQuoteSubmit}>
          <Form.Item
            label="Elige un Plan"
            name="plan"
            rules={[{ required: true, message: "Por favor selecciona un plan" }]}
          >
            <Select placeholder="Selecciona un plan">
              {plansForm.map((plan, index) => (
                <Option key={index} value={plan.title}>
                  {plan.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
          >
            <Input placeholder="Tu nombre completo" />
          </Form.Item>
          <Form.Item
            label="Correo Electrónico"
            name="email"
            rules={[
              { required: true, message: "Por favor ingresa tu correo" },
              { type: "email", message: "Correo no válido" },
            ]}
          >
            <Input placeholder="Tu correo electrónico" />
          </Form.Item>
          <Form.Item
            label="Comentarios Adicionales"
            name="comments"
          >
            <Input.TextArea rows={4} placeholder="¿Tienes alguna solicitud adicional?" />
          </Form.Item>
          <AntButton type="primary" htmlType="submit" block>
            Enviar Cotización
          </AntButton>
        </Form>
      </Modal>

      <Modal
        title={modalContent.title}
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
      >
        <p>Precio: {modalContent.price}</p>
        <SVGImage src={modalContent.img} alt="Plan Illustration" />
      </Modal>
    </PackagesWrapper>
  );
};

export default WebDevelopmentPackages;
