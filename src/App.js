import React from 'react'
import "./App.css"
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <Projects />
        <Testimonials />
        <Blog />
        <About />
      </main>
    </>
  )
}

export default App