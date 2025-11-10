import React, { useState } from 'react'

const API_BASE = import.meta.env?.VITE_API_BASE || 'http://127.0.0.1:8000'

export default function ApiExample() {
  const [response, setResponse] = useState(null)

  const callApi = async () => {
    const res = await fetch(`${API_BASE}/api/echo/hello/?times=2`)
    const data = await res.json()
    setResponse(data)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">API Example</h1>
      <button
        onClick={callApi}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Call Django API
      </button>

      {response && (
        <pre className="mt-4 bg-black text-green-200 p-3 rounded">
{JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  )
}
