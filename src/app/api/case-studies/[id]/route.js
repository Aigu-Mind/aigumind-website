import { NextResponse } from 'next/server'
import { fetchItem } from '@/lib/directus'

export async function GET(request, { params }) {
  try {
    const { id } = params
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Case Study ID is required' },
        { status: 400 }
      )
    }
    
    const caseStudy = await fetchItem(
      'Case_Study', 
      id, 
      '?fields=*,Case_Study_Industries.*,Industries.*,Case_Study_files.*'
    )
    
    if (!caseStudy) {
      return NextResponse.json(
        { success: false, error: 'Case Study not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      data: caseStudy
    })
  } catch (error) {
    console.error('Error fetching case study:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
