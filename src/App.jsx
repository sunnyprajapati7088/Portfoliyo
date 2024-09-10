import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hiro from './components/Hiro'
import { Routes,Route } from 'react-router-dom'
import Head from './components/Head'
import Home from './components/Home'
import Skill from './components/Skill'
import Education from './components/Education'
import Contact from './components/Contact'
import Project from './components/Project'

function App() {
  

  return (
    <div className="  lg:pl-[6rem] lg:pr-[6rem] ">
      <Routes>
        <Route path="/" element={<Head />}>
          <Route path="/" element={<Hiro />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Project />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App
