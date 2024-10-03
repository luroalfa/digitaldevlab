// TopBarStyles.js
import styled, { keyframes } from 'styled-components';
import { Button, Statistic } from 'antd';

const { Countdown } = Statistic;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Zoom in */
  }
  100% {
    transform: scale(1); /* Zoom out */
  }
`;

export const TopBarWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.attention};
  color: ${(props) => props.theme.colors.textOnAttention};
  padding: 10px 20px;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  transition: transform 0.3s ease;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')}; 
  animation: ${fadeIn} 0.8s ease-in-out; 
`;

export const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  flex-wrap: nowrap;
  animation: ${fadeIn} 1.2s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContactInfo = styled.div`
  white-space: nowrap; 
  margin-right: 20px;
  animation: ${fadeIn} 1.5s ease-in-out;
  display: flex;
  gap: 15px;

  strong {
    font-weight: bold;
  }

  svg {
    margin-right: 5px;
  }
`;

export const OfferSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  animation: ${fadeIn} 1.8s ease-in-out;

  strong {
    font-weight: bold;
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  border: none;
  padding: 4px 12px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
`;

export const StyledCountdown = styled(Countdown)`
  .ant-statistic-content-value {
    color: ${(props) => props.theme.colors.textOnAttention}; 
  }

  .ant-statistic-title {
    color: ${(props) => props.theme.colors.textOnAttention}; 
  }
`;

export const CountdownWrapper = styled.div`
  margin-left: 20px;
  animation: ${zoomInOut} 2s infinite ease-in-out;
`;
