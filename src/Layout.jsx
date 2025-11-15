import React, { useMemo, useRef, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import ChessboardBackground from './components/ChessboardBackground'
import Pawn from './components/Pawn'
import './styles/chess.css'

export default function Layout(){
  const navigate = useNavigate()
  const [seq, setSeq] = useState([])

  const pawns = useMemo(()=>{
    const list = []
    const rand = (a,b)=>Math.random()*(b-a)+a
    for(let i=0;i<12;i++){
      list.push({
        id:i,
        x: rand(5,95),
        y: rand(10,90),
        size: Math.round(rand(22,40)),
        delay: +(rand(0,5).toFixed(2)),
        clickable: i%5===0
      })
    }
    return list
  },[])

  const secret = ['P1','P2','P3']
  const onPawnClick = (id) => {
    const next = [...seq, `P${id%5+1}`].slice(-3)
    setSeq(next)
    if(next.join('-')===secret.join('-')){
      navigate('/easter-egg')
    }
  }

  return (
    <ChessboardBackground>
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm tracking-widest uppercase text-[#d4af37] font-semibold">Sparsh: The Strategist</div>
          <div className="hidden md:flex items-center gap-5 text-slate-200">
            <NavLink className={({isActive})=>`hover:text-white ${isActive?'text-white':''}`} to="/">Opening Move</NavLink>
            <NavLink className={({isActive})=>`hover:text-white ${isActive?'text-white':''}`} to="/skills">Openings</NavLink>
            <NavLink className={({isActive})=>`hover:text-white ${isActive?'text-white':''}`} to="/projects">Middlegame</NavLink>
            <NavLink className={({isActive})=>`hover:text-white ${isActive?'text-white':''}`} to="/team">Team Plays</NavLink>
            <NavLink className={({isActive})=>`hover:text-white ${isActive?'text-white':''}`} to="/hire">Endgame</NavLink>
          </div>
        </nav>
      </header>

      {/* Floating pawns layer */}
      {pawns.map(p=> (
        <Pawn key={p.id} {...p} onClick={p.clickable?()=>onPawnClick(p.id):undefined} />
      ))}

      <main className="relative z-10 pt-20 pb-12 text-slate-100">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-300 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>Sparsh: The Strategist — Calm code. Clear moves.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white" title="GitHub — opens in new tab">GitHub</a>
            <a href="#" className="hover:text-white" title="LinkedIn — opens in new tab">LinkedIn</a>
            <a href="#contact" className="hover:text-white" title="Email me">Email</a>
          </div>
        </div>
      </footer>
    </ChessboardBackground>
  )
}
