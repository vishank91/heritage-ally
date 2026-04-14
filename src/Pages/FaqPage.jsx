import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import Faq from '../Components/Faq'

export default function FaqPage() {
  return (
    <>
    <Breadcrum title="Frequenty Asked Questions" description={"Find answers to common questions about orders, shipping, returns, and payments at Heritage Ally. Our FAQ section is here to help you enjoy a smooth and hassle-free shopping experience."}/>
    <Faq/>
    </>
  )
}
