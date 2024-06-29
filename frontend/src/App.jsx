import React from 'react'
import Home from './home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './contact/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App