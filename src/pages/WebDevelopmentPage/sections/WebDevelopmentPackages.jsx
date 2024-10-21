import styled from "styled-components";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

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

const DetailsSection = styled.div`
  margin-top: 30px;
  text-align: left;

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &::before {
        content: "✔️";
        margin-right: 10px;
        color: ${({ theme }) => theme.colors.secondary};
      }
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
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  text-align: center;
  background-image: linear-gradient(
    135deg,
    rgba(74, 222, 128, 0.15),
    rgba(29, 123, 219, 0.1) 20%,
    ${({ theme }) => theme.colors.primary} 40%,
    ${({ theme }) => theme.colors.primary} 100%
  );

  &:after {
    content: "";
    display: block;
    top: -3px;
    left: -3px;
    bottom: -3px;
    right: -3px;
    z-index: -1;
    position: absolute;
    border-radius: 16px;
    background-image: linear-gradient(
      135deg,
      #4ade80,
      #1d7bdb 40%,
      ${({ theme }) => theme.colors.background} 60%,
      ${({ theme }) => theme.colors.primary} 100%
    );
  }

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 10px;
  }

  .price {
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 10px;

    span {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-right: 10px;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
    text-align: left;
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

  button {
    padding: 12px 25px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textButton};
    background-color: ${({ theme }) => theme.colors.backgroundButton};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

const OfferBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: ${({ theme }) =>
    theme.colors.attention}; // Usar color de atención o llamativo
  color: ${({ theme }) => theme.colors.textOnAttention};
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const WebDevelopmentPackages = () => {
  // Definir los precios reales en Colones
  const prices = {
    basic: "₡150,000",
    discountedBasic: "₡60,000", // Precio con descuento
    intermediate: "₡400,000",
    advanced: "₡1,000,000",
  };

  return (
    <PackagesWrapper>
      <h2>⚙️Opciones de Desarrollo Web</h2>
      <PackageGrid>
        {/* Paquete Básico con Oferta */}
        <PackageCard>
          <OfferBadge>Oferta del Mes</OfferBadge>
          <h3>🛠️Plan Básico</h3>
          <p className="price">
            <span>Antes:</span>
            <span style={{ color: "red", textDecoration: "line-through" }}>
              {prices.basic}
            </span>{" "}
            {prices.discountedBasic}
          </p>
          <p>Ideal para una presencia inicial en línea</p>
          <ul>
            <li>1 Página web</li>
            <li>Diseño responsivo</li>
            <li>SSL gratuito</li>
            <li>Soporte básico</li>
          </ul>
          <Link to="/services/web-basic">
            <button>Comenzar</button>
          </Link>
        </PackageCard>

        {/* Paquete Intermedio */}
        <PackageCard>
          <h3>📊Plan Profesional</h3>
          <p className="price">{prices.intermediate}</p>
          <p>Un plan para sitios web más avanzados</p>
          <ul>
            <li>Hasta 5 páginas</li>
            <li>Diseño responsivo avanzado</li>
            <li>Optimización SEO</li>
            <li>SSL gratuito</li>
            <li>Integración con Google Analytics</li>
            <li>Soporte intermedio</li>
          </ul>
          <Link to="/contact">
            <button>Contratar Ahora</button>
          </Link>
        </PackageCard>

        {/* Paquete Avanzado */}
        <PackageCard>
          <h3>💼Plan Corporativo</h3>
          <p className="price">{prices.advanced}</p>
          <p>Para empresas que buscan lo mejor en desarrollo web</p>
          <ul>
            <li>Sitio web personalizado</li>
            <li>Diseño avanzado y animaciones</li>
            <li>Optimización SEO</li>
            <li>Integración de API y formularios</li>
            <li>Mantenimiento mensual</li>
            <li>Soporte premium</li>
          </ul>
          <Link to="/contact">
            <button>Obtener Plan Corporativo</button>
          </Link>
        </PackageCard>
      </PackageGrid>
      {/* Sección de Detalles Expandibles */}
      <Collapse style={{ marginTop: "50px" }} accordion>
        <Panel header="🛠️ Detalles del Plan Básico" key="1">
          <DetailsSection>
            <h3>Contenido del Servicio</h3>
            <p>
              Nuestro servicio está diseñado para ofrecer soluciones web de alto
              rendimiento, ideales para posicionar tu negocio en el entorno
              digital. Incluimos una presentación completa de tu empresa, con
              detalles de tus servicios, perfiles del equipo y un formulario de
              contacto funcional.
            </p>
            <h3>Características del Servicio</h3>
            <p>
            Este servicio es ideal para empresas que buscan destacar en línea
            con un diseño profesional y funcional, sin comprometer su
            presupuesto.
            </p>
            <ul>
              <li>Diseño responsivo</li>
              <li>Certificación SSL gratuita</li>
              <li>Soporte técnico básico</li>
            </ul>
          </DetailsSection>
        </Panel>

        <Panel header="📊 Detalles del Plan Profesional" key="2">
          <DetailsSection>
            <h3>Contenido del Servicio</h3>
            <p>
              Incluye una página web avanzada con hasta 5 secciones, optimizada
              para SEO y con Google Analytics integrado.
            </p>
            <ul>
              <li>SEO avanzado</li>
              <li>Integración con Google Analytics</li>
              <li>Soporte técnico intermedio</li>
            </ul>
          </DetailsSection>
        </Panel>

        <Panel header="💼 Detalles del Plan Corporativo" key="3">
          <DetailsSection>
            <h3>Contenido del Servicio</h3>
            <p>
              Solución web personalizada con diseño avanzado, mantenimiento
              mensual y soporte premium.
            </p>
            <ul>
              <li>Integración de API y formularios</li>
              <li>Animaciones avanzadas</li>
              <li>Mantenimiento mensual incluido</li>
            </ul>
          </DetailsSection>
        </Panel>
      </Collapse>
    </PackagesWrapper>
  );
};

export default WebDevelopmentPackages;
