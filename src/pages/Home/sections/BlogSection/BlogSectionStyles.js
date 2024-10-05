import styled from 'styled-components';

// Estilos del contenedor de la sección del blog
export const BlogSectionWrapper = styled.section`
  padding: 100px 15%;
  background-color: ${(props) => props.theme.colors.primary};
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

export const BlogPreview = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BlogImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const BlogContent = styled.div`
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