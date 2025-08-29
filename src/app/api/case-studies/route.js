import { NextResponse } from 'next/server'
import { fetchCollection } from '@/lib/directus'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || '10'
    const offset = searchParams.get('offset') || '0'
    
    // Build query parameters for Case_Study collection
    const query = `?limit=${limit}&offset=${offset}&sort=-date_created`
    
    console.log('Fetching case studies with query:', query)
    
    // Fetch case studies - simplified without complex relations for now
    const caseStudies = await fetchCollection('Case_Study', query)
    
    return NextResponse.json({
      success: true,
      data: caseStudies,
      meta: {
        limit: parseInt(limit),
        offset: parseInt(offset)
      }
    })
  } catch (error) {
    console.error('Error fetching case studies:', error)
    
    // Provide more specific error messages
    let errorMessage = error.message
    if (error.message.includes('403')) {
      errorMessage = 'Access denied. Please check your Directus permissions and collection access.'
    } else if (error.message.includes('404')) {
      errorMessage = 'Case_Study collection not found. Please check your Directus collection name.'
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
