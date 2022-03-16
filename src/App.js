import React from 'react'
import Home from './components/Pages/Home'
import SinglePost from './components/Pages/Single'
import Topbar from './components/Topbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/post/:postId' element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
