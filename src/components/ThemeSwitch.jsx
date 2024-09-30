import React from 'react';
import styled from 'styled-components';

const Switch = styled.label`
  font-size: 14px; /* Reducimos el tamaño de la fuente */
  position: relative;
  display: inline-block;
  width: 2.5em; /* Hacemos el switch más pequeño */
  height: 1.6em; /* Reducimos la altura */

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #223243;
    transition: 0.4s;
    border-radius: 30px;
    border: 2px solid ${(props) => (props.theme.colors.background === '#223243' ? '#fff' : '#ccc')}; /* Borde dinámico dependiendo del tema */

    &:before {
      position: absolute;
      content: "";
      height: 1em; /* Reducimos el tamaño del círculo */
      width: 1em;
      border-radius: 20px;
      left: 0.2em;
      bottom: 0.2em;
      background-color: #223243;
      box-shadow: inset 2px -2px 0 1.5px #fff; /* Ajustamos el tamaño de la sombra */
      transition: 0.4s;
      animation: anima1 0.3s linear;
    }
  }

  input:checked + .slider {
    background-color: #555; /* Color de fondo cuando está activado (puedes ajustarlo según el modo) */
  }

  input:checked + .slider:before {
    background-color: yellow;
    box-shadow: none;
    transform: translateX(1em); /* Ajustamos la distancia del movimiento */
    animation: anima 0.3s linear;
  }

  @keyframes anima1 {
    0% {
      transform: translateX(1.1em);
    }

    80% {
      transform: translateX(-0.2em);
    }

    100% {
      transform: translateX(0em);
    }
  }

  @keyframes anima {
    0% {
      transform: translateX(0px);
    }

    80% {
      transform: translateX(1.2em);
    }

    100% {
      transform: translateX(1.1em);
    }
  }
`;

const ThemeSwitch = ({ toggleTheme }) => {
    return (
        <Switch>
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slider"></span>
        </Switch>
    );
};

export default ThemeSwitch;
