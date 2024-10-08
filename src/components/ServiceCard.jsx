import styled from 'styled-components';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Estilos del contenedor de la tarjeta
const PlanCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 15rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  ${(props) =>
    props.theme.colors.primary === '#0A2540' && `border: 1px solid rgba(255, 255, 255, 0.1); background-color: #2a3b4c;`
  }
`;

const PlanTitle = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: bold;
  .card_paragraph {
    font-weight: normal;
    margin-top: 0.25rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 0.05rem;
  background-color: ${(props) => props.theme.colors.line};
  border: none;
`;

const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
  align-items: flex-start;
  text-align: left;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.textPrimary};
    
    .check {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1rem;
      height: 1rem;
      background-color: hsl(189, 92%, 58%);
      border-radius: 50%;
      min-width: 16px;      
      .check_svg {
        width: 0.75rem;
        height: 0.75rem;
        fill: ${(props) => props.theme.colors.background};
      }
    }
  }
`;


// Componente ServiceCard
const ServiceCard = ({ title, description, benefits, buttonText, link }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link)
  }
  return (
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
      <Button width="100%" height="35px" className="animate__animated animate__bounceIn animate__delay-2s" onClick={() => handleRedirect(link)}>
        <span className="btn-text-one">{buttonText}</span>
        <span className="btn-text-two">{t('serviceCard.textButton')}</span>
      </Button>
    </PlanCard>
  )
};

export default ServiceCard;
