// FloatingWhatsAppButton.js
import React from 'react';
import { FloatButton } from 'antd';
import {
  WhatsAppButton,
  WhatsAppIcon,
  StyledComponents,
} from './FloatingWhatsAppButtonStyles';

const FloatingWhatsAppButton = () => {
  return (
    <>
      <FloatButton.BackTop style={{ left: 20 }} />
      <StyledComponents>
        <WhatsAppButton href="https://wa.me/50670031154" target="_blank">
          <WhatsAppIcon />
        </WhatsAppButton>
      </StyledComponents>
    </>
  );
};

export default FloatingWhatsAppButton;
