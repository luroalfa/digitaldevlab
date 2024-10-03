import React from 'react';
//Sections
import AboveTheFold from './sections/AboveTheFold';
import Services from './sections/ServicesSection';
import Workflow from './sections/Workflow';
import PortfolioSection from './sections/PortfolioSection';
import PromotionalBanner from './sections/PromotionalBanner';
import FreeConsultation from './sections/FreeConsultation';
import IdentitySection from './sections/IdentitySection';
import SupportBanner from './sections/SupportBanner';
import Testimonials from './sections/Testimonials';
import BlogSection from './sections/BlogSection';
//Components
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';

const Home = () => {
    return (
        <>
            <AboveTheFold />
            <Services />
            <Workflow />
            <PortfolioSection />
            <PromotionalBanner />
            <FreeConsultation />
            <IdentitySection />
            <SupportBanner />
            <Testimonials />
            <BlogSection />
            <FloatingButtons />
        </>
    );
};

export default Home;
