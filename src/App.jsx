import { useRef } from 'react'
import Hero from './components/Hero'
import JoinForm from './components/JoinForm'
import { VisionMission, NextEvent } from './components/Sections'

function App() {
  const joinRef = useRef(null)
  const scrollToJoin = () => {
    const el = document.getElementById('join')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold">Calm Creative Community</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#next-event" className="hover:text-slate-900">Next Event</a>
            <a href="#join" className="hover:text-slate-900">Join</a>
          </nav>
          <button onClick={scrollToJoin} className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Join</button>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <div className="pt-16">
        <Hero onJoin={scrollToJoin} />
      </div>

      {/* Vision & Mission */}
      <VisionMission />

      {/* Next Event */}
      <NextEvent />

      {/* Join Form */}
      <JoinForm ref={joinRef} />

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Calm Creative Community • Built with care
        </div>
      </footer>
    </div>
  )
}

export default App
