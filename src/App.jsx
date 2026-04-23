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


import AdminHomePage from './Pages/Admin/AdminHomePage'

import AdminMaincategoryPage from './Pages/Admin/Maincategory/AdminMaincatrgoryPage'
import AdminCreateMaincategoryPage from './Pages/Admin/Maincategory/AdminCreateMaincatrgoryPage'
import AdminUpdateMaincategoryPage from './Pages/Admin/Maincategory/AdminUpdateMaincatrgoryPage'

import AdminSubcategoryPage from './Pages/Admin/Subcategory/AdminSubcatrgoryPage'
import AdminCreateSubcategoryPage from './Pages/Admin/Subcategory/AdminCreateSubcatrgoryPage'
import AdminUpdateSubcategoryPage from './Pages/Admin/Subcategory/AdminUpdateSubcatrgoryPage'
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


          {/* Admin Routes */}
          <Route path='/admin' element={<AdminHomePage />} />

          <Route path='/admin/maincategory' element={<AdminMaincategoryPage />} />
          <Route path='/admin/maincategory/create' element={<AdminCreateMaincategoryPage />} />
          <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategoryPage />} />

          <Route path='/admin/subcategory' element={<AdminSubcategoryPage />} />
          <Route path='/admin/subcategory/create' element={<AdminCreateSubcategoryPage />} />
          <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubcategoryPage />} />

          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
