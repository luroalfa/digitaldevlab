import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import LanguageSwitcher from '../../Language/LanguageSwitcher';
import ThemeSwitch from '../../ThemeSwitch';
import TopBar from '../DesktopHeader/TopBar/TopBar';
import PropTypes from 'prop-types';
import {HamburgerLabel, LogoContainer, MobileNav, StyledDrawer} from './MobileHeaderStyles'

const MobileHeader = ({ toggleTheme, isTopBarVisible, isDarkTheme }) => {
  const [visible, setVisible] = useState(false); 
  const navigate = useNavigate(); 

  const onClose = () => {
    setVisible(false); 
  };

  const handleLogoClick = () => {
    navigate('/'); 
    onClose(); 
  };

  return (
    <>
      {isTopBarVisible && <TopBar />}

      <MobileNav $isTopBarVisible={isTopBarVisible}>
        <LogoContainer onClick={handleLogoClick}>
          <h2>DIGITAL DEVLAB</h2>
        </LogoContainer>
        <HamburgerLabel onClick={() => setVisible(!visible)}>
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </HamburgerLabel>
      </MobileNav>

      <StyledDrawer
        title="Menú"
        placement="right"
        closable={true}
        onClose={onClose}
        open={visible}
      >
        <div
          style={{
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <ThemeSwitch toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
        <ul>
          <li>
            <Link to="/" onClick={onClose}>Inicio</Link>
          </li>
          <li>
            <Link to="/services" onClick={onClose}>Servicios</Link>
          </li>
          <li>
            <Link to="/about" onClick={onClose}>Acerca de</Link>
          </li>
          <li>
            <Link to="/contact" onClick={onClose}>Contacto</Link>
          </li>
        </ul>
      </StyledDrawer>
    </>
  );
};

MobileHeader.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
  isTopBarVisible: PropTypes.bool.isRequired,
}

export default MobileHeader;
