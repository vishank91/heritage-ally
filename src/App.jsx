import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ShopPage from './Pages/ShopPage'
import FeaturePage from './Pages/FeaturePage'
import FaqPage from './Pages/FaqPage'
import ContactUsPage from './Pages/ContactUsPage'
import ErrorPage from './Pages/ErrorPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditionPolicy from './Pages/TermsAndConditionsPolicy'
import TestimonialPage from './Pages/TestimonialPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/feature' element={<FeaturePage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/testimonial' element={<TestimonialPage />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/tc' element={<TermsAndConditionPolicy />} />



          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
