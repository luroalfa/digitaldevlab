import React from 'react'
import FullScreenCarousel from './sections/AboveTheFoldServices'
import ServicesDescriptionSection from './sections/ServicesDescriptionSection'
import ServicesListSection from './sections/ServicesListSection'
import Testimonials from '../../components/Testimonials'
import CTABanner from './sections/CTABanner'
import WorkflowSection from '../Home/sections/WorkflowSection'

const Services = () => {
    return (
        <>
            <FullScreenCarousel />
            <ServicesDescriptionSection />
            <ServicesListSection />
            <WorkflowSection />
            <CTABanner />
            <Testimonials />
        </>
    )
}

export default Services