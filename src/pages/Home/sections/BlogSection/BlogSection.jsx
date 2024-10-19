import blogImage from '../../../../assets/highterorderfunction.png'; // Imagen genérica para el blog
import TitleSection from '../../../../components/TitleSection';
import Button from '../../../../components/Button';
import { Typography } from 'antd';
import { BlogContent, BlogImage, BlogPreview, BlogSectionWrapper } from './BlogSectionStyles';
import { useTranslation } from 'react-i18next';

const BlogSection = () => {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <BlogSectionWrapper>
      <TitleSection titleText={t('blog.title')} isVisible={true} />
      <p>{t('blog.introText1')}</p>
      <p>{t('blog.introText2')}</p>

      <BlogPreview>
        <BlogImage src={blogImage} alt={t('blog.imageAlt')} />
        <BlogContent>
          <Typography.Title level={2}>
            {t('blog.subTitle')}
          </Typography.Title>
          <p>
            {t('blog.description')}
          </p>
          <Button href="/blog">
            <span className="btn-text-one">{t('blog.buttonText')}</span>
            <span className="btn-text-two">{t('blog.buttonTextAlt')}</span>
          </Button>
        </BlogContent>
      </BlogPreview>
    </BlogSectionWrapper>
  );
};

export default BlogSection;
