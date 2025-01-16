import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Menu = ({ toggleTheme, isDarkTheme }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const location = useLocation();
  const [isTopBarVisible, setIsTopBarVisible] = useState(false);

  useEffect(() => {
    setIsTopBarVisible(location.pathname === "/");
  }, [location]);

  return (
    <>
      {isMobile ? (
        <MobileHeader
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          isTopBarVisible={false}
        />
      ) : (
        <DesktopHeader
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          isTopBarVisible={false}
        />
      )}
    </>
  );
};

Menu.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

export default Menu;
