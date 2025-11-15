import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Hire from './pages/Hire'
import EasterEgg from './pages/EasterEgg'

export default function App(){
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="skills" element={<Skills/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="team" element={<Team/>} />
        <Route path="hire" element={<Hire/>} />
        <Route path="easter-egg" element={<EasterEgg/>} />
      </Route>
    </Routes>
  )
}
