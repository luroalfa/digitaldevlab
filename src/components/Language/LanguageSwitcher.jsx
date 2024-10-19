import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownItem, DropdownMenu, SelectedLanguage } from './LanguageSwitcherStyles';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  
  // Asegúrate de que el estado inicial sea 'es' o el idioma actual de i18n
  const [selectedLang, setSelectedLang] = useState(i18n.language || 'es');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', flag: 'https://flagsapi.com/US/flat/64.png', alt: 'Idioma Inglés' },
    { code: 'es', flag: 'https://flagsapi.com/ES/flat/64.png', alt: 'Idioma Español' },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code); // Cambia el idioma en i18n
    setSelectedLang(code); // Actualiza el estado con el idioma seleccionado
    setIsOpen(false); // Cierra el menú desplegable
  };

  const selectedLanguage = languages.find((lang) => lang.code === selectedLang);
  const fallbackFlag = 'https://flagsapi.com/ES/flat/64.png'; // Bandera de respaldo en caso de error

  // Asegurarse de que el idioma inicial sea 'es' si no hay ninguno configurado
  useEffect(() => {
    if (!selectedLang) {
      setSelectedLang('es');
      i18n.changeLanguage('es');
    }
  }, [selectedLang, i18n]);

  return (
    <Dropdown>
      <SelectedLanguage onClick={() => setIsOpen(!isOpen)}>
        <img
          src={selectedLanguage ? selectedLanguage.flag : fallbackFlag}
          alt={selectedLanguage ? selectedLanguage.alt : 'Bandera'}
        />
      </SelectedLanguage>

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
