import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Estilos para el dropdown ajustado con el tema
const Select = styled.select`
  padding: 2px 4px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundButton};
  color: ${(props) => props.theme.colors.textButton}; // Cambiado para usar el color del texto en el botón
  border: 1px solid ${(props) => props.theme.colors.line}; // Ajuste del borde con el tema
  font-size: 0.8em;
  font-family: ${(props) => props.theme.fonts.body}; // Usar la fuente del tema
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary}; // Color de fondo al pasar el ratón
    color: ${(props) => props.theme.colors.textPrimary}; // Color de texto durante hover
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent}; 
  }
`;

const Option = styled.option`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};
`;

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  useEffect(() => {
    // Esto se ejecuta cuando el componente se monta
    const handleLanguageChange = (lng) => {
      i18n.changeLanguage(lng);
    };

    // Escuchar el evento de cambio de idioma
    i18n.on('languageChanged', (lng) => {
      // Actualiza el valor en el dropdown
      setSelectedLang(lng);
    });

    // Cleanup listener al desmontar el componente
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLang(newLanguage);
  };

  return (
    <Select value={selectedLang} onChange={handleLanguageChange}>
      <Option value="en">English</Option>
      <Option value="es">Español</Option>
    </Select>
  );
};

export default LanguageDropdown;
