// LanguageDropdown.styles.js
import styled from 'styled-components';

export const Select = styled.select`
  padding: 2px 4px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundButton};
  color: ${(props) => props.theme.colors.textButton};
  border: 1px solid ${(props) => props.theme.colors.line};
  font-size: 0.8em;
  font-family: ${(props) => props.theme.fonts.body};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  appearance: none; /* Oculta el selector nativo */
  background-image: url('path/to/your/icon.svg'); /* Añade un ícono si lo deseas */
  background-repeat: no-repeat;
  background-position: right 10px center;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.textPrimary};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent}; 
  }
`;

export const Option = styled.option`
  display: none; /* Oculta las opciones del selector */
`;
