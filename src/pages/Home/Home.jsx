import React from 'react';
import { Helmet } from 'react-helmet';
//Sections
import AboveTheFold from './sections/AboveTheFold';
import ServicesSection from './sections/ServicesSection';
import WorkflowSection from './sections/WorkflowSection';
import PortfolioSection from './sections/PortfolioSection';
import PromotionalBanner from './sections/PromotionalBanner';
import FreeConsultation from './sections/FreeConsultation';
import IdentitySection from './sections/IdentitySection';
import SupportBanner from './sections/SupportBanner';
import Testimonials from './sections/Testimonials';
import BlogSection from './sections/BlogSection';
//Components
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import FAQSection from './sections/FAQSection';
import PodcastSection from './sections/PodcastSection';

const Home = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Digital Dev Lab",
        "url": "https://digitaldevlab.net/",
        "description": "Explora los últimos avances en tecnología, programación, podcasts y más.",
        "author": {
            "@type": "Organization",
            "name": "Digital Dev Lab"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Digital Dev Lab",
            "logo": {
                "@type": "ImageObject",
                "url": "https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/logo_600x60.webp"
            }
        }
    };

    return (
        <>
            {/* Helmet para SEO */}
            <Helmet>
                {/* Título de la página */}
                <title>Digital Dev Lab - Tu sitio web de tecnología</title>

                {/* Descripción de la página */}
                <meta name="description" content="Bienvenido a Digital Dev Lab, donde encontrarás servicios para desarrollar sitios web, portafolios digitales, menús digitales y páginas de links." />

                {/* Palabras clave */}
                <meta name="keywords" content="tecnología, programación, desarrollo web, JavaScript, inteligencia artificial, podcasts, crear un portafolio digital, menú digital para restaurantes, páginas de links para empresas, desarrollo de sitios web, diseño web" />

                {/* Para móviles */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph (para compartir en redes sociales) */}
                <meta property="og:title" content="Digital Dev Lab - Tu sitio web de tecnología" />
                <meta property="og:description" content="Explora los últimos avances en tecnología y programación con nuestros podcasts y artículos." />
                <meta property="og:image" content="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/ImageSocial.webp" />
                <meta property="og:url" content="https://digitaldevlab.net/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Digital Dev Lab - Tu sitio web de tecnología" />
                <meta name="twitter:description" content="Explora los últimos avances en tecnología y programación con nuestros podcasts y artículos." />
                <meta name="twitter:image" content="https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/ImageSocial.webp" />

                {/* Canónica */}
                <link rel="canonical" href="https://digitaldevlab.net/" />

                {/* JSON-LD Script para datos estructurados */}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            {/* Secciones del Home */}
            <AboveTheFold />
            <ServicesSection />
            <PromotionalBanner />
            <WorkflowSection />
            <PortfolioSection />
            <FreeConsultation />
            <IdentitySection />
            <SupportBanner />
            <Testimonials />
            <FAQSection />
            <BlogSection />
            <PodcastSection />
            <FloatingButtons />
        </>
    );
};

export default Home;
