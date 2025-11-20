import { motion } from 'framer-motion'
import { Calendar, Heart, Sparkles } from 'lucide-react'

export function VisionMission() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-2xl border bg-white/70 backdrop-blur p-8 shadow-sm">
          <div className="flex items-center gap-3 text-sky-700">
            <Heart className="h-5 w-5" />
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <p className="mt-3 text-slate-600 leading-7">
            A world where creativity is unhurried and deeply human. We nurture projects that bring calm, clarity, and connection.
          </p>
        </motion.div>
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="rounded-2xl border bg-white/70 backdrop-blur p-8 shadow-sm">
          <div className="flex items-center gap-3 text-sky-700">
            <Sparkles className="h-5 w-5" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="mt-3 text-slate-600 leading-7">
            Create a gentle environment for makers to learn, share, and collaborate—through circles, retreats, and open workshops.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function NextEvent() {
  return (
    <section id="next-event" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="rounded-2xl border bg-gradient-to-br from-sky-50 to-rose-50 p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sky-700">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">Next Event</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-slate-800">Slow Creative Jam — Online</h3>
            <p className="mt-1 text-slate-600">Saturday, Dec 14 • 10:00–12:00</p>
          </div>
          <a href="#join" className="rounded-xl bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition">Reserve a spot</a>
        </div>
      </motion.div>
    </section>
  )
}
