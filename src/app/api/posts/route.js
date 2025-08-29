import { NextResponse } from 'next/server'
import { fetchCollection, fetchFilteredItems } from '@/lib/directus'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || '10'
    const offset = searchParams.get('offset') || '0'
    const status = searchParams.get('status')
    
    // Build query parameters - only add status filter if provided
    let query = `?limit=${limit}&offset=${offset}&sort=-date_created`
    if (status) {
      query += `&filter[status][_eq]=${status}`
    }
    
    console.log('Fetching posts with query:', query)
    
    const posts = await fetchCollection('posts', query)
    
    return NextResponse.json({
      success: true,
      data: posts,
      meta: {
        limit: parseInt(limit),
        offset: parseInt(offset)
      }
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    
    // Provide more specific error messages
    let errorMessage = error.message
    if (error.message.includes('403')) {
      errorMessage = 'Access denied. Please check your Directus permissions and collection access.'
    } else if (error.message.includes('404')) {
      errorMessage = 'Posts collection not found. Please check your Directus collection name.'
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: {
          message: error.message,
          stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }
      },
      { status: 500 }
    )
  }
}
