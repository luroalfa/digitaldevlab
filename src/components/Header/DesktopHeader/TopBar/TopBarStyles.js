// TopBarStyles.js
import styled, { keyframes } from 'styled-components';
import { Button, Statistic } from 'antd';

const { Countdown } = Statistic;

// Animación del marquee para desplazarse sin espacios
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const TopBarWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.accent};
  padding: 5px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  overflow: hidden;
  font-size: 0.9rem;
`;

export const MarqueeWrapper = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
`;

export const MarqueeTrack = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 15px; /* Espacio entre elementos */
  animation: ${scrollAnimation} 120s linear infinite; /* Animación fluida */
  width: max-content; /* Asegura que no haya huecos */
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  border: none;
  padding: 2px 8px;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledCountdown = styled(Countdown)`
  .ant-statistic-content-value {
    color: ${(props) => props.theme.colors.accent};
  }

  .ant-statistic-title {
    color: ${(props) => props.theme.colors.accent};
  }
`;
