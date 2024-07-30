import { useState } from 'react';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home1 from './pages/Home1';

function App() {
  

  return (
    <>
    <div className='flex'>
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home1 />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
