import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Drm from '../pages/Drm'
import Uiux from '../pages/Uiux'
import Eticaret from '../pages/Eticaret'
import Footer from '../components/Footer'
import WebDevelopment from '../pages/WebDevelopment'
import WebDesign from '../pages/WebDesign'
import Ai from '../pages/Ai'
import DigitalTransformation from '../pages/DigitalTransformation'
import MobilApp from '../pages/MobilApp'
import GetaQuote from '../pages/GetaQuote'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DigitalTransformation' element={<DigitalTransformation/>} />
        <Route path='/DigitalRightsManagement' element={<Drm />} />
        <Route path='/MobilApp' element={<MobilApp />} />
        <Route path='/Ui&Ux' element={<Uiux />} />
        <Route path='/WebDesign' element={<WebDesign/>} />
        <Route path='/WebDevelopment' element={<WebDevelopment />} />
        <Route path='/AI' element={<Ai />} />
        <Route path='/Eticaret' element={<Eticaret />} />
        <Route path='/HowCanWeAssistYou' element={<GetaQuote />} />
        <Route path='*' element={<Home />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default AppRouter
