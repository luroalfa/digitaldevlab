import React from 'react';
import { Helmet } from 'react-helmet';
//Sections
import AboveTheFold from './sections/AboveTheFold/AboveTheFold';
import ServicesSection from './sections/ServicesSection';
import WorkflowSection from './sections/WorkflowSection';
import PortfolioSection from './sections/PortfolioSection';
import PromotionalBanner from './sections/PromotionalBanner';
import FreeConsultation from './sections/FreeConsultation';
import IdentitySection from './sections/IdentitySection';
import SupportBanner from './sections/SupportBanner';
import Testimonials from '../../components/Testimonials';
import BlogSection from './sections/BlogSection/BlogSection';
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
        "logo": "https://digitaldevlabimagenes.s3.us-east-2.amazonaws.com/logo_600x60.webp",
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
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://digitaldevlab.net/"
        }
    }

    const jsonLdService = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Desarrollo Web Personalizado",
        "description": "Soluciones web a medida con diseño responsive, optimización SEO y soporte técnico continuo.",
        "provider": {
            "@type": "Organization",
            "name": "Digital Dev Lab",
            "url": "https://digitaldevlab.net"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "CRC",  // Ajuste del código de moneda
            "price": "60000.00",  // Ajuste del formato de precio
            "url": "https://digitaldevlab.net/servicios",
            "validFrom": "2024-11-01",  // Fecha correcta para noviembre
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "60000.00",
                "priceCurrency": "CRC",
                "eligibleQuantity": {
                    "@type": "QuantitativeValue",
                    "value": 1
                },
                "eligibleTransactionVolume": {
                    "@type": "PriceSpecification",
                    "price": "150000",  // Precio original sin descuento
                    "priceCurrency": "CRC"
                },
                "discount": "60",
                "discountCurrency": "CRC"
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
                <meta name="keywords" content="tecnología, digital dev lab, digital devlab, programación, desarrollo web, JavaScript, inteligencia artificial, podcasts, crear un portafolio digital, menú digital para restaurantes, páginas de links para empresas, desarrollo de sitios web, diseño web" />

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
                {/* JSON-LD para el servicio */}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLdService)}
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
            {/* <BlogSection />
            <PodcastSection /> */}
            <FloatingButtons />
        </>
    );
};
// TODO
//Optimizar el margin de todos los botones de las secciones


export default Home;
