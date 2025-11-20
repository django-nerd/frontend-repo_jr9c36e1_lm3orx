import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INITIAL = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  organization: '',
  role: '',
  city: '',
  country: '',
  interests: '',
  agree_to_terms: false,
}

function JoinForm() {
  const [data, setData] = useState(INITIAL)
  const [status, setStatus] = useState({ state: 'idle' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setData((d) => ({ ...d, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })
    try {
      const payload = {
        ...data,
        interests: data.interests ? data.interests.split(',').map((s) => s.trim()).filter(Boolean) : null,
      }
      const res = await fetch(`${baseUrl}/api/members`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ state: 'success' })
      setData(INITIAL)
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="join" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-2xl border bg-white/80 backdrop-blur p-8 shadow-sm">
        <h2 className="text-3xl font-semibold text-slate-800">Join the Community</h2>
        <p className="mt-2 text-slate-600">Introduce yourself and we’ll welcome you in. Your details are private and never shared.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-600">First name</label>
            <input required name="first_name" value={data.first_name} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Last name</label>
            <input required name="last_name" value={data.last_name} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Email</label>
            <input required type="email" name="email" value={data.email} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Phone</label>
            <input name="phone" value={data.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Organization</label>
            <input name="organization" value={data.organization} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Role</label>
            <input name="role" value={data.role} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div>
            <label className="text-sm text-slate-600">City</label>
            <input name="city" value={data.city} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Country</label>
            <input name="country" value={data.country} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Interests (comma separated)</label>
            <input name="interests" value={data.interests} onChange={handleChange} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <input required type="checkbox" name="agree_to_terms" checked={data.agree_to_terms} onChange={handleChange} className="h-4 w-4" />
            <span className="text-sm text-slate-600">I agree to be contacted about community updates.</span>
          </div>
          <div className="md:col-span-2 mt-2 flex items-center gap-4">
            <button type="submit" className="rounded-xl bg-gradient-to-r from-sky-500 to-rose-400 hover:from-sky-600 hover:to-rose-500 text-white px-6 py-3 font-medium shadow-lg shadow-sky-500/20 transition">
              {status.state === 'loading' ? 'Submitting…' : 'Join now'}
            </button>
            <AnimatePresence>
              {status.state === 'success' && (
                <motion.span initial={{opacity:0, y:4}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="text-sm text-emerald-700">Thanks! You’re in. We’ll be in touch.</motion.span>
              )}
              {status.state === 'error' && (
                <motion.span initial={{opacity:0, y:4}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="text-sm text-rose-700">Something went wrong. Please try again.</motion.span>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  )
}

export default JoinForm
