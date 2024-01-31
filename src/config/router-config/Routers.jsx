import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../../Layout/Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Footer from "../../Layout/Footer/Footer";
import About from "../../pages/About/About";
import Services from '../../pages/Services/Services';

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={[<Navbar />, <Home />, <Footer />]}/>
            <Route path='/about' element={[<Navbar />, <About/>, <Footer />]}/>
            <Route path='/services' element={[<Navbar />, <Services />, <Footer />]} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers