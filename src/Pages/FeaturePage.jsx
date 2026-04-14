import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Feature from '../Components/Feature'
import Faq from '../Components/Faq'

export default function FeaturePage() {
  return (
    <>
        <Breadcrum title="Our Features" description="Experience the best of Heritage Ally with premium quality products, reliable service, secure payments, and fast delivery—designed to provide you with a seamless and satisfying shopping experience every time."/>
        <Feature/>
        <Faq/>
    </>
  )
}
