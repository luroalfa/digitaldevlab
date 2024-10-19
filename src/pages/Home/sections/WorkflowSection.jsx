import styled from 'styled-components';
import { Timeline } from 'antd';
import { UserOutlined, SketchOutlined, CodeOutlined, BugOutlined, CloudUploadOutlined, SyncOutlined } from '@ant-design/icons';
import TitleSection from '../../../components/TitleSection';
import { useTranslation } from 'react-i18next';

// Contenedor principal de la sección
const WorkflowContainer = styled.section`
  padding: 80px 200px;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

// Contenedor para el contenido, eliminamos el contenedor de la imagen GIF
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 0 auto 40px;
`;

// Componente de flujo de trabajo usando Timeline de Ant Design
const WorkflowTimeline = styled(Timeline)`
  max-width: 800px;
  min-width: 300px;
  margin: 0 auto;
  text-align: left;

  .ant-timeline-item-content {
    font-size: 1.1rem;
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .ant-timeline-item-label {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.accent};
  }

  .ant-timeline-item-head {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  .ant-timeline-item-tail {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    .ant-timeline-item-content {
      font-size: 0.9rem;
    }

    .ant-timeline-item-label {
      font-size: 0.8rem;
    }
  }
`;

// Componente principal
const WorkflowSection = () => {
  const { t } = useTranslation();

  const timelineItems = [
    {
      label: t('workflow.initialMeeting'),
      dot: <UserOutlined />,
      children: t('workflow.understandClientNeeds'),
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
      </ContentWrapper>
    </WorkflowContainer>
  );
};

export default WorkflowSection;
