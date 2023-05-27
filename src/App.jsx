import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Courses from './components/Courses';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
    </div>
  )
}

export default App
