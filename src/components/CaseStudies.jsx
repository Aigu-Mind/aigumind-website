'use client'

import { useDirectusCollection } from '@/lib/hooks/useDirectus'

export default function CaseStudies({ limit = 6 }) {
  const { data: caseStudies, loading, error } = useDirectusCollection(
    'Case_Study', 
    `?limit=${limit}&sort=-date_created`
  )

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(limit)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <div className="bg-gray-200 h-4 rounded mb-2"></div>
            <div className="bg-gray-200 h-4 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading case studies: {error}</p>
      </div>
    )
  }

  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No case studies found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {caseStudies.map((caseStudy) => (
        <article key={caseStudy.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          {caseStudy.Images && caseStudy.Images.length > 0 && (
            <div className="relative h-48">
              <img
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${caseStudy.Images[0]}`}
                alt={caseStudy.Name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {caseStudy.Name}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {caseStudy.Description?.substring(0, 150)}...
            </p>
            {caseStudy.Industry && caseStudy.Industry.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {caseStudy.Industry.map((industryId, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      Industry {industryId}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {caseStudy.date_created && new Date(caseStudy.date_created).toLocaleDateString()}
              </span>
              <a
                href={`/case-studies/${caseStudy.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Details →
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
