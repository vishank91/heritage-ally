import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import About from '../Components/About'
import Feature from '../Components/Feature'
import Testimonial from '../Components/Testimonial'
import Faq from '../Components/Faq'

export default function AboutPage() {
    return (
        <>
            <Breadcrum title="About Us" description ="Discover the story behind Heritage Ally, where timeless tradition meets modern style. Explore our journey, values, and passion for delivering quality products with trust and authenticity."/>
            <About/>
            <Feature/>
            <Testimonial/>
            <Faq/>
        </>
    )
}
