import { useEffect, useState } from 'react'

function BackendTest() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch(
          'http://127.0.0.1:5000/api/hello'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch data from Flask')
        }

        const data = await response.json()

        setMessage(data.message)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMessage()
  }, [])

  if (loading) {
    return <p className="text-gray-300">Loading...</p>
  }

  if (error) {
    return <p className="text-red-400">Error: {error}</p>
  }

  return (
    <section className="bg-gray-800 text-white p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Flask Backend Connection
      </h2>

      <p className="text-green-400 text-lg">
        {message}
      </p>
    </section>
  )
}

export default BackendTest