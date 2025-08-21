import ServiceDetailCarosal from '@/components/servicedetailsdigitalcommerce/ServiceDetailCarosal'
import EcommerceDetails from '@/components/servicedetailsdigitalcommerce/EcommerceDetails'
import HeroSectionServiceDetail from '@/components/servicedetailsdigitalcommerce/HeroSectionServiceDetail'
import React from 'react'
import Footer from '@/components/Footer'

export default function ServiceDetail() {
  return (
    <>
    <HeroSectionServiceDetail/>
    <EcommerceDetails/>
    <ServiceDetailCarosal/>
    <Footer/>
   </>
  )
}
