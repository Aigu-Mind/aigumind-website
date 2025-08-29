'use client'

import { useDirectusCollection } from '@/lib/hooks/useDirectus'

export default function BlogPosts({ limit = 6 }) {
  const { data: posts, loading, error } = useDirectusCollection(
    'Case_Study', 
    ``
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
        <p className="text-red-600">Error loading posts: {error}</p>
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No posts found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          {post.featured_image && (
            <div className="relative h-48">
              <img
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.featured_image}`}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt || post.content?.substring(0, 150)}...
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {new Date(post.date_created).toLocaleDateString()}
              </span>
              <a
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
