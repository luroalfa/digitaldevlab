import React from 'react'
import FullScreenCarousel from './sections/AboveTheFoldServices'
import ServicesDescriptionSection from './sections/ServicesDescriptionSection'
import ServicesListSection from './sections/ServicesListSection'
import Testimonials from '../../components/Testimonials'
import CTABanner from './sections/CTABanner'
import WorkflowSection from '../Home/sections/WorkflowSection'
import PartnersCarousel from './sections/PartnersCarousel'
import TechnologiesSection from './sections/TechnologiesSection'
import Menu from '../../components/Header/Menu'

const Services = ({ toggleTheme, isDarkTheme }) => {
    return (
        <>
            <Menu toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <FullScreenCarousel />
            <ServicesDescriptionSection />
            <ServicesListSection />
            <WorkflowSection />
            <CTABanner />
            <Testimonials />
            <TechnologiesSection />
            {/* <PartnersCarousel /> */}
        </>
    )
}

export default Services