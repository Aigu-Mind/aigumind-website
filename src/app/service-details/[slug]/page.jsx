import React from 'react'
import ServiceDetail from '@/templates/ServiceDetail'
import { serviceDetailBySlug } from '@/templates/ServiceDetail.config'

export default function Page({ params }) {
  const { slug } = params
  const data = serviceDetailBySlug[slug]
  if (!data) return null
  return <ServiceDetail hero={data.hero} rows={data.rows} />
}

export async function generateStaticParams() {
  return Object.keys(serviceDetailBySlug).map((slug) => ({ slug }))
}


