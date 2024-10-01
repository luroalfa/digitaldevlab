// theme.js

export const lightTheme = {
  colors: {
    primary: '#F5F5F5',  // Color claro para el fondo
    accent: '#0A2540',    // Azul oscuro para textos principales o elementos destacados
    secondary: '#00BFFF', // Cian suave para acentos
    attention: '#FFC000', // Dorado suave para destacar en modo claro
    background: '#FFFFFF', // Fondo blanco general
    textOnAttention: '#000000', // Texto sobre el color de atención (ejemplo amarillo)
    textBackground: '#0A2540', // Texto sobre fondos claros (para mantener contraste)
    textPrimary: '#000000', // Texto sobre fondos claros (para mantener contraste)
    backgroundButton: '#223243',
    textButton: '#FFFFFF',
  },
  fonts: {
    heading: 'Bebas Neue, sans-serif',
    body: 'Open Sans, sans-serif',
  },
};

export const darkTheme = {
  colors: {
    primary: '#0A2540',  // Azul oscuro para fondo o áreas principales
    accent: '#F5F5F5',   // Claro para textos principales o elementos destacados
    secondary: '#00BFFF', // Cian suave para acentos
    attention: '#FF9800', // Naranja para destacar en modo oscuro
    background: '#223243', // Fondo gris oscuro general
    textOnAttention: '#000000', // Texto sobre el color de atención
    textBackground: '#FFFFFF', // Texto claro para fondos oscuros
    textPrimary: '#FFFFFF', // Texto sobre fondos oscuros (para mantener contraste)
    backgroundButton: '#F5F5F5',
    textButton: '#000000',
  },
  fonts: {
    heading: 'Bebas Neue, sans-serif',
    body: 'Open Sans, sans-serif',
  },
};
