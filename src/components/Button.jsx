import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.secondary};  /* Color sólido */
  color: ${(props) => props.theme.colors.primary};  /* Texto según el tema */
  border-radius: 50px;
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

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};  /* Color de fondo al hacer hover */
    color: ${(props) => props.theme.colors.primary};  /* Cambia el color del texto en hover */
  }
`;

export default Button;
