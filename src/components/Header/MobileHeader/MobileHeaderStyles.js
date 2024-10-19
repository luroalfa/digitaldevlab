import styled from 'styled-components';
import { Drawer } from 'antd';

export const MobileNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.background};
  position: sticky;
  top: ${({ $isTopBarVisible }) => ($isTopBarVisible ? '47px' : '0')};
  z-index: 1000;
`;

export const HamburgerLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: ${(props) => props.theme.colors.textBackground};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  input:checked + & .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-content {
    background-color: ${(props) => props.theme.colors.background};
  }
  .ant-drawer-body {
    background-color: ${(props) => props.theme.colors.background} !important;
  }
  .ant-drawer-header {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textBackground};
    border-bottom: 1px solid ${(props) => props.theme.colors.accent};
  }
  .ant-drawer-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 20px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  li {
    margin: 10px 0;
  }

  a {
    color: ${(props) => props.theme.colors.accent};
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer; 
  h2 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.accent};
    margin: 0;
  }
`;
