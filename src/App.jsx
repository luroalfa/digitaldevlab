import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import Menu from './components/Header/Menu';
import { lightTheme, darkTheme } from './theme';
import GlobalStyles from './styles/globalStyles';
import 'antd/dist/reset.css';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import BlogPage from './pages/Blog/BlogPage';
import './config/i18n';
import Services from './pages/Services/Services';
import WebDevelopmentPage from './pages/WebDevelopmentPage/WebDevelopmentPage';
import WebDevBasicPage from './pages/WebDevBasicPage/WebDevBasicPage';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Función para alternar el tema
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<Services toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/web-development/web-basic" element={<WebDevBasicPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
