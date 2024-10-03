import React from 'react';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import MobileHeader from './MobileHeader';
import { useMediaQuery } from 'react-responsive';

const Menu = ({ toggleTheme, isDarkTheme }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <>
            {isMobile ? <MobileHeader toggleTheme={toggleTheme} /> : <DesktopHeader toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
        </>
    );
};

export default Menu;
