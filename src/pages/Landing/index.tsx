import React from 'react'

// component
import NavbarComponent from '../../components/NavbarComponent'
import HeroComponent from './HeroComponent'
import IndustriesComponent from './IndustriesComponent'
import AssessmentComponent from './AssessmentComponent'
import ServiceComponent from './ServiceComponent'
import Footer from '../../components/Footer'

// data
import { Assessments } from './data'

const Landing = () => {
    return (
        <>
            {/* navbar and hero */}
            <div className='header-1'>
                <NavbarComponent
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-primary btn-sm"
                    fixedWidth
                />
                <HeroComponent />
            </div>

            {/* industries */}
            <IndustriesComponent />

            {/* assessment */}
            <AssessmentComponent Assessments={Assessments} />

            {/* service */}
            <ServiceComponent />

            {/* footer */}
            <Footer />
        </>
    )
}

export default Landing