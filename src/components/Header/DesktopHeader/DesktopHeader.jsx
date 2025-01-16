import LogoDark from '../../../assets/logo-dark.svg';
import LogoLight from '../../../assets/logo-light.svg';
import ThemeSwitch from '../../ThemeSwitch';
// import TopBar from './TopBar/TopBar';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../../Language/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { DesktopNav, LogoContainer, NavLink } from './DesktopHeaderStyles';

const DesktopHeader = ({ toggleTheme, isDarkTheme, isTopBarVisible }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      {/* {isTopBarVisible && <TopBar />} */}

      <DesktopNav $isTopBarVisible={isTopBarVisible}>
        <LogoContainer onClick={handleLogoClick}>
          <img
            src={isDarkTheme ? LogoLight : LogoDark}
            alt="Digital DevLab Logo"
          />
          <h2>DIGITAL DEVLAB</h2>
        </LogoContainer>

        <ul>
          <li>
            <NavLink to="/"> {/* Eliminamos 'exact' */}
              {t('menu.home')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              {t('menu.services')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {t('menu.about')}
            </NavLink>
          </li>
        </ul>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <ThemeSwitch toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
      </DesktopNav>
    </>
  );
};

DesktopHeader.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
  isTopBarVisible: PropTypes.bool.isRequired,
};

export default DesktopHeader;
