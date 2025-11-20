import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex items-center justify-center px-6">
      <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="max-w-lg text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-green-50 text-green-700 px-3 py-1 text-sm">Signup received</div>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold">Welcome to the Community</h1>
        <p className="mt-3 text-slate-600 leading-7">
          Thanks for joining! Well review your info and send a warm hello soon. In the meantime, feel free to explore upcoming events and resources.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/" className="rounded-xl bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition">Back to home</Link>
          <a href="/#next-event" className="text-sky-700 hover:text-sky-900">See next event</a>
        </div>
      </motion.div>
    </div>
  )
}
