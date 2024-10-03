import React from 'react';
import styled from 'styled-components';
import blogImage from '../../../assets/highterorderfunction.png';// Imagen genérica para el blog

// Estilos del contenedor de la sección del blog
const BlogSectionWrapper = styled.section`
  padding: 100px 15%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: 768px) {
    padding: 50px 5%;
  }

  h2 {
    color: ${(props) => props.theme.colors.accent};
    font-family: ${(props) => props.theme.fonts.heading};
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.textPrimary};
    text-align: center;
    margin-bottom: 40px;
  }
`;

const BlogPreview = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  `;

const BlogImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  `;

const BlogContent = styled.div`
  max-width: 500px;
  text-align: left;
  
  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.accent};
    margin-bottom: 15px;
    }
    
    p {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.textPrimary};
        margin-bottom: 20px;
        }
 
    @media (max-width: 768px) {
            display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const BlogButton = styled.a`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textOnAttention};
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.textOnAttention};
  }
`;

const BlogSection = () => {
    return (
        <BlogSectionWrapper>
            <h2>Explora Nuestro Blog</h2>
            <p>Visita nuestro blog para descubrir artículos inspiradores, consejos de productividad y recursos valiosos para mejorar tu día a día.</p>

            <BlogPreview>
                <BlogImage src={blogImage} alt="Vista previa del blog" />
                <BlogContent>
                    <h3>Descubre Historias y Consejos Inspiradores</h3>
                    <p>
                        Explora nuestras guías sobre desarrollo personal, productividad, y relatos de personas que han superado grandes desafíos.
                        Encuentra inspiración y recursos que te ayudarán a mejorar en diferentes aspectos de tu vida.
                    </p>
                    <BlogButton href="/blog">Visitar el Blog</BlogButton>
                </BlogContent>
            </BlogPreview>
        </BlogSectionWrapper>
    );
};

export default BlogSection;
