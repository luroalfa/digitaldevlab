import styled from 'styled-components';

// Estilos del contenedor de la tarjeta
const PlanCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 19rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

// Estilos del título de la tarjeta
const PlanTitle = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textPrimary};

  .card_paragraph {
    margin-top: 0.25rem;
    font-size: 0.5rem;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

// Línea separadora
const Line = styled.hr`
  width: 100%;
  height: 0.1rem;
  background-color: ${(props) => props.theme.colors.line};
  border: none;
`;

// Lista de beneficios
const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.textPrimary};
    
    .check {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1rem;
      height: 1rem;
      background-color: hsl(189, 92%, 58%);
      border-radius: 50%;
      
      .check_svg {
        width: 0.75rem;
        height: 0.75rem;
        fill: ${(props) => props.theme.colors.background};
      }
    }
  }
`;

// Estilos del enlace del botón
const ButtonGetPlan = styled.a`
  cursor: pointer;
  padding: 0.5rem;
  font-weight: bold;
  width: 100%;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: #31d9f6;
  border-radius: 20px;
  text-align: center;
  text-shadow: 0px 0px 1px black;
  box-shadow: inset -1px -1px 3px white;
  border: none;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      120deg,
      rgba(227, 227, 227, 0) 0%,
      rgba(227, 227, 227, 0) 40%,
      rgba(227, 227, 227, 0.5) 50%,
      rgba(227, 227, 227, 0) 60%,
      rgba(227, 227, 227, 0) 100%
    );
    animation: gradient-animation_2 2s linear infinite;
  }

  @keyframes gradient-animation_2 {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;

// Componente ServiceCard
const ServiceCard = ({ title, description, benefits, buttonText, link }) => (
  <PlanCard>
    <PlanTitle>
      {title}
      <p className="card_paragraph">{description}</p>
    </PlanTitle>
    <Line />
    <BenefitsList>
      {benefits.map((benefit, index) => (
        <li key={index}>
          <span className="check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="check_svg"
            >
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span>{benefit}</span>
        </li>
      ))}
    </BenefitsList>
    {/* Aquí pasamos el enlace del botón */}
    <ButtonGetPlan href={link}>
      {buttonText}
    </ButtonGetPlan>
  </PlanCard>
);

export default ServiceCard;
