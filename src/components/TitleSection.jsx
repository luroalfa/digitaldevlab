import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.$customColor || props.theme.colors.accent};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 10px;
  font-size: 2.5rem;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : 'none')} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TitleSection = ({ titleText, isVisible = true, customColor }) => {
  return (
    <Title $isVisible={isVisible} $customColor={customColor}>
      {titleText}
    </Title>
  );
};

TitleSection.propTypes = {
  titleText: PropTypes.string.isRequired,
  isVisible: PropTypes.bool, 
  customColor: PropTypes.string, 
};

TitleSection.defaultProps = {
  isVisible: true,
  customColor: '',
};

export default TitleSection;
