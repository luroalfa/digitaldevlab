import React from 'react';
import AboveTheFold from './sections/AboveTheFold';
import Services from './sections/Services';  // Suponiendo que crees un componente Services
import CTA from './sections/CTA';
import SupportBanner from '../../components/SupportBanner';
import Workflow from '../../components/Workflow';
import PromotionalBanner from '../../components/PromotionalBanner';
import FreeConsultation from '../../components/FreeConsultation';
import PortfolioSection from '../../components/PortfolioSection';
import Testimonials from '../../components/Testimonials';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import AboutUs from './sections/AboutUs';
import IdentitySection from './sections/IdentitySection';

const Home = () => {
    return (
        <div>
            <AboveTheFold />
            <Services />
            <PortfolioSection />
            <Workflow />
            <PromotionalBanner />
            <FreeConsultation />
            <IdentitySection />
            <SupportBanner />
            <Testimonials />
            <CTA />
            <AboutUs />
            <FloatingButtons />
        </div>
    );
};

export default Home;
