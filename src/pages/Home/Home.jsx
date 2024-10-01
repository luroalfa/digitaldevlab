import React from 'react';
import AboveTheFold from './sections/AboveTheFold';
import Services from './sections/ServicesSection';
import SupportBanner from '../../components/SupportBanner';
import Workflow from '../../components/Workflow';
import PromotionalBanner from '../../components/PromotionalBanner';
import FreeConsultation from '../../components/FreeConsultation';
import PortfolioSection from '../../components/PortfolioSection';
import Testimonials from '../../components/Testimonials';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import IdentitySection from './sections/IdentitySection';

const Home = () => {
    return (
        <div>
            <AboveTheFold />
            <Services />
            <Workflow />
            <PortfolioSection />
            <PromotionalBanner />
            <FreeConsultation />
            <IdentitySection />
            <SupportBanner />
            <Testimonials />
            <FloatingButtons />
        </div>
    );
};

export default Home;
