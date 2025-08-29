

const ORIGIN_API_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL
const TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN

// Use proxy path on the client to avoid CORS; server can call origin directly
function getBaseUrl() {
  if (typeof window === 'undefined') {
    return ORIGIN_API_URL
  }
  return '/directus'
}

// Base headers for API requests
const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json'
  }
  if (TOKEN) headers['Authorization'] = `Bearer ${TOKEN}`
  return headers
}

// Enhanced fetch wrapper with error handling
async function directusFetch(endpoint, options = {}) {
  const baseUrl = getBaseUrl()
  if (!baseUrl) throw new Error('NEXT_PUBLIC_DIRECTUS_URL is not configured')

  const url = `${baseUrl}${endpoint}`
  const config = { headers: getHeaders(), ...options }

  const response = await fetch(url, config)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(
      `Directus API Error: ${response.status} ${response.statusText} - ${errorData.message || 'Unknown error'}`
    )
  }
  return await response.json()
}

// Fetch collection items
export async function fetchCollection(collection, query = '') {
  const data = await directusFetch(`/items/${collection}${query}`)
  return data.data
}

// Fetch single item by ID
export async function fetchItem(collection, id, query = '') {
  const data = await directusFetch(`/items/${collection}/${id}${query}`)
  return data.data
}

export async function fetchFilteredItems(collection, filters = {}, query = '') {
  const filterParams = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    filterParams.append(`filter[${key}]`, value)
  })
  const filterString = filterParams.toString()
  const fullQuery = `${query}${filterString ? `&${filterString}` : ''}`
  return fetchCollection(collection, fullQuery ? `?${fullQuery}` : '')
}

export async function fetchWithRelations(collection, relations = [], query = '') {
  const relationParams = relations.map(rel => `fields[]=${rel}`).join('&')
  const fullQuery = `${query}${relationParams ? `&${relationParams}` : ''}`
  return fetchCollection(collection, fullQuery ? `?${fullQuery}` : '')
}

export async function searchItems(collection, searchTerm, fields = ['*'], query = '') {
  const searchParams = new URLSearchParams()
  searchParams.append('search', searchTerm)
  fields.forEach(field => searchParams.append('fields[]', field))
  const fullQuery = `${query}${searchParams.toString()}`
  return fetchCollection(collection, `?${fullQuery}`)
}

export function buildQuery(params = {}) {
  const queryParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) queryParams.append(key, value)
  })
  return queryParams.toString()
}
