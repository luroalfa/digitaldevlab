// LanguageDropdown.styles.js
import styled from 'styled-components';

// Contenedor del dropdown
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

// Estilos para el botón que muestra el idioma seleccionado
export const SelectedLanguage = styled.div`
  padding: 4px;
  border: 1px solid ${(props) => props.theme.colors.line};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center; // Centramos la bandera
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.3s ease;
  width: 36px; // Ajustamos el tamaño para que solo quepa la bandera
  height: 36px; // Mantener la relación de aspecto cuadrada

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  img {
    width: 24px; // Ajustamos el tamaño de la bandera
    height: 24px;
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
  width: 36px; // El ancho suficiente para las banderas
`;

// Opción de idioma
export const DropdownItem = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center; // Centramos la bandera
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }

  img {
    width: 24px; // Ajustamos el tamaño de la bandera en el menú
    height: 24px;
  }
`;
