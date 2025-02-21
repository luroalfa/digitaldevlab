import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import Menu from './components/Header/Menu';
import { lightTheme, darkTheme } from './theme';
import GlobalStyles from './styles/globalStyles';
import 'antd/dist/reset.css';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import './config/i18n';
import Services from './pages/Services/Services';
import WebDevelopmentPage from './pages/WebDevelopmentPage/WebDevelopmentPage';
import NotFound from './components/NotFound';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
