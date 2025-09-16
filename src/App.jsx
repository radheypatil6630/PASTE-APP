import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
        </div>

    },
     {
      path:"/pastes",
      element:<div>
        <Navbar/>
        <Paste/>
        </div>

    },
     {
      path:"/pastes/:id",
      element:<div>
        <Navbar/>
        <ViewPaste/>
        </div>

    }
  ])

  return (
    <>
   <RouterProvider router={routes}/>
    </>
  )
}

export default App
