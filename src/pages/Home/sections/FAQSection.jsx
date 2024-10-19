import { Collapse } from 'antd';
import styled from 'styled-components';
import faqImage from '../../../assets/faq.jpg';
import TitleSection from '../../../components/TitleSection';
import { useTranslation } from 'react-i18next';

const FAQSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 200px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }
`;

const FAQTitleWrapper = styled.div`
  flex: 1;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const FAQImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const CollapseWrapper = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    width: 100%;
  }

  .ant-collapse-header {
    font-size: 1.2rem;
    background-color: transparent; /* Fondo transparente */
    color: ${({ theme }) => theme.colors.textPrimary} !important;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }

  .ant-collapse-content {
    background-color: transparent; /* Fondo transparente */
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: 480px) {
    .ant-collapse-header {
      font-size: 1rem;
    }

    .ant-collapse-content {
      font-size: 0.95rem;
    }
  }
`;

const FAQSection = () => {
  const { t } = useTranslation(); // Hook para traducción

  // Traducciones dinámicas con t
  const items = [
    {
      key: '1',
      label: t('faq.question1'),
      children: <p>{t('faq.answer1')}</p>,
    },
    {
      key: '2',
      label: t('faq.question2'),
      children: <p>{t('faq.answer2')}</p>,
    },
    {
      key: '3',
      label: t('faq.question3'),
      children: <p>{t('faq.answer3')}</p>,
    },
  ];

  return (
    <FAQSectionWrapper>
      <FAQTitleWrapper>
        <TitleSection titleText={t('faq.title')} isVisible={true} />
        <FAQImage src={faqImage} alt={t('faq.altImage')} />
      </FAQTitleWrapper>

      <CollapseWrapper>
        <Collapse accordion items={items} />
      </CollapseWrapper>
    </FAQSectionWrapper>
  );
};

export default FAQSection;
