import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom'; // Cambia useHistory por useNavigate

// Estilos del contenedor
const PodcastSectionWrapper = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 80px 200px;
  text-align: center;
  color: ${(props) => props.theme.colors.textPrimary};
  
  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`;

const PodcastTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.textPrimary}; /* Ajuste según el tema */
`;

const PodcastDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textPrimary}; /* Ajuste según el tema */
`;

const EpisodesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  .episode {
    background: ${(props) => props.theme.colors.primary};
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    
    /* Ajustes para el tema */
    color: ${(props) => props.theme.colors.accent};
  }

  .episode-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .episode-description {
    font-size: 1rem;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .episode-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
  }
`;

const CTAWrapper = styled.div`
  margin-top: 40px;
`;

const PodcastSection = () => {
  const navigate = useNavigate(); // Cambia useHistory por useNavigate

  // Función para manejar el clic en el CTA
  const handleCTA = () => {
    navigate('/podcast'); // Navega a la página de todos los podcasts
  };

  return (
    <PodcastSectionWrapper>
      <PodcastTitle>Podcast sobre Tecnología</PodcastTitle>
      <PodcastDescription>
        Únete a nosotros en nuestro podcast donde hablamos sobre las últimas innovaciones tecnológicas, tendencias y mucho más.
      </PodcastDescription>

      {/* Episodios recientes */}
      <EpisodesList>
        <div className="episode">
          <img
            className="episode-image"
            src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Podcast1.webp"
            alt="Episodio 1: Inteligencia Artificial"
          />
          <h3 className="episode-title">Episodio 1: Inteligencia Artificial</h3>
          <p className="episode-description">Exploramos el impacto de la IA en la vida diaria.</p>
        </div>
        <div className="episode">
          <img
            className="episode-image"
            src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Podcast1.webp"
            alt="Episodio 2: Realidad Aumentada"
          />
          <h3 className="episode-title">Episodio 2: Realidad Aumentada</h3>
          <p className="episode-description">Descubre cómo la RA está cambiando la forma en que interactuamos con el mundo.</p>
        </div>
      </EpisodesList>

      {/* CTA para ver más episodios */}
      <CTAWrapper>
        <Button onClick={handleCTA}>
          <span className="btn-text-one">Escucha más episodios</span>
          <span className="btn-text-two">Ver todos los podcasts</span>
        </Button>
      </CTAWrapper>
    </PodcastSectionWrapper>
  );
};

export default PodcastSection;
