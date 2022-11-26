import React from 'react';
import About from './components/About';
import Navbar from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
      <About></About>
      </main>
      <Projects></Projects>
      <Resume></Resume>
      
      
    </div>
  );
}

export default App;
