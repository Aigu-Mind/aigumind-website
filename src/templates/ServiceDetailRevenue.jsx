import Hero from '../components/servicedetailrevenue/Hero'
import Revenue from '../components/servicedetailrevenue/Revenue'
import Footer from '@/components/Footer'
import ServiceDetailCarosal from '@/components/servicedetailsdigitalcommerce/ServiceDetailCarosal'
import React from 'react'
import ServiceDetail from './ServiceDetail'

export default function ServiceDetailRevenue() {
  return (
    <>
    <Hero/>
    <Revenue/>
    <ServiceDetailCarosal/>
    <Footer/>
    </>
  )
}
