// src/App.js
import React from 'react';
import Box from './components/Box';
import Navbar from './components/Navbar';

function App() {
  return (
     <div>
      <Navbar />
      <div className="container mx-auto flex items-center justify-between">
      <h1 className='container text-center text-4xl font-semibold text-white'>News</h1>

      </div>
      <Box />
      </div>

  );
}

export default App;
