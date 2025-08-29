'use client'

import { useState, useEffect } from 'react'
import { fetchCollection, fetchItem } from '@/lib/directus'

// Hook for fetching collection data directly from Directus
export function useDirectusCollection(collection, query = '', dependencies = []) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const result = await fetchCollection(collection, query)
        setData(result)
      } catch (err) {
        setError(err.message)
        console.error(`Error fetching ${collection}:`, err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [collection, query, ...dependencies])

  return { data, loading, error }
}

// Hook for fetching single item directly from Directus
export function useDirectusItem(collection, id, query = '') {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const result = await fetchItem(collection, id, query)
        setData(result)
      } catch (err) {
        setError(err.message)
        console.error(`Error fetching ${collection}/${id}:`, err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [collection, id, query])

  return { data, loading, error }
}

// Hook for search functionality against Directus
export function useDirectusSearch(collection, searchTerm, fields = ['*']) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!searchTerm || searchTerm.trim().length < 2) {
      setData([])
      return
    }

    const searchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const params = new URLSearchParams()
        params.append('search', searchTerm)
        fields.forEach(field => params.append('fields[]', field))
        
        const result = await fetchCollection(collection, `?${params.toString()}`)
        setData(result)
      } catch (err) {
        setError(err.message)
        console.error(`Error searching ${collection}:`, err)
      } finally {
        setLoading(false)
      }
    }

    // Debounce search
    const timeoutId = setTimeout(searchData, 300)
    return () => clearTimeout(timeoutId)
  }, [collection, searchTerm, fields])

  return { data, loading, error }
}
