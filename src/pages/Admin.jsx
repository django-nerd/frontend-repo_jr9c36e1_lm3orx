import { useEffect, useMemo, useState } from 'react'

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem('admin_token') || '')
  const [limit, setLimit] = useState(50)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [q, setQ] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchData = async () => {
    if (!token) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${baseUrl}/api/admin/members?limit=${limit}`, {
        headers: { 'X-Admin-Token': token },
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setItems(data.items || [])
      localStorage.setItem('admin_token', token)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return items
    return items.filter((m) => {
      const blob = [m.first_name, m.last_name, m.email, m.city, m.country, m.organization, (m.interests||[]).join(', ')].join(' ').toLowerCase()
      return blob.includes(needle)
    })
  }, [items, q])

  return (
    <div className="min-h-screen bg-white text-slate-800 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Admin • Members</h1>
          <div className="flex items-center gap-3">
            <input
              type="password"
              placeholder="Admin token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="rounded-lg border px-3 py-2 text-sm"
            />
            <input
              type="number"
              min={1}
              max={500}
              value={limit}
              onChange={(e)=>setLimit(Number(e.target.value))}
              className="w-24 rounded-lg border px-3 py-2 text-sm"
            />
            <button onClick={fetchData} className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Load</button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <input
            placeholder="Search members…"
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
          {loading && <span className="text-sm text-slate-500">Loading…</span>}
          {error && <span className="text-sm text-rose-600">{error}</span>}
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Org / Role</th>
                <th className="px-4 py-3 text-left">Interests</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((m) => (
                <tr key={m.id} className="border-t">
                  <td className="px-4 py-3">{m.first_name} {m.last_name}</td>
                  <td className="px-4 py-3">{m.email}</td>
                  <td className="px-4 py-3">{[m.city, m.country].filter(Boolean).join(', ')}</td>
                  <td className="px-4 py-3">{[m.organization, m.role].filter(Boolean).join(' • ')}</td>
                  <td className="px-4 py-3">{(m.interests || []).join(', ')}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-slate-500">No members yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
