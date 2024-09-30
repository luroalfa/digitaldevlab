import styled from 'styled-components';
import Button from '../../../components/Button';

const CTASection = styled.section`
  padding: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  text-align: center;
`;

const CTA = () => (
  <CTASection>
    <h2>¿Listo para comenzar?</h2>
    <Button href="#contact">Contáctanos</Button>
  </CTASection>
);

export default CTA;