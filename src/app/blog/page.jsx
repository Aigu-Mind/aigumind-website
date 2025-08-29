import BlogPosts from '@/components/BlogPosts'

export const metadata = {
  title: 'Blog - Aigumind',
  description: 'Latest insights and updates from Aigumind',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and news from our team
          </p>
        </div>
        
        <BlogPosts limit={12} />
      </div>
    </div>
  )
}
