import CaseStudies from '@/components/CaseStudies'

export const metadata = {
  title: 'Case Studies - Aigumind',
  description: 'Explore our successful case studies and client projects',
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve their goals through innovative solutions
          </p>
        </div>
        
        <CaseStudies limit={12} />
      </div>
    </div>
  )
}
