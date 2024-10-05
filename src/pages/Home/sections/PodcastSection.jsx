import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook para traducciones

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
  color: ${(props) => props.theme.colors.textPrimary};
`;

const PodcastDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textPrimary};
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
  const navigate = useNavigate();
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  // Función para manejar el clic en el CTA
  const handleCTA = () => {
    navigate('/podcast'); // Navega a la página de todos los podcasts
  };

  return (
    <PodcastSectionWrapper>
      <PodcastTitle>{t('podcast.title')}</PodcastTitle>
      <PodcastDescription>{t('podcast.description')}</PodcastDescription>

      {/* Episodios recientes */}
      <EpisodesList>
        <div className="episode">
          <img
            className="episode-image"
            src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Podcast1.webp"
            alt={t('podcast.episode1.alt')}
          />
          <h3 className="episode-title">{t('podcast.episode1.title')}</h3>
          <p className="episode-description">{t('podcast.episode1.description')}</p>
        </div>
        <div className="episode">
          <img
            className="episode-image"
            src="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/Podcast1.webp"
            alt={t('podcast.episode2.alt')}
          />
          <h3 className="episode-title">{t('podcast.episode2.title')}</h3>
          <p className="episode-description">{t('podcast.episode2.description')}</p>
        </div>
      </EpisodesList>

      {/* CTA para ver más episodios */}
      <CTAWrapper>
        <Button onClick={handleCTA}>
          <span className="btn-text-one">{t('podcast.cta.text1')}</span>
          <span className="btn-text-two">{t('podcast.cta.text2')}</span>
        </Button>
      </CTAWrapper>
    </PodcastSectionWrapper>
  );
};

export default PodcastSection;
