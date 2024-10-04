import React from 'react';
import styled from 'styled-components';
import { Timeline, Image } from 'antd';
import { UserOutlined, SketchOutlined, CodeOutlined, BugOutlined, CloudUploadOutlined, SyncOutlined } from '@ant-design/icons';
import workflowGif from '../../../assets/Timeline.gif';
import TitleSection from '../../../components/TitleSection';
import { useTranslation } from 'react-i18next';

// Contenedor principal de la sección
const WorkflowContainer = styled.section`
  padding: 80px 200px;
  background-color: ${(props) => props.theme.colors.primary}; /* Fondo basado en el tema */
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px; /* Ajustamos el padding en pantallas pequeñas */
  }
`;

// Contenedor para el contenido y la imagen GIF
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Línea debajo del título
const Underline = styled.div`
  width: 80px;
  height: 4px;
  background-color: ${(props) => props.theme.colors.secondary}; /* Color secundario del tema */
  margin: 0 auto 40px;
`;

// Componente de flujo de trabajo usando Timeline de Ant Design
const WorkflowTimeline = styled(Timeline)`
  flex: 2; /* Aumentamos el espacio del timeline */
  max-width: 800px;
  min-width: 300px;
  margin: 0 auto;
  text-align: left;

  .ant-timeline-item-content {
    font-size: 1.1rem;
    font-family: ${(props) => props.theme.fonts.body}; /* Fuente del tema */
    color: ${(props) => props.theme.colors.textPrimary}; /* Texto principal basado en el tema */
  }

  .ant-timeline-item-label {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.accent}; /* Aplicar el color basado en el tema */
  }

  .ant-timeline-item-head {
    background-color: ${(props) => props.theme.colors.secondary}; /* Color de los puntos del timeline */
  }

  /* Aplicar el color a la línea vertical */
  .ant-timeline-item-tail {
    background-color: ${(props) => props.theme.colors.secondary}; /* Color de la línea vertical */
  }

  @media (max-width: 768px) {
    .ant-timeline-item-content {
      font-size: 0.9rem; /* Reducimos el tamaño de la fuente en dispositivos móviles */
    }

    .ant-timeline-item-label {
      font-size: 0.8rem; /* Reducimos el tamaño de las etiquetas */
    }

    /* Alinear el timeline a la izquierda para dispositivos móviles */
    .ant-timeline-item {
      text-align: left !important;
    }
  }
`;

// Estilo para la imagen GIF con opción de vista previa
const GifWrapper = styled.div`
  flex: 1.5; /* Aumentamos el tamaño del contenedor para darle más espacio a la imagen */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%; /* Hacemos que la imagen ocupe el 100% de su contenedor */
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Sombra para darle profundidad */
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
    img {
      max-width: 100%;
    }
  }
`;

// Componente principal
const WorkflowSection = () => {
  const { t } = useTranslation(); // Usamos el hook de traducción

  const timelineItems = [
    {
      label: t('workflow.initialMeeting'), // Texto traducido
      dot: <UserOutlined />,
      children: t('workflow.understandClientNeeds'), // Texto traducido
    },
    {
      label: t('workflow.planning'),
      dot: <SketchOutlined />,
      children: t('workflow.defineGoalsAndDeadlines'),
    },
    {
      label: t('workflow.design'),
      dot: <SketchOutlined />,
      children: t('workflow.createWireframes'),
    },
    {
      label: t('workflow.development'),
      dot: <CodeOutlined />,
      children: t('workflow.implementSolution'),
    },
    {
      label: t('workflow.testing'),
      dot: <BugOutlined />,
      children: t('workflow.verifyAndFixBugs'),
    },
    {
      label: t('workflow.review'),
      dot: <SyncOutlined />,
      children: t('workflow.presentAndFeedback'),
    },
    {
      label: t('workflow.deployment'),
      dot: <CloudUploadOutlined />,
      children: t('workflow.publishProject'),
    },
    {
      label: t('workflow.support'),
      dot: <SyncOutlined />,
      children: t('workflow.maintenance'),
    },
  ];

  return (
    <WorkflowContainer>
      <TitleSection titleText={t('workflow.workflowTitle')} isVisible={true} />
      <Underline />
      <ContentWrapper>
        <WorkflowTimeline mode="alternate" items={timelineItems} />
        <GifWrapper>
          <Image
            width={600}
            src={workflowGif}
            alt={t('workflow.processImageAlt')}
            preview={true}
          />
        </GifWrapper>
      </ContentWrapper>
    </WorkflowContainer>
  );
};


export default WorkflowSection;
