import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import About from './components/About';
import Navbar from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume'
import Contact from './components/Contact Me';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
      <About></About>
      </main>
      <Projects></Projects>
      <Contact></Contact>
      <Resume></Resume>

      
    </div>
  );
}

export default App;
