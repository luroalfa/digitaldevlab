import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Contenedor del dropdown
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

// Estilos para el botón que muestra el idioma seleccionado
const SelectedLanguage = styled.div`
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
const DropdownMenu = styled.div`
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
const DropdownItem = styled.div`
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

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', flag: 'https://flagsapi.com/US/flat/64.png' },
    { code: 'es', flag: 'https://flagsapi.com/ES/flat/64.png' },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
    setIsOpen(false); // Cierra el dropdown después de seleccionar el idioma
  };

  const selectedLanguage = languages.find((lang) => lang.code === selectedLang);

  return (
    <Dropdown>
      {/* Idioma seleccionado */}
      <SelectedLanguage onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedLanguage.flag} alt={selectedLanguage.code} />
      </SelectedLanguage>

      {/* Opciones de idiomas */}
      {isOpen && (
        <DropdownMenu>
          {languages.map((lang) => (
            <DropdownItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <img src={lang.flag} alt={lang.code} />
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

export default LanguageDropdown;
