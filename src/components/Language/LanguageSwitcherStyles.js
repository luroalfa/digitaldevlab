import styled from 'styled-components';

// Contenedor del dropdown
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

// Estilos para el botón que muestra el idioma seleccionado
export const SelectedLanguage = styled.div`
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.line};
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textButton};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

// Lista desplegable de opciones
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.line};
  border-radius: 5px;
  margin-top: 5px;
  z-index: 100;
  width: 30px;
`;

// Opción de idioma
export const DropdownItem = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
