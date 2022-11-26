import React from 'react';
import About from './components/About';
import Navbar from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
      <About></About>
      </main>
      <Projects></Projects>
      
    </div>
  );
}

export default App;
