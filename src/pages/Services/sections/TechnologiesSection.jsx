import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiGithub, SiPostgresql, SiFigma, SiStyledcomponents, SiNetlify, SiAntdesign, SiInkscape } from 'react-icons/si';
import { FaAws } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
const TechSectionWrapper = styled.section`
  padding: 60px 250px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px; /* Reducimos el padding para pantallas pequeñas */
  }
`;

const TechTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem; /* Reducimos el tamaño de la fuente en móviles */
  }
`;

const TechDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 1rem; /* Ajustamos la fuente para mejor legibilidad en móviles */
    margin-bottom: 20px; /* Reducimos el margen en la parte inferior */
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Ya tienes este ajuste, lo mantenemos */
    gap: 20px; /* Reducimos el espacio entre los elementos */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Para pantallas muy pequeñas, mostramos una columna */
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 2.5rem; /* Reducimos el tamaño de los íconos en móviles */
    }

    @media (max-width: 480px) {
      font-size: 2rem; /* Aún más pequeño en pantallas muy pequeñas */
    }
  }

  h3 {
    margin-top: 15px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: 768px) {
      font-size: 1rem; /* Reducimos el tamaño de la fuente */
    }

    @media (max-width: 480px) {
      font-size: 0.9rem; /* Aún más pequeño para pantallas pequeñas */
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (max-width: 768px) {
      font-size: 0.9rem; /* Ajustamos el tamaño de la descripción */
    }

    @media (max-width: 480px) {
      font-size: 0.8rem; /* Para pantallas muy pequeñas */
    }
  }
`;


const TechnologiesSection = () => {
    return (
        <TechSectionWrapper>
            <TechTitle>Tecnologías que Impulsan Nuestros Proyectos</TechTitle>
            <TechDescription>
                En Digital DevLab, utilizamos las tecnologías más avanzadas para crear soluciones innovadoras y escalables. Estas herramientas nos permiten ofrecer servicios de alto rendimiento, seguridad, y optimización en cada proyecto, adaptándonos a las necesidades específicas de tu negocio.
            </TechDescription>
            <TechGrid>
                <TechItem>
                    <FaReact />
                    <h3>React</h3>
                    <p>Framework moderno para aplicaciones interactivas y rápidas.</p>
                </TechItem>
                <TechItem>
                    <SiGithub />
                    <h3>GitHub</h3>
                    <p>Gestión de código eficiente y colaboración en equipo.</p>
                </TechItem>
                <TechItem>
                    <FaNodeJs />
                    <h3>Node.js</h3>
                    <p>Backend rápido y escalable para aplicaciones web.</p>
                </TechItem>
                <TechItem>
                    <SiFigma />
                    <h3>Figma</h3>
                    <p>Diseños colaborativos en tiempo real para interfaces.</p>
                </TechItem>
                <TechItem>
                    <SiJavascript />
                    <h3>JavaScript</h3>
                    <p>Lenguaje dinámico para aplicaciones web interactivas.</p>
                </TechItem>
                <TechItem>
                    <FaAws />
                    <h3>AWS</h3>
                    <p>Soluciones en la nube escalables y seguras.</p>
                </TechItem>
                <TechItem>
                    <SiStyledcomponents />
                    <h3>Styled Components</h3>
                    <p>Estilos dinámicos para aplicaciones modernas y rápidas.</p>
                </TechItem>
                <TechItem>
                    <SiPostgresql />
                    <h3>PostgreSQL</h3>
                    <p>Base de datos potente y escalable para aplicaciones complejas.</p>
                </TechItem>
                <TechItem>
                    <SiNetlify />
                    <h3>Netlify</h3>
                    <p>Hosting rápido y confiable para sitios web estáticos.</p>
                </TechItem>
                <TechItem>
                    <RiFirebaseFill />
                    <h3>Firebase</h3>
                    <p>Backend en tiempo real para aplicaciones dinámicas.</p>
                </TechItem>
                <TechItem>
                    <SiAntdesign />
                    <h3>Ant Design</h3>
                    <p>Componentes UI para aplicaciones elegantes y funcionales.</p>
                </TechItem>
                <TechItem>
                    <SiInkscape />
                    <h3>Inkscape</h3>
                    <p>Diseños vectoriales para logotipos y gráficos personalizados.</p>
                </TechItem>
            </TechGrid>
        </TechSectionWrapper>
    );
};

export default TechnologiesSection;
