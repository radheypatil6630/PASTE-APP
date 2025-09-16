import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly '>
      <NavLink className="rounded-xl bg-gray-600  p-1 px-2 mb-1 hover:text-sky-400 hover:underline hover:underline-offset-1" to="/">Home</NavLink>
      <NavLink className="rounded-xl bg-gray-600  p-1 px-2 mb-1 hover:text-sky-400 hover:underline hover:underline-offset-1" to="/pastes">Pastes</NavLink>
    </div>
  )
}

export default Navbar
