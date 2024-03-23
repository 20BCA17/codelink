import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import Topheader from './pages/Topheader.tsx'
import Try from './pages/Try.tsx'
import Addproduct from './Crud/Addproduct.js'
import store from './Redux/Store.tsx'
import Myproduc from './Crud/Myproduc.tsx'
import Book from './pages/Book.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />

    <Route path="/Topheader" element={<Topheader />} />

    <Route path="/Try" element={<Try />} />
    <Route path="/Addproduct" element={<Addproduct />} />
    <Route path="/Myproduc" element={<Myproduc />} />
    <Route path="/Book" element={<Book />} />

    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
