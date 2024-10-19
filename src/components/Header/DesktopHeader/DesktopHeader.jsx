import styled, { keyframes } from 'styled-components';
import LogoDark from '../../../assets/logo-dark.svg';
import LogoLight from '../../../assets/logo-light.svg';
import ThemeSwitch from '../../ThemeSwitch';
import TopBar from './TopBar/TopBar';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../../Language/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  top: ${({ $isTopBarVisible }) => ($isTopBarVisible ? '47px' : '0')}; /* Dinámico según la visibilidad del TopBar */
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  animation: ${fadeInDown} 0.8s ease-out;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const NavLink = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  color: ${(props) => (props.isActive ? props.theme.colors.secondary : props.theme.colors.accent)};
  text-decoration: none;
  padding: 10px 15px;
  border-bottom: ${(props) => (props.isActive ? `2px solid ${props.theme.colors.secondary}` : 'none')};
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

// Contenedor para el logo
const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: auto;
    margin-right: 10px;
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 2rem;
    color: ${(props) => props.theme.colors.accent};
    margin: 0;
  }
`;

const DesktopHeader = ({ toggleTheme, isDarkTheme, isTopBarVisible }) => {
  const { t } = useTranslation(); 

  return (
    <>
      {isTopBarVisible && <TopBar />}

      <DesktopNav $isTopBarVisible={isTopBarVisible}>
        <LogoContainer>
          <img src={isDarkTheme ? LogoLight : LogoDark} alt="Digital DevLab Logo" />
          <h2>DIGITAL DEVLAB</h2>
        </LogoContainer>

        <ul>
          <li>
            <NavLink to="/" isActive={location.pathname === '/'}>
              {t('menu.home')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" isActive={location.pathname === '/services'}>
              {t('menu.services')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" isActive={location.pathname === '/about'}>
              {t('menu.about')}
            </NavLink>
          </li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
          <ThemeSwitch toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
      </DesktopNav>
    </>
  );
};

export default DesktopHeader;
