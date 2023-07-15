import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main/Main'

function App() {
  return (
    <>
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-1xl mx-auto px-16">
      <Navbar/>
      <Main/>
      </div>
    
    </div>
    </>
  )
}

export default App
