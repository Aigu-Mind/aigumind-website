'use client'

import { useState } from 'react'

export default function TestDirectusPage() {
  const [testResult, setTestResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [postsResult, setPostsResult] = useState(null)
  const [caseStudiesResult, setCaseStudiesResult] = useState(null)
  const [debugResult, setDebugResult] = useState(null)

  const testConnection = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/test-directus')
      const result = await response.json()
      setTestResult(result)
    } catch (error) {
      setTestResult({ success: false, error: error.message })
    } finally {
      setLoading(false)
    }
  }

  const testPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/posts')
      const result = await response.json()
      setPostsResult(result)
    } catch (error) {
      setPostsResult({ success: false, error: error.message })
    } finally {
      setLoading(false)
    }
  }

  const testCaseStudies = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/case-studies')
      const result = await response.json()
      setCaseStudiesResult(result)
    } catch (error) {
      setCaseStudiesResult({ success: false, error: error.message })
    } finally {
      setLoading(false)
    }
  }

  const runDebugTest = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/debug-directus')
      const result = await response.json()
      setDebugResult(result)
    } catch (error) {
      setDebugResult({ success: false, error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Directus Connection Test</h1>
        
        <div className="space-y-6">
          {/* Environment Variables */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
            <div className="space-y-2 text-sm">
              <p><strong>NEXT_PUBLIC_DIRECTUS_URL:</strong> {process.env.NEXT_PUBLIC_DIRECTUS_URL || 'Not set'}</p>
              <p><strong>NEXT_PUBLIC_DIRECTUS_TOKEN:</strong> {process.env.NEXT_PUBLIC_DIRECTUS_TOKEN ? 'Set (optional)' : 'Not set (public permissions)'}</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-green-800 text-sm">
                ✅ Public permissions enabled - no token required
              </p>
            </div>
          </div>

          {/* Debug Test */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">🔍 Detailed Debug Test</h2>
            <p className="text-sm text-gray-600 mb-4">
              This will test each step of the connection process to identify exactly where the issue is.
            </p>
            <button
              onClick={runDebugTest}
              disabled={loading}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
            >
              {loading ? 'Running Debug...' : 'Run Debug Test'}
            </button>
            
            {debugResult && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Debug Result:</h3>
                <div className="mb-2">
                  <span className={`px-2 py-1 rounded text-sm ${
                    debugResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {debugResult.status}: {debugResult.error}
                  </span>
                </div>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96">
                  {JSON.stringify(debugResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Test Connection */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Test Basic Connection</h2>
            <button
              onClick={testConnection}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Connection'}
            </button>
            
            {testResult && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Result:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
                  {JSON.stringify(testResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Test Case Studies */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Test Case Studies API</h2>
            <button
              onClick={testCaseStudies}
              disabled={loading}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Case Studies'}
            </button>
            
            {caseStudiesResult && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Result:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
                  {JSON.stringify(caseStudiesResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Test Posts */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Test Posts API (Legacy)</h2>
            <button
              onClick={testPosts}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Posts'}
            </button>
            
            {postsResult && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Result:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
                  {JSON.stringify(postsResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Your Collections Info */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Your Directus Collections</h2>
            <ul className="space-y-2 text-blue-700">
              <li>• <strong>Case_Study</strong> - Main case studies collection</li>
              <li>• <strong>Case_Study_Container</strong> - Container for case studies</li>
              <li>• <strong>Industries</strong> - Industry categories</li>
              <li>• <strong>Case_Study_Industries</strong> - Junction table (hidden)</li>
              <li>• <strong>Case_Study_files</strong> - Related files (hidden)</li>
              <li>• <strong>Case_Study_directus_files</strong> - Directus files (hidden)</li>
            </ul>
          </div>

          {/* Troubleshooting Tips */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-yellow-800">Troubleshooting Tips</h2>
            <ul className="space-y-2 text-yellow-700">
              <li>• Check if your `.env.local` file exists with correct Directus URL</li>
              <li>• Verify your Directus URL doesn't have trailing slashes</li>
              <li>• Ensure the `Case_Study` collection exists in your Directus instance</li>
              <li>• Check that the Public role has Read permissions on all collections</li>
              <li>• Verify CORS settings if using self-hosted Directus</li>
              <li>• Make sure your Directus instance is accessible from your development environment</li>
              <li>• Run the Debug Test above to get detailed information about the issue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
