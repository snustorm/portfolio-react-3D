import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import './i18n.js';
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
     <main className="max-w-screen-2xl max-auto">
        <Navbar/>
        <Hero/>
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <Analytics />
     </main>
  )
}

export default App