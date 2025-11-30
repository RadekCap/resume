import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Film, Skull, Wand2, MapPin, Zap, Users, Target, Swords, Crosshair, Biohazard } from 'lucide-react'

// Import all CV pages
import XMenResume from '../pages/xmen.jsx'
import XMenAltResume from '../pages/xmen-alt.jsx'
import LotrResume from '../pages/lord-of-the-rings.jsx'
import LotrAltResume from '../pages/lord-of-the-rings-alt.jsx'
import StarWarsResume from '../pages/star-wars.jsx'
import JamesBondResume from '../pages/james-bond.jsx'
import ResidentEvilResume from '../pages/resident-evil.jsx'
import HarryPotterResume from '../pages/harry-potter.jsx'
import MatrixResume from '../pages/matrix.jsx'
import TerminatorResume from '../pages/terminator.jsx'

const themes = [
  {
    path: '/xmen',
    name: 'X-Men (Cerebro)',
    component: XMenResume,
    icon: Users,
    color: 'from-blue-600 to-blue-800',
    description: 'Mutant powers meet cluster management'
  },
  {
    path: '/xmen-alt',
    name: 'X-Men (Mutant)',
    component: XMenAltResume,
    icon: Zap,
    color: 'from-indigo-600 to-purple-800',
    description: 'Alternative X-Men themed design'
  },
  {
    path: '/lord-of-the-rings',
    name: 'Lord of the Rings',
    component: LotrResume,
    icon: MapPin,
    color: 'from-amber-700 to-stone-800',
    description: 'An epic journey through Middle-Earth'
  },
  {
    path: '/lord-of-the-rings-alt',
    name: 'LOTR (Alternative)',
    component: LotrAltResume,
    icon: Swords,
    color: 'from-yellow-700 to-amber-900',
    description: 'Alternative LOTR parchment style'
  },
  {
    path: '/star-wars',
    name: 'Star Wars',
    component: StarWarsResume,
    icon: Film,
    color: 'from-yellow-500 to-orange-700',
    description: 'A long time ago in a galaxy far, far away...'
  },
  {
    path: '/james-bond',
    name: 'James Bond 007',
    component: JamesBondResume,
    icon: Target,
    color: 'from-gray-800 to-black',
    description: 'Shaken, not stirred'
  },
  {
    path: '/resident-evil',
    name: 'Resident Evil',
    component: ResidentEvilResume,
    icon: Biohazard,
    color: 'from-red-900 to-black',
    description: 'Survival horror meets software engineering'
  },
  {
    path: '/harry-potter',
    name: 'Harry Potter',
    component: HarryPotterResume,
    icon: Wand2,
    color: 'from-red-800 to-yellow-600',
    description: 'The wizard who coded'
  },
  {
    path: '/matrix',
    name: 'The Matrix',
    component: MatrixResume,
    icon: Crosshair,
    color: 'from-green-600 to-black',
    description: 'Follow the white rabbit'
  },
  {
    path: '/terminator',
    name: 'Terminator',
    component: TerminatorResume,
    icon: Skull,
    color: 'from-red-700 to-gray-900',
    description: "I'll be back"
  }
]

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 pt-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Radoslav Cap
          </h1>
          <p className="text-2xl text-gray-300 mb-2">Senior Software Quality Engineer</p>
          <p className="text-lg text-gray-400">Choose Your Adventure</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {themes.map((theme) => {
            const Icon = theme.icon
            return (
              <Link
                key={theme.path}
                to={theme.path}
                className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-6 hover:scale-105 transition-all duration-300 hover:border-purple-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${theme.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold">{theme.name}</h2>
                  </div>

                  <p className="text-sm text-gray-400 mb-4">{theme.description}</p>

                  <div className="flex items-center text-sm text-purple-400 group-hover:text-purple-300">
                    <span>View Resume</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>© 2025 Radoslav Cap. All themes are creative representations of my professional experience.</p>
          <p className="mt-2">Built with React + Vite • Deployed on GitHub Pages</p>
        </footer>
      </div>
    </div>
  )
}

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/resume' || location.pathname === '/resume/'

  return (
    <>
      {!isHome && (
        <div className="fixed top-4 left-4 z-50">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm text-white rounded-full border border-gray-700 hover:border-purple-500 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Themes</span>
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        {themes.map((theme) => (
          <Route
            key={theme.path}
            path={theme.path}
            element={<theme.component />}
          />
        ))}
      </Routes>
    </>
  )
}

export default App
