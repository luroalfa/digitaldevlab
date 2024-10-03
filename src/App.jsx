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
import './i18n';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Función para alternar el tema
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Menu toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
