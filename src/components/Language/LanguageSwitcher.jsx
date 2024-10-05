import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownItem, DropdownMenu, SelectedLanguage } from './LanguageSwitcherStyles'

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  // Lista de idiomas con banderas
  const languages = [
    { code: 'en', flag: 'https://flagsapi.com/US/flat/64.png' },
    { code: 'es', flag: 'https://flagsapi.com/ES/flat/64.png' },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
    setIsOpen(false); // Cierra el dropdown después de seleccionar el idioma
  };

  // Verificamos que el idioma seleccionado exista
  const selectedLanguage = languages.find((lang) => lang.code === selectedLang);

  // Si no encuentra el idioma, mostramos una bandera por defecto o de fallback
  const fallbackFlag = 'https://flagsapi.com/US/flat/64.png'; // Puedes cambiarla según tu necesidad

  return (
    <Dropdown>
      {/* Idioma seleccionado */}
      <SelectedLanguage onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedLanguage ? selectedLanguage.flag : fallbackFlag} alt={selectedLanguage ? selectedLanguage.code : 'default'} />
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
