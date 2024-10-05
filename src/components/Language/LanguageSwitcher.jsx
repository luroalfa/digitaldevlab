import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownItem, DropdownMenu, SelectedLanguage } from './LanguageSwitcherStyles'

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
