import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import List from './Component/List';
function App() {
  return (
    <Router>
      
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/List' element={<List />} />
      </Routes>
    </Router>
  )
}

export default App
