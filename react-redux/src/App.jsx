import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import List from './Component/List';
import Home from './Component/Home';
import { Counter } from './Redux/Counter';
import Reg from './Formik_yup/Reg';
import FormValidation from './validation/FormValidation';


function App() {
  return (
    <Router>
      
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/List' element={<List />} />
      <Route path='/Counter' element={<Counter />} />
      <Route path='/Reg' element={<Reg />} />
      <Route path='/FormValidation' element={<FormValidation />} />


      </Routes>
    </Router>
  )
}

export default App
