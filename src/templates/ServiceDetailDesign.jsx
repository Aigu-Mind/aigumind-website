import HeroSectionServiceDetail from '@/components/servicedetaildesign/Hero'
import Design from '@/components/servicedetaildesign/Design'
import React from 'react'
import ServiceDetailCarosal from '@/components/servicedetailsdigitalcommerce/ServiceDetailCarosal'
import Footer from '@/components/Footer'

export default function ServiceDetailDesign() {
  return (
   <>
   <HeroSectionServiceDetail/>
   <Design/>
   <ServiceDetailCarosal/>
   <Footer/>
   </>
  )
}
