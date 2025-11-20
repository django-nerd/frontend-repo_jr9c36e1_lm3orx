import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero({ onJoin }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-32 flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-slate-700 shadow-sm"
          >
            Building together • Kind, creative, human
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-800"
          >
            The Community for Calm Creativity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 max-w-2xl text-lg leading-7 text-slate-600"
          >
            A welcoming space for makers, designers, and thoughtful technologists. Slow down, connect deeply, and create work that matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex items-center gap-4"
          >
            <button
              onClick={onJoin}
              className="rounded-xl bg-gradient-to-r from-sky-500 to-rose-400 hover:from-sky-600 hover:to-rose-500 text-white px-6 py-3 font-medium shadow-lg shadow-sky-500/20 transition"
            >
              Join the Community
            </button>
            <a href="#next-event" className="text-sky-700 hover:text-sky-900">
              See our next event
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
