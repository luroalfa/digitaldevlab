import styled from 'styled-components';
import HighterOrderFunctions from '../../assets/highterorderfunction.png';

// Contenedor principal con padding en los costados
const SectionWrapper = styled.section`
  padding: 175px 15%;  /* Añade más padding a los costados */
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};  /* Texto primario según el tema */

  @media (max-width: 768px) {
    padding: 20px 5%;
  }

  h1 {
    color: ${(props) => props.theme.colors.accent};  /* Título principal según el tema */
    font-family: ${(props) => props.theme.fonts.heading};  /* Fuente del título */
  }

  p {
    font-family: ${(props) => props.theme.fonts.body};  /* Fuente del cuerpo de texto */
    color: ${(props) => props.theme.colors.textPrimary};  /* Texto del párrafo según el tema */
  }
`;

// Ajustes a los "cards"
const CardLink = styled.a`
  text-decoration: none;
  color: inherit;  /* Para mantener los colores de texto según el tema */
  width: 250px;
  margin: 10px;
  border-radius: 8px;
  display: block;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Sombra en hover */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Estilos para la imagen del card
const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.accent};  /* Color del título según el tema */
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textPrimary};  /* Texto de la descripción según el tema */
  margin-bottom: 15px;
`;

// Componente principal
const BlogPage = () => {
  return (
    <SectionWrapper>
      <h1>Explora Temas de Programación</h1>
      <p>Aprende sobre los temas más importantes en el desarrollo web y móvil. Aquí encontrarás guías y artículos de calidad para mejorar tus habilidades.</p>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <CardLink href="/high-order-functions">
          <Card>
            <CardImage src={HighterOrderFunctions} alt="Funciones de Orden Superior" /> {/* Aquí se coloca la imagen */}
            <CardTitle>Funciones de Orden Superior</CardTitle>
            <CardDescription>
              Descubre cómo usar funciones de orden superior en JavaScript para manipular arrays y crear código más limpio y reutilizable.
            </CardDescription>
          </Card>
        </CardLink>
      </div>
    </SectionWrapper>
  );
};

export default BlogPage;
