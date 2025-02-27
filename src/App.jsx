import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Room from './Pages/Room'

function App() {
  return (
    <>
  <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/room/:roomId' element={<Room/>}></Route>
    </Routes>
  </div>
    </>
  )
}

export default App