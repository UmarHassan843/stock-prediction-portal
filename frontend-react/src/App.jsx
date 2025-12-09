import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'




function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<div>Login</div>} />
        </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
