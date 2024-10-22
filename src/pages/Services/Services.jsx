import FullScreenCarousel from './sections/AboveTheFoldServices'
import ServicesDescriptionSection from './sections/ServicesDescriptionSection'
import Testimonials from '../../components/Testimonials'
import CTABanner from './sections/CTABanner'
import WorkflowSection from '../Home/sections/WorkflowSection'
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons'

const Services = () => {
    return (
        <>
            <FullScreenCarousel />
            <ServicesDescriptionSection />
            <WorkflowSection />
            <CTABanner />
            {/* <Testimonials /> */}
            <FloatingButtons />
        </>
    )
}

export default Services