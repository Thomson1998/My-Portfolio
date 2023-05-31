import React from 'react'
import Navbar from './Components/Navbar'
// import Home from './Components/Home'
import Icons from './Components/Icons'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
// import Projects from './Components/Projects'
import TopContent from './Components/TopContent'
import Projectss from './Components/Projectss'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <TopContent />
      <About />
      <Projectss />
      <Skills />
      <Contact />


      <Icons />
    </div>
  )
}

export default App