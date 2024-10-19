import styled, { keyframes } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

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

export const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  top: ${({ $isTopBarVisible }) => ($isTopBarVisible ? '47px' : '0')};
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

export const NavLink = styled(RouterNavLink)`
  color: ${(props) =>
    props.isActive ? props.theme.colors.secondary : props.theme.colors.accent};
  text-decoration: none;
  padding: 10px 15px;
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${props.theme.colors.secondary}` : 'none'};
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  &.active {
    color: ${(props) => props.theme.colors.secondary};
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer; /* Indica que es clicable */

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