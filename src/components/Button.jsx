import styled from 'styled-components';

const Button = styled.button`
  width: ${(props) => props.width || '200px'};  
  height: ${(props) => props.height || '50px'};
  background-color: ${(props) =>
    props.$customColor ? props.$customColor : props.theme.colors.backgroundButton};  /* Usar el color de atención según el tema o el customColor */
  color: ${(props) =>
    props.$customTextColor ? props.$customTextColor : props.theme.colors.textButton};  /* Texto según el tema */
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  span {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: top 0.5s;
  }

  .btn-text-one {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .btn-text-two {
    position: absolute;
    width: 100%;
    top: 150%;
    left: 0;
    transform: translateY(-50%);
  }

  &:hover .btn-text-one {
    top: -100%;
  }

  &:hover .btn-text-two {
    top: 50%;
  }
`;

export default Button;
