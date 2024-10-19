import {
  FooterWrapper,
  FooterContent,
  LogoColumn,
  ContactColumn,
  QuickLinksColumn,
  SocialMediaColumn,
  BottomDisclaimer,
  Icons
} from './FooterStyles';

// Componente principal del Footer
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoColumn>
          <h3>DIGITAL DEVLAB</h3>
          <p>Innovando tu futuro digital</p>
          <p><Icons.FaMapMarkerAlt /> Costa Rica, Alajuela</p>
        </LogoColumn>

        <ContactColumn>
          <h3>Contacto</h3>
          <p><Icons.FaPhoneAlt /> Residencial: +506 4419 4857</p>
          <p><Icons.FaMobileAlt /> Móvil: +506 7003 1154</p>
          <p><Icons.FaEnvelope /> Email: info@digitaldevlab.com</p>
        </ContactColumn>

        <QuickLinksColumn>
          <h3>Links Rápidos</h3>
          <a href="#home"><Icons.FaHome /> Inicio</a>
          <a href="#services"><Icons.FaServicestack /> Servicios</a>
          <a href="#about"><Icons.FaInfoCircle /> Acerca de</a>
          <a href="#contact"><Icons.LiaBlogSolid /> Blog</a>
          <a href="#contact"><Icons.FaEnvelope /> Contacto</a>
        </QuickLinksColumn>

        <SocialMediaColumn>
          <h3>Síguenos</h3>
          <div>
            <a href="https://facebook.com" aria-label="Facebook"><Icons.FaFacebookF /></a>
          </div>
        </SocialMediaColumn>
      </FooterContent>

      <BottomDisclaimer>
        <p>&copy; {new Date().getFullYear()} Digital DevLab. Todos los derechos reservados.</p>
      </BottomDisclaimer>
    </FooterWrapper>
  );
};

export default Footer;
